(this["webpackJsonpreact-game"]=this["webpackJsonpreact-game"]||[]).push([[0],{51:function(n,e,t){},60:function(n,e,t){},61:function(n,e,t){"use strict";t.r(e);var r,i,o,a,c,s,l,u,d,b,p=t(0),x=t.n(p),f=t(11),j=t.n(f),h=(t(51),t(22)),m=t.n(h),O=t(13),g=t(9),v=t(29),y=t(6),w=t(33),S=t(82),k=t(3),z=t(4),C=t(1),E=z.a.main(r||(r=Object(k.a)(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n"]))),D=z.a.div(i||(i=Object(k.a)(["\n  min-height: 600px;\n  width: 600px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),I=function(n){var e=n.children;return Object(C.jsx)(E,{children:Object(C.jsx)(D,{children:e})})},M=function(n){if(0===n)return"transparent";var e=Math.min(16,Math.log2(n));return"hsl(0, ".concat(function(n){return Math.floor(6.25*n)}(e),"%, ").concat(function(n){return 100-Math.floor(3.125*n)}(e),"%);")},N=z.a.div(o||(o=Object(k.a)(["\n  width: 475px;\n  height: 475px;\n  position: relative;\n"]))),A=z.a.div(a||(a=Object(k.a)(["\n  padding: 5px;\n  width: 450px;\n  height: 450px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-content: space-between;\n  background-color: #bbada0;\n  border-radius: 10px;\n  position: absolute;\n"]))),V=Object(z.a)(A)(c||(c=Object(k.a)(["\n  background-color: transparent;\n"]))),F=z.a.div(s||(s=Object(k.a)(["\n  margin: 5px;\n  height: 100px;\n  width: 100px;\n  border-radius: 5px;\n  background-color: rgba(238, 228, 218, 0.35);\n"]))),L=Object(z.a)(F)(l||(l=Object(k.a)(["\n  transform: translate(","px, ","px);\n  text-align: center;\n  line-height: 100px;\n  background-color: ",";\n  position: absolute;\n  transition-property: transform;\n  transition: 100ms ease-in-out;\n  color: #6a4e4e;\n  font-weight: 900;\n  font-size: ","px;\n  z-index: ",";\n"])),(function(n){return 110*n.x}),(function(n){return 110*n.y}),(function(n){var e=n.value;return M(e)}),(function(n){var e=n.value;return e<100?66:e<1e3?47:e<1e4?40:30}),(function(n){var e=n.state;return"init"===e?1:"del"===e?0:"move"===e?2:3})),P=function(n){var e=n.cells;return Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)(N,{children:[Object(C.jsx)(A,{children:Array.from(new Array(16),(function(n,e){return e})).map((function(n){return Object(C.jsx)(F,{},n)}))}),Object(C.jsx)(V,{children:e.map((function(n){var e=n.x,t=n.y,r=n.value,i=n.id,o=n.state;return Object(C.jsx)(L,{x:e,y:t,value:r+1,state:o,children:r},i)}))})]})})},B=z.a.div(u||(u=Object(k.a)(["\n  margin-top: 8px;\n  padding: 15px ",";\n  height: 60px;\n  font-size: 25px;\n  font-weight: 700;\n  line-height: 47px;\n  position: relative;\n  display: inline-block;\n  background: #bbada0;\n  border-radius: 3px;\n  color: #fff;\n  text-align: center;\n\n    &::after {\n      content: '","';\n      position: absolute;\n      width: 100%;\n      top: 10px;\n      left: 0;\n      text-transform: uppercase;\n      font-size: 13px;\n      line-height: 13px;\n      text-align: center;\n      color: #eee4da;\n    }\n"])),(function(n){return"score"===n.text?"25px":"30px"}),(function(n){return n.text})),R=function(n){var e=n.text,t=n.children;return Object(C.jsx)(B,{text:e,children:t})},J=z.a.button(d||(d=Object(k.a)(["\n  padding: 10px 20px;\n  font-size: 16px;\n  font-weight: 500;\n  text-transform: capitalize;\n  white-space: nowrap;\n  align-items: center;\n  background-color: brown;\n  border-radius: 5px;\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  outline: none;\n  \n  &:hover {\n    transform: scale(1.1);\n  }\n"]))),K=z.a.div(b||(b=Object(k.a)(["\n  padding: 20px 0;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n"]))),T=function(n){var e=n.children;return Object(C.jsx)(K,{children:e})},G="init",W="move",H="del",U="increase",$=function(n,e,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:Math.random().toString(36).substr(2,9);return{x:n,y:e,value:t,id:r,state:G,by:null}},_=function(){return Math.floor(3.9*Math.random())};var q,Q,X,Y,Z,nn,en,tn,rn,on=function(n){return new Promise((function(e){return setTimeout(e,n)}))},an=function(){var n=$(_(),_(),2),e=$(_(),_(),2);return n.x===e.x&&n.y===e.y&&(n.x=0===n.x?1:n.x-1),[n,e]},cn=t(56),sn="UP",ln="DOWN",un="LEFT",dn="RIGHT",bn=function(n,e,t){for(var r=t-1,i=t;r>=0;){if(0===n[r][e])n[r][e]=n[i][e],n[i][e].state=W,n[i][e]=0,i=r;else{if(n[r][e].value!==n[i][e].value||n[r][e].state!==G&&n[r][e].state!==W)break;n[r][e].state=H,n[r][e].by=n[i][e],n[i][e].state=U,n[r][e]=n[i][e],n[i][e]=0,i=r}r-=1}},pn=function(n,e){var t=n.map((function(n){return JSON.parse(JSON.stringify(n))})),r=Array.from(new Array(4),(function(){return Array.from(new Array(4),(function(){return 0}))}));t.forEach((function(n){return r[n.y][n.x]=n})),function(n,e){switch(e){case un:cn(n);break;case ln:cn(n),cn(n);break;case dn:cn(n),cn(n),cn(n)}}(r,e);for(var i=0;i<4;i+=1)for(var o=0;o<4;o+=1)0!==r[i][o]&&bn(r,o,i);!function(n,e){switch(e){case un:cn(n),cn(n),cn(n);break;case ln:cn(n),cn(n);break;case dn:cn(n)}}(r,e);for(var a=0;a<4;a+=1)for(var c=0;c<4;c+=1)0!==r[a][c]&&"object"===typeof r[a][c]&&(r[a][c].y=a,r[a][c].x=c);return t.filter((function(n){return null!==n.by})).forEach((function(n){n.x=n.by.x,n.y=n.by.y,delete n.by})),t},xn=function(n,e){return{cells:n.filter((function(n){return n.state!==H})).map((function(n){return n.state===U&&(e((function(e){return e+n.value})),n.value*=2),n.state=G,n}))}},fn=function(n){var e,t,r=new Set;if(n.forEach((function(n){return r.add(4*n.x+n.y)})),16===r.size)return Object(O.a)(n);var i=r.size;do{var o=4*(e=_())+(t=_());r.add(o)}while(i===r.size);return[].concat(Object(O.a)(n),[$(e,t,2)])},jn=z.a.div(q||(q=Object(k.a)(["\n  margin-bottom: 20px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),hn=function(n){var e=n.children;return Object(C.jsx)(jn,{children:e})},mn=z.a.h1(Q||(Q=Object(k.a)(["\n  margin: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 74px;\n  line-height: 66px;\n  font-weight: 700;\n"]))),On=z.a.a(X||(X=Object(k.a)(["\n  color: #776e65;\n  font-weight: 700;\n  text-decoration: none;\n  cursor: pointer;\n"]))),gn=function(n){var e=n.text;return Object(C.jsx)(mn,{children:Object(C.jsx)(On,{href:"/",children:e})})},vn=z.a.div(Y||(Y=Object(k.a)(["\n  width: 250px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),yn=function(n){var e=n.children;return Object(C.jsx)(vn,{children:e})},wn=z.a.div(Z||(Z=Object(k.a)(["\n  margin-right: 20px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n"]))),Sn=z.a.h2(nn||(nn=Object(k.a)(["\n  margin: 0;  \n  font-size: 1em;\n"]))),kn=z.a.p(en||(en=Object(k.a)(["\n  line-height: 1.45;\n"]))),zn=function(){return Object(C.jsxs)(wn,{children:[Object(C.jsxs)(Sn,{children:["Play",Object(C.jsx)("strong",{children:"2048 Game"}),"Online"]}),Object(C.jsxs)(kn,{children:["Join the numbers and get to the",Object(C.jsx)("strong",{children:" 2048 tile!"})]})]})},Cn=z.a.p(tn||(tn=Object(k.a)(["\n  margin-top: 20px;\n  width: 450px;\n  margin-bottom: 20px;\n  text-align: justify;\n"]))),En=function(){return Object(C.jsxs)(Cn,{children:[Object(C.jsx)("strong",{children:"How to play: "}),"Use your",Object(C.jsx)("strong",{children:" arrow keys "}),"to move the tiles. When two tiles with the same number touch, they",Object(C.jsx)("strong",{children:" merge into one!"})]})},Dn=z.a.div(rn||(rn=Object(k.a)(["\n  position: absolute;\n  right: 30px;\n  // top: 25px;\n  color: red;\n  font-size: 25px;\n  line-height: 25px;\n  font-weight: 700;\n  color: rgba(119, 110, 101, .9);\n  z-index: 10;\n  animation: move-up 300ms ease-in;\n  animation-fill-mode: both;\n\n  @keyframes move-up {\n    0% {\n      top: 25px;\n      opacity: 1;\n    }\n\n    100% {\n      top: -50px;\n      opacity: 0;\n    }\n  }\n"])));function In(){return(In=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function Mn(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var Nn=p.createElement("g",{fillRule:"evenodd"},p.createElement("path",{d:"M8 6.743L14.483.26a.889.889 0 1 1 1.257 1.257L9.257 8l6.483 6.483a.889.889 0 1 1-1.257 1.257L8 9.257 1.517 15.74A.889.889 0 0 1 .26 14.483L6.743 8 .26 1.517A.889.889 0 1 1 1.517.26L8 6.743z"}));function An(n,e){var t=n.title,r=n.titleId,i=Mn(n,["title","titleId"]);return p.createElement("svg",In({name:"closePopup",width:16,height:16,viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},i),t?p.createElement("title",{id:r},t):null,Nn)}var Vn,Fn,Ln,Pn,Bn,Rn,Jn,Kn,Tn,Gn,Wn,Hn,Un=p.forwardRef(An),$n=(t.p,z.a.input(Vn||(Vn=Object(k.a)(['\n  display: none;\n\n  &:checked ~ [for="#switcher"]:after {\n    left: 65px;\n  }\n'])))),_n=z.a.label(Fn||(Fn=Object(k.a)(['\n  position: relative;\n  width: 100px;\n  height: 10px;\n  padding: 18px 18px;\n  display: flex;\n  align-items: center;\n  font-size: 16px;\n  line-height: 1.5;\n  opacity: 1;\n  border: 3px solid #4C422D;\n  border-radius: 20px;\n  box-shadow: inset 0px 0px 1px 2px #f9cb0e;\n  background: #010810;\n  color: #fff;\n  text-shadow: 1px 1px 0px rgba(255,255,255,.15);\n  cursor: pointer;\n\n  &:before {\n    content: "OFF";\n    position: absolute;\n    top: 8px;\n    right: 12px;\n    color: #fff;\n    font-size: 14px;\n  }\n\n  &:after {\n    content: "";\n    position: absolute;\n    left: 17px;\n    top: 3px;\n    display: block;\n    width: 30px;\n    height: 30px;\n    border-radius: 50px;\n    background: #FCDC0B linear-gradient(#FCDC0B 0%, #EEAA23 40%, #FCDC0B 100%);\n    transition: .5s;\n  }\n']))),qn=function(){var n=Object(p.useContext)(je).handlerToggleVolumeMusic;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)($n,{type:"checkbox",id:"switcher"}),Object(C.jsx)(_n,{htmlFor:"switcher",onClick:n,children:"ON"})]})},Qn=t(78),Xn=t(16),Yn=t(81),Zn=t(80),ne=Object(Qn.a)((function(n){return{root:{width:200+2*n.spacing(3)},margin:{height:n.spacing(3)}}})),ee=Object(Xn.a)({root:{color:"#52af77",height:8},thumb:{height:24,width:24,backgroundColor:"#fff",border:"2px solid currentColor",marginTop:-8,marginLeft:-12,"&:focus, &:hover, &$active":{boxShadow:"inherit"}},active:{},valueLabel:{left:"calc(-50% + 4px)"},track:{height:8,borderRadius:4},rail:{height:8,borderRadius:4}})(Yn.a),te=function(n){var e=n.text,t=n.id,r=n.value,i=n.callback,o=ne(),a=Object(p.useState)(r),c=Object(y.a)(a,2),s=c[0],l=c[1];return Object(C.jsxs)("div",{className:o.root,children:[Object(C.jsx)(Zn.a,{gutterBottom:!0,children:e}),Object(C.jsx)(ee,{id:t,value:s,onChange:function(n,e){l(e),i(Number(e))},valueLabelDisplay:"auto","aria-label":"".concat(e," slider"),defaultValue:s,step:1,min:0,max:100}),Object(C.jsx)("div",{className:o.margin})]})},re=z.a.div(Ln||(Ln=Object(k.a)(["\n  display: block;\n  opacity: 1;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: #091D1B;\n  opacity: 0.9;\n  z-index: 12;\n  transition: all 200ms ease; \n"]))),ie=z.a.div(Pn||(Pn=Object(k.a)(["\n  width: 301px;\n  height: 100%;\n  position: fixed;\n  right: 0;\n  top: 0;\n  background: #010810;\n  opacity: 1;\n  border: 5px solid #4C422D;\n  border-radius: 10px;\n  box-shadow: inset 0px 0px 1px 4px #f9cb0e;\n  z-index: 13;\n  transition: all 200ms ease; \n\n  @media only screen and (min-width: 0) and (max-width: 510px) {\n    width: 301px;\n  }\n"]))),oe=z.a.div(Bn||(Bn=Object(k.a)(["\n  height: 100%;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  box-sizing: border-box;\n  font-family: system-ui;\n  color: #D1B445;\n"]))),ae=z.a.div(Rn||(Rn=Object(k.a)(["\n  padding: 24px 50px 21px;\n  height: 96px;\n  width: 100%;\n  // border-bottom: 5px solid #bbada0;\n  text-align: center;\n"]))),ce=z.a.div(Jn||(Jn=Object(k.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  font-size: 24px;\n  line-height: 32px;\n"]))),se=z.a.div(Kn||(Kn=Object(k.a)(["\n  padding: 10px;\n  display: flex;\n  left: -36px;\n  align-items: center;\n  font-size: 10px;\n  position: absolute;\n  z-index: 1;\n  cursor: pointer;\n\n  & svg {\n    fill: #D1B445;\n  }\n\n  & svg:hover {\n    fill: #ff1446;\n  }\n"]))),le=z.a.div(Tn||(Tn=Object(k.a)(["\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]))),ue=z.a.div(Gn||(Gn=Object(k.a)(["\n  position: relative;\n  padding: 16px 16px 40px;\n  // border-bottom: 5px solid #bbada0;\n"]))),de=z.a.span(Wn||(Wn=Object(k.a)(["\n  display: inline-block;\n  margin-bottom: 10px;\n  padding: 5px 50px;\n  position: relative;\n  border-radius: 20px;\n  border: 3px solid #4C422D;\n  box-shadow: inset 0px 0px 1px 2px #f9cb0e;\n  color: #fff;\n  transition: all 200ms ease;\n  cursor: pointer;\n\n  &:before {\n    content: '';\n    position: absolute;\n    top: 7px;\n    left: 10px;\n    border: 10px solid #f9cb0e;\n    border-radius: 50%;\n  }\n    \n  &:hover {\n    transform: scale(1.1);\n    background-color: #0F0D0E;\n  } \n"]))),be=function(n){var e=n.closeMenu,t=Object(p.useContext)(je),r=t.setMusicVolume,i=t.setAudioVolume,o=t.musicVolume,a=t.audioVolume;return Object(C.jsx)(re,{children:Object(C.jsx)(ie,{children:Object(C.jsxs)(oe,{children:[Object(C.jsx)(ae,{children:Object(C.jsxs)(ce,{children:[Object(C.jsx)(se,{onClick:e,children:Object(C.jsx)(Un,{})}),Object(C.jsx)(le,{children:"Menu"})]})}),Object(C.jsxs)(ue,{children:[Object(C.jsx)(de,{children:"Music"}),Object(C.jsx)(te,{id:"music",text:"music",callback:function(n){r(Number(n)),localStorage.setItem("musicVolume","".concat(n))},value:o})]}),Object(C.jsxs)(ue,{children:[Object(C.jsx)(de,{children:"Sound"}),Object(C.jsx)(te,{id:"audio",text:"sound",callback:function(n){i(Number(n)),localStorage.setItem("audioVolume","".concat(n))},value:a})]}),Object(C.jsx)(ue,{children:Object(C.jsx)(qn,{})})]})})})},pe=z.a.button(Hn||(Hn=Object(k.a)(["\n  padding: 10px 20px;\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  font-size: 16px;\n  font-weight: 500;\n  text-transform: capitalize;\n  white-space: nowrap;\n  align-items: center;\n  background-color: #ccc;\n  border-radius: 5px;\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  outline: none;\n  transition: all 200ms ease;\n  \n  &:hover {\n    transform: scale(1.1);\n  }\n"]))),xe=(t(60),"IDLE"),fe="PROCESSING",je=Object(p.createContext)({}),he=function(){var n=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=e;return localStorage.getItem(n)&&(t=Number(localStorage.getItem(n))),t},e=Object(p.useState)(localStorage.getItem("mainState")?JSON.parse(String(localStorage.getItem("mainState"))):{cells:an(),gameState:xe,moveDirection:""}),t=Object(y.a)(e,2),r=t[0],i=t[1],o=Object(p.useState)(n("bestScore")),a=Object(y.a)(o,2),c=a[0],s=a[1],l=Object(p.useState)(n("mainScore")),u=Object(y.a)(l,2),d=u[0],b=u[1],x=Object(p.useState)(!1),f=Object(y.a)(x,2),j=f[0],h=f[1],k=Object(p.useState)(!1),z=Object(y.a)(k,2),E=z[0],D=z[1],M=Object(p.useState)(n("musicVolume",20)),N=Object(y.a)(M,2),A=N[0],V=N[1],F=Object(p.useState)(n("audioVolume",20)),L=Object(y.a)(F,2),B=L[0],K=L[1],G=Object(p.useState)(!1),W=Object(y.a)(G,2),H=W[0],U=W[1],$=Object(p.useRef)(null),_=Object(p.useRef)(new Audio("/move.mp3")),q=Object(w.a)("/music.mp3",{volume:A/100}),Q=Object(y.a)(q,2),X=Q[0],Y=Q[1],Z=Y.stop,nn=Y.sound;_.current.volume=B/100;var en={handlerToggleVolumeMusic:function(){U((function(n){return!n})),H?Z():(nn._loop=!0,X())},setMusicVolume:V,setAudioVolume:K,musicVolume:A,audioVolume:B},tn=function(){D((function(n){return!n}))},rn={KeyA:un,KeyD:dn,KeyW:sn,KeyS:ln},cn=function(){var n=Object(v.a)(m.a.mark((function n(){return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return _.current.play(),i((function(n){return Object(g.a)(Object(g.a)({},n),{},{cells:Object(O.a)(pn(n.cells,n.moveDirection))})})),n.next=4,on(150);case 4:i((function(n){var e=xn(n.cells,b).cells;return Object(g.a)(Object(g.a)({},n),{},{cells:e})})),i((function(n){return Object(g.a)(Object(g.a)({},n),{},{cells:Object(O.a)(fn(Object(O.a)(n.cells)))})})),i((function(n){var e=Object(g.a)(Object(g.a)({},n),{},{gameState:xe,moveDirection:""});return localStorage.setItem("mainState",JSON.stringify(e)),localStorage.setItem("mainScore",JSON.stringify(d)),e}));case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),bn=function(){var n=Object(v.a)(m.a.mark((function n(e){var t;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t=e.code,["KeyA","KeyD","KeyW","KeyS"].includes(t)&&i((function(n){return n.gameState===xe?Object(g.a)(Object(g.a)({},n),{},{gameState:fe,moveDirection:rn[t]}):n}));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(p.useEffect)((function(){return document.addEventListener("keydown",bn),function(){return document.removeEventListener("keydown",bn)}})),Object(p.useEffect)((function(){d>c&&(s(d),localStorage.setItem("bestScore","".concat(d)))}),[d,c]),Object(p.useEffect)((function(){h(!0)}),[d]),Object(p.useEffect)((function(){r.gameState===fe&&cn()}),[r.gameState]),Object(C.jsxs)(I,{children:[Object(C.jsx)(pe,{onClick:tn,children:"Menu"}),Object(C.jsxs)(hn,{children:[Object(C.jsx)(gn,{text:"2048"}),Object(C.jsxs)(yn,{children:[Object(C.jsxs)(R,{text:"score",children:[d,Object(C.jsx)(S.a,{nodeRef:$,in:j,timeout:200,unmountOnExit:!0,onEntered:function(){return h(!1)},children:function(n){return Object(C.jsx)(Dn,{ref:$,className:"alert ".concat(n),children:d})}})]}),Object(C.jsx)(R,{text:"best",children:c})]})]}),Object(C.jsxs)(T,{children:[Object(C.jsx)(zn,{}),Object(C.jsx)(J,{onClick:function(){localStorage.removeItem("mainState"),b(0),i({cells:an(),gameState:xe,moveDirection:""})},children:"New Game"})]}),Object(C.jsx)(P,{cells:r.cells}),Object(C.jsx)(En,{}),Object(C.jsx)(je.Provider,{value:en,children:E&&Object(C.jsx)(be,{closeMenu:tn})})]})},me=function(n){n&&n instanceof Function&&t.e(4).then(t.bind(null,85)).then((function(e){var t=e.getCLS,r=e.getFID,i=e.getFCP,o=e.getLCP,a=e.getTTFB;t(n),r(n),i(n),o(n),a(n)}))};j.a.render(Object(C.jsx)(x.a.StrictMode,{children:Object(C.jsx)(he,{})}),document.getElementById("root")),me()}},[[61,1,2]]]);
//# sourceMappingURL=main.0af5b185.chunk.js.map