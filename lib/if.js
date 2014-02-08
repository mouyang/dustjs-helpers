(function(dust, _console){
/**
 if helper for complex evaluation complex logic expressions.
 Note : #1 if helper fails gracefully when there is no body block nor else block
        #2 Undefined values and false values in the JSON need to be handled specially with .length check
           for e.g @if cond=" '{a}'.length && '{b}'.length" is advised when there are chances of the a and b been
           undefined or false in the context
        #3 Use only when the default ? and ^ dust operators and the select fall short in addressing the given logic,
           since eval executes in the global scope
        #4 All dust references are default escaped as they are resolved, hence eval will block malicious scripts in the context
           Be mindful of evaluating a expression that is passed through the unescape filter -> |s
 @param cond, either a string literal value or a dust reference
              a string literal value, is enclosed in double quotes, e.g. cond="2>3"
              a dust reference is also enclosed in double quotes, e.g. cond="'{val}'' > 3"
  cond argument should evaluate to a valid javascript expression
**/
dust.helpers["if"] = function( chunk, context, bodies, params ){
  var body = bodies.block,
      skip = bodies['else'];
  if( params && params.cond){
    var cond = params.cond;
    cond = dust.helpers.tap(cond, chunk, context);
    // eval expressions with given dust references
    if(eval(cond)){
     if(body) {
      return chunk.render( bodies.block, context );
     }
     else {
       _console.log( "Missing body block in the if helper!" );
       return chunk;
     }
    }
    if(skip){
     return chunk.render( bodies['else'], context );
    }
  }
  // no condition
  else {
    _console.log( "No condition given in the if helper!" );
  }
  return chunk;
};
})(typeof exports !== 'undefined' ? module.exports = require('dustjs-linkedin') : dust, 
  (typeof console !== 'undefined')? console: {
    log: function(){
       /* a noop*/
     }
  }
);