(function(t){function e(e){for(var n,r,o=e[0],c=e[1],l=e[2],f=0,d=[];f<o.length;f++)r=o[f],s[r]&&d.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},s={app:0},i=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),s=a.n(n);s.a},1410:function(t,e){t.exports="data:image/png;base64,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"},2712:function(t,e,a){"use strict";var n=a("ac99"),s=a.n(n);s.a},3347:function(t,e,a){"use strict";var n=a("6492"),s=a.n(n);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),a("RouterView"),a("Footer")],1)},i=[],r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("div",{staticClass:"jumbotron"},[a("h1",{staticClass:"display-4",attrs:{id:"title"}},[t._v("Have you visited every state?")])])])}],c={name:"Header"},l=c,u=(a("df51"),a("2877")),f=Object(u["a"])(l,r,o,!1,null,"ee2abaac",null),d=f.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("div",{staticClass:"m-2"},[a("span",{staticClass:"p-3"},[a("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),a("span",{staticClass:"p-3"},[a("router-link",{attrs:{to:"/about"}},[t._v("About this site")])],1)]),t._m(0)])},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"text-right p-2"},[t._v("Header image by\n        "),a("a",{attrs:{href:"http://unsplash.com/photos/KpBXAOs80YI"}},[t._v("@chrislawton via Unsplash")]),a("br"),a("a",{attrs:{href:"http://icons8.com/icon/43632/map"}},[t._v("Map icon by Icons8")])])}],h={name:"Footer"},v=h,b=(a("2712"),Object(u["a"])(v,p,m,!1,null,"06353fe8",null)),y=b.exports,A={name:"app",components:{Header:d,Footer:y}},j=A,O=(a("034f"),Object(u["a"])(j,s,i,!1,null,null,null)),S=O.exports,x=a("8c4f"),P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"state-list"}},[a("Summary",{attrs:{total:t.totalVisited,visitedAll:t.visitedAll}}),a("div",{staticClass:"d-flex flex-wrap justify-content-around"},t._l(t.states,function(e){return a("div",{key:e.name,staticClass:"p-2"},[a("State",{attrs:{state:e},on:{isVisited:t.updateVisited}})],1)}),0)],1)},g=[],w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"state-summary p-2 rounded"},[n("span",{staticClass:"m-2"},[t._v(t._s(t.state.name))]),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.stateVisited,expression:"stateVisited"}],staticClass:"m-2",attrs:{id:"visited",type:"checkbox"},domProps:{checked:Array.isArray(t.stateVisited)?t._i(t.stateVisited,null)>-1:t.stateVisited},on:{change:[function(e){var a=t.stateVisited,n=e.target,s=!!n.checked;if(Array.isArray(a)){var i=null,r=t._i(a,i);n.checked?r<0&&(t.stateVisited=a.concat([i])):r>-1&&(t.stateVisited=a.slice(0,r).concat(a.slice(r+1)))}else t.stateVisited=s},function(e){return t.$emit("isVisited",t.stateName,t.stateVisited)}]}})]),n("p",[n("router-link",{attrs:{to:{name:"detail",params:{state:t.stateName}}}},[n("img",{staticClass:"map-icon",attrs:{src:a("1410")}})])],1)])},H=[],T=(a("7f7f"),{name:"State",props:{state:Object},data:function(){return{stateName:this.state.name,stateVisited:this.state.visited}}}),k=T,C=(a("f005"),Object(u["a"])(k,w,H,!1,null,"c757910e",null)),R=C.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"summary"},[a("h3",[t._v("You have visited "+t._s(t.total)+" "+t._s(t.statesPlural))]),t.visitedAll?a("p",{attrs:{id:"visited-all"}},[t._v("\n        You have visited all 50 states and the District of Columbia!\n    ")]):t._e()])},V=[],_=(a("c5f6"),{name:"Summary",props:{total:Number,visitedAll:Boolean},computed:{statesPlural:function(){return 1===this.total?"state":"states"}}}),z=_,W=(a("3347"),Object(u["a"])(z,E,V,!1,null,"80817452",null)),F=W.exports,I={name:"StateList",components:{Summary:F,State:R},data:function(){return{states:[]}},mounted:function(){this.getAll()},methods:{getAll:function(){var t=this;this.$stateService.getAll().then(function(e){t.states=e})},updateVisited:function(t,e){var a=this;this.$stateService.setVisited(t,e).then(function(t){a.getAll()})}},computed:{totalVisited:function(){var t=this.states.filter(function(t){return t.visited});return t.length},visitedAll:function(){var t=this.states.filter(function(t){return t.visited});return t.length==this.states.length}}},G=I,N=Object(u["a"])(G,P,g,!1,null,null,null),X=N.exports,Z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},L=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h2",[t._v("Where have you traveled to?")]),a("p",[t._v("Use this site to keep track of how many states you have visited")]),a("p",[t._v("A Vue.js site by Truyen.")])])}],K={name:"About"},M=K,J=Object(u["a"])(M,Z,L,!1,null,null,null),U=J.exports,Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"state-detail p-2"},[a("h2",[t._v("The State of "+t._s(t.state.name))]),t.state.visited?a("p",[t._v("You have visited this state")]):a("p",[t._v("You have not visited this state")]),a("div",{attrs:{id:"map-container"}},[a("l-map",{ref:"stateMap",staticStyle:{height:"100%",width:"100%"},attrs:{zoom:t.zoom,center:t.center}},[a("l-tile-layer",{attrs:{url:t.url}})],1)],1)])},D=[],q=a("a40a"),Q=a("2699"),B={name:"StateDetail",components:{LTileLayer:q["a"],LMap:Q["a"]},data:function(){return{state:{name:""},url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png",zoom:2,center:[44,-103],bounds:null}},mounted:function(){this.state.name=this.$route.params.state,this.$refs.stateMap.mapObject.dragging.disable(),this.fetchStateData()},methods:{fetchStateData:function(){var t=this;this.$stateService.getOne(this.state.name).then(function(e){t.state=e,t.zoom=e.zoom,t.center=[e.lat,e.lon],t.$refs.stateMap.mapObject.flyTo(t.center,t.zoom)}).catch(function(t){return console.error(t)})}}},$=B,tt=(a("d762"),Object(u["a"])($,Y,D,!1,null,"51b5d28e",null)),et=tt.exports,at=new x["a"]({routes:[{path:"/",component:X},{path:"/about",component:U},{path:"/detail/:state",name:"detail",component:et}]}),nt=a("9f7b"),st=a.n(nt),it=a("bc3a"),rt=a.n(it),ot={getAll:function(){return rt.a.get("/api/states/").then(function(t){return t.data})},setVisited:function(t,e){return rt.a.patch("/api/state/"+t,{visited:e}).then(function(t){return t.data})},getOne:function(t){return rt.a.get("/api/states/"+t).then(function(t){return t.data})}};a("f9e3"),a("2dd8"),a("6cc5");n["default"].use(x["a"]),n["default"].use(st.a),n["default"].prototype.$stateService=ot,new n["default"]({render:function(t){return t(S)},router:at}).$mount("#app")},"5aef":function(t,e,a){},6492:function(t,e,a){},"64a9":function(t,e,a){},ac99:function(t,e,a){},bbf7:function(t,e,a){},d762:function(t,e,a){"use strict";var n=a("bbf7"),s=a.n(n);s.a},df51:function(t,e,a){"use strict";var n=a("fd39"),s=a.n(n);s.a},f005:function(t,e,a){"use strict";var n=a("5aef"),s=a.n(n);s.a},fd39:function(t,e,a){}});
//# sourceMappingURL=app.920fa96d.js.map