(function(){
  function Task($firebaseArray) {
    var ref = firebase.database().ref().child("tasks");
    var tasks = $firebaseArray(ref);

    return {
      all: tasks,
      add: function(newTask) {
        tasks.$add({name: newTask});
      }
    }
  };

  angular
    .module('to-do-list')
    .factory('Task', ['$firebaseArray', Task]);


})();
