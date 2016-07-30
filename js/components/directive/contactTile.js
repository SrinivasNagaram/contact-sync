angular.module('MyContactsApp').directive('contactTile', function(){
		return {
			restrict: 'AE',
			scope : {
				friend : "=friendobj",
				iconclass: "@",
				likeme:"&"
			},
			templateUrl : "home/directive/contact-tile.html",
			link: function (scope, iElement, iAttrs) {
				
			}
		};	
})