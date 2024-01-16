"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[477],{477:function(e,t,n){n.r(t),n.d(t,{default:function(){return U}});var a=n(861),s=n(439),r=n(757),i=n.n(r),c=n(791),o=n(689),u=n(87),l=n(390),d=n(393),p=n(784),v="MovieDetails_detailsContainer__HYV4t",h="MovieDetails_detailsImg__1oqjX",m="MovieDetails_detailsTitle__ZEoLM",f="MovieDetails_detailsVote__n8MlJ",_="MovieDetails_detailsOverview__jSHdQ",x="MovieDetails_detailsGenres__veqw5",g="MovieDetails_detailsOverViewText__9LDeh",b="MovieDetails_detailsGenresText__oVS4A",w="MovieDetails_detailsSpan__R5QnH",j="MovieDetails_addContainer__AsdIS",N="MovieDetails_addText__KVMDO",k="MovieDetails_addLink__dzRP5",C={castContainer:"Cast_castContainer__NIXqj",castItem:"Cast_castItem__-Jcfe",castImg:"Cast_castImg__T4WbF",castText:"Cast_castText__P--Rp",castSpan:"Cast_castSpan__KdGUt",noCastMessage:"Cast_noCastMessage__piD4G"},y=n(184),D=function(){var e=(0,o.UO)().movieId,t=(0,c.useState)([]),n=(0,s.Z)(t,2),r=n[0],u=n[1],v=(0,c.useState)(d.n.idle),h=(0,s.Z)(v,2),m=h[0],f=h[1];return(0,c.useEffect)((function(){var t=function(){var t=(0,a.Z)(i().mark((function t(){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,f(d.n.pending),t.next=4,(0,l.Re)(e);case 4:n=t.sent,u(n),f(d.n.success),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),f(d.n.error);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),(0,y.jsxs)("div",{className:C.castContainer,children:[m===d.n.pending&&(0,y.jsx)(p.a,{}),m===d.n.success&&Array.isArray(r)&&r.length>0?r.map((function(e){return(0,y.jsx)("ul",{className:C.castList,children:(0,y.jsxs)("li",{className:C.castItem,children:[(0,y.jsx)("img",{src:e.profile_path?"https://image.tmdb.org/t/p/original".concat(e.profile_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:e.name,className:C.castImg}),(0,y.jsx)("p",{className:C.castText,children:e.name}),(0,y.jsxs)("p",{className:C.castText,children:[(0,y.jsx)("span",{className:C.castSpan,children:"Character: "})," ",e.character]})]})},e.id)})):m===d.n.success&&(0,y.jsx)("p",{className:C.noCastMessage,children:"No cast available for this movie"})]})},M={reviewsContainer:"Reviews_reviewsContainer__bHfUv",reviewsItem:"Reviews_reviewsItem__Su53A",reviewsAuthor:"Reviews_reviewsAuthor__vf7dl",reviewsContent:"Reviews_reviewsContent__uAAxd",noReviewsMessage:"Reviews_noReviewsMessage__jL7xa"},Z=function(){var e=(0,o.UO)().movieId,t=(0,c.useState)([]),n=(0,s.Z)(t,2),r=n[0],u=n[1],v=(0,c.useState)(d.n.idle),h=(0,s.Z)(v,2),m=h[0],f=h[1];return(0,c.useEffect)((function(){var t=function(){var t=(0,a.Z)(i().mark((function t(){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,f(d.n.pending),t.next=4,(0,l.h7)(e);case 4:n=t.sent,u(n),f(d.n.success),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),f(d.n.error);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),(0,y.jsxs)("div",{className:M.reviewsContainer,children:[m===d.n.pending&&(0,y.jsx)(p.a,{}),m===d.n.success&&Array.isArray(r)&&r.length>0?r.map((function(e){return(0,y.jsx)("ul",{className:M.reviewsList,children:(0,y.jsxs)("li",{className:M.reviewsItem,children:[(0,y.jsx)("p",{className:M.reviewsAuthor,children:e.author}),(0,y.jsx)("p",{className:M.reviewsContent,children:e.content})]})},e.id)})):m===d.n.success&&(0,y.jsx)("p",{className:M.noReviewsMessage,children:"No reviews available for this movie"})]})},S=function(e){var t=e.movieDetails;return(0,y.jsxs)("div",{className:v,children:[(0,y.jsx)("img",{src:t.backdrop_path?"https://image.tmdb.org/t/p/original".concat(t.backdrop_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:t.title,className:h}),(0,y.jsxs)("h3",{className:m,children:[t.title," (",new Date(t.release_date).getFullYear(),")"]}),(0,y.jsxs)("p",{className:f,children:[(0,y.jsx)("span",{className:w,children:"User vote: "}),t.vote_average]}),(0,y.jsx)("p",{className:_,children:"Overview"}),(0,y.jsx)("p",{className:g,children:t.overview}),(0,y.jsx)("p",{className:x,children:"Genres"}),(0,y.jsx)("p",{className:b,children:t.genres.map((function(e){return e.name})).join(", ")})]})},A=function(e){var t=e.movieDetails;return(0,y.jsxs)("div",{children:[(0,y.jsx)(S,{movieDetails:t}),(0,y.jsxs)("div",{className:j,children:[(0,y.jsx)("p",{className:N,children:"Additional information"}),(0,y.jsx)(u.rU,{to:"cast",className:k,children:"Cast"}),(0,y.jsx)(u.rU,{to:"reviews",className:k,children:"Reviews"}),(0,y.jsxs)(o.Z5,{children:[(0,y.jsx)(o.AW,{path:"cast",element:(0,y.jsx)(D,{})}),(0,y.jsx)(o.AW,{path:"reviews",element:(0,y.jsx)(Z,{})})]})]})]})},U=function(){var e,t,n=(0,o.UO)().movieId,r=(0,o.TH)(),v=(0,c.useState)(null),h=(0,s.Z)(v,2),m=h[0],f=h[1],_=(0,c.useState)(d.n.idle),x=(0,s.Z)(_,2),g=x[0],b=x[1],w=(0,c.useRef)(null!==(e=null===(t=r.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/");return(0,c.useEffect)((function(){var e=function(){var e=(0,a.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b(d.n.pending),e.next=4,(0,l.qd)(n);case 4:t=e.sent,f(t),b(d.n.success),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),b(d.n.error);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]),(0,y.jsxs)("div",{children:[(0,y.jsx)(u.rU,{to:w.current,children:"Go back"}),g===d.n.pending&&(0,y.jsx)(p.a,{}),g===d.n.success&&(0,y.jsx)(A,{movieDetails:m})]})}},390:function(e,t,n){n.d(t,{B8:function(){return c},Re:function(){return l},h7:function(){return d},oD:function(){return p},qd:function(){return u}});var a=n(861),s=n(757),r=n.n(s),i=n(294);function c(){return o.apply(this,arguments)}function o(){return(o=(0,a.Z)(r().mark((function e(){var t;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/trending/movie/day","d425559355e0879fed139185dbbb845a",e.next=4,i.Z.get("".concat("https://api.themoviedb.org/3/trending/movie/day","?api_key=").concat("d425559355e0879fed139185dbbb845a","&language=en-US"));case 4:return t=e.sent,e.abrupt("return",t.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var u=function(){var e=(0,a.Z)(r().mark((function e(t){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/movie/","d425559355e0879fed139185dbbb845a",e.next=4,i.Z.get("".concat("https://api.themoviedb.org/3/movie/").concat(t,"?api_key=").concat("d425559355e0879fed139185dbbb845a","&language=en-US"));case 4:return n=e.sent,e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)(r().mark((function e(t){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/movie/","d425559355e0879fed139185dbbb845a",e.next=4,i.Z.get("".concat("https://api.themoviedb.org/3/movie/").concat(t,"/credits?api_key=").concat("d425559355e0879fed139185dbbb845a","&language=en-US"));case 4:return n=e.sent,e.abrupt("return",n.data.cast);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)(r().mark((function e(t){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/movie/","d425559355e0879fed139185dbbb845a",e.next=4,i.Z.get("".concat("https://api.themoviedb.org/3/movie/").concat(t,"/reviews?api_key=").concat("d425559355e0879fed139185dbbb845a","&language=en-US&page=1"));case 4:return n=e.sent,e.abrupt("return",n.data.results);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)(r().mark((function e(t){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/search/movie","d425559355e0879fed139185dbbb845a",e.next=4,i.Z.get("".concat("https://api.themoviedb.org/3/search/movie","?api_key=").concat("d425559355e0879fed139185dbbb845a","&query=").concat(t,"&include_adult=false&language=en-US&page=1"));case 4:return n=e.sent,e.abrupt("return",n.data.results);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},393:function(e,t,n){n.d(t,{n:function(){return a}});var a={idle:"idle",pending:"pending",success:"success",error:"error"}}}]);
//# sourceMappingURL=477.a9e3c830.chunk.js.map