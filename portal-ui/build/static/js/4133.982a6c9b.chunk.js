(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[4133],{23804:function(e,n,t){"use strict";t(72791);var o=t(11135),i=t(25787),r=t(61889),a=t(80184);n.Z=(0,i.Z)((function(e){return(0,o.Z)({root:{border:"1px solid #E2E2E2",borderRadius:2,backgroundColor:"#FBFAFA",paddingLeft:25,paddingTop:31,paddingBottom:21,paddingRight:30},leftItems:{fontSize:16,fontWeight:"bold",marginBottom:15,display:"flex",alignItems:"center","& .min-icon":{marginRight:15,height:28,width:38}},helpText:{fontSize:16,paddingLeft:5}})}))((function(e){var n=e.classes,t=e.iconComponent,o=e.title,i=e.help;return(0,a.jsx)("div",{className:n.root,children:(0,a.jsxs)(r.ZP,{container:!0,children:[(0,a.jsxs)(r.ZP,{item:!0,xs:12,className:n.leftItems,children:[t,o]}),(0,a.jsx)(r.ZP,{item:!0,xs:12,className:n.helpText,children:i})]})})}))},59114:function(e,n,t){"use strict";var o=t(4942),i=t(1413),r=(t(72791),t(63466)),a=t(74900),s=t(27391),c=t(25787),l=t(11135),d=t(23814),u=t(80184);n.Z=(0,c.Z)((function(e){return(0,l.Z)({searchField:(0,i.Z)({},d.qg.searchField),adornment:{}})}))((function(e){var n=e.placeholder,t=void 0===n?"":n,i=e.classes,c=e.onChange,l=e.adornmentPosition,d=void 0===l?"end":l,p=e.overrideClass,h=e.value,m=(0,o.Z)({disableUnderline:!0},"".concat(d,"Adornment"),(0,u.jsx)(r.Z,{position:d,className:i.adornment,children:(0,u.jsx)(a.Z,{})}));return(0,u.jsx)(s.Z,{placeholder:t,className:p||i.searchField,id:"search-resource",label:"",InputProps:m,onChange:function(e){c(e.target.value)},variant:"standard",value:h})}))},94874:function(e,n,t){"use strict";t.r(n);var o=t(29439),i=t(1413),r=t(72791),a=t(60364),s=t(26181),c=t.n(s),l=t(11135),d=t(25787),u=t(61889),p=t(56375),h=t(42649),m=t(23814),v=t(92983),f=t(32291),Z=t(81207),x=t(62666),b=t(23804),g=t(74794),j=t(56087),P=t(38442),I=t(59114),C=t(75578),S=t(40603),y=t(80184),E=(0,C.Z)(r.lazy((function(){return t.e(312).then(t.bind(t,312))}))),A={setErrorSnackMessage:h.Ih},k=(0,a.$j)(null,A);n.default=(0,d.Z)((function(e){return(0,l.Z)((0,i.Z)((0,i.Z)((0,i.Z)({},m.OR),m.qg),{},{searchField:(0,i.Z)((0,i.Z)({},m.qg.searchField),{},{maxWidth:380})},(0,m.Bz)(e.spacing(4))))}))(k((function(e){var n=e.classes,t=e.setErrorSnackMessage,i=(0,r.useState)([]),a=(0,o.Z)(i,2),s=a[0],l=a[1],d=(0,r.useState)(!1),h=(0,o.Z)(d,2),m=h[0],C=h[1],A=(0,r.useState)(!1),k=(0,o.Z)(A,2),M=k[0],z=k[1],F=(0,r.useState)(""),L=(0,o.Z)(F,2),w=L[0],N=L[1],O=(0,r.useState)(""),R=(0,o.Z)(O,2),_=R[0],B=R[1],T=(0,P.F)(j.C3,[j.Ft.ADMIN_GET_POLICY]),D=(0,P.F)(j.C3,[j.Ft.ADMIN_DELETE_POLICY]),H=(0,P.F)(j.C3,[j.Ft.ADMIN_LIST_USER_POLICIES]);(0,r.useEffect)((function(){V()}),[]),(0,r.useEffect)((function(){m&&(H?Z.Z.invoke("GET","/api/v1/policies").then((function(e){var n=c()(e,"policies",[]);n.sort((function(e,n){return e.name>n.name?1:e.name<n.name?-1:0})),C(!1),l(n)})).catch((function(e){C(!1),t(e)})):C(!1))}),[m,C,l,t,H]);var V=function(){C(!0)},Y=[{type:"view",onClick:function(e){x.Z.push("".concat(j.gA.POLICIES,"/").concat(e.name))},disableButtonFunction:function(){return!T}},{type:"delete",onClick:function(e){z(!0),N(e)},sendOnlyId:!0,disableButtonFunction:function(){return!D}}],q=s.filter((function(e){return e.name.includes(_)}));return(0,y.jsxs)(r.Fragment,{children:[M&&(0,y.jsx)(E,{deleteOpen:M,selectedPolicy:w,closeDeleteModalAndRefresh:function(e){z(!1),e&&V()}}),(0,y.jsx)(f.Z,{label:"IAM Policies"}),(0,y.jsx)(g.Z,{className:n.pageContainer,children:(0,y.jsxs)(u.ZP,{container:!0,spacing:1,children:[(0,y.jsxs)(u.ZP,{item:!0,xs:12,className:n.actionsTray,children:[(0,y.jsx)(I.Z,{onChange:B,placeholder:"Search Policies",overrideClass:n.searchField,value:_}),(0,y.jsx)(P.s,{scopes:[j.Ft.ADMIN_CREATE_POLICY],resource:j.C3,errorProps:{disabled:!0},children:(0,y.jsx)(S.Z,{tooltip:"Create Policy",text:"Create Policy",variant:"contained",color:"primary",icon:(0,y.jsx)(p.dtP,{}),onClick:function(){x.Z.push("".concat(j.gA.POLICY_ADD))}})})]}),(0,y.jsx)(u.ZP,{item:!0,xs:12,className:n.tableBlock,children:(0,y.jsx)(P.s,{scopes:[j.Ft.ADMIN_LIST_USER_POLICIES],resource:j.C3,errorProps:{disabled:!0},children:(0,y.jsx)(v.Z,{itemActions:Y,columns:[{label:"Name",elementKey:"name"}],isLoading:m,records:q,entityName:"Policies",idField:"name"})})}),(0,y.jsx)(u.ZP,{item:!0,xs:12,children:(0,y.jsx)(b.Z,{title:"Learn more about IAM POLICIES",iconComponent:(0,y.jsx)(p.v42,{}),help:(0,y.jsxs)(r.Fragment,{children:["MinIO uses Policy-Based Access Control (PBAC) to define the authorized actions and resources to which an authenticated user has access. Each policy describes one or more actions and conditions that outline the permissions of a user or group of users.",(0,y.jsx)("br",{}),(0,y.jsx)("br",{}),"MinIO PBAC is built for compatibility with AWS IAM policy syntax, structure, and behavior. The MinIO documentation makes a best-effort to cover IAM-specific behavior and functionality. Consider deferring to the IAM documentation for more complete documentation on AWS IAM-specific topics.",(0,y.jsx)("br",{}),(0,y.jsx)("br",{}),"You can learn more at our"," ",(0,y.jsx)("a",{href:"https://docs.min.io/minio/baremetal/security/minio-identity-management/policy-based-access-control.html?ref=con",target:"_blank",rel:"noreferrer",children:"documentation"}),"."]})})})]})})]})})))},26759:function(e,n,t){"use strict";var o=t(95318);n.Z=void 0;var i=o(t(45649)),r=t(80184),a=(0,i.default)((0,r.jsx)("path",{d:"m7 10 5 5 5-5z"}),"ArrowDropDown");n.Z=a},70366:function(e,n,t){"use strict";var o=t(95318);n.Z=void 0;var i=o(t(45649)),r=t(80184),a=(0,i.default)((0,r.jsx)("path",{d:"m7 14 5-5 5 5z"}),"ArrowDropUp");n.Z=a},97911:function(e,n,t){"use strict";var o=t(95318);n.Z=void 0;var i=o(t(45649)),r=t(80184),a=(0,i.default)((0,r.jsx)("path",{d:"M14.67 5v14H9.33V5h5.34zm1 14H21V5h-5.33v14zm-7.34 0V5H3v14h5.33z"}),"ViewColumn");n.Z=a},94454:function(e,n,t){"use strict";t.d(n,{Z:function(){return y}});var o=t(4942),i=t(63366),r=t(87462),a=t(72791),s=t(90767),c=t(12065),l=t(97278),d=t(76189),u=t(80184),p=(0,d.Z)((0,u.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),h=(0,d.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),m=(0,d.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),v=t(14036),f=t(93736),Z=t(47630),x=t(95159);function b(e){return(0,x.Z)("MuiCheckbox",e)}var g=(0,t(30208).Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),j=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],P=(0,Z.ZP)(l.Z,{shouldForwardProp:function(e){return(0,Z.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,t.indeterminate&&n.indeterminate,"default"!==t.color&&n["color".concat((0,v.Z)(t.color))]]}})((function(e){var n,t=e.theme,i=e.ownerState;return(0,r.Z)({color:t.palette.text.secondary},!i.disableRipple&&{"&:hover":{backgroundColor:(0,c.Fq)("default"===i.color?t.palette.action.active:t.palette[i.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==i.color&&(n={},(0,o.Z)(n,"&.".concat(g.checked,", &.").concat(g.indeterminate),{color:t.palette[i.color].main}),(0,o.Z)(n,"&.".concat(g.disabled),{color:t.palette.action.disabled}),n))})),I=(0,u.jsx)(h,{}),C=(0,u.jsx)(p,{}),S=(0,u.jsx)(m,{}),y=a.forwardRef((function(e,n){var t,o,c=(0,f.Z)({props:e,name:"MuiCheckbox"}),l=c.checkedIcon,d=void 0===l?I:l,p=c.color,h=void 0===p?"primary":p,m=c.icon,Z=void 0===m?C:m,x=c.indeterminate,g=void 0!==x&&x,y=c.indeterminateIcon,E=void 0===y?S:y,A=c.inputProps,k=c.size,M=void 0===k?"medium":k,z=(0,i.Z)(c,j),F=g?E:Z,L=g?E:d,w=(0,r.Z)({},c,{color:h,indeterminate:g,size:M}),N=function(e){var n=e.classes,t=e.indeterminate,o=e.color,i={root:["root",t&&"indeterminate","color".concat((0,v.Z)(o))]},a=(0,s.Z)(i,b,n);return(0,r.Z)({},n,a)}(w);return(0,u.jsx)(P,(0,r.Z)({type:"checkbox",inputProps:(0,r.Z)({"data-indeterminate":g},A),icon:a.cloneElement(F,{fontSize:null!=(t=F.props.fontSize)?t:M}),checkedIcon:a.cloneElement(L,{fontSize:null!=(o=L.props.fontSize)?o:M}),ownerState:w,ref:n},z,{classes:N}))}))},63466:function(e,n,t){"use strict";t.d(n,{Z:function(){return P}});var o=t(4942),i=t(63366),r=t(87462),a=t(72791),s=t(28182),c=t(90767),l=t(14036),d=t(20890),u=t(93840),p=t(52930),h=t(47630),m=t(95159);function v(e){return(0,m.Z)("MuiInputAdornment",e)}var f,Z=(0,t(30208).Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),x=t(93736),b=t(80184),g=["children","className","component","disablePointerEvents","disableTypography","position","variant"],j=(0,h.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["position".concat((0,l.Z)(t.position))],!0===t.disablePointerEvents&&n.disablePointerEvents,n[t.variant]]}})((function(e){var n=e.theme,t=e.ownerState;return(0,r.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:n.palette.action.active},"filled"===t.variant&&(0,o.Z)({},"&.".concat(Z.positionStart,"&:not(.").concat(Z.hiddenLabel,")"),{marginTop:16}),"start"===t.position&&{marginRight:8},"end"===t.position&&{marginLeft:8},!0===t.disablePointerEvents&&{pointerEvents:"none"})})),P=a.forwardRef((function(e,n){var t=(0,x.Z)({props:e,name:"MuiInputAdornment"}),o=t.children,h=t.className,m=t.component,Z=void 0===m?"div":m,P=t.disablePointerEvents,I=void 0!==P&&P,C=t.disableTypography,S=void 0!==C&&C,y=t.position,E=t.variant,A=(0,i.Z)(t,g),k=(0,p.Z)()||{},M=E;E&&k.variant,k&&!M&&(M=k.variant);var z=(0,r.Z)({},t,{hiddenLabel:k.hiddenLabel,size:k.size,disablePointerEvents:I,position:y,variant:M}),F=function(e){var n=e.classes,t=e.disablePointerEvents,o=e.hiddenLabel,i=e.position,r=e.size,a=e.variant,s={root:["root",t&&"disablePointerEvents",i&&"position".concat((0,l.Z)(i)),a,o&&"hiddenLabel",r&&"size".concat((0,l.Z)(r))]};return(0,c.Z)(s,v,n)}(z);return(0,b.jsx)(u.Z.Provider,{value:null,children:(0,b.jsx)(j,(0,r.Z)({as:Z,ownerState:z,className:(0,s.Z)(F.root,h),ref:n},A,{children:"string"!==typeof o||S?(0,b.jsxs)(a.Fragment,{children:["start"===y?f||(f=(0,b.jsx)("span",{className:"notranslate",children:"\u200b"})):null,o]}):(0,b.jsx)(d.Z,{color:"text.secondary",children:o})}))})}))},26769:function(e,n,t){var o=t(39066),i=t(93629),r=t(43141);e.exports=function(e){return"string"==typeof e||!i(e)&&r(e)&&"[object String]"==o(e)}}}]);
//# sourceMappingURL=4133.982a6c9b.chunk.js.map