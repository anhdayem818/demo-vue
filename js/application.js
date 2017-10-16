var app = new Vue({
	el: '#app',
	data: {
		message: "Hello world",
		intro: "Hello vue <small> it is very small </small>",
		viewed: true,
		title: "You load page on " + new Date(),
		url: "https://vuejs.org/images/logo.png",
		todos: [
			{id: 1, todo: "find a girl"},
			{id: 2, todo: "get married with that girl"},
			{id: 3, todo: "live together"}
		]
	}
})