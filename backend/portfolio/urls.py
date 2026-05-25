from django.urls import path
from .views import ProfileListView

urlpatterns = [
    path('profile/', ProfileListView.as_view()),
]