/* eslint-disable strict */
//  用于自定义启动时的初始化工作，在自定义生命周期函数中不建议做太耗时的操作，框架会有启动的超时检测
const fs = require("fs");
const path = require("path");

// app.js
class AppBootHook {
  constructor(app) {
    this.app = app;
  }

  configWillLoad() {
    // 此时 config 文件已经被读取并合并，但是还并未生效
    // 这是应用层修改配置的最后时机
    // 注意：此函数只支持同步调用
    //   // 例如：参数中的密码是加密的，在此处进行解密
    //   this.app.config.mysql.password = decrypt(this.app.config.mysql.password);
    //   // 例如：插入一个中间件到框架的 coreMiddleware 之间
    //   const statusIdx = this.app.config.coreMiddleware.indexOf('status');
    //   this.app.config.coreMiddleware.splice(statusIdx + 1, 0, 'limit');
    // 配置打包后的exe文件的外部配置
  }

  async didLoad() {
    // 所有的配置已经加载完毕
    // 可以用来加载应用自定义的文件，启动自定义的服务
    //   // 例如：创建自定义应用的示例
    //   this.app.queue = new Queue(this.app.config.queue);
    //   await this.app.queue.init();
    //   // 例如：加载自定义的目录,用于加载一个目录下的文件到 app
    //   this.app.loader.loadToContext(path.join(__dirname, 'app/tasks'), 'tasks', {
    //     fieldClass: 'tasksClasses',
    //   });
  }

  async willReady() {
    // 所有的插件都已启动完毕，但是应用整体还未 ready
    // 可以做一些数据初始化等操作，这些操作成功才会启动应用
    // 例如：从数据库加载数据到内存缓存
    //   this.app.cacheData = await this.app.model.query(QUERY_CACHE_SQL);
  }

  async didReady() {
    // 应用已经启动完毕
    //   const ctx = await this.app.createAnonymousContext();
    //   await ctx.service.Biz.request();
  }

  async serverDidReady() {
    // http / https server 已启动，开始接受外部请求
    // 此时可以从 app.server 拿到 server 的实例

    //   this.app.server.on('timeout', socket => {
    //     // handle socket timeout
    //   });

    // 加载文件监听模块,监听模块有点问题，它会覆盖手动写入数据库的文件，所以，先停用
    // 2021-01-14: 因为文件监听有时候会慢于文件上传，不能控制，决定弃用
    // const Chokidar = require('./app/utils/watchFiles');
    // const chokidar = new Chokidar(this.app);
    // await chokidar.startWatch();

    this.app.logger.info("this.app.config.env", this.app.config.env);
    console.log("config.test : ", this.app.config.test);
  }
}

module.exports = AppBootHook;
