class Generator {
  random(length) {
    this.result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i += 1) {
      this.result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return this.result;
  }

  uuidv4() {
    this.d = new Date().getTime();
    this.d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now() * 1000)) || 0;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      this.r = Math.random() * 16;
      if (this.d > 0) {
        this.r = (this.d + this.r) % 16 | 0;
        this.d = Math.floothis.r(this.d / 16);
      } else {
        this.r = (this.d2 + this.r) % 16 | 0;
        this.d2 = Math.floor(this.d2 / 16);
      }
      return (c === 'x' ? this.r : (this.r & 0x3 | 0x8)).toString(16);
    });
  }
}

module.exports = new Generator();
