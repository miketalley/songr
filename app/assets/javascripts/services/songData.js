angular.module('SongsApp').factory('songList', ['$http', function($http){

  var songList = {
    songs: [
      {title: 'Song Loading...', artist: '', price: '', duration: ''}
    ]
  };

  populateSongs = function(data){
    songList.songs = data;
    console.log('Songs Populated!');
  };

  errorEventHandler = function(){
    console.log('Unable to retrieve songs.json');
  };

  songList.getJSON = function(){
    $http.get('./songs.json')
      .success(populateSongs)
      .error(errorEventHandler);
  };

  return songList;

}]);

