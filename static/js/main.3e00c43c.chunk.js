(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(53)},27:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),o=a.n(l),c=a(3),i=a(4),s=a(6),u=a(5),m=a(7),p=a(55),E=a(57),v=a(56),h=function(e){var t=e.branding;return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-success mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-brand"},t),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"})," Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"})," About")))))))},f=(a(27),a(29),a(20)),d=a.n(f),b=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={orgFormLines:[],formLines:[]},a.filterForm=function(e){var t=a.state.orgFormLines;!isNaN(e.runs)&&""!==e.runs&&e.runs>0&&(t=t.filter(function(t){return t.Runs>=e.runs})),!isNaN(e.wins)&&""!==e.wins&&e.wins>0&&(t=t.filter(function(t){return t.Wins>=e.wins})),!isNaN(e.placed)&&""!==e.placed&&e.placed>0&&(t=t.filter(function(t){return t.Placed>=e.placed})),!isNaN(e.winPercent)&&""!==e.winPercent&&e.winPercent>0&&(t=t.filter(function(t){return t.WinPercent>=e.winPercent})),!isNaN(e.placedPercent)&&""!==e.placedPercent&&e.placedPercent>0&&(t=t.filter(function(t){return t.PlacedPercent>=e.placedPercent})),!isNaN(e.winProfitLoss)&&""!==e.winProfitLoss&&e.winProfitLoss>-1e3&&(t=t.filter(function(t){return t.WinProfitLoss>=e.winProfitLoss})),!isNaN(e.placedProfitLoss)&&""!==e.placedProfitLoss&&e.placedProfitLoss>-1e3&&(t=t.filter(function(t){return t.PlacedProfitLoss>=e.placedProfitLoss})),!isNaN(e.AE)&&""!==e.AE&&e.AE>0&&(t=t.filter(function(t){return t.AE>=e.AE})),!isNaN(e.IV)&&""!==e.IV&&e.IV>0&&(t=t.filter(function(t){return t.IV>=e.IV})),a.setState({formLines:t})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.a.get("https://malstissue.azurewebsites.net/api/TrainerJockeyFormLines/Get14DayForm").then(function(t){return e.setState({orgFormLines:t.data,formLines:t.data})})}},{key:"render",value:function(){var e=this.state.formLines;return console.log("render ".concat(e.length)),r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("table",{className:"table table-striped table-sm table-bordered",style:{fontFamily:"Open Sans",fontSize:"0.95em"}},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Trainer"),r.a.createElement("th",null,"Jockey"),r.a.createElement("th",null,"Runs"),r.a.createElement("th",null,"Wins"),r.a.createElement("th",null,"Places"),r.a.createElement("th",null,"Win%"),r.a.createElement("th",null,"Place%"),r.a.createElement("th",null,"Win P/L"),r.a.createElement("th",null,"EW P/L"),r.a.createElement("th",null,"A/E"),r.a.createElement("th",null,"IV"))),r.a.createElement("tbody",null,e.map(function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.Trainer),r.a.createElement("td",null,e.Jockey),r.a.createElement("td",null,e.Runs),r.a.createElement("td",null,e.Wins),r.a.createElement("td",null,e.Placed),r.a.createElement("td",null,e.WinPercent),r.a.createElement("td",null,e.PlacedPercent),r.a.createElement("td",null,e.WinProfitLoss),r.a.createElement("td",null,e.PlacedProfitLoss),r.a.createElement("td",null,e.AE),r.a.createElement("td",null,e.IV))})))))}}]),t}(n.Component),g=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},a.onChange=function(e){e.preventDefault(),a.setState({value:e.target.value}),a.props.onChange(a.props.title,e.target.value)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.title;return r.a.createElement("label",{className:"pt-2 pb-3 px-1 mr-3",style:{fontWeight:"bold",fontFamily:"Open Sans",fontSize:"0.92em",border:"solid",borderWidth:"1px",borderColor:"#A8A8A8"}},e,r.a.createElement("br",null),r.a.createElement("select",{name:"from",onChange:this.onChange},r.a.createElement("option",{value:"0"},"0"),r.a.createElement("option",{value:"5"},"5"),r.a.createElement("option",{value:"10"},"10"),r.a.createElement("option",{value:"15"},"15"),r.a.createElement("option",{value:"20"},"20"),r.a.createElement("option",{value:"25"},"25"),r.a.createElement("option",{value:"50"},"50"),r.a.createElement("option",{value:"75"},"75"),r.a.createElement("option",{value:"100"},"100"),r.a.createElement("option",{value:"150"},"150"),r.a.createElement("option",{selected:!0,value:""},"Any")))}}]),t}(n.Component),y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},a.onChange=function(e){e.preventDefault(),a.setState({value:e.target.value}),a.props.onChange(a.props.title,e.target.value)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.title;return r.a.createElement("label",{className:"pt-2 pb-3 px-1 mr-3",style:{fontWeight:"bold",fontFamily:"Open Sans",fontSize:"0.92em",border:"solid",borderWidth:"1px",borderColor:"#A8A8A8"}},e,r.a.createElement("br",null),r.a.createElement("select",{name:"from",onChange:this.onChange},r.a.createElement("option",{value:"0"},"0"),r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5"),r.a.createElement("option",{value:"6"},"6"),r.a.createElement("option",{value:"7"},"7"),r.a.createElement("option",{value:"8"},"8"),r.a.createElement("option",{value:"9"},"9"),r.a.createElement("option",{value:"10"},"10"),r.a.createElement("option",{value:"15"},"15"),r.a.createElement("option",{value:"20"},"20"),r.a.createElement("option",{value:"25"},"25"),r.a.createElement("option",{value:"33"},"33"),r.a.createElement("option",{value:"40"},"40"),r.a.createElement("option",{value:"50"},"50"),r.a.createElement("option",{value:"66"},"66"),r.a.createElement("option",{value:"75"},"75"),r.a.createElement("option",{value:"100"},"100"),r.a.createElement("option",{selected:!0,value:""},"Any")))}}]),t}(n.Component),P=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},a.onChange=function(e){e.preventDefault(),a.setState({value:e.target.value}),a.props.onChange(a.props.title,e.target.value)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.title;return r.a.createElement("label",{className:"pt-2 pb-3 px-1 mr-3",style:{fontWeight:"bold",fontFamily:"Open Sans",fontSize:"0.92em",border:"solid",borderWidth:"1px",borderColor:"#A8A8A8"}},e,r.a.createElement("br",null),r.a.createElement("select",{name:"from",onChange:this.onChange},r.a.createElement("option",{value:"-50"},"-50"),r.a.createElement("option",{value:"-30"},"-30"),r.a.createElement("option",{value:"-20"},"-20"),r.a.createElement("option",{value:"-10"},"-10"),r.a.createElement("option",{value:"-5"},"-5"),r.a.createElement("option",{value:"0"},"0"),r.a.createElement("option",{value:"5"},"5"),r.a.createElement("option",{value:"10"},"10"),r.a.createElement("option",{value:"20"},"20"),r.a.createElement("option",{value:"30"},"30"),r.a.createElement("option",{value:"50"},"50"),r.a.createElement("option",{selected:!0,value:""},"Any")))}}]),t}(n.Component),C=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},a.onChange=function(e){e.preventDefault(),a.setState({value:e.target.value}),a.props.onChange(a.props.title,e.target.value)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.title;return r.a.createElement("label",{className:"pt-2 pb-3 px-1 mr-3",style:{fontWeight:"bold",fontFamily:"Open Sans",fontSize:"0.92em",border:"solid",borderWidth:"1px",borderColor:"#A8A8A8"}},e,r.a.createElement("br",null),r.a.createElement("select",{name:"from",onChange:this.onChange},r.a.createElement("option",{value:"0"},"0"),r.a.createElement("option",{value:"0.5"},"0.5"),r.a.createElement("option",{value:"0.75"},"0.75"),r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"1.25"},"1.25"),r.a.createElement("option",{value:"1.5"},"1.5"),r.a.createElement("option",{value:"1.75"},"1.75"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{selected:!0,value:""},"Any")))}}]),t}(n.Component),O=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={runs:"",wins:"",placed:"",winPercent:"",placedPercent:"",winProfitLoss:"",placedProfitLoss:"",AE:"",IV:""},a.onChange=function(e,t){switch(e){case"Runs":a.setState({runs:parseInt(t)});break;case"Wins":a.setState({wins:parseInt(t)});break;case"Placed":a.setState({placed:parseInt(t)});break;case"Win%":a.setState({winPercent:parseFloat(t)});break;case"Place%":a.setState({placedPercent:parseFloat(t)});break;case"WinPL":a.setState({winProfitLoss:parseFloat(t)});break;case"PlacedPL":a.setState({placedProfitLoss:parseFloat(t)});break;case"AE":a.setState({AE:parseFloat(t)});break;case"IV":a.setState({IV:parseFloat(t)})}},a.updateClick=function(){a.props.onUpdate(a.state)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container mb-3 mt-3"},r.a.createElement(g,{title:"Runs",onChange:this.onChange}),r.a.createElement(g,{title:"Wins",onChange:this.onChange}),r.a.createElement(g,{title:"Placed",onChange:this.onChange}),r.a.createElement(y,{title:"Win%",onChange:this.onChange}),r.a.createElement(y,{title:"Place%",onChange:this.onChange}),r.a.createElement(P,{title:"WinPL",onChange:this.onChange}),r.a.createElement(P,{title:"PlacedPL",onChange:this.onChange}),r.a.createElement(C,{title:"AE",onChange:this.onChange}),r.a.createElement(C,{title:"IV",onChange:this.onChange}),r.a.createElement("button",{className:"btn btn-outline-success mb-3",style:{height:"70px"},onClick:this.updateClick},"Update"))}}]),t}(n.Component),j=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onUpdate=function(e){a.refs.output.filterForm(e)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"mb-3"},"Trainer Jockey Form")),r.a.createElement(O,{onUpdate:this.onUpdate}),r.a.createElement(b,{ref:"output"}))}}]),t}(n.Component);var w=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("p",{className:"lead"},"This is my first React app. Has some basic styling with Bootstrap. It fetches the data from a C# Web-API I've written and deployed in Azure."))},N=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(E.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(h,{branding:"Mal's Racing Info"}),r.a.createElement(v.a,{exact:!0,path:"/trainerjockeyform",component:j}),r.a.createElement(v.a,{path:"/trainerjockeyform/about",component:w}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,2,1]]]);
//# sourceMappingURL=main.3e00c43c.chunk.js.map