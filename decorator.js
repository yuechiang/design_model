function Person() {}

Person.prototype.skill = function () {
  console.log("数学");
};

// 装饰器，还会音乐
function MusicDecorator(person) {
  this.person = person;
}

MusicDecorator.prototype.skill = function () {
  this.person.skill();
  console.log("音乐");
};

// 装饰器，还会跑步
function RunDecorator(person) {
  this.person = person;
}

RunDecorator.prototype.skill = function () {
  this.person.skill();
  console.log("跑步");
};

var person = new Person();

// 装饰一下
var person1 = new MusicDecorator(person);
person1 = new RunDecorator(person1);
console.log("person:");
person.skill(); // 数学
console.log("person1:");
person1.skill(); // 数学 音乐 跑步
