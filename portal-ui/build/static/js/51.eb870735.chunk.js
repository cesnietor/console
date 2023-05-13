"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[51,1435],{51:function(e,n,t){t.r(n),t.d(n,{default:function(){return M}});var i=t(29439),a=t(1413),r=t(72791),o=t(78687),s=t(11135),l=t(25787),c=t(26181),d=t.n(c),u=t(61889),x=t(29945),p=t(23814),h=t(81207),f=t(89673),m=t(55818),v=t(20890),Z=t(3721),j=t(40986),b=t(56028),y=t(21435),g=t(81159),_=t(17420),C=t(90673),S=t(83679),P=t(87995),F=t(81551),k=t(80184),N=(0,l.Z)((function(e){return(0,s.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({formFieldRowAccordion:{"& .MuiPaper-root":{padding:0}}},p.bK),p.ID),p.DF),p.QV))}))((function(e){var n,t,o,s,l,c=e.classes,p=e.closeModalAndRefresh,N=e.selectedBucket,T=e.lifecycleRule,E=e.open,I=(0,F.TL)(),L=(0,r.useState)(!0),O=(0,i.Z)(L,2),A=O[0],R=O[1],w=(0,r.useState)(!1),B=(0,i.Z)(w,2),D=B[0],V=B[1],z=(0,r.useState)(""),M=(0,i.Z)(z,2),K=M[0],G=M[1],H=(0,r.useState)(!1),U=(0,i.Z)(H,2),W=U[0],Y=U[1],q=(0,r.useState)([]),Q=(0,i.Z)(q,2),$=Q[0],X=Q[1],J=(0,r.useState)(""),ee=(0,i.Z)(J,2),ne=ee[0],te=ee[1],ie=(0,r.useState)(""),ae=(0,i.Z)(ie,2),re=ae[0],oe=ae[1],se=(0,r.useState)(""),le=(0,i.Z)(se,2),ce=le[0],de=le[1],ue=(0,r.useState)(!1),xe=(0,i.Z)(ue,2),pe=xe[0],he=xe[1],fe=(0,r.useState)("0"),me=(0,i.Z)(fe,2),ve=me[0],Ze=me[1],je=(0,r.useState)("0"),be=(0,i.Z)(je,2),ye=be[0],ge=be[1],_e=(0,r.useState)("expiry"),Ce=(0,i.Z)(_e,2),Se=Ce[0],Pe=Ce[1],Fe=(0,r.useState)("0"),ke=(0,i.Z)(Fe,2),Ne=ke[0],Te=ke[1],Ee=(0,r.useState)("0"),Ie=(0,i.Z)(Ee,2),Le=Ie[0],Oe=Ie[1],Ae=(0,r.useState)(!1),Re=(0,i.Z)(Ae,2),we=Re[0],Be=Re[1];(0,r.useEffect)((function(){A&&h.Z.invoke("GET","/api/v1/admin/tiers").then((function(e){var n=d()(e,"items",[]);if(null!==n&&n.length>=1){var t=n.map((function(e){var n=e.type,t=d()(e,"".concat(n,".name"),"");return{label:t,value:t}}));X(t),t.length>0&&oe(t[0].value)}R(!1)})).catch((function(e){R(!1)}))}),[A]),(0,r.useEffect)((function(){var e=!0;"expiry"!==Se&&""===re&&(e=!1),Be(e)}),[Se,Ne,Le,re]),(0,r.useEffect)((function(){var e;"Enabled"===T.status&&Y(!0);var n,t,i,a,r,o,s=!1;(T.transition&&(T.transition.days&&0!==T.transition.days&&(Oe(T.transition.days.toString()),Pe("transition"),s=!0),T.transition.noncurrent_transition_days&&0!==T.transition.noncurrent_transition_days&&(ge(T.transition.noncurrent_transition_days.toString()),Pe("transition"),s=!0),T.transition.date&&"0001-01-01T00:00:00Z"!==T.transition.date&&(Pe("transition"),s=!0)),T.expiration&&(T.expiration.days&&0!==T.expiration.days&&(Te(T.expiration.days.toString()),Pe("expiry"),s=!1),T.expiration.noncurrent_expiration_days&&0!==T.expiration.noncurrent_expiration_days&&(Ze(T.expiration.noncurrent_expiration_days.toString()),Pe("expiry"),s=!1),T.expiration.date&&"0001-01-01T00:00:00Z"!==T.expiration.date&&(Pe("expiry"),s=!1)),s)?(oe((null===(n=T.transition)||void 0===n?void 0:n.storage_class)||""),ge((null===(t=T.transition)||void 0===t||null===(i=t.noncurrent_transition_days)||void 0===i?void 0:i.toString())||"0"),de((null===(a=T.transition)||void 0===a?void 0:a.noncurrent_storage_class)||"")):Ze((null===(r=T.expiration)||void 0===r||null===(o=r.noncurrent_expiration_days)||void 0===o?void 0:o.toString())||"0");if(he(!(null===(e=T.expiration)||void 0===e||!e.delete_marker)),te(T.prefix||""),T.tags){var l=T.tags.reduce((function(e,n,t){return"".concat(e).concat(0!==t?"&":"").concat(n.key,"=").concat(n.value)}),"");G(l)}}),[T]);var De="";return T.expiration&&(T.expiration.days>0?De="Current Version":T.expiration.noncurrent_expiration_days&&(De="Non-Current Version")),T.transition&&(T.transition.days>0?De="Current Version":T.transition.noncurrent_transition_days&&(De="Non-Current Version")),(0,k.jsx)(b.Z,{onClose:function(){p(!1)},modalOpen:E,title:"Edit Lifecycle Configuration",titleIcon:(0,k.jsx)(x.QIv,{}),children:(0,k.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){!function(e){if(e.preventDefault(),!D&&(V(!0),null!==N&&null!==T)){var n={};if("expiry"===Se){var t,i,r,o={};null!==(t=T.expiration)&&void 0!==t&&t.days&&(null===(i=T.expiration)||void 0===i?void 0:i.days)>0&&(o.expiry_days=parseInt(Ne)),null!==(r=T.expiration)&&void 0!==r&&r.noncurrent_expiration_days&&(o.noncurrentversion_expiration_days=parseInt(ve)),n=(0,a.Z)({},o)}else{var s,l,c,d={};null!==(s=T.expiration)&&void 0!==s&&s.days&&(null===(l=T.expiration)||void 0===l?void 0:l.days)>0&&(d.transition_days=parseInt(Ne),d.storage_class=re),null!==(c=T.expiration)&&void 0!==c&&c.noncurrent_expiration_days&&(d.noncurrentversion_transition_days=parseInt(ve),d.noncurrentversion_transition_storage_class=ce),n=(0,a.Z)({},d)}var u=(0,a.Z)({type:Se,disable:!W,prefix:ne,tags:K,expired_object_delete_marker:pe},n);h.Z.invoke("PUT","/api/v1/buckets/".concat(N,"/lifecycle/").concat(T.id),u).then((function(e){V(!1),p(!0)})).catch((function(e){V(!1),I((0,P.zb)(e))}))}}(e)},children:(0,k.jsxs)(u.ZP,{container:!0,children:[(0,k.jsx)(u.ZP,{item:!0,xs:12,className:c.formScrollable,children:(0,k.jsxs)(u.ZP,{container:!0,spacing:1,children:[(0,k.jsx)(u.ZP,{item:!0,xs:12,sx:{marginTop:"5px"},children:(0,k.jsx)(g.Z,{label:"Status",indicatorLabels:["Enabled","Disabled"],checked:W,value:"user_enabled",id:"rule_status",name:"rule_status",onChange:function(e){Y(e.target.checked)}})}),(0,k.jsx)(u.ZP,{item:!0,xs:12,children:(0,k.jsx)(y.Z,{id:"id",name:"id",label:"Id",value:T.id,onChange:function(){},disabled:!0})}),(0,k.jsx)(u.ZP,{item:!0,xs:12,children:(0,k.jsx)(S.Z,{currentSelection:Se,id:"rule_type",name:"rule_type",label:"Rule Type",selectorOptions:[{value:"expiry",label:"Expiry"},{value:"transition",label:"Transition"}],onChange:function(){},disableOptions:!0})}),(0,k.jsx)(u.ZP,{item:!0,xs:12,children:(0,k.jsx)(y.Z,{id:"object-version",name:"object-version",label:"Object Version",value:De,onChange:function(){},disabled:!0})}),"expiry"===Se&&(null===(n=T.expiration)||void 0===n?void 0:n.days)&&(0,k.jsx)(u.ZP,{item:!0,xs:12,children:(0,k.jsx)(y.Z,{type:"number",id:"expiry_days",name:"expiry_days",onChange:function(e){Te(e.target.value)},label:"Expiry Days",value:Ne,min:"0"})}),"expiry"===Se&&(null===(t=T.expiration)||void 0===t?void 0:t.noncurrent_expiration_days)&&(0,k.jsx)(u.ZP,{item:!0,xs:12,children:(0,k.jsx)(y.Z,{type:"number",id:"noncurrentversion_expiration_days",name:"noncurrentversion_expiration_days",onChange:function(e){Ze(e.target.value)},label:"Non-current Expiration Days",value:ve,min:"0"})}),"transition"===Se&&(null===(o=T.transition)||void 0===o?void 0:o.days)&&(0,k.jsxs)(r.Fragment,{children:[(0,k.jsx)(u.ZP,{item:!0,xs:12,children:(0,k.jsx)(y.Z,{type:"number",id:"transition_days",name:"transition_days",onChange:function(e){Oe(e.target.value)},label:"Transition Days",value:Le,min:"0"})}),(0,k.jsx)(u.ZP,{item:!0,xs:12,children:(0,k.jsx)(C.Z,{label:"Storage Class",id:"storage_class",name:"storage_class",value:re,onChange:function(e){oe(e.target.value)},options:$})})]}),"transition"===Se&&(null===(s=T.transition)||void 0===s?void 0:s.noncurrent_transition_days)&&(0,k.jsxs)(r.Fragment,{children:[(0,k.jsx)(u.ZP,{item:!0,xs:12,children:(0,k.jsx)(y.Z,{type:"number",id:"noncurrentversion_transition_days",name:"noncurrentversion_transition_days",onChange:function(e){ge(e.target.value)},label:"Non-current Transition Days",value:ye,min:"0"})}),(0,k.jsx)(u.ZP,{item:!0,xs:12,children:(0,k.jsx)(y.Z,{id:"noncurrentversion_t_SC",name:"noncurrentversion_t_SC",onChange:function(e){de(e.target.value)},placeholder:"Set Non-current Version Transition Storage Class",label:"Non-current Version Transition Storage Class",value:ce})})]}),(0,k.jsx)(u.ZP,{item:!0,xs:12,className:c.formFieldRowAccordion,children:(0,k.jsxs)(f.Z,{children:[(0,k.jsx)(m.Z,{children:(0,k.jsx)(v.Z,{children:"Filters"})}),(0,k.jsxs)(Z.Z,{children:[(0,k.jsx)(u.ZP,{item:!0,xs:12,children:(0,k.jsx)(y.Z,{id:"prefix",name:"prefix",onChange:function(e){te(e.target.value)},label:"Prefix",value:ne})}),(0,k.jsx)(u.ZP,{item:!0,xs:12,children:(0,k.jsx)(_.Z,{name:"tags",label:"Tags",elements:K,onChange:function(e){G(e)},keyPlaceholder:"Tag Key",valuePlaceholder:"Tag Value",withBorder:!0})})]})]})}),"expiry"===Se&&(null===(l=T.expiration)||void 0===l?void 0:l.noncurrent_expiration_days)&&(0,k.jsx)(u.ZP,{item:!0,xs:12,className:c.formFieldRowAccordion,children:(0,k.jsxs)(f.Z,{children:[(0,k.jsx)(m.Z,{children:(0,k.jsx)(v.Z,{children:"Advanced"})}),(0,k.jsx)(Z.Z,{children:(0,k.jsx)(u.ZP,{item:!0,xs:12,children:(0,k.jsx)(g.Z,{value:"expired_delete_marker",id:"expired_delete_marker",name:"expired_delete_marker",checked:pe,onChange:function(e){he(e.target.checked)},label:"Expired Object Delete Marker"})})})]})})]})}),(0,k.jsxs)(u.ZP,{item:!0,xs:12,className:c.modalButtonBar,children:[(0,k.jsx)(x.zxk,{id:"cancel",type:"button",variant:"regular",disabled:D,onClick:function(){p(!1)},label:"Cancel"}),(0,k.jsx)(x.zxk,{id:"save",type:"submit",variant:"callAction",color:"primary",disabled:D||!we,label:"Save"})]}),D&&(0,k.jsx)(u.ZP,{item:!0,xs:12,children:(0,k.jsx)(j.Z,{})})]})})})})),T=t(84741),E=(0,l.Z)((function(e){return(0,s.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({formFieldRowFilter:{"& .MuiPaper-root":{padding:0}}},p.bK),p.ID),p.DF),p.QV))}))((function(e){var n=e.open,t=e.closeModalAndRefresh,s=e.classes,l=e.bucketName,c=(0,F.TL)(),p=(0,o.v9)(P.N5),N=(0,r.useState)(!0),E=(0,i.Z)(N,2),I=E[0],L=E[1],O=(0,r.useState)([]),A=(0,i.Z)(O,2),R=A[0],w=A[1],B=(0,r.useState)(!1),D=(0,i.Z)(B,2),V=D[0],z=D[1],M=(0,r.useState)(null),K=(0,i.Z)(M,2),G=K[0],H=K[1],U=(0,r.useState)(""),W=(0,i.Z)(U,2),Y=W[0],q=W[1],Q=(0,r.useState)(""),$=(0,i.Z)(Q,2),X=$[0],J=$[1],ee=(0,r.useState)(""),ne=(0,i.Z)(ee,2),te=ne[0],ie=ne[1],ae=(0,r.useState)("expiry"),re=(0,i.Z)(ae,2),oe=re[0],se=re[1],le=(0,r.useState)("current"),ce=(0,i.Z)(le,2),de=ce[0],ue=ce[1],xe=(0,r.useState)(""),pe=(0,i.Z)(xe,2),he=pe[0],fe=pe[1],me=(0,r.useState)(!1),ve=(0,i.Z)(me,2),Ze=ve[0],je=ve[1],be=(0,r.useState)(!1),ye=(0,i.Z)(be,2),ge=ye[0],_e=ye[1],Ce=(0,r.useState)(!0),Se=(0,i.Z)(Ce,2),Pe=Se[0],Fe=Se[1];(0,r.useEffect)((function(){I&&h.Z.invoke("GET","/api/v1/admin/tiers").then((function(e){var n=d()(e,"items",[]);if(null!==n&&n.length>=1){var t=n.map((function(e){var n=e.type,t=d()(e,"".concat(n,".name"),"");return{label:t,value:t}}));w(t),t.length>0&&ie(t[0].value)}L(!1)})).catch((function(e){L(!1)}))}),[I]),(0,r.useEffect)((function(){var e=!0;"expiry"!==oe&&""===te&&(e=!1),je(e)}),[oe,he,te]),(0,r.useEffect)((function(){Pe&&p&&h.Z.invoke("GET","/api/v1/buckets/".concat(l,"/versioning")).then((function(e){H(e),Fe(!1)})).catch((function(e){c((0,P.zb)(e)),Fe(!1)}))}),[Pe,c,l,p]);return(0,k.jsxs)(b.Z,{modalOpen:n,onClose:function(){t(!1)},title:"Add Lifecycle Rule",titleIcon:(0,k.jsx)(x.QIv,{}),children:[I&&(0,k.jsx)(u.ZP,{container:!0,className:s.loadingBox,children:(0,k.jsx)(u.ZP,{item:!0,xs:12,children:(0,k.jsx)(j.Z,{})})}),!I&&(0,k.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),z(!0),function(){var e={};if("expiry"===oe){var n={};"current"===de?n.expiry_days=parseInt(he):n.noncurrentversion_expiration_days=parseInt(he),e=(0,a.Z)({},n)}else{var i={};"current"===de?(i.transition_days=parseInt(he),i.storage_class=te):(i.noncurrentversion_transition_days=parseInt(he),i.noncurrentversion_transition_storage_class=te),e=(0,a.Z)({},i)}var r=(0,a.Z)({type:oe,prefix:Y,tags:X,expired_object_delete_marker:ge},e);h.Z.invoke("POST","/api/v1/buckets/".concat(l,"/lifecycle"),r).then((function(){z(!1),t(!0)})).catch((function(e){z(!1),c((0,P.zb)(e))}))}()},children:(0,k.jsxs)(u.ZP,{container:!0,children:[(0,k.jsx)(u.ZP,{item:!0,xs:12,className:s.formScrollable,children:(0,k.jsx)(u.ZP,{item:!0,xs:12,children:(0,k.jsxs)(u.ZP,{container:!0,spacing:1,children:[(0,k.jsx)(u.ZP,{item:!0,xs:12,children:(0,k.jsx)(S.Z,{currentSelection:oe,id:"ilm_type",name:"ilm_type",label:"Type of lifecycle",onChange:function(e){se(e.target.value)},selectorOptions:[{value:"expiry",label:"Expiry"},{value:"transition",label:"Transition"}]})}),"Enabled"===(null===G||void 0===G?void 0:G.status)&&(0,k.jsx)(u.ZP,{item:!0,xs:12,children:(0,k.jsx)(C.Z,{value:de,id:"object_version",name:"object_version",label:"Object Version",onChange:function(e){ue(e.target.value)},options:[{value:"current",label:"Current Version"},{value:"noncurrent",label:"Non-Current Version"}]})}),(0,k.jsx)(u.ZP,{item:!0,xs:12,children:(0,k.jsx)(y.Z,{id:"expiry_days",name:"expiry_days",onChange:function(e){e.target.validity.valid&&fe(e.target.value)},pattern:"[0-9]*",label:"After",value:he,overlayObject:(0,k.jsx)(T.Z,{id:"expire-current-unit",unitSelected:"days",unitsList:[{label:"Days",value:"days"}],disabled:!0})})}),"expiry"===oe?(0,k.jsx)(r.Fragment,{}):(0,k.jsx)(r.Fragment,{children:(0,k.jsx)(u.ZP,{item:!0,xs:12,children:(0,k.jsx)(C.Z,{label:"To Tier",id:"storage_class",name:"storage_class",value:te,onChange:function(e){ie(e.target.value)},options:R})})}),(0,k.jsx)(u.ZP,{item:!0,xs:12,className:s.formFieldRowFilter,children:(0,k.jsxs)(f.Z,{children:[(0,k.jsx)(m.Z,{children:(0,k.jsx)(v.Z,{children:"Filters"})}),(0,k.jsxs)(Z.Z,{children:[(0,k.jsx)(u.ZP,{item:!0,xs:12,children:(0,k.jsx)(y.Z,{id:"prefix",name:"prefix",onChange:function(e){q(e.target.value)},label:"Prefix",value:Y})}),(0,k.jsx)(u.ZP,{item:!0,xs:12,children:(0,k.jsx)(_.Z,{name:"tags",label:"Tags",elements:"",onChange:function(e){J(e)},keyPlaceholder:"Tag Key",valuePlaceholder:"Tag Value",withBorder:!0})})]})]})}),"expiry"===oe&&"noncurrent"===de&&(0,k.jsx)(u.ZP,{item:!0,xs:12,className:s.formFieldRowFilter,children:(0,k.jsxs)(f.Z,{children:[(0,k.jsx)(m.Z,{children:(0,k.jsx)(v.Z,{children:"Advanced"})}),(0,k.jsx)(Z.Z,{children:(0,k.jsx)(u.ZP,{item:!0,xs:12,children:(0,k.jsx)(g.Z,{value:"expired_delete_marker",id:"expired_delete_marker",name:"expired_delete_marker",checked:ge,onChange:function(e){_e(e.target.checked)},label:"Expire Delete Marker",description:"Remove the reference to the object if no versions are left"})})})]})})]})})}),(0,k.jsxs)(u.ZP,{item:!0,xs:12,className:s.modalButtonBar,children:[(0,k.jsx)(x.zxk,{id:"reset",type:"button",variant:"regular",disabled:V,onClick:function(){t(!1)},label:"Cancel"}),(0,k.jsx)(x.zxk,{id:"save-lifecycle",type:"submit",variant:"callAction",color:"primary",disabled:V||!Ze,label:"Save"})]}),V&&(0,k.jsx)(u.ZP,{item:!0,xs:12,children:(0,k.jsx)(j.Z,{})})]})})]})})),I=t(92983),L=t(60680),O=t(38442),A=t(56087),R=t(51691),w=t(23508),B=(0,l.Z)((function(e){return(0,s.Z)((0,a.Z)({},p.oO))}))((function(e){var n=e.onCloseAndRefresh,t=e.deleteOpen,a=e.bucket,o=e.id,s=(0,F.TL)(),l=(0,r.useState)(!1),c=(0,i.Z)(l,2),d=c[0],u=c[1];(0,r.useEffect)((function(){d&&h.Z.invoke("DELETE","/api/v1/buckets/".concat(a,"/lifecycle/").concat(o)).then((function(e){u(!1),n(!0)})).catch((function(e){u(!1),s((0,P.Ih)(e))}))}),[d,a,o,n,s]);return(0,k.jsx)(w.Z,{title:"Delete Lifecycle Rule",confirmText:"Delete",isOpen:t,isLoading:d,onConfirm:function(){u(!0)},titleIcon:(0,k.jsx)(x.NvT,{}),onClose:function(){return n(!1)},confirmationContent:(0,k.jsxs)(R.Z,{children:["Are you sure you want to delete the ",(0,k.jsx)("strong",{children:o})," rule?"]})})})),D=t(9859),V=t(57689),z=t(27454),M=(0,l.Z)((function(e){return(0,s.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},p.qg),p.OR),{},{twHeight:{minHeight:400}}))}))((function(e){var n=e.classes,t=(0,o.v9)(D.HQ),a=(0,V.UO)(),s=(0,r.useState)(!0),l=(0,i.Z)(s,2),c=l[0],p=l[1],f=(0,r.useState)([]),m=(0,i.Z)(f,2),v=m[0],Z=m[1],j=(0,r.useState)(!1),b=(0,i.Z)(j,2),y=b[0],g=b[1],_=(0,r.useState)(!1),C=(0,i.Z)(_,2),S=C[0],P=C[1],F=(0,r.useState)(null),T=(0,i.Z)(F,2),R=T[0],w=T[1],M=(0,r.useState)(!1),K=(0,i.Z)(M,2),G=K[0],H=K[1],U=(0,r.useState)(null),W=(0,i.Z)(U,2),Y=W[0],q=W[1],Q=a.bucketName||"",$=(0,O.F)(Q,[A.Ft.S3_GET_LIFECYCLE_CONFIGURATION,A.Ft.S3_GET_ACTIONS]);(0,r.useEffect)((function(){t&&p(!0)}),[t,p]),(0,r.useEffect)((function(){c&&($?h.Z.invoke("GET","/api/v1/buckets/".concat(Q,"/lifecycle")).then((function(e){var n=d()(e,"lifecycle",[]);Z(n||[]),p(!1)})).catch((function(e){console.error(e),Z([]),p(!1)})):p(!1))}),[c,p,Q,$]);var X=[{label:"Type",renderFullObject:!0,renderFunction:function(e){return e?e.expiration&&(e.expiration.days>0||e.expiration.noncurrent_expiration_days)?(0,k.jsx)("span",{children:"Expiry"}):e.transition&&(e.transition.days>0||e.transition.noncurrent_transition_days)?(0,k.jsx)("span",{children:"Transition"}):(0,k.jsx)(r.Fragment,{}):(0,k.jsx)(r.Fragment,{})}},{label:"Version",renderFullObject:!0,renderFunction:function(e){if(!e)return(0,k.jsx)(r.Fragment,{});if(e.expiration){if(e.expiration.days>0)return(0,k.jsx)("span",{children:"Current"});if(e.expiration.noncurrent_expiration_days)return(0,k.jsx)("span",{children:"Non-Current"})}if(e.transition){if(e.transition.days>0)return(0,k.jsx)("span",{children:"Current"});if(e.transition.noncurrent_transition_days)return(0,k.jsx)("span",{children:"Non-Current"})}}},{label:"Tier",elementKey:"storage_class",renderFunction:function(e){var n=d()(e,"transition.storage_class","");return n=d()(e,"transition.noncurrent_storage_class",n)},renderFullObject:!0},{label:"Prefix",elementKey:"prefix"},{label:"After",renderFullObject:!0,renderFunction:function(e){if(!e)return(0,k.jsx)(r.Fragment,{});if(e.expiration){if(e.expiration.days>0)return(0,k.jsxs)("span",{children:[e.expiration.days," days"]});if(e.expiration.noncurrent_expiration_days)return(0,k.jsxs)("span",{children:[e.expiration.noncurrent_expiration_days," days"]})}if(e.transition){if(e.transition.days>0)return(0,k.jsxs)("span",{children:[e.transition.days," days"]});if(e.transition.noncurrent_transition_days)return(0,k.jsxs)("span",{children:[e.transition.noncurrent_transition_days," days"]})}}},{label:"Status",elementKey:"status"}],J=[{type:"view",onClick:function(e){w(e),P(!0)}},{type:"delete",onClick:function(e){q(e),H(!0)},sendOnlyId:!0}];return(0,k.jsxs)(r.Fragment,{children:[S&&R&&(0,k.jsx)(N,{open:S,closeModalAndRefresh:function(e){P(!1),w(null),e&&p(!0)},selectedBucket:Q,lifecycleRule:R}),y&&(0,k.jsx)(E,{open:y,bucketName:Q,closeModalAndRefresh:function(e){g(!1),e&&p(!0)}}),G&&Y&&(0,k.jsx)(B,{id:Y,bucket:Q,deleteOpen:G,onCloseAndRefresh:function(e){H(!1),q(null),e&&p(!0)}}),(0,k.jsxs)(u.ZP,{container:!0,children:[(0,k.jsxs)(u.ZP,{item:!0,xs:12,className:n.actionsTray,children:[(0,k.jsx)(L.Z,{children:"Lifecycle Rules"}),(0,k.jsx)(O.s,{scopes:[A.Ft.S3_PUT_LIFECYCLE_CONFIGURATION,A.Ft.S3_PUT_ACTIONS],resource:Q,matchAll:!0,errorProps:{disabled:!0},children:(0,k.jsx)(z.Z,{tooltip:"Add Lifecycle Rule",children:(0,k.jsx)(x.zxk,{id:"add-bucket-lifecycle-rule",onClick:function(){g(!0)},label:"Add Lifecycle Rule",icon:(0,k.jsx)(x.dtP,{}),variant:"callAction"})})})]}),(0,k.jsx)(u.ZP,{item:!0,xs:12,children:(0,k.jsx)(O.s,{scopes:[A.Ft.S3_GET_LIFECYCLE_CONFIGURATION,A.Ft.S3_GET_ACTIONS],resource:Q,errorProps:{disabled:!0},children:(0,k.jsx)(I.Z,{itemActions:J,columns:X,isLoading:c,records:v,entityName:"Lifecycle",customEmptyMessage:"There are no Lifecycle rules yet",idField:"id",customPaperHeight:n.twHeight})})}),!c&&(0,k.jsxs)(u.ZP,{item:!0,xs:12,children:[(0,k.jsx)("br",{}),(0,k.jsx)(x.KfX,{title:"Lifecycle Rules",iconComponent:(0,k.jsx)(x.y2Y,{}),help:(0,k.jsxs)(r.Fragment,{children:["MinIO Object Lifecycle Management allows creating rules for time or date based automatic transition or expiry of objects. For object transition, MinIO automatically moves the object to a configured remote storage tier.",(0,k.jsx)("br",{}),(0,k.jsx)("br",{}),"You can learn more at our"," ",(0,k.jsx)("a",{href:"https://min.io/docs/minio/linux/administration/object-management/object-lifecycle-management.html?ref=con",target:"_blank",rel:"noopener",children:"documentation"}),"."]})})]})]})]})}))},81159:function(e,n,t){var i=t(4942),a=t(1413),r=t(72791),o=t(11135),s=t(25787),l=t(9955),c=t(30829),d=t(20068),u=t(20890),x=t(61889),p=t(23814),h=t(29945),f=t(28182),m=t(80184),v=(0,s.Z)((function(e){return{root:{width:50,height:24,padding:0,margin:0},switchBase:{padding:1,"&$checked":{transform:"translateX(24px)",color:e.palette.common.white,"& + $track":{backgroundColor:"#4CCB92",boxShadow:"inset 0px 1px 4px rgba(0,0,0,0.1)",opacity:1,border:"none"}},"&$focusVisible $thumb":{color:"#4CCB92",border:"6px solid #fff"}},thumb:{width:22,height:22,backgroundColor:"#FAFAFA",border:"2px solid #FFFFFF",marginLeft:1},track:{borderRadius:12,backgroundColor:"#E2E2E2",boxShadow:"inset 0px 1px 4px rgba(0,0,0,0.1)",opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{},focusVisible:{},switchContainer:{display:"flex",alignItems:"center",justifyContent:"flex-end"}}}))(l.Z);n.Z=(0,s.Z)((function(e){return(0,o.Z)((0,a.Z)((0,a.Z)({indicatorLabelOn:{fontWeight:"bold",color:"#081C42 !important"},indicatorLabel:{fontSize:12,color:"#E2E2E2",margin:"0 8px 0 10px"},fieldDescription:{marginTop:4,color:"#999999"},tooltip:{fontSize:16}},p.OR),p.YI))}))((function(e){var n=e.label,t=void 0===n?"":n,o=e.onChange,s=e.value,l=e.id,p=e.name,Z=e.checked,j=void 0!==Z&&Z,b=e.disabled,y=void 0!==b&&b,g=e.switchOnly,_=void 0!==g&&g,C=e.tooltip,S=void 0===C?"":C,P=e.description,F=void 0===P?"":P,k=e.classes,N=e.indicatorLabels,T=e.extraInputProps,E=void 0===T?{}:T,I=(0,m.jsxs)(r.Fragment,{children:[!_&&(0,m.jsx)("span",{className:(0,f.Z)(k.indicatorLabel,(0,i.Z)({},k.indicatorLabelOn,!j)),children:N&&N.length>1?N[1]:"OFF"}),(0,m.jsx)(v,{checked:j,onChange:o,color:"primary",name:p,inputProps:(0,a.Z)({"aria-label":"primary checkbox"},E),disabled:y,disableRipple:!0,disableFocusRipple:!0,disableTouchRipple:!0,value:s,id:l}),!_&&(0,m.jsx)("span",{className:(0,f.Z)(k.indicatorLabel,(0,i.Z)({},k.indicatorLabelOn,j)),children:N?N[0]:"ON"})]});return _?I:(0,m.jsx)("div",{children:(0,m.jsxs)(x.ZP,{container:!0,alignItems:"center",children:[(0,m.jsx)(x.ZP,{item:!0,xs:12,sm:8,md:8,children:""!==t&&(0,m.jsxs)(c.Z,{htmlFor:l,className:k.inputLabel,children:[(0,m.jsx)("span",{children:t}),""!==S&&(0,m.jsx)("div",{className:k.tooltipContainer,children:(0,m.jsx)(d.Z,{title:S,placement:"top-start",children:(0,m.jsx)("div",{className:k.tooltip,children:(0,m.jsx)(h.byK,{})})})})]})}),(0,m.jsx)(x.ZP,{item:!0,xs:12,sm:""!==t?4:12,md:""!==t?4:12,textAlign:"right",justifyContent:"end",className:k.switchContainer,children:I}),""!==F&&(0,m.jsx)(x.ZP,{item:!0,xs:12,textAlign:"left",children:(0,m.jsx)(u.Z,{component:"p",className:k.fieldDescription,children:F})})]})})}))},21435:function(e,n,t){var i=t(29439),a=t(1413),r=t(72791),o=t(27391),s=t(61889),l=t(30829),c=t(20068),d=t(13400),u=t(20165),x=t(3579),p=t(11135),h=t(72455),f=t(25787),m=t(23814),v=t(29945),Z=t(28182),j=t(80184),b=(0,h.Z)((function(e){return(0,p.Z)((0,a.Z)({},m.gM))}));function y(e){var n=b();return(0,j.jsx)(o.Z,(0,a.Z)({InputProps:{classes:n}},e))}n.Z=(0,f.Z)((function(e){return(0,p.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},m.YI),m.Hr),{},{textBoxContainer:{flexGrow:1,position:"relative"},overlayAction:{position:"absolute",right:5,top:6,"& svg":{maxWidth:15,maxHeight:15},"&.withLabel":{top:5}}}))}))((function(e){var n=e.label,t=e.onChange,o=e.value,p=e.id,h=e.name,f=e.type,m=void 0===f?"text":f,b=e.autoComplete,g=void 0===b?"off":b,_=e.disabled,C=void 0!==_&&_,S=e.multiline,P=void 0!==S&&S,F=e.tooltip,k=void 0===F?"":F,N=e.index,T=void 0===N?0:N,E=e.error,I=void 0===E?"":E,L=e.required,O=void 0!==L&&L,A=e.placeholder,R=void 0===A?"":A,w=e.min,B=e.max,D=e.overlayId,V=e.overlayIcon,z=void 0===V?null:V,M=e.overlayObject,K=void 0===M?null:M,G=e.extraInputProps,H=void 0===G?{}:G,U=e.overlayAction,W=e.noLabelMinWidth,Y=void 0!==W&&W,q=e.pattern,Q=void 0===q?"":q,$=e.autoFocus,X=void 0!==$&&$,J=e.classes,ee=e.className,ne=void 0===ee?"":ee,te=e.onKeyPress,ie=e.onFocus,ae=e.onPaste,re=(0,a.Z)({"data-index":T},H),oe=(0,r.useState)(!1),se=(0,i.Z)(oe,2),le=se[0],ce=se[1];"number"===m&&w&&(re.min=w),"number"===m&&B&&(re.max=B),""!==Q&&(re.pattern=Q);var de=z,ue=m;return"password"===m&&null===z&&(de=le?(0,j.jsx)(u.Z,{}):(0,j.jsx)(x.Z,{}),ue=le?"text":"password"),(0,j.jsx)(r.Fragment,{children:(0,j.jsxs)(s.ZP,{container:!0,className:(0,Z.Z)(""!==ne?ne:"",""!==I?J.errorInField:J.inputBoxContainer),children:[""!==n&&(0,j.jsxs)(l.Z,{htmlFor:p,className:Y?J.noMinWidthLabel:J.inputLabel,children:[(0,j.jsxs)("span",{children:[n,O?"*":""]}),""!==k&&(0,j.jsx)("div",{className:J.tooltipContainer,children:(0,j.jsx)(c.Z,{title:k,placement:"top-start",children:(0,j.jsx)("div",{className:J.tooltip,children:(0,j.jsx)(v.byK,{})})})})]}),(0,j.jsxs)("div",{className:J.textBoxContainer,children:[(0,j.jsx)(y,{id:p,name:h,fullWidth:!0,value:o,autoFocus:X,disabled:C,onChange:t,type:ue,multiline:P,autoComplete:g,inputProps:re,error:""!==I,helperText:I,placeholder:R,className:J.inputRebase,onKeyPress:te,onFocus:ie,onPaste:ae}),de&&(0,j.jsx)("div",{className:"".concat(J.overlayAction," ").concat(""!==n?"withLabel":""),children:(0,j.jsx)(d.Z,{onClick:U?function(){U()}:function(){return ce(!le)},id:D,size:"small",disableFocusRipple:!1,disableRipple:!1,disableTouchRipple:!1,children:de})}),K&&(0,j.jsx)("div",{className:"".concat(J.overlayAction," ").concat(""!==n?"withLabel":""),children:K})]})]})})}))},84741:function(e,n,t){var i=t(29439),a=t(72791),r=t(11135),o=t(25787),s=t(71715),l=t(77865),c=t(80184);n.Z=(0,o.Z)((function(e){return(0,r.Z)({buttonTrigger:{border:"#F0F2F2 1px solid",borderRadius:3,color:"#838383",backgroundColor:"#fff",fontSize:12}})}))((function(e){var n=e.classes,t=e.id,r=e.unitSelected,o=e.unitsList,d=e.disabled,u=void 0!==d&&d,x=e.onUnitChange,p=a.useState(null),h=(0,i.Z)(p,2),f=h[0],m=h[1],v=Boolean(f),Z=function(e){m(null),""!==e&&x&&x(e)};return(0,c.jsxs)(a.Fragment,{children:[(0,c.jsx)("button",{id:"".concat(t,"-button"),"aria-controls":"".concat(t,"-menu"),"aria-haspopup":"true","aria-expanded":v?"true":void 0,onClick:function(e){m(e.currentTarget)},className:n.buttonTrigger,disabled:u,type:"button",children:r}),(0,c.jsx)(s.Z,{id:"".concat(t,"-menu"),"aria-labelledby":"".concat(t,"-button"),anchorEl:f,open:v,onClose:function(){Z("")},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:o.map((function(e){return(0,c.jsx)(l.Z,{onClick:function(){return Z(e.value)},children:e.label},"itemUnit-".concat(e.value,"-").concat(e.label))}))})]})}))},17420:function(e,n,t){var i=t(93433),a=t(29439),r=t(1413),o=t(72791),s=t(26181),l=t.n(s),c=t(48573),d=t.n(c),u=t(11135),x=t(25787),p=t(61889),h=t(77961),f=t(30829),m=t(20068),v=t(23814),Z=t(21435),j=t(29945),b=t(80184);n.Z=(0,x.Z)((function(e){return(0,u.Z)((0,r.Z)((0,r.Z)((0,r.Z)({},v.YI),v.Hr),{},{inputWithBorder:{border:"1px solid #EAEAEA",padding:15,height:150,overflowY:"auto",position:"relative",marginTop:15},lineInputBoxes:{display:"flex",marginBottom:10},queryDiv:{alignSelf:"center",margin:"0 4px",fontWeight:600}}))}))((function(e){var n=e.elements,t=e.name,r=e.label,s=e.tooltip,c=void 0===s?"":s,u=e.keyPlaceholder,x=void 0===u?"":u,v=e.valuePlaceholder,y=void 0===v?"":v,g=e.onChange,_=e.withBorder,C=void 0!==_&&_,S=e.classes,P=(0,o.useState)([""]),F=(0,a.Z)(P,2),k=F[0],N=F[1],T=(0,o.useState)([""]),E=(0,a.Z)(T,2),I=E[0],L=E[1],O=(0,o.createRef)();(0,o.useEffect)((function(){if(1===k.length&&""===k[0]&&1===I.length&&""===I[0]&&n&&""!==n){var e=n.split("&"),t=[],i=[];e.forEach((function(e){var n=e.split("=");2===n.length&&(t.push(n[0]),i.push(n[1]))})),t.push(""),i.push(""),N(t),L(i)}}),[k,I,n]),(0,o.useEffect)((function(){var e=O.current;e&&k.length>1&&e.scrollIntoView(!1)}),[k]);var A=(0,o.useRef)(!0);(0,o.useLayoutEffect)((function(){A.current?A.current=!1:B()}),[k,I]);var R=function(e){e.persist();var n=(0,i.Z)(k),t=l()(e.target,"dataset.index","0");n[parseInt(t)]=e.target.value,N(n)},w=function(e){e.persist();var n=(0,i.Z)(I),t=l()(e.target,"dataset.index","0");n[parseInt(t)]=e.target.value,L(n)},B=d()((function(){var e="";k.forEach((function(n,t){if(k[t]&&I[t]){var i="".concat(n,"=").concat(I[t]);0!==t&&(i="&".concat(i)),e="".concat(e).concat(i)}})),g(e)}),500),D=I.map((function(e,n){return(0,b.jsxs)(p.ZP,{item:!0,xs:12,className:S.lineInputBoxes,children:[(0,b.jsx)(Z.Z,{id:"".concat(t,"-key-").concat(n.toString()),label:"",name:"".concat(t,"-").concat(n.toString()),value:k[n],onChange:R,index:n,placeholder:x}),(0,b.jsx)("span",{className:S.queryDiv,children:":"}),(0,b.jsx)(Z.Z,{id:"".concat(t,"-value-").concat(n.toString()),label:"",name:"".concat(t,"-").concat(n.toString()),value:I[n],onChange:w,index:n,placeholder:y,overlayIcon:n===I.length-1?(0,b.jsx)(j.dtP,{}):null,overlayAction:function(){!function(){if(""!==k[k.length-1].trim()&&""!==I[I.length-1].trim()){var e=(0,i.Z)(k),n=(0,i.Z)(I);e.push(""),n.push(""),N(e),L(n)}}()}})]},"query-pair-".concat(t,"-").concat(n.toString()))}));return(0,b.jsx)(o.Fragment,{children:(0,b.jsxs)(p.ZP,{item:!0,xs:12,className:S.fieldContainer,children:[(0,b.jsxs)(f.Z,{className:S.inputLabel,children:[(0,b.jsx)("span",{children:r}),""!==c&&(0,b.jsx)("div",{className:S.tooltipContainer,children:(0,b.jsx)(m.Z,{title:c,placement:"top-start",children:(0,b.jsx)(h.Z,{className:S.tooltip})})})]}),(0,b.jsxs)(p.ZP,{item:!0,xs:12,className:"".concat(C?S.inputWithBorder:""),children:[D,(0,b.jsx)("div",{ref:O})]})]})})}))},83679:function(e,n,t){var i=t(4942),a=t(1413),r=(t(72791),t(28182)),o=t(61889),s=t(10765),l=t(85523),c=t(61419),d=t(30829),u=t(20068),x=t(11135),p=t(25787),h=t(72455),f=t(23814),m=t(29945),v=t(80184),Z=(0,h.Z)((0,a.Z)({root:{"&:hover":{backgroundColor:"transparent"}}},f.FU)),j=function(e){var n=Z();return(0,v.jsx)(c.Z,(0,a.Z)({className:n.root,disableRipple:!0,color:"default",checkedIcon:(0,v.jsx)("span",{className:n.radioSelectedIcon}),icon:(0,v.jsx)("span",{className:n.radioUnselectedIcon})},e))};n.Z=(0,p.Z)((function(e){return(0,x.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},f.YI),f.Hr),{},{optionLabel:{"&.Mui-disabled":{"& .MuiFormControlLabel-label":{color:"#9c9c9c"}},"&:last-child":{marginRight:0},"& .MuiFormControlLabel-label":{fontSize:12,color:"#07193E"}},checkedOption:{"& .MuiFormControlLabel-label":{fontSize:12,color:"#07193E",fontWeight:700}}}))}))((function(e){var n=e.selectorOptions,t=void 0===n?[]:n,a=e.currentSelection,c=e.label,x=e.id,p=e.name,h=e.onChange,f=e.tooltip,Z=void 0===f?"":f,b=e.disableOptions,y=void 0!==b&&b,g=e.classes,_=e.displayInColumn,C=void 0!==_&&_;return(0,v.jsxs)(o.ZP,{container:!0,spacing:1,children:[(0,v.jsx)(o.ZP,{item:!0,fontSize:60,children:(0,v.jsxs)(d.Z,{htmlFor:x,className:g.inputLabel,children:[(0,v.jsx)("span",{children:c}),""!==Z&&(0,v.jsx)("div",{className:g.tooltipContainer,children:(0,v.jsx)(u.Z,{title:Z,placement:"top-start",children:(0,v.jsx)("div",{children:(0,v.jsx)(m.byK,{})})})})]})}),(0,v.jsx)(o.ZP,{item:!0,children:(0,v.jsx)(s.Z,{"aria-label":x,id:x,name:p,value:a,onChange:h,row:!C,style:{display:"flex",textAlign:"right"},children:t.map((function(e){return(0,v.jsx)(l.Z,{value:e.value,control:(0,v.jsx)(j,{}),label:e.label,disabled:y,className:(0,r.Z)(g.optionLabel,(0,i.Z)({},g.checkedOption,e.value===a))},"rd-".concat(p,"-").concat(e.value))}))})})]})}))},90673:function(e,n,t){var i=t(1413),a=t(72791),r=t(61889),o=t(76098),s=t(30829),l=t(20068),c=t(68096),d=t(58406),u=t(77865),x=t(11135),p=t(25787),h=t(23814),f=t(29945),m=t(80184),v=(0,p.Z)((function(e){return(0,x.Z)({root:{height:38,lineHeight:1,"label + &":{marginTop:e.spacing(3)}},input:{height:38,position:"relative",color:"#07193E",fontSize:13,fontWeight:600,padding:"8px 20px 10px 10px",border:"#e5e5e5 1px solid",borderRadius:4,display:"flex",alignItems:"center","&:hover":{borderColor:"#393939"},"&:focus":{backgroundColor:"#fff"}}})}))(o.ZP);n.Z=(0,p.Z)((function(e){return(0,x.Z)((0,i.Z)((0,i.Z)((0,i.Z)({},h.YI),h.Hr),{},{fieldContainer:{display:"flex","@media (max-width: 600px)":{flexFlow:"column"}}}))}))((function(e){var n=e.classes,t=e.id,i=e.name,o=e.onChange,x=e.options,p=e.label,h=e.tooltip,Z=void 0===h?"":h,j=e.value,b=e.disabled,y=void 0!==b&&b;return(0,m.jsx)(a.Fragment,{children:(0,m.jsxs)(r.ZP,{item:!0,xs:12,className:n.fieldContainer,children:[""!==p&&(0,m.jsxs)(s.Z,{htmlFor:t,className:n.inputLabel,children:[(0,m.jsx)("span",{children:p}),""!==Z&&(0,m.jsx)("div",{className:n.tooltipContainer,children:(0,m.jsx)(l.Z,{title:Z,placement:"top-start",children:(0,m.jsx)("div",{className:n.tooltip,children:(0,m.jsx)(f.byK,{})})})})]}),(0,m.jsx)(c.Z,{fullWidth:!0,children:(0,m.jsx)(d.Z,{id:t,name:i,value:j,onChange:o,input:(0,m.jsx)(v,{}),disabled:y,children:x.map((function(e){return(0,m.jsx)(u.Z,{value:e.value,children:e.label},"select-".concat(i,"-").concat(e.label))}))})})]})})}))},60680:function(e,n,t){t(72791);var i=t(11135),a=t(25787),r=t(80184);n.Z=(0,a.Z)((function(e){return(0,i.Z)({root:{padding:0,margin:0,fontSize:".9rem"}})}))((function(e){var n=e.classes,t=e.children;return(0,r.jsx)("h1",{className:n.root,children:t})}))}}]);
//# sourceMappingURL=51.eb870735.chunk.js.map