(function(){
  function Task($firebaseArray) {
    var ref = firebase.database().ref().child("tasks");
    var tasks = $firebaseArray(ref);

    var confirmedCompleted = function (task) {
                                  task.completed = true;
                                  tasks.$save(task)
                              };
    var confirmedIncompleted = function (task) {
                                  task.completed = false;
                                  tasks.$save(task)
                              };

    var dayOfYearToDate = function dateFromDay(day){
      var year = moment().year()
      var date = new Date(year, 0); // initialize a date in 'year-01-01'

      return new Date(date.setDate(day)); // add the number of days
    }


    return {
      all: tasks,
      addTask: function(newTask) {
                  tasks.$add(newTask);
                },
      completeTask: confirmedCompleted,
      incompleteTask: confirmedIncompleted
    }
  };

  angular
    .module('to-do-list')
    .factory('Task', ['$firebaseArray', Task]);
})();
