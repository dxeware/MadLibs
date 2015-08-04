angular.module('madLibs', [])
  .controller('inputCtrl', function($scope) {

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
            $scope.answers[1] = $scope.adjective1;
            $scope.answers[2] = $scope.adjective2;
            $scope.answers[3] = $scope.adjective3;
            $scope.answers[4] = $scope.person1;
            $scope.answers[5] = $scope.adjective4;
            $scope.answers[6] = $scope.person1;
            $scope.answers[7] = $scope.adjective5;
            $scope.answers[8] = $scope.verbed;
            $scope.answers[9] = $scope.body;
            $scope.answers[10] = $scope.verbing;
            $scope.answers[11] = $scope.nounpl;
            $scope.answers[12] = $scope.noun;
            $scope.answers[13] = $scope.adverb;
            $scope.answers[14] = $scope.verb1;
            $scope.answers[15] = $scope.verb2;
            $scope.answers[16] = $scope.relative2;
            $scope.answers[17] = $scope.person2;

        };
    });
