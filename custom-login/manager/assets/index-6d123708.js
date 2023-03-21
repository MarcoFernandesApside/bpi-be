(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function S(){}function Ee(t){return t()}function ve(){return Object.create(null)}function D(t){t.forEach(Ee)}function Le(t){return typeof t=="function"}function J(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let le;function je(t,e){return le||(le=document.createElement("a")),le.href=e,t===le.href}function Ne(t){return Object.keys(t).length===0}function Te(t,...e){if(t==null)return S;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function de(t,e,n){t.$$.on_destroy.push(Te(e,n))}function g(t,e){t.appendChild(e)}function $(t,e,n){t.insertBefore(e,n||null)}function k(t){t.parentNode&&t.parentNode.removeChild(t)}function Pe(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function b(t){return document.createElement(t)}function Y(t){return document.createTextNode(t)}function j(){return Y(" ")}function fe(){return Y("")}function P(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function O(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ze(t){return Array.from(t.childNodes)}function re(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ye(t,e){t.value=e??""}function we(t,e,n){for(let l=0;l<t.options.length;l+=1){const s=t.options[l];if(s.__value===e){s.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function Ie(t){const e=t.querySelector(":checked");return e&&e.__value}let ge;function ne(t){ge=t}const G=[],H=[];let Q=[];const he=[],He=Promise.resolve();let me=!1;function Ke(){me||(me=!0,He.then(Me))}function oe(t){Q.push(t)}function W(t){he.push(t)}const _e=new Set;let F=0;function Me(){if(F!==0)return;const t=ge;do{try{for(;F<G.length;){const e=G[F];F++,ne(e),De(e.$$)}}catch(e){throw G.length=0,F=0,e}for(ne(null),G.length=0,F=0;H.length;)H.pop()();for(let e=0;e<Q.length;e+=1){const n=Q[e];_e.has(n)||(_e.add(n),n())}Q.length=0}while(G.length);for(;he.length;)he.pop()();me=!1,_e.clear(),ne(t)}function De(t){if(t.fragment!==null){t.update(),D(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(oe)}}function Be(t){const e=[],n=[];Q.forEach(l=>t.indexOf(l)===-1?e.push(l):n.push(l)),n.forEach(l=>l()),Q=e}const ie=new Set;let B;function ce(){B={r:0,c:[],p:B}}function ae(){B.r||D(B.c),B=B.p}function M(t,e){t&&t.i&&(ie.delete(t),t.i(e))}function q(t,e,n,l){if(t&&t.o){if(ie.has(t))return;ie.add(t),B.c.push(()=>{ie.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}else l&&l()}function Je(t,e){q(t,1,1,()=>{e.delete(t.key)})}function Fe(t,e,n,l,s,r,u,o,i,f,c,_){let p=t.length,d=r.length,h=p;const C={};for(;h--;)C[t[h].key]=h;const E=[],y=new Map,L=new Map,v=[];for(h=d;h--;){const w=_(s,r,h),A=n(w);let a=u.get(A);a?l&&v.push(()=>a.p(w,e)):(a=f(A,w),a.c()),y.set(A,E[h]=a),A in C&&L.set(A,Math.abs(h-C[A]))}const m=new Set,N=new Set;function T(w){M(w,1),w.m(o,c),u.set(w.key,w),c=w.first,d--}for(;p&&d;){const w=E[d-1],A=t[p-1],a=w.key,U=A.key;w===A?(c=w.first,p--,d--):y.has(U)?!u.has(a)||m.has(a)?T(w):N.has(U)?p--:L.get(a)>L.get(U)?(N.add(a),T(w)):(m.add(U),p--):(i(A,u),p--)}for(;p--;){const w=t[p];y.has(w.key)||i(w,u)}for(;d;)T(E[d-1]);return D(v),E}function X(t,e,n){const l=t.$$.props[e];l!==void 0&&(t.$$.bound[l]=n,n(t.$$.ctx[l]))}function K(t){t&&t.c()}function z(t,e,n,l){const{fragment:s,after_update:r}=t.$$;s&&s.m(e,n),l||oe(()=>{const u=t.$$.on_mount.map(Ee).filter(Le);t.$$.on_destroy?t.$$.on_destroy.push(...u):D(u),t.$$.on_mount=[]}),r.forEach(oe)}function I(t,e){const n=t.$$;n.fragment!==null&&(Be(n.after_update),D(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ve(t,e){t.$$.dirty[0]===-1&&(G.push(t),Ke(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Z(t,e,n,l,s,r,u,o=[-1]){const i=ge;ne(t);const f=t.$$={fragment:null,ctx:[],props:r,update:S,not_equal:s,bound:ve(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(i?i.$$.context:[])),callbacks:ve(),dirty:o,skip_bound:!1,root:e.target||i.$$.root};u&&u(f.root);let c=!1;if(f.ctx=n?n(t,e.props||{},(_,p,...d)=>{const h=d.length?d[0]:p;return f.ctx&&s(f.ctx[_],f.ctx[_]=h)&&(!f.skip_bound&&f.bound[_]&&f.bound[_](h),c&&Ve(t,_)),p}):[],f.update(),c=!0,D(f.before_update),f.fragment=l?l(f.ctx):!1,e.target){if(e.hydrate){const _=ze(e.target);f.fragment&&f.fragment.l(_),_.forEach(k)}else f.fragment&&f.fragment.c();e.intro&&M(t.$$.fragment),z(t,e.target,e.anchor,e.customElement),Me()}ne(i)}class R{$destroy(){I(this,1),this.$destroy=S}$on(e,n){if(!Le(n))return S;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const s=l.indexOf(n);s!==-1&&l.splice(s,1)}}$set(e){this.$$set&&!Ne(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const V=[];function pe(t,e=S){let n;const l=new Set;function s(o){if(J(t,o)&&(t=o,n)){const i=!V.length;for(const f of l)f[1](),V.push(f,t);if(i){for(let f=0;f<V.length;f+=2)V[f][0](V[f+1]);V.length=0}}}function r(o){s(o(t))}function u(o,i=S){const f=[o,i];return l.add(f),l.size===1&&(n=e(s)||S),o(t),()=>{l.delete(f),l.size===0&&n&&(n(),n=null)}}return{set:s,update:r,subscribe:u}}class Ge{getAllUsers(){return fetch("http://localhost:3030/api/users",{headers:{King:"king"}}).then(e=>e.json())}deleteUser(e){return fetch(`http://localhost:3030/api/users/${e}`,{method:"DELETE",headers:{King:"king"}}).then(n=>n.json())}createUser(e){return fetch("http://localhost:3030/api/signup",{method:"POST",body:JSON.stringify({email:e.email,password:e.password,role:e.role}),headers:{King:"king","Content-Type":"application/json"}}).then(n=>n.json())}modifyUser(e){return fetch(`http://localhost:3030/api/users/${e.id}`,{method:"PATCH",headers:{King:"king","Content-Type":"application/json"},body:JSON.stringify({role:e.role,email:e.email,password:e.password})}).then(n=>n.json())}}const se=new Ge;function Qe(){const t=pe(!1),e=pe(!1),n=pe(null);return{data:n,loading:t,error:e,getUsers:async()=>{t.set(!0),e.set(!1);try{const o=await se.getAllUsers();n.set(o.users)}catch(o){console.error(o),e.set(o)}finally{t.set(!1)}},deleteUser:async o=>{t.set(!0),e.set(!1);try{const i=await se.deleteUser(o);n.update(f=>f.filter(c=>c.id!==i.id))}catch(i){console.error(i),e.set(i)}finally{t.set(!1)}},modifyUser:async o=>{t.set(!0),e.set(!1);try{const i=await se.modifyUser(o);n.update(f=>f.map(c=>c.id===i.id?o:c))}catch(i){console.error(i),e.set(i)}finally{t.set(!1)}},createUser:async o=>{t.set(!0),e.set(!1);try{const i=await se.createUser(o);"token"in i&&n.update(f=>[...f,{...o,id:i.id}]),"message"in i&&console.error(i)}catch(i){console.error(i),e.set(i)}finally{t.set(!1)}}}}const be=Qe();function We(t){let e,n,l;return{c(){e=b("input"),O(e,"placeholder",t[1]),O(e,"type","text")},m(s,r){$(s,e,r),ye(e,t[0]),n||(l=P(e,"input",t[2]),n=!0)},p(s,[r]){r&2&&O(e,"placeholder",s[1]),r&1&&e.value!==s[0]&&ye(e,s[0])},i:S,o:S,d(s){s&&k(e),n=!1,l()}}}function Xe(t,e,n){let{value:l}=e,{placeholder:s=""}=e;function r(){l=this.value,n(0,l)}return t.$$set=u=>{"value"in u&&n(0,l=u.value),"placeholder"in u&&n(1,s=u.placeholder)},[l,s,r]}class ue extends R{constructor(e){super(),Z(this,e,Xe,We,J,{value:0,placeholder:1})}}function ke(t,e,n){const l=t.slice();return l[5]=e[n],l[7]=n,l}function $e(t){let e,n;return{c(){e=b("option"),n=Y(t[1]),e.__value="",e.value=e.__value,e.disabled=!0,e.selected=!0},m(l,s){$(l,e,s),g(e,n)},p(l,s){s&2&&re(n,l[1])},d(l){l&&k(e)}}}function Ce(t){let e,n=t[5]+"",l;return{c(){e=b("option"),l=Y(n),e.__value=t[7],e.value=e.__value},m(s,r){$(s,e,r),g(e,l)},p(s,r){r&4&&n!==(n=s[5]+"")&&re(l,n)},d(s){s&&k(e)}}}function Ye(t){let e,n,l,s,r=!!t[1]&&$e(t),u=t[2],o=[];for(let i=0;i<u.length;i+=1)o[i]=Ce(ke(t,u,i));return{c(){e=b("select"),r&&r.c(),n=fe();for(let i=0;i<o.length;i+=1)o[i].c();t[0]===void 0&&oe(()=>t[4].call(e))},m(i,f){$(i,e,f),r&&r.m(e,null),g(e,n);for(let c=0;c<o.length;c+=1)o[c]&&o[c].m(e,null);we(e,t[0],!0),l||(s=P(e,"change",t[4]),l=!0)},p(i,[f]){if(i[1]?r?r.p(i,f):(r=$e(i),r.c(),r.m(e,n)):r&&(r.d(1),r=null),f&4){u=i[2];let c;for(c=0;c<u.length;c+=1){const _=ke(i,u,c);o[c]?o[c].p(_,f):(o[c]=Ce(_),o[c].c(),o[c].m(e,null))}for(;c<o.length;c+=1)o[c].d(1);o.length=u.length}f&1&&we(e,i[0])},i:S,o:S,d(i){i&&k(e),r&&r.d(),Pe(o,i),l=!1,s()}}}function Ze(t,e,n){let{placeholder:l=""}=e,{options:s}=e,{value:r}=e,{index:u=s.indexOf(r)}=e;function o(){u=Ie(this),n(0,u)}return t.$$set=i=>{"placeholder"in i&&n(1,l=i.placeholder),"options"in i&&n(2,s=i.options),"value"in i&&n(3,r=i.value),"index"in i&&n(0,u=i.index)},t.$$.update=()=>{t.$$.dirty&5&&n(3,r=s[u])},[u,l,s,r,o]}class qe extends R{constructor(e){super(),Z(this,e,Ze,Ye,J,{placeholder:1,options:2,value:3,index:0})}}function Re(t){let e,n,l,s,r,u,o,i,f,c,_,p;return{c(){e=b("div"),n=Y(t[1]),l=j(),s=b("div"),r=Y(t[0]),u=j(),o=b("div"),o.textContent="············",i=j(),f=b("div"),c=b("button"),c.textContent="Edit",O(c,"class","button svelte-2b0qx2"),O(f,"class","buttons svelte-2b0qx2")},m(d,h){$(d,e,h),g(e,n),$(d,l,h),$(d,s,h),g(s,r),$(d,u,h),$(d,o,h),$(d,i,h),$(d,f,h),g(f,c),_||(p=P(c,"click",t[5]),_=!0)},p(d,h){h&2&&re(n,d[1]),h&1&&re(r,d[0])},i:S,o:S,d(d){d&&k(e),d&&k(l),d&&k(s),d&&k(u),d&&k(o),d&&k(i),d&&k(f),_=!1,p()}}}function xe(t){let e,n,l,s,r,u,o,i,f,c,_,p,d,h,C,E,y,L;function v(a){t[9](a)}let m={};t[1]!==void 0&&(m.value=t[1]),e=new ue({props:m}),H.push(()=>X(e,"value",v));function N(a){t[10](a)}let T={options:t[4]};t[0]!==void 0&&(T.value=t[0]),s=new qe({props:T}),H.push(()=>X(s,"value",N));function w(a){t[11](a)}let A={placeholder:"Change password"};return t[2]!==void 0&&(A.value=t[2]),o=new ue({props:A}),H.push(()=>X(o,"value",w)),{c(){K(e.$$.fragment),l=j(),K(s.$$.fragment),u=j(),K(o.$$.fragment),f=j(),c=b("div"),_=b("button"),_.textContent="Save",p=j(),d=b("button"),d.textContent="Cancel",h=j(),C=b("button"),C.textContent="Delete",O(_,"class","button save svelte-2b0qx2"),O(d,"class","button svelte-2b0qx2"),O(C,"class","button delete svelte-2b0qx2"),O(c,"class","buttons svelte-2b0qx2")},m(a,U){z(e,a,U),$(a,l,U),z(s,a,U),$(a,u,U),z(o,a,U),$(a,f,U),$(a,c,U),g(c,_),g(c,p),g(c,d),g(c,h),g(c,C),E=!0,y||(L=[P(_,"click",t[7]),P(d,"click",t[5]),P(C,"click",t[6])],y=!0)},p(a,U){const x={};!n&&U&2&&(n=!0,x.value=a[1],W(()=>n=!1)),e.$set(x);const ee={};!r&&U&1&&(r=!0,ee.value=a[0],W(()=>r=!1)),s.$set(ee);const te={};!i&&U&4&&(i=!0,te.value=a[2],W(()=>i=!1)),o.$set(te)},i(a){E||(M(e.$$.fragment,a),M(s.$$.fragment,a),M(o.$$.fragment,a),E=!0)},o(a){q(e.$$.fragment,a),q(s.$$.fragment,a),q(o.$$.fragment,a),E=!1},d(a){I(e,a),a&&k(l),I(s,a),a&&k(u),I(o,a),a&&k(f),a&&k(c),y=!1,D(L)}}}function et(t){let e,n,l,s;const r=[xe,Re],u=[];function o(i,f){return i[3]?0:1}return n=o(t),l=u[n]=r[n](t),{c(){e=b("div"),l.c(),O(e,"class","card svelte-2b0qx2")},m(i,f){$(i,e,f),u[n].m(e,null),s=!0},p(i,[f]){let c=n;n=o(i),n===c?u[n].p(i,f):(ce(),q(u[c],1,1,()=>{u[c]=null}),ae(),l=u[n],l?l.p(i,f):(l=u[n]=r[n](i),l.c()),M(l,1),l.m(e,null))},i(i){s||(M(l),s=!0)},o(i){q(l),s=!1},d(i){i&&k(e),u[n].d()}}}function tt(t,e,n){let{user:l}=e,s=["Admin","Salesman","Trainee","Operator"],r=l.role,u=l.email,o="",i=!1;const f=()=>{n(3,i=!i)},{deleteUser:c,modifyUser:_}=be,p=async()=>{await c(l.id),f()},d=async()=>{await _({id:l.id,email:u,role:r,password:o}),f()};function h(y){u=y,n(1,u)}function C(y){r=y,n(0,r)}function E(y){o=y,n(2,o)}return t.$$set=y=>{"user"in y&&n(8,l=y.user)},[r,u,o,i,s,f,p,d,l,h,C,E]}class nt extends R{constructor(e){super(),Z(this,e,tt,et,J,{user:8})}}const lt="/assets/bpi-logo-350a9bab.png";function st(t){let e,n,l;return{c(){e=b("header"),n=b("img"),je(n.src,l=lt)||O(n,"src",l),O(n,"height",80),O(n,"class","logo svelte-1i1ltby"),O(n,"alt","bpi france Logo")},m(s,r){$(s,e,r),g(e,n)},p:S,i:S,o:S,d(s){s&&k(e)}}}class it extends R{constructor(e){super(),Z(this,e,null,st,J,{})}}var Ae=(t=>(t.admin="Admin",t.salesman="Salesman",t.trainee="Trainee",t.operator="Operator",t))(Ae||{});function Oe(t){let e,n,l,s,r,u,o,i,f,c,_,p,d,h,C,E,y,L;function v(a){t[8](a)}let m={placeholder:"Email"};t[2]!==void 0&&(m.value=t[2]),u=new ue({props:m}),H.push(()=>X(u,"value",v));function N(a){t[9](a)}let T={placeholder:"Password"};t[3]!==void 0&&(T.value=t[3]),f=new ue({props:T}),H.push(()=>X(f,"value",N));function w(a){t[10](a)}let A={placeholder:"Roles",options:Object.values(Ae)};return t[4]!==void 0&&(A.value=t[4]),p=new qe({props:A}),H.push(()=>X(p,"value",w)),{c(){e=b("div"),n=b("div"),l=b("h2"),l.textContent="Create user",s=j(),r=b("div"),K(u.$$.fragment),i=j(),K(f.$$.fragment),_=j(),K(p.$$.fragment),h=j(),C=b("button"),C.textContent="Create",O(r,"class","inputs svelte-1ezh5ls"),O(C,"class","button svelte-1ezh5ls"),O(n,"class","modal-content svelte-1ezh5ls"),O(e,"tabindex","-1"),O(e,"class","modal-container svelte-1ezh5ls")},m(a,U){$(a,e,U),g(e,n),g(n,l),g(n,s),g(n,r),z(u,r,null),g(r,i),z(f,r,null),g(r,_),z(p,r,null),g(n,h),g(n,C),t[11](e),E=!0,y||(L=[P(C,"click",t[6]),P(e,"keyup",t[5]),P(e,"click",t[5])],y=!0)},p(a,U){const x={};!o&&U&4&&(o=!0,x.value=a[2],W(()=>o=!1)),u.$set(x);const ee={};!c&&U&8&&(c=!0,ee.value=a[3],W(()=>c=!1)),f.$set(ee);const te={};!d&&U&16&&(d=!0,te.value=a[4],W(()=>d=!1)),p.$set(te)},i(a){E||(M(u.$$.fragment,a),M(f.$$.fragment,a),M(p.$$.fragment,a),E=!0)},o(a){q(u.$$.fragment,a),q(f.$$.fragment,a),q(p.$$.fragment,a),E=!1},d(a){a&&k(e),I(u),I(f),I(p),t[11](null),y=!1,D(L)}}}function rt(t){let e,n,l=t[0]&&Oe(t);return{c(){l&&l.c(),e=fe()},m(s,r){l&&l.m(s,r),$(s,e,r),n=!0},p(s,[r]){s[0]?l?(l.p(s,r),r&1&&M(l,1)):(l=Oe(s),l.c(),M(l,1),l.m(e.parentNode,e)):l&&(ce(),q(l,1,1,()=>{l=null}),ae())},i(s){n||(M(l),n=!0)},o(s){q(l),n=!1},d(s){l&&l.d(s),s&&k(e)}}}function ot(t,e,n){let{isOpen:l=!1}=e,{handleModal:s}=e,r,u,o,i;const{loading:f,error:c,createUser:_}=be,p=v=>{"key"in v?v.key==="Escape"&&s():v.target.classList.contains("modal-container")&&s()},d=()=>{n(3,o=""),n(2,u="")},h=async()=>{u===""||o===""||(o==null?void 0:o.length)<6||(await _({email:u,role:i,password:o}),d(),s())};function C(v){u=v,n(2,u)}function E(v){o=v,n(3,o)}function y(v){i=v,n(4,i)}function L(v){H[v?"unshift":"push"](()=>{r=v,n(1,r)})}return t.$$set=v=>{"isOpen"in v&&n(0,l=v.isOpen),"handleModal"in v&&n(7,s=v.handleModal)},[l,r,u,o,i,p,h,s,C,E,y,L]}class ut extends R{constructor(e){super(),Z(this,e,ot,rt,J,{isOpen:0,handleModal:7})}}function Ue(t,e,n){const l=t.slice();return l[9]=e[n],l}function ft(t){let e=[],n=new Map,l,s,r=t[3];const u=o=>o[9].id;for(let o=0;o<r.length;o+=1){let i=Ue(t,r,o),f=u(i);n.set(f,e[o]=Se(f,i))}return{c(){for(let o=0;o<e.length;o+=1)e[o].c();l=fe()},m(o,i){for(let f=0;f<e.length;f+=1)e[f]&&e[f].m(o,i);$(o,l,i),s=!0},p(o,i){i&8&&(r=o[3],ce(),e=Fe(e,i,u,1,o,r,n,l.parentNode,Je,Se,l,Ue),ae())},i(o){if(!s){for(let i=0;i<r.length;i+=1)M(e[i]);s=!0}},o(o){for(let i=0;i<e.length;i+=1)q(e[i]);s=!1},d(o){for(let i=0;i<e.length;i+=1)e[i].d(o);o&&k(l)}}}function ct(t){let e;return{c(){e=b("div"),e.textContent="Error..."},m(n,l){$(n,e,l)},p:S,i:S,o:S,d(n){n&&k(e)}}}function at(t){let e;return{c(){e=b("div"),e.textContent="Loading..."},m(n,l){$(n,e,l)},p:S,i:S,o:S,d(n){n&&k(e)}}}function Se(t,e){let n,l,s;return l=new nt({props:{user:e[9]}}),{key:t,first:null,c(){n=fe(),K(l.$$.fragment),this.first=n},m(r,u){$(r,n,u),z(l,r,u),s=!0},p(r,u){e=r;const o={};u&8&&(o.user=e[9]),l.$set(o)},i(r){s||(M(l.$$.fragment,r),s=!0)},o(r){q(l.$$.fragment,r),s=!1},d(r){r&&k(n),I(l,r)}}}function dt(t){let e,n,l,s,r,u,o,i,f,c,_,p,d,h,C,E;n=new it({});const y=[at,ct,ft],L=[];function v(m,N){return m[1]?0:m[2]?1:m[3]?2:-1}return~(c=v(t))&&(_=L[c]=y[c](t)),d=new ut({props:{handleModal:t[7],isOpen:t[0]}}),{c(){e=b("main"),K(n.$$.fragment),l=j(),s=b("div"),r=b("h1"),r.textContent="User management",u=j(),o=b("button"),o.innerHTML=`Add user
      <div title="add a new user" class="add-icon svelte-hci2y7"></div>`,i=j(),f=b("div"),_&&_.c(),p=j(),K(d.$$.fragment),O(o,"class","add-button svelte-hci2y7"),O(s,"class","title svelte-hci2y7"),O(f,"class","cards svelte-hci2y7"),O(e,"class","main-page")},m(m,N){$(m,e,N),z(n,e,null),g(e,l),g(e,s),g(s,r),g(s,u),g(s,o),g(e,i),g(e,f),~c&&L[c].m(f,null),g(e,p),z(d,e,null),h=!0,C||(E=P(o,"click",t[7]),C=!0)},p(m,[N]){let T=c;c=v(m),c===T?~c&&L[c].p(m,N):(_&&(ce(),q(L[T],1,1,()=>{L[T]=null}),ae()),~c?(_=L[c],_?_.p(m,N):(_=L[c]=y[c](m),_.c()),M(_,1),_.m(f,null)):_=null);const w={};N&1&&(w.isOpen=m[0]),d.$set(w)},i(m){h||(M(n.$$.fragment,m),M(_),M(d.$$.fragment,m),h=!0)},o(m){q(n.$$.fragment,m),q(_),q(d.$$.fragment,m),h=!1},d(m){m&&k(e),I(n),~c&&L[c].d(),I(d),C=!1,E()}}}function _t(t,e,n){let l,s,r,u=!1;const{data:o,loading:i,error:f,getUsers:c}=be;return de(t,o,p=>n(3,r=p)),de(t,i,p=>n(1,l=p)),de(t,f,p=>n(2,s=p)),c(),[u,l,s,r,o,i,f,()=>{n(0,u=!u)}]}class pt extends R{constructor(e){super(),Z(this,e,_t,dt,J,{})}}new pt({target:document.getElementById("app")});
