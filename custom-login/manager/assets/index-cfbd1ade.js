(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function S(){}function ye(t,e){for(const n in e)t[n]=e[n];return t}function qe(t){return t()}function we(){return Object.create(null)}function K(t){t.forEach(qe)}function ge(t){return typeof t=="function"}function D(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let se;function Pe(t,e){return se||(se=document.createElement("a")),se.href=e,t===se.href}function Ie(t){return Object.keys(t).length===0}function Be(t,...e){if(t==null)return S;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function de(t,e,n){t.$$.on_destroy.push(Be(e,n))}function ke(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Ce(t){return t??""}function v(t,e){t.appendChild(e)}function k(t,e,n){t.insertBefore(e,n||null)}function w(t){t.parentNode&&t.parentNode.removeChild(t)}function Ke(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function b(t){return document.createElement(t)}function De(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function x(t){return document.createTextNode(t)}function A(){return x(" ")}function fe(){return x("")}function T(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function p(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Je(t){return Array.from(t.childNodes)}function oe(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Y(t,e){t.value=e??""}function Se(t,e,n){for(let l=0;l<t.options.length;l+=1){const s=t.options[l];if(s.__value===e){s.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function Fe(t){const e=t.querySelector(":checked");return e&&e.__value}let ve;function le(t){ve=t}const X=[],J=[];let Z=[];const pe=[],Ve=Promise.resolve();let me=!1;function Ge(){me||(me=!0,Ve.then(ze))}function ue(t){Z.push(t)}function R(t){pe.push(t)}const _e=new Set;let Q=0;function ze(){if(Q!==0)return;const t=ve;do{try{for(;Q<X.length;){const e=X[Q];Q++,le(e),Qe(e.$$)}}catch(e){throw X.length=0,Q=0,e}for(le(null),X.length=0,Q=0;J.length;)J.pop()();for(let e=0;e<Z.length;e+=1){const n=Z[e];_e.has(n)||(_e.add(n),n())}Z.length=0}while(X.length);for(;pe.length;)pe.pop()();me=!1,_e.clear(),le(t)}function Qe(t){if(t.fragment!==null){t.update(),K(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ue)}}function We(t){const e=[],n=[];Z.forEach(l=>t.indexOf(l)===-1?e.push(l):n.push(l)),n.forEach(l=>l()),Z=e}const re=new Set;let G;function ce(){G={r:0,c:[],p:G}}function ae(){G.r||K(G.c),G=G.p}function M(t,e){t&&t.i&&(re.delete(t),t.i(e))}function q(t,e,n,l){if(t&&t.o){if(re.has(t))return;re.add(t),G.c.push(()=>{re.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}else l&&l()}function Xe(t,e){q(t,1,1,()=>{e.delete(t.key)})}function Ye(t,e,n,l,s,r,u,o,i,f,a,c){let h=t.length,_=r.length,m=h;const g={};for(;m--;)g[t[m].key]=m;const E=[],U=new Map,L=new Map,B=[];for(m=_;m--;){const C=c(s,r,m),z=n(C);let d=u.get(z);d?l&&B.push(()=>d.p(C,e)):(d=f(z,C),d.c()),U.set(z,E[m]=d),z in g&&L.set(z,Math.abs(m-g[z]))}const y=new Set,H=new Set;function N(C){M(C,1),C.m(o,a),u.set(C.key,C),a=C.first,_--}for(;h&&_;){const C=E[_-1],z=t[h-1],d=C.key,O=z.key;C===z?(a=C.first,h--,_--):U.has(O)?!u.has(d)||y.has(d)?N(C):H.has(O)?h--:L.get(d)>L.get(O)?(H.add(d),N(C)):(y.add(O),h--):(i(z,u),h--)}for(;h--;){const C=t[h];U.has(C.key)||i(C,u)}for(;_;)N(E[_-1]);return K(B),E}function $(t,e,n){const l=t.$$.props[e];l!==void 0&&(t.$$.bound[l]=n,n(t.$$.ctx[l]))}function I(t){t&&t.c()}function j(t,e,n,l){const{fragment:s,after_update:r}=t.$$;s&&s.m(e,n),l||ue(()=>{const u=t.$$.on_mount.map(qe).filter(ge);t.$$.on_destroy?t.$$.on_destroy.push(...u):K(u),t.$$.on_mount=[]}),r.forEach(ue)}function P(t,e){const n=t.$$;n.fragment!==null&&(We(n.after_update),K(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ze(t,e){t.$$.dirty[0]===-1&&(X.push(t),Ge(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function F(t,e,n,l,s,r,u,o=[-1]){const i=ve;le(t);const f=t.$$={fragment:null,ctx:[],props:r,update:S,not_equal:s,bound:we(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(i?i.$$.context:[])),callbacks:we(),dirty:o,skip_bound:!1,root:e.target||i.$$.root};u&&u(f.root);let a=!1;if(f.ctx=n?n(t,e.props||{},(c,h,..._)=>{const m=_.length?_[0]:h;return f.ctx&&s(f.ctx[c],f.ctx[c]=m)&&(!f.skip_bound&&f.bound[c]&&f.bound[c](m),a&&Ze(t,c)),h}):[],f.update(),a=!0,K(f.before_update),f.fragment=l?l(f.ctx):!1,e.target){if(e.hydrate){const c=Je(e.target);f.fragment&&f.fragment.l(c),c.forEach(w)}else f.fragment&&f.fragment.c();e.intro&&M(t.$$.fragment),j(t,e.target,e.anchor,e.customElement),ze()}le(i)}class V{$destroy(){P(this,1),this.$destroy=S}$on(e,n){if(!ge(n))return S;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const s=l.indexOf(n);s!==-1&&l.splice(s,1)}}$set(e){this.$$set&&!Ie(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const W=[];function he(t,e=S){let n;const l=new Set;function s(o){if(D(t,o)&&(t=o,n)){const i=!W.length;for(const f of l)f[1](),W.push(f,t);if(i){for(let f=0;f<W.length;f+=2)W[f][0](W[f+1]);W.length=0}}}function r(o){s(o(t))}function u(o,i=S){const f=[o,i];return l.add(f),l.size===1&&(n=e(s)||S),o(t),()=>{l.delete(f),l.size===0&&n&&(n(),n=null)}}return{set:s,update:r,subscribe:u}}class Re{getAllUsers(){return fetch("http://localhost:3030/api/users",{headers:{King:"king"}}).then(e=>e.json())}deleteUser(e){return fetch(`http://localhost:3030/api/users/${e}`,{method:"DELETE",headers:{King:"king"}}).then(n=>n.json())}createUser(e){return fetch("http://localhost:3030/api/signup",{method:"POST",body:JSON.stringify({email:e.email,password:e.password,role:e.role}),headers:{King:"king","Content-Type":"application/json"}}).then(n=>n.json())}modifyUser(e){return fetch(`http://localhost:3030/api/users/${e.id}`,{method:"PATCH",headers:{King:"king","Content-Type":"application/json"},body:JSON.stringify({role:e.role,email:e.email,password:e.password})}).then(n=>n.json())}}const ie=new Re;function $e(){const t=he(!1),e=he(!1),n=he(null);return{data:n,loading:t,error:e,getUsers:async()=>{t.set(!0),e.set(!1);try{const o=await ie.getAllUsers();n.set(o.users)}catch(o){console.error(o),e.set(o)}finally{t.set(!1)}},deleteUser:async o=>{t.set(!0),e.set(!1);try{const i=await ie.deleteUser(o);n.update(f=>f.filter(a=>a.id!==i.id))}catch(i){console.error(i),e.set(i)}finally{t.set(!1)}},modifyUser:async o=>{t.set(!0),e.set(!1);try{const i=await ie.modifyUser(o);n.update(f=>f.map(a=>a.id===i.id?o:a))}catch(i){console.error(i),e.set(i)}finally{t.set(!1)}},createUser:async o=>{t.set(!0),e.set(!1);try{const i=await ie.createUser(o);"token"in i&&n.update(f=>[...f,{...o,id:i.id}]),"message"in i&&console.error(i)}catch(i){console.error(i),e.set(i)}finally{t.set(!1)}}}}const be=$e();function xe(t){let e,n,l;return{c(){e=b("input"),p(e,"placeholder",t[1]),p(e,"type","text")},m(s,r){k(s,e,r),Y(e,t[0]),n||(l=T(e,"input",t[2]),n=!0)},p(s,[r]){r&2&&p(e,"placeholder",s[1]),r&1&&e.value!==s[0]&&Y(e,s[0])},i:S,o:S,d(s){s&&w(e),n=!1,l()}}}function et(t,e,n){let{value:l}=e,{placeholder:s=""}=e;function r(){l=this.value,n(0,l)}return t.$$set=u=>{"value"in u&&n(0,l=u.value),"placeholder"in u&&n(1,s=u.placeholder)},[l,s,r]}class He extends V{constructor(e){super(),F(this,e,et,xe,D,{value:0,placeholder:1})}}function tt(t){let e,n=t[4].svg+"",l,s,r,u;return{c(){e=De("svg"),p(e,"xmlns","http://www.w3.org/2000/svg"),p(e,"width",t[0]),p(e,"height",t[1]),p(e,"fill",t[2]),p(e,"class",l=Ce(t[6].class)+" svelte-x1letn"),p(e,"viewBox",s="0 0 "+t[5](t[0])+" "+t[5](t[1]))},m(o,i){k(o,e,i),e.innerHTML=n,r||(u=T(e,"click",function(){ge(t[3])&&t[3].apply(this,arguments)}),r=!0)},p(o,[i]){t=o,i&16&&n!==(n=t[4].svg+"")&&(e.innerHTML=n),i&1&&p(e,"width",t[0]),i&2&&p(e,"height",t[1]),i&4&&p(e,"fill",t[2]),i&64&&l!==(l=Ce(t[6].class)+" svelte-x1letn")&&p(e,"class",l),i&3&&s!==(s="0 0 "+t[5](t[0])+" "+t[5](t[1]))&&p(e,"viewBox",s)},i:S,o:S,d(o){o&&w(e),r=!1,u()}}}function nt(t,e,n){let l,{name:s}=e,{width:r="16px"}=e,{height:u="16px"}=e,{color:o="black"}=e,{clickHandler:i}=e,f=[{name:"eye-open",svg:'<path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/> <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>'},{name:"eye-closed",svg:'<path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/> <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"/>'}];const a=c=>c.includes("px")?+c.split("px")[0]:c.includes("rem")?+c.split("rem")[0]*16:16;return t.$$set=c=>{n(6,e=ye(ye({},e),ke(c))),"name"in c&&n(7,s=c.name),"width"in c&&n(0,r=c.width),"height"in c&&n(1,u=c.height),"color"in c&&n(2,o=c.color),"clickHandler"in c&&n(3,i=c.clickHandler)},t.$$.update=()=>{t.$$.dirty&128&&n(4,l=f.find(c=>c.name===s))},e=ke(e),[r,u,o,i,l,a,e,s]}class lt extends V{constructor(e){super(),F(this,e,nt,tt,D,{name:7,width:0,height:1,color:2,clickHandler:3})}}function st(t){let e,n,l,s,r,u,o,i,f,a;return o=new lt({props:{clickHandler:t[4],height:"1rem",width:"1rem",class:"eye",name:t[3]}}),{c(){e=b("div"),n=b("input"),l=A(),s=b("input"),u=A(),I(o.$$.fragment),p(n,"class","input svelte-k64xfh"),p(n,"placeholder",t[1]),p(n,"type","password"),n.hidden=t[2],p(s,"class","input svelte-k64xfh"),p(s,"placeholder",t[1]),p(s,"type","text"),s.hidden=r=!t[2],p(e,"class","password-inputs svelte-k64xfh")},m(c,h){k(c,e,h),v(e,n),Y(n,t[0]),v(e,l),v(e,s),Y(s,t[0]),v(e,u),j(o,e,null),i=!0,f||(a=[T(n,"input",t[5]),T(s,"input",t[6])],f=!0)},p(c,[h]){(!i||h&2)&&p(n,"placeholder",c[1]),(!i||h&4)&&(n.hidden=c[2]),h&1&&n.value!==c[0]&&Y(n,c[0]),(!i||h&2)&&p(s,"placeholder",c[1]),(!i||h&4&&r!==(r=!c[2]))&&(s.hidden=r),h&1&&s.value!==c[0]&&Y(s,c[0]);const _={};h&8&&(_.name=c[3]),o.$set(_)},i(c){i||(M(o.$$.fragment,c),i=!0)},o(c){q(o.$$.fragment,c),i=!1},d(c){c&&w(e),P(o),f=!1,K(a)}}}function it(t,e,n){let{value:l}=e,{placeholder:s=""}=e,r=!1,u="eye-open";const o=()=>{n(2,r=!r),i()},i=()=>{u=="eye-open"?n(3,u="eye-closed"):n(3,u="eye-open")};function f(){l=this.value,n(0,l)}function a(){l=this.value,n(0,l)}return t.$$set=c=>{"value"in c&&n(0,l=c.value),"placeholder"in c&&n(1,s=c.placeholder)},[l,s,r,u,o,f,a]}class Ne extends V{constructor(e){super(),F(this,e,it,st,D,{value:0,placeholder:1})}}function Ue(t,e,n){const l=t.slice();return l[5]=e[n],l[7]=n,l}function Oe(t){let e,n;return{c(){e=b("option"),n=x(t[1]),e.__value="",e.value=e.__value,e.disabled=!0,e.selected=!0},m(l,s){k(l,e,s),v(e,n)},p(l,s){s&2&&oe(n,l[1])},d(l){l&&w(e)}}}function Me(t){let e,n=t[5]+"",l;return{c(){e=b("option"),l=x(n),e.__value=t[7],e.value=e.__value},m(s,r){k(s,e,r),v(e,l)},p(s,r){r&4&&n!==(n=s[5]+"")&&oe(l,n)},d(s){s&&w(e)}}}function rt(t){let e,n,l,s,r=!!t[1]&&Oe(t),u=t[2],o=[];for(let i=0;i<u.length;i+=1)o[i]=Me(Ue(t,u,i));return{c(){e=b("select"),r&&r.c(),n=fe();for(let i=0;i<o.length;i+=1)o[i].c();t[0]===void 0&&ue(()=>t[4].call(e))},m(i,f){k(i,e,f),r&&r.m(e,null),v(e,n);for(let a=0;a<o.length;a+=1)o[a]&&o[a].m(e,null);Se(e,t[0],!0),l||(s=T(e,"change",t[4]),l=!0)},p(i,[f]){if(i[1]?r?r.p(i,f):(r=Oe(i),r.c(),r.m(e,n)):r&&(r.d(1),r=null),f&4){u=i[2];let a;for(a=0;a<u.length;a+=1){const c=Ue(i,u,a);o[a]?o[a].p(c,f):(o[a]=Me(c),o[a].c(),o[a].m(e,null))}for(;a<o.length;a+=1)o[a].d(1);o.length=u.length}f&1&&Se(e,i[0])},i:S,o:S,d(i){i&&w(e),r&&r.d(),Ke(o,i),l=!1,s()}}}function ot(t,e,n){let{placeholder:l=""}=e,{options:s}=e,{value:r}=e,{index:u=s.indexOf(r)}=e;function o(){u=Fe(this),n(0,u)}return t.$$set=i=>{"placeholder"in i&&n(1,l=i.placeholder),"options"in i&&n(2,s=i.options),"value"in i&&n(3,r=i.value),"index"in i&&n(0,u=i.index)},t.$$.update=()=>{t.$$.dirty&5&&n(3,r=s[u])},[u,l,s,r,o]}class Te extends V{constructor(e){super(),F(this,e,ot,rt,D,{placeholder:1,options:2,value:3,index:0})}}function ut(t){let e,n,l,s,r,u,o,i,f,a,c,h;return{c(){e=b("div"),n=x(t[1]),l=A(),s=b("div"),r=x(t[0]),u=A(),o=b("div"),o.textContent="············",i=A(),f=b("div"),a=b("button"),a.textContent="Edit",p(a,"class","button svelte-2b0qx2"),p(f,"class","buttons svelte-2b0qx2")},m(_,m){k(_,e,m),v(e,n),k(_,l,m),k(_,s,m),v(s,r),k(_,u,m),k(_,o,m),k(_,i,m),k(_,f,m),v(f,a),c||(h=T(a,"click",t[5]),c=!0)},p(_,m){m&2&&oe(n,_[1]),m&1&&oe(r,_[0])},i:S,o:S,d(_){_&&w(e),_&&w(l),_&&w(s),_&&w(u),_&&w(o),_&&w(i),_&&w(f),c=!1,h()}}}function ft(t){let e,n,l,s,r,u,o,i,f,a,c,h,_,m,g,E,U,L;function B(d){t[9](d)}let y={};t[1]!==void 0&&(y.value=t[1]),e=new He({props:y}),J.push(()=>$(e,"value",B));function H(d){t[10](d)}let N={options:t[4]};t[0]!==void 0&&(N.value=t[0]),s=new Te({props:N}),J.push(()=>$(s,"value",H));function C(d){t[11](d)}let z={placeholder:"Change password"};return t[2]!==void 0&&(z.value=t[2]),o=new Ne({props:z}),J.push(()=>$(o,"value",C)),{c(){I(e.$$.fragment),l=A(),I(s.$$.fragment),u=A(),I(o.$$.fragment),f=A(),a=b("div"),c=b("button"),c.textContent="Save",h=A(),_=b("button"),_.textContent="Cancel",m=A(),g=b("button"),g.textContent="Delete",p(c,"class","button save svelte-2b0qx2"),p(_,"class","button svelte-2b0qx2"),p(g,"class","button delete svelte-2b0qx2"),p(a,"class","buttons svelte-2b0qx2")},m(d,O){j(e,d,O),k(d,l,O),j(s,d,O),k(d,u,O),j(o,d,O),k(d,f,O),k(d,a,O),v(a,c),v(a,h),v(a,_),v(a,m),v(a,g),E=!0,U||(L=[T(c,"click",t[7]),T(_,"click",t[5]),T(g,"click",t[6])],U=!0)},p(d,O){const ee={};!n&&O&2&&(n=!0,ee.value=d[1],R(()=>n=!1)),e.$set(ee);const te={};!r&&O&1&&(r=!0,te.value=d[0],R(()=>r=!1)),s.$set(te);const ne={};!i&&O&4&&(i=!0,ne.value=d[2],R(()=>i=!1)),o.$set(ne)},i(d){E||(M(e.$$.fragment,d),M(s.$$.fragment,d),M(o.$$.fragment,d),E=!0)},o(d){q(e.$$.fragment,d),q(s.$$.fragment,d),q(o.$$.fragment,d),E=!1},d(d){P(e,d),d&&w(l),P(s,d),d&&w(u),P(o,d),d&&w(f),d&&w(a),U=!1,K(L)}}}function ct(t){let e,n,l,s;const r=[ft,ut],u=[];function o(i,f){return i[3]?0:1}return n=o(t),l=u[n]=r[n](t),{c(){e=b("div"),l.c(),p(e,"class","card svelte-2b0qx2")},m(i,f){k(i,e,f),u[n].m(e,null),s=!0},p(i,[f]){let a=n;n=o(i),n===a?u[n].p(i,f):(ce(),q(u[a],1,1,()=>{u[a]=null}),ae(),l=u[n],l?l.p(i,f):(l=u[n]=r[n](i),l.c()),M(l,1),l.m(e,null))},i(i){s||(M(l),s=!0)},o(i){q(l),s=!1},d(i){i&&w(e),u[n].d()}}}function at(t,e,n){let{user:l}=e,s=["Admin","Salesman","Trainee","Operator"],r=l.role,u=l.email,o="",i=!1;const f=()=>{n(3,i=!i)},{deleteUser:a,modifyUser:c}=be,h=async()=>{await a(l.id),f()},_=async()=>{await c({id:l.id,email:u,role:r,password:o}),f()};function m(U){u=U,n(1,u)}function g(U){r=U,n(0,r)}function E(U){o=U,n(2,o)}return t.$$set=U=>{"user"in U&&n(8,l=U.user)},[r,u,o,i,s,f,h,_,l,m,g,E]}class dt extends V{constructor(e){super(),F(this,e,at,ct,D,{user:8})}}const _t="/assets/bpi-logo-350a9bab.png";function ht(t){let e,n,l;return{c(){e=b("header"),n=b("img"),Pe(n.src,l=_t)||p(n,"src",l),p(n,"height",80),p(n,"class","logo svelte-1i1ltby"),p(n,"alt","bpi france Logo")},m(s,r){k(s,e,r),v(e,n)},p:S,i:S,o:S,d(s){s&&w(e)}}}class pt extends V{constructor(e){super(),F(this,e,null,ht,D,{})}}var je=(t=>(t.admin="Admin",t.salesman="Salesman",t.trainee="Trainee",t.operator="Operator",t))(je||{});function Ee(t){let e,n,l,s,r,u,o,i,f,a,c,h,_,m,g,E,U,L;function B(d){t[7](d)}let y={placeholder:"Email"};t[1]!==void 0&&(y.value=t[1]),u=new He({props:y}),J.push(()=>$(u,"value",B));function H(d){t[8](d)}let N={placeholder:"Password"};t[2]!==void 0&&(N.value=t[2]),f=new Ne({props:N}),J.push(()=>$(f,"value",H));function C(d){t[9](d)}let z={placeholder:"Roles",options:Object.values(je)};return t[3]!==void 0&&(z.value=t[3]),h=new Te({props:z}),J.push(()=>$(h,"value",C)),{c(){e=b("div"),n=b("div"),l=b("h2"),l.textContent="Create user",s=A(),r=b("div"),I(u.$$.fragment),i=A(),I(f.$$.fragment),c=A(),I(h.$$.fragment),m=A(),g=b("button"),g.textContent="Create",p(r,"class","inputs svelte-1ezh5ls"),p(g,"class","button svelte-1ezh5ls"),p(n,"class","modal-content svelte-1ezh5ls"),p(e,"tabindex","-1"),p(e,"class","modal-container svelte-1ezh5ls")},m(d,O){k(d,e,O),v(e,n),v(n,l),v(n,s),v(n,r),j(u,r,null),v(r,i),j(f,r,null),v(r,c),j(h,r,null),v(n,m),v(n,g),E=!0,U||(L=[T(g,"click",t[5]),T(e,"keyup",t[4]),T(e,"click",t[4])],U=!0)},p(d,O){const ee={};!o&&O&2&&(o=!0,ee.value=d[1],R(()=>o=!1)),u.$set(ee);const te={};!a&&O&4&&(a=!0,te.value=d[2],R(()=>a=!1)),f.$set(te);const ne={};!_&&O&8&&(_=!0,ne.value=d[3],R(()=>_=!1)),h.$set(ne)},i(d){E||(M(u.$$.fragment,d),M(f.$$.fragment,d),M(h.$$.fragment,d),E=!0)},o(d){q(u.$$.fragment,d),q(f.$$.fragment,d),q(h.$$.fragment,d),E=!1},d(d){d&&w(e),P(u),P(f),P(h),U=!1,K(L)}}}function mt(t){let e,n,l=t[0]&&Ee(t);return{c(){l&&l.c(),e=fe()},m(s,r){l&&l.m(s,r),k(s,e,r),n=!0},p(s,[r]){s[0]?l?(l.p(s,r),r&1&&M(l,1)):(l=Ee(s),l.c(),M(l,1),l.m(e.parentNode,e)):l&&(ce(),q(l,1,1,()=>{l=null}),ae())},i(s){n||(M(l),n=!0)},o(s){q(l),n=!1},d(s){l&&l.d(s),s&&w(e)}}}function gt(t,e,n){let{isOpen:l=!1}=e,{handleModal:s}=e,r,u,o;const{createUser:i}=be,f=g=>{"key"in g?g.key==="Escape"&&s():g.target.classList.contains("modal-container")&&s()},a=()=>{n(2,u=""),n(1,r="")},c=async()=>{r===""||u===""||(u==null?void 0:u.length)<6||(await i({email:r,role:o,password:u}),a(),s())};function h(g){r=g,n(1,r)}function _(g){u=g,n(2,u)}function m(g){o=g,n(3,o)}return t.$$set=g=>{"isOpen"in g&&n(0,l=g.isOpen),"handleModal"in g&&n(6,s=g.handleModal)},[l,r,u,o,f,c,s,h,_,m]}class vt extends V{constructor(e){super(),F(this,e,gt,mt,D,{isOpen:0,handleModal:6})}}function Le(t,e,n){const l=t.slice();return l[9]=e[n],l}function bt(t){let e=[],n=new Map,l,s,r=t[3];const u=o=>o[9].id;for(let o=0;o<r.length;o+=1){let i=Le(t,r,o),f=u(i);n.set(f,e[o]=Ae(f,i))}return{c(){for(let o=0;o<e.length;o+=1)e[o].c();l=fe()},m(o,i){for(let f=0;f<e.length;f+=1)e[f]&&e[f].m(o,i);k(o,l,i),s=!0},p(o,i){i&8&&(r=o[3],ce(),e=Ye(e,i,u,1,o,r,n,l.parentNode,Xe,Ae,l,Le),ae())},i(o){if(!s){for(let i=0;i<r.length;i+=1)M(e[i]);s=!0}},o(o){for(let i=0;i<e.length;i+=1)q(e[i]);s=!1},d(o){for(let i=0;i<e.length;i+=1)e[i].d(o);o&&w(l)}}}function yt(t){let e;return{c(){e=b("div"),e.textContent="Error..."},m(n,l){k(n,e,l)},p:S,i:S,o:S,d(n){n&&w(e)}}}function wt(t){let e;return{c(){e=b("div"),e.textContent="Loading..."},m(n,l){k(n,e,l)},p:S,i:S,o:S,d(n){n&&w(e)}}}function Ae(t,e){let n,l,s;return l=new dt({props:{user:e[9]}}),{key:t,first:null,c(){n=fe(),I(l.$$.fragment),this.first=n},m(r,u){k(r,n,u),j(l,r,u),s=!0},p(r,u){e=r;const o={};u&8&&(o.user=e[9]),l.$set(o)},i(r){s||(M(l.$$.fragment,r),s=!0)},o(r){q(l.$$.fragment,r),s=!1},d(r){r&&w(n),P(l,r)}}}function kt(t){let e,n,l,s,r,u,o,i,f,a,c,h,_,m,g,E;n=new pt({});const U=[wt,yt,bt],L=[];function B(y,H){return y[1]?0:y[2]?1:y[3]?2:-1}return~(a=B(t))&&(c=L[a]=U[a](t)),_=new vt({props:{handleModal:t[7],isOpen:t[0]}}),{c(){e=b("main"),I(n.$$.fragment),l=A(),s=b("div"),r=b("h1"),r.textContent="User management",u=A(),o=b("button"),o.innerHTML=`Add user
      <div title="add a new user" class="add-icon svelte-hci2y7"></div>`,i=A(),f=b("div"),c&&c.c(),h=A(),I(_.$$.fragment),p(o,"class","add-button svelte-hci2y7"),p(s,"class","title svelte-hci2y7"),p(f,"class","cards svelte-hci2y7"),p(e,"class","main-page")},m(y,H){k(y,e,H),j(n,e,null),v(e,l),v(e,s),v(s,r),v(s,u),v(s,o),v(e,i),v(e,f),~a&&L[a].m(f,null),v(e,h),j(_,e,null),m=!0,g||(E=T(o,"click",t[7]),g=!0)},p(y,[H]){let N=a;a=B(y),a===N?~a&&L[a].p(y,H):(c&&(ce(),q(L[N],1,1,()=>{L[N]=null}),ae()),~a?(c=L[a],c?c.p(y,H):(c=L[a]=U[a](y),c.c()),M(c,1),c.m(f,null)):c=null);const C={};H&1&&(C.isOpen=y[0]),_.$set(C)},i(y){m||(M(n.$$.fragment,y),M(c),M(_.$$.fragment,y),m=!0)},o(y){q(n.$$.fragment,y),q(c),q(_.$$.fragment,y),m=!1},d(y){y&&w(e),P(n),~a&&L[a].d(),P(_),g=!1,E()}}}function Ct(t,e,n){let l,s,r,u=!1;const{data:o,loading:i,error:f,getUsers:a}=be;return de(t,o,h=>n(3,r=h)),de(t,i,h=>n(1,l=h)),de(t,f,h=>n(2,s=h)),a(),[u,l,s,r,o,i,f,()=>{n(0,u=!u)}]}class St extends V{constructor(e){super(),F(this,e,Ct,kt,D,{})}}new St({target:document.getElementById("app")});
