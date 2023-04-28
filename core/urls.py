from django.urls import path
from . import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('', views.index, name='index'),
    path('recyclair', views.recyclair, name='recyclair'),
    path('json/', views.display_json, name='display_json'),
    path('update-points/', views.update_points, name='update_points'),
]
