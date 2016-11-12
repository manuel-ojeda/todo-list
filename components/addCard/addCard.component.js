(function(){

	'use strict';

	var addCard = {
		templateUrl: './components/addCard/addCard.component.html',
		controller: addCtrl
	};

	angular
		.module("todolist")
		.component('addCard', addCard);

	function addCtrl(){
		var add = this;


		add.update = function(card) {
        	add.master = angular.copy(card);
      	};
	}



})();