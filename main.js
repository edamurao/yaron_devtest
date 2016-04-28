//console.log('Happy Coding!');
var test;
function onYouTubePlayerReady(playerId) {
    test = document.getElementById("myytplayer");
    ytplayer = document.getElementById("myytplayer");    
    //ytplayer.playVideo();

    ytplayer.addEventListener("onStateChange", "onytplayerStateChange");
}

function onytplayerStateChange(newState) {
    switch (newState) {
        case 1:
            setInterval(function () {
                var currTime = Math.floor(test.getCurrentTime());
                if (currTime === 10) {
                    //show coupon code
                    $('#panelCoupon').show();
                }
            }, 1000);
            break;
        case 0:
            //show registration form
            $('#panelSignUp').show();
            break;
        default:

    }    
}

$(document).ready(function () {
    var params = { allowScriptAccess: "always" };
    var atts = { id: "myytplayer" };
    swfobject.embedSWF("http://www.youtube.com/v/BIh1Sm4DyAE?enablejsapi=1&playerapiid=ytplayer&version=3",
                       "ytapiplayer", "810", "455", "8", null, null, params, atts);

    //swfobject.embedSWF("http://localhost:2978/test/vid/test.swf",
    //               "ytapiplayer", "810", "455", "8", null, null, params, atts);

    $('#panelCoupon').hide();
    $('#panelSignUp').hide();

    $('#panelCouponCloseBtn').click(function (e) {
        e.preventDefault();
        $('#panelCoupon').hide();
    });
    
    $('#panelSignUpCloseBtn').click(function (e) {
        e.preventDefault();
        $('#panelSignUp').hide();
    });
});