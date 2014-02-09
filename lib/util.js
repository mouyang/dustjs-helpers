var utilities = {
  console : (typeof console !== 'undefined')? console: {
    log: function(){
       /* a noop*/
     }
  }
};

if (typeof module !== "undefined" && typeof require !== "undefined") {
  module.exports = utilities; // We're on node.js
} else {
  dust.utilities = utilities; // We're on the browser
}