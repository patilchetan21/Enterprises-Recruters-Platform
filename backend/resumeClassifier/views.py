from django.shortcuts import render
# from backend.resumeClassifier.models import resData  # if error in query remove this
from .serializers import resumeSerializer
from rest_framework.generics import ListAPIView
from .models import resData

class resumeList(ListAPIView):
    queryset = resData.objects.all()
    serializer_class = resumeSerializer
