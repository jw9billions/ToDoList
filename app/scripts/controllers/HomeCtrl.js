(function() {
    function HomeCtrl(Task) {
      this.tasks = Task.all;
    }

    angular
        .module('to-do-list')
        .controller('HomeCtrl', [ 'Task', HomeCtrl]);
})();
