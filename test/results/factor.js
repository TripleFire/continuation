/* Generated by Continuation.js v0.0.5 */
var factor;
factor = function (n, callback) {
  var rest;
  if (n == 0) {
    return callback(1);
  }
  factor(n - 1, function () {
    rest = arguments[0];
    setTimeout(function () {
      console.log(rest);
      callback(n * rest);
    }, 1000);
  });
};
factor(6, function () {
});