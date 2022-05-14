
var config = {
  presets: [
    ['@babel/preset-env']
  ]
};

// 执行 npm run test 时启用插件 
if (process.argv[2].indexOf('test') >= 0) { 
  config.plugins = [
    ["./src/index.js"]
  ]
}

module.exports = config;