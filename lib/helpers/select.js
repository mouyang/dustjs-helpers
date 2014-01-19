module.exports = function(_console) {
return (function(dust, _console){
  /**
  select helper works with one of the eq/ne/gt/gte/lt/lte/default providing the functionality
  of branching conditions
  @param key,  ( required ) either a string literal value or a dust reference
               a string literal value, is enclosed in double quotes, e.g. key="foo"
               a dust reference may or may not be enclosed in double quotes, e.g. key="{val}" and key=val are both valid
  @param type (optional), supported types are  number, boolean, string, date, context, defaults to string
  **/
  dust.helpers["select"] = function(chunk, context, bodies, params) {
    var body = bodies.block;
    // key is required for processing, hence check for defined
    if( params && typeof params.key !== "undefined"){
      // returns given input as output, if the input is not a dust reference, else does a context lookup
      var key = dust.helpers.tap(params.key, chunk, context);
      // bodies['else'] is meaningless and is ignored
      if( body ) {
       return chunk.render(bodies.block, context.push({ isSelect: true, isResolved: false, selectKey: key }));
      }
      else {
       _console.log( "Missing body block in the select helper ");
       return chunk;
      }
    }
    // no key
    else {
      _console.log( "No key given in the select helper!" );
    }
    return chunk;
  };
})(typeof exports !== 'undefined' ? require('dustjs-linkedin') : dust, _console);
};