// @see http://stackoverflow.com/questions/6333814/how-does-the-paste-image-from-clipboard-functionality-work-in-gmail-and-google-c
document.onpaste = function(event) {
  var items = Array.from((event.clipboardData || event.originalEvent.clipboardData).items);
  items.some(function (item) {
    if (item.kind === 'file' && item.type === 'image/png') {
      var reader = new FileReader();
      reader.onload = function(event) {
        var img = document.createElement('img');
        img.onload = function () {          
          var canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          var context = canvas.getContext('2d');
          context.drawImage(img, 0, 0, img.width, img.height);
          var frame = context.getImageData(0, 0, img.width, img.height);
          try {
            var text = QrReader.decode(frame);
            document.querySelector('h1').innerText = text;
          } catch(ex) {
            console.log(ex)
          }
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(item.getAsFile());
      return true;
    }
  });
};
