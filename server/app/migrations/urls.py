from django.urls import path
from . import apps


urlpatterns = [
    path('/list', apps.list, name='list'),
]
