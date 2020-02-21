/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
  //a test suite just contains a related set of tests
  describe('RSS Feeds', function() {
    //a tests to make sure that allFeeds variable are defined and not empty
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });


    /* a test that loops through each feed
     * in the allFeeds object and ensures it has a URL defined
     * and that the URL is not empty.
     */

    it('each contains defined URL', function() {
      for (let feed of allFeeds) {
        expect(feed.url).toBeDefined();

        expect(feed.length).not.toBe(0);
        expect(typeof feed.url).toBe('string');
      };

    });

    /* a test that loops through each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     */

    it('each contains defined name', function() {
      for (let feed of allFeeds) {
        expect(feed.name).toBeDefined();

        expect(feed.length).not.toBe('');
        expect(typeof feed.name).toBe('string');
      };

    });






  });

  // test suite named "The menu"

  describe('The menu', function() {
    //ensures the menu element is hidden by default
    it('is hidden by default', function() {
      expect($('body').hasClass('menu-hidden')).toBe(true);

    });



    //test that ensures the menu changes visibility when the menu icon is clicked
    it('menu display when clicked', function() {

      $('.menu-icon-link').click();
      expect($('body').hasClass('menu-hidden')).toBe(false);

      $('.menu-icon-link').click();
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });


  });


  //test suite named "Initial Entries"
  describe('Initial Entries', function() {

    beforeEach(function(done) {
      //load the first feed
      loadFeed(0, done);
    });

    //to ensure that feec have one element at least
    it('contains at least one element', function() {

      expect($('.feed .entry').length).toBeGreaterThan(0);

    });


  });


  // test suite named "New Feed Selection"
  describe('New Feed Selection', function() {

    let firstFeed, secondFeed;
    /* test to ensure that the content changes
     when a new feed is loaded by the loadFeed function*/
    beforeEach(function(done) {
      loadFeed(0, function() {
        // Load and store first Feed data
        firstFeed = $('.feed').html();
        loadFeed(1, function() {
          // Load and store new Feed data
          secondFeed = $('.feed').html();
          // Start tests
          done();
        });
      });

    });
    //To ensures when a new feed is loaded

    it('contains new feed', function() {
      expect(firstFeed).not.toBe(secondFeed);
    });
  });

}());
