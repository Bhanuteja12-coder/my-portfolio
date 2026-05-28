from rest_framework.generics import ListAPIView
from .models import Projects
from .serializers import ProjectsSerializer

class ProjectsListView(ListAPIView):
    queryset = Projects.objects.all()
    serializer_class = ProjectsSerializer