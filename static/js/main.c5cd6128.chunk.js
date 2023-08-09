(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n.n(a),r=n(15),s=(n(23),n(24),n(14)),i=n(5),o=n.n(i),u=n(7),l=n(4),j=n(38),p=(n(26),n(1)),b=function(){return Object(p.jsx)("div",{className:"header",children:Object(p.jsx)("img",{src:"https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png",alt:"Pokedex",className:"header_logo"})})},m=(n(28),c.a.memo((function(e){var t=e.pokemon,n=e.infoPokemon,r=Object(a.useState)(null),s=Object(l.a)(r,2),i=s[0],j=s[1],b=c.a.useCallback((function(){n(i)}),[n,i]);return Object(a.useEffect)((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t.url);case 3:if((n=e.sent).ok){e.next=6;break}throw new Error("Network response was not ok. Status: ".concat(n.status));case 6:return e.next=8,n.json();case 8:a=e.sent,j(a),e.next=15;break;case 12:throw e.prev=12,e.t0=e.catch(0),new Error("Something went wrong");case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}})()()}),[t.url]),Object(p.jsx)("div",{className:"card",onClick:b,role:"button",tabIndex:"0",children:i&&Object(p.jsxs)("div",{className:"card_info",children:[Object(p.jsx)("img",{className:"card_image",src:i.sprites.front_default,alt:""}),Object(p.jsx)("h2",{className:"card_title",children:t.name}),Object(p.jsx)("div",{className:"card_types",children:i.types.map((function(e){return Object(p.jsx)("span",{className:"card_type type-".concat(e.type.name),children:e.type.name},e.slot)}))})]})})}))),f=(n(29),c.a.memo((function(e){var t=e.data,n=Object(a.useState)(!1),c=Object(l.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)(!0),o=Object(l.a)(i,2),u=o[0],j=o[1];return Object(a.useEffect)((function(){t&&(j(!1),setTimeout((function(){s(!0)}),300))}),[t]),Object(p.jsx)(p.Fragment,{children:u?Object(p.jsx)("p",{children:"Select a Pokemon"}):Object(p.jsx)(p.Fragment,{children:t&&Object(p.jsxs)("div",{className:"poke-info ".concat(r?"show":""),children:[Object(p.jsx)("h1",{className:"poke-name",children:t.name.charAt(0).toUpperCase()+t.name.slice(1)}),Object(p.jsx)("img",{src:t.sprites.front_default,alt:"",className:"poke-image"}),Object(p.jsxs)("div",{className:"abilities",children:[Object(p.jsx)("h2",{className:"abilities-title",children:"Abilities:"}),Object(p.jsx)("ul",{className:"abilities-list",children:t.abilities.map((function(e){return Object(p.jsx)("li",{className:"ability-item",children:e.ability.name},e.ability.name)}))})]}),Object(p.jsx)("div",{className:"base-stat",children:Object(p.jsxs)("table",{className:"base-stat-table",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"Stat"}),Object(p.jsx)("th",{children:"Value"})]})}),Object(p.jsxs)("tbody",{children:[t.stats.map((function(e){return Object(p.jsxs)("tr",{className:"base-stat-row",children:[Object(p.jsx)("td",{className:"stat-name",children:e.stat.name.charAt(0).toUpperCase()+e.stat.name.slice(1)}),Object(p.jsx)("td",{className:"stat-value",children:e.base_stat})]},e.stat.name)})),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{className:"stat-name",children:"Type"}),Object(p.jsx)("td",{className:"stat-value",children:t.types.map((function(e){return e.type.name})).join(", ")})]})]})]})})]})})})}))),d=(n(30),function(e){var t=e.onClick;return Object(p.jsx)("button",{className:"button",onClick:t,type:"button",children:"Load More"})}),h=(n(31),function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([]),i=Object(l.a)(r,2),h=i[0],O=i[1],x=Object(a.useState)([]),v=Object(l.a)(x,2),k=v[0],w=v[1],N=Object(a.useState)([]),y=Object(l.a)(N,2),g=y[0],_=y[1],S=Object(a.useState)(16),C=Object(l.a)(S,2),E=C[0],A=C[1],P=Object(a.useState)(0),F=Object(l.a)(P,2),U=F[0],I=F[1],J=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("https://pokeapi.co/api/v2/pokemon/");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:throw e.prev=7,e.t0=e.catch(0),new Error("Something went wrong");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J();case 2:t=e.sent,O(t.results),I(t.count);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("https://pokeapi.co/api/v2/type");case 2:t=e.sent,_(t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]);var M=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n,a,c,r,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==k.length){e.next=8;break}return e.next=3,j.a.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=".concat(E));case 3:return t=e.sent,n=t.data,O(n.results),I(n.count),e.abrupt("return");case 8:return e.prev=8,a=k.map((function(e){return j.a.get("https://pokeapi.co/api/v2/type/".concat(e))})),e.next=12,Promise.all(a);case 12:c=e.sent,r=c.map((function(e){return e.data.pokemon.map((function(e){return e.pokemon}))})),s=r.reduce((function(e,t){return e.filter((function(e){return t.some((function(t){return t.name===e.name}))}))})),O(s),e.next=21;break;case 18:throw e.prev=18,e.t0=e.catch(8),new Error("Something went wrong");case 21:case"end":return e.stop()}}),e,null,[[8,18]])})));return function(){return e.apply(this,arguments)}}(),T=function(e){var t=e.target.value,n=e.target.checked;w(n?function(e){return[].concat(Object(s.a)(e),[t])}:function(e){return e.filter((function(e){return e!==t}))})},B=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("https://pokeapi.co/api/v2/pokemon?offset=".concat(E,"&limit=16"));case 3:t=e.sent,n=t.data.results,O((function(e){return[].concat(Object(s.a)(e),Object(s.a)(n))})),A((function(e){return e+16})),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(0),new Error("Something went wrong");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){M()}),[k,E]),Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(b,{}),Object(p.jsxs)("div",{className:"container-content",children:[Object(p.jsxs)("div",{className:"container_left-content",children:[Object(p.jsx)("div",{className:"type-filter",children:g.map((function(e){return Object(p.jsx)("label",{htmlFor:"type-".concat(e.name),className:"type-filter__label ".concat(e.name),children:Object(p.jsxs)("div",{className:"type-filter__checkbox-label",children:[Object(p.jsx)("input",{type:"checkbox",id:"type-".concat(e.name),value:e.name,checked:k.includes(e.name),onChange:T}),Object(p.jsx)("span",{className:"type-filter__checkbox"}),e.name.charAt(0).toUpperCase()+e.name.slice(1)]})},e.name)}))}),h.slice(0,E).map((function(e){return Object(p.jsx)(m,{pokemon:e,infoPokemon:function(e){return c(e)}},e.name)})),E<U?Object(p.jsx)(d,{onClick:B}):null]}),Object(p.jsx)("div",{className:"container_right-content",children:Object(p.jsx)(f,{data:n})})]})]})});var O=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(h,{})})};Object(r.createRoot)(document.getElementById("root")).render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(O,{})}))}},[[36,1,2]]]);
//# sourceMappingURL=main.c5cd6128.chunk.js.map