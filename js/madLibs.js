angular.module('madLibs', [])
  .controller('inputCtrl', function($scope) {

        console.log("controller called...");
        //Text values for input placeholder
        $scope.adjtext = "ADJECTIVE";
        $scope.relativetext = "RELATIVE";
        $scope.persontext = "NAME OF PERSON IN ROOM";
        $scope.verbedtext = "VERB ENDING IN 'ED'";
        $scope.bodytext = "BODY PART";
        $scope.verbingtext = "VERB ENDING IN 'ING'";
        $scope.nounpltext = "NOUN (PLURAL)";
        $scope.nountext = "NOUN";
        $scope.adverbtext = "ADVERB";
        $scope.verbtext = "VERB";

        $scope.answers = [];

        $scope.fillIn = function() {
           $scope.answers[0] = $scope.relative1;
           console.log("fill controller called...");
        };
    });
