(this["webpackJsonpfrontend-track-app"]=this["webpackJsonpfrontend-track-app"]||[]).push([[0],{65:function(e,t,s){},66:function(e,t,s){"use strict";s.r(t);s(1);var a=s(19),c=s.n(a),n=s(9),i=s(13),l=s(33),r=s(8),o=s(3),d=s(11),u=s.n(d),m=s(16),j=s(17),g=s.n(j),h="ALL_ELEMENTS",p="LOGIN",f="LOGOUT",v="ADD_RECORD",b="ERROR_RECORD",A="ALL_RECORDS",O="ERROR_RECORDS",C="FORM_FALSE",x="FORM_TRUE",w=function(e){return{type:p,payload:e}},N=s(0),B={getUser:function(e,t){return function(){var s=Object(m.a)(u.a.mark((function s(a){return u.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:"https://stormy-headland-20983.herokuapp.com/api/v1/login",g.a.post("https://stormy-headland-20983.herokuapp.com/api/v1/login",{username:e,password:t}).then((function(e){a(w(e.data))})).catch((function(){a(w({id:0,username:"error",token:"",status:!1}))}));case 2:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}()}},y=Object(n.b)((function(e){return{user:e.user}}),B)((function(e){var t=e.getUser,s=e.user,a=Object(o.f)();localStorage.getItem("token")&&a.push("/list"),!0===s.status&&0!==s.id&&a.push("/list");!0===s.status&&0===s.id&&(document.getElementById("login-button").innerHTML="Login",document.getElementById("login-notification-bad").style.display="block",setTimeout((function(){document.getElementById("login-notification-bad").style.display="none"}),3e3));return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("div",{className:"rows login",children:[Object(N.jsxs)("div",{className:"row",children:[Object(N.jsxs)("div",{className:"notification is-danger",id:"login-notification-bad",children:["It looks like you've a trouble with your credentials,",Object(N.jsx)("strong",{children:"would you try again?"})]}),Object(N.jsx)("div",{className:"notification is-success",id:"login-notification-good",children:Object(N.jsx)("strong",{children:"Done!"})})]}),Object(N.jsx)("div",{className:"row",children:Object(N.jsx)("div",{className:"column is-flex is-justify-content-center",children:Object(N.jsxs)("section",{className:"section",children:[Object(N.jsx)("img",{src:"data:image/png;base64,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",alt:"logo",className:"login-logo"}),Object(N.jsx)("h1",{className:"title login-title",children:"Track water"}),Object(N.jsx)("div",{className:"container",children:Object(N.jsxs)("form",{onSubmit:function(e){var s=document.createElement("i");s.classList.add("fas"),s.classList.add("fa-spinner"),s.classList.add("fa-pulse");var a=document.getElementById("login-button");a.innerHTML="",a.appendChild(s),e.preventDefault(),t(e.target.email.value,e.target.password.value)},children:[Object(N.jsx)("div",{className:"field",children:Object(N.jsxs)("p",{className:"control has-icons-left has-icons-right",children:[Object(N.jsx)("input",{onChange:function(e){var t=document.getElementById("email"),s=document.getElementById("email-icon");!function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value)?(t.className="input is-danger",s.className="fas fa-exclamation-triangle red-validation"):(t.className="input is-success",s.className="fas fa-check green-validation"),""===e.target.value&&(t.className="input",s.className="")},className:"input",type:"email",id:"email",placeholder:"Email",required:!0}),Object(N.jsx)("span",{className:"icon is-small is-left",children:Object(N.jsx)("i",{className:"fas fa-envelope"})}),Object(N.jsx)("span",{className:"icon is-small is-right",children:Object(N.jsx)("i",{className:"",id:"email-icon"})})]})}),Object(N.jsx)("div",{className:"field",children:Object(N.jsxs)("p",{className:"control has-icons-left has-icons-right",children:[Object(N.jsx)("input",{onChange:function(e){var t=document.getElementById("password"),s=document.getElementById("password-icon");e.target.value.length>=3?(t.className="input is-success",s.className="fas fa-check green-validation"):(t.className="input is-danger",s.className="fas fa-exclamation-triangle red-validation"),""===e.target.value&&(t.className="input",s.className="")},className:"input",type:"password",id:"password",placeholder:"Password",required:!0,minLength:"3"}),Object(N.jsx)("span",{className:"icon is-small is-left",children:Object(N.jsx)("i",{className:"fas fa-lock"})}),Object(N.jsx)("span",{className:"icon is-small is-right",children:Object(N.jsx)("i",{className:"",id:"password-icon"})})]})}),Object(N.jsx)("div",{className:"field",children:Object(N.jsx)("p",{className:"control",children:Object(N.jsx)("button",{type:"submit",className:"button is-success",id:"login-button",children:"Login"})})})]})}),Object(N.jsxs)("div",{className:"container home-info",children:[Object(N.jsx)("p",{children:"Credentials:"}),Object(N.jsx)("p",{children:"vichuge@mail.com"}),Object(N.jsx)("p",{children:"admin1234"})]})]})})})]})})})),S=function(e){var t=e.isSelect;return Object(N.jsx)("footer",{children:Object(N.jsx)("div",{className:"columns is-mobile",children:[{id:"list",to:"/list",className:"column is-one-third footer-column",iClassName:"fas fa-cocktail fa-2x footer-icon"},{id:"records",to:"/records",className:"column is-one-third footer-column",iClassName:"fas fa-list-alt fa-2x footer-icon"},{id:"logout",to:"/logout",className:"column is-one-third footer-column",iClassName:"fas fa-door-open fa-2x footer-icon"}].map((function(e){return t===e.id?Object(N.jsxs)(r.b,{to:e.to,className:"".concat(e.className," selected-footer"),children:[Object(N.jsx)("i",{className:"".concat(e.iClassName," selected-footer")}),Object(N.jsx)("br",{}),e.id]},e.to):Object(N.jsxs)(r.b,{to:e.to,className:e.className,children:[Object(N.jsx)("i",{className:e.iClassName}),Object(N.jsx)("br",{}),e.id]},e.to)}))})})},L=function(e){var t=e.title;return Object(N.jsx)("nav",{className:"navbar",children:Object(N.jsxs)("h1",{className:"title",children:[Object(N.jsx)("i",{className:"fas fa-tint"}),"\xa0",t]})})},X={getList:function(e){return function(){var t=Object(m.a)(u.a.mark((function t(s){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:"https://stormy-headland-20983.herokuapp.com/api/v1/lists",g.a.get("https://stormy-headland-20983.herokuapp.com/api/v1/lists",{headers:{Authorization:e}}).then((function(e){var t;s((t=e.data,{type:h,payload:t}))})).catch((function(){localStorage.clear(),s(w({elements:{},status:!1}))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},k=Object(n.b)((function(e){return{list:e.list}}),X)((function(e){var t=e.getList,s=e.list,a=Object(o.f)();return 0!==localStorage.length&&"undefined"!==localStorage.token||a.push("/logout"),!1===s.status&&t(localStorage.getItem("token")),Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)("div",{className:"wrap",children:[Object(N.jsx)(L,{title:"List"}),Object(N.jsx)("div",{className:"columns is-mobile is-multiline list-columns",children:s.elements.map((function(e){return Object(N.jsx)("div",{className:"column is-half",children:Object(N.jsx)("div",{className:"card",children:Object(N.jsx)(r.b,{to:"/form/".concat(e.id),className:"list-option",children:Object(N.jsx)("div",{className:"card-content",children:Object(N.jsx)("div",{className:"content",children:Object(N.jsxs)("div",{className:"columns is-mobile is-justify-content-space-around",children:[Object(N.jsx)("div",{className:"column",children:Object(N.jsx)("i",{className:"".concat(e.icon," fa-2x")})}),Object(N.jsx)("div",{className:"column is-half",children:e.title})]})})})})})},e.id)}))})]}),Object(N.jsx)(S,{isSelect:"list"})]})})),E={logout:function(){return{type:f}}},F=Object(n.b)(null,E)((function(e){return(0,e.logout)(),Object(o.f)().push("/"),Object(N.jsx)("p",{children:"Log out!"})})),R={addRecord:function(e,t){return function(){var s=Object(m.a)(u.a.mark((function s(a){var c,n;return u.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:"https://stormy-headland-20983.herokuapp.com/api/v1/records",c={Authorization:localStorage.getItem("token")},n={times:t,list_id:e,user_id:localStorage.getItem("id")},g.a.post("https://stormy-headland-20983.herokuapp.com/api/v1/records",n,{headers:c}).then((function(e){var t;a((t=e.data,{type:v,payload:t})),a({type:x})})).catch((function(){a({type:b,payload:{id:0,times:0,list:"error",date_added:"0000-00-00T00:00:00.0000",status:!1}})}));case 4:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}()}},I=Object(n.b)((function(e){return{form:e.form}}),R)((function(e){var t=e.addRecord,s=e.form,a=Object(o.f)(),c=Object(o.g)().id;!0===s.status&&(document.getElementById("form-notification-good").style.display="block",a.push("/records")),"error"===s.list&&(document.getElementById("form-notification-bad").style.display="block",setTimeout((function(){document.getElementById("form-notification-bad").style.display="none"}),3e3)),0!==localStorage.length&&"undefined"!==localStorage.token||Object(o.f)().push("/logout");return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)("div",{className:"wrap",children:[Object(N.jsx)(L,{title:"Add record"}),Object(N.jsx)("nav",{className:"navbar nav-form",children:Object(N.jsx)("h1",{className:"subtitle",children:"How many cups did you drink?"})}),Object(N.jsxs)("div",{className:"notification is-danger",id:"form-notification-bad",children:["It looks like we've a problem with the API service\xa0",Object(N.jsx)("strong",{children:"would you try again?"})]}),Object(N.jsx)("div",{className:"notification is-success",id:"form-notification-good",children:Object(N.jsx)("strong",{children:"Successful!"})}),Object(N.jsx)("div",{className:"columns is-mobile columns-form is-justify-content-center content-form",children:Object(N.jsxs)("div",{className:"column is-half",children:[Object(N.jsxs)("form",{onSubmit:function(e){e.preventDefault();var s=e.target.times.value;t(c,s)},children:[Object(N.jsx)("div",{className:"field",children:Object(N.jsxs)("p",{className:"control has-icons-left has-icons-right",children:[Object(N.jsx)("input",{onChange:function(e){var t=document.getElementById("times"),s=document.getElementById("times-icon");!function(e){return/^[1-9][0-9]?$/.test(e)}(e.target.value)?(t.className="input is-danger",s.className="fas fa-exclamation-triangle red-validation"):(t.className="input is-success",s.className="fas fa-check green-validation"),""===e.target.value&&(t.className="input",s.className="")},className:"input",type:"number",id:"times",placeholder:"2",required:!0,min:"1",max:"99"}),Object(N.jsx)("span",{className:"icon is-small is-left",children:Object(N.jsx)("i",{className:"fas fa-glass-whiskey"})}),Object(N.jsx)("span",{className:"icon is-small is-right",children:Object(N.jsx)("i",{className:"",id:"times-icon"})})]})}),Object(N.jsx)("div",{className:"field",children:Object(N.jsx)("p",{className:"control",children:Object(N.jsx)("button",{type:"submit",className:"button is-success",children:"Create record"})})})]}),Object(N.jsxs)(r.b,{to:"/list",children:[Object(N.jsx)("i",{className:"fas fa-arrow-left fa-3x back-form"}),Object(N.jsx)("p",{className:"back-form",children:"back"})]})]})})]}),Object(N.jsx)(S,{isSelect:"list"})]})})),U=s(18),V=s.n(U),M={getRecords:function(){return function(){var e=Object(m.a)(u.a.mark((function e(t){var s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"https://stormy-headland-20983.herokuapp.com/api/v1/records",s=localStorage.getItem("token"),g.a.get("https://stormy-headland-20983.herokuapp.com/api/v1/records",{headers:{Authorization:s}}).then((function(e){var s;t((s=e.data,{type:A,payload:s})),t({type:C})})).catch((function(){localStorage.clear();t({type:O,payload:{elements:[],status:!1}})}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},J=Object(n.b)((function(e){return{record:e.record}}),M)((function(e){var t=e.getRecords,s=e.record,a=Object(o.f)();0!==localStorage.length&&"undefined"!==localStorage.token||a.push("/logout"),!1===s.status&&t();var c=0;return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("div",{className:"wrap",children:[Object(N.jsx)(L,{title:"Records"}),Object(N.jsx)("div",{className:"columns is-mobile is-multiline list-columns",children:s.elements.slice(0).reverse().map((function(e){return c!==V()(e.date_added).fromNow()?(c=V()(e.date_added).fromNow(),Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("p",{className:"text-record",children:c}),Object(N.jsx)("div",{className:"column is-full column-record",children:Object(N.jsx)("div",{className:"card",children:Object(N.jsx)("div",{className:"card-content",children:Object(N.jsx)("div",{className:"content",children:Object(N.jsxs)("div",{className:"columns is-mobile is-justify-content-space-around record-card-text",children:[Object(N.jsx)("div",{className:"column",children:Object(N.jsx)("p",{children:V()(e.date_added).format("MMM DD HH:mm")})}),Object(N.jsx)("div",{className:"column is-half",children:Object(N.jsxs)("p",{className:"times-record",children:[e.times,"\xa0",Object(N.jsx)("i",{className:e.icon})]})})]})})})})},e.id)]})):Object(N.jsx)("div",{className:"column is-full",children:Object(N.jsx)("div",{className:"card",children:Object(N.jsx)("div",{className:"card-content",children:Object(N.jsx)("div",{className:"content",children:Object(N.jsxs)("div",{className:"columns is-mobile is-justify-content-space-around record-card-text",children:[Object(N.jsx)("div",{className:"column",children:Object(N.jsx)("p",{children:V()(e.date_added).format("MMM DD HH:mm")})}),Object(N.jsx)("div",{className:"column is-half",children:Object(N.jsxs)("p",{className:"times-record",children:[e.times,"\xa0",Object(N.jsx)("i",{className:e.icon})]})})]})})})})},e.id)}))}),Object(N.jsx)(S,{isSelect:"records"})]})})})),D=function(){return Object(N.jsx)(r.a,{basename:"/frontend-track-app",children:Object(N.jsxs)(o.c,{children:[Object(N.jsx)(o.a,{path:"/",component:y,exact:!0}),Object(N.jsx)(o.a,{path:"/list",component:k}),Object(N.jsx)(o.a,{path:"/logout",component:F}),Object(N.jsx)(o.a,{path:"/form/:id",component:I}),Object(N.jsx)(o.a,{path:"/records",component:J})]})})},Q={elements:[],status:!1},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return{elements:t.payload,status:!0};default:return e}},Z=s(14),G={id:0,username:"",token:"",status:!1},K=function(e){return Object(Z.a)(Object(Z.a)({},e),{},{status:!0})},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return 0!==t.payload.id&&(localStorage.setItem("id",t.payload.id),localStorage.setItem("token",t.payload.token)),K(t.payload);case f:return localStorage.clear(),G;default:return e}},T={id:0,times:0,list:"",date_added:"0000-00-00T00:00:00.0000",status:!1},q=function(e){return Object(Z.a)(Object(Z.a)({},e),{},{status:!0})},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return T;case b:return t.payload;case x:return q(T);default:return e}},P=s(34),W={elements:[],status:!1},_="",$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return{elements:t.payload,status:!0};case v:return _=t.payload,{elements:[].concat(Object(P.a)(e.elements),[_]),status:!1};case O:default:return e}},ee=Object(i.b)({list:Y,user:H,form:z,record:$}),te=(s(65),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.c),se=Object(i.d)(ee,te(Object(i.a)(l.a))),ae=document.getElementById("root");c.a.render(Object(N.jsx)(n.a,{store:se,children:Object(N.jsx)(D,{})}),ae)}},[[66,1,2]]]);
//# sourceMappingURL=main.febe3c88.chunk.js.map