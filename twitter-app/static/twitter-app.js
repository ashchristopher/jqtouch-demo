$.jQTouch({
    icon: 'icon.png',
    startupScreen: 'img/startup.png'
});

$(document).ready(function() {
    function update_tweets(){
        var $tweets = $('#tweets');

        // load the tweets
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: '/tweets',
            success: function(data, textStatus, XMLHttpRequest) {
                $tweets.empty();
                data.forEach(function(tweet){
                    $tweets.append("<li><img src='" + tweet.user.profile_image_url + "'/>" + tweet.text + "</li>")
                });
            },
            error: function(XMLHttpRequest, textStatus, errorThrown){
                alert('error');
            }
        });
    }
    
    $("#the-tweets").bind("pageAnimationEnd", function (e, info) {
        if (info.direction == 'in') {
            update_tweets();
        }
    });
    
    $('#refresh').tap(function(e) {
        e.preventDefault();
        update_tweets();
    });
});