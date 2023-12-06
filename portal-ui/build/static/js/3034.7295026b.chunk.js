"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[3034],{33034:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var r=t(72791),a=t(29945),i=t(57689),o=t(56087),c=t(87995),s=t(44690),l=t(29439),u=t(23814),x=t(9505),f=t(40214),d=t(80184),j=function(e){var n=e.onSuccess,t=e.onError,i=(0,x.Z)(n,t),o=(0,l.Z)(i,2),c=o[0],s=o[1],j=(0,r.useState)(""),h=(0,l.Z)(j,2),p=h[0],m=h[1],y=""!==p.trim()&&-1===p.indexOf(" ");return(0,d.jsx)(a.Xgh,{children:(0,d.jsx)(a.ltY,{title:"Create Key",icon:(0,d.jsx)(a.sR0,{}),helpBox:(0,d.jsx)(f.Z,{helpText:"Encryption Key",contents:["Create a new cryptographic key in the Key Management Service server connected to MINIO."]}),children:(0,d.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),s("POST","/api/v1/kms/keys/",{key:p})},children:(0,d.jsxs)(a.rjZ,{container:!0,children:[(0,d.jsx)(a.rjZ,{item:!0,xs:12,children:(0,d.jsx)(a.Wzg,{id:"key-name",name:"key-name",label:"Key Name",autoFocus:!0,value:p,error:function(e){return-1!==e.indexOf(" ")?"Key name cannot contain spaces":""}(p),onChange:function(e){m(e.target.value)}})}),(0,d.jsxs)(a.rjZ,{item:!0,xs:12,sx:u.ID.modalButtonBar,children:[(0,d.jsx)(a.zxk,{id:"clear",type:"button",variant:"regular",onClick:function(){m("")},label:"Clear"}),(0,d.jsx)(a.zxk,{id:"save-key",type:"submit",variant:"callAction",color:"primary",disabled:c||!y,label:"Save"})]})]})})})})},h=t(47974),p=t(99670),m=function(){var e=(0,s.TL)(),n=(0,i.s0)();return(0,r.useEffect)((function(){e((0,c.Sc)("add_key"))}),[]),(0,d.jsx)(r.Fragment,{children:(0,d.jsxs)(a.rjZ,{item:!0,xs:12,children:[(0,d.jsx)(h.Z,{label:(0,d.jsx)(a.hbI,{label:"Keys",onClick:function(){return n(o.gA.KMS_KEYS)}}),actions:(0,d.jsx)(p.Z,{})}),(0,d.jsx)(j,{onError:function(n){return e((0,c.Ih)(n))},onSuccess:function(){return n("".concat(o.gA.KMS_KEYS))}})]})})}},40214:function(e,n,t){var r=t(72791),a=t(29945),i=t(80184);n.Z=function(e){var n=e.helpText,t=e.contents;return(0,i.jsx)(a.KfX,{iconComponent:(0,i.jsx)(a.M9A,{}),title:n,help:(0,i.jsx)(r.Fragment,{children:t.map((function(e){return(0,i.jsx)(a.xuv,{sx:{paddingBottom:"20px"},children:e})}))})})}}}]);
//# sourceMappingURL=3034.7295026b.chunk.js.map