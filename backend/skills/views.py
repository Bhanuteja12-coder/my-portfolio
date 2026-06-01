from django.shortcuts import render
from rest_framework.generics import ListAPIView
from .models import Skill
from .serializers import SkillSerializer
# Create your views here.

class SkillListView(ListAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer
