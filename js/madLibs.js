angular.module('madLibs', ['ngAnimate'])
  .controller('inputCtrl', function($scope) {

        $scope.showInputs = true;
        $scope.showStory = false;
        $scope.verified = false;
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

        $scope.relative1 = "Dixie";
            $scope.adjective1 = "red";
            $scope.adjective2 = "blue";
            $scope.adjective3 = "green";
            $scope.person1 = "Lucy";
            $scope.adjective4 = "bumpy";
            $scope.adjective5 = "crazy";
            $scope.verbed = "danced";
            $scope.body = "arm";
            $scope.verbing = "swimming";
            $scope.nounpl = "cars";
            $scope.noun = "bed";
            $scope.adverb = "slight";
            $scope.verb1 = "ate";
            $scope.verb2 = "step";
            $scope.hugenumber = 7000;
            $scope.relative2 = "cousin";
            $scope.person2 = "Molly";

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
                $scope.verified = true;
                $scope.showInputs = false;
                $scope.showStory = true;
            }

        };

        // Reset in order to start over
        $scope.startOver = function() {
            $scope.verified = false;
            $scope.showStory = false;
            $scope.showInputs = true;


            $scope.relative1 = "Dixie";
            $scope.adjective1 = "red";
            $scope.adjective2 = "blue";
            $scope.adjective3 = "green";
            $scope.person1 = "Lucy";
            $scope.adjective4 = "bumpy";
            $scope.adjective5 = "crazy";
            $scope.verbed = "danced";
            $scope.body = "arm";
            $scope.verbing = "swimming";
            $scope.nounpl = "cars";
            $scope.noun = "bed";
            $scope.adverb = "slight";
            $scope.verb1 = "ate";
            $scope.verb2 = "step";
            $scope.hugenumber = 7000;
            $scope.relative2 = "cousin";
            $scope.person2 = "Molly";
        };
    });
