(window.webpackJsonp=window.webpackJsonp||[]).push([[7,5,6],{1248:function(e,t,o){var content=o(1251);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(226).default)("47e8fcc0",content,!0,{sourceMap:!1})},1249:function(e,t,o){var content=o(1254);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(226).default)("2aa5c57a",content,!0,{sourceMap:!1})},1250:function(e,t,o){"use strict";o(1248)},1251:function(e,t,o){var r=o(225)(!1);r.push([e.i,".todo{border:1px solid #ccc;background:#41b883;padding:1rem;border-radius:5px;text-align:center;position:relative;cursor:pointer}.btn-del{position:absolute;bottom:10px;right:10px;background:red}.complete-box{border:1px solid #ccc;padding:1rem;border-radius:5px;text-align:center;position:relative;cursor:pointer;background:#35495e}",""]),e.exports=r},1252:function(e,t,o){"use strict";o.r(t);o(93),o(63),o(80),o(34),o(157),o(79),o(158);var r=o(64),n=o(65);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={props:["todo","id"],methods:l(l({},Object(n.b)(["delTodo","updateTodo"])),{},{removeTodo:function(){this.delTodo(this.id)},handleDbl:function(){console.log("double click"),this.updateTodo(this.id)},getClass:function(){return console.log("running getclass"),{"complete-box":this.todo.completed,todo:!this.todo.completed}}})},f=(o(1250),o(94)),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{class:e.getClass(),on:{dblclick:e.handleDbl}},[e._v("\n  "+e._s(e.todo.title)+"\n  "),o("button",{staticClass:"btn-del",on:{click:e.removeTodo}},[e._v("\n    Delete\n  ")])])}),[],!1,null,null,null);t.default=component.exports},1253:function(e,t,o){"use strict";o(1249)},1254:function(e,t,o){var r=o(225)(!1);r.push([e.i,".todos{display:grid;grid-template-columns:repeat(3,1fr);grid-gap:1rem}.todo{border:1px solid #ccc;background:#41b883;padding:1rem;border-radius:5px;text-align:center;position:relative;cursor:pointer}",""]),e.exports=r},1255:function(e,t,o){var content=o(1259);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(226).default)("6ea71cd5",content,!0,{sourceMap:!1})},1257:function(e,t,o){"use strict";o.r(t);o(93),o(63),o(80),o(34),o(157),o(79),o(158);var r=o(64),n=o(65);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}var l={name:"Todos",created:function(){this.getTodos()},computed:Object(n.c)(["allTodos"]),methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(n.b)(["getTodos"]))},d=l,f=(o(1253),o(94)),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h1",[e._v("Welcome to todos app")]),e._v(" "),o("addTodo"),e._v(" "),o("br"),e._v(" "),o("filterTodos"),e._v(" "),o("br"),e._v(" "),o("div",{staticClass:"todos"},e._l(e.allTodos,(function(e){return o("Todo",{key:e.id,attrs:{todo:e,id:e.id}})})),1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Todo:o(1252).default})},1258:function(e,t,o){"use strict";o(1255)},1259:function(e,t,o){var r=o(225)(!1);r.push([e.i,'body[data-v-eb7288d6]{font-family:"Franklin Gothic Medium","Arial Narrow",Arial,sans-serif;line-height:1.6;background:#e8f7f0}.container[data-v-eb7288d6]{max-width:1100px;margin:auto;overflow:auto;padding:0 2rem}',""]),e.exports=r},1262:function(e,t,o){"use strict";o.r(t);var r={name:"IndexPage",components:{Todos:o(1257).default}},n=(o(1258),o(94)),component=Object(n.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container"},[t("Todos")],1)}),[],!1,null,"eb7288d6",null);t.default=component.exports}}]);