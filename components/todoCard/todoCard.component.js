(function() {
	'use strict';

	var todoCard = {
		templateUrl: "./components/todoCard/todoCard.component.html",
		controller: todoCardCtrl
	};

	angular
		.module("todolist")
		.component("todoCard", todoCard)

	todoCardCtrl.$inject = ["apitodolist"];

	function todoCardCtrl(apitodolist) {
		var tc = this;
		
		tc.todolist = apitodolist.query();
	}
})();