/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';

describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail.
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out.
  // You will not be able to proceed with a failing test.

  it('Throws an error so it fails', function() {

  });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num%2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {

    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

//************TW COMMENT the number below has a length of 13 not 14*************
  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('3934567890123') === 'Diner\'s Club') {
      throw new Error('Test failed');
    }

  });
});

//***TW COMMENT - SHOULD BE IF !isTrue
describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true.
  var assert = function(isTrue) {
    if(isTrue === false) {
      throw new Error('Test failed');
    }

  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it.
  //   http://chaijs.com/
  var assert = chai.assert;


  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others.
  // If you want to know more, check out the documentation.
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
  var should = chai.should();

  it('has a prefix of 51 and a length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 52 and a length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 53 and a length of 16', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });


  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten
  // these tests to pass using should syntax, refactor your tests to
  // use either expect or should, but not both.
  var should = chai.should();

  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })

});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  it('has a prefix of 6011 and a length of 16', function(){
    detectNetwork('6011123456789101').should.equal('Discover')
  });
  it('has a prefix of 6011 and a length of 19', function(){
    detectNetwork('6011123456789101574').should.equal('Discover')
  });
  it('has a prefix of 65 and a length of 19', function(){
    detectNetwork('6511123456789101574').should.equal('Discover')
  });
  it('has a prefix of 65 and a length of 16', function(){
    detectNetwork('6511123456789101').should.equal('Discover')
  });
  for (var prefix = 644; prefix <= 649; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function(){
        var suffix = '1010101010101'
        var cardNum = prefix.toString().concat(suffix)
      detectNetwork(cardNum).should.equal('Discover');
  });
  })(prefix)}
  for (var prefix = 644; prefix <= 649; prefix++) {
    (function(prefix) {
  it('has a prefix of ' + prefix + ' and a length of 19',function(){
        var longSuffix = '1010101010101000'
        var longCardNum = prefix.toString().concat(longSuffix)
      detectNetwork(longCardNum).should.equal('Discover');
  });
  })(prefix)}
});


describe('Maestro', function() {

  // name: 'Maestro',
  // prefix: [5018, 5020, 5038, 6304],
  // cardLength: [12,13,14,15,16,17,18,19],
  //5018
  it('has a prefix of 5018 and a length of 16', function(){
    detectNetwork('5018123456789101').should.equal('Maestro')
  });
  it('has a prefix of 5018 and a length of 17', function(){
    detectNetwork('50181234567891010').should.equal('Maestro')
  });
  it('has a prefix of 5018 and a length of 18', function(){
    detectNetwork('501812345678910100').should.equal('Maestro')
  });
  it('has a prefix of 5018 and a length of 19', function(){
    detectNetwork('5018123456789101878').should.equal('Maestro')
  });
  it('has a prefix of 5018 and a length of 12', function(){
    detectNetwork('501812345678').should.equal('Maestro')
  });
  it('has a prefix of 5018 and a length of 13', function(){
    detectNetwork('5018123456781').should.equal('Maestro')
  });
  it('has a prefix of 5018 and a length of 14', function(){
    detectNetwork('50181234567810').should.equal('Maestro')
  });
  it('has a prefix of 5018 and a length of 15', function(){
    detectNetwork('501812345678100').should.equal('Maestro')
  });
  //5020
  it('has a prefix of 5020 and a length of 16', function(){
    detectNetwork('5020123456789101').should.equal('Maestro')
  });
  it('has a prefix of 5020 and a length of 17', function(){
    detectNetwork('50201234567891010').should.equal('Maestro')
  });
  it('has a prefix of 5020 and a length of 18', function(){
    detectNetwork('502012345678910100').should.equal('Maestro')
  });
  it('has a prefix of 5020 and a length of 19', function(){
    detectNetwork('5020123456789101878').should.equal('Maestro')
  });
  it('has a prefix of 5020 and a length of 12', function(){
    detectNetwork('502012345678').should.equal('Maestro')
  });
  it('has a prefix of 5020 and a length of 13', function(){
    detectNetwork('5020123456781').should.equal('Maestro')
  });
  it('has a prefix of 5020 and a length of 14', function(){
    detectNetwork('50201234567810').should.equal('Maestro')
  });
  it('has a prefix of 5020 and a length of 15', function(){
    detectNetwork('502012345678100').should.equal('Maestro')
  });
  //5038
  it('has a prefix of 5038 and a length of 16', function(){
    detectNetwork('5038123456789101').should.equal('Maestro')
  });
  it('has a prefix of 5038 and a length of 17', function(){
    detectNetwork('50381234567891010').should.equal('Maestro')
  });
  it('has a prefix of 5038 and a length of 18', function(){
    detectNetwork('503812345678910100').should.equal('Maestro')
  });
  it('has a prefix of 5038 and a length of 19', function(){
    detectNetwork('5038123456789101878').should.equal('Maestro')
  });
  it('has a prefix of 5038 and a length of 12', function(){
    detectNetwork('503812345678').should.equal('Maestro')
  });
  it('has a prefix of 5038 and a length of 13', function(){
    detectNetwork('5038123456781').should.equal('Maestro')
  });
  it('has a prefix of 5038 and a length of 14', function(){
    detectNetwork('50381234567810').should.equal('Maestro')
  });
  it('has a prefix of 5038 and a length of 15', function(){
    detectNetwork('503812345678100').should.equal('Maestro')
  });
  //6304
  it('has a prefix of 6304 and a length of 16', function(){
    detectNetwork('6304123456789101').should.equal('Maestro')
  });
  it('has a prefix of 6304 and a length of 17', function(){
    detectNetwork('63041234567891010').should.equal('Maestro')
  });
  it('has a prefix of 6304 and a length of 18', function(){
    detectNetwork('630412345678910100').should.equal('Maestro')
  });
  it('has a prefix of 6304 and a length of 19', function(){
    detectNetwork('6304123456789101878').should.equal('Maestro')
  });
  it('has a prefix of 6304 and a length of 12', function(){
    detectNetwork('630412345678').should.equal('Maestro')
  });
  it('has a prefix of 6304 and a length of 13', function(){
    detectNetwork('6304123456781').should.equal('Maestro')
  });
  it('has a prefix of 6304 and a length of 14', function(){
    detectNetwork('63041234567810').should.equal('Maestro')
  });
  it('has a prefix of 6304 and a length of 15', function(){
    detectNetwork('630412345678100').should.equal('Maestro')
  });

});
describe('China UnionPay', function(){



  var china = chinaUnionPayPrefixes();
  for(var i=0; i<china.length; i++){
    function checkChina(){
    it('has a prefix of ' + prefix + ' and a length of 16', function(){
    var prefix = china[i].toString();
    if(prefix.length === 3){
    var cardSixteenDig = prefix.concat('0000000000000')
    // console.log(prefix);
    // console.log(cardSixteenDig);
    // console.log(cardSixteenDig.length);
    detectNetwork('cardSixteenDig').should.equal('China UnionPay')
    }
    });
  }
};
});
describe('should support Switch')
