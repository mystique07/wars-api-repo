(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){e.exports=n(34)},28:function(e,t,n){},29:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(20),c=n.n(r),o=(n(28),n(6)),i=n(7),s=n(9),u=n(8),p=n(10),m=n(13),h=n(5),f=(n(29),function(){return l.a.createElement("h2",null,"Home page")}),d=function(){return l.a.createElement("h2",null,"Error! Try again.")},E=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={planets:[]},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(" https://swapi.co/api/planets/").then(function(e){return e.json()}).then(function(t){return e.setState({planets:t.results})})}},{key:"render",value:function(){return l.a.createElement("ul",null,this.state.planets.map(function(e,t){var n=e.url.split("/")[5];return l.a.createElement("li",{key:t},l.a.createElement(m.c,{activeStyle:{fontWeight:"bold"},to:"/planets/".concat(n)},e.name))}))}}]),t}(a.Component),v=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={planet:{}},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.planetId,n=localStorage.getItem("planet-".concat(t));n?this.setState({planet:JSON.parse(n)}):fetch("https://swapi.co/api/planets/".concat(t)).then(function(e){return e.json()}).then(function(n){e.setState({planet:n}),localStorage.setItem("planet-".concat(t),JSON.stringify(n))})}},{key:"componentDidUpdate",value:function(e,t){var n=this;if(JSON.stringify(e.match.params.planetId)!==JSON.stringify(this.props.match.params.planetId)){var a=this.props.match.params.planetId,l=localStorage.getItem("planet-".concat(a));if(l)return void this.setState({planet:JSON.parse(l)});fetch("https://swapi.co/api/planets/".concat(a,"/")).then(function(e){return e.json()}).then(function(e){n.setState({planet:e}),localStorage.setItem("planet-".concat(a),JSON.stringify(e))})}}},{key:"render",value:function(){var e=this.state.planet;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("h3",null,"Name: ",e.name),l.a.createElement("p",null,"Diametre: ",e.diameter),l.a.createElement("p",null,"Rotation: ",e.rotation_period),l.a.createElement("p",null,"Orbital_Period: ",e.orbital_period),l.a.createElement("p",null,"Climat: ",e.climate)))}}]),t}(a.Component),O=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"Awesome Star-Wars Planets"),l.a.createElement(m.a,null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(m.b,{to:"/"},"Home"))),l.a.createElement("hr",null),l.a.createElement(E,null),l.a.createElement("hr",null),l.a.createElement(h.c,null,l.a.createElement(h.a,{exact:!0,path:"/",component:f}),l.a.createElement(h.a,{path:"/planets/:planetId",component:v}),l.a.createElement(h.a,{component:d})))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.5a4ecfe7.chunk.js.map