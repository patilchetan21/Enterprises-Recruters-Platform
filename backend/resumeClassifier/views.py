from django.shortcuts import render
# from backend.resumeClassifier.models import resData  # if error in query remove this
from .serializers import resumeSerializer
from rest_framework.generics import ListAPIView
from .models import resData, hiredCanditate, Commission
from .serializers import hiredCanditateSerializer,CommissionSerializer



class resumeList(ListAPIView):
    queryset = resData.objects.all()
    serializer_class = resumeSerializer


class hiredCanditateList(ListAPIView):
    queryset = hiredCanditate.objects.all()
    serializer_class = hiredCanditateSerializer

class CommissionList(ListAPIView):
    queryset = Commission.objects.all()
    serializer_class = CommissionSerializer



