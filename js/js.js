"use strict"
var pow = function() {
  var a = prompt('enter an integer');
  var x = prompt('enter an integer');
  var check = !isNaN(parseFloat(a)) && !isNaN(parseFloat(x)) && (~~a == a) && (~~x == x);

  if (check) {
    var result = 1;
    if (x < 0) {
      while (x++ < 0) {
        result = result * a;
      }
      result = 1 / result;
    } else {
      while (x-- > 0) {
        result = result * a;
      }
    }
    console.log(result);
  } else {
    console.log('not correct');
  }
};

var signIn = function() {
  var arr = [];
  while (arr.length < 5) {
    var name = prompt('enter name');
    arr.push(name);
  }

  var userName = prompt('enter the user name');
  for (var i = 0; i < 5; i++) {
    if (arr[i] === userName) {
      return alert(userName + ', вы успешно вошли');
    }
  }
  return alert('login failed');
};

alert('function pow');
pow();
alert('function singIn')
signIn();
