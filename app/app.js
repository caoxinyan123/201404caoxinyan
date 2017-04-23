// 入口文件
var app=angular.module('myapp',[]);
app.controller('mainctrl',function($scope){
	//$scope.user=0;
	$scope.nav=[
		{'class':'glyphicon glyphicon-home','name':'首页'},
		{'class':'glyphicon glyphicon-file','name':'简介'},
		{'class':'glyphicon glyphicon-envelope','name':'信息'},
		{'class':'glyphicon glyphicon-cog','name':'操作'}
	];
});