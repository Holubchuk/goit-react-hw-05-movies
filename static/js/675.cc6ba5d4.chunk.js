"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[675],{155:function(e,t,n){n.d(t,{O:function(){return s}});n(791);var r=n(689),a=n(87),c="MoviesList_trendingItem__ULUxz",u="MoviesList_trendingLink__XEAij",i=n(184),s=function(e){var t=e.trending,n=(0,r.TH)();return(0,i.jsx)("div",{children:Array.isArray(t)&&t.map((function(e){return(0,i.jsx)("li",{className:c,children:(0,i.jsx)(a.rU,{to:"/movies/".concat(e.id),state:{from:n},className:u,children:e.title})},e.id)}))})}},675:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r=n(861),a=n(439),c=n(757),u=n.n(c),i=n(791),s=n(87),o=n(784),d=n(393),p="SearchBar_searchForm__V6XO6",f="SearchBar_searchFormInput__9ldTo",h="SearchBar_searchFormButton__U7vlA",v=n(184),b=function(e){var t=e.handleSubmit;return(0,v.jsxs)("form",{className:p,onSubmit:t,children:[(0,v.jsx)("input",{className:f,name:"search",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",required:!0}),(0,v.jsx)("button",{type:"submit",className:h,children:"Search"})]})},l=n(155),m=n(390),g=function(){var e=(0,i.useState)([]),t=(0,a.Z)(e,2),n=t[0],c=t[1],p=(0,s.lr)(),f=(0,a.Z)(p,2),h=f[0],g=f[1],x=(0,i.useState)(d.n.idle),_=(0,a.Z)(x,2),y=_[0],k=_[1],w=h.get("query");(0,i.useEffect)((function(){if(null!==w){var e=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k(d.n.pending),e.next=4,(0,m.oD)(t);case 4:n=e.sent,c(n),k(d.n.success),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),k(d.n.error);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();e(w)}}),[w]);return(0,v.jsxs)("div",{children:[(0,v.jsx)(b,{handleSubmit:function(e){e.preventDefault();var t=e.currentTarget.elements.search.value;c([]),g({query:t}),e.target.reset()}}),y===d.n.pending&&(0,v.jsx)(o.a,{}),y===d.n.success&&(0,v.jsx)(l.O,{trending:n})]})}},390:function(e,t,n){n.d(t,{B8:function(){return i},Re:function(){return d},h7:function(){return p},oD:function(){return f},qd:function(){return o}});var r=n(861),a=n(757),c=n.n(a),u=n(294);function i(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/trending/movie/day","d425559355e0879fed139185dbbb845a",e.next=4,u.Z.get("".concat("https://api.themoviedb.org/3/trending/movie/day","?api_key=").concat("d425559355e0879fed139185dbbb845a","&language=en-US"));case 4:return t=e.sent,e.abrupt("return",t.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var o=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/movie/","d425559355e0879fed139185dbbb845a",e.next=4,u.Z.get("".concat("https://api.themoviedb.org/3/movie/").concat(t,"?api_key=").concat("d425559355e0879fed139185dbbb845a","&language=en-US"));case 4:return n=e.sent,e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/movie/","d425559355e0879fed139185dbbb845a",e.next=4,u.Z.get("".concat("https://api.themoviedb.org/3/movie/").concat(t,"/credits?api_key=").concat("d425559355e0879fed139185dbbb845a","&language=en-US"));case 4:return n=e.sent,e.abrupt("return",n.data.cast);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/movie/","d425559355e0879fed139185dbbb845a",e.next=4,u.Z.get("".concat("https://api.themoviedb.org/3/movie/").concat(t,"/reviews?api_key=").concat("d425559355e0879fed139185dbbb845a","&language=en-US&page=1"));case 4:return n=e.sent,e.abrupt("return",n.data.results);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/search/movie","d425559355e0879fed139185dbbb845a",e.next=4,u.Z.get("".concat("https://api.themoviedb.org/3/search/movie","?api_key=").concat("d425559355e0879fed139185dbbb845a","&query=").concat(t,"&include_adult=false&language=en-US&page=1"));case 4:return n=e.sent,e.abrupt("return",n.data.results);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},393:function(e,t,n){n.d(t,{n:function(){return r}});var r={idle:"idle",pending:"pending",success:"success",error:"error"}}}]);
//# sourceMappingURL=675.cc6ba5d4.chunk.js.map