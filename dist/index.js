"use strict";var m=function(i,a){return function(){try{return a||i((a={exports:{}}).exports,a),a.exports}catch(r){throw (a=0, r)}};};var u=m(function(h,c){
var q=require('@stdlib/math-base-special-absf/dist'),x=require('@stdlib/math-base-assert-is-nanf/dist');function p(i,a,r,v,e){var n,s;return x(i)||x(a)?(r[e]=NaN,r[e+v]=NaN,r):(n=q(i),s=q(a),n<s?(r[e]=n,r[e+v]=s,r):(r[e]=s,r[e+v]=n,r))}c.exports=p
});var N=m(function(j,b){
var l=u();function t(i,a){return l(i,a,[0,0],1,0)}b.exports=t
});var y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=u(),g=N();y(g,"assign",O);module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
