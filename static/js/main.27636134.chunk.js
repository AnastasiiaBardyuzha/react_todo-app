(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],{10:function(e,t,o){e.exports=o(25)},15:function(e,t,o){},16:function(e,t,o){},25:function(e,t,o){"use strict";o.r(t);var a=o(0),l=o.n(a),n=o(9),c=o.n(n),r=(o(15),o(16),o(1)),s=o(7),d=o(2),i=o(3),u=o(5),m=o(4),f=o(6),p=o(17),h=function(e){function t(){var e,o;Object(d.a)(this,t);for(var a=arguments.length,l=new Array(a),n=0;n<a;n++)l[n]=arguments[n];return(o=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={title:"",id:"",complited:!1},o.handleChange=function(e){var t=e.target.value;o.setState({title:t})},o.handleKeyPress=function(e){var t=o.state.title;if("Enter"===e.key){var a={id:p(),title:t,completed:!1};o.props.addTodo(a),o.setState({title:"",id:"",complited:!1})}},o}return Object(f.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.title;return l.a.createElement("input",{className:"new-todo",placeholder:"What needs to be done?",name:e,value:e,onChange:this.handleChange,onKeyPress:this.handleKeyPress})}}]),t}(l.a.Component),g=function(e){var t=e.todo,o=e.toggledCheck,a=e.deleteTask,n=t.id,c=t.title,r=t.completed;return console.log(r),l.a.createElement("li",null,l.a.createElement("div",{className:"view"},l.a.createElement("input",{type:"checkbox",className:"toggle",id:n,onClick:o}),l.a.createElement("label",{htmlFor:n},c),l.a.createElement("button",{type:"button",className:"destroy",onClick:a})),l.a.createElement("input",{type:"text",className:"edit"}))},k=function(e){var t=e.todos,o=e.toggledCheck,a=e.deleteTask;e.showWords;return l.a.createElement("ul",{className:"todo-list"},t.map((function(e,t){return l.a.createElement(g,{key:e.id,todo:e,toggledCheck:function(){return o(e.id)},deleteTask:function(){return a(e.id)}})})))},b=function(e){function t(){var e,o;Object(d.a)(this,t);for(var a=arguments.length,l=new Array(a),n=0;n<a;n++)l[n]=arguments[n];return(o=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={todos:[],allTodos:[]},o.addTodo=function(e){o.setState((function(t){return{todos:[].concat(Object(s.a)(t.todos),[e]),allTodos:[].concat(Object(s.a)(t.todos),[e])}}))},o.toggledCheck=function(e){o.setState((function(t){return{todos:t.todos.map((function(t){return t.id===e?Object(r.a)({},t,{completed:!t.completed}):t})),allTodos:t.allTodos.map((function(t){return t.id===e?Object(r.a)({},t,{completed:!t.completed}):t}))}}))},o.filtered=function(e){var t=e.target.getAttribute("data-filter");"Active"===t&&(t=!1),"Completed"===t&&(t=!0),o.setState((function(e){return{allTodos:"All"===t?e.todos:e.todos.filter((function(e){return e.completed===Boolean(t)}))}}))},o.deleteTask=function(e){o.setState((function(t){return{allTodos:t.allTodos.filter((function(t){return t.id!==e})),todos:t.todos.filter((function(t){return t.id!==e}))}}))},o.clearedCompleted=function(){o.setState((function(e){return{allTodos:e.allTodos.filter((function(e){return!1===e.completed})),todos:e.todos.filter((function(e){return!1===e.completed}))}}))},o.checkedAll=function(e){e.target.checked?o.setState((function(e){return{todos:e.todos.map((function(e){return Object(r.a)({},e,{completed:!0})})),allTodos:e.allTodos.map((function(e){return Object(r.a)({},e,{completed:!0})}))}})):o.setState((function(e){return{todos:e.todos.map((function(e){return Object(r.a)({},e,{completed:!1})})),allTodos:e.allTodos.map((function(e){return Object(r.a)({},e,{completed:!1})}))}}))},o}return Object(f.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("todos");if(e){var t=JSON.parse(e);this.setState({todos:t})}}},{key:"componentDidUpdate",value:function(e,t){t.todos!==this.state.todos&&localStorage.setItem("todos",JSON.stringify(this.state.todos))}},{key:"render",value:function(){var e=this.state,t=e.todos,o=e.allTodos,a=t.filter((function(e){return!1===e.completed}));return console.log(o),l.a.createElement("section",{className:"todoapp"},l.a.createElement("header",{className:"header"},l.a.createElement("h1",null,"todos"),l.a.createElement(h,{addTodo:this.addTodo})),l.a.createElement("section",{className:"main"},l.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",onChange:this.checkedAll}),l.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),l.a.createElement(k,{todos:o,toggledCheck:this.toggledCheck,deleteTask:this.deleteTask})),l.a.createElement("footer",{className:"footer"},l.a.createElement("span",{className:"todo-count"},a.length,"items left"),l.a.createElement("ul",{className:"filters"},l.a.createElement("li",null,l.a.createElement("a",{href:"#/",className:"selected","data-filter":"All",onClick:this.filtered},"All")),l.a.createElement("li",null,l.a.createElement("a",{href:"#/active","data-filter":"Active",onClick:this.filtered},"Active")),l.a.createElement("li",null,l.a.createElement("a",{href:"#/completed","data-filter":"Completed",onClick:this.filtered},"Completed"))),l.a.createElement("button",{type:"button",className:"clear-completed",onClick:this.clearedCompleted},"Clear completed")))}}]),t}(a.Component);c.a.render(l.a.createElement(b,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.27636134.chunk.js.map