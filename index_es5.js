'use strict';

var arrow = function arrow() {
  var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Tywin";

  var arr1 = ['Cersei', 'Jaime'];
  var arr2 = [param, 'Tyrion'];
  param = [].concat(arr1, arr2);
  return param;
};
