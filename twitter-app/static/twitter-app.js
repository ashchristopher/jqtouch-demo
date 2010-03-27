$.jQTouch({
    icon: 'icon.png',
    startupScreen: 'img/startup.png'
});

$(document).ready(function() {
    var the_data;
    
    $("#the-tweets").bind("pageAnimationEnd", function (e, info) {
        if (info.direction == 'in') {
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
    });
});