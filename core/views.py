from django.shortcuts import render

# Create your views here.

def index(response):
    return render(response, 'core/index.html', {})

def recyclair(response):
    return render(response, 'core/recyclair.html', {})