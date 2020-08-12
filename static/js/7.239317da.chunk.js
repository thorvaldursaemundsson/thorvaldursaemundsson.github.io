(this.webpackJsonpinfinitedarkness=this.webpackJsonpinfinitedarkness||[]).push([[7],{101:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a(0),l=a.n(r),i=a(107),c=a(23),s=a(31),o=a(24),u=a(66),m=a(68),h=Object(s.a)(),p=function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Skills are the generic things a character can learn to do, every skill gains a bonus from it's main ability."),l.a.createElement("p",null,"Perks are specializations and special capabilities related to skills, each perk has a level, starting at 1.",l.a.createElement("br",null),"Perks cost 10 x level",l.a.createElement("br",null),"Perks require 6 x level points in their skill"),Object(o.a)().map((function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,{title:e.name,border:!0},l.a.createElement(u.a,{tab:5,title:"uses",border:!0},l.a.createElement("p",null,e.description),l.a.createElement("h4",null,"Uses"),e.useCases.map((function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("b",null,e.name)," - (",e.attribute," ",e.type,")",void 0!==e.results?l.a.createElement("ul",null,e.results.map((function(e){return l.a.createElement("li",null,e)}))):null,l.a.createElement("p",null,e.description))}))),l.a.createElement(u.a,{tab:5,title:"perks",border:!0},l.a.createElement("h4",null,"Perks"),h.filter((function(t){return t.skill===e.name})).map((function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h5",{className:"perkstitle"},e.name," (",10*e.level,")"),l.a.createElement("p",{className:"perksdescription"},e.description),void 0!==e.results?l.a.createElement("ul",null,e.results.map((function(e){return l.a.createElement("li",null,e)}))):null)})))))})))},d=function(){var e=Object(r.useState)(""),t=Object(n.a)(e,2),a=t[0],s=t[1];return l.a.createElement("div",null,l.a.createElement("p",null,"Traits are innate characteristics of a character, they can not be added or removed after the start of the game, some traits are purely negative, others positive, some have a combined effect"),l.a.createElement("p",null,"Traits often describe a characters behavior, characters with these traits are expected to roleplay in a way which does not conflict with that trait"),l.a.createElement("p",null,"It is recommended that a character have between 1 and 3 traits"),l.a.createElement("p",null,"Traits in this section affect more than just roleplay, they also affect outcome of the dice"),Object(c.a)().map((function(e){return l.a.createElement("div",null,l.a.createElement("h3",null,l.a.createElement("span",{style:{display:"inline-block",width:"200px"}},e.name)," ",a!==e.name?l.a.createElement(i.a,{onClick:function(){return s(e.name)}},"?"):l.a.createElement(i.a,{onClick:function(){return s("")}},"X")," "),a===e.name?l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("b",null,"Cost"),": ",e.cost),e.description):null)})))},f=function(e){var t=Object(r.useState)(""),a=Object(n.a)(t,2),i=a[0],c=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Character Traits"),l.a.createElement("p",null,"Character traits describe how your character acts, how you roleplay them. Note that there is always room for interpretation when roleplaying a character whos personality is summed up in 3-5 words. And there is always a choice for which trait to embody at any given time.",l.a.createElement("br",null),'"it\'s how my character should act" is often not an accepted excuse if your roleplay disrupts the game or causes hurt feelings. Ultimately the player is always the author of the character and always fully responsible for their actions.',l.a.createElement("br",null)),l.a.createElement("p",null,"Roll 1d100 5 times, results 67-100 means free choice. Pick between 3 and 5, preferably at least one negative and at least one positive"),l.a.createElement("button",{onClick:function(){return function(){var e=Math.floor(100*Math.random());c(e<=66?"".concat(E[e]," (").concat(e,")"):"free choice (".concat(e,")"))}()}},"roll")," ",i,l.a.createElement("ol",null,E.map((function(e){return l.a.createElement("li",null,e)}))))},E=["Generous","Integrity","Loyal","Devoted","Loving","Kind","Sincere","Self-controlled","Peaceful","Faithful","Patient","Determined","Persistence","Adventurous","Fair","Cooperative","Tolerant","Optimistic","Spiritual","Dishonest","Disloyal","Unkind","Mean","Rude","Disrespectful","Impatient","Greedy","Abrasive","Pessimistic","Cruel","Unmerciful","Narcissitic","Obnoxious","Malicious","Petty","Quarrelsome","Selfish","Unforgiving","Dominant","Confident","Persuasive","Ambitious","Bossy","Resourceful","Decisive","Charismatic","Authority","Enthusiasm","Bold","Proactive","Playful","Zany","Active","Wild","Silly","Affectionate","Funny","Rough","Talkative","Rowdy","Smart","Fidgety","Shy","Lively","Impatient","Stubborn"];t.default=function(){return l.a.createElement("div",null,l.a.createElement(m.b,{title:"skillsperks"},l.a.createElement(m.a,{title:"Skills and perks"},l.a.createElement(p,null)),l.a.createElement(m.a,{title:"Traits"},l.a.createElement(d,null)),l.a.createElement(m.a,{title:"Character traits"},l.a.createElement(f,null))))}},66:function(e,t,a){"use strict";var n=a(7),r=a(0),l=a.n(r),i=a(107),c=a(22);t.a=function(e){var t=e.title,a=e.tab,r=e.border,s=e.children,o=Object(c.a)(t+a,!1),u=Object(n.a)(o,2),m=u[0],h=u[1],p="0";return void 0!==a&&(p=a+"px"),l.a.createElement("div",{className:!0===r?"bordersection":"",style:{paddingLeft:p}},l.a.createElement(i.a,{onClick:function(){return h(!m)}},t," ",m?"-":"+"),m&&s)}},68:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(0),r=a.n(n),l=function(e){var t=e.title,a=e.children,n=e.source;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,r.a.createElement("a",{className:"notalink",href:"#"+t,id:t},t)," ",r.a.createElement("a",{href:"#"+n},"^")),a)};t.b=function(e){var t=e.children,a=e.title,n=[],i=t,c=[];for(var s in i){var o=i[s];void 0===o.props.title||(c.push(r.a.createElement(l,{title:o.props.title,source:a},o.props.children)),n.push(o.props.title))}return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,r.a.createElement("a",{className:"notalink",href:"#"+a,id:a},"Table of contents ")),n.map((function(e){return r.a.createElement("h5",null," ",r.a.createElement("a",{href:"#"+e},e)," ")})),r.a.createElement("hr",null),c.map((function(e){return e})))}}}]);
//# sourceMappingURL=7.239317da.chunk.js.map