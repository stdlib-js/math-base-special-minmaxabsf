"use strict";var m=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var u=m(function(h,c){
var q=require('@stdlib/math-base-special-absf/dist'),x=require('@stdlib/math-base-assert-is-nanf/dist');function p(i,r,a,v,e){var n,s;return x(i)||x(r)?(a[e]=NaN,a[e+v]=NaN,a):(n=q(i),s=q(r),n<s?(a[e]=n,a[e+v]=s,a):(a[e]=s,a[e+v]=n,a))}c.exports=p
});var N=m(function(j,b){
var l=u();function t(i,r){return l(i,r,[0,0],1,0)}b.exports=t
});var y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=u(),g=N();y(g,"assign",O);module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
