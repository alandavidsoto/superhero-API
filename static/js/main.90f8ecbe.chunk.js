(this.webpackJsonpaplicacion=this.webpackJsonpaplicacion||[]).push([[0],{47:function(e,t,c){},48:function(e,t,c){},72:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c.n(s),n=c(38),r=c.n(n),i=(c(47),c(5)),o=(c(27),c(48),c(15)),l=c(2),d=c(11),j=c(12),b=c(41),h=c.n(b);function m(e,t){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s={method:t,url:e,headers:{Accept:"application/json","Content-Type":"application/json"}};if("get"==(t=t.toLowerCase()))s=s;else{if("post"!=t)throw"Metodo Desconocido";if(!c)throw"Para realizar la peticion post se necesita pasar el cuerpo con la informacion";s=Object(j.a)(Object(j.a)({},s),{},{data:c})}return h()(s)}var u=c(1),p=function(e){var t=e.setIsAuthenticaded,c=Object(s.useState)(!1),a=Object(i.a)(c,2),n=a[0],r=a[1],o=Object(l.g)();return Object(u.jsx)(s.Fragment,{children:Object(u.jsx)("section",{className:"login",children:Object(u.jsxs)("div",{className:"card p-3",children:[Object(u.jsx)("h1",{children:"LOGIN"}),Object(u.jsx)(d.d,{initialValues:{email:"",password:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Correo electronico invalido"):t.email="Por favor, introduzca un correo electronico",e.password||(t.password="Introduzca una contrase\xf1a"),t},onSubmit:function(e){m("http://challenge-react.alkemy.org","post",e).then((function(e){r(!1),200==e.status&&(t(!0),o.push("/home"),localStorage.setItem("auth","true"))})).catch((function(){return r("Datos incorrectos")}))},children:function(e){var t=e.errors;return Object(u.jsxs)(d.c,{className:"form-group",children:[Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email"}),Object(u.jsx)(d.b,{type:"email",name:"email",className:"form-control",id:"email",placeholder:"name@example.com"}),Object(u.jsx)(d.a,{name:"email",component:function(){return Object(u.jsx)("div",{className:"text-danger",children:t.email})}})]}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{htmlFor:"contrase\xf1a",className:"form-label",children:"Contrase\xf1a"}),Object(u.jsx)(d.b,{type:"password",name:"password",className:"form-control",id:"contrase\xf1a",placeholder:"Introduce tu Contrase\xf1a"}),Object(u.jsx)(d.a,{name:"password",component:function(){return Object(u.jsx)("div",{className:"text-danger",children:t.password})}})]}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("button",{type:"submit",className:"form-control btn btn-success",children:"Iniciar sesion"}),n&&Object(u.jsx)("div",{className:"text-danger text-center",children:"Datos incorrectos"})]})]})}})]})})})},O=c(17),x=function(e){var t=e.handlerFetch;return Object(u.jsx)(s.Fragment,{children:Object(u.jsx)(d.d,{initialValues:{search:""},validate:function(e){var t={};return""==e.search?t.search="No puedes dejar este campo vacio":/[\W\d]/.test(e.search)&&(t.search="No puede contener numeros y simbolos, solo caracteres de tipo alfabeticos"),t},onSubmit:function(e){m("https://www.superheroapi.com/api.php/3009719749316257/search/".concat(e.search),"get").then((function(e){return 200==e.status&&t(e.data.results)})).catch((function(e){return console.log(e)}))},children:function(e){var t=e.errors;return Object(u.jsxs)(s.Fragment,{children:[Object(u.jsxs)(d.c,{className:"formulario col-lg-5",children:[Object(u.jsx)(d.b,{name:"search",className:"form-control",type:"text",placeholder:"Ingrese un superheroe..."}),Object(u.jsx)("button",{className:"btn btn-danger",type:"submit",children:"Buscar"})]}),Object(u.jsx)(d.a,{name:"search",component:function(){return Object(u.jsx)("div",{className:"error text-danger",children:t.search})}})]})}})})},g=function(e){return function(e){e=e;var t=Object(s.useState)(0),c=Object(i.a)(t,2),a=c[0],n=c[1],r=Object(s.useState)(0),o=Object(i.a)(r,2),l=o[0],d=o[1],j=Object(s.useState)(0),b=Object(i.a)(j,2),h=b[0],m=b[1],p=Object(s.useState)(0),O=Object(i.a)(p,2),x=O[0],g=O[1],f=Object(s.useState)(0),w=Object(i.a)(f,2),v=w[0],y=w[1],N=Object(s.useState)(0),S=Object(i.a)(N,2),I=S[0],C=S[1];return Object(s.useEffect)((function(){e.map((function(e){n("null"==e.powerstats.combat?a:parseInt(e.powerstats.combat)+a),d("null"==e.powerstats.durability?l:parseInt(e.powerstats.durability)+l),m("null"==e.powerstats.intelligence?h:parseInt(e.powerstats.intelligence)+h),g("null"==e.powerstats.power?x:parseInt(e.powerstats.power)+x),y("null"==e.powerstats.speed?v:parseInt(e.powerstats.speed)+v),C("null"==e.powerstats.strength?I:parseInt(e.powerstats.strength)+I)}))}),[e]),Object(u.jsxs)("div",{className:"contenedor-powerstats",children:[Object(u.jsxs)("div",{className:"meter",children:[Object(u.jsx)("span",{style:{width:"25px"},children:Object(u.jsx)("img",{src:"https://res.cloudinary.com/dcea83ydd/image/upload/v1631066388/icons/yelmo_hb3fme.svg",style:{width:"100%"}})}),"\xa0 Combat \xa0",Object(u.jsx)("b",{className:"text-warning",children:a})]}),Object(u.jsxs)("div",{className:"meter",children:[Object(u.jsx)("span",{style:{width:"25px"},children:Object(u.jsx)("img",{src:"https://res.cloudinary.com/dcea83ydd/image/upload/v1631067132/icons/shield_mnhntn.svg",style:{width:"100%"}})}),"\xa0 Durability \xa0",Object(u.jsx)("b",{className:"text-warning",children:l})]}),Object(u.jsxs)("div",{className:"meter",children:[Object(u.jsx)("span",{style:{width:"25px"},children:Object(u.jsx)("img",{src:"https://res.cloudinary.com/dcea83ydd/image/upload/v1631067785/icons/artificial-intelligence_tq5wyj.svg",style:{width:"100%"}})}),"\xa0 Intelligence \xa0",Object(u.jsx)("b",{className:"text-warning",children:h})]}),Object(u.jsxs)("div",{className:"meter",children:[Object(u.jsx)("span",{style:{width:"25px"},children:Object(u.jsx)("img",{src:"https://res.cloudinary.com/dcea83ydd/image/upload/v1631067521/icons/lighting_ignlfz.svg",style:{width:"100%"}})}),"\xa0 Power \xa0",Object(u.jsx)("b",{className:"text-warning",children:x})]}),Object(u.jsxs)("div",{className:"meter",children:[Object(u.jsx)("span",{style:{width:"25px"},children:Object(u.jsx)("img",{src:"https://res.cloudinary.com/dcea83ydd/image/upload/v1631067432/icons/speed_wqx1zg.svg",style:{width:"100%"}})}),"\xa0 Speed \xa0",Object(u.jsx)("b",{className:"text-warning",children:v})]}),Object(u.jsxs)("div",{className:"meter",children:[Object(u.jsx)("span",{style:{width:"25px"},children:Object(u.jsx)("img",{src:"https://res.cloudinary.com/dcea83ydd/image/upload/v1631067640/icons/strength_azrxnu.svg",style:{width:"100%"}})}),"\xa0 Strength \xa0",Object(u.jsx)("b",{className:"text-warning",children:I})]})]})}(e.team)},f=function(e){var t=e.elemento,c=e.onclick;return Object(u.jsxs)("div",{className:"grid-card",children:[Object(u.jsx)("div",{className:"contenedor-imagen",children:Object(u.jsx)("img",{src:t.image.url})}),Object(u.jsxs)("div",{className:"contenedor-descripcion",children:[Object(u.jsx)("h5",{children:t.name}),Object(u.jsx)("div",{className:"powerstats",children:Object(u.jsxs)("span",{children:["Combat: ",t.powerstats.combat,Object(u.jsx)("br",{}),"Durability: ",t.powerstats.durability,Object(u.jsx)("br",{}),"Intelligence: ",t.powerstats.intelligence,Object(u.jsx)("br",{}),"Power: ",t.powerstats.power,Object(u.jsx)("br",{}),"Speed: ",t.powerstats.speed,Object(u.jsx)("br",{}),"Strength: ",t.powerstats.strength,Object(u.jsx)("br",{}),"Team: ","good"==t.biography.alignment?Object(u.jsx)("b",{className:"text-success",children:t.biography.alignment}):Object(u.jsx)("b",{className:"text-danger",children:t.biography.alignment})]})}),Object(u.jsx)("button",{onClick:function(){return c(t.id)},className:" btn btn-light w-100 mt-1",children:"Agregar"})]})]})},w=function(e){var t=e.elemento,c=e.handlerDelete;return Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{src:t.image.url,style:{width:"100%",height:"100%"}}),Object(u.jsx)("a",{href:"/details?id=".concat(t.id),target:"_blank",className:"icon info",children:Object(u.jsx)("img",{src:"https://res.cloudinary.com/dcea83ydd/image/upload/v1630961529/icons/informacion_ajstkw.svg",style:{width:"100%",height:"100%"}})}),Object(u.jsx)("button",{className:"icon trash",onClick:function(){return c(t.id)},children:Object(u.jsx)("img",{src:"https://res.cloudinary.com/dcea83ydd/image/upload/v1630961529/icons/eliminar_bm4npo.svg",style:{width:"100%",height:"100%"}})}),"good"==t.biography.alignment?Object(u.jsx)("span",{className:"bg-success",style:{borderTop:"1px solid #333",position:"absolute",bottom:"0px",right:"0px",left:"0px",textAlign:"center"},children:t.biography.alignment}):Object(u.jsx)("span",{className:"bg-danger",style:{borderTop:"1px solid #333",position:"absolute",bottom:"0px",right:"0px",left:"0px",textAlign:"center"},children:t.biography.alignment})]})},v=function(){var e=Object(s.useState)(null),t=Object(i.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)([]),r=Object(i.a)(n,2),o=r[0],d=r[1],b=Object(s.useState)({bad:0,good:0}),h=Object(i.a)(b,2),m=h[0],p=h[1],v=Object(s.useState)([]),y=Object(i.a)(v,2),N=y[0],S=y[1],I=(Object(l.g)(),function(e){c.map((function(t){t.id==e&&("good"==t.biography.alignment?m.good<3&&!N.includes(t.id)&&(p(Object(j.a)(Object(j.a)({},m),{},{good:m.good+1})),d([].concat(Object(O.a)(o),[t])),S([].concat(Object(O.a)(N),[t.id]))):m.bad<3&&!N.includes(t.id)&&(p(Object(j.a)(Object(j.a)({},m),{},{bad:m.bad+1})),d([].concat(Object(O.a)(o),[t])),S([].concat(Object(O.a)(N),[t.id]))))}))}),C=function(e){var t=o.filter((function(t){if(t.id==e){"good"==t.biography.alignment?p(Object(j.a)(Object(j.a)({},m),{},{good:m.good-1})):p(Object(j.a)(Object(j.a)({},m),{},{bad:m.bad-1}));var c=N.indexOf(e),s=Object(O.a)(N);s.splice(c,1),S(s)}return t.id!=e}));d(t)};return document.body.style.background="linear-gradient(45deg,#000,#111)",Object(u.jsxs)("section",{className:"home",children:[Object(u.jsxs)("h1",{className:"header text-center bg-light text-dark",children:["SUPERHERO",Object(u.jsx)("button",{onClick:function(){localStorage.removeItem("auth"),window.location.pathname="/",console.log(window.location)},className:"logout btn btn-primary",children:"Logout"})]}),o.length>0?Object(u.jsxs)("div",{className:"contenedor-team_stats mt-5 mb-5",children:[Object(u.jsx)("div",{className:"grid-team ",children:o.map((function(e){return Object(u.jsx)(w,{handlerDelete:C,elemento:e})}))}),Object(u.jsxs)("div",{className:"grid-powerstats",children:[Object(u.jsx)("h2",{className:"text-center",children:"POWERSTATS"}),Object(u.jsx)(g,{team:o})]})]}):Object(u.jsx)("div",{style:{fontSize:"1.1em",height:"70vh",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:"Utiliza el buscador para encontrar a tus personajes e incluirlos en tu lista..."}),Object(u.jsxs)("div",{className:"buscador row justify-content-center p-3",style:{marginLeft:"0px",marginRight:"0px"},children:[Object(u.jsx)("h2",{className:"text-center",children:"BUSCA A TU INTEGRANTE"}),Object(u.jsx)(x,{handlerFetch:function(e){a(e)}})]}),Object(u.jsx)("div",{className:"grid-resultados mt-4",children:c&&c.map((function(e){return Object(u.jsx)(f,{onclick:I,elemento:e},e.id)}))})]})},y=function(){var e=Object(s.useState)(null),t=Object(i.a)(e,2),c=t[0],a=t[1],n=Object(l.h)(),r=new URLSearchParams(n.search).get("id");return Object(s.useEffect)((function(){m("https://www.superheroapi.com/api.php/3009719749316257/".concat(r),"get").then((function(e){return 200==e.status&&a(e.data)})).catch((function(e){return console.log(e)}))}),[]),Object(u.jsx)(s.Fragment,{children:c&&Object(u.jsx)(N,{character:c})})},N=function(e){var t=e.character;return Object(u.jsxs)("section",{className:"contenedor-details",children:[Object(u.jsxs)("div",{className:"details mt-5",children:[Object(u.jsx)("div",{className:"contenedor-imagen",children:Object(u.jsx)("img",{src:t.image.url})}),Object(u.jsxs)("div",{className:"contenedor-info",children:[Object(u.jsx)("h2",{children:t.name}),Object(u.jsx)("h4",{children:"Alias: "}),Object(u.jsx)("p",{children:t.biography.aliases.join(", ")}),Object(u.jsx)("h4",{children:"Altura:"}),Object(u.jsx)("p",{children:t.appearance.height[1]}),Object(u.jsx)("h4",{children:"Peso:"}),Object(u.jsx)("p",{children:t.appearance.weight[1]}),Object(u.jsx)("h4",{children:"Lugar de trabajo:"}),Object(u.jsx)("p",{children:t.work.base})]})]}),Object(u.jsx)("button",{onClick:function(){console.log("xd"),window.close()},className:"btn btn-primary",style:{position:"absolute",left:"10px",top:"10px"},children:"VOLVER"})]})},S=function(e){var t=e.path,c=e.component,a=Object(s.useContext)(I);return console.log(a),Object(u.jsx)(l.b,{exact:!0,path:t,children:a?Object(u.jsx)(c,{}):Object(u.jsx)(l.a,{to:"/"})})},I=Object(s.createContext)({});var C=function(){var e=Object(s.useState)(localStorage.getItem("auth")),t=Object(i.a)(e,2),c=t[0],a=t[1];return Object(u.jsx)(I.Provider,{value:c,children:Object(u.jsx)(o.a,{children:Object(u.jsxs)(l.d,{children:[Object(u.jsx)(S,{path:"/details",component:y}),Object(u.jsx)(S,{path:"/home",component:v}),Object(u.jsx)(l.b,{exact:!0,path:"/",children:c?Object(u.jsx)(l.a,{to:"/home"}):Object(u.jsx)(p,{setIsAuthenticaded:a})})]})})})},A=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,73)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),s(e),a(e),n(e),r(e)}))};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(C,{})}),document.getElementById("root")),A()}},[[72,1,2]]]);
//# sourceMappingURL=main.90f8ecbe.chunk.js.map