(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,function(e,t,a){e.exports={list:"Statistics_list__1lO-E"}},,function(e,t,a){e.exports={box:"FeedBackOptions_box__3zZK7",button:"FeedBackOptions_button__36_vR"}},,,function(e,t,a){e.exports={title:"Notification_title__2x_Zf"}},function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(5),r=a.n(l),o=a(2),i=function(e){var t=e.title,a=e.children;return c.a.createElement("section",null,c.a.createElement("h2",null,t),a)},s=a(3),u=a.n(s),m=function(e){var t=e.options,a=e.onLeaveFeedback;return c.a.createElement("div",{className:u.a.box},t.map((function(e){return c.a.createElement("button",{className:u.a.button,name:e,key:e,onClick:a},e)})))},b=a(1),f=a.n(b),d=function(e){var t=e.good,a=e.neutral,n=e.bad,l=e.total,r=e.positivePercentage;return c.a.createElement("div",null,c.a.createElement("ul",{className:f.a.list},c.a.createElement("li",{className:f.a.listItem}," Good: ",t),c.a.createElement("li",{className:f.a.listItem}," Neutral: ",a),c.a.createElement("li",{className:f.a.listItem}," Bad: ",n," "),c.a.createElement("li",{className:f.a.listItem}," Total: ",l),c.a.createElement("li",{className:f.a.listItem},"Positive feedback: ".concat(r,"%"))))},E=a(6),k=a.n(E),p=function(e){var t=e.title;return c.a.createElement("h2",{className:k.a.title},t)};function v(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(0),s=Object(o.a)(r,2),u=s[0],b=s[1],f=Object(n.useState)(0),E=Object(o.a)(f,2),k=E[0],v=E[1],O=Object(n.useState)(0),_=Object(o.a)(O,2),h=_[0],N=_[1],g=Object(n.useState)(0),j=Object(o.a)(g,2),x=j[0],S=j[1];return Object(n.useEffect)((function(){S(Math.round(a/h*100)),N((function(e){return e+1}))}),[a,h]),c.a.createElement(c.a.Fragment,null,c.a.createElement(i,{title:"Please leave feedback"},c.a.createElement(m,{options:["good","neutral","bad"],onLeaveFeedback:function(e){switch(e.target.name){case"good":l((function(e){return e+1}));break;case"neutral":b((function(e){return e+1}));break;case"bad":v((function(e){return e+1}));break;default:return}}})),c.a.createElement(i,{title:"Statistics"},h?c.a.createElement(d,{good:a,neutral:u,bad:k,total:h,positivePercentage:x}):c.a.createElement(p,{title:"No feedback given"})))}r.a.render(c.a.createElement(v,null),document.querySelector("#root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.b1ad4ca0.chunk.js.map