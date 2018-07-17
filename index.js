var casper = require('casper').create({
  onPageInitialized: function (page) {
    page.evaluate(function () {
      window.screen = {
        width: 1920,
        height: 1080
      };
    });
  }
});

casper.start('https://www.karvymfs.com/karvyservice/');

casper.then(function () {
  try {
    casper.sendKeys('#txtEmail', 'Hello, world!');
    casper.sendKeys('#txtPassword', 'Hello, world!');
    casper.sendKeys('#txtRePassword', 'Hello, world!');
    this.capture('1.png');
    this.click('#btnGenerate');
    this.capture('2.png');
  } catch (e) {
    this.echo('e : ', e);
    return e;
  }
})

casper.run(function () {
  this.echo('EXIT');
  casper.exit();
});