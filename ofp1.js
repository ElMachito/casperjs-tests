/*==============================================================================*/
/* Casper generated Wed Apr 01 2015 12:24:36 GMT+0200 (W. Europe Daylight Time) */
/*==============================================================================*/

var x = require('casper').selectXPath;
casper.options.viewportSize = {width: 1018, height: 594};
casper.on('page.error', function(msg, trace) {
   this.echo('Error: ' + msg, 'ERROR');
   for(var i=0; i<trace.length; i++) {
       var step = trace[i];
       this.echo('   ' + step.file + ' (line ' + step.line + ')', 'ERROR');
   }
});
casper.test.begin('Resurrectio test', function(test) {
   casper.start('http://www.outfittery.com');
   casper.then(function() {
       this.mouse.click(1166, 19);
   });
   casper.then(function() {
       this.mouse.click(1167, 15);
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.then(function() {
       this.mouse.down(1167, 15);
       this.mouse.move(1234, 18);
       this.mouse.up(1234, 18);
   });
   casper.waitForSelector(x("//a[normalize-space(text())='Deutschland']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Deutschland']"));
           this.click(x("//a[normalize-space(text())='Deutschland']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Deutschland']"));
   });
   casper.then(function() {
       test.assertTitle('OUTFITTERY - Echte Männer lassen shoppen');
   });
   casper.waitForSelector(x("//a[normalize-space(text())='Österreich']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Österreich']"));
           this.click(x("//a[normalize-space(text())='Österreich']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Österreich']"));
   });
   casper.then(function() {
       test.assertTitle('OUTFITTERY - Individuelle Herren Outfits');
   });
   casper.waitForSelector(x("//a[normalize-space(text())='Nederland']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Nederland']"));
           this.click(x("//a[normalize-space(text())='Nederland']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Nederland']"));
   });
   casper.waitForSelector("input[type=submit][value='Ik ga akkoord']",
       function success() {
           test.assertExists("input[type=submit][value='Ik ga akkoord']");
           this.click("input[type=submit][value='Ik ga akkoord']");
       },
       function fail() {
           test.assertExists("input[type=submit][value='Ik ga akkoord']");
   });
   casper.then(function() {
       test.assertTitle('OUTFITTERY | Herenkleding Samengesteld door je eigen Stylist Gratis Verzending');
   });
   casper.then(function() {
       this.mouse.down(695, 142);
       this.mouse.move(1231, 13);
       this.mouse.up(1231, 13);
   });
   casper.waitForSelector("input[type=submit][value='Ik ga akkoord']",
       function success() {
           test.assertExists("input[type=submit][value='Ik ga akkoord']");
           this.click("input[type=submit][value='Ik ga akkoord']");
       },
       function fail() {
           test.assertExists("input[type=submit][value='Ik ga akkoord']");
   });
   casper.then(function() {
       test.assertTitle('OUTFITTERY | Herenkleding Samengesteld door je eigen Stylist Gratis Verzending');
   });
   casper.then(function() {
       this.mouse.down(699, 153);
       this.mouse.move(1233, 12);
       this.mouse.up(1233, 12);
   });
   casper.waitForSelector(x("//a[normalize-space(text())='Sverige']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Sverige']"));
           this.click(x("//a[normalize-space(text())='Sverige']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Sverige']"));
   });
   casper.waitForSelector("input[type=submit][value='Jag godkänner']",
       function success() {
           test.assertExists("input[type=submit][value='Jag godkänner']");
           this.click("input[type=submit][value='Jag godkänner']");
       },
       function fail() {
           test.assertExists("input[type=submit][value='Jag godkänner']");
   });
   casper.then(function() {
       test.assertTitle('OUTFITTERY- Herrkläder sammansatta av personliga stilkonsulter, gratis frakt');
   });
   casper.then(function() {
       this.mouse.down(711, 147);
       this.mouse.move(1238, 14);
       this.mouse.up(1238, 14);
   });
   casper.then(function() {
       this.mouse.down(1352, 41);
       this.mouse.move(1347, -27);
       this.mouse.up(1347, -27);
   });
   casper.waitForSelector(x("//*[normalize-space(text())=concat('Let',\"'\",'s go')]"),
       function success() {
           test.assertExists(x("//*[normalize-space(text())=concat('Let',\"'\",'s go')]"));
         },
       function fail() {
           test.assertExists(x("//*[normalize-space(text())=concat('Let',\"'\",'s go')]"));
   });
   casper.waitForSelector(x("//*[normalize-space(text())='Gift Voucher']"),
       function success() {
           test.assertExists(x("//*[normalize-space(text())='Gift Voucher']"));
         },
       function fail() {
           test.assertExists(x("//*[normalize-space(text())='Gift Voucher']"));
   });
   casper.then(function() {
       test.assertExists(x("//a[normalize-space(text())='Outfits' and @href='/#outfits']"));
   });
   casper.then(function() {
       test.assertExists(x("//a[normalize-space(text())='Pricing' and @href='/#pricing']"));
   });
   casper.then(function() {
       test.assertExists(x("//a[normalize-space(text())=concat('Let',\"'\",'s go') and @href='/funnels/start']"));
   });
   casper.then(function() {
       test.assertExists(x("//a[normalize-space(text())=concat('LET',\"'\",'S GO') and @href='/funnels/start']"));
   });
   casper.waitForSelector(x("//img[@src='/website/var/tmp/image-thumbnails/0/4378/thumb__footerIcon/facebook-2x@2x.png']"),
       function success() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/4378/thumb__footerIcon/facebook-2x@2x.png']"));
         },
       function fail() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/4378/thumb__footerIcon/facebook-2x@2x.png']"));
   });
   casper.waitForSelector(x("//img[@src='/website/var/tmp/image-thumbnails/0/4381/thumb__footerIcon/instagram-2x@2x.png']"),
       function success() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/4381/thumb__footerIcon/instagram-2x@2x.png']"));
         },
       function fail() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/4381/thumb__footerIcon/instagram-2x@2x.png']"));
   });
   casper.waitForSelector(x("//img[@src='/website/var/tmp/image-thumbnails/0/4380/thumb__footerIcon/twitter-2x@2x.png']"),
       function success() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/4380/thumb__footerIcon/twitter-2x@2x.png']"));
         },
       function fail() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/4380/thumb__footerIcon/twitter-2x@2x.png']"));
   });
   casper.waitForSelector(x("//img[@src='/website/var/tmp/image-thumbnails/0/4377/thumb__footerIcon/blog-2x@2x.png']"),
       function success() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/4377/thumb__footerIcon/blog-2x@2x.png']"));
         },
       function fail() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/4377/thumb__footerIcon/blog-2x@2x.png']"));
   });
   casper.waitForSelector(x("//*[normalize-space(text())='About Us']"),
       function success() {
           test.assertExists(x("//*[normalize-space(text())='About Us']"));
         },
       function fail() {
           test.assertExists(x("//*[normalize-space(text())='About Us']"));
   });
   casper.then(function() {
       test.assertExists(x("//a[normalize-space(text())='About Us' and @href='/aboutus']"));
   });
   casper.waitForSelector(x("//*[normalize-space(text())='FAQ']"),
       function success() {
           test.assertExists(x("//*[normalize-space(text())='FAQ']"));
         },
       function fail() {
           test.assertExists(x("//*[normalize-space(text())='FAQ']"));
   });
   casper.then(function() {
       test.assertExists(x("//a[normalize-space(text())='FAQ' and @href='/faq']"));
   });
   casper.waitForSelector(x("//*[normalize-space(text())='Jobs']"),
       function success() {
           test.assertExists(x("//*[normalize-space(text())='Jobs']"));
         },
       function fail() {
           test.assertExists(x("//*[normalize-space(text())='Jobs']"));
   });
   casper.then(function() {
       test.assertExists(x("//a[normalize-space(text())='Jobs' and @href='/jobs']"));
   });
   casper.waitForSelector(x("//*[normalize-space(text())='Imprint']"),
       function success() {
           test.assertExists(x("//*[normalize-space(text())='Imprint']"));
         },
       function fail() {
           test.assertExists(x("//*[normalize-space(text())='Imprint']"));
   });
   casper.then(function() {
       test.assertExists(x("//a[normalize-space(text())='Imprint' and @href='/imprint']"));
   });
   casper.waitForSelector(x("//*[normalize-space(text())='Privacy']"),
       function success() {
           test.assertExists(x("//*[normalize-space(text())='Privacy']"));
         },
       function fail() {
           test.assertExists(x("//*[normalize-space(text())='Privacy']"));
   });
   casper.then(function() {
       test.assertExists(x("//a[normalize-space(text())='Privacy' and @href='/privacy']"));
   });
   casper.waitForSelector(x("//*[normalize-space(text())='T&C']"),
       function success() {
           test.assertExists(x("//*[normalize-space(text())='T&C']"));
         },
       function fail() {
           test.assertExists(x("//*[normalize-space(text())='T&C']"));
   });
   casper.then(function() {
       test.assertExists(x("//a[normalize-space(text())='T&C' and @href='/terms']"));
   });
   casper.waitForSelector(x("//*[normalize-space(text())='Press']"),
       function success() {
           test.assertExists(x("//*[normalize-space(text())='Press']"));
         },
       function fail() {
           test.assertExists(x("//*[normalize-space(text())='Press']"));
   });
   casper.then(function() {
       test.assertExists(x("//a[normalize-space(text())='Press' and @href='/press']"));
   });
   casper.waitForSelector(x("//*[normalize-space(text())='Contact']"),
       function success() {
           test.assertExists(x("//*[normalize-space(text())='Contact']"));
         },
       function fail() {
           test.assertExists(x("//*[normalize-space(text())='Contact']"));
   });
   casper.then(function() {
       test.assertExists(x("//a[normalize-space(text())='Contact' and @href='/contact']"));
   });
   casper.waitForSelector(x("//*[normalize-space(text())='OUTFITTERY']"),
       function success() {
           test.assertExists(x("//*[normalize-space(text())='OUTFITTERY']"));
         },
       function fail() {
           test.assertExists(x("//*[normalize-space(text())='OUTFITTERY']"));
   });
   casper.then(function() {
       test.assertExists(x("//a[normalize-space(text())='OUTFITTERY' and @href='/']"));
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/$/);
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot1.png", "html");
   });
   casper.waitForSelector(x("//img[@src='/website/var/tmp/image-thumbnails/0/4201/thumb__index_trustbar_payment_blog/blog_entry_en.jpeg']"),
       function success() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/4201/thumb__index_trustbar_payment_blog/blog_entry_en.jpeg']"));
         },
       function fail() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/4201/thumb__index_trustbar_payment_blog/blog_entry_en.jpeg']"));
   });
   casper.waitForSelector(x("//img[@src='/website/var/tmp/image-thumbnails/0/2026/thumb__auto_6a95b2cdea04081448094500a630b6a7/sky.jpeg']"),
       function success() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/2026/thumb__auto_6a95b2cdea04081448094500a630b6a7/sky.jpeg']"));
         },
       function fail() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/2026/thumb__auto_6a95b2cdea04081448094500a630b6a7/sky.jpeg']"));
   });
   casper.waitForSelector(x("//img[@src='/website/var/tmp/image-thumbnails/0/4356/thumb__auto_a7389a521b4b032faf7b55d7e2c286e6/images.jpeg']"),
       function success() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/4356/thumb__auto_a7389a521b4b032faf7b55d7e2c286e6/images.jpeg']"));
         },
       function fail() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/4356/thumb__auto_a7389a521b4b032faf7b55d7e2c286e6/images.jpeg']"));
   });
   casper.waitForSelector(x("//img[@src='/website/var/tmp/image-thumbnails/0/2027/thumb__auto_dec3e4552dd699afdaea0dde8f49adca/gq.jpeg']"),
       function success() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/2027/thumb__auto_dec3e4552dd699afdaea0dde8f49adca/gq.jpeg']"));
         },
       function fail() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/2027/thumb__auto_dec3e4552dd699afdaea0dde8f49adca/gq.jpeg']"));
   });
   casper.waitForSelector(x("//img[@src='/website/var/tmp/image-thumbnails/0/4355/thumb__auto_7628f01c4b82c50245ceb11d4b416bf0/images-1-.jpeg']"),
       function success() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/4355/thumb__auto_7628f01c4b82c50245ceb11d4b416bf0/images-1-.jpeg']"));
         },
       function fail() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/4355/thumb__auto_7628f01c4b82c50245ceb11d4b416bf0/images-1-.jpeg']"));
   });
   casper.waitForSelector(x("//img[@src='/website/var/tmp/image-thumbnails/0/4354/thumb__auto_bdba09ff43ea7696615e37998c0e2607/bloomberg.jpeg']"),
       function success() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/4354/thumb__auto_bdba09ff43ea7696615e37998c0e2607/bloomberg.jpeg']"));
         },
       function fail() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/4354/thumb__auto_bdba09ff43ea7696615e37998c0e2607/bloomberg.jpeg']"));
   });
   casper.waitForSelector(x("//img[@src='/website/var/tmp/image-thumbnails/0/159/thumb__auto_263740f0db9468f9bc56bb776a788479/financial_times.jpeg']"),
       function success() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/159/thumb__auto_263740f0db9468f9bc56bb776a788479/financial_times.jpeg']"));
         },
       function fail() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/159/thumb__auto_263740f0db9468f9bc56bb776a788479/financial_times.jpeg']"));
   });
   casper.waitForSelector(x("//img[@src='/website/var/tmp/image-thumbnails/0/1552/thumb__index_trustbar_payment_blog/payment_methods_at.jpeg']"),
       function success() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/1552/thumb__index_trustbar_payment_blog/payment_methods_at.jpeg']"));
         },
       function fail() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/1552/thumb__index_trustbar_payment_blog/payment_methods_at.jpeg']"));
   });
   casper.waitForSelector(x("//*[normalize-space(text())='read more']"),
       function success() {
           test.assertExists(x("//*[normalize-space(text())='read more']"));
         },
       function fail() {
           test.assertExists(x("//*[normalize-space(text())='read more']"));
   });
   casper.then(function() {
       test.assertExists(x("//a[normalize-space(text())='read more' and @href='/pricing']"));
   });
   casper.waitForSelector(x("//img[@src='/website/var/tmp/image-thumbnails/0/3343/thumb__index_outfits_brands/home_brands_dk-se-nl.jpeg']"),
       function success() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/3343/thumb__index_outfits_brands/home_brands_dk-se-nl.jpeg']"));
         },
       function fail() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/3343/thumb__index_outfits_brands/home_brands_dk-se-nl.jpeg']"));
   });
   casper.waitForSelector(x("//img[@src='/website/var/tmp/image-thumbnails/0/3343/thumb__index_outfits_brands/home_brands_dk-se-nl.jpeg']"),
       function success() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/3343/thumb__index_outfits_brands/home_brands_dk-se-nl.jpeg']"));
         },
       function fail() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/3343/thumb__index_outfits_brands/home_brands_dk-se-nl.jpeg']"));
   });
   casper.waitForSelector(x("//img[@src='/website/var/tmp/image-thumbnails/0/3343/thumb__index_outfits_brands/home_brands_dk-se-nl.jpeg']"),
       function success() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/3343/thumb__index_outfits_brands/home_brands_dk-se-nl.jpeg']"));
         },
       function fail() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/3343/thumb__index_outfits_brands/home_brands_dk-se-nl.jpeg']"));
   });
   casper.waitForSelector(x("//img[@src='/website/var/tmp/image-thumbnails/0/3343/thumb__index_outfits_brands/home_brands_dk-se-nl.jpeg']"),
       function success() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/3343/thumb__index_outfits_brands/home_brands_dk-se-nl.jpeg']"));
         },
       function fail() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/3343/thumb__index_outfits_brands/home_brands_dk-se-nl.jpeg']"));
   });
   casper.waitForSelector(x("//img[@src='/website/var/tmp/image-thumbnails/0/3343/thumb__index_outfits_brands/home_brands_dk-se-nl.jpeg']"),
       function success() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/3343/thumb__index_outfits_brands/home_brands_dk-se-nl.jpeg']"));
         },
       function fail() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/3343/thumb__index_outfits_brands/home_brands_dk-se-nl.jpeg']"));
   });
   casper.waitForSelector(x("//img[@src='/website/var/tmp/image-thumbnails/0/3343/thumb__index_outfits_brands/home_brands_dk-se-nl.jpeg']"),
       function success() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/3343/thumb__index_outfits_brands/home_brands_dk-se-nl.jpeg']"));
         },
       function fail() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/3343/thumb__index_outfits_brands/home_brands_dk-se-nl.jpeg']"));
   });
   casper.waitForSelector(x("//img[@src='/website/var/tmp/image-thumbnails/0/3343/thumb__index_outfits_brands/home_brands_dk-se-nl.jpeg']"),
       function success() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/3343/thumb__index_outfits_brands/home_brands_dk-se-nl.jpeg']"));
         },
       function fail() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/3343/thumb__index_outfits_brands/home_brands_dk-se-nl.jpeg']"));
   });
   casper.waitForSelector(x("//img[@src='/website/var/tmp/image-thumbnails/0/3343/thumb__index_outfits_brands/home_brands_dk-se-nl.jpeg']"),
       function success() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/3343/thumb__index_outfits_brands/home_brands_dk-se-nl.jpeg']"));
         },
       function fail() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/3343/thumb__index_outfits_brands/home_brands_dk-se-nl.jpeg']"));
   });
   casper.waitForSelector(x("//img[@src='/website/var/tmp/image-thumbnails/0/3343/thumb__index_outfits_brands/home_brands_dk-se-nl.jpeg']"),
       function success() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/3343/thumb__index_outfits_brands/home_brands_dk-se-nl.jpeg']"));
         },
       function fail() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/3343/thumb__index_outfits_brands/home_brands_dk-se-nl.jpeg']"));
   });
   casper.waitForSelector(x("//img[@src='/website/var/tmp/image-thumbnails/0/3343/thumb__index_outfits_brands/home_brands_dk-se-nl.jpeg']"),
       function success() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/3343/thumb__index_outfits_brands/home_brands_dk-se-nl.jpeg']"));
         },
       function fail() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/3343/thumb__index_outfits_brands/home_brands_dk-se-nl.jpeg']"));
   });
   casper.waitForSelector(x("//img[@src='/website/var/tmp/image-thumbnails/0/3343/thumb__index_outfits_brands/home_brands_dk-se-nl.jpeg']"),
       function success() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/3343/thumb__index_outfits_brands/home_brands_dk-se-nl.jpeg']"));
         },
       function fail() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/3343/thumb__index_outfits_brands/home_brands_dk-se-nl.jpeg']"));
   });
   casper.waitForSelector(x("//img[@src='/website/var/tmp/image-thumbnails/0/3343/thumb__index_outfits_brands/home_brands_dk-se-nl.jpeg']"),
       function success() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/3343/thumb__index_outfits_brands/home_brands_dk-se-nl.jpeg']"));
         },
       function fail() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/3343/thumb__index_outfits_brands/home_brands_dk-se-nl.jpeg']"));
   });
   casper.waitForSelector(x("//*[normalize-space(text())='read more']"),
       function success() {
           test.assertExists(x("//*[normalize-space(text())='read more']"));
         },
       function fail() {
           test.assertExists(x("//*[normalize-space(text())='read more']"));
   });
   casper.then(function() {
       test.assertExists(x("//a[normalize-space(text())='read more' and @href='/outfits']"));
   });
   casper.waitForSelector(x("//*[normalize-space(text())='read more']"),
       function success() {
           test.assertExists(x("//*[normalize-space(text())='read more']"));
         },
       function fail() {
           test.assertExists(x("//*[normalize-space(text())='read more']"));
   });
   casper.then(function() {
       test.assertExists(x("//a[normalize-space(text())='read more' and @href='/outfits']"));
   });
   casper.waitForSelector(x("//img[@src='/website/var/tmp/image-thumbnails/0/3349/thumb__index_outfits_brands/home_outfits_se-dk-nl.jpeg']"),
       function success() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/3349/thumb__index_outfits_brands/home_outfits_se-dk-nl.jpeg']"));
         },
       function fail() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/3349/thumb__index_outfits_brands/home_outfits_se-dk-nl.jpeg']"));
   });
   casper.waitForSelector(x("//img[@src='/website/var/tmp/image-thumbnails/0/3349/thumb__index_outfits_brands/home_outfits_se-dk-nl.jpeg']"),
       function success() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/3349/thumb__index_outfits_brands/home_outfits_se-dk-nl.jpeg']"));
         },
       function fail() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/3349/thumb__index_outfits_brands/home_outfits_se-dk-nl.jpeg']"));
   });
   casper.waitForSelector(x("//img[@src='/website/var/tmp/image-thumbnails/0/3349/thumb__index_outfits_brands/home_outfits_se-dk-nl.jpeg']"),
       function success() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/3349/thumb__index_outfits_brands/home_outfits_se-dk-nl.jpeg']"));
         },
       function fail() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/3349/thumb__index_outfits_brands/home_outfits_se-dk-nl.jpeg']"));
   });
   casper.waitForSelector(x("//img[@src='/website/var/tmp/image-thumbnails/0/3349/thumb__index_outfits_brands/home_outfits_se-dk-nl.jpeg']"),
       function success() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/3349/thumb__index_outfits_brands/home_outfits_se-dk-nl.jpeg']"));
         },
       function fail() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/3349/thumb__index_outfits_brands/home_outfits_se-dk-nl.jpeg']"));
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/$/);
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot2.png", "html");
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot3.png", "html");
   });
   casper.then(function() {
       this.mouse.click(733, 423);
   });
   casper.then(function() {
       this.mouse.click(922, 347);
   });
   casper.then(function() {
       this.mouse.click(934, 278);
   });
   casper.then(function() {
       this.mouse.click(571, 481);
   });
   casper.waitForSelector(x("//*[normalize-space(text())='OUTFITTERY']"),
       function success() {
           test.assertExists(x("//*[normalize-space(text())='OUTFITTERY']"));
         },
       function fail() {
           test.assertExists(x("//*[normalize-space(text())='OUTFITTERY']"));
   });
   casper.waitForSelector(x("//*[normalize-space(text())='How it works']"),
       function success() {
           test.assertExists(x("//*[normalize-space(text())='How it works']"));
         },
       function fail() {
           test.assertExists(x("//*[normalize-space(text())='How it works']"));
   });
   casper.waitForSelector(x("//a[normalize-space(text())=concat('Let',\"'\",'s go')]"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())=concat('Let',\"'\",'s go')]"));
           this.click(x("//a[normalize-space(text())=concat('Let',\"'\",'s go')]"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())=concat('Let',\"'\",'s go')]"));
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot4.png", "html");
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot5.png", "html");
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       this.mouse.click(271, 369);
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot6.png", "html");
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot7.png", "html");
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot8.png", "html");
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot9.png", "html");
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot10.png", "html");
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot11.png", "html");
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot12.png", "html");
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
   casper.waitForSelector(x("//*[normalize-space(text())='OUTFITTERY']"),
       function success() {
           test.assertExists(x("//*[normalize-space(text())='OUTFITTERY']"));
         },
       function fail() {
           test.assertExists(x("//*[normalize-space(text())='OUTFITTERY']"));
   });
   casper.then(function() {
       test.assertExists(x("//a[normalize-space(text())='OUTFITTERY' and @href='/']"));
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
   casper.then(function() {
       test.assertTitle('');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot13.png", "html");
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot14.png", "html");
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot15.png", "html");
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot16.png", "html");
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot17.png", "html");
   });
   casper.waitForSelector(x("//input[@value='Next']"),
       function success() {
           test.assertExists(x("//input[@value='Next']"));
         },
       function fail() {
           test.assertExists(x("//input[@value='Next']"));
   });
   casper.then(function() {
       this.mouse.click(1433, 742);
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
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot18.png", "html");
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot19.png", "html");
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot20.png", "html");
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot21.png", "html");
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot22.png", "html");
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot23.png", "html");
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot24.png", "html");
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot25.png", "html");
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot26.png", "html");
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot27.png", "html");
   });
   casper.then(function() {
       this.mouse.click(641, 760);
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot28.png", "html");
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot29.png", "html");
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
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot30.png", "html");
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
       this.mouse.click(732, 501);
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot31.png", "html");
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot32.png", "html");
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot33.png", "html");
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
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot34.png", "html");
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot35.png", "html");
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot36.png", "html");
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot37.png", "html");
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot38.png", "html");
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
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot39.png", "html");
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot40.png", "html");
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot41.png", "html");
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot42.png", "html");
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot43.png", "html");
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot44.png", "html");
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
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot45.png", "html");
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot46.png", "html");
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot47.png", "html");
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot48.png", "html");
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot49.png", "html");
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
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot50.png", "html");
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot51.png", "html");
   });
   casper.then(function() {
       this.mouse.click(868, 389);
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot52.png", "html");
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot53.png", "html");
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/questionnaire\/survey$/);
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot54.png", "html");
   });
   casper.waitForSelector(x("//input[@value='Next']"),
       function success() {
           test.assertExists(x("//input[@value='Next']"));
         },
       function fail() {
           test.assertExists(x("//input[@value='Next']"));
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
       this.mouse.down(1797, 466);
       this.mouse.move(1702, 286);
       this.mouse.up(1702, 286);
   });

   casper.run(function() {test.done();});
});