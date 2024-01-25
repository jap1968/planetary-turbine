var Xn=Object.defineProperty;var Yn=(e,n,t)=>n in e?Xn(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var xe=(e,n,t)=>(Yn(e,typeof n!="symbol"?n+"":n,t),t);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))l(f);new MutationObserver(f=>{for(const r of f)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function t(f){const r={};return f.integrity&&(r.integrity=f.integrity),f.referrerPolicy&&(r.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?r.credentials="include":f.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(f){if(f.ep)return;f.ep=!0;const r=t(f);fetch(f.href,r)}})();function G(){}function Un(e){return e()}function Pn(){return Object.create(null)}function We(e){e.forEach(Un)}function Gn(e){return typeof e=="function"}function me(e,n){return e!=e?n==n:e!==n||e&&typeof e=="object"||typeof e=="function"}function Zn(e){return Object.keys(e).length===0}function h(e,n){e.appendChild(n)}function E(e,n,t){e.insertBefore(n,t||null)}function W(e){e.parentNode&&e.parentNode.removeChild(e)}function De(e,n){for(let t=0;t<e.length;t+=1)e[t]&&e[t].d(n)}function y(e){return document.createElement(e)}function T(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function V(e){return document.createTextNode(e)}function D(){return V(" ")}function Ue(){return V("")}function L(e,n,t,l){return e.addEventListener(n,t,l),()=>e.removeEventListener(n,t,l)}function i(e,n,t){t==null?e.removeAttribute(n):e.getAttribute(n)!==t&&e.setAttribute(n,t)}function Y(e){return e===""?null:+e}function xn(e){return Array.from(e.childNodes)}function $n(e,n){n=""+n,e.data!==n&&(e.data=n)}function j(e,n){e.value=n??""}function qe(e,n,t,l){t==null?e.style.removeProperty(n):e.style.setProperty(n,t,l?"important":"")}function Cn(e,n,t){for(let l=0;l<e.options.length;l+=1){const f=e.options[l];if(f.__value===n){f.selected=!0;return}}(!t||n!==void 0)&&(e.selectedIndex=-1)}function et(e){const n=e.querySelector(":checked");return n&&n.__value}let Fe;function Ee(e){Fe=e}function nt(){if(!Fe)throw new Error("Function called outside component initialization");return Fe}function tt(e){nt().$$.on_mount.push(e)}const Pe=[],nn=[];let Ne=[];const In=[],lt=Promise.resolve();let tn=!1;function rt(){tn||(tn=!0,lt.then(Hn))}function Ge(e){Ne.push(e)}const $e=new Set;let Ae=0;function Hn(){if(Ae!==0)return;const e=Fe;do{try{for(;Ae<Pe.length;){const n=Pe[Ae];Ae++,Ee(n),it(n.$$)}}catch(n){throw Pe.length=0,Ae=0,n}for(Ee(null),Pe.length=0,Ae=0;nn.length;)nn.pop()();for(let n=0;n<Ne.length;n+=1){const t=Ne[n];$e.has(t)||($e.add(t),t())}Ne.length=0}while(Pe.length);for(;In.length;)In.pop()();tn=!1,$e.clear(),Ee(e)}function it(e){if(e.fragment!==null){e.update(),We(e.before_update);const n=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,n),e.after_update.forEach(Ge)}}function ft(e){const n=[],t=[];Ne.forEach(l=>e.indexOf(l)===-1?n.push(l):t.push(l)),t.forEach(l=>l()),Ne=n}const Ke=new Set;let de;function Ce(){de={r:0,c:[],p:de}}function Ie(){de.r||We(de.c),de=de.p}function P(e,n){e&&e.i&&(Ke.delete(e),e.i(n))}function O(e,n,t,l){if(e&&e.o){if(Ke.has(e))return;Ke.add(e),de.c.push(()=>{Ke.delete(e),l&&(t&&e.d(1),l())}),e.o(n)}else l&&l()}function ne(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function te(e){e&&e.c()}function Z(e,n,t){const{fragment:l,after_update:f}=e.$$;l&&l.m(n,t),Ge(()=>{const r=e.$$.on_mount.map(Un).filter(Gn);e.$$.on_destroy?e.$$.on_destroy.push(...r):We(r),e.$$.on_mount=[]}),f.forEach(Ge)}function x(e,n){const t=e.$$;t.fragment!==null&&(ft(t.after_update),We(t.on_destroy),t.fragment&&t.fragment.d(n),t.on_destroy=t.fragment=null,t.ctx=[])}function ot(e,n){e.$$.dirty[0]===-1&&(Pe.push(e),rt(),e.$$.dirty.fill(0)),e.$$.dirty[n/31|0]|=1<<n%31}function ge(e,n,t,l,f,r,o=null,u=[-1]){const a=Fe;Ee(e);const c=e.$$={fragment:null,ctx:[],props:r,update:G,not_equal:f,bound:Pn(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(a?a.$$.context:[])),callbacks:Pn(),dirty:u,skip_bound:!1,root:n.target||a.$$.root};o&&o(c.root);let s=!1;if(c.ctx=t?t(e,n.props||{},(b,_,...w)=>{const B=w.length?w[0]:_;return c.ctx&&f(c.ctx[b],c.ctx[b]=B)&&(!c.skip_bound&&c.bound[b]&&c.bound[b](B),s&&ot(e,b)),_}):[],c.update(),s=!0,We(c.before_update),c.fragment=l?l(c.ctx):!1,n.target){if(n.hydrate){const b=xn(n.target);c.fragment&&c.fragment.l(b),b.forEach(W)}else c.fragment&&c.fragment.c();n.intro&&P(e.$$.fragment),Z(e,n.target,n.anchor),Hn()}Ee(a)}class be{constructor(){xe(this,"$$");xe(this,"$$set")}$destroy(){x(this,1),this.$destroy=G}$on(n,t){if(!Gn(t))return G;const l=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return l.push(t),()=>{const f=l.indexOf(t);f!==-1&&l.splice(f,1)}}$set(n){this.$$set&&!Zn(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const ut="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ut);function ct(e){let n;return{c(){n=T("circle"),i(n,"cx",e[0]),i(n,"cy",e[1]),i(n,"r",e[2]),i(n,"stroke",e[3]),i(n,"stroke-width",st),i(n,"fill",e[4]),i(n,"stroke-dasharray",at)},m(t,l){E(t,n,l)},p(t,[l]){l&1&&i(n,"cx",t[0]),l&2&&i(n,"cy",t[1]),l&4&&i(n,"r",t[2]),l&8&&i(n,"stroke",t[3]),l&16&&i(n,"fill",t[4])},i:G,o:G,d(t){t&&W(n)}}}let st=1,at="20 6 2 6";function _t(e,n,t){let{cx:l}=n,{cy:f}=n,{r}=n,{stroke:o="black"}=n,{fill:u="lightgrey"}=n;return e.$$set=a=>{"cx"in a&&t(0,l=a.cx),"cy"in a&&t(1,f=a.cy),"r"in a&&t(2,r=a.r),"stroke"in a&&t(3,o=a.stroke),"fill"in a&&t(4,u=a.fill)},[l,f,r,o,u]}class ht extends be{constructor(n){super(),ge(this,n,_t,ct,me,{cx:0,cy:1,r:2,stroke:3,fill:4})}}function dt(e){let n,t,l,f,r;return{c(){n=T("line"),i(n,"x1",t=e[0].x-e[1]),i(n,"y1",l=e[0].y),i(n,"x2",f=e[0].x+e[1]),i(n,"y2",r=e[0].y),i(n,"stroke",e[2]),i(n,"stroke-width",e[3]),i(n,"fill",e[4]),i(n,"transform",e[5])},m(o,u){E(o,n,u)},p(o,[u]){u&3&&t!==(t=o[0].x-o[1])&&i(n,"x1",t),u&1&&l!==(l=o[0].y)&&i(n,"y1",l),u&3&&f!==(f=o[0].x+o[1])&&i(n,"x2",f),u&1&&r!==(r=o[0].y)&&i(n,"y2",r),u&4&&i(n,"stroke",o[2]),u&8&&i(n,"stroke-width",o[3]),u&16&&i(n,"fill",o[4]),u&32&&i(n,"transform",o[5])},i:G,o:G,d(o){o&&W(n)}}}function mt(e,n,t){let l,{center:f}=n,{r}=n,{alfa:o}=n,{stroke:u}=n,{strokeWidth:a}=n,{fill:c}=n;return e.$$set=s=>{"center"in s&&t(0,f=s.center),"r"in s&&t(1,r=s.r),"alfa"in s&&t(6,o=s.alfa),"stroke"in s&&t(2,u=s.stroke),"strokeWidth"in s&&t(3,a=s.strokeWidth),"fill"in s&&t(4,c=s.fill)},e.$$.update=()=>{e.$$.dirty&65&&t(5,l="rotate("+-o*180/Math.PI+", "+f.x+", "+f.y+")")},[f,r,u,a,c,l,o]}class gt extends be{constructor(n){super(),ge(this,n,mt,dt,me,{center:0,r:1,alfa:6,stroke:2,strokeWidth:3,fill:4})}}function bt(e){let n,t,l,f,r,o;return{c(){n=T("g"),t=T("line"),i(t,"x1",l=e[0].x),i(t,"y1",f=e[0].y),i(t,"x2",r=e[0].x+e[2]),i(t,"y2",o=e[0].y),i(t,"stroke",e[1]),i(t,"stroke-width",kt),i(t,"fill",e[1]),i(n,"transform",e[3])},m(u,a){E(u,n,a),h(n,t)},p(u,[a]){a&1&&l!==(l=u[0].x)&&i(t,"x1",l),a&1&&f!==(f=u[0].y)&&i(t,"y1",f),a&5&&r!==(r=u[0].x+u[2])&&i(t,"x2",r),a&1&&o!==(o=u[0].y)&&i(t,"y2",o),a&2&&i(t,"stroke",u[1]),a&2&&i(t,"fill",u[1]),a&8&&i(n,"transform",u[3])},i:G,o:G,d(u){u&&W(n)}}}let kt=4;function yt(e,n,t){let l,{center:f}=n,{color:r}=n,{force:o}=n,{direction:u}=n;return e.$$set=a=>{"center"in a&&t(0,f=a.center),"color"in a&&t(1,r=a.color),"force"in a&&t(2,o=a.force),"direction"in a&&t(4,u=a.direction)},e.$$.update=()=>{e.$$.dirty&17&&t(3,l="rotate("+-u*180/Math.PI+", "+f.x+", "+f.y+")")},[f,r,o,l,u]}class Oe extends be{constructor(n){super(),ge(this,n,yt,bt,me,{center:0,color:1,force:2,direction:4})}}function Nn(e){let n,t;return n=new Oe({props:{center:e[14],force:le*e[8].force,direction:e[8].direction,color:"blue"}}),{c(){te(n.$$.fragment)},m(l,f){Z(n,l,f),t=!0},p(l,f){const r={};f&16384&&(r.center=l[14]),f&256&&(r.force=le*l[8].force),f&256&&(r.direction=l[8].direction),n.$set(r)},i(l){t||(P(n.$$.fragment,l),t=!0)},o(l){O(n.$$.fragment,l),t=!1},d(l){x(n,l)}}}function Wn(e){let n,t;return n=new Oe({props:{center:e[14],force:le*e[7].force,direction:e[7].direction,color:"blue"}}),{c(){te(n.$$.fragment)},m(l,f){Z(n,l,f),t=!0},p(l,f){const r={};f&16384&&(r.center=l[14]),f&128&&(r.force=le*l[7].force),f&128&&(r.direction=l[7].direction),n.$set(r)},i(l){t||(P(n.$$.fragment,l),t=!0)},o(l){O(n.$$.fragment,l),t=!1},d(l){x(n,l)}}}function Dn(e){let n,t;return n=new Oe({props:{center:e[14],force:le*e[6].force,direction:e[6].direction,color:"orange"}}),{c(){te(n.$$.fragment)},m(l,f){Z(n,l,f),t=!0},p(l,f){const r={};f&16384&&(r.center=l[14]),f&64&&(r.force=le*l[6].force),f&64&&(r.direction=l[6].direction),n.$set(r)},i(l){t||(P(n.$$.fragment,l),t=!0)},o(l){O(n.$$.fragment,l),t=!1},d(l){x(n,l)}}}function En(e){let n,t;return n=new Oe({props:{center:e[14],force:le*e[13].force,direction:e[13].direction,color:"green"}}),{c(){te(n.$$.fragment)},m(l,f){Z(n,l,f),t=!0},p(l,f){const r={};f&16384&&(r.center=l[14]),f&8192&&(r.force=le*l[13].force),f&8192&&(r.direction=l[13].direction),n.$set(r)},i(l){t||(P(n.$$.fragment,l),t=!0)},o(l){O(n.$$.fragment,l),t=!1},d(l){x(n,l)}}}function Fn(e){let n,t;return n=new Oe({props:{center:e[14],force:le*e[12].force,direction:e[12].direction,color:"green"}}),{c(){te(n.$$.fragment)},m(l,f){Z(n,l,f),t=!0},p(l,f){const r={};f&16384&&(r.center=l[14]),f&4096&&(r.force=le*l[12].force),f&4096&&(r.direction=l[12].direction),n.$set(r)},i(l){t||(P(n.$$.fragment,l),t=!0)},o(l){O(n.$$.fragment,l),t=!1},d(l){x(n,l)}}}function pt(e){let n,t,l,f,r,o,u,a,c,s,b,_,w,B,z,K,p;s=new gt({props:{center:e[14],r:Jn,alfa:e[9],stroke:"red",strokeWidth:"2",fill:"red"}});let C=e[2].drag&&Nn(e),v=e[2].lift&&Wn(e),N=e[2].total&&Dn(e),M=e[2].normal&&En(e),I=e[2].tangential&&Fn(e);return{c(){n=T("line"),f=D(),r=T("text"),o=V(e[0]),c=D(),te(s.$$.fragment),b=D(),C&&C.c(),_=D(),v&&v.c(),w=D(),N&&N.c(),B=D(),M&&M.c(),z=D(),I&&I.c(),K=Ue(),i(n,"x1",t=e[1].x),i(n,"y1",l=e[1].y),i(n,"x2",e[11]),i(n,"y2",e[10]),i(n,"stroke",e[3]),i(n,"stroke-width",e[4]),i(n,"fill",e[5]),i(r,"x",u=e[11]-15),i(r,"y",a=e[10]+15),i(r,"fill","blue")},m(d,g){E(d,n,g),E(d,f,g),E(d,r,g),h(r,o),E(d,c,g),Z(s,d,g),E(d,b,g),C&&C.m(d,g),E(d,_,g),v&&v.m(d,g),E(d,w,g),N&&N.m(d,g),E(d,B,g),M&&M.m(d,g),E(d,z,g),I&&I.m(d,g),E(d,K,g),p=!0},p(d,[g]){(!p||g&2&&t!==(t=d[1].x))&&i(n,"x1",t),(!p||g&2&&l!==(l=d[1].y))&&i(n,"y1",l),(!p||g&2048)&&i(n,"x2",d[11]),(!p||g&1024)&&i(n,"y2",d[10]),(!p||g&8)&&i(n,"stroke",d[3]),(!p||g&16)&&i(n,"stroke-width",d[4]),(!p||g&32)&&i(n,"fill",d[5]),(!p||g&1)&&$n(o,d[0]),(!p||g&2048&&u!==(u=d[11]-15))&&i(r,"x",u),(!p||g&1024&&a!==(a=d[10]+15))&&i(r,"y",a);const X={};g&16384&&(X.center=d[14]),g&512&&(X.alfa=d[9]),s.$set(X),d[2].drag?C?(C.p(d,g),g&4&&P(C,1)):(C=Nn(d),C.c(),P(C,1),C.m(_.parentNode,_)):C&&(Ce(),O(C,1,1,()=>{C=null}),Ie()),d[2].lift?v?(v.p(d,g),g&4&&P(v,1)):(v=Wn(d),v.c(),P(v,1),v.m(w.parentNode,w)):v&&(Ce(),O(v,1,1,()=>{v=null}),Ie()),d[2].total?N?(N.p(d,g),g&4&&P(N,1)):(N=Dn(d),N.c(),P(N,1),N.m(B.parentNode,B)):N&&(Ce(),O(N,1,1,()=>{N=null}),Ie()),d[2].normal?M?(M.p(d,g),g&4&&P(M,1)):(M=En(d),M.c(),P(M,1),M.m(z.parentNode,z)):M&&(Ce(),O(M,1,1,()=>{M=null}),Ie()),d[2].tangential?I?(I.p(d,g),g&4&&P(I,1)):(I=Fn(d),I.c(),P(I,1),I.m(K.parentNode,K)):I&&(Ce(),O(I,1,1,()=>{I=null}),Ie())},i(d){p||(P(s.$$.fragment,d),P(C),P(v),P(N),P(M),P(I),p=!0)},o(d){O(s.$$.fragment,d),O(C),O(v),O(N),O(M),O(I),p=!1},d(d){d&&(W(n),W(f),W(r),W(c),W(b),W(_),W(w),W(B),W(z),W(K)),x(s,d),C&&C.d(d),v&&v.d(d),N&&N.d(d),M&&M.d(d),I&&I.d(d)}}}let Jn=30,le=1;function wt(e,n,t){let l,f,r,o,u,a,c,s,b,_,w,B,z,{idx:K}=n,{center:p}=n,{r:C}=n,{alfa:v}=n,{vane:N}=n,{wind:M}=n,{showForces:I}=n,{stroke:d}=n,{strokeWidth:g}=n,{fill:X}=n;function S(A,re){let $=A.force*Math.cos(A.direction)+re.force*Math.cos(re.direction),oe=A.force*Math.sin(A.direction)+re.force*Math.sin(re.direction);return{force:Math.sqrt($*$+oe*oe),direction:Math.atan2(oe,$)}}return e.$$set=A=>{"idx"in A&&t(0,K=A.idx),"center"in A&&t(1,p=A.center),"r"in A&&t(15,C=A.r),"alfa"in A&&t(16,v=A.alfa),"vane"in A&&t(17,N=A.vane),"wind"in A&&t(18,M=A.wind),"showForces"in A&&t(2,I=A.showForces),"stroke"in A&&t(3,d=A.stroke),"strokeWidth"in A&&t(4,g=A.strokeWidth),"fill"in A&&t(5,X=A.fill)},e.$$.update=()=>{e.$$.dirty&98306&&t(11,l=p.x+C*Math.cos(v)),e.$$.dirty&98306&&t(10,f=p.y-C*Math.sin(v)),e.$$.dirty&3072&&t(14,r={x:l,y:f}),e.$$.dirty&196608&&t(9,o=v/2+(N.alfa-Math.PI/2)/2),e.$$.dirty&262656&&t(19,u=Math.PI/2+o-M.direction),e.$$.dirty&524288&&t(21,a=2*Jn*Math.abs(Math.cos(u))),e.$$.dirty&524288&&t(22,c=Math.abs(Math.cos(u))),e.$$.dirty&6553600&&t(8,s={force:M.speed*a*c,direction:M.direction}),e.$$.dirty&524288&&t(20,b=.8*Math.sin(u)),e.$$.dirty&3932160&&t(7,_={force:M.speed*a*b,direction:M.direction+Math.sign(Math.cos(u))*Math.PI/2}),e.$$.dirty&384&&t(6,w=S(s,_)),e.$$.dirty&65600&&t(13,B={force:w.force*Math.cos(w.direction-v),direction:v}),e.$$.dirty&65600&&t(12,z={force:w.force*Math.sin(w.direction-v),direction:v+Math.PI/2})},[K,p,I,d,g,X,w,_,s,o,f,l,z,B,r,C,v,N,M,u,b,a,c]}class vt extends be{constructor(n){super(),ge(this,n,wt,pt,me,{idx:0,center:1,r:15,alfa:16,vane:17,wind:18,showForces:2,stroke:3,strokeWidth:4,fill:5})}}function Mt(e){let n,t,l,f,r,o,u,a;return{c(){n=T("g"),t=T("line"),f=T("polygon"),o=T("circle"),i(t,"x1",e[7]),i(t,"y1",e[6]),i(t,"x2",e[5]),i(t,"y2",e[4]),i(t,"stroke",l=e[0].color),i(t,"stroke-width","2"),i(t,"fill","vane.color"),i(f,"points",r=e[7]+","+e[6]+" "+(e[7]+12)+","+(e[6]+3)+" "+(e[7]+12)+","+(e[6]-3)),qe(f,"fill","white"),qe(f,"stroke",e[0].color),qe(f,"stroke-width","1"),i(o,"cx",e[3]),i(o,"cy",e[2]),i(o,"r",u=e[0].circle),i(o,"fill",a=e[0].color),i(n,"transform",e[1])},m(c,s){E(c,n,s),h(n,t),h(n,f),h(n,o)},p(c,[s]){s&128&&i(t,"x1",c[7]),s&64&&i(t,"y1",c[6]),s&32&&i(t,"x2",c[5]),s&16&&i(t,"y2",c[4]),s&1&&l!==(l=c[0].color)&&i(t,"stroke",l),s&192&&r!==(r=c[7]+","+c[6]+" "+(c[7]+12)+","+(c[6]+3)+" "+(c[7]+12)+","+(c[6]-3))&&i(f,"points",r),s&1&&qe(f,"stroke",c[0].color),s&8&&i(o,"cx",c[3]),s&4&&i(o,"cy",c[2]),s&1&&u!==(u=c[0].circle)&&i(o,"r",u),s&1&&a!==(a=c[0].color)&&i(o,"fill",a),s&2&&i(n,"transform",c[1])},i:G,o:G,d(c){c&&W(n)}}}function At(e,n,t){let l,f,r,o,u,a,c,{center:s}=n,{vane:b}=n;return e.$$set=_=>{"center"in _&&t(8,s=_.center),"vane"in _&&t(0,b=_.vane)},e.$$.update=()=>{e.$$.dirty&257&&t(7,l=s.x-b.r),e.$$.dirty&256&&t(6,f=s.y),e.$$.dirty&257&&t(5,r=s.x+b.r),e.$$.dirty&256&&t(4,o=s.y),e.$$.dirty&257&&t(3,u=s.x+b.r),e.$$.dirty&256&&t(2,a=s.y),e.$$.dirty&257&&t(1,c="rotate("+-b.alfa*180/Math.PI+", "+s.x+", "+s.y+")")},[b,c,a,u,o,r,f,l,s]}class Pt extends be{constructor(n){super(),ge(this,n,At,Mt,me,{center:8,vane:0})}}function On(e,n,t){const l=e.slice();return l[6]=n[t],l[8]=t,l}function Ln(e,n,t){const l=e.slice();return l[6]=n[t],l[10]=t,l}function Rn(e,n,t){const l=e.slice();return l[6]=n[t],l[10]=t,l}function Sn(e,n,t){const l=e.slice();return l[6]=n[t],l[10]=t,l}function Bn(e){let n,t,l,f,r;return{c(){n=T("line"),i(n,"x1",t=e[0].x+(e[10]-1)*J+e[3]),i(n,"y1",l=e[0].y+(e[8]-1)*Q+e[4]),i(n,"x2",f=e[0].x+(e[10]-1)*J+qn+e[3]),i(n,"y2",r=e[0].y+(e[8]-1)*Q+e[4]),i(n,"stroke",e[1])},m(o,u){E(o,n,u)},p(o,u){u&1&&t!==(t=o[0].x+(o[10]-1)*J+o[3])&&i(n,"x1",t),u&1&&l!==(l=o[0].y+(o[8]-1)*Q+o[4])&&i(n,"y1",l),u&1&&f!==(f=o[0].x+(o[10]-1)*J+qn+o[3])&&i(n,"x2",f),u&1&&r!==(r=o[0].y+(o[8]-1)*Q+o[4])&&i(n,"y2",r),u&2&&i(n,"stroke",o[1])},d(o){o&&W(n)}}}function jn(e){let n,t,l,f,r;return{c(){n=T("line"),i(n,"x1",t=e[0].x+(e[10]-1)*J+e[3]),i(n,"y1",l=e[0].y+(e[8]-1)*Q+e[4]),i(n,"x2",f=e[0].x+(e[10]-1)*J+e[3]-Je),i(n,"y2",r=e[0].y+(e[8]-1)*Q+e[4]-He),i(n,"stroke",e[1])},m(o,u){E(o,n,u)},p(o,u){u&1&&t!==(t=o[0].x+(o[10]-1)*J+o[3])&&i(n,"x1",t),u&1&&l!==(l=o[0].y+(o[8]-1)*Q+o[4])&&i(n,"y1",l),u&1&&f!==(f=o[0].x+(o[10]-1)*J+o[3]-Je)&&i(n,"x2",f),u&1&&r!==(r=o[0].y+(o[8]-1)*Q+o[4]-He)&&i(n,"y2",r),u&2&&i(n,"stroke",o[1])},d(o){o&&W(n)}}}function Tn(e){let n,t,l,f,r;return{c(){n=T("line"),i(n,"x1",t=e[0].x+(e[10]-1)*J+e[3]+Ve),i(n,"y1",l=e[0].y+(e[8]-1)*Q+e[4]),i(n,"x2",f=e[0].x+(e[10]-1)*J+e[3]+Ve-Je),i(n,"y2",r=e[0].y+(e[8]-1)*Q+e[4]-He),i(n,"stroke",e[1])},m(o,u){E(o,n,u)},p(o,u){u&1&&t!==(t=o[0].x+(o[10]-1)*J+o[3]+Ve)&&i(n,"x1",t),u&1&&l!==(l=o[0].y+(o[8]-1)*Q+o[4])&&i(n,"y1",l),u&1&&f!==(f=o[0].x+(o[10]-1)*J+o[3]+Ve-Je)&&i(n,"x2",f),u&1&&r!==(r=o[0].y+(o[8]-1)*Q+o[4]-He)&&i(n,"y2",r),u&2&&i(n,"stroke",o[1])},d(o){o&&W(n)}}}function zn(e){let n,t,l,f=ne(Array(4)),r=[];for(let s=0;s<f.length;s+=1)r[s]=Bn(Sn(e,f,s));let o=ne(Array(4)),u=[];for(let s=0;s<o.length;s+=1)u[s]=jn(Rn(e,o,s));let a=ne(Array(4)),c=[];for(let s=0;s<a.length;s+=1)c[s]=Tn(Ln(e,a,s));return{c(){n=T("g");for(let s=0;s<r.length;s+=1)r[s].c();t=Ue();for(let s=0;s<u.length;s+=1)u[s].c();l=Ue();for(let s=0;s<c.length;s+=1)c[s].c()},m(s,b){E(s,n,b);for(let _=0;_<r.length;_+=1)r[_]&&r[_].m(n,null);h(n,t);for(let _=0;_<u.length;_+=1)u[_]&&u[_].m(n,null);h(n,l);for(let _=0;_<c.length;_+=1)c[_]&&c[_].m(n,null)},p(s,b){if(b&27){f=ne(Array(4));let _;for(_=0;_<f.length;_+=1){const w=Sn(s,f,_);r[_]?r[_].p(w,b):(r[_]=Bn(w),r[_].c(),r[_].m(n,t))}for(;_<r.length;_+=1)r[_].d(1);r.length=f.length}if(b&27){o=ne(Array(4));let _;for(_=0;_<o.length;_+=1){const w=Rn(s,o,_);u[_]?u[_].p(w,b):(u[_]=jn(w),u[_].c(),u[_].m(n,l))}for(;_<u.length;_+=1)u[_].d(1);u.length=o.length}if(b&27){a=ne(Array(4));let _;for(_=0;_<a.length;_+=1){const w=Ln(s,a,_);c[_]?c[_].p(w,b):(c[_]=Tn(w),c[_].c(),c[_].m(n,null))}for(;_<c.length;_+=1)c[_].d(1);c.length=a.length}},d(s){s&&W(n),De(r,s),De(u,s),De(c,s)}}}function Ct(e){let n,t=ne(Array(4)),l=[];for(let f=0;f<t.length;f+=1)l[f]=zn(On(e,t,f));return{c(){n=T("g");for(let f=0;f<l.length;f+=1)l[f].c();i(n,"transform",e[2])},m(f,r){E(f,n,r);for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(n,null)},p(f,[r]){if(r&27){t=ne(Array(4));let o;for(o=0;o<t.length;o+=1){const u=On(f,t,o);l[o]?l[o].p(u,r):(l[o]=zn(u),l[o].c(),l[o].m(n,null))}for(;o<l.length;o+=1)l[o].d(1);l.length=t.length}r&4&&i(n,"transform",f[2])},i:G,o:G,d(f){f&&W(n),De(l,f)}}}let J=100,qn=40,Q=90,He=10,Je=4,Ve=4;function It(e,n,t){let l,{center:f={x:200,y:200}}=n,{color:r="red"}=n,{direction:o=0}=n,u=-70,a=-45;return e.$$set=c=>{"center"in c&&t(0,f=c.center),"color"in c&&t(1,r=c.color),"direction"in c&&t(5,o=c.direction)},e.$$.update=()=>{e.$$.dirty&33&&t(2,l="rotate("+-o*180/Math.PI+", "+f.x+", "+f.y+")")},[f,r,l,u,a,o]}class Nt extends be{constructor(n){super(),ge(this,n,It,Ct,me,{center:0,color:1,direction:5})}}function Vn(e,n,t){const l=e.slice();return l[30]=n[t],l[31]=n,l[32]=t,l}function Wt(e){let n;return{c(){n=V("Start rotation")},m(t,l){E(t,n,l)},d(t){t&&W(n)}}}function Dt(e){let n;return{c(){n=V("Stop rotation")},m(t,l){E(t,n,l)},d(t){t&&W(n)}}}function Kn(e){let n,t=e[32],l;const f=()=>e[26](n,t),r=()=>e[26](null,t);let o={idx:e[32],center:e[5].center,r:e[5].arms.r,alfa:e[5].alfa+e[32]*2*Math.PI/e[5].arms.number,vane:e[5].vane,wind:e[6],showForces:e[7],stroke:e[30],strokeWidth:"2",fill:"red"};return n=new vt({props:o}),f(),{c(){te(n.$$.fragment)},m(u,a){Z(n,u,a),l=!0},p(u,a){t!==u[32]&&(r(),t=u[32],f());const c={};a[0]&32&&(c.center=u[5].center),a[0]&32&&(c.r=u[5].arms.r),a[0]&32&&(c.alfa=u[5].alfa+u[32]*2*Math.PI/u[5].arms.number),a[0]&32&&(c.vane=u[5].vane),a[0]&64&&(c.wind=u[6]),a[0]&128&&(c.showForces=u[7]),a[0]&32&&(c.stroke=u[30]),n.$set(c)},i(u){l||(P(n.$$.fragment,u),l=!0)},o(u){O(n.$$.fragment,u),l=!1},d(u){r(),x(n,u)}}}function Et(e){let n,t,l,f,r,o,u,a,c,s,b,_,w,B,z,K,p,C,v,N,M,I,d,g,X,S,A,re,$,oe,H,Le,R,Re,ln,Se,rn,ce,fn,on,Be,un,ie,cn,U,sn,an,_n,hn,dn,mn,ke,gn,ye,bn,pe,kn,we,yn,ve,pn,wn,je,Te,ee,se,Qe,ae,_e,Me,Xe,vn;function Mn(m,k){return m[4]?Dt:Wt}let ze=Mn(e),ue=ze(e);se=new ht({props:{cx:e[5].center.x,cy:e[5].center.y,r:e[5].arms.r,stroke:"black",fill:"lightgrey"}});let he=ne(e[5].arms.colors.slice(0,e[5].arms.number)),F=[];for(let m=0;m<he.length;m+=1)F[m]=Kn(Vn(e,he,m));const Qn=m=>O(F[m],1,1,()=>{F[m]=null});return ae=new Pt({props:{center:e[5].center,vane:e[5].vane}}),_e=new Nt({props:{center:e[5].center,direction:e[6].direction,color:"grey"}}),{c(){n=y("h2"),n.textContent="Planetary turbine",t=D(),l=y("main"),f=y("div"),r=y("div"),o=y("button"),ue.c(),u=D(),a=y("select"),c=y("option"),c.textContent="CCW / Left",s=y("option"),s.textContent="CW / Right",b=y("br"),_=D(),w=y("br"),B=D(),z=y("label"),z.textContent="Number of arms:",K=D(),p=y("input"),C=y("br"),v=D(),N=y("br"),M=D(),I=y("label"),I.textContent="Rotation:",d=D(),g=y("input"),X=V(` 
      `),S=y("input"),A=y("br"),re=D(),$=y("label"),$.textContent="Wind Direction:",oe=D(),H=y("input"),Le=V(` 
      `),R=y("input"),Re=y("br"),ln=D(),Se=y("label"),Se.textContent="Vane follows wind:",rn=D(),ce=y("input"),fn=y("br"),on=D(),Be=y("label"),Be.textContent="Vane Direction:",un=D(),ie=y("input"),cn=V(` 
      `),U=y("input"),sn=y("br"),an=D(),_n=y("br"),hn=V(`
    
      Display forces:`),dn=y("br"),mn=D(),ke=y("input"),gn=V(` Drag
      `),ye=y("input"),bn=V(` Lift
      `),pe=y("input"),kn=V(` Total
      `),we=y("input"),yn=V(` Normal
      `),ve=y("input"),pn=V(" Tangential"),wn=D(),je=y("div"),Te=y("div"),ee=T("svg"),te(se.$$.fragment);for(let m=0;m<F.length;m+=1)F[m].c();Qe=Ue(),te(ae.$$.fragment),te(_e.$$.fragment),c.__value="left",j(c,c.__value),s.__value="right",j(s,s.__value),e[9]===void 0&&Ge(()=>e[11].call(a)),i(z,"for","numArms"),i(p,"id","numArms"),i(p,"type","number"),i(p,"size","2"),i(p,"min","2"),i(p,"max","8"),i(p,"step","1"),i(I,"for","degRotation"),i(g,"type","number"),i(g,"size","4"),g.disabled=!0,i(S,"id","degRotation"),i(S,"type","range"),i(S,"min","0"),i(S,"max","359"),i(S,"step","1"),S.disabled=e[4],i($,"for","wDirection"),i(H,"type","number"),i(H,"size","4"),H.disabled=!0,i(R,"id","wDirection"),i(R,"type","range"),i(R,"min","0"),i(R,"max","359"),i(R,"step","1"),i(Se,"for","vane"),i(ce,"id","vane"),i(ce,"type","checkbox"),i(Be,"for","vDirection"),i(ie,"type","number"),i(ie,"size","4"),ie.disabled=!0,i(U,"id","vDirection"),i(U,"type","range"),i(U,"min","0"),i(U,"max","359"),i(U,"step","1"),U.disabled=e[3],i(ke,"type","checkbox"),i(ye,"type","checkbox"),i(pe,"type","checkbox"),i(we,"type","checkbox"),i(ve,"type","checkbox"),i(r,"class","column svelte-1ptujve"),i(ee,"width","400"),i(ee,"height","400"),i(Te,"class","turbine"),i(je,"class","column svelte-1ptujve"),i(f,"class","row svelte-1ptujve"),i(l,"class","svelte-1ptujve")},m(m,k){E(m,n,k),E(m,t,k),E(m,l,k),h(l,f),h(f,r),h(r,o),ue.m(o,null),h(r,u),h(r,a),h(a,c),h(a,s),Cn(a,e[9],!0),h(r,b),h(r,_),h(r,w),h(r,B),h(r,z),h(r,K),h(r,p),j(p,e[5].arms.number),h(r,C),h(r,v),h(r,N),h(r,M),h(r,I),h(r,d),h(r,g),j(g,e[0]),h(r,X),h(r,S),j(S,e[0]),h(r,A),h(r,re),h(r,$),h(r,oe),h(r,H),j(H,e[2]),h(r,Le),h(r,R),j(R,e[2]),h(r,Re),h(r,ln),h(r,Se),h(r,rn),h(r,ce),ce.checked=e[3],h(r,fn),h(r,on),h(r,Be),h(r,un),h(r,ie),j(ie,e[1]),h(r,cn),h(r,U),j(U,e[1]),h(r,sn),h(r,an),h(r,_n),h(r,hn),h(r,dn),h(r,mn),h(r,ke),ke.checked=e[7].drag,h(r,gn),h(r,ye),ye.checked=e[7].lift,h(r,bn),h(r,pe),pe.checked=e[7].total,h(r,kn),h(r,we),we.checked=e[7].normal,h(r,yn),h(r,ve),ve.checked=e[7].tangential,h(r,pn),h(f,wn),h(f,je),h(je,Te),h(Te,ee),Z(se,ee,null);for(let fe=0;fe<F.length;fe+=1)F[fe]&&F[fe].m(ee,null);h(ee,Qe),Z(ae,ee,null),Z(_e,ee,null),Me=!0,Xe||(vn=[L(o,"click",e[10]),L(a,"change",e[11]),L(a,"change",e[12]),L(p,"input",e[13]),L(g,"input",e[14]),L(S,"change",e[15]),L(S,"input",e[15]),L(H,"input",e[16]),L(R,"change",e[17]),L(R,"input",e[17]),L(ce,"change",e[18]),L(ie,"input",e[19]),L(U,"change",e[20]),L(U,"input",e[20]),L(ke,"change",e[21]),L(ye,"change",e[22]),L(pe,"change",e[23]),L(we,"change",e[24]),L(ve,"change",e[25])],Xe=!0)},p(m,k){ze!==(ze=Mn(m))&&(ue.d(1),ue=ze(m),ue&&(ue.c(),ue.m(o,null))),k[0]&512&&Cn(a,m[9]),k[0]&32&&Y(p.value)!==m[5].arms.number&&j(p,m[5].arms.number),k[0]&1&&Y(g.value)!==m[0]&&j(g,m[0]),(!Me||k[0]&16)&&(S.disabled=m[4]),k[0]&1&&j(S,m[0]),k[0]&4&&Y(H.value)!==m[2]&&j(H,m[2]),k[0]&4&&j(R,m[2]),k[0]&8&&(ce.checked=m[3]),k[0]&2&&Y(ie.value)!==m[1]&&j(ie,m[1]),(!Me||k[0]&8)&&(U.disabled=m[3]),k[0]&2&&j(U,m[1]),k[0]&128&&(ke.checked=m[7].drag),k[0]&128&&(ye.checked=m[7].lift),k[0]&128&&(pe.checked=m[7].total),k[0]&128&&(we.checked=m[7].normal),k[0]&128&&(ve.checked=m[7].tangential);const fe={};if(k[0]&32&&(fe.cx=m[5].center.x),k[0]&32&&(fe.cy=m[5].center.y),k[0]&32&&(fe.r=m[5].arms.r),se.$set(fe),k[0]&480){he=ne(m[5].arms.colors.slice(0,m[5].arms.number));let q;for(q=0;q<he.length;q+=1){const An=Vn(m,he,q);F[q]?(F[q].p(An,k),P(F[q],1)):(F[q]=Kn(An),F[q].c(),P(F[q],1),F[q].m(ee,Qe))}for(Ce(),q=he.length;q<F.length;q+=1)Qn(q);Ie()}const Ye={};k[0]&32&&(Ye.center=m[5].center),k[0]&32&&(Ye.vane=m[5].vane),ae.$set(Ye);const Ze={};k[0]&32&&(Ze.center=m[5].center),k[0]&64&&(Ze.direction=m[6].direction),_e.$set(Ze)},i(m){if(!Me){P(se.$$.fragment,m);for(let k=0;k<he.length;k+=1)P(F[k]);P(ae.$$.fragment,m),P(_e.$$.fragment,m),Me=!0}},o(m){O(se.$$.fragment,m),F=F.filter(Boolean);for(let k=0;k<F.length;k+=1)O(F[k]);O(ae.$$.fragment,m),O(_e.$$.fragment,m),Me=!1},d(m){m&&(W(n),W(t),W(l)),ue.d(),x(se),De(F,m),x(ae),x(_e),Xe=!1,We(vn)}}}function en(e){return(90-e)*Math.PI/180}function Ft(e,n,t){let l={alfa:0,center:{x:200,y:200},arms:{number:3,r:150,colors:["yellow","green","blue","coral","purple","aqua","plum","teal"]},vane:{color:"black",r:30,circle:6,alfa:0}},f={direction:0,speed:1},r=90,o=180,u=180,a=!0,c={drag:!0,lift:!0,total:!0,normal:!0,tangential:!0},s=[],b,_=!1,w="left";function B(){b=setInterval(()=>{let R=w=="right"?1:-1;r==359&&R==1?t(0,r=0):r==0&&R==-1?t(0,r=359):t(0,r+=R)},30)}function z(){clearInterval(b)}tt(()=>{});const K=()=>t(4,_=!_);function p(){w=et(this),t(9,w)}const C=()=>console.log(w);function v(){l.arms.number=Y(this.value),t(5,l),t(0,r),t(3,a),t(2,u),t(1,o)}function N(){r=Y(this.value),t(0,r)}function M(){r=Y(this.value),t(0,r)}function I(){u=Y(this.value),t(2,u)}function d(){u=Y(this.value),t(2,u)}function g(){a=this.checked,t(3,a)}function X(){o=Y(this.value),t(1,o)}function S(){o=Y(this.value),t(1,o)}function A(){c.drag=this.checked,t(7,c)}function re(){c.lift=this.checked,t(7,c)}function $(){c.total=this.checked,t(7,c)}function oe(){c.normal=this.checked,t(7,c)}function H(){c.tangential=this.checked,t(7,c)}function Le(R,Re){nn[R?"unshift":"push"](()=>{s[Re]=R,t(8,s)})}return e.$$.update=()=>{e.$$.dirty[0]&1&&t(5,l.alfa=en(r),l),e.$$.dirty[0]&14&&t(5,l.vane.alfa=en(180+(a?u:o)),l),e.$$.dirty[0]&4&&t(6,f.direction=en(180+u),f),e.$$.dirty[0]&16&&(_?B():z())},[r,o,u,a,_,l,f,c,s,w,K,p,C,v,N,M,I,d,g,X,S,A,re,$,oe,H,Le]}class Ot extends be{constructor(n){super(),ge(this,n,Ft,Et,me,{},null,[-1,-1])}}new Ot({target:document.getElementById("app")});