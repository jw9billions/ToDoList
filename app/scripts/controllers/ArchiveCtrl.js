(function(){
  function ArchiveCtrl(Task) {
    this.tasks = Task.all;

    this.show = function(task) {
      return task.created > (moment().dayOfYear()-7) && task.completed == false
    };
  }

angular
  .module('to-do-list')
  .controller('ArchiveCtrl', ['Task', ArchiveCtrl]);
})();
