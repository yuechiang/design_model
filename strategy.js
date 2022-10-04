let errMsgs = {
  required: "内容不能为空。",
  isNumber: "只能输入数字。",
  minLength: "输入的长度不够。",
};
let rules = {
  required: function (value, errMsg) {
    if (value === "") {
      return errMsg || errMsgs["required"];
    }
  },
  isNumber: function (value, errMsg) {
    if (!/\d+/.test(value)) {
      return errMsg || errMsgs["isNumber"];
    }
  },
  minLength: function (value, length, errMsg) {
    if (value.length < length) {
      return errMsg || errMsgs["minLength"];
    }
  },
};
function Validator() {
  this.items = [];
}

Validator.prototype = {
  constructor: Validator,
  add: function (value, rule, errMsg) {
    let arg = [value];
    if (rule.indexOf("minLength") !== -1) {
      let temp = rule.splite(":");
      rule = temp[0];
      arg.push(temp[1]);
    }
    arg.push(errMsg);
    this.items.push(function () {
      return rules[rule].apply(this, arg);
    });
  },
  start: function () {
    for (let i = 0; i < this.items.length; i++) {
      let ret = this.items[i]();
      if (ret) {
        console.log(ret);
      }
    }
  },
};

let validate = new Validator();

let value = "yue";
validate.add(value, "isNumber");
validate.add("", "required", "No empty");
validate.start();
