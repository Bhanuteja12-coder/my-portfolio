from django.urls import path
from .views import ProjectsListView

urlpatterns = [
    path('projects/', ProjectsListView.as_view()),
]