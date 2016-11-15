/**
 * Created by Administrator on 2016/11/15 0015.
 */

var app = angular.module("loginApp",["ionic"]);
app.controller("loginCtrl",["$scope",function($scope){
    // 验证码初始化
    $.idcode.setCode();



    //判断是否聚焦
    $scope.isFocus1 = true;
    $scope.isFocus2 = true;
    $scope.isFocus3 = true;


    // 清空输入框
    $scope.clear = function(){
        $(".username").val();
    }


}]);


