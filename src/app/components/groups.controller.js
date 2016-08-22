export class GroupsController {
  constructor ($scope, Group) {
    'ngInject';

    Group.query().then(groups => $scope.groups = groups);
    $scope.newPost    = new Group();


    // $scope.create = function(name) {
    //   Group.save({name: name}, function(name) {
    //     $scope.groups.push(name);
    //   });
    // };

  // 
  // $scope.create = function(newPost) {
  //   if (newPost.name == null) {
  //     newPost.name = '';
  //   }
  //   // or if you have underscore or lodash:
  //   // lodash.defaults(newPost, { title: '' });
  //   Group.save(newGroup);
  // };

  }
}
