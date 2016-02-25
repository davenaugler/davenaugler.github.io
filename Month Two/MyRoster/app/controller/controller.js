app.controller('RosterController', function ($scope) {

    //YOUR CODE HERE
    
    $scope.players = [];
debugger;
    $scope.addPlayer = function () {

        var player = {
            name: $scope.newPlayer.Name,
            position: $scope.newPlayer.Position,
            number: $scope.newPlayer.Number
        }

        $scope.players.push(player);
        $scope.resetPlayer();
    }
    
    $scope.resetPlayer = function()
    {
        $scope.newPlayer = "";
        
    }


})