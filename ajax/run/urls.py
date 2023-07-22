from django.urls import path
from . import views

urlpatterns = [
    path('',views.home,name="home"),
    path('ajax_response/<number>/',views.ajax_response),
    path('send-comment/',views.add_comment),
]
