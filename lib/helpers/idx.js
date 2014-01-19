(function(dust){
  dust.helpers["idx"] = function(chunk, context, bodies) {
    var body = bodies.block;
    if(body) {
      return bodies.block(chunk, context.push(context.stack.index));
    }
    else {
      return chunk;
    }
  };
})(typeof exports !== 'undefined' ? module.exports = require('dustjs-linkedin') : dust);