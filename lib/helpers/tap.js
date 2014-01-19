(function(dust){
  // Utility helping to resolve dust references in the given chunk
  // uses the Chunk.render method to resolve value
  /*
   Reference resolution rules:
   if value exists in JSON:
    "" or '' will evaluate to false, boolean false, null, or undefined will evaluate to false,
    numeric 0 evaluates to true, so does, string "0", string "null", string "undefined" and string "false". 
    Also note that empty array -> [] is evaluated to false and empty object -> {} and non-empty object are evaluated to true
    The type of the return value is string ( since we concatenate to support interpolated references 

   if value does not exist in JSON and the input is a single reference: {x}
     dust render emits empty string, and we then return false   
     
   if values does not exist in JSON and the input is interpolated references : {x} < {y}
     dust render emits <  and we return the partial output 
     
  */
  dust.helpers["tap"] = function( input, chunk, context ){
    // return given input if there is no dust reference to resolve
    var output = input;
    // dust compiles a string/reference such as {foo} to function, 
    if( typeof input === "function"){
      // just a plain function (a.k.a anonymous functions) in the context, not a dust `body` function created by the dust compiler
      if( input.isFunction === true ){
        output = input();
      } else {
        output = '';
        chunk.tap(function(data){
           output += data;
           return '';
          }).render(input, context).untap();
        if( output === '' ){
          output = false;
        }
      }
    }
   return output;
  };
})(typeof exports !== 'undefined' ? module.exports = require('dustjs-linkedin') : dust);