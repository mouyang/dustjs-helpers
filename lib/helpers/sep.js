(function(dust){
  dust.helpers["sep"] = function(chunk, context, bodies) {
    var body = bodies.block;
    if (context.stack.index === context.stack.of - 1) {
      return chunk;
    }
    if(body) {
     return bodies.block(chunk, context);
    }
    else {
     return chunk;
    }
  };
})(typeof exports !== 'undefined' ? module.exports = require('dustjs-linkedin') : dust);