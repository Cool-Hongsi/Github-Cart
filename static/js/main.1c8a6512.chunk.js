(window.webpackJsonpgithubcart=window.webpackJsonpgithubcart||[]).push([[0],{41:function(e,t,a){e.exports=a(73)},46:function(e,t,a){},47:function(e,t,a){},52:function(e,t,a){},54:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),c=a.n(l),o=(a(46),a(5)),u=a(6),i=a(9),d=a(7),p=a(8),m=(a(47),a(19)),s=a(15),h=a(14),E=(a(52),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.total;return r.a.createElement("div",{className:"navbar","data-test":"navbarComponent"},r.a.createElement("nav",null,r.a.createElement("input",{type:"checkbox",id:"nav",className:"hidden"}),r.a.createElement("label",{htmlFor:"nav",className:"nav-btn"},r.a.createElement("i",null),r.a.createElement("i",null),r.a.createElement("i",null)),r.a.createElement("div",{className:"logo"},r.a.createElement("a",{href:"/"},"Github Cart")),r.a.createElement("div",{className:"nav-wrapper","data-test":"navwrapper"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(m.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/cart"},"Cart (",e,")"))))))}}]),t}(n.Component)),b=Object(h.b)(function(e){return{total:e.cart.total}})(E),f=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b,null),this.props.children)}}]),t}(n.Component),y=a(17),g=(a(54),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).setData=function(e){a.setState({id:e.target.value})},a.keyPress=function(e){"Enter"===e.key&&a.props.onSelectedID(a.state.id)},a.state={id:""},a.setData=a.setData.bind(Object(y.a)(a)),a.keyPress=a.keyPress.bind(Object(y.a)(a)),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.pending,n=t.error,l=t.repeated,c=t.data,o=t.onSelectedID,u=t.onSelectedCart;return r.a.createElement("div",{className:"github"},r.a.createElement("h1",{className:"github-title"},"Search Github ID"),r.a.createElement("input",{className:"github-input",type:"text",placeholder:"Github ID",onChange:this.setData,onKeyPress:this.keyPress}),r.a.createElement("button",{className:"github-button",onClick:function(){return o(e.state.id)}},"SEND"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),a?r.a.createElement("h3",{className:"github-loading"},"Loading..."):null,l?r.a.createElement("h3",{className:"github-repeated"},"You have already added."):null,n?r.a.createElement("h3",{className:"github-error"},"Error... (Please put correct ID)"):r.a.createElement("div",{className:"github-data"},r.a.createElement("table",{className:"github-table"},r.a.createElement("thead",null),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Login"),r.a.createElement("th",null,"ID"),r.a.createElement("th",null,"Repo"),r.a.createElement("th",null,"Image"),r.a.createElement("th",null,"Link"),r.a.createElement("th",null,"Cart")),c.map(function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.login),r.a.createElement("td",null,e.id),r.a.createElement("td",null,e.public_repos),r.a.createElement("td",null,r.a.createElement("img",{src:e.avatar_url,alt:"",style:{width:"25px",height:"25px"}})),r.a.createElement("td",null,r.a.createElement("a",{href:e.html_url,target:"_blank",rel:"noopener noreferrer"},"Click")),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return u(e)}},"Cart")))})))))}}]),t}(n.Component)),v=a(38),O=a(39),j=a.n(O),C="GET_POST_PENDING",S="GET_POST_SUCCESS",D="GET_POST_FAILURE",k="ADD_CART",_="INCREMENT",N="DECREMENT",w="REMOVE";function I(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function P(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?I(a,!0).forEach(function(t){Object(v.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):I(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var R=function(e){return function(t){return t({type:C}),function(e){return j.a.get("https://api.github.com/users/".concat(e))}(e).then(function(e){t({type:S,payload:e})}).catch(function(e){t({type:D,payload:e})})}},q={pending:!1,error:!1,repeated:!1,data:[{login:"Cool-Hongsi",id:39789641,avatar_url:"https://avatars3.githubusercontent.com/u/39789641?v=4",public_repos:"31",html_url:"https://github.com/Cool-Hongsi",quantity:0}],total:0};var T=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).onSelectedID=function(e){(0,a.props.getPost)(e)},a.onSelectedCart=function(e){(0,a.props.addCart)(e)},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.pending,a=e.error,n=e.repeated,l=e.data;return r.a.createElement(g,{pending:t,error:a,repeated:n,data:l,onSelectedID:this.onSelectedID,onSelectedCart:this.onSelectedCart})}}]),t}(n.Component),x=Object(h.b)(function(e){return{pending:e.cart.pending,error:e.cart.error,repeated:e.cart.repeated,data:e.cart.data}},function(e){return{getPost:function(t){e(R(t))},addCart:function(t){e(function(e){return function(t){t({type:k,payload:e})}}(t))}}})(T),G=(a(72),function(e){var t=e.total,a=e.newData,n=e.onSelectedIncrement,l=e.onSelectedDecrement,c=e.onSelectedRemove;return r.a.createElement("div",{className:"cart-page"},r.a.createElement("table",{className:"cart-table"},r.a.createElement("caption",null,"Total : ",t),r.a.createElement("thead",null),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Login"),r.a.createElement("th",null,"ID"),r.a.createElement("th",null,"Repo"),r.a.createElement("th",null,"Image"),r.a.createElement("th",null,"Link"),r.a.createElement("th",null,"quantity"),r.a.createElement("th",null,"Inc"),r.a.createElement("th",null,"Dec"),r.a.createElement("th",null,"Remove")),a.map(function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.login),r.a.createElement("td",null,e.id),r.a.createElement("td",null,e.public_repos),r.a.createElement("td",null,r.a.createElement("img",{src:e.avatar_url,alt:"",style:{width:"25px",height:"25px"}})),r.a.createElement("td",null,r.a.createElement("a",{href:e.html_url,target:"_blank",rel:"noopener noreferrer"},"Click")),r.a.createElement("td",null,e.quantity),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return n(e)}},"+")),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return l(e)}},"-")),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return c(e)}},"X")))}))))}),A=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).onSelectedIncrement=function(e){(0,a.props.increment)(e)},a.onSelectedDecrement=function(e){(0,a.props.decrement)(e)},a.onSelectedRemove=function(e){(0,a.props.remove)(e)},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.total,a=e.data.filter(function(e){return e.quantity>0});return r.a.createElement(G,{total:t,newData:a,onSelectedIncrement:this.onSelectedIncrement,onSelectedDecrement:this.onSelectedDecrement,onSelectedRemove:this.onSelectedRemove})}}]),t}(n.Component),L=Object(h.b)(function(e){return{total:e.cart.total,data:e.cart.data}},function(e){return{increment:function(t){e(function(e){return{type:_,payload:e}}(t))},decrement:function(t){e(function(e){return{type:N,payload:e}}(t))},remove:function(t){e(function(e){return{type:w,payload:e}}(t))}}})(A),H=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(f,null),r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:x}),r.a.createElement(s.a,{path:"/cart",component:L}))))}}]),t}(n.Component),M=a(16),F=Object(M.c)({cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return P({},e,{pending:!0,error:!1,repeated:!0});case S:for(var a=!1,n=0;n<e.data.length;n++){if(e.data[n].id===t.payload.data.id){a=!0;break}a=!1}return P({},e,!0===a?{pending:!1,error:!1,repeated:!0}:{pending:!1,error:!1,repeated:!1,data:e.data.concat({login:t.payload.data.login,id:t.payload.data.id,avatar_url:t.payload.data.avatar_url,public_repos:t.payload.data.public_repos,html_url:t.payload.data.html_url,quantity:0})});case D:return P({},e,{pending:!1,error:!0,repeated:!1});case k:return e.data.map(function(a){return a.id===t.payload.id&&a.quantity++,P({},e,{pending:!1,error:!1,repeated:!1,total:e.total+1})}),P({},e,{pending:!1,error:!1,repeated:!1,total:e.total+1});case _:return e.data.map(function(a){return a.id===t.payload.id&&a.quantity++,P({},e,{pending:!1,error:!1,total:e.total+1})}),P({},e,{pending:!1,error:!1,total:e.total+1});case N:return e.data.map(function(a){return a.id===t.payload.id&&a.quantity--,P({},e,{pending:!1,error:!1,total:e.total-1})}),P({},e,{pending:!1,error:!1,total:e.total-1});case w:var r=0;return e.data.map(function(a){return a.id===t.payload.id&&(r=a.quantity,a.quantity=0),P({},e,{pending:!1,error:!1,total:e.total-r})}),P({},e,{pending:!1,error:!1,total:e.total-r});default:return e}}}),J=a(40),U=Object(M.d)(F,Object(M.a)(J.a));c.a.render(r.a.createElement(h.a,{store:U},r.a.createElement(H,null)),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.1c8a6512.chunk.js.map