var prod = require("../prod.js")
  , equal = require("deep-equal")
  , sc = require("simplicial-complex")

require("tap").test("cartesian product", function(t) {

  function eq(a,b) {
    console.log(a,b)
    t.assert(equal(sc.normalize(a), sc.normalize(b)))
  }
  
  eq(prod([[0,1]], [[0,1]]), [[0,1], [0,2], [1, 3], [2, 3]])
  eq(prod([], [[1,2]]), [])
  eq(prod([], []), [])
  eq(prod([[0,1,2]], [[0,1]]), [[0,1,2], [3,4,5], [0,3], [1,4], [2,5]])
  
  t.end()
})