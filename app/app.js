// ����ļ�
var app=angular.module('myapp',[]);
app.controller('mainctrl',function($scope){
	//$scope.user=0;
	$scope.nav=[
		{'class':'glyphicon glyphicon-home','name':'��ҳ'},
		{'class':'glyphicon glyphicon-file','name':'���'},
		{'class':'glyphicon glyphicon-envelope','name':'��Ϣ'},
		{'class':'glyphicon glyphicon-cog','name':'����'}
	];
});