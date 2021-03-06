angular.module('madLibs', ['ngAnimate'])
  .controller('inputCtrl', function($scope) {

        $scope.showInputs = true;
        $scope.showStory = false;
        $scope.hugeMin = 2000;

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
        $scope.hugenumtext = "HUGE NUMBER";

        // Validity checking of answers and show story is OK
        $scope.submit = function() {
            console.log("Caught form submission!");

            console.log("Form valid = " + $scope.myForm.$valid);
            if( !$scope.myForm.$valid ) {
                if( $scope.myForm.hugenumber.$error.min ) {
                    console.log('The huge number is too small');
                    $scope.errorMsg = "The huge number must be >= " + $scope.hugeMin + "!";
                } else {
                    console.log('All inputs are required');
                    $scope.errorMsg = "All inputs are required!";
                }
            } else {
                console.log('All inputs are OK');
                $scope.errorMsg = "";
                $scope.showInputs = false;
                $scope.showStory = true;
            }

        };

        // Reset in order to start over
        $scope.startOver = function() {
            $scope.showStory = false;
            $scope.showInputs = true;

            $scope.relative1 = "";
            $scope.adjective1 = "";
            $scope.adjective2 = "";
            $scope.adjective3 = "";
            $scope.person1 = "";
            $scope.adjective4 = "";
            $scope.adjective5 = "";
            $scope.verbed = "";
            $scope.body = "";
            $scope.verbing = "";
            $scope.nounpl = "";
            $scope.noun = "";
            $scope.adverb = "";
            $scope.verb1 = "";
            $scope.verb2 = "";
            $scope.hugenumber = "";
            $scope.relative2 = "";
            $scope.person2 = "";
        };
    });
