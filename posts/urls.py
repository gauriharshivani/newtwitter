from django.urls import path
from . import views
from django.urls.resolvers import URLPattern 

urlpatterns = [
    path('', views.index, name='index'),
    path('delete/<int:post_id>/', views.delete, name='delete'),
    path('edit/<int:post_id>/', views.edit, name='edit'),
    path('likes/<int:id>/', views.likes, name='like'),
]
