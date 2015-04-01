/*==============================================================================*/
/* Casper generated Wed Apr 01 2015 13:58:46 GMT+0200 (W. Europe Daylight Time) */
/*==============================================================================*/

var x = require('casper').selectXPath;
ERROR: the recorded sequence does not start with a url openning.
   casper.waitForSelector(".container.text-center",
       function success() {
           test.assertExists(".container.text-center");
           this.click(".container.text-center");
       },
       function fail() {
           test.assertExists(".container.text-center");
   });
   casper.waitForSelector(x("//a[normalize-space(text())=concat('LET',\"'\",'S GO')]"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())=concat('LET',\"'\",'S GO')]"));
           this.click(x("//a[normalize-space(text())=concat('LET',\"'\",'S GO')]"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())=concat('LET',\"'\",'S GO')]"));
   });
   casper.waitForSelector(".answerButton.mb.selectedHover .overlay.overlay-international",
       function success() {
           test.assertExists(".answerButton.mb.selectedHover .overlay.overlay-international");
           this.click(".answerButton.mb.selectedHover .overlay.overlay-international");
       },
       function fail() {
           test.assertExists(".answerButton.mb.selectedHover .overlay.overlay-international");
   });
   casper.waitForSelector(x("//input[@value='Next' and not(@disabled)]"),
       function success() {
           test.assertExists(x("//input[@value='Next' and not(@disabled)]"));
         },
       function fail() {
           test.assertExists(x("//input[@value='Next' and not(@disabled)]"));
   });
   casper.waitForSelector(x("//input[@value='Next' and @value='Next']"),
       function success() {
           test.assertExists(x("//input[@value='Next' and @value='Next']"));
         },
       function fail() {
           test.assertExists(x("//input[@value='Next' and @value='Next']"));
   });
   casper.waitForSelector(x("//input[@value='Next']"),
       function success() {
           test.assertExists(x("//input[@value='Next']"));
         },
       function fail() {
           test.assertExists(x("//input[@value='Next']"));
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot1.png", "html");
   });
   casper.waitForSelector(x("//input[@value='Next']"),
       function success() {
           test.assertExists(x("//input[@value='Next']"));
         },
       function fail() {
           test.assertExists(x("//input[@value='Next']"));
   });
   casper.waitForSelector(x("//input[@value='Next' and @value='Next']"),
       function success() {
           test.assertExists(x("//input[@value='Next' and @value='Next']"));
         },
       function fail() {
           test.assertExists(x("//input[@value='Next' and @value='Next']"));
   });
   casper.waitForSelector(x("//input[@value='Next' and not(@disabled)]"),
       function success() {
           test.assertExists(x("//input[@value='Next' and not(@disabled)]"));
         },
       function fail() {
           test.assertExists(x("//input[@value='Next' and not(@disabled)]"));
   });
   casper.waitForSelector(x("//input[@value='Next' and @disabled]"),
       function success() {
           test.assertExists(x("//input[@value='Next' and @disabled]"));
         },
       function fail() {
           test.assertExists(x("//input[@value='Next' and @disabled]"));
   });
   casper.waitForSelector("input[type=submit][value='Next']",
       function success() {
           test.assertExists("input[type=submit][value='Next']");
           this.click("input[type=submit][value='Next']");
       },
       function fail() {
           test.assertExists("input[type=submit][value='Next']");
   });
   casper.waitForSelector(x("//input[@value='Next']"),
       function success() {
           test.assertExists(x("//input[@value='Next']"));
         },
       function fail() {
           test.assertExists(x("//input[@value='Next']"));
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.waitForSelector("input[type=submit][value='Next']",
       function success() {
           test.assertExists("input[type=submit][value='Next']");
           this.click("input[type=submit][value='Next']");
       },
       function fail() {
           test.assertExists("input[type=submit][value='Next']");
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot2.png", "html");
   });
   casper.waitForSelector("input[type=submit][value='Next']",
       function success() {
           test.assertExists("input[type=submit][value='Next']");
           this.click("input[type=submit][value='Next']");
       },
       function fail() {
           test.assertExists("input[type=submit][value='Next']");
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.waitForSelector(x("//input[@value='Next']"),
       function success() {
           test.assertExists(x("//input[@value='Next']"));
         },
       function fail() {
           test.assertExists(x("//input[@value='Next']"));
   });
   casper.waitForSelector(x("//input[@value='Next' and @value='Next']"),
       function success() {
           test.assertExists(x("//input[@value='Next' and @value='Next']"));
         },
       function fail() {
           test.assertExists(x("//input[@value='Next' and @value='Next']"));
   });
   casper.waitForSelector("input[type=submit][value='Next']",
       function success() {
           test.assertExists("input[type=submit][value='Next']");
           this.click("input[type=submit][value='Next']");
       },
       function fail() {
           test.assertExists("input[type=submit][value='Next']");
   });
   casper.waitForSelector("#modalNoSelection",
       function success() {
           test.assertExists("#modalNoSelection");
           this.click("#modalNoSelection");
       },
       function fail() {
           test.assertExists("#modalNoSelection");
   });
   casper.waitForSelector("input[type=submit][value='Next']",
       function success() {
           test.assertExists("input[type=submit][value='Next']");
           this.click("input[type=submit][value='Next']");
       },
       function fail() {
           test.assertExists("input[type=submit][value='Next']");
   });
   casper.waitForSelector("input[type=submit][value='Next']",
       function success() {
           test.assertExists("input[type=submit][value='Next']");
           this.click("input[type=submit][value='Next']");
       },
       function fail() {
           test.assertExists("input[type=submit][value='Next']");
   });
   casper.waitForSelector("input[type=submit][value='Next']",
       function success() {
           test.assertExists("input[type=submit][value='Next']");
           this.click("input[type=submit][value='Next']");
       },
       function fail() {
           test.assertExists("input[type=submit][value='Next']");
   });
   casper.waitForSelector("input[type=submit][value='Next']",
       function success() {
           test.assertExists("input[type=submit][value='Next']");
           this.click("input[type=submit][value='Next']");
       },
       function fail() {
           test.assertExists("input[type=submit][value='Next']");
   });
   casper.waitForSelector("input[type=submit][value='Next']",
       function success() {
           test.assertExists("input[type=submit][value='Next']");
           this.click("input[type=submit][value='Next']");
       },
       function fail() {
           test.assertExists("input[type=submit][value='Next']");
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot3.png", "html");
   });
   casper.waitForSelector("input[type=submit][value='Next']",
       function success() {
           test.assertExists("input[type=submit][value='Next']");
           this.click("input[type=submit][value='Next']");
       },
       function fail() {
           test.assertExists("input[type=submit][value='Next']");
   });
   casper.waitForSelector(x("//a[normalize-space(text())='Back']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Back']"));
           this.click(x("//a[normalize-space(text())='Back']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Back']"));
   });
   casper.waitForSelector(x("//input[@value='Next' and @value='Next']"),
       function success() {
           test.assertExists(x("//input[@value='Next' and @value='Next']"));
         },
       function fail() {
           test.assertExists(x("//input[@value='Next' and @value='Next']"));
   });
   casper.waitForSelector("input[type=submit][value='Next']",
       function success() {
           test.assertExists("input[type=submit][value='Next']");
           this.click("input[type=submit][value='Next']");
       },
       function fail() {
           test.assertExists("input[type=submit][value='Next']");
   });
   casper.waitForSelector("input[type=submit][value='Next']",
       function success() {
           test.assertExists("input[type=submit][value='Next']");
           this.click("input[type=submit][value='Next']");
       },
       function fail() {
           test.assertExists("input[type=submit][value='Next']");
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.waitForSelector(x("//input[@value='Next' and @value='Next']"),
       function success() {
           test.assertExists(x("//input[@value='Next' and @value='Next']"));
         },
       function fail() {
           test.assertExists(x("//input[@value='Next' and @value='Next']"));
   });
   casper.waitForSelector("input[type=submit][value='Next']",
       function success() {
           test.assertExists("input[type=submit][value='Next']");
           this.click("input[type=submit][value='Next']");
       },
       function fail() {
           test.assertExists("input[type=submit][value='Next']");
   });
   casper.waitForSelector(x("//input[@value='Next' and @value='Next']"),
       function success() {
           test.assertExists(x("//input[@value='Next' and @value='Next']"));
         },
       function fail() {
           test.assertExists(x("//input[@value='Next' and @value='Next']"));
   });
   casper.waitForSelector("input[type=submit][value='Next']",
       function success() {
           test.assertExists("input[type=submit][value='Next']");
           this.click("input[type=submit][value='Next']");
       },
       function fail() {
           test.assertExists("input[type=submit][value='Next']");
   });
   casper.waitForSelector("input[type=submit][value='Next']",
       function success() {
           test.assertExists("input[type=submit][value='Next']");
           this.click("input[type=submit][value='Next']");
       },
       function fail() {
           test.assertExists("input[type=submit][value='Next']");
   });
   casper.waitForSelector("#modalNoSelection",
       function success() {
           test.assertExists("#modalNoSelection");
           this.click("#modalNoSelection");
       },
       function fail() {
           test.assertExists("#modalNoSelection");
   });
   casper.waitForSelector("input[type=submit][value='Next']",
       function success() {
           test.assertExists("input[type=submit][value='Next']");
           this.click("input[type=submit][value='Next']");
       },
       function fail() {
           test.assertExists("input[type=submit][value='Next']");
   });
   casper.waitForSelector("form input[name='email']",
       function success() {
           test.assertExists("form input[name='email']");
           this.click("form input[name='email']");
       },
       function fail() {
           test.assertExists("form input[name='email']");
   });
   casper.waitForSelector("input[name='email']",
       function success() {
           this.sendKeys("input[name='email']", "beauner.styhomewautomation");
       },
       function fail() {
           test.assertExists("input[name='email']");
   });
   casper.waitForSelector("form input[name='password']",
       function success() {
           test.assertExists("form input[name='password']");
           this.click("form input[name='password']");
       },
       function fail() {
           test.assertExists("form input[name='password']");
   });
   casper.waitForSelector("form input[name='email']",
       function success() {
           test.assertExists("form input[name='email']");
           this.click("form input[name='email']");
       },
       function fail() {
           test.assertExists("form input[name='email']");
   });
   casper.waitForSelector("input[name='email']",
       function success() {
           this.sendKeys("input[name='email']", "@gmail.com");
       },
       function fail() {
           test.assertExists("input[name='email']");
   });
   casper.waitForSelector("form input[name='password']",
       function success() {
           test.assertExists("form input[name='password']");
           this.click("form input[name='password']");
       },
       function fail() {
           test.assertExists("form input[name='password']");
   });
   casper.waitForSelector("input[name='password']",
       function success() {
           this.sendKeys("input[name='password']", "(H)omeautomation");
       },
       function fail() {
           test.assertExists("input[name='password']");
   });
   casper.waitForSelector(x("//input[@name='password' and @value='(H)omeautomation']"),
       function success() {
           test.assertExists(x("//input[@name='password' and @value='(H)omeautomation']"));
         },
       function fail() {
           test.assertExists(x("//input[@name='password' and @value='(H)omeautomation']"));
   });
   casper.waitForSelector(x("//input[@name='email' and @value='homeautomation@gmail.com']"),
       function success() {
           test.assertExists(x("//input[@name='email' and @value='homeautomation@gmail.com']"));
         },
       function fail() {
           test.assertExists(x("//input[@name='email' and @value='homeautomation@gmail.com']"));
   });
   casper.waitForSelector(x("//input[@value='Register Now']"),
       function success() {
           test.assertExists(x("//input[@value='Register Now']"));
         },
       function fail() {
           test.assertExists(x("//input[@value='Register Now']"));
   });
   casper.waitForSelector(x("//input[@value='Register Now' and @value='Register Now']"),
       function success() {
           test.assertExists(x("//input[@value='Register Now' and @value='Register Now']"));
         },
       function fail() {
           test.assertExists(x("//input[@value='Register Now' and @value='Register Now']"));
   });
   casper.waitForSelector("form input[type=submit][value='Register Now']",
       function success() {
           test.assertExists("form input[type=submit][value='Register Now']");
           this.click("form input[type=submit][value='Register Now']");
       },
       function fail() {
           test.assertExists("form input[type=submit][value='Register Now']");
   });
   /* submit form */
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/profile\/edit$/);
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot4.png", "html");
   });
   casper.waitForSelector("#heightInCm",
       function success() {
           test.assertExists("#heightInCm");
           this.click("#heightInCm");
       },
       function fail() {
           test.assertExists("#heightInCm");
   });
   casper.waitForSelector(x("//select[@name='heightInCm' and not(@disabled)]"),
       function success() {
           test.assertExists(x("//select[@name='heightInCm' and not(@disabled)]"));
         },
       function fail() {
           test.assertExists(x("//select[@name='heightInCm' and not(@disabled)]"));
   });
   casper.waitForSelector("#weightInKg",
       function success() {
           test.assertExists("#weightInKg");
           this.click("#weightInKg");
       },
       function fail() {
           test.assertExists("#weightInKg");
   });
   casper.waitForSelector("#weightInKg",
       function success() {
           test.assertExists("#weightInKg");
           this.click("#weightInKg");
       },
       function fail() {
           test.assertExists("#weightInKg");
   });
   casper.waitForSelector(".box.bg-default.shadow-box.mb-xl",
       function success() {
           test.assertExists(".box.bg-default.shadow-box.mb-xl");
           this.click(".box.bg-default.shadow-box.mb-xl");
       },
       function fail() {
           test.assertExists(".box.bg-default.shadow-box.mb-xl");
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/profile\/edit$/);
   });
   casper.waitForSelector(".box.bg-default.shadow-box.mb-xl > .row",
       function success() {
           test.assertExists(".box.bg-default.shadow-box.mb-xl > .row");
           this.click(".box.bg-default.shadow-box.mb-xl > .row");
       },
       function fail() {
           test.assertExists(".box.bg-default.shadow-box.mb-xl > .row");
   });
   casper.waitForSelector(x("//a[normalize-space(text())='Save changes']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Save changes']"));
           this.click(x("//a[normalize-space(text())='Save changes']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Save changes']"));
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/profile\/edit$/);
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot5.png", "html");
   });
   casper.waitForSelector("#accordion",
       function success() {
           test.assertExists("#accordion");
           this.click("#accordion");
       },
       function fail() {
           test.assertExists("#accordion");
   });
   casper.waitForSelector("#shoeSize",
       function success() {
           test.assertExists("#shoeSize");
           this.click("#shoeSize");
       },
       function fail() {
           test.assertExists("#shoeSize");
   });
   casper.waitForSelector("#shoeSize",
       function success() {
           test.assertExists("#shoeSize");
           this.click("#shoeSize");
       },
       function fail() {
           test.assertExists("#shoeSize");
   });
   casper.waitForSelector(".panel.panel-default:nth-child(3) .panel-heading",
       function success() {
           test.assertExists(".panel.panel-default:nth-child(3) .panel-heading");
           this.click(".panel.panel-default:nth-child(3) .panel-heading");
       },
       function fail() {
           test.assertExists(".panel.panel-default:nth-child(3) .panel-heading");
   });
   casper.waitForSelector(x("//a[normalize-space(text())='Save changes']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Save changes']"));
           this.click(x("//a[normalize-space(text())='Save changes']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Save changes']"));
   });
   casper.waitForSelector("input[name='shippingAddress.firstName']",
       function success() {
           this.sendKeys("input[name='shippingAddress.firstName']", "homeautomOtto");
       },
       function fail() {
           test.assertExists("input[name='shippingAddress.firstName']");
   });
   casper.waitForSelector("form input[name='shippingAddress.lastName']",
       function success() {
           test.assertExists("form input[name='shippingAddress.lastName']");
           this.click("form input[name='shippingAddress.lastName']");
       },
       function fail() {
           test.assertExists("form input[name='shippingAddress.lastName']");
   });
   casper.waitForSelector("input[name='shippingAddress.lastName']",
       function success() {
           this.sendKeys("input[name='shippingAddress.lastName']", "MationTest");
       },
       function fail() {
           test.assertExists("input[name='shippingAddress.lastName']");
   });
   casper.waitForSelector("form input[name='shippingAddress.street']",
       function success() {
           test.assertExists("form input[name='shippingAddress.street']");
           this.click("form input[name='shippingAddress.street']");
       },
       function fail() {
           test.assertExists("form input[name='shippingAddress.street']");
   });
   casper.waitForSelector("input[name='shippingAddress.street']",
       function success() {
           this.sendKeys("input[name='shippingAddress.street']", "13415");
       },
       function fail() {
           test.assertExists("input[name='shippingAddress.street']");
   });
   casper.waitForSelector("form input[name='shippingAddress.streetNumber']",
       function success() {
           test.assertExists("form input[name='shippingAddress.streetNumber']");
           this.click("form input[name='shippingAddress.streetNumber']");
       },
       function fail() {
           test.assertExists("form input[name='shippingAddress.streetNumber']");
   });
   casper.waitForSelector("input[name='shippingAddress.streetNumber']",
       function success() {
           this.sendKeys("input[name='shippingAddress.streetNumber']", "1");
       },
       function fail() {
           test.assertExists("input[name='shippingAddress.streetNumber']");
   });
   casper.waitForSelector("input[name='shippingAddress.zip']",
       function success() {
           this.sendKeys("input[name='shippingAddress.zip']", "10119");
       },
       function fail() {
           test.assertExists("input[name='shippingAddress.zip']");
   });
   casper.waitForSelector("form input[name='shippingAddress.city']",
       function success() {
           test.assertExists("form input[name='shippingAddress.city']");
           this.click("form input[name='shippingAddress.city']");
       },
       function fail() {
           test.assertExists("form input[name='shippingAddress.city']");
   });
   casper.waitForSelector("input[name='shippingAddress.city']",
       function success() {
           this.sendKeys("input[name='shippingAddress.city']", "berlin");
       },
       function fail() {
           test.assertExists("input[name='shippingAddress.city']");
   });
   casper.waitForSelector("#customer\.profile\.dateOfBirth_day",
       function success() {
           test.assertExists("#customer\.profile\.dateOfBirth_day");
           this.click("#customer\.profile\.dateOfBirth_day");
       },
       function fail() {
           test.assertExists("#customer\.profile\.dateOfBirth_day");
   });
   casper.waitForSelector("#customer\.profile\.dateOfBirth_month",
       function success() {
           test.assertExists("#customer\.profile\.dateOfBirth_month");
           this.click("#customer\.profile\.dateOfBirth_month");
       },
       function fail() {
           test.assertExists("#customer\.profile\.dateOfBirth_month");
   });
   casper.waitForSelector("#customer\.profile\.dateOfBirth_year",
       function success() {
           test.assertExists("#customer\.profile\.dateOfBirth_year");
           this.click("#customer\.profile\.dateOfBirth_year");
       },
       function fail() {
           test.assertExists("#customer\.profile\.dateOfBirth_year");
   });
   casper.waitForSelector(x("//input[@value='Next']"),
       function success() {
           test.assertExists(x("//input[@value='Next']"));
         },
       function fail() {
           test.assertExists(x("//input[@value='Next']"));
   });
   casper.waitForSelector(x("//input[@value='Next' and not(@disabled)]"),
       function success() {
           test.assertExists(x("//input[@value='Next' and not(@disabled)]"));
         },
       function fail() {
           test.assertExists(x("//input[@value='Next' and not(@disabled)]"));
   });
   casper.waitForSelector("form input[type=submit][value='Next']",
       function success() {
           test.assertExists("form input[type=submit][value='Next']");
           this.click("form input[type=submit][value='Next']");
       },
       function fail() {
           test.assertExists("form input[type=submit][value='Next']");
   });
   /* submit form */
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot6.png", "html");
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/orders$/);
   });
   casper.waitForSelector("#alertModal",
       function success() {
           test.assertExists("#alertModal");
           this.click("#alertModal");
       },
       function fail() {
           test.assertExists("#alertModal");
   });
   casper.waitForSelector("form input[type=submit][value='Next']",
       function success() {
           test.assertExists("form input[type=submit][value='Next']");
           this.click("form input[type=submit][value='Next']");
       },
       function fail() {
           test.assertExists("form input[type=submit][value='Next']");
   });
   /* submit form */
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/orders$/);
   });
   casper.then(function() {
       test.assertTitle('OUTFITTERY');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot7.png", "html");
   });
   casper.waitForSelector("#alertModal",
       function success() {
           test.assertExists("#alertModal");
           this.click("#alertModal");
       },
       function fail() {
           test.assertExists("#alertModal");
   });
   casper.waitForSelector(".col-lg-offset-5.col-md-offset-5.col-sm-offset-6.col-lg-7.col-md-7.col-sm-6.mt",
       function success() {
           test.assertExists(".col-lg-offset-5.col-md-offset-5.col-sm-offset-6.col-lg-7.col-md-7.col-sm-6.mt");
           this.click(".col-lg-offset-5.col-md-offset-5.col-sm-offset-6.col-lg-7.col-md-7.col-sm-6.mt");
       },
       function fail() {
           test.assertExists(".col-lg-offset-5.col-md-offset-5.col-sm-offset-6.col-lg-7.col-md-7.col-sm-6.mt");
   });
   casper.waitForSelector("form input[type=submit][value='Next']",
       function success() {
           test.assertExists("form input[type=submit][value='Next']");
           this.click("form input[type=submit][value='Next']");
       },
       function fail() {
           test.assertExists("form input[type=submit][value='Next']");
   });
   /* submit form */
   casper.waitForSelector(x("//*[normalize-space(text())='NEXT']"),
       function success() {
           test.assertExists(x("//*[normalize-space(text())='NEXT']"));
         },
       function fail() {
           test.assertExists(x("//*[normalize-space(text())='NEXT']"));
   });
   casper.then(function() {
       test.assertExists(x("//a[normalize-space(text())='NEXT' and @href='/orders/264401367/successScreenFtNoprNocdAcOh']"));
   });
   casper.waitForSelector(x("//*[normalize-space(text())='user account']"),
       function success() {
           test.assertExists(x("//*[normalize-space(text())='user account']"));
         },
       function fail() {
           test.assertExists(x("//*[normalize-space(text())='user account']"));
   });
   casper.then(function() {
       test.assertExists(x("//a[normalize-space(text())='user account' and @href='/billingDatas']"));
   });
   casper.waitForSelector(x("//input[@name='paymentTransfers' and @checked]"),
       function success() {
           test.assertExists(x("//input[@name='paymentTransfers' and @checked]"));
         },
       function fail() {
           test.assertExists(x("//input[@name='paymentTransfers' and @checked]"));
   });
   casper.then(function() {
       test.assertTitle('Transmitting successful');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot8.png", "html");
   });
   casper.waitForSelector(x("//a[normalize-space(text())='NEXT']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='NEXT']"));
           this.click(x("//a[normalize-space(text())='NEXT']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='NEXT']"));
   });
   casper.waitForSelector(x("//*[normalize-space(text())='Go to next page']"),
       function success() {
           test.assertExists(x("//*[normalize-space(text())='Go to next page']"));
         },
       function fail() {
           test.assertExists(x("//*[normalize-space(text())='Go to next page']"));
   });
   casper.then(function() {
       test.assertExists(x("//a[normalize-space(text())='Go to next page' and @href='/orders/264401367/successScreenFtNoprNocdAcOh']"));
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/orders\/264401367\/successScreenFtNoprNocdAcOh$/);
   });
   casper.then(function() {
       test.assertTitle('Transmitting successful');
   });
   casper.waitForSelector(x("//a[normalize-space(text())='Go to next page']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Go to next page']"));
           this.click(x("//a[normalize-space(text())='Go to next page']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Go to next page']"));
   });
   casper.waitForSelector(x("//a[normalize-space(text())='Skip this']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Skip this']"));
           this.click(x("//a[normalize-space(text())='Skip this']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Skip this']"));
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/orders$/);
   });
   casper.then(function() {
       test.assertTitle('Overview');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot9.png", "html");
   });
   casper.waitForSelector("body",
       function success() {
           test.assertExists("body");
           this.click("body");
       },
       function fail() {
           test.assertExists("body");
   });
   casper.waitForSelector(x("//*[normalize-space(text())='ORDER ONLINE']"),
       function success() {
           test.assertExists(x("//*[normalize-space(text())='ORDER ONLINE']"));
         },
       function fail() {
           test.assertExists(x("//*[normalize-space(text())='ORDER ONLINE']"));
   });
   casper.then(function() {
       test.assertTitle('Overview');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot10.png", "html");
   });
   casper.waitForSelector(x("//*[normalize-space(text())='View']"),
       function success() {
           test.assertExists(x("//*[normalize-space(text())='View']"));
         },
       function fail() {
           test.assertExists(x("//*[normalize-space(text())='View']"));
   });
   casper.waitForSelector(x("//*[normalize-space(text())='New phone call appointment']"),
       function success() {
           test.assertExists(x("//*[normalize-space(text())='New phone call appointment']"));
         },
       function fail() {
           test.assertExists(x("//*[normalize-space(text())='New phone call appointment']"));
   });
   casper.waitForSelector(x("//a[normalize-space(text())='New phone call appointment']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='New phone call appointment']"));
           this.click(x("//a[normalize-space(text())='New phone call appointment']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='New phone call appointment']"));
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/order\/pickCallAppointment\/264401367$/);
   });
   casper.then(function() {
       test.assertTitle('Make an appointment');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot11.png", "html");
   });
   casper.waitForSelector(x("//input[@value='Confirm appointment' and not(@disabled)]"),
       function success() {
           test.assertExists(x("//input[@value='Confirm appointment' and not(@disabled)]"));
         },
       function fail() {
           test.assertExists(x("//input[@value='Confirm appointment' and not(@disabled)]"));
   });
   casper.waitForSelector(x("//input[@value='Confirm appointment' and @disabled]"),
       function success() {
           test.assertExists(x("//input[@value='Confirm appointment' and @disabled]"));
         },
       function fail() {
           test.assertExists(x("//input[@value='Confirm appointment' and @disabled]"));
   });
   casper.waitForSelector(x("//input[@value='Confirm appointment' and @value='Confirm appointment']"),
       function success() {
           test.assertExists(x("//input[@value='Confirm appointment' and @value='Confirm appointment']"));
         },
       function fail() {
           test.assertExists(x("//input[@value='Confirm appointment' and @value='Confirm appointment']"));
   });
   casper.waitForSelector(x("//input[@value='Confirm appointment']"),
       function success() {
           test.assertExists(x("//input[@value='Confirm appointment']"));
         },
       function fail() {
           test.assertExists(x("//input[@value='Confirm appointment']"));
   });
   casper.waitForSelector("tr:nth-child(5) .ui-datepicker-unselectable.ui-state-disabled:nth-child(4) .ui-state-default",
       function success() {
           test.assertExists("tr:nth-child(5) .ui-datepicker-unselectable.ui-state-disabled:nth-child(4) .ui-state-default");
           this.click("tr:nth-child(5) .ui-datepicker-unselectable.ui-state-disabled:nth-child(4) .ui-state-default");
       },
       function fail() {
           test.assertExists("tr:nth-child(5) .ui-datepicker-unselectable.ui-state-disabled:nth-child(4) .ui-state-default");
   });
   casper.waitForSelector(".ui-icon.ui-icon-circle-triangle-e",
       function success() {
           test.assertExists(".ui-icon.ui-icon-circle-triangle-e");
           this.click(".ui-icon.ui-icon-circle-triangle-e");
       },
       function fail() {
           test.assertExists(".ui-icon.ui-icon-circle-triangle-e");
   });
   casper.waitForSelector(x("//input[@value='Confirm appointment' and @disabled]"),
       function success() {
           test.assertExists(x("//input[@value='Confirm appointment' and @disabled]"));
         },
       function fail() {
           test.assertExists(x("//input[@value='Confirm appointment' and @disabled]"));
   });
   casper.waitForSelector("form input[type=submit][value='Confirm appointment']",
       function success() {
           test.assertExists("form input[type=submit][value='Confirm appointment']");
           this.click("form input[type=submit][value='Confirm appointment']");
       },
       function fail() {
           test.assertExists("form input[type=submit][value='Confirm appointment']");
   });
   casper.waitForSelector("form input[name='phoneNumber']",
       function success() {
           test.assertExists("form input[name='phoneNumber']");
           this.click("form input[name='phoneNumber']");
       },
       function fail() {
           test.assertExists("form input[name='phoneNumber']");
   });
   casper.waitForSelector(x("//input[@value='Confirm appointment' and @disabled]"),
       function success() {
           test.assertExists(x("//input[@value='Confirm appointment' and @disabled]"));
         },
       function fail() {
           test.assertExists(x("//input[@value='Confirm appointment' and @disabled]"));
   });
   casper.waitForSelector("form input[name='phoneNumber']",
       function success() {
           test.assertExists("form input[name='phoneNumber']");
           this.click("form input[name='phoneNumber']");
       },
       function fail() {
           test.assertExists("form input[name='phoneNumber']");
   });
   casper.waitForSelector("input[name='phoneNumber']",
       function success() {
           this.sendKeys("input[name='phoneNumber']", "21e4324034");
       },
       function fail() {
           test.assertExists("input[name='phoneNumber']");
   });
   casper.waitForSelector(x("//input[@value='Confirm appointment' and @disabled]"),
       function success() {
           test.assertExists(x("//input[@value='Confirm appointment' and @disabled]"));
         },
       function fail() {
           test.assertExists(x("//input[@value='Confirm appointment' and @disabled]"));
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot12.png", "html");
   });
   casper.waitForSelector("form input[type=submit][value='Confirm appointment']",
       function success() {
           test.assertExists("form input[type=submit][value='Confirm appointment']");
           this.click("form input[type=submit][value='Confirm appointment']");
       },
       function fail() {
           test.assertExists("form input[type=submit][value='Confirm appointment']");
   });
   casper.waitForSelector(x("//a[normalize-space(text())='(logout)']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='(logout)']"));
           this.click(x("//a[normalize-space(text())='(logout)']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='(logout)']"));
   });

   casper.run(function() {test.done();});
});