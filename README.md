# simplicial-cartesian-product
Constructs the [cartesian product of two graphs](http://en.wikipedia.org/wiki/Cartesian_product_of_graphs).  (Not to be confused with the tensor/categorical product.)

# Install

    npm install simplicial-cartesian-product
    
# Example

```javascript
var prod = require("simplicial-cartesian-product")
console.log(prod([[0,1]], [[0,1]]))
```

# `require("graph-cartesian-product")(a, b)`
Given a pair of simplicial complexes, produces their cartesian product.

* `a` and `b` are [simplicial complexes](https://github.com/mikolalysenko/simplicial-complex)

**Returns:** The cartesian product of `a` and `b`.  New vertex coordinates are of the form `a_index + b_index * countVertices(a)`

Credits
=======
(c) 2013 Mikola Lysenko. MIT License

