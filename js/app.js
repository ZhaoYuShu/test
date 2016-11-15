/**
 * Created by Administrator on 2016/11/15 0015.
 */


var app = angular.module("myApp",["ionic","controller"]);

app.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){

    $stateProvider
        .state("main",{
            url : "/main",
            templateUrl : "view/main.html"
        })
        .state("main.home",{
            url : "/home",
            views : {
                "main-home" : {
                    templateUrl : "view/home.html",
                    controller : "homeCtrl"
                }
            }
        })
        .state("main.classify",{
            url : "/classify",
            views : {
                "main-classify" : {
                    templateUrl : "view/classify.html",
                    controller : "classifyCtrl"
                }
            }
        })
        .state("main.find",{
            url : "/find",
            views : {
                "main-find" : {
                    templateUrl : "view/find.html",
                    controller : "findCtrl"
                }
            }
        })
        .state("main.car",{
            url : "/car",
            views : {
                "main-car" : {
                    templateUrl : "view/car.html",
                    controller : "carCtrl"
                }
            }
        })
        .state("main.mine",{
            url : "/mine",
            views : {
                "main-mine" : {
                    templateUrl : "view/mine.html",
                    controller : "mineCtrl"
                }
            }
        });
    $urlRouterProvider.otherwise("/main/home");
}]);
