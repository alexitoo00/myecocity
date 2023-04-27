from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('recyclair',views.recyclair, name='recyclair'),
]