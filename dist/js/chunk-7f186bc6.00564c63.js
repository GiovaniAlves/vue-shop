(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f186bc6"],{"159b":function(t,e,a){var r=a("da84"),n=a("fdbc"),o=a("785a"),s=a("17c2"),c=a("9112"),i=function(t){if(t&&t.forEach!==s)try{c(t,"forEach",s)}catch(e){t.forEach=s}};for(var l in n)n[l]&&i(r[l]&&r[l].prototype);i(o)},"17c2":function(t,e,a){"use strict";var r=a("b727").forEach,n=a("a640"),o=n("forEach");t.exports=o?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},5530:function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));a("b64b"),a("a4d3"),a("4de4"),a("d3b7"),a("e439"),a("159b"),a("dbb4");function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}},"848a":function(t,e,a){},a640:function(t,e,a){"use strict";var r=a("d039");t.exports=function(t,e){var a=[][t];return!!a&&r((function(){a.call(null,e||function(){return 1},1)}))}},b64b:function(t,e,a){var r=a("23e7"),n=a("7b0b"),o=a("df75"),s=a("d039"),c=s((function(){o(1)}));r({target:"Object",stat:!0,forced:c},{keys:function(t){return o(n(t))}})},bf36:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"text-center text-lg-start bg-light text-muted fixed-bottom"},[a("div",{staticClass:"text-center p-4",staticStyle:{"background-color":"rgba(0, 0, 0, 0.05)"}},[t._v(" © 2022 Todos os direitos reservados: "),a("b",{staticClass:"text-reset fw-bold"},[t._v("Vue Shop")])])])}],o={name:"Footer"},s=o,c=a("2877"),i=Object(c["a"])(s,r,n,!1,null,"21e9be03",null);e["a"]=i.exports},c23d:function(t,e,a){"use strict";a("848a")},db0f:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Navbar"),a("router-view"),a("Footer")],1)},n=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light fixed-top"},[a("div",{staticClass:"container-fluid"},[t._m(0),t._m(1),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav me-auto mb-2 mb-lg-0"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link active",attrs:{to:{name:"home"},"aria-current":"page"}},[t._v("Home")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"productsCatalog"}}},[t._v("Produtos")])],1)]),a("div",{staticClass:"d-flex d-none d-sm-none d-md-none d-lg-block"},[a("div",{staticClass:"container-fluid"},[a("router-link",{staticClass:"navbar-brand text-success d-inline-block align-text-top",attrs:{to:{name:"cart"}}},[a("i",{staticClass:"bi bi-cart3"}),a("span",{staticClass:"fs-6"},[t._v(" ("+t._s(t.cartProducts.length)+") ")])])],1)]),t.user.token?a("ul",{staticClass:"navbar-nav"},[a("li",{staticClass:"nav-item dropdown"},[a("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdownMenuLink",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}},[a("i",{staticClass:"bi bi-person"}),t._v(" Olá, "+t._s(t.user.data.name)+" ")]),a("ul",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdownMenuLink"}},[a("li",[a("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"Orders"}}},[t._v("Meus Pedidos")])],1),a("li",{on:{click:function(e){return e.preventDefault(),t.logout.apply(null,arguments)}}},[a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Sair")])])])])]):a("button",{staticClass:"btn btn-outline-success",attrs:{type:"submit"}},[a("router-link",{staticClass:"text-decoration-none text-black",attrs:{to:{name:"login"}}},[t._v("Login")])],1)])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("i",{staticClass:"bi bi-cart3 fs-4"}),a("b",{staticClass:"navbar-brand"},[t._v(" Vue Shop")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],c=a("5530"),i=a("2f62"),l=a("4360"),u={name:"Navbar",computed:Object(c["a"])({},Object(i["d"])({cartProducts:function(t){return t.cart.cartProducts},user:function(t){return t.auth.user}})),methods:{logout:function(){try{l["a"].dispatch("logout"),this.$router.push({name:"login"})}catch(t){console.log("Error logout...:",t)}}}},b=u,d=a("2877"),f=Object(d["a"])(b,o,s,!1,null,null,null),v=f.exports,p=a("bf36"),g={name:"Website",components:{Footer:p["a"],Navbar:v}},m=g,h=(a("c23d"),Object(d["a"])(m,r,n,!1,null,"08d08b0e",null));e["default"]=h.exports},dbb4:function(t,e,a){var r=a("23e7"),n=a("83ab"),o=a("56ef"),s=a("fc6a"),c=a("06cf"),i=a("8418");r({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(t){var e,a,r=s(t),n=c.f,l=o(r),u={},b=0;while(l.length>b)a=n(r,e=l[b++]),void 0!==a&&i(u,e,a);return u}})},e439:function(t,e,a){var r=a("23e7"),n=a("d039"),o=a("fc6a"),s=a("06cf").f,c=a("83ab"),i=n((function(){s(1)})),l=!c||i;r({target:"Object",stat:!0,forced:l,sham:!c},{getOwnPropertyDescriptor:function(t,e){return s(o(t),e)}})}}]);
//# sourceMappingURL=chunk-7f186bc6.00564c63.js.map