// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.3-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-boolean@v0.0.3-esm/index.mjs";function s(e,r,s,n,d,i,o,a){var m,f,l,p,j,u;if(e<=0)return i;for(m=t(i,0),f=!1,l=r,p=d,j=a,u=0;u<e;u++)!f&&s[p]&&(l-=1)<=0&&(f=!0),m[j]=f,p+=n,j+=o;return i}function n(e,t,n,d,i,o){return s(e,t,n,d,r(e,d),i,o,r(e,o))}e(n,"ndarray",s);export{n as default,s as ndarray};
//# sourceMappingURL=index.mjs.map
