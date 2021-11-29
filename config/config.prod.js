"use strict";

// 生产环境
module.exports = () => {
  const config = {};
  config.test = "test-prod";
  return config;
};
