(function() {
	'use strict';

	angular
		.module("todolist")
		.factory("apitodolist", apitodolist);

	apitodolist.$inject = ["$resource"];
	function apitodolist($resource) {
		return $resource("server/tareas.json");
	}
})();