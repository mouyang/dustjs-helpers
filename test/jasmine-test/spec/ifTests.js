var ifTests = [
  {
    name: "if",
    tests: [
      {
        name:     "if helper with no body",
        source:   '{@if cond="{x}<{y}"/}',
        context:  { x: 2, y: 3 },
        expected: "",
        message: "should test if helper with no body and fail gracefully"
      },
      {
        name:     "if helper without else",
        source:   '{@if cond="{x}<{y}"}<div> X < Y </div>{/if}',
        context:  { x: 2, y: 3 },
        expected: "<div> X < Y </div>",
        message: "should test if helper without else"
      },
      {
        name:     "if helper with else block",
        source:   '{@if cond=" \'{x}\'.length && \'{y}\'.length "}<div> X and Y exists </div>{:else}<div> X and Y does not exists </div>{/if}',
        context:  {},
        expected: "<div> X and Y does not exists </div>",
        message: "should test if helper with else block"
      },
      {
        name:     "if helper with else using the or condition",
        source:   '{@if cond=" \'{x}\'.length || \'{y}\'.length "}<div> X or Y exists </div>{:else}<div> X or Y does not exists </div>{/if}',
        context:  { x: 1},
        expected: "<div> X or Y exists </div>",
        message: "should test if helper with else using the or condition"
      },
      {
        name:     "if helper with else using the and conditon",
        source:   '{@if cond="( \'{x}\'.length ) && ({x}<3)"}<div> X exists and is 1 </div>{:else}<div> x is not there </div>{/if}',
        context:  { x : 1},
        expected: "<div> X exists and is 1 </div>",
        message: "should test if helper with else usingt he and conditon"
      },
      {
        name:     "if helper using $idx",
        source:   '{#list}{@if cond="( {$idx} == 1 )"}<div>{y}</div>{/if}{/list}',
        context:  { x : 1, list: [ { y: 'foo' }, { y: 'bar'} ]},
        expected: "<div>bar</div>",
        message: "should test the if helper using $idx"
      }
    ]
  }
];

if (typeof module !== "undefined" && typeof require !== "undefined") {
  module.exports = ifTests; // We're on node.js
} else {
  this['helpersTests'] = (this['helpersTests'] || []).concat(ifTests); // We're on the browser
}