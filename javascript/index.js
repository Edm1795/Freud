document.getElementById("date").innerHTML = Date();

var message = "in global";
console.log("global: message " + message);

var organization = new Object();
organization.name = "Hauptmann's Music Theory";
console.log(organization);
organization.founder = "Andrew Switzer";
console.log(organization);
console.log(organization);

var s;
s = "Edmonton";
console.log(s);

// console.log(q);

// var q;
// console.log(q);

function Circle (radius) {
  this.radius = radius;
}
Circle.prototype.getArea =
  function () {
    return Math.PI * Math.pow(this.radius, 2);
  }

var myCircle = new Circle(10);
console.log(myCircle.getArea());

var myCircleTwo = new Circle(20);
console.log(myCircleTwo.getArea());
