$(document).ready(function () {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', $('.active-song').attr('data-src'));
    audioElement.type = 'audio/mp3';

    var tl = new TimelineMax();
    tl.to('.player__albumImg', 3, {
        rotation: '360deg',
        repeat: -1,
        ease: Power0.easeNone
    }, '-=0.2');
    tl.pause();

    $('.player__play').click(function () {

        if ($('.player').hasClass('play')) {
            $('.player').removeClass('play');
            audioElement.pause();
            TweenMax.to('.player__albumImg', 0.2, {
                scale: 1,
                ease: Power0.easeNone
            })
            tl.pause();
        } else {
            $('.player').addClass('play');
            audioElement.play();
            TweenMax.to('.player__albumImg', 0.2, {
                scale: 1.1,
                ease: Power0.easeNone
            })
            tl.resume();
        }

    });


    var playhead = document.getElementById("playhead");
    audioElement.addEventListener("timeupdate", function () {
        var duration = this.duration;
        var currentTime = this.currentTime;
        var percentage = (currentTime / duration) * 100;
        playhead.style.width = percentage * 4 + 'px';
    });

    function updateInfo() {
        $('.player__author').text($('.active-song').attr('data-author'));
        $('.player__song').text($('.active-song').attr('data-song'));
    }
    updateInfo();

    $('.player__next').click(function () {
        if ($('.player .player__albumImg.active-song').is(':last-child')) {
            $('.player__albumImg.active-song').removeClass('active-song');
            $('.player .player__albumImg:first-child').addClass('active-song');
            audioElement.addEventListener("timeupdate", function () {
                var duration = this.duration;
                var currentTime = this.currentTime;
                var percentage = (currentTime / duration) * 100;
                playhead.style.width = percentage * 4 + 'px';
            });
        } else {
            $('.player__albumImg.active-song').removeClass('active-song').next().addClass('active-song');
            audioElement.addEventListener("timeupdate", function () {
                var duration = this.duration;
                var currentTime = this.currentTime;
                var percentage = (currentTime / duration) * 100;
                playhead.style.width = percentage + '%';
            });
        }
        updateInfo();
        audioElement.setAttribute('src', $('.active-song').attr('data-src'));
        audioElement.play();
    });

    $('.player__prev').click(function () {
        if ($('.player .player__albumImg.active-song').is(':first-child')) {
            $('.player__albumImg.active-song').removeClass('active-song');
            $('.player .player__albumImg:last-child').addClass('active-song');
            audioElement.addEventListener("timeupdate", function () {
                var duration = this.duration;
                var currentTime = this.currentTime;
                var percentage = (currentTime / duration) * 100;
                playhead.style.width = percentage * 4 + 'px';
            });
        } else {
            $('.player__albumImg.active-song').removeClass('active-song').prev().addClass('active-song');
            audioElement.addEventListener("timeupdate", function () {
                var duration = this.duration;
                var currentTime = this.currentTime;
                var percentage = (currentTime / duration) * 100;
                playhead.style.width = percentage + 'px';
            });
        }
        updateInfo();
        audioElement.setAttribute('src', $('.active-song').attr('data-src'));
        audioElement.play();
    });
	
	
	$('#auto').bbslider({auto: true, timer: 3000, controls: false, loop: true, pauseOnHit: false});	
	
	function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}



function setRandomColor() {

  $(".titulo1").css("color", getRandomColor());
  $(".titulo2").css("color", getRandomColor());
  var options = {};
  $( ".titulo1" ).effect( "pulsate",options,300);
  $( ".titulo2" ).effect( "pulsate",options,300);
  
} 

setInterval(setRandomColor, 2000);	

});