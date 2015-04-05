#Demo of cleaned casperjs/coffee

x = require('casper').selectXPath

listen = (el, event, handler) ->
  if el.addEventListener
    el.addEventListener event, handler
  else
    el.attachEvent 'on' + event, ->
      handler.call el

casper.options.viewportSize =
  width: 1542
  height: 882
casper.on 'page.error', (msg, trace) ->
  @echo 'Error: ' + msg, 'ERROR'
  i = 0
  while i < trace.length
    step = trace[i]
    @echo '   ' + step.file + ' (line ' + step.line + ')', 'ERROR'
    i++
  return
casper.test.begin 'Resurrectio test', (test) ->
  casper.start 'https://www.outfittery.com/'
  casper.waitForSelector x('//*[normalize-space(text())=concat(\'Let\',"\'",\'s go\')]'), (`function success() {
  test.assertExists(x('//*[normalize-space(text())=concat(\'Let\',"\'",\'s go\')]'));
}`), (`function fail() {
  test.assertExists(x('//*[normalize-space(text())=concat(\'Let\',"\'",\'s go\')]'));
}`)
  casper.then ->
    test.assertExists x('//a[normalize-space(text())=concat(\'Let\',"\'",\'s go\') and @href=\'/funnels/start\']')
    return
  casper.waitForSelector x('//*[normalize-space(text())=concat(\'LET\',"\'",\'S GO\')]'), (`function success() {
  test.assertExists(x('//*[normalize-space(text())=concat(\'LET\',"\'",\'S GO\')]'));
}`), (`function fail() {
  test.assertExists(x('//*[normalize-space(text())=concat(\'LET\',"\'",\'S GO\')]'));
}`)
  casper.then ->
    test.assertExists x('//a[normalize-space(text())=concat(\'LET\',"\'",\'S GO\') and @href=\'/funnels/start\']')
    return
  casper.then ->
    test.comment 'home page www.outfittery.com validate the 3 displayed lests go buttons'
    return
  casper.waitForSelector '.mb-sm.container', (`function success() {
  test.assertExists('.mb-sm.container');
  this.click('.mb-sm.container');
}`), (`function fail() {
  test.assertExists('.mb-sm.container');
}`)
  casper.then ->
    test.comment 'Now verify country selector drop list'
    return
  casper.waitForSelector '.hero.mt-nav.start.teaser.landingpage', (`function success() {
  test.assertExists('.hero.mt-nav.start.teaser.landingpage');
  this.click('.hero.mt-nav.start.teaser.landingpage');
}`), (`function fail() {
  test.assertExists('.hero.mt-nav.start.teaser.landingpage');
}`)
  casper.waitForSelector '.dropdown.nav.navbar-nav.navbar-right.hidden-xs.hidden-sm.pl-md.mr.neg .small-ico-de.ico-mr', (`function success() {
  test.assertExists('.dropdown.nav.navbar-nav.navbar-right.hidden-xs.hidden-sm.pl-md.mr.neg .small-ico-de.ico-mr');
  this.click('.dropdown.nav.navbar-nav.navbar-right.hidden-xs.hidden-sm.pl-md.mr.neg .small-ico-de.ico-mr');
}`), (`function fail() {
  test.assertExists('.dropdown.nav.navbar-nav.navbar-right.hidden-xs.hidden-sm.pl-md.mr.neg .small-ico-de.ico-mr');
}`)
  casper.waitForSelector x('//a[normalize-space(text())=\'English\']'), (`function success() {
  test.assertExists(x('//a[normalize-space(text())=\'English\']'));
  this.click(x('//a[normalize-space(text())=\'English\']'));
}`), (`function fail() {
  test.assertExists(x('//a[normalize-space(text())=\'English\']'));
}`)
  casper.waitForSelector '.dropdown.nav.navbar-nav.navbar-right.hidden-xs.hidden-sm.pl-md.mr.neg', (`function success() {
  test.assertExists('.dropdown.nav.navbar-nav.navbar-right.hidden-xs.hidden-sm.pl-md.mr.neg');
  this.click('.dropdown.nav.navbar-nav.navbar-right.hidden-xs.hidden-sm.pl-md.mr.neg');
}`), (`function fail() {
  test.assertExists('.dropdown.nav.navbar-nav.navbar-right.hidden-xs.hidden-sm.pl-md.mr.neg');
}`)
  casper.waitForSelector x('//a[normalize-space(text())=\'Österreich\']'), (`function success() {
  test.assertExists(x('//a[normalize-space(text())=\'\xD6sterreich\']'));
  this.click(x('//a[normalize-space(text())=\'\xD6sterreich\']'));
}`), (`function fail() {
  test.assertExists(x('//a[normalize-space(text())=\'\xD6sterreich\']'));
}`)
  casper.waitForSelector x('//a[normalize-space(text())=\'English\']'), (`function success() {
  test.assertExists(x('//a[normalize-space(text())=\'English\']'));
  this.click(x('//a[normalize-space(text())=\'English\']'));
}`), (`function fail() {
  test.assertExists(x('//a[normalize-space(text())=\'English\']'));
}`)
  casper.waitForSelector x('//a[normalize-space(text())=\'Schweiz\']'), (`function success() {
  test.assertExists(x('//a[normalize-space(text())=\'Schweiz\']'));
  this.click(x('//a[normalize-space(text())=\'Schweiz\']'));
}`), (`function fail() {
  test.assertExists(x('//a[normalize-space(text())=\'Schweiz\']'));
}`)
  casper.waitForSelector x('//a[normalize-space(text())=\'English\']'), (`function success() {
  test.assertExists(x('//a[normalize-space(text())=\'English\']'));
  this.click(x('//a[normalize-space(text())=\'English\']'));
}`), (`function fail() {
  test.assertExists(x('//a[normalize-space(text())=\'English\']'));
}`)
  casper.waitForSelector x('//a[normalize-space(text())=\'Nederland\']'), (`function success() {
  test.assertExists(x('//a[normalize-space(text())=\'Nederland\']'));
  this.click(x('//a[normalize-space(text())=\'Nederland\']'));
}`), (`function fail() {
  test.assertExists(x('//a[normalize-space(text())=\'Nederland\']'));
}`)
  casper.waitForSelector x('//a[normalize-space(text())=\'English\']'), (`function success() {
  test.assertExists(x('//a[normalize-space(text())=\'English\']'));
  this.click(x('//a[normalize-space(text())=\'English\']'));
}`), (`function fail() {
  test.assertExists(x('//a[normalize-space(text())=\'English\']'));
}`)
  casper.waitForSelector '.dropdown.nav.navbar-nav.navbar-right.hidden-xs.hidden-sm.pl-md.mr.neg', (`function success() {
  test.assertExists('.dropdown.nav.navbar-nav.navbar-right.hidden-xs.hidden-sm.pl-md.mr.neg');
  this.click('.dropdown.nav.navbar-nav.navbar-right.hidden-xs.hidden-sm.pl-md.mr.neg');
}`), (`function fail() {
  test.assertExists('.dropdown.nav.navbar-nav.navbar-right.hidden-xs.hidden-sm.pl-md.mr.neg');
}`)
  casper.waitForSelector x('//a[normalize-space(text())=\'België\']'), (`function success() {
  test.assertExists(x('//a[normalize-space(text())=\'Belgi\xEB\']'));
  this.click(x('//a[normalize-space(text())=\'Belgi\xEB\']'));
}`), (`function fail() {
  test.assertExists(x('//a[normalize-space(text())=\'Belgi\xEB\']'));
}`)
  casper.waitForSelector x('//a[normalize-space(text())=\'English\']'), (`function success() {
  test.assertExists(x('//a[normalize-space(text())=\'English\']'));
  this.click(x('//a[normalize-space(text())=\'English\']'));
}`), (`function fail() {
  test.assertExists(x('//a[normalize-space(text())=\'English\']'));
}`)
  casper.waitForSelector x('//a[normalize-space(text())=\'Luxembourg\']'), (`function success() {
  test.assertExists(x('//a[normalize-space(text())=\'Luxembourg\']'));
  this.click(x('//a[normalize-space(text())=\'Luxembourg\']'));
}`), (`function fail() {
  test.assertExists(x('//a[normalize-space(text())=\'Luxembourg\']'));
}`)
  casper.waitForSelector x('//a[normalize-space(text())=\'English\']'), (`function success() {
  test.assertExists(x('//a[normalize-space(text())=\'English\']'));
  this.click(x('//a[normalize-space(text())=\'English\']'));
}`), (`function fail() {
  test.assertExists(x('//a[normalize-space(text())=\'English\']'));
}`)
  casper.waitForSelector '.dropdown.nav.navbar-nav.navbar-right.hidden-xs.hidden-sm.pl-md.mr.neg', (`function success() {
  test.assertExists('.dropdown.nav.navbar-nav.navbar-right.hidden-xs.hidden-sm.pl-md.mr.neg');
  this.click('.dropdown.nav.navbar-nav.navbar-right.hidden-xs.hidden-sm.pl-md.mr.neg');
}`), (`function fail() {
  test.assertExists('.dropdown.nav.navbar-nav.navbar-right.hidden-xs.hidden-sm.pl-md.mr.neg');
}`)
  casper.waitForSelector x('//a[normalize-space(text())=\'Sverige\']'), (`function success() {
  test.assertExists(x('//a[normalize-space(text())=\'Sverige\']'));
  this.click(x('//a[normalize-space(text())=\'Sverige\']'));
}`), (`function fail() {
  test.assertExists(x('//a[normalize-space(text())=\'Sverige\']'));
}`)
  casper.waitForSelector x('//a[normalize-space(text())=\'English\']'), (`function success() {
  test.assertExists(x('//a[normalize-space(text())=\'English\']'));
  this.click(x('//a[normalize-space(text())=\'English\']'));
}`), (`function fail() {
  test.assertExists(x('//a[normalize-space(text())=\'English\']'));
}`)
  casper.waitForSelector '.lead.mt.neg', (`function success() {
  test.assertExists('.lead.mt.neg');
  this.click('.lead.mt.neg');
}`), (`function fail() {
  test.assertExists('.lead.mt.neg');
}`)
  casper.waitForSelector x('//a[normalize-space(text())=\'Danmark\']'), (`function success() {
  test.assertExists(x('//a[normalize-space(text())=\'Danmark\']'));
  this.click(x('//a[normalize-space(text())=\'Danmark\']'));
}`), (`function fail() {
  test.assertExists(x('//a[normalize-space(text())=\'Danmark\']'));
}`)
  casper.waitForSelector x('//a[normalize-space(text())=\'English\']'), (`function success() {
  test.assertExists(x('//a[normalize-space(text())=\'English\']'));
  this.click(x('//a[normalize-space(text())=\'English\']'));
}`), (`function fail() {
  test.assertExists(x('//a[normalize-space(text())=\'English\']'));
}`)
  casper.waitForSelector '.dropdown.nav.navbar-nav.navbar-right.hidden-xs.hidden-sm.pl-md.mr.neg', (`function success() {
  test.assertExists('.dropdown.nav.navbar-nav.navbar-right.hidden-xs.hidden-sm.pl-md.mr.neg');
  this.click('.dropdown.nav.navbar-nav.navbar-right.hidden-xs.hidden-sm.pl-md.mr.neg');
}`), (`function fail() {
  test.assertExists('.dropdown.nav.navbar-nav.navbar-right.hidden-xs.hidden-sm.pl-md.mr.neg');
}`)
  casper.waitForSelector x('//*[normalize-space(text())=\'Deutschland\']'), (`function success() {
  test.assertExists(x('//*[normalize-space(text())=\'Deutschland\']'));
}`), (`function fail() {
  test.assertExists(x('//*[normalize-space(text())=\'Deutschland\']'));
}`)
  casper.then ->
    test.assertExists x('//a[normalize-space(text())=\'Deutschland\' and @href=\'/common/geoPageConfirm?_ga=1.75410386.1908993097.1427882617\']')
    return
  casper.waitForSelector x('//*[normalize-space(text())=\'Österreich\']'), (`function success() {
  test.assertExists(x('//*[normalize-space(text())=\'\xD6sterreich\']'));
}`), (`function fail() {
  test.assertExists(x('//*[normalize-space(text())=\'\xD6sterreich\']'));
}`)
  casper.then ->
    test.assertExists x('//a[normalize-space(text())=\'Österreich\' and @href=\'/common/geoPageConfirm?_ga=1.75410386.1908993097.1427882617\']')
    return
  casper.waitForSelector x('//*[normalize-space(text())=\'Schweiz\']'), (`function success() {
  test.assertExists(x('//*[normalize-space(text())=\'Schweiz\']'));
}`), (`function fail() {
  test.assertExists(x('//*[normalize-space(text())=\'Schweiz\']'));
}`)
  casper.then ->
    test.assertExists x('//a[normalize-space(text())=\'Schweiz\' and @href=\'/common/geoPageConfirm?_ga=1.75410386.1908993097.1427882617\']')
    return
  casper.waitForSelector x('//*[normalize-space(text())=\'Nederland\']'), (`function success() {
  test.assertExists(x('//*[normalize-space(text())=\'Nederland\']'));
}`), (`function fail() {
  test.assertExists(x('//*[normalize-space(text())=\'Nederland\']'));
}`)
  casper.waitForSelector '.dropdown.nav.navbar-nav.navbar-right.hidden-xs.hidden-sm.pl-md.mr.neg', (`function success() {
  test.assertExists('.dropdown.nav.navbar-nav.navbar-right.hidden-xs.hidden-sm.pl-md.mr.neg');
  this.click('.dropdown.nav.navbar-nav.navbar-right.hidden-xs.hidden-sm.pl-md.mr.neg');
}`), (`function fail() {
  test.assertExists('.dropdown.nav.navbar-nav.navbar-right.hidden-xs.hidden-sm.pl-md.mr.neg');
}`)
  casper.then ->
    test.assertExists x('//a[normalize-space(text())=\'Nederland\' and @href=\'/common/geoPageConfirm?_ga=1.59040493.1908993097.1427882617\']')
    return
  casper.waitForSelector x('//*[normalize-space(text())=\'België\']'), (`function success() {
  test.assertExists(x('//*[normalize-space(text())=\'Belgi\xEB\']'));
}`), (`function fail() {
  test.assertExists(x('//*[normalize-space(text())=\'Belgi\xEB\']'));
}`)
  casper.then ->
    test.assertExists x('//a[normalize-space(text())=\'België\' and @href=\'/common/geoPageConfirm?_ga=1.59040493.1908993097.1427882617\']')
    return
  casper.waitForSelector '.dropdown.nav.navbar-nav.navbar-right.hidden-xs.hidden-sm.pl-md.mr.neg', (`function success() {
  test.assertExists('.dropdown.nav.navbar-nav.navbar-right.hidden-xs.hidden-sm.pl-md.mr.neg');
  this.click('.dropdown.nav.navbar-nav.navbar-right.hidden-xs.hidden-sm.pl-md.mr.neg');
}`), (`function fail() {
  test.assertExists('.dropdown.nav.navbar-nav.navbar-right.hidden-xs.hidden-sm.pl-md.mr.neg');
}`)
  casper.waitForSelector x('//*[normalize-space(text())=\'Luxembourg\']'), (`function success() {
  test.assertExists(x('//*[normalize-space(text())=\'Luxembourg\']'));
}`), (`function fail() {
  test.assertExists(x('//*[normalize-space(text())=\'Luxembourg\']'));
}`)
  casper.then ->
    test.assertExists x('//a[normalize-space(text())=\'Luxembourg\' and @href=\'/common/geoPageConfirm?_ga=1.59040493.1908993097.1427882617\']')
    return
  casper.waitForSelector '.nav.navbar-nav.navbar-right.uppercase li:nth-child(5)', (`function success() {
  test.assertExists('.nav.navbar-nav.navbar-right.uppercase li:nth-child(5)');
  this.click('.nav.navbar-nav.navbar-right.uppercase li:nth-child(5)');
}`), (`function fail() {
  test.assertExists('.nav.navbar-nav.navbar-right.uppercase li:nth-child(5)');
}`)
  casper.waitForSelector '.dropdown.nav.navbar-nav.navbar-right.hidden-xs.hidden-sm.pl-md.mr.neg', (`function success() {
  test.assertExists('.dropdown.nav.navbar-nav.navbar-right.hidden-xs.hidden-sm.pl-md.mr.neg');
  this.click('.dropdown.nav.navbar-nav.navbar-right.hidden-xs.hidden-sm.pl-md.mr.neg');
}`), (`function fail() {
  test.assertExists('.dropdown.nav.navbar-nav.navbar-right.hidden-xs.hidden-sm.pl-md.mr.neg');
}`)
  casper.waitForSelector x('//*[normalize-space(text())=\'Sverige\']'), (`function success() {
  test.assertExists(x('//*[normalize-space(text())=\'Sverige\']'));
}`), (`function fail() {
  test.assertExists(x('//*[normalize-space(text())=\'Sverige\']'));
}`)
  casper.then ->
    test.assertExists x('//a[normalize-space(text())=\'Sverige\' and @href=\'/common/geoPageConfirm?_ga=1.59040493.1908993097.1427882617\']')
    return
  casper.waitForSelector x('//*[normalize-space(text())=\'Danmark\']'), (`function success() {
  test.assertExists(x('//*[normalize-space(text())=\'Danmark\']'));
}`), (`function fail() {
  test.assertExists(x('//*[normalize-space(text())=\'Danmark\']'));
}`)
  casper.then ->
    test.assertExists x('//a[normalize-space(text())=\'Danmark\' and @href=\'/common/geoPageConfirm?_ga=1.59040493.1908993097.1427882617\']')
    return
  casper.wait 1000
  casper.then ->
    @captureSelector 'screenshot1.png', 'html'
    return
  casper.then ->
    test.assertTitle ''
    return
  casper.then ->
    test.comment 'checked the droplist test and links.  '
    return
  casper.waitForSelector '.hero.mt-nav.start.teaser.landingpage', (`function success() {
  test.assertExists('.hero.mt-nav.start.teaser.landingpage');
  this.click('.hero.mt-nav.start.teaser.landingpage');
}`), (`function fail() {
  test.assertExists('.hero.mt-nav.start.teaser.landingpage');
}`)
  casper.then ->
    test.assertUrlMatch /^https:\/\/www\.outfittery\.com\/$/
    return
  casper.then ->
    test.comment 'verify the page location'
    return
  casper.waitForSelector '.hero.mt-nav.start.teaser.landingpage', (`function success() {
  test.assertExists('.hero.mt-nav.start.teaser.landingpage');
  this.click('.hero.mt-nav.start.teaser.landingpage');
}`), (`function fail() {
  test.assertExists('.hero.mt-nav.start.teaser.landingpage');
}`)
  casper.then ->
    test.assertTitle ''
    return
  casper.then ->
    test.comment 'verify the page title'
    return
  casper.waitForSelector '.hero.mt-nav.start.teaser.landingpage', (`function success() {
  test.assertExists('.hero.mt-nav.start.teaser.landingpage');
  this.click('.hero.mt-nav.start.teaser.landingpage');
}`), (`function fail() {
  test.assertExists('.hero.mt-nav.start.teaser.landingpage');
}`)
  casper.waitForSelector x('//*[normalize-space(text())=\'OUTFITTERY\']'), (`function success() {
  test.assertExists(x('//*[normalize-space(text())=\'OUTFITTERY\']'));
}`), (`function fail() {
  test.assertExists(x('//*[normalize-space(text())=\'OUTFITTERY\']'));
}`)
  casper.then ->
    test.assertExists x('//a[normalize-space(text())=\'OUTFITTERY\' and @href=\'/#fb-root\']')
    return
  casper.waitForSelector 'div > div', (`function success() {
  test.assertExists('div > div');
  this.click('div > div');
}`), (`function fail() {
  test.assertExists('div > div');
}`)
  casper.then ->
    test.comment 'verify upper left outfittery graphic textx content and link'
    return
  casper.waitForSelector '.hero.mt-nav.start.teaser.landingpage', (`function success() {
  test.assertExists('.hero.mt-nav.start.teaser.landingpage');
  this.click('.hero.mt-nav.start.teaser.landingpage');
}`), (`function fail() {
  test.assertExists('.hero.mt-nav.start.teaser.landingpage');
}`)
  casper.waitForSelector x('//*[normalize-space(text())=\'How it works\']'), (`function success() {
  test.assertExists(x('//*[normalize-space(text())=\'How it works\']'));
}`), (`function fail() {
  test.assertExists(x('//*[normalize-space(text())=\'How it works\']'));
}`)
  casper.then ->
    test.assertExists x('//a[normalize-space(text())=\'How it works\' and @href=\'/#hiw\']')
    return
  casper.then ->
    test.comment 'Herify how it works text in eng'
    test.comment 'verify the how it works link'
    return
  casper.waitForSelector '.hero.mt-nav.start.teaser.landingpage', (`function success() {
  test.assertExists('.hero.mt-nav.start.teaser.landingpage');
  this.click('.hero.mt-nav.start.teaser.landingpage');
}`), (`function fail() {
  test.assertExists('.hero.mt-nav.start.teaser.landingpage');
}`)
  casper.waitForSelector x('//*[normalize-space(text())=\'Outfits\']'), (`function success() {
  test.assertExists(x('//*[normalize-space(text())=\'Outfits\']'));
}`), (`function fail() {
  test.assertExists(x('//*[normalize-space(text())=\'Outfits\']'));
}`)
  casper.then ->
    test.assertExists x('//a[normalize-space(text())=\'Outfits\' and @href=\'/#outfits\']')
    return
  casper.waitForSelector '.hero.mt-nav.start.teaser.landingpage', (`function success() {
  test.assertExists('.hero.mt-nav.start.teaser.landingpage');
  this.click('.hero.mt-nav.start.teaser.landingpage');
}`), (`function fail() {
  test.assertExists('.hero.mt-nav.start.teaser.landingpage');
}`)
  casper.then ->
    test.comment 'Verify the outfits text eng andf href'
    return
  casper.waitForSelector '.hero.mt-nav.start.teaser.landingpage', (`function success() {
  test.assertExists('.hero.mt-nav.start.teaser.landingpage');
  this.click('.hero.mt-nav.start.teaser.landingpage');
}`), (`function fail() {
  test.assertExists('.hero.mt-nav.start.teaser.landingpage');
}`)
  casper.waitForSelector x('//*[normalize-space(text())=\'Pricing\']'), (`function success() {
  test.assertExists(x('//*[normalize-space(text())=\'Pricing\']'));
}`), (`function fail() {
  test.assertExists(x('//*[normalize-space(text())=\'Pricing\']'));
}`)
  casper.then ->
    test.assertExists x('//a[normalize-space(text())=\'Pricing\' and @href=\'/#pricing\']')
    return
  casper.then ->
    test.comment 'verify pricing href andf text EN'
    return
  casper.waitForSelector '.hero.mt-nav.start.teaser.landingpage', (`function success() {
  test.assertExists('.hero.mt-nav.start.teaser.landingpage');
  this.click('.hero.mt-nav.start.teaser.landingpage');
}`), (`function fail() {
  test.assertExists('.hero.mt-nav.start.teaser.landingpage');
}`)
  casper.waitForSelector x('//*[normalize-space(text())=\'Gift Voucher\']'), (`function success() {
  test.assertExists(x('//*[normalize-space(text())=\'Gift Voucher\']'));
}`), (`function fail() {
  test.assertExists(x('//*[normalize-space(text())=\'Gift Voucher\']'));
}`)
  casper.waitForSelector x('//*[normalize-space(text())=\'Gift Voucher\']'), (`function success() {
  test.assertExists(x('//*[normalize-space(text())=\'Gift Voucher\']'));
}`), (`function fail() {
  test.assertExists(x('//*[normalize-space(text())=\'Gift Voucher\']'));
}`)
  casper.then ->
    test.assertExists x('//a[normalize-space(text())=\'Gift Voucher\' and @href=\'/vouchers/create\']')
    return
  casper.waitForSelector '.hero.mt-nav.start.teaser.landingpage', (`function success() {
  test.assertExists('.hero.mt-nav.start.teaser.landingpage');
  this.click('.hero.mt-nav.start.teaser.landingpage');
}`), (`function fail() {
  test.assertExists('.hero.mt-nav.start.teaser.landingpage');
}`)
  casper.then ->
    test.comment 'gift voucher verify heref and text EN'
    return
  casper.waitForSelector '.hero.mt-nav.start.teaser.landingpage', (`function success() {
  test.assertExists('.hero.mt-nav.start.teaser.landingpage');
  this.click('.hero.mt-nav.start.teaser.landingpage');
}`), (`function fail() {
  test.assertExists('.hero.mt-nav.start.teaser.landingpage');
}`)
  casper.waitForSelector x('//img[@src=\'/assets/icons/devices.jpg\']'), (`function success() {
  test.assertExists(x('//img[@src=\'/assets/icons/devices.jpg\']'));
}`), (`function fail() {
  test.assertExists(x('//img[@src=\'/assets/icons/devices.jpg\']'));
}`)
  casper.then ->
    test.comment 'Short online questionaire image hrefverify'
    return
  casper.waitForSelector x('//a[@href=\'/howitworks\']'), (`function success() {
  test.assertExists(x('//a[@href=\'/howitworks\']'));
  this.click(x('//a[@href=\'/howitworks\']'));
}`), (`function fail() {
  test.assertExists(x('//a[@href=\'/howitworks\']'));
}`)
  casper.waitForSelector x('//img[@src=\'/assets/icons/suit_1.jpg\']'), (`function success() {
  test.assertExists(x('//img[@src=\'/assets/icons/suit_1.jpg\']'));
}`), (`function fail() {
  test.assertExists(x('//img[@src=\'/assets/icons/suit_1.jpg\']'));
}`)
  casper.then ->
    test.comment 'Free stylke consult ing source EN'
    return
  casper.waitForSelector '#hiw .col-sm-4.col-xs-12.text-center:nth-child(2)', (`function success() {
  test.assertExists('#hiw .col-sm-4.col-xs-12.text-center:nth-child(2)');
  this.click('#hiw .col-sm-4.col-xs-12.text-center:nth-child(2)');
}`), (`function fail() {
  test.assertExists('#hiw .col-sm-4.col-xs-12.text-center:nth-child(2)');
}`)
  casper.waitForSelector x('//img[@src=\'/assets/icons/box_1.jpg\']'), (`function success() {
  test.assertExists(x('//img[@src=\'/assets/icons/box_1.jpg\']'));
}`), (`function fail() {
  test.assertExists(x('//img[@src=\'/assets/icons/box_1.jpg\']'));
}`)
  casper.then ->
    test.comment 'Great outfits check image source'
    return
  casper.waitForSelector '#hiw .col-sm-4.col-xs-12.text-center:nth-child(2) p', (`function success() {
  test.assertExists('#hiw .col-sm-4.col-xs-12.text-center:nth-child(2) p');
  this.click('#hiw .col-sm-4.col-xs-12.text-center:nth-child(2) p');
}`), (`function fail() {
  test.assertExists('#hiw .col-sm-4.col-xs-12.text-center:nth-child(2) p');
}`)
  casper.then ->
    test.assertUrlMatch /^https:\/\/www\.outfittery\.com\/$/
    return
  casper.then ->
    test.assertTitle ''
    return
  casper.wait 1000
  casper.then ->
    @captureSelector 'screenshot2.png', 'html'
    return
  casper.then ->
    test.comment 'Leanrn more about your syyle experet all en'
    return
  casper.waitForSelector '', (`function success() {
  test.assertExists('');
  this.click('');
}`), (`function fail() {
  test.assertExists('');
}`)
  casper.waitForSelector '', (`function success() {
  test.assertExists('');
  this.click('');
}`), (`function fail() {
  test.assertExists('');
}`)
  casper.run ->
    test.done()
    return
  return

# ---
# generated by js2coffee 2.0.3