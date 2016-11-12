(function() {
	'use strict';

	var todoCard = {
		templateUrl: "./components/todoCard/todoCard.component.html",
		controller: todoCardCtrl
	};

	angular
		.module("todolist")
		.component("todoCard", todoCard)

	function todoCardCtrl() {
		var tc = this;
		console.log('hello world');
	}
})();