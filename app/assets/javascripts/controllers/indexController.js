var IndexController = function($scope, $http, $location, songList){
  $scope.data = songList;

  songList.getJSON();

  $scope.viewSong = function(songID){
    $location.url('/song/' + songID);
  };


};
