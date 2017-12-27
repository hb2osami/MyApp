var scotchApp = angular.module('scotchApp', ['ngRoute']);
var deposit ="https://api.github.com/repos/torvalds/linux/commits";


    //
    //Define Our Services
    // configure our routes
    scotchApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/commits', {
                templateUrl : 'commits.html',
                controller  : 'commitsController'
            })

            // route for the contact page
            .when('/details/:id', {
                templateUrl : 'details.html',
                controller  : 'detailsController'
            })
            .when('/error', {
                templateUrl : 'error.html',
                controller  : 'errorController'
            })
            .otherwise({
            redirectTo: '/error'
            });
            
    });

    scotchApp.service('commitService', function($http) {
        var commits = [];
        
        var init = function(){
            $http.get(deposit).
            then(function(response) {
                commits = response.data;
             });
        };
        
        
        var getCommit = function(i){
            return commits[i]
        };

        var getCommits = function(){
            return commits;
        };
        return {
          getCommit: getCommit,
          getCommits: getCommits,
          init:init
        };

      });
    // create the controller and inject Angular's $scope
    scotchApp.controller('mainController', function($scope ,commitService) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
        commitService.init();
    });

    scotchApp.controller('commitsController', function($scope ,$http ,commitService) {    
        $scope.commits = [];
        commitService.init();
        $scope.commits = commitService.getCommits();
    });

    scotchApp.controller('detailsController', function($scope,$routeParams,commitService) {
        $scope.id = $routeParams.id;
        $scope.commit = commitService.getCommit($scope.id);
        
        $scope.sha= $scope.commit["sha"];
        $scope.url= $scope.commit["url"];
        $scope.html_url= $scope.commit["html_url"];
        $scope.comments_url= $scope.commit["comments_url"];
        
        $scope.com= $scope.commit["commit"];
        $scope.parents= $scope.commit["parents"];
        
        $scope.author= $scope.commit["author"];
        $scope.commiter= $scope.commit["commiter"];
        $scope.tree= $scope.commit["tree"];
        
        $scope.msg=$scope.com["message"];
        
        $scope.aut =$scope.com["author"];
        $scope.comi =$scope.com["commiter"];
        $scope.tree =$scope.com["tree"];
        $scope.verif =$scope.com["verification"];
        
    });
    
    scotchApp.controller('errorController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Yeah I am the Main Controller ';
              
    });
    
    