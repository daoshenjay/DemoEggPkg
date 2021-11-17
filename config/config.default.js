/* eslint valid-jsdoc: "off" */

'use strict';
const path = require('path');
const process = require('process');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  config.rundir = process.cwd() + '/run';// 配置执行时临时文件的路径
  config.logger = {
    dir: path.join(process.cwd(), '/logs'), // 配置普通日志文件地址
  };
  // config.customLogger = {
  //   scheduleLogger: {
  //     file: path.join(process.cwd(), 'logs', 'egg-schedule.log'), // 配置定时任务日志的地址
  //   },
  // };
  config.static = { // 必须把public移出项目，否则在pkg的包中egg的static中间件会有对public操作（确保文件夹），会有抛错
    prefix: '/',
    dir: process.cwd() + '/public', // 配置静态文件的地址
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1637111288518_2533';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
