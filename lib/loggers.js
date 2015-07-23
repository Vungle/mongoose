var winston = require('winston');

var loggers = (function() {
  var env = process.env.NODE_ENV;
  var log_dir = env == "production" ? '/mnt2/mongoose' : '/tmp';
  var i = 0;

  return {
    writeLogger : new (winston.Logger)({
      transports: [
        new (winston.transports.File)({
          name: 'write-logger-file',
          filename: log_dir + '/WriteLoggerInfo.log',
          json: true,
          level: 'info',
        })
      ]
    }),
  }
})();

module.exports = {
  writeLogger : loggers.writeLogger,
}
