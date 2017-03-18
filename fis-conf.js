fis
  .set('project.files', [ // 处理的文件类型
    '**.{css,less,html,php,js,png,jpg,gif,ico,eot,svg,ttf,woff,woff2,webp}'
  ])
  .set('project.ignore', [ // 忽略的文件
    'package.json',
    'node_modules/**',

    'bower.json',
    'bower_components/**',

    'inc/**',

    '**/_*.*',
    '_output',   //不使用用

    'fis-conf.js',
    'sftp-config.json'
  ])
  .set('project.ext', {
    less: 'css',
    sass: 'css'
  });

fis
  .match(/\.less$/i, {
    rExt: '.css', // from .less to .css
    parser: fis.plugin('less')
  }).match(/([^\/\\]+\.(css|less))$/i, {
    release: 'css/$1',
    postprocessor: fis.plugin('autoprefixer')
  });