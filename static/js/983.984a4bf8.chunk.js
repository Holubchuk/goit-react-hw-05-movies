"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[983],{155:function(e,t,n){n.d(t,{O:function(){return o}});n(791);var r=n(689),a=n(87),c="MoviesList_trendingItem__ULUxz",i="MoviesList_trendingLink__XEAij",u=n(184),o=function(e){var t=e.trending,n=(0,r.TH)();return(0,u.jsx)("div",{children:Array.isArray(t)&&t.map((function(e){return(0,u.jsx)("li",{className:c,children:(0,u.jsx)(a.rU,{to:"/movies/".concat(e.id),state:{from:n},className:i,children:e.title})},e.id)}))})}},983:function(e,t,n){n.r(t);var r=n(861),a=n(439),c=n(757),i=n.n(c),u=n(791),o=n(155),s=n(784),d=n(393),p=n(390),f=n(184);t.default=function(){var e=(0,u.useState)([]),t=(0,a.Z)(e,2),n=t[0],c=t[1],v=(0,u.useState)(d.n.idle),h=(0,a.Z)(v,2),b=h[0],g=h[1];return(0,u.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g(d.n.pending),e.next=4,(0,p.B8)();case 4:t=e.sent,n=t.results,c(n),g(d.n.success),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),g(d.n.error),console.error("Error fetching data:",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,f.jsxs)("main",{children:[b===d.n.pending&&(0,f.jsx)(s.a,{}),b===d.n.success&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("p",{style:{marginLeft:"100px",fontWeight:700,fontSize:"48px"},children:"Trending today"}),(0,f.jsx)(o.O,{trending:n})]})]})}},390:function(e,t,n){n.d(t,{B8:function(){return u},Re:function(){return d},h7:function(){return p},oD:function(){return f},qd:function(){return s}});var r=n(861),a=n(757),c=n.n(a),i=n(294);function u(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/trending/movie/day","d425559355e0879fed139185dbbb845a",e.next=4,i.Z.get("".concat("https://api.themoviedb.org/3/trending/movie/day","?api_key=").concat("d425559355e0879fed139185dbbb845a","&language=en-US"));case 4:return t=e.sent,e.abrupt("return",t.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var s=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/movie/","d425559355e0879fed139185dbbb845a",e.next=4,i.Z.get("".concat("https://api.themoviedb.org/3/movie/").concat(t,"?api_key=").concat("d425559355e0879fed139185dbbb845a","&language=en-US"));case 4:return n=e.sent,e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/movie/","d425559355e0879fed139185dbbb845a",e.next=4,i.Z.get("".concat("https://api.themoviedb.org/3/movie/").concat(t,"/credits?api_key=").concat("d425559355e0879fed139185dbbb845a","&language=en-US"));case 4:return n=e.sent,e.abrupt("return",n.data.cast);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/movie/","d425559355e0879fed139185dbbb845a",e.next=4,i.Z.get("".concat("https://api.themoviedb.org/3/movie/").concat(t,"/reviews?api_key=").concat("d425559355e0879fed139185dbbb845a","&language=en-US&page=1"));case 4:return n=e.sent,e.abrupt("return",n.data.results);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/search/movie","d425559355e0879fed139185dbbb845a",e.next=4,i.Z.get("".concat("https://api.themoviedb.org/3/search/movie","?api_key=").concat("d425559355e0879fed139185dbbb845a","&query=").concat(t,"&include_adult=false&language=en-US&page=1"));case 4:return n=e.sent,e.abrupt("return",n.data.results);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},393:function(e,t,n){n.d(t,{n:function(){return r}});var r={idle:"idle",pending:"pending",success:"success",error:"error"}}}]);
//# sourceMappingURL=983.984a4bf8.chunk.js.map