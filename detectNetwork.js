// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)
var creditCards = [
  {
  name: 'China UnionPay',
  prefix: chinaUnionPayPrefixes(),
  cardLength: [16,17,18,19],
  },
  {
  name: 'Diner\'s Club',
  prefix: [38,39],
  cardLength: [14],
  },
  {
  name: 'American Express',
  prefix: [34,37],
  cardLength: [15],
  },
  {
  name: 'MasterCard',
  prefix: [51, 52, 53, 54, 55],
  cardLength: [16],
  },
  {
  name: 'Discover',
  prefix: [6011, 644, 645, 646, 647, 648, 649, 65],
  cardLength: [16,19],
  },
  {
  name: 'Maestro',
  prefix: [5018, 5020, 5038, 6304],
  cardLength: [12,13,14,15,16,17,18,19],
  },
  {
  name: 'Switch',
  prefix: [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759],
  cardLength: [16, 18, 19],
  },
  {
  name: 'Visa',
  prefix: [4],
  cardLength: [16,13,19],
  },
]

var detectNetwork = function (cardNumber){
  var prefixCheck = false;
  var lengthCheck = false;
  var len = cardNumber.length;
  console.log('This card has ' + len + ' digts');
  var prefx = parseInt(prefixSlicer(cardNumber));
  console.log('This card has a prefix of ' + prefx);
  for (var i=0; i<creditCards.length; i++){
    for (var y=0; y<creditCards[i].prefix.length; y++){
        if (creditCards[i].prefix[y] === prefx){
           prefixCheck = true;
           for (var z=0; z<creditCards[i].cardLength.length; z++){
             if(creditCards[i].cardLength[z] === len){
              lengthCheck = true;
             }
           }
        }
    }
    if (prefixCheck === true && lengthCheck === true){
      return creditCards[i].name;
    }
  }
};

function prefixSlicer(string){
  if (string.startsWith('38') || string.startsWith('39') || string.startsWith('34') || string.startsWith('37') || string.startsWith('51') || string.startsWith('52') || string.startsWith('53') || string.startsWith('54') || string.startsWith('55') || string.startsWith('65')){
    return string.slice(0,2);
  } else if (string.startsWith('6011') || string.startsWith('50') || string.startsWith('6333') || string.startsWith('628') || string.startsWith('49') || string.startsWith('67') || string.startsWith('6304')){
    return string.slice(0,4);
  } else if (string.startsWith('64')){
    return string.slice(0,3);
  } else if (string.startsWith('622') || string.startsWith('6331') || string.startsWith('564')){
    return string.slice(0,6);
  } else if (string.startsWith('4') && !string.startsWith('49')){
    return string.slice(0,1);
  }
}

function chinaUnionPayPrefixes(){
  var prefixArr = [624,625,626,6282,6283,6284,6285,6286, 6287, 6288];
    for (var i=622126; i<=622925; i++){
      prefixArr.push(i);
  }
  return prefixArr;
}

detectNetwork('6304123456781');
