var app=angular.module('myapp',[])

app.controller('mainctrl',function($scope){
	$scope.user={img:'images/a0.jpg',name:'别无所求',place:'石家庄，河北',job:'IT大牛'};
	$scope.fensi=[
			{'img':'images/a1.jpg','name':'小王','age':25,'job':'设计师，博客'},
			{'img':'images/a2.jpg','name':'张琳','age':22,'job':'作家，杂志编辑'},
			{'img':'images/a3.jpg','name':'李小明','age':27,'job':'艺术总监，电影剪辑'},
			{'img':'images/a4.jpg','name':'赵大城','age':20,'job':'音乐家，运动员'}
			];
	$scope.nav=[{'name':'首页'},{'name':'简介'},{'name':'信息'},{'name':'操作'}];
});
app.directive("directive",function(){
	return function(scope,element,attrs){
		var items = element.find("ul");
		for (var i = 0; i < items.length; i++) {
			if(items.eq(i).text() == "操作"){
				items.eq(i).on("click",function(){
                    var ite=element.find("ul");
                    for (var i =0; i < ite.length; i++) {
                        if (ite.eq(i).display() == "none") {
                        	ite.eq(i).css("display","block");
                        };            
                    };
				});
			};
		};
		
	}
})
var ap=angular.module('mycg',['ngRoute'])
ap.config('$routeProvider',function($p){
	$p
	.when('/jianjie',{templateUrl:'jianjie.html'})
	.when('xiaoxi',{templateUrl:'xiaoxi.html'})
	.otherwise({redirectTo:'/'});
})

