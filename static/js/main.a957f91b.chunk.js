(this.webpackJsonppoker_dungeons=this.webpackJsonppoker_dungeons||[]).push([[0],{37:function(e,t,n){e.exports=n(92)},42:function(e,t,n){},43:function(e,t,n){e.exports=n.p+"static/media/logo.25bf045c.svg"},44:function(e,t,n){},85:function(e,t){},92:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(33),o=n.n(s),l=(n(42),n(11)),c=n(34),i=n(3),u=n(4),p=n(6),h=n(5),f=n(7),d=(n(43),n(44),n(35));n(90);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(n,!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e){return[e.random.Shuffle([2,3,4,5,6,7,8,9,"T","J","Q","K","A"])[0],e.random.Shuffle(["c","d","h","s"])[0]]}var v={"\u6218\u58eb":{hp:15,i:0,j:1,skills:[{name:"\u666e\u901a\u653b\u51fb",desc:"\u9020\u62102\u70b9\u4f24\u5bb3\uff0c\u5982\u679c\u4f7f\u7528\u7684\u662f\u9ad8\u724c\uff0c\u5219\u4f24\u5bb3+2",effect:function(e,t,n){var r=2;["J","Q","K","A"].includes(n[0])&&(r+=2),e.bossHP-=r}},{name:"\u529b\u91cf\u53ec\u5524",desc:"\u68c0\u7d221\u5f20\u9ad8\u724c",effect:function(e,t,n){e.hand.push([t.random.Shuffle(["J","Q","K","A"])[0],t.random.Shuffle(["c","d","h","s"])[0]])}}]},"\u6c11\u5175":{hp:12,i:1,j:0,skills:[{name:"\u666e\u901a\u653b\u51fb",desc:"\u9020\u62102\u70b9\u4f24\u5bb3\uff0c\u5982\u679c\u4f7f\u7528\u7684\u662f\u9ad8\u724c\uff0c\u5219\u4f24\u5bb3+2",effect:function(e,t,n){var r=2;["J","Q","K","A"].includes(n[0])&&(r+=2),e.bossHP-=r}},{name:"\u9f13\u821e",desc:"(\u9650\u8349\u82b1\u548c\u65b9\u7247)\u64782\u5f20\u724c",effect:function(e,t,n){if(["c","d"].includes(n[1]))for(var r=0;r<2;r++)e.hand.push(b(t))}}]},"\u6cbb\u7597\u5175":{hp:10,i:1,j:2,skills:[{name:"\u6cbb\u7597",desc:"\u6cbb\u7597\u8840\u91cf\u6700\u4f4e\u7684\u961f\u53cb3\u70b9\u8840\u91cf",effect:function(e,t,n){var r=Object.keys(e.players)[0],a=1e3,s=!0,o=!1,l=void 0;try{for(var c,i=t.random.Shuffle(Object.keys(e.players))[Symbol.iterator]();!(s=(c=i.next()).done);s=!0){var u=c.value;console.log(u),console.log("Debug player hp",e.players[u]),e.players[u].hp<a&&(a=e.players[u].hp,r=u)}}catch(p){o=!0,l=p}finally{try{s||null==i.return||i.return()}finally{if(o)throw l}}e.players[r].hp+=3}},{name:"\u5174\u594b\u5242",desc:"\u91cd\u7f6e1\u4e2a\u961f\u53cb",effect:function(e,t,n){var r=!0,a=!1,s=void 0;try{for(var o,l=t.random.Shuffle(Object.keys(e.players))[Symbol.iterator]();!(r=(o=l.next()).done);r=!0){var c=o.value;if(e.players[c].exhausted)return void(e.players[c].exhausted=!1)}}catch(i){a=!0,s=i}finally{try{r||null==l.return||l.return()}finally{if(a)throw s}}}}]},"\u89c1\u4e60\u6cd5\u5e08":{hp:10,i:2,j:0,skills:[{name:"\u5143\u7d20\u6ce2\u52a8",desc:"(\u9650\u7ea2\u6843\u548c\u9ed1\u6843)\u9020\u62102\u70b9\u4f24\u5bb3\uff0c\u8fdb\u884c1\u6b21\u5224\u5b9a\uff0c\u5982\u679c\u662f\u7ea2\u8272\uff0c\u518d\u9020\u62102\u70b9\u4f24\u5bb3\uff1b\u5982\u679c\u662f\u9ed1\u8272\uff0c\u91cd\u7f6e\u81ea\u5df1",effect:function(e,t,n){if(["h","s"].includes(n[1])){var r=2,a=b(t);["d","h"].includes(a[1])?r+=2:e.players.\u89c1\u4e60\u6cd5\u5e08.exhausted=!1,e.bossHP-=r}}}]},"\u523a\u5ba2":{hp:10,i:2,j:2,skills:[{name:"\u5feb\u901f\u653b\u51fb",desc:"\u9020\u62102\u70b9\u4f24\u5bb3\uff0c\u5982\u679c\u4f7f\u7528\u7684\u724c\u70b9\u6570\u57282-5\u4e4b\u95f4\uff0c\u5219\u91cd\u7f6e\u81ea\u5df1",effect:function(e,t,n){[2,3,4,5].includes(n[0])&&(e.players.\u523a\u5ba2.exhausted=!1),e.bossHP-=2}},{name:"\u75be\u8dd1",desc:"(\u9650\u9ad8\u724c)\u68c0\u7d222\u5f20\u70b9\u6570\u4e3a2\u52305\u7684\u724c",effect:function(e,t,n){if(["J","Q","K","A"].includes(n[0]))for(var r=0;r<2;r++)e.hand.push([t.random.Shuffle([2,3,4,5])[0],t.random.Shuffle(["c","d","h","s"])[0]])}}]}},j={setup:function(e){var t={bossHP:100};for(var n in t.players=v,t.players)t.players[n].exhausted=!1;t.hand=[];for(var r=0;r<5;r++)t.hand.push(b(e));return t.messages=["\u6e38\u620f\u73a9\u6cd5\uff1a\u70b9\u51fb\u4eba\u7269\u5934\u50cf\u4ee5\u67e5\u770b\u4eba\u7269\u6280\u80fd\uff0c\u9009\u62e9\u8981\u7528\u7684\u6251\u514b\u724c\uff0c\u7136\u540e\u9009\u62e9\u76f8\u5e94\u7684\u4eba\u7269\u548c\u6280\u80fd\uff0c\u5373\u53ef\u53d1\u52a8\u6280\u80fd\uff0c\u89c4\u5212\u597d\u624b\u724c\u7684\u4f7f\u7528\u662f\u80dc\u5229\u7684\u5173\u952e\uff01"],t},moves:{useSkill:function(e,t,n,r,a){if(e.players[r].exhausted||e.players[r].hp<=0)e.messages.unshift("\u8be5\u4eba\u7269\u88ab\u6a2a\u7f6e\u6216\u5df2\u88ab\u51fb\u8d25\uff0c\u65e0\u6cd5\u4f7f\u7528");else{var s=e.hand.splice(n,1)[0];e.players[r].exhausted=!0,e.players[r].skills[a].effect(e,t,s),e.messages.unshift(r+"\u7528"+s[0]+s[1]+"\u89e6\u53d1\u4e86 "+e.players[r].skills[a].name+" \u6280\u80fd")}}},turn:{onEnd:function(e,t){for(var n in e.bossHP<=0&&alert("\u4f60\u8d62\u4e86\uff01"),e.players)e.players[n].exhausted=!1;e.hand=[];for(var r=0;r<5;r++)e.hand.push(b(t));!function(e,t){var n=[function(e,t){e.players[t.random.Shuffle(Object.keys(e.players))[0]].hp-=6,e.messages.unshift("Boss\u5bf9\u4e00\u540d\u961f\u53cb\u9020\u6210\u4e866\u70b9\u4f24\u5bb3")},function(e,t){for(var n in e.players)e.players[n].hp-=3;e.messages.unshift("Boss\u5bf9\u6bcf\u540d\u961f\u53cb\u9020\u6210\u4e863\u70b9\u4f24\u5bb3")},function(e,t){for(var n=0;n<2;n++)e.hand.pop();e.messages.unshift("Boss\u5f03\u6389\u4e86\u4f602\u5f20\u724c")},function(e,t){for(var n=0;n<2;n++)e.players[t.random.Shuffle(Object.keys(e.players))[0]].exhausted=!0;e.messages.unshift("Boss\u6a2a\u7f6e\u4e862\u540d\u961f\u53cb")}];t.random.Shuffle(n)[0](e,t),e.bossHP<=30&&t.random.Shuffle(n)[0](e,t)}(e,t)}}},O=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"boss-board"},a.a.createElement("p",{style:{color:this.props.bossHP<=30?"red":"black"}},"Boss HP: ",this.props.bossHP))}}]),t}(a.a.Component),k=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=void 0;for(var t in this.props.players)this.props.players[t].i==this.props.i&&this.props.players[t].j==this.props.j&&(e=y({name:t},this.props.players[t]));return e?a.a.createElement("div",{className:"player-cell",style:{borderColor:e.exhausted||e.hp<=0?"#FF0000":"#000000"},onClick:function(){var t="",n=!0,r=!1,a=void 0;try{for(var s,o=e.skills[Symbol.iterator]();!(n=(s=o.next()).done);n=!0){var l=s.value;console.log(l),t+="\u2022 ",t+=l.name,t+=":",t+=l.desc,t+="\n"}}catch(c){r=!0,a=c}finally{try{n||null==o.return||o.return()}finally{if(r)throw a}}alert(t)}},a.a.createElement("p",null,e.name),a.a.createElement("p",null,"HP: ",e.hp)):a.a.createElement("div",{className:"player-cell"})}}]),t}(a.a.Component),g=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={current_branch:"main",previous_branch:"main"},n.action={},n.set_branch=n.set_branch.bind(Object(l.a)(n)),n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"set_branch",value:function(e){this.setState({previous_branch:this.state.current_branch,current_branch:e})}},{key:"render",value:function(){var e=this;return"main"==this.state.current_branch?a.a.createElement("div",{className:"controller-row"},this.props.hand.map((function(t,n){return a.a.createElement("button",{onClick:function(){e.action.card=n,e.set_branch("player")}},t[0],a.a.createElement("img",{src:"https://www.bridgebum.com/"+t[1]+".gif",style:{height:"20px"}}))}))):"player"==this.state.current_branch?a.a.createElement("div",null,Object.keys(this.props.players).map((function(t){return a.a.createElement("button",{onClick:function(){e.action.player=t,e.set_branch("skills")}},t)}))):"skills"==this.state.current_branch?a.a.createElement("div",null,this.props.players[this.action.player].skills.map((function(t,n){return a.a.createElement("button",{onClick:function(){e.action.skill=n,e.props.execute(e.action.card,e.action.player,e.action.skill),e.set_branch("main")}},t.name)}))):void 0}}]),t}(a.a.Component),E=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){for(var e=this,t=[],n=0;n<3;n++){for(var r=[],s=0;s<3;s++)r.push(a.a.createElement("td",null,a.a.createElement(k,{i:n,j:s,players:this.props.G.players})));t.push(a.a.createElement("tr",null,r))}return a.a.createElement("div",null,a.a.createElement(O,{bossHP:this.props.G.bossHP}),a.a.createElement("table",null,a.a.createElement("tbody",null,t)),a.a.createElement("div",{className:"message-block",onClick:function(){for(var t="",n=0;n<Math.min(5,e.props.G.messages.length);n++)t+="\u2022 "+e.props.G.messages[n]+"\n";alert(t)}},this.props.G.messages[0]),a.a.createElement(g,{players:this.props.G.players,hand:this.props.G.hand,execute:this.props.moves.useSkill}),a.a.createElement("button",{className:"controller-button",onClick:this.props.events.endTurn},"\u7ed3\u675f\u56de\u5408"))}}]),t}(a.a.Component),P=Object(d.Client)({game:j,numPlayers:1,board:E});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.a957f91b.chunk.js.map