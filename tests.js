//single_test.js

var assert = require("assert");
var webdriver = require("selenium-webdriver");

var buildDriver = function(caps) {
 return new webdriver.Builder()
   .usingServer(
     "http://" +
     LT_USERNAME +
     ":" +
     LT_ACCESS_KEY +
     "@hub.lambdatest.com/wd/hub"
   )
   .withCapabilities(caps)
   .build();
};

describe("Google's Search Functionality for " + caps.browserName, function() {
 var driver;
 this.timeout(0);

 beforeEach(function(done) {
   caps.name = this.currentTest.title;
   driver = buildDriver(caps);
   done();
 });

 it("can find search results", function(done) {
   driver.get("https://www.lambdatest.com").then(function() {
     driver.getTitle().then(function(title) {
       setTimeout(function() {
         console.log(title);
         assert(
           title.match(
             "Cross Browser Testing Tools | Test Your Website on Different Browsers | LambdaTest"
           ) != null
         );
         done();
       }, 10000);
     });
   });
 });

 afterEach(function(done) {
   if (this.currentTest.isPassed()) {
     driver.executeScript("lambda-status=passed");
   } else {
     driver.executeScript("lambda-status=failed");
   }
   driver.quit().then(function() {
     done();
   });
 });
});