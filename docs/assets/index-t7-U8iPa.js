var Un=Object.defineProperty;var Gn=(e,n,t)=>n in e?Un(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var Xe=(e,n,t)=>(Gn(e,typeof n!="symbol"?n+"":n,t),t);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))l(f);new MutationObserver(f=>{for(const r of f)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function t(f){const r={};return f.integrity&&(r.integrity=f.integrity),f.referrerPolicy&&(r.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?r.credentials="include":f.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(f){if(f.ep)return;f.ep=!0;const r=t(f);fetch(f.href,r)}})();function U(){}function Tn(e){return e()}function pn(){return Object.create(null)}function We(e){e.forEach(Tn)}function zn(e){return typeof e=="function"}function _e(e,n){return e!=e?n==n:e!==n||e&&typeof e=="object"||typeof e=="function"}function Hn(e){return Object.keys(e).length===0}function d(e,n){e.appendChild(n)}function O(e,n,t){e.insertBefore(n,t||null)}function E(e){e.parentNode&&e.parentNode.removeChild(e)}function De(e,n){for(let t=0;t<e.length;t+=1)e[t]&&e[t].d(n)}function p(e){return document.createElement(e)}function S(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function G(e){return document.createTextNode(e)}function D(){return G(" ")}function qe(){return G("")}function L(e,n,t,l){return e.addEventListener(n,t,l),()=>e.removeEventListener(n,t,l)}function i(e,n,t){t==null?e.removeAttribute(n):e.getAttribute(n)!==t&&e.setAttribute(n,t)}function X(e){return e===""?null:+e}function Jn(e){return Array.from(e.childNodes)}function Qn(e,n){n=""+n,e.data!==n&&(e.data=n)}function j(e,n){e.value=n??""}function Se(e,n,t,l){t==null?e.style.removeProperty(n):e.style.setProperty(n,t,l?"important":"")}function wn(e,n,t){for(let l=0;l<e.options.length;l+=1){const f=e.options[l];if(f.__value===n){f.selected=!0;return}}(!t||n!==void 0)&&(e.selectedIndex=-1)}function Xn(e){const n=e.querySelector(":checked");return n&&n.__value}let Fe;function Ee(e){Fe=e}function Yn(){if(!Fe)throw new Error("Function called outside component initialization");return Fe}function Zn(e){Yn().$$.on_mount.push(e)}const Ce=[],xe=[];let Ne=[];const vn=[],xn=Promise.resolve();let $e=!1;function $n(){$e||($e=!0,xn.then(qn))}function Ve(e){Ne.push(e)}const Ye=new Set;let Ae=0;function qn(){if(Ae!==0)return;const e=Fe;do{try{for(;Ae<Ce.length;){const n=Ce[Ae];Ae++,Ee(n),et(n.$$)}}catch(n){throw Ce.length=0,Ae=0,n}for(Ee(null),Ce.length=0,Ae=0;xe.length;)xe.pop()();for(let n=0;n<Ne.length;n+=1){const t=Ne[n];Ye.has(t)||(Ye.add(t),t())}Ne.length=0}while(Ce.length);for(;vn.length;)vn.pop()();$e=!1,Ye.clear(),Ee(e)}function et(e){if(e.fragment!==null){e.update(),We(e.before_update);const n=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,n),e.after_update.forEach(Ve)}}function nt(e){const n=[],t=[];Ne.forEach(l=>e.indexOf(l)===-1?n.push(l):t.push(l)),t.forEach(l=>l()),Ne=n}const ze=new Set;let he;function Pe(){he={r:0,c:[],p:he}}function Ie(){he.r||We(he.c),he=he.p}function I(e,n){e&&e.i&&(ze.delete(e),e.i(n))}function R(e,n,t,l){if(e&&e.o){if(ze.has(e))return;ze.add(e),he.c.push(()=>{ze.delete(e),l&&(t&&e.d(1),l())}),e.o(n)}else l&&l()}function $(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function ee(e){e&&e.c()}function Y(e,n,t){const{fragment:l,after_update:f}=e.$$;l&&l.m(n,t),Ve(()=>{const r=e.$$.on_mount.map(Tn).filter(zn);e.$$.on_destroy?e.$$.on_destroy.push(...r):We(r),e.$$.on_mount=[]}),f.forEach(Ve)}function Z(e,n){const t=e.$$;t.fragment!==null&&(nt(t.after_update),We(t.on_destroy),t.fragment&&t.fragment.d(n),t.on_destroy=t.fragment=null,t.ctx=[])}function tt(e,n){e.$$.dirty[0]===-1&&(Ce.push(e),$n(),e.$$.dirty.fill(0)),e.$$.dirty[n/31|0]|=1<<n%31}function de(e,n,t,l,f,r,o=null,u=[-1]){const s=Fe;Ee(e);const c=e.$$={fragment:null,ctx:[],props:r,update:U,not_equal:f,bound:pn(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(s?s.$$.context:[])),callbacks:pn(),dirty:u,skip_bound:!1,root:n.target||s.$$.root};o&&o(c.root);let a=!1;if(c.ctx=t?t(e,n.props||{},(b,h,...k)=>{const B=k.length?k[0]:h;return c.ctx&&f(c.ctx[b],c.ctx[b]=B)&&(!c.skip_bound&&c.bound[b]&&c.bound[b](B),a&&tt(e,b)),h}):[],c.update(),a=!0,We(c.before_update),c.fragment=l?l(c.ctx):!1,n.target){if(n.hydrate){const b=Jn(n.target);c.fragment&&c.fragment.l(b),b.forEach(E)}else c.fragment&&c.fragment.c();n.intro&&I(e.$$.fragment),Y(e,n.target,n.anchor),qn()}Ee(s)}class me{constructor(){Xe(this,"$$");Xe(this,"$$set")}$destroy(){Z(this,1),this.$destroy=U}$on(n,t){if(!zn(t))return U;const l=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return l.push(t),()=>{const f=l.indexOf(t);f!==-1&&l.splice(f,1)}}$set(n){this.$$set&&!Hn(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const lt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(lt);function rt(e){let n;return{c(){n=S("circle"),i(n,"cx",e[0]),i(n,"cy",e[1]),i(n,"r",e[2]),i(n,"stroke",e[3]),i(n,"stroke-width",it),i(n,"fill",e[4]),i(n,"stroke-dasharray",ft)},m(t,l){O(t,n,l)},p(t,[l]){l&1&&i(n,"cx",t[0]),l&2&&i(n,"cy",t[1]),l&4&&i(n,"r",t[2]),l&8&&i(n,"stroke",t[3]),l&16&&i(n,"fill",t[4])},i:U,o:U,d(t){t&&E(n)}}}let it=1,ft="20 6 2 6";function ot(e,n,t){let{cx:l}=n,{cy:f}=n,{r}=n,{stroke:o="black"}=n,{fill:u="lightgrey"}=n;return e.$$set=s=>{"cx"in s&&t(0,l=s.cx),"cy"in s&&t(1,f=s.cy),"r"in s&&t(2,r=s.r),"stroke"in s&&t(3,o=s.stroke),"fill"in s&&t(4,u=s.fill)},[l,f,r,o,u]}class ut extends me{constructor(n){super(),de(this,n,ot,rt,_e,{cx:0,cy:1,r:2,stroke:3,fill:4})}}function ct(e){let n,t,l,f,r;return{c(){n=S("line"),i(n,"x1",t=e[0].x-e[1]),i(n,"y1",l=e[0].y),i(n,"x2",f=e[0].x+e[1]),i(n,"y2",r=e[0].y),i(n,"stroke",e[2]),i(n,"stroke-width",e[3]),i(n,"fill",e[4]),i(n,"transform",e[5])},m(o,u){O(o,n,u)},p(o,[u]){u&3&&t!==(t=o[0].x-o[1])&&i(n,"x1",t),u&1&&l!==(l=o[0].y)&&i(n,"y1",l),u&3&&f!==(f=o[0].x+o[1])&&i(n,"x2",f),u&1&&r!==(r=o[0].y)&&i(n,"y2",r),u&4&&i(n,"stroke",o[2]),u&8&&i(n,"stroke-width",o[3]),u&16&&i(n,"fill",o[4]),u&32&&i(n,"transform",o[5])},i:U,o:U,d(o){o&&E(n)}}}function at(e,n,t){let l,{center:f}=n,{r}=n,{alfa:o}=n,{stroke:u}=n,{strokeWidth:s}=n,{fill:c}=n;return e.$$set=a=>{"center"in a&&t(0,f=a.center),"r"in a&&t(1,r=a.r),"alfa"in a&&t(6,o=a.alfa),"stroke"in a&&t(2,u=a.stroke),"strokeWidth"in a&&t(3,s=a.strokeWidth),"fill"in a&&t(4,c=a.fill)},e.$$.update=()=>{e.$$.dirty&65&&t(5,l="rotate("+-o*180/Math.PI+", "+f.x+", "+f.y+")")},[f,r,u,s,c,l,o]}class st extends me{constructor(n){super(),de(this,n,at,ct,_e,{center:0,r:1,alfa:6,stroke:2,strokeWidth:3,fill:4})}}function ht(e){let n,t,l,f,r,o;return{c(){n=S("g"),t=S("line"),i(t,"x1",l=e[0].x),i(t,"y1",f=e[0].y),i(t,"x2",r=e[0].x+e[2]),i(t,"y2",o=e[0].y),i(t,"stroke",e[1]),i(t,"stroke-width",_t),i(t,"fill",e[1]),i(n,"transform",e[3])},m(u,s){O(u,n,s),d(n,t)},p(u,[s]){s&1&&l!==(l=u[0].x)&&i(t,"x1",l),s&1&&f!==(f=u[0].y)&&i(t,"y1",f),s&5&&r!==(r=u[0].x+u[2])&&i(t,"x2",r),s&1&&o!==(o=u[0].y)&&i(t,"y2",o),s&2&&i(t,"stroke",u[1]),s&2&&i(t,"fill",u[1]),s&8&&i(n,"transform",u[3])},i:U,o:U,d(u){u&&E(n)}}}let _t=4;function dt(e,n,t){let l,{center:f}=n,{color:r}=n,{force:o}=n,{direction:u}=n;return e.$$set=s=>{"center"in s&&t(0,f=s.center),"color"in s&&t(1,r=s.color),"force"in s&&t(2,o=s.force),"direction"in s&&t(4,u=s.direction)},e.$$.update=()=>{e.$$.dirty&17&&t(3,l="rotate("+-u*180/Math.PI+", "+f.x+", "+f.y+")")},[f,r,o,l,u]}class Re extends me{constructor(n){super(),de(this,n,dt,ht,_e,{center:0,color:1,force:2,direction:4})}}function Mn(e){let n,t;return n=new Re({props:{center:e[14],force:ne*e[8].force,direction:e[8].direction,color:"blue"}}),{c(){ee(n.$$.fragment)},m(l,f){Y(n,l,f),t=!0},p(l,f){const r={};f&16384&&(r.center=l[14]),f&256&&(r.force=ne*l[8].force),f&256&&(r.direction=l[8].direction),n.$set(r)},i(l){t||(I(n.$$.fragment,l),t=!0)},o(l){R(n.$$.fragment,l),t=!1},d(l){Z(n,l)}}}function An(e){let n,t;return n=new Re({props:{center:e[14],force:ne*e[7].force,direction:e[7].direction,color:"blue"}}),{c(){ee(n.$$.fragment)},m(l,f){Y(n,l,f),t=!0},p(l,f){const r={};f&16384&&(r.center=l[14]),f&128&&(r.force=ne*l[7].force),f&128&&(r.direction=l[7].direction),n.$set(r)},i(l){t||(I(n.$$.fragment,l),t=!0)},o(l){R(n.$$.fragment,l),t=!1},d(l){Z(n,l)}}}function Cn(e){let n,t;return n=new Re({props:{center:e[14],force:ne*e[6].force,direction:e[6].direction,color:"orange"}}),{c(){ee(n.$$.fragment)},m(l,f){Y(n,l,f),t=!0},p(l,f){const r={};f&16384&&(r.center=l[14]),f&64&&(r.force=ne*l[6].force),f&64&&(r.direction=l[6].direction),n.$set(r)},i(l){t||(I(n.$$.fragment,l),t=!0)},o(l){R(n.$$.fragment,l),t=!1},d(l){Z(n,l)}}}function Pn(e){let n,t;return n=new Re({props:{center:e[14],force:ne*e[13].force,direction:e[13].direction,color:"green"}}),{c(){ee(n.$$.fragment)},m(l,f){Y(n,l,f),t=!0},p(l,f){const r={};f&16384&&(r.center=l[14]),f&8192&&(r.force=ne*l[13].force),f&8192&&(r.direction=l[13].direction),n.$set(r)},i(l){t||(I(n.$$.fragment,l),t=!0)},o(l){R(n.$$.fragment,l),t=!1},d(l){Z(n,l)}}}function In(e){let n,t;return n=new Re({props:{center:e[14],force:ne*e[12].force,direction:e[12].direction,color:"green"}}),{c(){ee(n.$$.fragment)},m(l,f){Y(n,l,f),t=!0},p(l,f){const r={};f&16384&&(r.center=l[14]),f&4096&&(r.force=ne*l[12].force),f&4096&&(r.direction=l[12].direction),n.$set(r)},i(l){t||(I(n.$$.fragment,l),t=!0)},o(l){R(n.$$.fragment,l),t=!1},d(l){Z(n,l)}}}function mt(e){let n,t,l,f,r,o,u,s,c,a,b,h,k,B,N,V,W;a=new st({props:{center:e[14],r:Vn,alfa:e[9],stroke:"red",strokeWidth:"2",fill:"red"}});let P=e[2].drag&&Mn(e),w=e[2].lift&&An(e),M=e[2].total&&Cn(e),C=e[2].normal&&Pn(e),v=e[2].tangential&&In(e);return{c(){n=S("line"),f=D(),r=S("text"),o=G(e[0]),c=D(),ee(a.$$.fragment),b=D(),P&&P.c(),h=D(),w&&w.c(),k=D(),M&&M.c(),B=D(),C&&C.c(),N=D(),v&&v.c(),V=qe(),i(n,"x1",t=e[1].x),i(n,"y1",l=e[1].y),i(n,"x2",e[11]),i(n,"y2",e[10]),i(n,"stroke",e[3]),i(n,"stroke-width",e[4]),i(n,"fill",e[5]),i(r,"x",u=e[11]-15),i(r,"y",s=e[10]+15),i(r,"fill","blue")},m(_,g){O(_,n,g),O(_,f,g),O(_,r,g),d(r,o),O(_,c,g),Y(a,_,g),O(_,b,g),P&&P.m(_,g),O(_,h,g),w&&w.m(_,g),O(_,k,g),M&&M.m(_,g),O(_,B,g),C&&C.m(_,g),O(_,N,g),v&&v.m(_,g),O(_,V,g),W=!0},p(_,[g]){(!W||g&2&&t!==(t=_[1].x))&&i(n,"x1",t),(!W||g&2&&l!==(l=_[1].y))&&i(n,"y1",l),(!W||g&2048)&&i(n,"x2",_[11]),(!W||g&1024)&&i(n,"y2",_[10]),(!W||g&8)&&i(n,"stroke",_[3]),(!W||g&16)&&i(n,"stroke-width",_[4]),(!W||g&32)&&i(n,"fill",_[5]),(!W||g&1)&&Qn(o,_[0]),(!W||g&2048&&u!==(u=_[11]-15))&&i(r,"x",u),(!W||g&1024&&s!==(s=_[10]+15))&&i(r,"y",s);const Q={};g&16384&&(Q.center=_[14]),g&512&&(Q.alfa=_[9]),a.$set(Q),_[2].drag?P?(P.p(_,g),g&4&&I(P,1)):(P=Mn(_),P.c(),I(P,1),P.m(h.parentNode,h)):P&&(Pe(),R(P,1,1,()=>{P=null}),Ie()),_[2].lift?w?(w.p(_,g),g&4&&I(w,1)):(w=An(_),w.c(),I(w,1),w.m(k.parentNode,k)):w&&(Pe(),R(w,1,1,()=>{w=null}),Ie()),_[2].total?M?(M.p(_,g),g&4&&I(M,1)):(M=Cn(_),M.c(),I(M,1),M.m(B.parentNode,B)):M&&(Pe(),R(M,1,1,()=>{M=null}),Ie()),_[2].normal?C?(C.p(_,g),g&4&&I(C,1)):(C=Pn(_),C.c(),I(C,1),C.m(N.parentNode,N)):C&&(Pe(),R(C,1,1,()=>{C=null}),Ie()),_[2].tangential?v?(v.p(_,g),g&4&&I(v,1)):(v=In(_),v.c(),I(v,1),v.m(V.parentNode,V)):v&&(Pe(),R(v,1,1,()=>{v=null}),Ie())},i(_){W||(I(a.$$.fragment,_),I(P),I(w),I(M),I(C),I(v),W=!0)},o(_){R(a.$$.fragment,_),R(P),R(w),R(M),R(C),R(v),W=!1},d(_){_&&(E(n),E(f),E(r),E(c),E(b),E(h),E(k),E(B),E(N),E(V)),Z(a,_),P&&P.d(_),w&&w.d(_),M&&M.d(_),C&&C.d(_),v&&v.d(_)}}}let Vn=30,ne=1;function gt(e,n,t){let l,f,r,o,u,s,c,a,b,h,k,B,N,{idx:V}=n,{center:W}=n,{r:P}=n,{alfa:w}=n,{vane:M}=n,{wind:C}=n,{showForces:v}=n,{stroke:_}=n,{strokeWidth:g}=n,{fill:Q}=n;function ge(A,te){let T=A.force*Math.cos(A.direction)+te.force*Math.cos(te.direction),fe=A.force*Math.sin(A.direction)+te.force*Math.sin(te.direction);return{force:Math.sqrt(T*T+fe*fe),direction:Math.atan2(fe,T)}}return e.$$set=A=>{"idx"in A&&t(0,V=A.idx),"center"in A&&t(1,W=A.center),"r"in A&&t(15,P=A.r),"alfa"in A&&t(16,w=A.alfa),"vane"in A&&t(17,M=A.vane),"wind"in A&&t(18,C=A.wind),"showForces"in A&&t(2,v=A.showForces),"stroke"in A&&t(3,_=A.stroke),"strokeWidth"in A&&t(4,g=A.strokeWidth),"fill"in A&&t(5,Q=A.fill)},e.$$.update=()=>{e.$$.dirty&98306&&t(11,l=W.x+P*Math.cos(w)),e.$$.dirty&98306&&t(10,f=W.y-P*Math.sin(w)),e.$$.dirty&3072&&t(14,r={x:l,y:f}),e.$$.dirty&196608&&t(9,o=w/2+(M.alfa-Math.PI/2)/2),e.$$.dirty&262656&&t(19,u=Math.PI/2+o-C.direction),e.$$.dirty&524288&&t(21,s=2*Vn*Math.abs(Math.cos(u))),e.$$.dirty&524288&&t(22,c=Math.abs(Math.cos(u))),e.$$.dirty&6553600&&t(8,a={force:C.speed*s*c,direction:C.direction}),e.$$.dirty&524288&&t(20,b=.8*Math.sin(u)),e.$$.dirty&3932160&&t(7,h={force:C.speed*s*b,direction:C.direction+Math.sign(Math.cos(u))*Math.PI/2}),e.$$.dirty&384&&t(6,k=ge(a,h)),e.$$.dirty&65600&&t(13,B={force:k.force*Math.cos(k.direction-w),direction:w}),e.$$.dirty&65600&&t(12,N={force:k.force*Math.sin(k.direction-w),direction:w+Math.PI/2})},[V,W,v,_,g,Q,k,h,a,o,f,l,N,B,r,P,w,M,C,u,b,s,c]}class bt extends me{constructor(n){super(),de(this,n,gt,mt,_e,{idx:0,center:1,r:15,alfa:16,vane:17,wind:18,showForces:2,stroke:3,strokeWidth:4,fill:5})}}function kt(e){let n,t,l,f,r,o,u,s;return{c(){n=S("g"),t=S("line"),f=S("polygon"),o=S("circle"),i(t,"x1",e[7]),i(t,"y1",e[6]),i(t,"x2",e[5]),i(t,"y2",e[4]),i(t,"stroke",l=e[0].color),i(t,"stroke-width","2"),i(t,"fill","vane.color"),i(f,"points",r=e[7]+","+e[6]+" "+(e[7]+12)+","+(e[6]+3)+" "+(e[7]+12)+","+(e[6]-3)),Se(f,"fill","white"),Se(f,"stroke",e[0].color),Se(f,"stroke-width","1"),i(o,"cx",e[3]),i(o,"cy",e[2]),i(o,"r",u=e[0].circle),i(o,"fill",s=e[0].color),i(n,"transform",e[1])},m(c,a){O(c,n,a),d(n,t),d(n,f),d(n,o)},p(c,[a]){a&128&&i(t,"x1",c[7]),a&64&&i(t,"y1",c[6]),a&32&&i(t,"x2",c[5]),a&16&&i(t,"y2",c[4]),a&1&&l!==(l=c[0].color)&&i(t,"stroke",l),a&192&&r!==(r=c[7]+","+c[6]+" "+(c[7]+12)+","+(c[6]+3)+" "+(c[7]+12)+","+(c[6]-3))&&i(f,"points",r),a&1&&Se(f,"stroke",c[0].color),a&8&&i(o,"cx",c[3]),a&4&&i(o,"cy",c[2]),a&1&&u!==(u=c[0].circle)&&i(o,"r",u),a&1&&s!==(s=c[0].color)&&i(o,"fill",s),a&2&&i(n,"transform",c[1])},i:U,o:U,d(c){c&&E(n)}}}function yt(e,n,t){let l,f,r,o,u,s,c,{center:a}=n,{vane:b}=n;return e.$$set=h=>{"center"in h&&t(8,a=h.center),"vane"in h&&t(0,b=h.vane)},e.$$.update=()=>{e.$$.dirty&257&&t(7,l=a.x-b.r),e.$$.dirty&256&&t(6,f=a.y),e.$$.dirty&257&&t(5,r=a.x+b.r),e.$$.dirty&256&&t(4,o=a.y),e.$$.dirty&257&&t(3,u=a.x+b.r),e.$$.dirty&256&&t(2,s=a.y),e.$$.dirty&257&&t(1,c="rotate("+-b.alfa*180/Math.PI+", "+a.x+", "+a.y+")")},[b,c,s,u,o,r,f,l,a]}class pt extends me{constructor(n){super(),de(this,n,yt,kt,_e,{center:8,vane:0})}}function Nn(e,n,t){const l=e.slice();return l[6]=n[t],l[8]=t,l}function Wn(e,n,t){const l=e.slice();return l[6]=n[t],l[10]=t,l}function Dn(e,n,t){const l=e.slice();return l[6]=n[t],l[10]=t,l}function En(e,n,t){const l=e.slice();return l[6]=n[t],l[10]=t,l}function Fn(e){let n,t,l,f,r;return{c(){n=S("line"),i(n,"x1",t=e[0].x+(e[10]-1)*H+e[3]),i(n,"y1",l=e[0].y+(e[8]-1)*J+e[4]),i(n,"x2",f=e[0].x+(e[10]-1)*H+Bn+e[3]),i(n,"y2",r=e[0].y+(e[8]-1)*J+e[4]),i(n,"stroke",e[1])},m(o,u){O(o,n,u)},p(o,u){u&1&&t!==(t=o[0].x+(o[10]-1)*H+o[3])&&i(n,"x1",t),u&1&&l!==(l=o[0].y+(o[8]-1)*J+o[4])&&i(n,"y1",l),u&1&&f!==(f=o[0].x+(o[10]-1)*H+Bn+o[3])&&i(n,"x2",f),u&1&&r!==(r=o[0].y+(o[8]-1)*J+o[4])&&i(n,"y2",r),u&2&&i(n,"stroke",o[1])},d(o){o&&E(n)}}}function Rn(e){let n,t,l,f,r;return{c(){n=S("line"),i(n,"x1",t=e[0].x+(e[10]-1)*H+e[3]),i(n,"y1",l=e[0].y+(e[8]-1)*J+e[4]),i(n,"x2",f=e[0].x+(e[10]-1)*H+e[3]-Ue),i(n,"y2",r=e[0].y+(e[8]-1)*J+e[4]-Ke),i(n,"stroke",e[1])},m(o,u){O(o,n,u)},p(o,u){u&1&&t!==(t=o[0].x+(o[10]-1)*H+o[3])&&i(n,"x1",t),u&1&&l!==(l=o[0].y+(o[8]-1)*J+o[4])&&i(n,"y1",l),u&1&&f!==(f=o[0].x+(o[10]-1)*H+o[3]-Ue)&&i(n,"x2",f),u&1&&r!==(r=o[0].y+(o[8]-1)*J+o[4]-Ke)&&i(n,"y2",r),u&2&&i(n,"stroke",o[1])},d(o){o&&E(n)}}}function On(e){let n,t,l,f,r;return{c(){n=S("line"),i(n,"x1",t=e[0].x+(e[10]-1)*H+e[3]+Te),i(n,"y1",l=e[0].y+(e[8]-1)*J+e[4]),i(n,"x2",f=e[0].x+(e[10]-1)*H+e[3]+Te-Ue),i(n,"y2",r=e[0].y+(e[8]-1)*J+e[4]-Ke),i(n,"stroke",e[1])},m(o,u){O(o,n,u)},p(o,u){u&1&&t!==(t=o[0].x+(o[10]-1)*H+o[3]+Te)&&i(n,"x1",t),u&1&&l!==(l=o[0].y+(o[8]-1)*J+o[4])&&i(n,"y1",l),u&1&&f!==(f=o[0].x+(o[10]-1)*H+o[3]+Te-Ue)&&i(n,"x2",f),u&1&&r!==(r=o[0].y+(o[8]-1)*J+o[4]-Ke)&&i(n,"y2",r),u&2&&i(n,"stroke",o[1])},d(o){o&&E(n)}}}function Ln(e){let n,t,l,f=$(Array(4)),r=[];for(let a=0;a<f.length;a+=1)r[a]=Fn(En(e,f,a));let o=$(Array(4)),u=[];for(let a=0;a<o.length;a+=1)u[a]=Rn(Dn(e,o,a));let s=$(Array(4)),c=[];for(let a=0;a<s.length;a+=1)c[a]=On(Wn(e,s,a));return{c(){n=S("g");for(let a=0;a<r.length;a+=1)r[a].c();t=qe();for(let a=0;a<u.length;a+=1)u[a].c();l=qe();for(let a=0;a<c.length;a+=1)c[a].c()},m(a,b){O(a,n,b);for(let h=0;h<r.length;h+=1)r[h]&&r[h].m(n,null);d(n,t);for(let h=0;h<u.length;h+=1)u[h]&&u[h].m(n,null);d(n,l);for(let h=0;h<c.length;h+=1)c[h]&&c[h].m(n,null)},p(a,b){if(b&27){f=$(Array(4));let h;for(h=0;h<f.length;h+=1){const k=En(a,f,h);r[h]?r[h].p(k,b):(r[h]=Fn(k),r[h].c(),r[h].m(n,t))}for(;h<r.length;h+=1)r[h].d(1);r.length=f.length}if(b&27){o=$(Array(4));let h;for(h=0;h<o.length;h+=1){const k=Dn(a,o,h);u[h]?u[h].p(k,b):(u[h]=Rn(k),u[h].c(),u[h].m(n,l))}for(;h<u.length;h+=1)u[h].d(1);u.length=o.length}if(b&27){s=$(Array(4));let h;for(h=0;h<s.length;h+=1){const k=Wn(a,s,h);c[h]?c[h].p(k,b):(c[h]=On(k),c[h].c(),c[h].m(n,null))}for(;h<c.length;h+=1)c[h].d(1);c.length=s.length}},d(a){a&&E(n),De(r,a),De(u,a),De(c,a)}}}function wt(e){let n,t=$(Array(4)),l=[];for(let f=0;f<t.length;f+=1)l[f]=Ln(Nn(e,t,f));return{c(){n=S("g");for(let f=0;f<l.length;f+=1)l[f].c();i(n,"transform",e[2])},m(f,r){O(f,n,r);for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(n,null)},p(f,[r]){if(r&27){t=$(Array(4));let o;for(o=0;o<t.length;o+=1){const u=Nn(f,t,o);l[o]?l[o].p(u,r):(l[o]=Ln(u),l[o].c(),l[o].m(n,null))}for(;o<l.length;o+=1)l[o].d(1);l.length=t.length}r&4&&i(n,"transform",f[2])},i:U,o:U,d(f){f&&E(n),De(l,f)}}}let H=100,Bn=40,J=90,Ke=10,Ue=4,Te=4;function vt(e,n,t){let l,{center:f={x:200,y:200}}=n,{color:r="red"}=n,{direction:o=0}=n,u=-70,s=-45;return e.$$set=c=>{"center"in c&&t(0,f=c.center),"color"in c&&t(1,r=c.color),"direction"in c&&t(5,o=c.direction)},e.$$.update=()=>{e.$$.dirty&33&&t(2,l="rotate("+-o*180/Math.PI+", "+f.x+", "+f.y+")")},[f,r,l,u,s,o]}class Mt extends me{constructor(n){super(),de(this,n,vt,wt,_e,{center:0,color:1,direction:5})}}function jn(e,n,t){const l=e.slice();return l[30]=n[t],l[31]=n,l[32]=t,l}function Sn(e){let n,t=e[32],l;const f=()=>e[26](n,t),r=()=>e[26](null,t);let o={idx:e[32],center:e[5].center,r:e[5].arms.r,alfa:e[5].alfa+e[32]*2*Math.PI/e[5].arms.number,vane:e[5].vane,wind:e[6],showForces:e[7],stroke:e[30],strokeWidth:"2",fill:"red"};return n=new bt({props:o}),f(),{c(){ee(n.$$.fragment)},m(u,s){Y(n,u,s),l=!0},p(u,s){t!==u[32]&&(r(),t=u[32],f());const c={};s[0]&32&&(c.center=u[5].center),s[0]&32&&(c.r=u[5].arms.r),s[0]&32&&(c.alfa=u[5].alfa+u[32]*2*Math.PI/u[5].arms.number),s[0]&32&&(c.vane=u[5].vane),s[0]&64&&(c.wind=u[6]),s[0]&128&&(c.showForces=u[7]),s[0]&32&&(c.stroke=u[30]),n.$set(c)},i(u){l||(I(n.$$.fragment,u),l=!0)},o(u){R(n.$$.fragment,u),l=!1},d(u){r(),Z(n,u)}}}function At(e){let n,t,l,f,r,o,u,s,c,a,b,h,k,B,N,V,W,P,w,M,C,v,_,g,Q,ge,A,te,T,fe,q,Oe,le,be,en,oe,nn,tn,Le,ln,re,rn,K,fn,on,un,cn,an,sn,ke,hn,ye,_n,pe,dn,we,mn,ve,gn,bn,Be,je,x,ue,Ge,ce,ae,Me,He,kn;ue=new ut({props:{cx:e[5].center.x,cy:e[5].center.y,r:e[5].arms.r,stroke:"black",fill:"lightgrey"}});let se=$(e[5].arms.colors.slice(0,e[5].arms.number)),F=[];for(let m=0;m<se.length;m+=1)F[m]=Sn(jn(e,se,m));const Kn=m=>R(F[m],1,1,()=>{F[m]=null});return ce=new pt({props:{center:e[5].center,vane:e[5].vane}}),ae=new Mt({props:{center:e[5].center,direction:e[6].direction,color:"grey"}}),{c(){n=p("h2"),n.textContent="Planetary turbine",t=D(),l=p("main"),f=p("div"),r=p("div"),o=p("label"),o.textContent="Arms:",u=D(),s=p("input"),c=p("br"),a=D(),b=p("label"),b.textContent="Rotation:",h=D(),k=p("input"),B=G(` 
      `),N=p("input"),V=p("br"),W=D(),P=p("label"),P.textContent="Auto:",w=D(),M=p("input"),C=D(),v=p("select"),_=p("option"),_.textContent="CCW / Left",g=p("option"),g.textContent="CW / Right",Q=p("br"),ge=D(),A=p("label"),A.textContent="Wind Direction:",te=D(),T=p("input"),fe=G(` 
      `),q=p("input"),Oe=p("br"),le=D(),be=p("label"),be.textContent="Vane follows wind:",en=D(),oe=p("input"),nn=p("br"),tn=D(),Le=p("label"),Le.textContent="Vane Direction:",ln=D(),re=p("input"),rn=G(` 
      `),K=p("input"),fn=p("br"),on=D(),un=p("br"),cn=G(`
    
      Display forces:`),an=p("br"),sn=D(),ke=p("input"),hn=G(` Drag
      `),ye=p("input"),_n=G(` Lift
      `),pe=p("input"),dn=G(` Total
      `),we=p("input"),mn=G(` Normal
      `),ve=p("input"),gn=G(" Tangential"),bn=D(),Be=p("div"),je=p("div"),x=S("svg"),ee(ue.$$.fragment);for(let m=0;m<F.length;m+=1)F[m].c();Ge=qe(),ee(ce.$$.fragment),ee(ae.$$.fragment),i(o,"for","numArms"),i(s,"id","numArms"),i(s,"type","number"),i(s,"size","2"),i(s,"min","2"),i(s,"max","8"),i(s,"step","1"),i(b,"for","degRotation"),i(k,"type","number"),i(k,"size","4"),k.disabled=!0,i(N,"id","degRotation"),i(N,"type","range"),i(N,"min","0"),i(N,"max","359"),i(N,"step","1"),N.disabled=e[4],i(P,"for","autoRotate"),i(M,"id","autoRotate"),i(M,"type","checkbox"),_.__value="left",j(_,_.__value),g.__value="right",j(g,g.__value),e[9]===void 0&&Ve(()=>e[14].call(v)),i(A,"for","wDirection"),i(T,"type","number"),i(T,"size","4"),T.disabled=!0,i(q,"id","wDirection"),i(q,"type","range"),i(q,"min","0"),i(q,"max","359"),i(q,"step","1"),i(be,"for","vane"),i(oe,"id","vane"),i(oe,"type","checkbox"),i(Le,"for","vDirection"),i(re,"type","number"),i(re,"size","4"),re.disabled=!0,i(K,"id","vDirection"),i(K,"type","range"),i(K,"min","0"),i(K,"max","359"),i(K,"step","1"),K.disabled=e[3],i(ke,"type","checkbox"),i(ye,"type","checkbox"),i(pe,"type","checkbox"),i(we,"type","checkbox"),i(ve,"type","checkbox"),i(r,"class","column svelte-1ptujve"),i(x,"width","400"),i(x,"height","400"),i(je,"class","turbine"),i(Be,"class","column svelte-1ptujve"),i(f,"class","row svelte-1ptujve"),i(l,"class","svelte-1ptujve")},m(m,y){O(m,n,y),O(m,t,y),O(m,l,y),d(l,f),d(f,r),d(r,o),d(r,u),d(r,s),j(s,e[5].arms.number),d(r,c),d(r,a),d(r,b),d(r,h),d(r,k),j(k,e[0]),d(r,B),d(r,N),j(N,e[0]),d(r,V),d(r,W),d(r,P),d(r,w),d(r,M),M.checked=e[4],d(r,C),d(r,v),d(v,_),d(v,g),wn(v,e[9],!0),d(r,Q),d(r,ge),d(r,A),d(r,te),d(r,T),j(T,e[2]),d(r,fe),d(r,q),j(q,e[2]),d(r,Oe),d(r,le),d(r,be),d(r,en),d(r,oe),oe.checked=e[3],d(r,nn),d(r,tn),d(r,Le),d(r,ln),d(r,re),j(re,e[1]),d(r,rn),d(r,K),j(K,e[1]),d(r,fn),d(r,on),d(r,un),d(r,cn),d(r,an),d(r,sn),d(r,ke),ke.checked=e[7].drag,d(r,hn),d(r,ye),ye.checked=e[7].lift,d(r,_n),d(r,pe),pe.checked=e[7].total,d(r,dn),d(r,we),we.checked=e[7].normal,d(r,mn),d(r,ve),ve.checked=e[7].tangential,d(r,gn),d(f,bn),d(f,Be),d(Be,je),d(je,x),Y(ue,x,null);for(let ie=0;ie<F.length;ie+=1)F[ie]&&F[ie].m(x,null);d(x,Ge),Y(ce,x,null),Y(ae,x,null),Me=!0,He||(kn=[L(s,"input",e[10]),L(k,"input",e[11]),L(N,"change",e[12]),L(N,"input",e[12]),L(M,"change",e[13]),L(v,"change",e[14]),L(v,"change",e[15]),L(T,"input",e[16]),L(q,"change",e[17]),L(q,"input",e[17]),L(oe,"change",e[18]),L(re,"input",e[19]),L(K,"change",e[20]),L(K,"input",e[20]),L(ke,"change",e[21]),L(ye,"change",e[22]),L(pe,"change",e[23]),L(we,"change",e[24]),L(ve,"change",e[25])],He=!0)},p(m,y){y[0]&32&&X(s.value)!==m[5].arms.number&&j(s,m[5].arms.number),y[0]&1&&X(k.value)!==m[0]&&j(k,m[0]),(!Me||y[0]&16)&&(N.disabled=m[4]),y[0]&1&&j(N,m[0]),y[0]&16&&(M.checked=m[4]),y[0]&512&&wn(v,m[9]),y[0]&4&&X(T.value)!==m[2]&&j(T,m[2]),y[0]&4&&j(q,m[2]),y[0]&8&&(oe.checked=m[3]),y[0]&2&&X(re.value)!==m[1]&&j(re,m[1]),(!Me||y[0]&8)&&(K.disabled=m[3]),y[0]&2&&j(K,m[1]),y[0]&128&&(ke.checked=m[7].drag),y[0]&128&&(ye.checked=m[7].lift),y[0]&128&&(pe.checked=m[7].total),y[0]&128&&(we.checked=m[7].normal),y[0]&128&&(ve.checked=m[7].tangential);const ie={};if(y[0]&32&&(ie.cx=m[5].center.x),y[0]&32&&(ie.cy=m[5].center.y),y[0]&32&&(ie.r=m[5].arms.r),ue.$set(ie),y[0]&480){se=$(m[5].arms.colors.slice(0,m[5].arms.number));let z;for(z=0;z<se.length;z+=1){const yn=jn(m,se,z);F[z]?(F[z].p(yn,y),I(F[z],1)):(F[z]=Sn(yn),F[z].c(),I(F[z],1),F[z].m(x,Ge))}for(Pe(),z=se.length;z<F.length;z+=1)Kn(z);Ie()}const Je={};y[0]&32&&(Je.center=m[5].center),y[0]&32&&(Je.vane=m[5].vane),ce.$set(Je);const Qe={};y[0]&32&&(Qe.center=m[5].center),y[0]&64&&(Qe.direction=m[6].direction),ae.$set(Qe)},i(m){if(!Me){I(ue.$$.fragment,m);for(let y=0;y<se.length;y+=1)I(F[y]);I(ce.$$.fragment,m),I(ae.$$.fragment,m),Me=!0}},o(m){R(ue.$$.fragment,m),F=F.filter(Boolean);for(let y=0;y<F.length;y+=1)R(F[y]);R(ce.$$.fragment,m),R(ae.$$.fragment,m),Me=!1},d(m){m&&(E(n),E(t),E(l)),Z(ue),De(F,m),Z(ce),Z(ae),He=!1,We(kn)}}}function Ze(e){return(90-e)*Math.PI/180}function Ct(e,n,t){let l={alfa:0,center:{x:200,y:200},arms:{number:3,r:150,colors:["yellow","green","blue","coral","purple","aqua","plum","teal"]},vane:{color:"black",r:30,circle:6,alfa:0}},f={direction:0,speed:1},r=90,o=180,u=180,s=!0,c={drag:!0,lift:!0,total:!0,normal:!0,tangential:!0},a=[],b,h=!1,k="left";function B(){b=setInterval(()=>{let le=k=="right"?1:-1;r==359&&le==1?t(0,r=0):r==0&&le==-1?t(0,r=359):t(0,r+=le)},30)}function N(){clearInterval(b)}Zn(()=>{});function V(){l.arms.number=X(this.value),t(5,l),t(0,r),t(3,s),t(2,u),t(1,o)}function W(){r=X(this.value),t(0,r)}function P(){r=X(this.value),t(0,r)}function w(){h=this.checked,t(4,h)}function M(){k=Xn(this),t(9,k)}const C=()=>console.log(k);function v(){u=X(this.value),t(2,u)}function _(){u=X(this.value),t(2,u)}function g(){s=this.checked,t(3,s)}function Q(){o=X(this.value),t(1,o)}function ge(){o=X(this.value),t(1,o)}function A(){c.drag=this.checked,t(7,c)}function te(){c.lift=this.checked,t(7,c)}function T(){c.total=this.checked,t(7,c)}function fe(){c.normal=this.checked,t(7,c)}function q(){c.tangential=this.checked,t(7,c)}function Oe(le,be){xe[le?"unshift":"push"](()=>{a[be]=le,t(8,a)})}return e.$$.update=()=>{e.$$.dirty[0]&1&&t(5,l.alfa=Ze(r),l),e.$$.dirty[0]&14&&t(5,l.vane.alfa=Ze(180+(s?u:o)),l),e.$$.dirty[0]&4&&t(6,f.direction=Ze(180+u),f),e.$$.dirty[0]&16&&(h?B():N())},[r,o,u,s,h,l,f,c,a,k,V,W,P,w,M,C,v,_,g,Q,ge,A,te,T,fe,q,Oe]}class Pt extends me{constructor(n){super(),de(this,n,Ct,At,_e,{},null,[-1,-1])}}new Pt({target:document.getElementById("app")});
