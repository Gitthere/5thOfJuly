var practice = {};

//console log every number up to count then calls
//CB function
practice.printZeroTo = function(count, cb) {
  for (var i = 0; i < count; i++) {
    console.log(i);
  }
  cb();
};


practice.asyncAdd = function(a, b, cb) {
  // console.log(a+b);
  cb(a+b);
  return a+b;
};


practice.filter = function(ar_objs, logicFunction) {
  var oddPeople = [];
  for (var i = 0; i < ar_objs.length; i++) {
    if (logicFunction(ar_objs[i])) {
      console.log(ar_objs[i]);
      oddPeople.push(ar_objs[i].name);
    };
  };
  return oddPeople;
};


module.exports = practice;