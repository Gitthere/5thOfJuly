var chai = require ('chai');
should = chai.should();
practice = require('../practice');

describe("5th of July test exercise", function() {
  it("should console log every number up to count then calls CB function", function() {
    practice.printZeroTo(10, function() {
      console.log("done");
    });
  });

  it("should add a and b then invoke cb function, passing back the answer", function() {
    practice.asyncAdd(2, 3, function(answer) {
      console.log("the answer is " + answer);
    });
  });

  it("should return arrays of names filtered by the filterFunction condition", function() {
    var people = [
      {
        name: "derek",
        age: 20
      },
      {
        name: "alex",
        age: 21
      },
      {
        name: "peter",
        age: 22
      },
      {
        name: "shannon",
        age:23
      },
      {
        name: "justin",
        age: 24
      }
    ];

    var odd_people = practice.filter(people, function(person) {
      return person.age % 2 != 0;
    });

    odd_people.should.have.members(["shannon", "alex"]);
    // odd_people.should.eql(["alex", "shannon"]);
    // odd_people.should.include("alex");
    // odd_people.should.include("shannon");

  });

});




