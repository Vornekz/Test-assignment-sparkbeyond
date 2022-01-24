(function(t){function e(e){for(var a,o,i=e[0],u=e[1],l=e[2],p=0,d=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);s&&s(e);while(d.length)d.shift()();return c.push.apply(c,l||[]),r()}function r(){for(var t,e=0;e<c.length;e++){for(var r=c[e],a=!0,i=1;i<r.length;i++){var u=r[i];0!==n[u]&&(a=!1)}a&&(c.splice(e--,1),t=o(o.s=r[0]))}return t}var a={},n={app:0},c=[];function o(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=a,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(r,a,function(e){return t[e]}.bind(null,a));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var s=u;c.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("cd49")},"2bf6":function(t,e,r){},"3a75":function(t,e,r){"use strict";r("2bf6")},"597d":function(t,e,r){"use strict";r("9374")},"5c0b":function(t,e,r){"use strict";r("9c0c")},9374:function(t,e,r){},"9c0c":function(t,e,r){},cd49:function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"tabs"},[r("button",{staticClass:"button1",class:{selected:"arcGraph"===t.tabs},on:{click:t.changeButton1}},[t._v(" Arc Graphic ")]),r("button",{staticClass:"button2",class:{selected:"treeGraph"===t.tabs},on:{click:t.changeButton2}},[t._v(" Tree Graphic ")])]),"arcGraph"===t.tabs?r("D3_Graphic",{staticClass:"graphic",attrs:{group:t.group,dataset:t.dataset}}):t._e(),"treeGraph"===t.tabs?r("D3_Graphic2",{staticClass:"graphic2",attrs:{group:t.group,dataset:t.dataset}}):t._e()],1)},c=[],o=r("1da1"),i=r("d4ec"),u=r("bee2"),l=r("262e"),s=r("2caf"),p=(r("96cf"),r("9ab4")),d=r("1b40"),h=r("4bb5"),f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("div",{staticClass:"buttons"},[t.groupOrder[0]||t.groupOrder[1]?r("button",{staticClass:"button",on:{click:function(e){t.groupOrder=[]}}},[t._v(" Reset grouping ")]):t._e(),t.groupOrder[1]||1!==t.groupOrder.length?r("button",{staticClass:"button",on:{click:function(e){t.groupOrder=[],t.groupOrder.push("region")}}},[t._v(" Group by region ")]):t._e(),1===t.groupOrder.length?r("button",{staticClass:"button",on:{click:function(e){return t.groupOrder.push("subregion")}}},[t._v(" Group by subregion ")]):t._e()]),r("div",{attrs:{id:"graph"}},[r("svg",{attrs:{id:"svg"}},[r("g")]),r("div",{attrs:{id:"tooltip"}})])])},g=[],y=(r("4e82"),r("b680"),r("a15b"),r("a9e3"),r("99af"),r("898b")),v=function(t){Object(l["a"])(r,t);var e=Object(s["a"])(r);function r(){var t;return Object(i["a"])(this,r),t=e.apply(this,arguments),t.height=40,t.radius=t.height/2,t.color=y["i"](["#828da7","#b06c67","#d17a7a","#9b6165","#846b8d","#a1acd0"]),t.hierarchy=y["d"]({}),t.newGroup=[],t.groupOrder=[],t}return Object(u["a"])(r,[{key:"createHierarchy",value:function(t){var e=y["d"](t,(function(t){return t[1]}));e.sum((function(t){return t.population})).value,e.sort((function(t,e){return y["b"](e.value,t.value)})),this.layout(e),this.hierarchy=e,y["j"]("#svg").select("g").remove(),this.createArc(),this.createText()}},{key:"createSvg",value:function(){var t=900,e=900;return y["j"]("#svg").attr("width",t).attr("height",e).attr("viewBox","0 0 ".concat(t," ").concat(e)).append("svg:g").attr("transform","translate("+t/2+","+e/2+")")}},{key:"arc",value:function(){return y["a"]().startAngle((function(t){return t.x0})).endAngle((function(t){return t.x1})).innerRadius((function(t){return t.y0})).outerRadius((function(t){return t.y1}))}},{key:"arcHover",value:function(){return y["a"]().startAngle((function(t){return t.x0})).endAngle((function(t){return t.x1})).innerRadius((function(t){return t.y0})).outerRadius((function(t){return t.y1+20}))}},{key:"createArc",value:function(){var t=this;this.createSvg().append("g").selectAll("path").data(this.hierarchy.descendants().reverse()).enter().append("svg:path").transition().delay((function(t,e){return 10*e})).attrTween("d",(function(e){var r=y["e"](e.startAngle+.1,e.endAngle),a=t.arc();return function(t){return e.endAngle=r(t),a(e)}})),y["j"]("#svg").selectAll("path").attr("fill-rule","evenodd").style("stroke","#E1D9DFCC").style("stroke-width","0.2").style("fill",(function(e){return t.color((e.children?e:e.parent).data)})).attr("cursor","pointer").attr("fill-opacity","0.6").on("click",(function(e,r){r.children&&r.parent&&(t.newGroup=r.data),r.parent||"World"===r.data[0]||(t.newGroup=t.groupData)})).on("mouseover",(function(e,r){y["j"]("#tooltip").html((r.data[0]?r.data[0]:r.data.key)+"<br/>"+"Population = ".concat((1e-6*r.value).toFixed(3)," milion")).transition().delay(200).style("opacity","1").style("color","#c1c1d0"),y["j"](e.currentTarget).transition().delay(100).attr("d",t.arcHover()).attr("fill-opacity","1").style("stroke","none")})).on("mouseout",(function(e){y["j"]("#tooltip").transition().delay(200).style("opacity","0"),y["j"](e.currentTarget).transition().delay(100).attr("d",t.arc()).attr("fill-opacity","0.6").style("stroke","#E1D9DFCC")}))}},{key:"createText",value:function(){var t=this;y["j"]("#svg").select("g").append("g").attr("pointer-events","none").attr("text-anchor","middle").style("user-select","none").selectAll("text").data(this.hierarchy.descendants()).join("text").attr("fill","#c1c1d0").attr("font-size","13px").attr("fill-opacity",(function(e){return Number(t.labelVisible(e))})).attr("transform",(function(e){return t.labelTransform(e)})).transition().delay(10*this.hierarchy.descendants().length).text((function(t){return t.data[0]?t.data[0]:t.data.key}))}},{key:"labelVisible",value:function(t){return(t.y1-t.y0)*(t.x1-t.x0)>10}},{key:"labelTransform",value:function(t){if(t.y0>0){var e=(t.x0+t.x1)/2*180/Math.PI,r=(t.y0+t.y1)/this.height*this.radius;return"rotate(".concat(e-90,") translate(").concat(r,",0) rotate(").concat(e<180?0:180,")")}return""}},{key:"layout",get:function(){return y["h"]().size([2*Math.PI,this.radius*this.radius])}},{key:"groupData",get:function(){return["World",this.group(this.groupOrder)]}},{key:"onLayoutChanged",value:function(){this.layout(this.hierarchy)}},{key:"onHierarchyChanged",value:function(t){this.createHierarchy(t)}},{key:"onGroupDataChanged",value:function(t){this.createHierarchy(t)}}]),r}(d["c"]);Object(p["a"])([Object(d["b"])({type:Array,required:!0})],v.prototype,"dataset",void 0),Object(p["a"])([Object(d["b"])({type:Function,required:!0})],v.prototype,"group",void 0),Object(p["a"])([Object(d["d"])("layout")],v.prototype,"onLayoutChanged",null),Object(p["a"])([Object(d["d"])("newGroup")],v.prototype,"onHierarchyChanged",null),Object(p["a"])([Object(d["d"])("groupData")],v.prototype,"onGroupDataChanged",null),v=Object(p["a"])([Object(d["a"])({name:"D3_Graphic"})],v);var b=v,j=b,O=(r("597d"),r("2877")),x=Object(O["a"])(j,f,g,!1,null,"a306b892",null),k=x.exports,m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("div",{attrs:{id:"graph2"}},[r("svg",{attrs:{id:"svg2",width:t.width,height:t.height,viewBox:"0, -20, "+(t.width+200)+", "+(t.height+100)}})])])},w=[],G=(r("4de4"),function(t){Object(l["a"])(r,t);var e=Object(s["a"])(r);function r(){var t;return Object(i["a"])(this,r),t=e.apply(this,arguments),t.width=1100,t.height=1100,t.radius=6,t.groupOrder=["region","subregion"],t.newGroup=[],t.hierarchy=y["d"]({}),t}return Object(u["a"])(r,[{key:"layout",get:function(){return y["k"]().size([this.width,this.height])}},{key:"groupData",get:function(){return["World",this.group(this.groupOrder)]}},{key:"createHierarchy",value:function(t){var e=y["d"](t,(function(t){return t[1]}));e.sum((function(t){return t.population})).value,e.sort((function(t,e){return y["b"](e.value,t.value)})),this.layout(e),this.hierarchy=e,y["j"]("#svg2").select("g").remove(),this.createLinks(),this.createCircle(),this.createText()}},{key:"createLinks",value:function(){y["j"]("#svg2").append("g").append("g").attr("fill","none").selectAll("path").data(this.hierarchy.links()).enter().append("path").attr("d",(function(t){return y["g"]()({source:[t.source.y,t.source.x],target:[t.target.y,t.target.x]})})).attr("stroke","#c44141").attr("stroke-width","3").on("mouseover",(function(t,e){null==e.target.children&&(y["j"](t.currentTarget).attr("stroke","#a8c441"),y["j"]("#svg2").selectAll("text").filter((function(){return y["j"](this).text()==e.target.data.key})).attr("fill-opacity","1"),y["j"]("#svg2").selectAll("text").filter((function(){return y["j"](this).text()==e.target.value+" people"})).attr("fill-opacity","1"))})).on("mouseout",(function(t,e){null==e.target.children&&(y["j"](t.currentTarget).attr("stroke","#c44141"),y["j"]("#svg2").selectAll("text").filter((function(){return y["j"](this).text()==e.target.data.key})).attr("fill-opacity","0"),y["j"]("#svg2").selectAll("text").filter((function(){return y["j"](this).text()==e.target.value+" people"})).attr("fill-opacity","0"))}))}},{key:"createCircle",value:function(){var t=this;y["j"]("#svg2").select("g").append("g").selectAll("circle").data(this.hierarchy.descendants()).enter().append("circle").attr("transform",(function(e){return"translate(".concat(e.y+t.radius,", ").concat(e.x,")")})).attr("r",(function(e){return null!=e.children?"".concat(t.radius):"0"})).attr("fill","#fff").attr("fill-opacity",(function(t){return null==t.children?"0":"1"})).attr("cursor","pointer").on("click",(function(e,r){r.children&&r.parent&&(t.newGroup=r.data),r.parent||"World"===r.data[0]||(t.newGroup=t.groupData)})).on("mouseover",(function(t,e){y["j"](t.currentTarget).attr("fill","#a8c441"),y["j"]("#svg2").selectAll("text").filter((function(){return y["j"](this).text()==(1e-6*e.value).toFixed(2)+"m people"})).attr("fill-opacity","1")})).on("mouseout",(function(t,e){y["j"](t.currentTarget).attr("fill","#fff"),y["j"]("#svg2").selectAll("text").filter((function(){return y["j"](this).text()==(1e-6*e.value).toFixed(2)+"m people"})).attr("fill-opacity","0")}))}},{key:"createText",value:function(){y["j"]("#svg2").select("g").append("g").selectAll("text").data(this.hierarchy.descendants()).enter().append("text").attr("transform",(function(t){return null==t.children?"translate(".concat(t.y+10,",").concat(t.x+10,")"):"translate(".concat(t.y,",").concat(t.x-10,")")})).text((function(t){return t.data[0]?t.data[0]:t.data.key})).attr("fill","#c1c1d0").attr("fill-opacity",(function(t){return null==t.children?"0":"1"})).attr("font-size","15px").style("user-select","none"),y["j"]("#svg2").select("g").append("g").selectAll("text").data(this.hierarchy.descendants()).enter().append("text").attr("transform",(function(t){return null==t.parent?"translate(".concat(t.y,",").concat(t.x-30,")"):null==t.children?"translate(".concat(t.y+10,",").concat(t.x+25,")"):"translate(".concat(t.y-115,",").concat(t.x-10,")")})).text((function(t){return null==t.children?t.value+" people":(1e-6*t.value).toFixed(2)+"m people"})).attr("fill","#c1c1d0").attr("fill-opacity","0").attr("font-size","15px").style("user-select","none")}},{key:"onGroupDataChanged",value:function(t){this.createHierarchy(t),console.log(this.hierarchy.descendants())}},{key:"onNewGroupChanged",value:function(t){this.createHierarchy(t)}}]),r}(d["c"]));Object(p["a"])([Object(d["b"])({type:Array,required:!0})],G.prototype,"dataset",void 0),Object(p["a"])([Object(d["b"])({type:Function,required:!0})],G.prototype,"group",void 0),Object(p["a"])([Object(d["d"])("groupData")],G.prototype,"onGroupDataChanged",null),Object(p["a"])([Object(d["d"])("newGroup")],G.prototype,"onNewGroupChanged",null),G=Object(p["a"])([Object(d["a"])({name:"D3_Graphic2"})],G);var D=G,_=D,A=(r("3a75"),Object(O["a"])(_,m,w,!1,null,"93193eda",null)),C=A.exports,T=Object(h["a"])("GraphModule"),H=function(t){Object(l["a"])(r,t);var e=Object(s["a"])(r);function r(){var t;return Object(i["a"])(this,r),t=e.apply(this,arguments),t.tabs="arcGraph",t}return Object(u["a"])(r,[{key:"mounted",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.graphData();case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"changeButton1",value:function(){this.tabs="arcGraph",this.graphData()}},{key:"changeButton2",value:function(){this.tabs="treeGraph",this.graphData()}}]),r}(d["c"]);Object(p["a"])([T.State],H.prototype,"dataset",void 0),Object(p["a"])([T.Getter],H.prototype,"group",void 0),Object(p["a"])([T.Action],H.prototype,"graphData",void 0),H=Object(p["a"])([Object(d["a"])({name:"App",components:{D3_Graphic:k,D3_Graphic2:C}})],H);var P=H,R=P,S=(r("5c0b"),Object(O["a"])(R,n,c,!1,null,null,null)),F=S.exports,M=r("2f62"),B=r("6fc5"),z=function(t){Object(l["a"])(r,t);var e=Object(s["a"])(r);function r(){var t;return Object(i["a"])(this,r),t=e.apply(this,arguments),t.dataset=[],t}return Object(u["a"])(r,[{key:"group",get:function(){var t=this;return function(e){return e[0]&&e[1]?y["c"](t.dataset,(function(t){return t[e[0]]}),(function(t){return t[e[1]]})):e[0]?y["c"](t.dataset,(function(t){return t[e[0]]})):t.dataset}}},{key:"updateData",value:function(t){this.dataset=t||[]}},{key:"graphData",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,y["f"]("data/cities.json");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()}]),r}(B["d"]);Object(p["a"])([B["c"]],z.prototype,"updateData",null),Object(p["a"])([Object(B["a"])({commit:"updateData"})],z.prototype,"graphData",null),z=Object(p["a"])([Object(B["b"])({namespaced:!0})],z);var E=z;a["a"].use(M["a"]);var q=new M["a"].Store({modules:{GraphModule:E}}),L=q;a["a"].config.productionTip=!1,new a["a"]({store:L,render:function(t){return t(F)}}).$mount("#app")}});
//# sourceMappingURL=app.b837e0e1.js.map