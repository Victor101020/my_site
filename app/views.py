from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse


def general_page(request):
    return render(request, "index.html")

