!function(n){"use strict";var t=[];n.module("MyContactsApp.security",["ngRoute","firebase.auth","MyContactsApp.config"]).config(["$routeProvider",function(n){}]).config(["$routeProvider",function(n){n.whenAuthenticated=function(e,r){return t.push(e),r.resolve=r.resolve||{},r.resolve.user=["Auth",function(n){return n.$requireAuth()}],n.when(e,r),this}}]).run(["$rootScope","$location","Auth","loginRedirectPath",function(n,e,r,o){function u(n){!n&&i(e.path())&&e.path(o)}function i(n){return-1!==t.indexOf(n)}r.$onAuth(u),n.$on("$routeChangeError",function(n,t,r,u){"AUTH_REQUIRED"===u&&e.path(o)})}])}(angular);