from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse


def home_page(request):
    host = request.META["HTTP_HOST"]
    user_agent = request.META["HTTP_USER_AGENT"]
    path = request.path

    return HttpResponse('<p>Hello World</p>'
                        '<p>HOST: {}</p>'
                        '<p>USER_AGENT: {}</p>'
                        '<p>Path: {}</p>'.format(host, user_agent, path))


