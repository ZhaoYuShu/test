/**
 * Created by Administrator on 2016/11/15 0015.
 */

var Ctrl = angular.module("controller",[]);
Ctrl.controller("homeCtrl",["$scope",function($scope){

    $scope.goPage1 = function(){
        $("#page1").addClass("f-hide");
        $("#page2").removeClass("f-hide");
    };
    $scope.goPage2 = function(){
        $("#page1").removeClass("f-hide");
        $("#page2").addClass("f-hide");

    }
}]);


Ctrl.controller("classifyCtrl",["$scope",function($scope){

}]);

Ctrl.controller("findCtrl",["$scope",function($scope){

}]);

Ctrl.controller("carCtrl",["$scope",function($scope){

}]);

Ctrl.controller("mineCtrl",["$scope",function($scope){

}]);
