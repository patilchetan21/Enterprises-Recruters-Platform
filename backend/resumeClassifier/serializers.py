from rest_framework import serializers
from .models import resData

class resumeSerializer(serializers.ModelSerializer):
    class Meta:
        model = resData
        fields = ['id', 'skills', 'modelResult', 'resumeData']