"use strict";var m=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var p=m(function(I,y){
var E=require('@stdlib/strided-base-reinterpret-boolean/dist');function h(e,r,i,s,t,a,v,o){var l,u,n,f,c,q;if(e<=0)return a;for(l=E(a,0),u=!1,n=r,f=t,c=o,q=0;q<e;q++)!u&&i[f]&&(n-=1,n<=0&&(u=!0)),l[c]=u,f+=s,c+=v;return a}y.exports=h
});var R=m(function(J,j){
var d=require('@stdlib/strided-base-stride2offset/dist'),k=p();function w(e,r,i,s,t,a){var v=d(e,s),o=d(e,a);return k(e,r,i,s,v,t,a,o)}j.exports=w
});var g=m(function(K,b){
var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),_=R(),A=p();z(_,"ndarray",A);b.exports=_
});var C=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=g(),x,B=D(C(__dirname,"./native.js"));F(B)?x=G:x=B;module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
