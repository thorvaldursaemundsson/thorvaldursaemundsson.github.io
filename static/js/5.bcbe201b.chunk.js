(this.webpackJsonpinfinitedarkness=this.webpackJsonpinfinitedarkness||[]).push([[5],{64:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n(20),r=n(19);function a(e,t){return!t||"object"!==Object(i.a)(t)&&"function"!==typeof t?Object(r.a)(e):t}},65:function(e,t,n){"use strict";function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return i}))},67:function(e,t,n){"use strict";function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}n.d(t,"a",(function(){return r}))},77:function(e,t,n){"use strict";n.r(t);var i=n(3),r=n(7),a=n(0),o=n.n(a),c=n(9),s=n(8),u=n(64),l=n(65),h=n(67),d=n(11);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}var g=function(e){var t=Object(a.useState)(!1),n=Object(r.a)(t,2),i=n[0],c=n[1];return!0===i?o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{onClick:function(){return c(!1)}},"View hexgrid"),o.a.createElement("br",null),o.a.createElement(p,{icons:e.initialIcons,onNext:function(e){}})):o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{onClick:function(){return c(!0)}},"View only sequencer"),o.a.createElement("br",null),o.a.createElement(x,{boardHeight:e.boardHeight,boardWidth:e.boardWidth,initialIcons:e.initialIcons}))},p=function(e){var t=e.icons,n=e.onNext,i=Object(a.useState)(0),c=Object(r.a)(i,2),s=c[0],u=c[1],l=Object(a.useState)(0),h=Object(r.a)(l,2),d=h[0],f=h[1],g=t.sort((function(e,t){return t.sequence-e.sequence})),p=t.length>=1?g[0].sequence:0,b=s+1,x=function(e){f(p),u(e),g.length>0&&n(g[0])},m=function(e){var t=g;for(var n in t){var i=t[n];i.id===e.id&&(i.currentLife=e.currentLife)}};return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{onClick:function(){return x(1)}},"Begin/restart"),o.a.createElement("h5",null,"Round ",s),o.a.createElement("ul",null,g.filter((function(e){return e.sequence<=d})).map((function(e){return o.a.createElement("li",{key:"bmsqeuencer_".concat(e.id)},o.a.createElement(v,{onChange:function(e){return m(e)},icon:e}),e.sequence===d?o.a.createElement("button",{onClick:function(){return function(){var e=g.filter((function(e){return e.sequence<d}));e.length>0?(f(e[0].sequence),n(e[0])):x(s+1)}()}},"Done"):null)}))),o.a.createElement("h5",null,"Round ",b),o.a.createElement("ul",null,g.filter((function(e){return e.sequence>d})).map((function(e){return o.a.createElement("li",{key:"bmsqeuencer_".concat(e.id)},o.a.createElement(v,{onChange:function(e){return m(e)},icon:e}))}))))},b={width:"60px"},v=function(e){var t=e.icon,n=e.onChange,i=Object(a.useState)(t.currentLife),c=Object(r.a)(i,2),s=c[0],u=c[1],l=Object(a.useState)(0),h=Object(r.a)(l,2),g=h[0],p=h[1],v=function(e){u(e),n(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{currentLife:e}))};return o.a.createElement(o.a.Fragment,null,t.symbol," (",t.sequence,")",o.a.createElement("input",{style:b,type:"text",title:"life",value:s,onChange:function(e){return v(parseInt(e.target.value))}})," / ",t.maxLife," |",o.a.createElement("input",{style:b,type:"text",title:"damage",value:g,onChange:function(e){return p(parseInt(e.target.value))}}),o.a.createElement("button",{onClick:function(){return v(s-g)}},"damage"))},x=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).mount=void 0,n.hexagonAngle=0,n.sideLength=25,n.hexHeight=0,n.hexRadius=0,n.hexRectangleHeight=0,n.hexRectangleWidth=0,n.state={outputData:":)",currentIcons:e.initialIcons,currentIconsTurns:void 0,hexes:[]},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.initializeBoard();var t=this.mount;if(null!==t&&void 0!==t){var n,i=!1,r=0,a=0,o=0,c=0;t.addEventListener("mousemove",(function(t){var r=e.mount;if(null!==r&&void 0!==r){var a=r.getBoundingClientRect(),s=t.clientX-a.left,u=t.clientY-a.top;o=Math.floor(u/(e.hexHeight+e.sideLength));var l=(c=Math.floor((s-o%2*e.hexRadius)/e.hexRectangleWidth))*e.hexRectangleWidth+o%2*e.hexRadius,h=o*(e.hexHeight+e.sideLength),d=r.getContext("2d");if(null===d)return;if(d.clearRect(0,0,2*e.props.boardWidth*e.sideLength,2*e.props.boardHeight*e.sideLength),d.fillStyle="#000000",d.strokeStyle="#666666",d.lineWidth=1,e.drawBoard(d,e.props.boardWidth,e.props.boardHeight),o>=0&&o<e.props.boardWidth&&c>=0&&c<e.props.boardHeight&&void 0!==d&&(d.strokeStyle="#FF0000",d.lineWidth=3,e.drawHexagon(d,l,h,!1),d.strokeStyle="#666666",d.lineWidth=1),void 0!==n&&void 0!==d)for(var f=0;f<e.props.boardWidth;++f)for(var g=0;g<e.props.boardHeight;++g)e.distanceBetweenPositions(f,g,n.startX,n.startY)<=n.speed&&(d.fillStyle="#9999FF",e.drawHexagon(d,f*e.hexRectangleWidth+g%2*e.hexRadius,g*(e.sideLength+e.hexHeight),!0));e.drawIconsOnBoard(d),i=!0}})),t.addEventListener("mousedown",(function(o){if(i=!1,null!==t&&void 0!==t){var c=t.getBoundingClientRect(),s=o.clientX-c.left,u=o.clientY-c.top;a=Math.floor(u/(e.hexHeight+e.sideLength)),r=Math.floor((s-a%2*e.hexRadius)/e.hexRectangleWidth),n=e.findIconAtHex(r,a)}})),t.addEventListener("mouseup",(function(){if(void 0!==n&&!0===i){var t=e.state.currentIcons;for(var r in t){var a=t[r];if(a.id===n.id){a.startY=o,a.startX=c;break}}e.setState({currentIcons:t}),e.initializeBoard()}n=void 0,i=!1})),t.addEventListener("mouseleave",(function(){n=void 0}))}}},{key:"distanceBetweenPositions",value:function(e,t,n,i){var r=Math.abs(e-n),a=Math.abs(t-i);if(0===a)return r;if(1===a)return r+1-a%2;var o=0-(e+Math.floor(.5*t+.5)),c=0-(n+Math.floor(.5*i+.5)),s=Math.abs(o-c);return r+Math.max(a,s)}},{key:"getIconPosition",value:function(e){return{x:2*this.hexRadius*(e.startX+.25)+e.startY%2*this.hexRectangleWidth/2,y:.75*this.hexRectangleHeight*(e.startY+0)+this.hexRectangleHeight/2}}},{key:"componentDidUpdate",value:function(){this.props.initialIcons.length!==this.state.currentIcons.length&&this.setState({currentIcons:this.props.initialIcons});var e=this.mount;null!==e&&void 0!==e&&(null!==e.getContext("2d")&&this.initializeBoard())}},{key:"initializeBoard",value:function(){this.setVariables();var e=this.mount;if(null!==e&&void 0!==e){var t=e.getContext("2d");if(null!==t)return t.clearRect(0,0,2*this.props.boardWidth*this.sideLength,2*this.props.boardHeight*this.sideLength),t.fillStyle="#000000",t.strokeStyle="#666666",t.lineWidth=1,this.drawBoard(t,this.props.boardWidth,this.props.boardHeight),this.drawIconsOnBoard(t),t}}},{key:"findIconAtHex",value:function(e,t){for(var n in this.state.currentIcons){var i=this.state.currentIcons[n],r=i.startX,a=i.startY;if(e===r&&t===a)return i}}},{key:"setVariables",value:function(){this.hexagonAngle=.523598776,this.hexHeight=Math.sin(this.hexagonAngle)*this.sideLength,this.hexRadius=Math.cos(this.hexagonAngle)*this.sideLength,this.hexRectangleHeight=this.sideLength+2*this.hexHeight,this.hexRectangleWidth=2*this.hexRadius}},{key:"drawIconsOnBoard",value:function(e){for(var t in this.state.currentIcons){var n=this.state.currentIcons[t],i=this.getIconPosition(n),r=i.x,a=i.y;void 0===this.state.currentIconsTurns||n.id===this.state.currentIconsTurns.id&&(e.fillStyle="red",this.drawHexagon(e,n.startX*this.hexRectangleWidth+n.startY%2*this.hexRadius,n.startY*(this.sideLength+this.hexHeight),!0)),e.font="11px arial",e.fillStyle="black",e.fillText("".concat(n.symbol),r,a)}}},{key:"convertXyToXYZ",value:function(e,t){return"".concat(e,";").concat(t,";").concat(0-(e+Math.floor(.5*t+.5)))}},{key:"drawBoard",value:function(e,t,n){for(var i=[],r=0;r<t;++r)for(var a=0;a<n;++a)i.push({x:r,y:a,z:1-(r+a)}),this.drawHexagon(e,r*this.hexRectangleWidth+a%2*this.hexRadius,a*(this.sideLength+this.hexHeight),!1,this.convertXyToXYZ(r,a))}},{key:"drawHexagon",value:function(e,t,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";e.beginPath(),e.moveTo(t+this.hexRadius,n),e.lineTo(t+this.hexRectangleWidth,n+this.hexHeight),e.lineTo(t+this.hexRectangleWidth,n+this.hexHeight+this.sideLength),e.lineTo(t+this.hexRadius,n+this.hexRectangleHeight),e.lineTo(t,n+this.sideLength+this.hexHeight),e.lineTo(t,n+this.hexHeight),e.closePath(),""!==r&&(e.fillStyle="#CCCCCC",e.fillText(r,t+this.hexRadius/2,n+1.5*this.hexRadius)),i&&e.fill(),e.stroke()}},{key:"render",value:function(){var e=this;return o.a.createElement("table",null,o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement("div",{style:{background:"white",width:"650px",height:"600px",overflow:"scroll"}},o.a.createElement("canvas",{height:this.props.boardHeight*this.sideLength*1.5,width:this.props.boardWidth*this.sideLength*1.8,onContextMenu:function(e){return e.preventDefault()},ref:function(t){return e.mount=t}}))),o.a.createElement("td",null,o.a.createElement(p,{icons:this.props.initialIcons,onNext:function(t){e.forceUpdate(),e.setState({currentIconsTurns:t})}})))))}}]),t}(o.a.Component),m={width:"60px"},y={width:"40px"},O="qwertyuiopasdfghjklzxcvbnm",j=function(){for(var e="",t=0;t<10;t++)e+=O[Math.floor(Math.random()*O.length)];return e};t.default=function(){var e=Object(a.useState)(18),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(15),u=Object(r.a)(s,2),l=u[0],h=u[1],d=Object(a.useState)(""),f=Object(r.a)(d,2),p=f[0],b=f[1],v=Object(a.useState)(0),x=Object(r.a)(v,2),O=x[0],E=x[1],w=Object(a.useState)(0),R=Object(r.a)(w,2),H=R[0],I=R[1],k=Object(a.useState)(0),C=Object(r.a)(k,2),L=C[0],S=C[1],W=Object(a.useState)([]),P=Object(r.a)(W,2),M=P[0],q=P[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{type:"text",title:"width",style:y,value:n,onChange:function(e){return c(parseInt(e.target.value))}}),o.a.createElement("input",{type:"text",title:"height",style:y,value:l,onChange:function(e){return h(parseInt(e.target.value))}})," |",o.a.createElement("input",{type:"text",title:"sequence",style:y,value:O,onChange:function(e){return E(parseInt(e.target.value))}}),o.a.createElement("input",{type:"text",title:"speed",style:y,value:H,onChange:function(e){return I(parseInt(e.target.value))}}),o.a.createElement("input",{type:"text",title:"life",style:y,value:L,onChange:function(e){return S(parseInt(e.target.value))}}),o.a.createElement("input",{type:"text",title:"add icon",style:m,value:p,onChange:function(e){return b(e.target.value)}}),o.a.createElement("button",{onClick:function(){return q([].concat(Object(i.a)(M),[{symbol:p,startX:M.length,startY:0,sequence:O,speed:H,id:j(),maxLife:L,currentLife:L}])),b(""),I(0),E(0),void S(0)}},"Add"),o.a.createElement("br",null),o.a.createElement(g,{initialIcons:M,boardHeight:l,boardWidth:n}))}}}]);
//# sourceMappingURL=5.bcbe201b.chunk.js.map