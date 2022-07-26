class DateFormatter {
  constructor() {
    this.date = new Date().toLocaleString({
      timeZone: process.env.TZ,
    });
  }

  today() {
    const today = this.date.slice(0, 10).replace(/\//g, '-');

    return today.replace(',', '');
  }

  timeStamp() {
    return this.date;
  }
}

module.exports = new DateFormatter();
