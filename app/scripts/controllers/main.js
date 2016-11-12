'use strict';

/**
 * @ngdoc function
 * @name manaoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the manaoApp
 */
angular.module('manaoApp')
  .controller('MainCtrl', function ($scope, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.main = function () {
        $(document).ready(function () {
        	var height = $(window).height();
          var titleHeight = $('.header').height();
          var marginTop = (height/2) - (titleHeight/2) - 50;
          $('.title').css({"marginTop":marginTop});
          setTimeout(function(){
            $('#pitch').removeClass('hidden');
            $('#pitch').animate({
              marginTop:"10px"
            },500)
          },2200);
          setTimeout(function(){
            $('#pitch').animate({
              opacity:0
            },500)
            $('.header').animate({
              marginTop:-marginTop+40,
              width:"70%",
              marginLeft:"15%"
            },500)
          },3000);
        	$scope.resize();

        	$(window).on('resize',function(){
        		$scope.resize();
        	})
        	var buttons = false;
        	$("#video video").on("timeupdate",function(event){

			      if (this.currentTime > 6 && !buttons) {
			      	$('#buttons').removeClass('hidden');
			      	buttons = true;
			      };
			      if(this.currentTime < 6 && buttons){
			      	$('#buttons').addClass('hidden');
			      	buttons = false;
			      }
			});
			
		});	

         
      };

      $scope.videoPlay = function(){
      	$("#video video").get(0).play();
      	$(".play").addClass("hidden");
      	$(".pause").removeClass("hidden");
      }

      $scope.videoPause = function(){
      	$("#video video").get(0).pause();
      	$(".play").removeClass("hidden");
      	$(".pause").addClass("hidden");
      }

      $scope.videoSoundOn = function(){
      	$("#video video").prop('muted',true);
      	$(".soundOff").removeClass("hidden");
      	$(".soundOn").addClass("hidden");
      }

      $scope.videoSoundOff = function(){
      	$("#video video").prop('muted',false);
      	$(".soundOff").addClass("hidden");
      	$(".soundOn").removeClass("hidden");
      }

      $scope.launchVideo = function(){
      	$('#video').removeClass("hidden");
      	$('#mainButtons').addClass('hidden');
      }

      $scope.displayText = function(){
        $('#description').removeClass('hidden');
        $('#mainButtons').addClass('hidden');
        $('#title').addClass('hidden');
        $('#pitch').addClass('hidden');
      }

      $scope.videoSkip = function(){

      	var vid = $('#video video');
      	vid.setCurrentTime = 7;
      }

      $scope.resize = function(){
      	var height = $(window).height() - 40;
        $('#video video').css('height',height);
        var width = $(window).width() - 40;
        $('#video video').css('width',width);
      }

      $scope.go = function(path){
     		console.log(path);
     		$location.path(path);
     	};

      $scope.main();
  });
