"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[2185],{62185:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var r=a(72791),s=a(57689),n=a(78687),l=a(29945),o=a(56028),i=a(23814),c=a(45248),d=a(44690),h=a(87995),u=a(80184);const p=(0,n.$j)((e=>{let{objectBrowser:t}=e;return{simplePath:t.simplePath}}))((e=>{let{modalOpen:t,folderName:a,bucketName:p,onClose:m,simplePath:x,limitedSubPath:f}=e;const w=(0,d.TL)(),b=(0,s.s0)(),[j,v]=(0,r.useState)(""),[g,P]=(0,r.useState)(!1),[y,C]=(0,r.useState)(p),k=(0,n.v9)((e=>e.objectBrowser.records));(0,r.useEffect)((()=>{if(x){const e="".concat(p).concat(p.endsWith("/")||x.startsWith("/")?"":"/").concat(x);C(e)}}),[x,p]);const S=()=>{let e="/";x&&(e=x.endsWith("/")?x:"".concat(x,"/"));if(-1!==k.findIndex((t=>t.name===e+j)))return void w((0,h.zb)({errorMessage:"Folder cannot have the same name as an existing file",detailedError:""}));const t=j.split("/").filter((e=>""!==e.trim())).join("/");"/"===e.slice(0,1)&&(e=e.slice(1));const a="/browser/".concat(p,"/").concat((0,c.LL)("".concat(e).concat(t,"/")));b(a),m()};(0,r.useEffect)((()=>{let e=!0;0===j.trim().length&&(e=!1),P(e)}),[j]);return(0,u.jsx)(r.Fragment,{children:(0,u.jsx)(o.Z,{modalOpen:t,title:"Choose or create a new path",onClose:m,titleIcon:(0,u.jsx)(l.Z9m,{}),children:(0,u.jsxs)(l.ltY,{withBorders:!1,containerPadding:!1,children:[(0,u.jsxs)(l.xuv,{className:"inputItem",sx:{display:"flex",gap:8},children:[(0,u.jsx)("strong",{children:"Current Path:"})," ",(0,u.jsx)("br",{}),(0,u.jsx)(l.xuv,{sx:{textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",fontSize:14,textAlign:"left"},dir:"rtl",children:y})]}),(0,u.jsx)(l.Wzg,{value:j,label:"New Folder Path",id:"folderPath",name:"folderPath",placeholder:"Enter the new Folder Path",onChange:e=>{v(e.target.value)},onKeyPress:e=>{"Enter"===e.code&&""!==j&&S()},required:!0,tooltip:f?"You may only have write access on a limited set of subpaths within this path. Please carefully review your User permissions to understand the paths to which you may write.":""}),(0,u.jsxs)(l.rjZ,{item:!0,xs:12,sx:i.ID.modalButtonBar,children:[(0,u.jsx)(l.zxk,{id:"clear",type:"button",color:"primary",variant:"regular",onClick:()=>{v("")},label:"Clear"}),(0,u.jsx)(l.zxk,{id:"create",type:"submit",variant:"callAction",disabled:!g,onClick:S,label:"Create"})]})]})})})}))}}]);
//# sourceMappingURL=2185.abc254ca.chunk.js.map