(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],{11:function(e,t,o){e.exports=o(18)},16:function(e,t,o){},17:function(e,t,o){},18:function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),l=o(8),r=o.n(l),c=(o(16),o(17),o(6)),s=o(10),i=o(1),d=o(2),u=o(4),m=o(3),f=o(5),p=o(20),h=function(e){function t(){var e,o;Object(i.a)(this,t);for(var a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(o=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={title:""},o.handleChange=function(e){var t=e.target.value;o.setState({title:t})},o.handleSubmit=function(e){e.preventDefault();var t=o.state.title;if(t.length>0){var a={id:Object(p.a)(),title:t.trim(),completed:!1};o.props.addTodo(a),o.setState({title:""})}},o}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state.title;return n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement("input",{className:"new-todo",placeholder:"What needs to be done?",name:e,value:e,onChange:this.handleChange}))}}]),t}(n.a.Component),v=function(e){var t=e.todo,o=e.toggledCheck,a=e.deleteTask,l=t.id,r=t.title,c=t.completed;return n.a.createElement("li",null,n.a.createElement("div",{className:"view"},n.a.createElement("input",{type:"checkbox",className:"toggle",checked:c,id:l,onChange:function(e){return o(e.target.checked)}}),n.a.createElement("label",{htmlFor:l},r),n.a.createElement("button",{type:"button",className:"destroy",onClick:a})),n.a.createElement("input",{type:"text",className:"edit"}))},b=function(e){var t=e.todos,o=e.toggledCheck,a=e.deleteTask;return n.a.createElement("ul",{className:"todo-list"},t.map((function(e,t){return n.a.createElement(v,{key:e.id,todo:e,toggledCheck:function(t){return o(e.id,t)},deleteTask:function(){return a(e.id)}})})))},g=o(9),k=function(e){var t=e.filterTypes,o=e.filtered,a=e.filter;return n.a.createElement("ul",{className:"filters"},t.map((function(e){var t=e;switch(t){case"Active":t=!1;break;case"Completed":t=!0;break;default:t="All"}return n.a.createElement("li",{key:e},n.a.createElement("button",{type:"button",className:g({selected:a===t}),"data-filter":e,onClick:o},e))})))},E=["All","Active","Completed"],y=function(e){function t(){var e,o;Object(i.a)(this,t);for(var a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(o=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={todos:[],visibleTodos:[],filter:"All"},o.addTodo=function(e){var t=o.state,a=t.filter,n=t.todos;o.setState((function(t){var o={todos:[].concat(Object(s.a)(n),[e])};return{todos:o.todos,visibleTodos:"All"===a?o.todos:o.todos.filter((function(e){return e.completed===Boolean(a)}))}}))},o.toggledCheck=function(e,t){var a=o.state.filter;o.setState((function(o){var n={todos:o.todos.map((function(o){return o.id===e?Object(c.a)({},o,{completed:t}):o}))};return{todos:n.todos,visibleTodos:"All"===a?n.todos:n.todos.filter((function(e){return e.completed===Boolean(a)}))}}))},o.filtered=function(e){var t=e.target.getAttribute("data-filter");switch(t){case"Active":t=!1;break;case"Completed":t=!0;break;default:t="All"}o.setState((function(e){return{visibleTodos:"All"===t?e.todos:e.todos.filter((function(e){return e.completed===Boolean(t)})),filter:t}}))},o.deleteTask=function(e){var t=o.state.filter;o.setState((function(o){var a={todos:o.todos.filter((function(t){return t.id!==e}))};return{todos:a.todos,visibleTodos:"All"===t?a.todos:a.todos.filter((function(e){return e.completed===Boolean(t)}))}}))},o.clearCompleted=function(){o.setState((function(e){var t={todos:e.todos.filter((function(e){return!e.completed}))};return{todos:t.todos,visibleTodos:t.todos}}))},o.checkedAll=function(e){e.target.checked?o.setState((function(e){var t={todos:e.todos.map((function(e){return Object(c.a)({},e,{completed:!0})}))};return{todos:t.todos,visibleTodos:t.todos}})):o.setState((function(e){var t={todos:e.todos.map((function(e){return Object(c.a)({},e,{completed:!1})}))};return{todos:t.todos,visibleTodos:t.todos}}))},o}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("todos");if(e.length>0){var t=JSON.parse(e);this.setState({todos:t})}}},{key:"componentDidUpdate",value:function(e,t){t.todos!==this.state.todos&&localStorage.setItem("todos",JSON.stringify(this.state.todos))}},{key:"render",value:function(){var e=this.state,t=e.todos,o=e.visibleTodos,a=e.filter,l=t.filter((function(e){return!e.completed}));return n.a.createElement("section",{className:"todoapp"},n.a.createElement("header",{className:"header"},n.a.createElement("h1",null,"todos"),n.a.createElement(h,{addTodo:this.addTodo})),n.a.createElement("section",{className:"main"},n.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",checked:t.length&&t.every((function(e){return e.completed})),onChange:this.checkedAll}),n.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),n.a.createElement(b,{todos:o,toggledCheck:this.toggledCheck,deleteTask:this.deleteTask})),n.a.createElement("footer",{className:"footer"},n.a.createElement("span",{className:"todo-count"},"".concat(l.length," items left")),n.a.createElement(k,{filtered:this.filtered,filterTypes:E,filter:a}),n.a.createElement("button",{type:"button",className:"clear-completed",onClick:this.clearCompleted},"Clear completed")))}}]),t}(a.Component);r.a.render(n.a.createElement(y,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.05bc52d8.chunk.js.map