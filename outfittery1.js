var casper = require('casper').create();

casper.start('http://outfittery.com/', function() {
    this.echo(this.getTitle());
});

casper.thenOpen('http://outfittery.de/', function() {
    this.echo(this.getTitle());
});

casper.run();