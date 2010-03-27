import os
from itty import get, run_itty, static_file, content_type, Response
from twitter import Twitter
import localsettings
import simplejson

ROOT = os.path.join(os.path.dirname(__file__), 'twitter-app')

@get('/')
def index(request):
    return get_static(request, 'index.html')

@get('/tweets')
def get_tweets(request):
    twitter = Twitter(localsettings.USERNAME, localsettings.PASSWORD)
    tweets = twitter.statuses.public_timeline()
    return simplejson.dumps(tweets)


@get('/(?P<filename>.+)')
def get_static(request, filename):
    output = static_file(filename, root=ROOT)
    return Response(output, content_type=content_type(filename))

run_itty(host='0.0.0.0')
