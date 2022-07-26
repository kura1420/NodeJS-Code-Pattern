const path = require('path');
const log = require('../config/log');

class Logger {
  constructor() {
    this.path = path;
    this.log = log;
  }

  write(thisfile, level, message) {
    const filename = this.path.resolve(thisfile);

    switch (level) {
      case 'error':
        this.log.error({
          label: filename,
          message,
        });
        break;

      default:
        break;
    }
  }
}

module.exports = new Logger();
