(this["webpackJsonpstar-wars"]=this["webpackJsonpstar-wars"]||[]).push([[0],{16:function(t,e,n){t.exports={title:"Entity_title__kq8c5",item:"Entity_item__22Gzs",name:"Entity_name__myJjJ",descr:"Entity_descr__X9Efh"}},36:function(t,e,n){t.exports={list:"EntitiesList_list__2B1i8"}},39:function(t,e,n){t.exports={button:"Search_button__3MVsp"}},40:function(t,e,n){t.exports=n(87)},45:function(t,e,n){},87:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(34),i=n.n(c),l=n(11),o=n(13),s=(n(45),n(5)),u=n(6),m=n(8),h=n(7),p=n(9),f=n(18),b=n.n(f);b.a.defaults.baseURL="https://swapi.co/api";var y=function(t){return b.a.get(t).catch((function(t){return console.log(t)}))},v=n(35),E=n.n(v),O=n(15),d=n(20),j=n.n(d),g=function(t){var e=Object.keys(j.a.parse(t))[0].split("/");return e[e.length-3]},S=function(t,e){t.map((function(t){return y(t).then((function(t){var n=[t.data];e((function(t){return[].concat(Object(O.a)(t),n)}))}))}))},k=function(t){return"name"===Object.keys(t).find((function(t){return"name"===t}))?"name":"title"},_=n(36),A=n.n(_),N=Object(o.g)((function(t){var e=t.entitiesArr,n=t.match;return r.a.createElement("ul",null,e&&function(t,e){return t.sort((function(t,e){return t["".concat(k(t))]>e["".concat(k(e))]?1:t["".concat(k(t))]<e["".concat(k(e))]?-1:0}))}(e).map((function(t){return r.a.createElement("li",{className:A.a.list,key:E.a.generate()},t&&r.a.createElement(l.b,{to:{pathname:"/".concat(g(t.url),"/").concat(t["".concat(k(t))]),match:{url:t.url,route:n.path}}},t["".concat(k(t))]))})))})),w=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(r)))).state={response:[],entitiesValue:"films"},n}return Object(p.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t,e=this;(t=this.state.entitiesValue,b.a.get("/".concat(t)).then((function(t){return t.data.results})).catch((function(t){return t}))).then((function(t){return e.setState({response:t})}))}},{key:"render",value:function(){var t=this.state.response,e=t||null;return r.a.createElement("div",null,r.a.createElement(N,{entitiesArr:e,name:"title"}))}}]),e}(r.a.Component),x=n(12),J=n(16),I=n.n(J),C=function(t){var e=t.entity,n=g(e.url),a=n.split("").filter((function(t,e){return e!==n.length-1})).join("");return r.a.createElement("div",{className:I.a.container},"film"!==a&&r.a.createElement("h2",{className:I.a.title},a," ",e.name),r.a.createElement("ul",null,e&&Object.entries(e).filter((function(t){var e=Object(x.a)(t,2),n=e[0],a=e[1];return"name"!==n&&"films"!==n&&"url"!==n&&"created"!==n&&"edited"!==n&&"unknown"!==a&&!Array.isArray(a)})).map((function(t){var e=Object(x.a)(t,2),n=e[0],a=e[1];return r.a.createElement("li",{className:I.a.item,key:n},r.a.createElement("p",{className:I.a.name},n),r.a.createElement("p",{className:I.a.descr},a))}))))},D=Object(o.g)((function(t){var e=t.entity,n=t.match,c=Object(a.useState)([]),i=Object(x.a)(c,2),l=i[0],o=i[1],s=Object(a.useState)([]),u=Object(x.a)(s,2),m=u[0],h=u[1];return Object(a.useEffect)((function(){S(e.planets,o),S(e.starships,h)}),[]),r.a.createElement("div",null,r.a.createElement("h2",null,r.a.createElement("p",null,"Star Wars:")," ",r.a.createElement("p",null,e.title)),r.a.createElement(N,{entitiesArr:l,name:"name"}),r.a.createElement(N,{entitiesArr:m,name:"name"}),r.a.createElement(C,{entity:e,match:n}))})),M=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(r)))).state={entity:null},n}return Object(p.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=this.props,n=e.location,a=e.match;if(n.match){var r=n.match.url;y(r).then((function(e){t.setState({entity:e.data}),localStorage.setItem(a.path,JSON.stringify(e.data))}))}else this.setState({entity:JSON.parse(localStorage.getItem(a.path))})}},{key:"render",value:function(){var t=this.state.entity,e=this.props.match;return t&&r.a.createElement(D,{entity:t,match:e})}}]),e}(r.a.Component),q=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(r)))).state={entity:null},n}return Object(p.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=this.props,n=e.location,a=e.match;if(n.match){var r=n.match.url;y(r).then((function(e){t.setState({entity:e.data}),localStorage.setItem(a.path,JSON.stringify(e.data))}))}else this.setState({entity:JSON.parse(localStorage.getItem(a.path))})}},{key:"render",value:function(){var t=this.state.entity,e=this.props.match;return r.a.createElement("div",null,t&&r.a.createElement(C,{entity:t,match:e}))}}]),e}(r.a.Component),B=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(r)))).state={entity:null},n}return Object(p.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=this.props,n=e.location,a=e.match;if(n.match){var r=n.match.url;y(r).then((function(e){t.setState({entity:e.data}),localStorage.setItem(a.path,JSON.stringify(e.data))}))}else this.setState({entity:JSON.parse(localStorage.getItem(a.path))})}},{key:"render",value:function(){var t=this.state.entity,e=this.props.match;return r.a.createElement("div",null,t&&r.a.createElement(C,{entity:t,match:e}))}}]),e}(r.a.Component),G=Object(o.g)((function(t){var e=t.location,n=Object(a.useState)([]),c=Object(x.a)(n,2),i=c[0],l=c[1],o=function(t){return j.a.parse(t.search)}(e),s=Object.keys(o).length>1&&o.categories.split("").includes(",")?o.categories.split(","):[o.categories],u=o.q;return Object(a.useEffect)((function(){l([]),Object(O.a)(s).map((function(t){return function(t,e){var n="/".concat(t,"/?search=").concat(e);return b.a.get(n).then((function(t){return t.data.results})).catch((function(t){return console.log(t)}))}(t,u).then((function(t){var e=t;l((function(t){return[].concat(Object(O.a)(t),Object(O.a)(e))}))}))}))}),[u]),r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement("p",null,"Searched next:")),r.a.createElement(N,{entitiesArr:i}))})),H=n(39),V=n.n(H),L=["films","starships","planets"],R=Object(o.g)(function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(r)))).state={inputQuery:"",queryResponseArr:[]},n.handlerSubmit=function(t){t.preventDefault();var e=n.props.history,a=t.target.children[0].value;if(a)return e.push({pathname:"/search",search:"categories=".concat(L,"&&q=").concat(a)})},n.handlerGoBackHome=function(){n.props.history.push("/films")},n}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("button",{type:"button",onClick:this.handlerGoBackHome,className:V.a.button},"Home"),r.a.createElement("form",{onSubmit:this.handlerSubmit},r.a.createElement("input",{type:"input",placeholder:"Search..."}),r.a.createElement("button",{type:"submit"},"Search")))}}]),e}(r.a.Component)),z=function(){return r.a.createElement("div",null,r.a.createElement(R,null),r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"/search",exact:!0,component:G}),r.a.createElement(o.b,{path:"/films",exact:!0,component:w}),r.a.createElement(o.b,{path:"/films/:id",exact:!0,component:M}),r.a.createElement(o.b,{path:"/planets/:id",exact:!0,component:q}),r.a.createElement(o.b,{path:"/starships/:id",exact:!0,component:B}),r.a.createElement(o.a,{to:"/films"})))},Q=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(o.b,{component:z}))};i.a.render(r.a.createElement(l.a,{basename:"/"},r.a.createElement(o.b,{component:Q})),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.4861a242.chunk.js.map