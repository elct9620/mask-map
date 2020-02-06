(function(t){function e(e){for(var r,i,c=e[0],s=e[1],u=e[2],f=0,h=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&h.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);p&&p(e);while(h.length)h.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var p=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"3b6b":function(t,e,n){"use strict";var r=n("e277"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Map",{attrs:{points:t.pharmacies}})],1)},a=[],i=(n("d3b7"),n("96cf"),n("1da1")),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"map",attrs:{id:"map"}})},s=[],u=(n("99af"),n("4de4"),n("4160"),n("d81d"),n("b0c0"),n("159b"),n("3835")),p=n("e11e"),f=n.n(p),h=(n("6cc5"),{props:{points:{type:Array,default:function(){return[]}}},data:function(){return{center:[25.105497,121.597366],zoom:13,markerIcon:null,noMarkIcon:null,markers:[],map:null}},mounted:function(){this.initMap(),this.setView()},methods:{initMap:function(){var t=this;this.map=f.a.map(this.$refs.map),this.map.setView(this.center,this.zoom),this.map.on("moveend",(function(e){return t.onMove(e)})),this.map.on("zoomend",(function(e){return t.onZoom(e)})),this.markerIcon=f.a.icon({iconUrl:"/marker.png",iconSize:[32,32],iconAnchor:[17,31]}),this.noMarkerIcon=f.a.icon({iconUrl:"/red_marker.png",iconSize:[32,32],iconAnchor:[17,31]}),f.a.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(this.map)},setView:function(){var t=this;"geolocation"in navigator&&navigator.geolocation.getCurrentPosition((function(e){t.center=[e.coords.latitude,e.coords.longitude],t.map.setView(t.center,t.zoom)}))},addMarker:function(){var t=this;this.points.filter((function(e){var n=Object(u["a"])(e.geometry.coordinates,2),r=n[0],o=n[1],a=Object(u["a"])(t.center,2),i=a[0],c=a[1],s=Math.sqrt(Math.pow(i-o,2)+Math.pow(c-r,2));return s<=.01*(23-t.zoom)})).forEach((function(e){var n=e.properties.mask_adult+e.properties.mask_child>0,r=f.a.marker([e.geometry.coordinates[1],e.geometry.coordinates[0]],{icon:n?t.markerIcon:t.noMarkerIcon,title:e.properties.name});t.markers.push(r),r.addTo(t.map),r.bindPopup("".concat(e.properties.name," @ ").concat(e.properties.address))}))},clearMarkers:function(){var t=this;this.markers.forEach((function(e){t.map.removeLayer(e)})),this.markers=[]},refreshMarker:function(){this.clearMarkers(),this.addMarker()},onMove:function(t){if(t.target){var e=this.map.getCenter();this.center=[e.lat,e.lng]}},onZoom:function(t){t.target&&(this.zoom=this.map.getZoom())}},watch:{center:function(){this.refreshMarker()},points:function(){this.refreshMarker()}}}),l=h,m=(n("3b6b"),n("2877")),d=Object(m["a"])(l,c,s,!1,null,"726e63a8",null),g=d.exports,v={name:"app",components:{Map:g},data:function(){return{pharmacies:[]}},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getPoints();case 2:t.pharmacies=e.sent;case 3:case"end":return e.stop()}}),e)})))()},methods:{getPoints:function(){return fetch("https://kiang.github.io/pharmacies/json/points.json").then((function(t){return t.json()})).then((function(t){return t["features"]}))}}},b=v,k=(n("034f"),Object(m["a"])(b,o,a,!1,null,null,null)),y=k.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(y)}}).$mount("#app")},"85ec":function(t,e,n){},e277:function(t,e,n){}});
//# sourceMappingURL=app.e65c2ca7.js.map