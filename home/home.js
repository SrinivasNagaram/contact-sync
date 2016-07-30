(function(angular) {

  "use strict";

  // This App has been created by Srinivas Nagaram | creator.srinivas@gmail.com

  angular.module('MyContactsApp.home', ['ngRoute', 'firebase', 'ui.bootstrap', 'bsTable', 'blockUI'])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.whenAuthenticated('/home', {
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl',
        title: "My Contacts | Home"
      }); 
    }])
    .controller('HomeCtrl', ['$rootScope', '$scope', 'AllFriends', 'blockUI', '$timeout', function($rootScope, $scope, AllFriends, blockUI, $timeout) {

      if (AllFriends[0]) {
        $scope.google = AllFriends[0];
      }
      if (AllFriends[1]) {
        $scope.facebook = AllFriends[1];
      }
      if (AllFriends[2]) {
        $scope.twitter = AllFriends[2];
      }
      if (AllFriends[3]) {
        $scope.linkedin = AllFriends[3];
      }
      if (AllFriends[4]) {
        $scope.other = AllFriends[4];
      } 

      var loadingFriends = blockUI.instances.get('loadingFriends');
      loadingFriends.start("Loading contacts list");

      $scope.linkedin.$loaded(function(data) {

        $timeout(function() {
          loadingFriends.stop();
        });

        $scope.homepageCards = true;

        if (data[0] === undefined) {
          $scope.homepageCards = false;
          $scope.noLinkedinFriends = true;
        }
        if (data[0] !== undefined) {
          $scope.homepageCards = true;
          $scope.noLinkedinFriends = false;
        }

      });

      $scope.facebook.$loaded(function(data) {

        $scope.homepageCards = true;

        if (data[0] === undefined) {
          $scope.homepageCards = false;
          $scope.noFacebookFriends = true;
        }
        if (data[0] !== undefined) {
          $scope.homepageCards = true;
          $scope.noFacebookFriends = false;
        }

      });

      $scope.twitter.$loaded(function(data) {

        $scope.homepageCards = true;

        if (data[0] === undefined) {
          $scope.homepageCards = false;
          $scope.noTwitterFriends = true;
        }
        if (data[0] !== undefined) {
          $scope.homepageCards = true;
          $scope.noTwitterFriends = false;
        }

      });

      $scope.google.$loaded(function(data) {

        $scope.homepageCards = true;

        if (data[0] === undefined) {
          $scope.homepageCards = false;
          $scope.noGoogleFriends = true;
        }
        if (data[0] !== undefined) {
          $scope.homepageCards = true;
          $scope.noGoogleFriends = false;
        }

      });

      $scope.other.$loaded(function(data) {

        $scope.homepageCards = true;

        if (data[0] === undefined) {
          $scope.homepageCards = false;
          $scope.noOtherFriends = true;
        }
        if (data[0] !== undefined) {
          $scope.homepageCards = true;
          $scope.noOtherFriends = false;
        }

      });

      $scope.likeme = function(name){
      	alert('I liked ' + name);
      }

    }])
    .controller('HomeTabController', ["$scope", function($scope) {
      this.tab = 1;
      this.selectTab = function(setTab) {
        this.tab = setTab;
      };
      this.isSelected = function(checkTab) {
        return this.tab === checkTab;
      };
    }]);


})(angular);