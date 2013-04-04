"use strict"

var countVertices = require("simplicial-complex").countVertices

function cartesianProduct(a, b) {
  var na = countVertices(a)
    , nb = countVertices(b)
    , nr = na * nb
    , al = a.length
    , bl = b.length
    , result = new Array(nb * al + na * bl)
    , ptr = 0
    , i, j, k, x, y, c, nc
  console.log(na, al, nb, bl)
  for(i=0; i<al; ++i) {
    c = a[i]
    for(j=0; j<nb; ++j) {
      nc = c.slice(0)
      for(k=0; k<nc.length; ++k) {
        nc[k] += na * j
      }
      result[ptr++] = nc
    }
  }
  for(i=0; i<bl; ++i) {
    c = b[i]
    for(j=0; j<na; ++j) {
      nc = c.slice(0)
      for(k=0; k<nc.length; ++k) {
        nc[k] = j + na * nc[k]
      }
      result[ptr++] = nc
    }
  }
  return result
}

module.exports = cartesianProduct