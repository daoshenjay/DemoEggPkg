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

  config.rundir = process.cwd() + '/run';// ����ִ��ʱ��ʱ�ļ���·��
  config.logger = {
    dir: path.join(process.cwd(), '/logs'), // ������ͨ��־�ļ���ַ
  };
  // config.customLogger = {
  //   scheduleLogger: {
  //     file: path.join(process.cwd(), 'logs', 'egg-schedule.log'), // ���ö�ʱ������־�ĵ�ַ
  //   },
  // };
  config.static = { // �����public�Ƴ���Ŀ��������pkg�İ���egg��static�м�����ж�public������ȷ���ļ��У��������״�
    prefix: '/',
    dir: process.cwd() + '/public', // ���þ�̬�ļ��ĵ�ַ
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
