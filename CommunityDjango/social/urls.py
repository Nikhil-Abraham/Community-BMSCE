from django.urls import path,include
from . import views

app_name = 'social'
urlpatterns = [
  path('',views.socialHome,name='index'),
  path('explore/',views.explore,name='explore'),

]
