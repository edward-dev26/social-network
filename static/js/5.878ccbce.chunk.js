(this["webpackJsonpreact-lessons-1"]=this["webpackJsonpreact-lessons-1"]||[]).push([[5],{330:function(e,a,t){e.exports={container:"Login_container__1Z_7c",wrapper:"Login_wrapper__3o8jR",form_background:"Login_form_background__JJrZp",form:"Login_form__zVgC5",description:"Login_description__gAvRY"}},331:function(e,a,t){e.exports={field:"LoginForm_field__2LM1y",captcha:"LoginForm_captcha__2iwFu",remember:"LoginForm_remember__2COhv",btn_login:"LoginForm_btn_login__2LFQ0",summaryError:"LoginForm_summaryError__3QepW"}},339:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(330),o=t.n(c),l=t(331),m=t.n(l),i=t(99),s=t(100),p=t(49),u=t(19),_=Object(s.a)({form:"login"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",{className:m.a.field},r.a.createElement(i.a,{validate:[p.a,p.c],castomClassName:"left",component:u.a,name:"email",placeholder:"Your Email"})),r.a.createElement("div",{className:m.a.field},r.a.createElement(i.a,{validate:[p.c],castomClassName:"left",component:u.a,name:"password",placeholder:"Password",type:"password"})),r.a.createElement("div",{className:m.a.remember},r.a.createElement("label",null,r.a.createElement(i.a,{component:"input",name:"rememberMe",type:"checkbox"}),"remember me")),e.captchaURL&&r.a.createElement("div",{className:m.a.captcha},r.a.createElement("img",{src:e.captchaURL,alt:"captcha"}),r.a.createElement(i.a,{validate:[p.c],castomClassName:"captcha",component:u.a,name:"captcha",placeholder:"Symbols from image"})),r.a.createElement("button",{className:m.a.btn_login},"Login Now"),e.error&&r.a.createElement("div",{className:m.a.summaryError},e.error))})),d=t(9),h=t(31),g=t(32),E=t(30);a.default=Object(d.b)((function(e){return{isAuth:e.auth.isAuth,isFetching:e.peoplePage.isFetching,captchaURL:e.auth.captchaURL}}),{login:h.d,auth:h.a})((function(e){var a=e.login,t=e.isAuth,n=e.isFetching,c=e.captchaURL;return t?r.a.createElement(g.a,{to:"/"}):r.a.createElement("div",{className:o.a.container},n&&r.a.createElement(E.a,null),r.a.createElement("div",{className:o.a.wrapper},r.a.createElement("div",null,r.a.createElement("div",{className:o.a.description},r.a.createElement("h1",null,"Find a cool job!!!"),r.a.createElement("p",null,"Portfolio is a social network that helps you get a job."),r.a.createElement("p",null,"So what are you waiting for? Start now."))),r.a.createElement("div",null,r.a.createElement("div",{className:o.a.form},r.a.createElement("h3",null,"Login"),r.a.createElement("p",null,"Log into your account"),r.a.createElement(_,{captchaURL:c,onSubmit:function(e){a(e)}})),r.a.createElement("div",{className:o.a.form_background},r.a.createElement("div",null,"Login")))))}))}}]);
//# sourceMappingURL=5.878ccbce.chunk.js.map