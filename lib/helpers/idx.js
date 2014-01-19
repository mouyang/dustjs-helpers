module.exports = function() {
return (function(dust){
  dust.helpers["idx"] = function(chunk, context, bodies) {
    var body = bodies.block;
    if(body) {
      return bodies.block(chunk, context.push(context.stack.index));
    }
    else {
      return chunk;
    }
  };
})(typeof exports !== 'undefined' ? require('dustjs-linkedin') : dust);
};