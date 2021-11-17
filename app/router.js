'use strict';


const requireContext = require('require-context');
const contexts = requireContext('../../app/controller', true, /\.js$/);
console.log('123123 contexts : ', contexts);

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
};
