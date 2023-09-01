(this["webpackJsonpfrontend-track-app"]=this["webpackJsonpfrontend-track-app"]||[]).push([[0],{71:function(e,t,s){},72:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s(21),n=s.n(a),i=s(5),l=s(15),r=s(38),o=s(10),j=s(4),u=s(3),d=s(12),b=s(16),m=s(17),f=s.n(m),O="ALL_ELEMENTS",h="LOGIN",g="LOGOUT",p="ADD_RECORD",v="ERROR_RECORD",A="ALL_RECORDS",x="ERROR_RECORDS",C="FORM_FALSE",w="FORM_TRUE",S="ELEMENTS_FALSE",N=function(e){return{type:h,payload:e}},B=function(){return function(e){e({type:S}),e({type:g}),localStorage.clear()}},X="https://back-end-track-app.onrender.com/api/v1/",L="".concat(X,"users"),y="".concat(X,"authentication"),k="".concat(X,"lists"),E="".concat(X,"records"),F=function(e,t){return function(){var s=Object(b.a)(Object(d.a)().mark((function s(c){return Object(d.a)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:f.a.post(y,{username:e,password:t}).then((function(e){c(N(e.data))})).catch((function(){c(N({id:0,username:"",token:"",status:!1}))}));case 1:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}()},U=s(0),R=function(){var e=Object(i.c)((function(e){return e.user})),t=Object(c.useState)(""),s=Object(u.a)(t,2),a=s[0],n=s[1],l=Object(c.useState)("input"),r=Object(u.a)(l,2),o=r[0],d=r[1],b=Object(c.useState)(""),m=Object(u.a)(b,2),f=m[0],O=m[1],h=Object(c.useState)(""),g=Object(u.a)(h,2),p=g[0],v=g[1],A=Object(c.useState)("input"),x=Object(u.a)(A,2),C=x[0],w=x[1],S=Object(c.useState)(""),N=Object(u.a)(S,2),X=N[0],L=N[1],y=Object(c.useState)("Login"),k=Object(u.a)(y,2),E=k[0],R=k[1],V=Object(c.useState)(""),I=Object(u.a)(V,2),J=I[0],M=I[1],D=Object(j.f)(),Q=Object(i.b)();return Object(c.useEffect)((function(){!0===e.status&&0===e.id&&(R("Login"),Q(B()),M("It looks like you've a trouble with your credentials, would you try again?"),setTimeout((function(){M("")}),3e3)),localStorage.getItem("token")&&D.push("/list"),!0===e.status&&0!==e.id&&D.push("/list")}),[e.status]),Object(c.useEffect)((function(){a.length>=3?(d("input is-success"),O("fas fa-check green-validation")):a.length<=0?(d("input"),O("")):(d("input is-danger"),O("fas fa-exclamation-triangle red-validation"))}),[a]),Object(c.useEffect)((function(){p.length>=6?(w("input is-success"),L("fas fa-check green-validation")):p.length<=0?(w("input"),L("")):(w("input is-danger"),L("fas fa-exclamation-triangle red-validation"))}),[p]),Object(U.jsx)(U.Fragment,{children:Object(U.jsxs)("div",{className:"rows login",children:[J&&Object(U.jsx)("div",{className:"row",children:Object(U.jsx)("div",{className:"notification is-danger",children:J})}),Object(U.jsx)("div",{className:"row",children:Object(U.jsx)("div",{className:"column is-flex is-justify-content-center",children:Object(U.jsxs)("section",{className:"section",children:[Object(U.jsx)("img",{src:"data:image/png;base64,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",alt:"logo",className:"login-logo"}),Object(U.jsx)("h1",{className:"title login-title",children:"Track water"}),Object(U.jsx)("div",{className:"container",children:Object(U.jsxs)("form",{onSubmit:function(e){R(Object(U.jsx)("i",{className:"fas fa-spinner fa-pulse"})),e.preventDefault(),Q(F(a,p))},children:[Object(U.jsx)("div",{className:"field",children:Object(U.jsxs)("p",{className:"control has-icons-left has-icons-right",children:[Object(U.jsx)("input",{onChange:function(e){return n(e.target.value)},className:o,type:"text",placeholder:"Username",required:!0,minLength:"3"}),Object(U.jsx)("span",{className:"icon is-small is-left",children:Object(U.jsx)("i",{className:"fas fa-user"})}),Object(U.jsx)("span",{className:"icon is-small is-right",children:Object(U.jsx)("i",{className:f})})]})}),Object(U.jsx)("div",{className:"field",children:Object(U.jsxs)("p",{className:"control has-icons-left has-icons-right",children:[Object(U.jsx)("input",{onChange:function(e){return v(e.target.value)},className:C,type:"password",id:"password",placeholder:"Password",required:!0,minLength:"6"}),Object(U.jsx)("span",{className:"icon is-small is-left",children:Object(U.jsx)("i",{className:"fas fa-lock"})}),Object(U.jsx)("span",{className:"icon is-small is-right",children:Object(U.jsx)("i",{className:X,id:"password-icon"})})]})}),Object(U.jsx)("div",{className:"field",children:Object(U.jsx)("p",{className:"control",children:Object(U.jsx)("button",{type:"submit",className:"button is-success",id:"login-button",children:E})})})]})}),Object(U.jsxs)("div",{className:"container home-info",children:[Object(U.jsx)("p",{children:"Credentials:"}),Object(U.jsx)("p",{children:"vichuge@mail.com"}),Object(U.jsx)("p",{children:"admin1234"})]}),Object(U.jsx)("button",{type:"button",onClick:function(){return D.push("/signup")},className:"button is-large is-fullwidth is-success btn-signup",children:"Sign Up"})]})})})]})})},V=function(e){var t=e.isSelect,s=Object(i.b)();return Object(U.jsx)("footer",{children:Object(U.jsx)("div",{className:"columns is-mobile",children:[{id:"list",to:"/list",className:"column is-one-third footer-column",iClassName:"fas fa-cocktail fa-2x footer-icon",action:""},{id:"records",to:"/records",className:"column is-one-third footer-column",iClassName:"fas fa-list-alt fa-2x footer-icon",action:""},{id:"logout",to:"/",className:"column is-one-third footer-column",iClassName:"fas fa-door-open fa-2x footer-icon",action:"logout"}].map((function(e){return Object(U.jsxs)(o.b,{onClick:function(){"logout"===e.action&&s(B())},to:e.to,className:"".concat(e.className," ").concat(t===e.id?"selected-footer":""),children:[Object(U.jsx)("i",{className:"".concat(e.iClassName," ").concat(t===e.id?"selected-footer":"")}),Object(U.jsx)("br",{}),e.id]},e.to)}))})})},I=function(e){var t=e.title;return Object(U.jsx)("nav",{className:"navbar",children:Object(U.jsxs)("h1",{className:"title",children:[Object(U.jsx)("i",{className:"fas fa-tint"}),"\xa0",t]})})},J=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.list})),s=Object(c.useState)({elements:[]}),a=Object(u.a)(s,2),n=a[0],l=a[1],r=Object(j.f)();return Object(c.useEffect)((function(){var s;t.status||e((s=localStorage.getItem("token"),function(){var e=Object(b.a)(Object(d.a)().mark((function e(t){return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.a.get(k,{headers:{Authorization:s}}).then((function(e){var s;t((s=e.data,{type:O,payload:s}))})).catch((function(){localStorage.clear(),t(N({id:0,username:"",token:"",status:!1}))}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),l(t),0!==localStorage.length&&"undefined"!==localStorage.token||r.push("/logout")})),Object(U.jsxs)(U.Fragment,{children:[Object(U.jsxs)("div",{className:"wrap",children:[Object(U.jsx)(I,{title:"List"}),Object(U.jsx)("div",{className:"columns is-mobile is-multiline list-columns",children:n.elements.map((function(e){return Object(U.jsx)("div",{className:"column is-half",children:Object(U.jsx)("div",{className:"card",children:Object(U.jsx)(o.b,{to:"/form/".concat(e.id),className:"list-option",children:Object(U.jsx)("div",{className:"card-content",children:Object(U.jsx)("div",{className:"content",children:Object(U.jsxs)("div",{className:"columns is-mobile is-justify-content-space-around",children:[Object(U.jsx)("div",{className:"column",children:Object(U.jsx)("i",{className:"".concat(e.icon," fa-2x")})}),Object(U.jsx)("div",{className:"column is-half",children:e.title})]})})})})})},e.id)}))})]}),Object(U.jsx)(V,{className:"navbar-list",isSelect:"list"})]})},M=function(){var e=Object(i.c)((function(e){return e.form})),t=Object(i.b)(),s=Object(c.useState)(""),a=Object(u.a)(s,2),n=a[0],l=a[1],r=Object(c.useState)("input"),m=Object(u.a)(r,2),O=m[0],h=m[1],g=Object(c.useState)(""),A=Object(u.a)(g,2),x=A[0],C=A[1],S=Object(c.useState)(""),N=Object(u.a)(S,2),B=N[0],X=N[1],L=Object(j.f)(),y=Object(j.g)().id;"error"===e.list&&(X("It looks like you've a trouble with your credentials, would you try again?"),setTimeout((function(){X("")}),3e3)),0!==localStorage.length&&"undefined"!==localStorage.token||Object(j.f)().push("/logout");return Object(c.useEffect)((function(){!0===e.status&&L.push("/records"),/^[1-9][0-9]?$/.test(n)?(h("input is-success"),C("fas fa-check green-validation")):(h("input is-danger"),C("fas fa-exclamation-triangle red-validation")),""===n&&(h("input"),C(""))})),Object(U.jsxs)(U.Fragment,{children:[Object(U.jsxs)("div",{className:"wrap",children:[Object(U.jsx)(I,{title:"Add record"}),Object(U.jsx)("nav",{className:"navbar nav-form",children:Object(U.jsx)("h1",{className:"subtitle",children:"How many cups did you drink?"})}),B&&Object(U.jsx)("div",{className:"notification is-danger",children:B}),Object(U.jsx)("div",{className:"columns is-mobile columns-form is-justify-content-center content-form",children:Object(U.jsxs)("div",{className:"column is-half",children:[Object(U.jsxs)("form",{onSubmit:function(e){var s,c;e.preventDefault(),t((s=y,c=n,function(){var e=Object(b.a)(Object(d.a)().mark((function e(t){var a,n;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a={Authorization:localStorage.getItem("token")},n={times:c,list_id:s,user_id:localStorage.getItem("id")},f.a.post(E,n,{headers:a}).then((function(e){var s;t((s=e.data,{type:p,payload:s})),t({type:w})})).catch((function(){t({type:v,payload:{id:0,times:0,list:"error",date_added:"0000-00-00T00:00:00.0000",status:!1}})}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(U.jsx)("div",{className:"field",children:Object(U.jsxs)("p",{className:"control has-icons-left has-icons-right",children:[Object(U.jsx)("input",{onChange:function(e){return l(e.target.value)},className:O,type:"number",id:"times",placeholder:"2",required:!0,min:"1",max:"99"}),Object(U.jsx)("span",{className:"icon is-small is-left",children:Object(U.jsx)("i",{className:"fas fa-glass-whiskey"})}),Object(U.jsx)("span",{className:"icon is-small is-right",children:Object(U.jsx)("i",{className:x,id:"times-icon"})})]})}),Object(U.jsx)("div",{className:"field",children:Object(U.jsx)("p",{className:"control",children:Object(U.jsx)("button",{type:"submit",className:"button is-success",children:"Create record"})})})]}),Object(U.jsxs)(o.b,{to:"/list",children:[Object(U.jsx)("i",{className:"fas fa-arrow-left fa-3x back-form"}),Object(U.jsx)("p",{className:"back-form",children:"back"})]})]})})]}),Object(U.jsx)(V,{isSelect:"list"})]})},D=s(23),Q=s.n(D),Y=function(){var e=Object(i.c)((function(e){return e.record})),t=Object(j.f)(),s=Object(i.b)();Object(c.useEffect)((function(){s(function(){var e=Object(b.a)(Object(d.a)().mark((function e(t){var s;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=localStorage.getItem("token"),f.a.get(E,{headers:{Authorization:s}}).then((function(e){var s;t((s=e.data,{type:A,payload:s})),t({type:C})})).catch((function(){localStorage.clear(),t({type:x,payload:{elements:[],status:!1}})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e.status]);var a=0;return Object(c.useEffect)((function(){(0!==localStorage.length&&"undefined"!==localStorage.token||t.push("/logout"),document.getElementById("loading-screen").style.display="block",!0===e.status)&&(document.getElementById("loading-screen").style.display="none")})),Object(U.jsxs)(U.Fragment,{children:[Object(U.jsxs)("div",{className:"wrap-record",children:[Object(U.jsx)(I,{title:"Records"}),Object(U.jsx)("div",{id:"loading-screen",children:Object(U.jsx)("i",{className:"fas fa-spinner fa-pulse fa-5x",id:"loading-record"})}),Object(U.jsx)("div",{className:"columns is-mobile is-multiline list-columns",children:e.elements.slice(0).reverse().map((function(e){var t="";return a!==Q()(e.date_added).fromNow()?(a=Q()(e.date_added).fromNow(),t=Object(U.jsx)("p",{className:"text-record",children:a})):t="",Object(U.jsxs)("div",{className:"column is-full text-records",children:[t,Object(U.jsx)("div",{className:"card",children:Object(U.jsx)("div",{className:"card-content",children:Object(U.jsx)("div",{className:"content",children:Object(U.jsxs)("div",{className:"columns is-mobile is-justify-content-space-around record-card-text",children:[Object(U.jsx)("div",{className:"column",children:Object(U.jsx)("p",{children:Q()(e.date_added).format("MMM DD HH:mm")})}),Object(U.jsx)("div",{className:"column is-half",children:Object(U.jsxs)("p",{className:"times-record",children:[e.times,"\xa0",Object(U.jsx)("i",{className:e.icon})]})})]})})})})]},"day-".concat(e.id))}))})]}),Object(U.jsx)(V,{isSelect:"records"})]})},G=function(){var e=Object(i.c)((function(e){return e.user})),t=Object(c.useState)(""),s=Object(u.a)(t,2),a=s[0],n=s[1],l=Object(c.useState)("input"),r=Object(u.a)(l,2),m=r[0],O=r[1],h=Object(c.useState)(""),g=Object(u.a)(h,2),p=g[0],v=g[1],A=Object(c.useState)(""),x=Object(u.a)(A,2),C=x[0],w=x[1],S=Object(c.useState)("input"),X=Object(u.a)(S,2),y=X[0],k=X[1],E=Object(c.useState)(""),R=Object(u.a)(E,2),V=R[0],I=R[1],J=Object(c.useState)("Sign Up"),M=Object(u.a)(J,2),D=M[0],Q=M[1],Y=Object(c.useState)(""),G=Object(u.a)(Y,2),K=G[0],Z=G[1],q=Object(j.f)(),T=Object(i.b)();return Object(c.useEffect)((function(){!0===e.status&&0===e.id&&(T(B()),Q("Sign Up"),Z("The username is actually subscribed, would you try anothe one?"),setTimeout((function(){Z("")}),3e3)),localStorage.getItem("token")&&q.push("/list"),!0===e.status&&0!==e.id&&q.push("/list")}),[e.status]),Object(c.useEffect)((function(){a.length>=3?(O("input is-success"),v("fas fa-check green-validation")):a.length<=0?(O("input"),v("")):(O("input is-danger"),v("fas fa-exclamation-triangle red-validation"))}),[a]),Object(c.useEffect)((function(){C.length>=6?(k("input is-success"),I("fas fa-check green-validation")):C.length<=0?(k("input"),I("")):(k("input is-danger"),I("fas fa-exclamation-triangle red-validation"))}),[C]),Object(U.jsx)(U.Fragment,{children:Object(U.jsxs)("div",{className:"rows login",children:[K&&Object(U.jsx)("div",{className:"row",children:Object(U.jsx)("div",{className:"notification is-danger",children:K})}),Object(U.jsx)("div",{className:"row",children:Object(U.jsx)("div",{className:"column is-flex is-justify-content-center",children:Object(U.jsxs)("section",{className:"section",children:[Object(U.jsx)("h1",{className:"title login-title",children:"Sign Up"}),Object(U.jsx)("div",{className:"container",children:Object(U.jsxs)("form",{onSubmit:function(e){var t,s;Q(Object(U.jsx)("i",{className:"fas fa-spinner fa-pulse"})),e.preventDefault(),T((t=a,s=C,function(){var e=Object(b.a)(Object(d.a)().mark((function e(c){return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.a.post(L,{user:{username:t,password:s}}).then((function(e){c(N(e.data))})).catch((function(){c(F(t,s))}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(U.jsx)("div",{className:"field",children:Object(U.jsxs)("p",{className:"control has-icons-left has-icons-right",children:[Object(U.jsx)("input",{onChange:function(e){return n(e.target.value)},className:m,type:"text",placeholder:"Username",required:!0,minLength:"3"}),Object(U.jsx)("span",{className:"icon is-small is-left",children:Object(U.jsx)("i",{className:"fas fa-user"})}),Object(U.jsx)("span",{className:"icon is-small is-right",children:Object(U.jsx)("i",{className:p})})]})}),Object(U.jsx)("div",{className:"field",children:Object(U.jsxs)("p",{className:"control has-icons-left has-icons-right",children:[Object(U.jsx)("input",{onChange:function(e){return w(e.target.value)},className:y,type:"password",id:"password",placeholder:"Password",required:!0,minLength:"6"}),Object(U.jsx)("span",{className:"icon is-small is-left",children:Object(U.jsx)("i",{className:"fas fa-lock"})}),Object(U.jsx)("span",{className:"icon is-small is-right",children:Object(U.jsx)("i",{className:V,id:"password-icon"})})]})}),Object(U.jsx)("div",{className:"field",children:Object(U.jsx)("p",{className:"control",children:Object(U.jsx)("button",{type:"submit",className:"button is-success",id:"login-button",children:D})})})]})}),Object(U.jsxs)(o.b,{to:"/",children:[Object(U.jsx)("i",{className:"fas fa-arrow-left fa-3x back-signup"}),Object(U.jsx)("p",{className:"back-signup",children:"back"})]})]})})})]})})},K=function(){return Object(U.jsx)(o.a,{basename:"/frontend-track-app",children:Object(U.jsxs)(j.c,{children:[Object(U.jsx)(j.a,{path:"/",component:R,exact:!0}),Object(U.jsx)(j.a,{path:"/signup",component:G}),Object(U.jsx)(j.a,{path:"/list",component:J}),Object(U.jsx)(j.a,{path:"/form/:id",component:M}),Object(U.jsx)(j.a,{path:"/records",component:Y})]})})},Z={elements:[],status:!1},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;return t.type===O?{elements:t.payload,status:!0}:e},T=s(13),H={id:0,username:"",token:"",status:!1},z=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,s=arguments.length>1?arguments[1]:void 0;switch(s.type){case h:return 0!==s.payload.id&&(localStorage.setItem("id",s.payload.id),localStorage.setItem("token",s.payload.token)),e=s.payload,Object(T.a)(Object(T.a)({},e),{},{status:!0});case g:return localStorage.clear(),H;default:return t}},P={id:0,times:0,list:"",date_added:"0000-00-00T00:00:00.0000",status:!1},W=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,s=arguments.length>1?arguments[1]:void 0;switch(s.type){case C:return P;case v:return s.payload;case w:return e=P,Object(T.a)(Object(T.a)({},e),{},{status:!0});default:return t}},_=s(39),$={elements:[],status:!1},ee="",te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return{elements:t.payload,status:!0};case p:return ee=t.payload,{elements:[].concat(Object(_.a)(e.elements),[ee]),status:!1};case x:return e;case S:return $;default:return e}},se=Object(l.b)({list:q,user:z,form:W,record:te}),ce=(s(71),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.c),ae=Object(l.d)(se,ce(Object(l.a)(r.a))),ne=document.getElementById("root");n.a.render(Object(U.jsx)(i.a,{store:ae,children:Object(U.jsx)(K,{})}),ne)}},[[72,1,2]]]);
//# sourceMappingURL=main.d87436a2.chunk.js.map