var SongsController  = function($scope, $routeParams, songList) {
  $scope.songService = songList;
  $scope.songID = $routeParams.songID;

  songList.getJSON();

  $scope.$back = function() {
    window.history.back();
  };
};
