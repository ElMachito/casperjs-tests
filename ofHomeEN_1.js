/*==============================================================================*/
/* ourfittery.com EN home page validation */
/*==============================================================================*/

var x = require('casper').selectXPath;
casper.options.viewportSize = {width: 2042, height: 965};
casper.on('page.error', function(msg, trace) {
   this.echo('Error: ' + msg, 'ERROR');
   for(var i=0; i<trace.length; i++) {
       var step = trace[i];
       this.echo('   ' + step.file + ' (line ' + step.line + ')', 'ERROR');
   }
});
casper.test.begin('Resurrectio test', function(test) {
   casper.start('https://www.outfittery.com/');
   casper.waitForSelector(".glyphicon.glyphicon-circle-arrow-down.text-gray",
       function success() {
           test.assertExists(".glyphicon.glyphicon-circle-arrow-down.text-gray");
           this.click(".glyphicon.glyphicon-circle-arrow-down.text-gray");
       },
       function fail() {
           test.assertExists(".glyphicon.glyphicon-circle-arrow-down.text-gray");
   });
   casper.waitForSelector(x("//*[normalize-space(text())='OUTFITTERY']"),
       function success() {
           test.assertExists(x("//*[normalize-space(text())='OUTFITTERY']"));
         },
       function fail() {
           test.assertExists(x("//*[normalize-space(text())='OUTFITTERY']"));
   });
   casper.then(function() {
       test.assertExists(x("//a[normalize-space(text())='OUTFITTERY' and @href='/#fb-root']"));
   });
   casper.waitForSelector(x("//*[normalize-space(text())='How it works']"),
       function success() {
           test.assertExists(x("//*[normalize-space(text())='How it works']"));
         },
       function fail() {
           test.assertExists(x("//*[normalize-space(text())='How it works']"));
   });
   casper.then(function() {
       test.assertExists(x("//a[normalize-space(text())='How it works' and @href='/#hiw']"));
   });
   casper.waitForSelector(x("//*[normalize-space(text())='Outfits']"),
       function success() {
           test.assertExists(x("//*[normalize-space(text())='Outfits']"));
         },
       function fail() {
           test.assertExists(x("//*[normalize-space(text())='Outfits']"));
   });
   casper.then(function() {
       test.assertExists(x("//a[normalize-space(text())='Outfits' and @href='/#outfits']"));
   });
   casper.waitForSelector(x("//*[normalize-space(text())='Pricing']"),
       function success() {
           test.assertExists(x("//*[normalize-space(text())='Pricing']"));
         },
       function fail() {
           test.assertExists(x("//*[normalize-space(text())='Pricing']"));
   });
   casper.then(function() {
       test.assertExists(x("//a[normalize-space(text())='Pricing' and @href='/#pricing']"));
   });
   casper.waitForSelector(x("//*[normalize-space(text())='Gift Voucher']"),
       function success() {
           test.assertExists(x("//*[normalize-space(text())='Gift Voucher']"));
         },
       function fail() {
           test.assertExists(x("//*[normalize-space(text())='Gift Voucher']"));
   });
   casper.then(function() {
       test.assertExists(x("//a[normalize-space(text())='Gift Voucher' and @href='/vouchers/create']"));
   });
   casper.waitForSelector(x("//*[normalize-space(text())='Customer login']"),
       function success() {
           test.assertExists(x("//*[normalize-space(text())='Customer login']"));
         },
       function fail() {
           test.assertExists(x("//*[normalize-space(text())='Customer login']"));
   });
   casper.then(function() {
       test.assertExists(x("//a[normalize-space(text())='Customer login' and @href='/login/auth']"));
   });
   casper.waitForSelector(x("//img[@src='/assets/icons/devices.jpg']"),
       function success() {
           test.assertExists(x("//img[@src='/assets/icons/devices.jpg']"));
         },
       function fail() {
           test.assertExists(x("//img[@src='/assets/icons/devices.jpg']"));
   });
   casper.waitForSelector(x("//img[@src='/assets/icons/suit_1.jpg']"),
       function success() {
           test.assertExists(x("//img[@src='/assets/icons/suit_1.jpg']"));
         },
       function fail() {
           test.assertExists(x("//img[@src='/assets/icons/suit_1.jpg']"));
   });
   casper.waitForSelector(x("//img[@src='/assets/icons/box_1.jpg']"),
       function success() {
           test.assertExists(x("//img[@src='/assets/icons/box_1.jpg']"));
         },
       function fail() {
           test.assertExists(x("//img[@src='/assets/icons/box_1.jpg']"));
   });
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/$/);
   });
   casper.then(function() {
       test.assertTitle('');
   });
   casper.waitForSelector(".hero.mt-nav.start.teaser.landingpage",
       function success() {
           test.assertExists(".hero.mt-nav.start.teaser.landingpage");
           this.click(".hero.mt-nav.start.teaser.landingpage");
       },
       function fail() {
           test.assertExists(".hero.mt-nav.start.teaser.landingpage");
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot1.png", "html");
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
   casper.waitForSelector(x("//img[@src='/website/var/tmp/image-thumbnails/0/4888/thumb__badgeImage/badge_outfittery2x@2x.jpeg']"),
       function success() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/4888/thumb__badgeImage/badge_outfittery2x@2x.jpeg']"));
         },
       function fail() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/4888/thumb__badgeImage/badge_outfittery2x@2x.jpeg']"));
   });
   casper.waitForSelector(".container.mt-md.mb-md.inner .row",
       function success() {
           test.assertExists(".container.mt-md.mb-md.inner .row");
           this.click(".container.mt-md.mb-md.inner .row");
       },
       function fail() {
           test.assertExists(".container.mt-md.mb-md.inner .row");
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
   casper.then(function() {
       test.assertUrlMatch(/^https:\/\/www\.outfittery\.com\/$/);
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
   casper.waitForSelector(x("//img[@src='/assets/price/staples_shirts.png']"),
       function success() {
           test.assertExists(x("//img[@src='/assets/price/staples_shirts.png']"));
         },
       function fail() {
           test.assertExists(x("//img[@src='/assets/price/staples_shirts.png']"));
   });
   casper.waitForSelector(x("//img[@src='/assets/elements/fabian.jpg']"),
       function success() {
           test.assertExists(x("//img[@src='/assets/elements/fabian.jpg']"));
         },
       function fail() {
           test.assertExists(x("//img[@src='/assets/elements/fabian.jpg']"));
   });
   casper.waitForSelector("section:nth-child(27) .clearfix",
       function success() {
           test.assertExists("section:nth-child(27) .clearfix");
           this.click("section:nth-child(27) .clearfix");
       },
       function fail() {
           test.assertExists("section:nth-child(27) .clearfix");
   });
   casper.waitForSelector(x("//img[@src='/website/var/tmp/image-thumbnails/0/1552/thumb__index_trustbar_payment_blog/payment_methods_at.jpeg']"),
       function success() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/1552/thumb__index_trustbar_payment_blog/payment_methods_at.jpeg']"));
         },
       function fail() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/1552/thumb__index_trustbar_payment_blog/payment_methods_at.jpeg']"));
   });
   casper.waitForSelector(x("//img[@src='/website/var/tmp/image-thumbnails/0/1552/thumb__index_trustbar_payment_blog/payment_methods_at.jpeg']"),
       function success() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/1552/thumb__index_trustbar_payment_blog/payment_methods_at.jpeg']"));
         },
       function fail() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/1552/thumb__index_trustbar_payment_blog/payment_methods_at.jpeg']"));
   });
   casper.waitForSelector(x("//img[@src='/website/var/tmp/image-thumbnails/0/1552/thumb__index_trustbar_payment_blog/payment_methods_at.jpeg']"),
       function success() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/1552/thumb__index_trustbar_payment_blog/payment_methods_at.jpeg']"));
         },
       function fail() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/1552/thumb__index_trustbar_payment_blog/payment_methods_at.jpeg']"));
   });
   casper.waitForSelector(x("//img[@src='/website/var/tmp/image-thumbnails/0/1552/thumb__index_trustbar_payment_blog/payment_methods_at.jpeg']"),
       function success() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/1552/thumb__index_trustbar_payment_blog/payment_methods_at.jpeg']"));
         },
       function fail() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/1552/thumb__index_trustbar_payment_blog/payment_methods_at.jpeg']"));
   });
   casper.waitForSelector(x("//img[@src='/website/var/tmp/image-thumbnails/0/1558/thumb__index_trustbar_deliver/trust_dhl@2x.jpeg']"),
       function success() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/1558/thumb__index_trustbar_deliver/trust_dhl@2x.jpeg']"));
         },
       function fail() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/1558/thumb__index_trustbar_deliver/trust_dhl@2x.jpeg']"));
   });
   casper.waitForSelector(".col-lg-4.col-md-4.col-sm-8.col-md-push-0.col-sm-push-2.mt-sm.mb-sm a > .img-responsive.hover-light",
       function success() {
           test.assertExists(".col-lg-4.col-md-4.col-sm-8.col-md-push-0.col-sm-push-2.mt-sm.mb-sm a > .img-responsive.hover-light");
           this.click(".col-lg-4.col-md-4.col-sm-8.col-md-push-0.col-sm-push-2.mt-sm.mb-sm a > .img-responsive.hover-light");
       },
       function fail() {
           test.assertExists(".col-lg-4.col-md-4.col-sm-8.col-md-push-0.col-sm-push-2.mt-sm.mb-sm a > .img-responsive.hover-light");
   });
   casper.waitForSelector(x("//img[@src='/website/var/tmp/image-thumbnails/0/4201/thumb__index_trustbar_payment_blog/blog_entry_en.jpeg']"),
       function success() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/4201/thumb__index_trustbar_payment_blog/blog_entry_en.jpeg']"));
         },
       function fail() {
           test.assertExists(x("//img[@src='/website/var/tmp/image-thumbnails/0/4201/thumb__index_trustbar_payment_blog/blog_entry_en.jpeg']"));
   });
   casper.waitForSelector(x("//img[@src='/assets/media/tv/sky.jpg']"),
       function success() {
           test.assertExists(x("//img[@src='/assets/media/tv/sky.jpg']"));
         },
       function fail() {
           test.assertExists(x("//img[@src='/assets/media/tv/sky.jpg']"));
   });
   casper.waitForSelector(x("//img[@src='/images.jpg']"),
       function success() {
           test.assertExists(x("//img[@src='/images.jpg']"));
         },
       function fail() {
           test.assertExists(x("//img[@src='/images.jpg']"));
   });
   casper.waitForSelector(x("//img[@src='/assets/media/tv/gq.jpg']"),
       function success() {
           test.assertExists(x("//img[@src='/assets/media/tv/gq.jpg']"));
         },
       function fail() {
           test.assertExists(x("//img[@src='/assets/media/tv/gq.jpg']"));
   });
   casper.waitForSelector(x("//img[@src='/images-1-.jpg']"),
       function success() {
           test.assertExists(x("//img[@src='/images-1-.jpg']"));
         },
       function fail() {
           test.assertExists(x("//img[@src='/images-1-.jpg']"));
   });
 <       function success() {
           test.assertExists(x("//img[@src='/bloomberg.jpg']"));
         },`lh\ap[ekrg]       function fail() {
           test.assertExists(x("//img[@src='/bloomberg.jpg']"));
   });
   casper.waitForSelector(x("//img[@src='/assets/media/financial_times.jpg']"),
       function success() {
           test.assertExists(x("//img[@src='/assets/media/financial_times.jpg']"));
         },
       function fail() {
           test.assertExists(x("//img[@src='/assets/media/financial_times.jpg']"));
   });
   casper.waitForSelector("",
       function success() {
           test.assertExists("");
           this.click("");
       },
       function fail() {
           test.assertExists("");
   });
   casper.waitForSelector("",
       function success() {
           test.assertExists("");
           this.click("");
       },
       function fail() {
           test.assertExists("");
   });
   casper.waitForSelector("",
       function success() {
           test.assertExists("");
           this.click("");
       },
       function fail() {
           test.assertExists("");
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
   casper.waitForSelector(".container.mt",
       function success() {
           test.assertExists(".container.mt");
           this.click(".container.mt");
       },
       function fail() {
           test.assertExists(".container.mt");
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
       test.comment("Homepage validation");
       test.comment("Will execute initial flow via prominent lets go bvutton");
   });

   casper.waitForSelector(x("//a[normalize-space(text())=concat('LET',\"'\",'S GO')]"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())=concat('LET',\"'\",'S GO')]"));
           this.click(x("//a[normalize-space(text())=concat('LET',\"'\",'S GO')]"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())=concat('LET',\"'\",'S GO')]"));
   });

   casper.run(function() {test.done();});
});