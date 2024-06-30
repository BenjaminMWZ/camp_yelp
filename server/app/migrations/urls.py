from django.urls import path
from . import apps


urlpatterns = [
    path('/list', apps.list, name='list'),
    path('/add', apps.add, name='add'),
    path('/detail', apps.detail, name='detail'),
    path('/comments', apps.comments, name='comments'),
    path('/comment/add', apps.comment_add, name='comment_add'),
    path('/upload', apps.upload, name='upload'),
    path('/file', apps.file, name='file'),
]   
