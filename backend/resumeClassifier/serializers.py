from rest_framework import serializers
from .models import resData, hiredCanditate, Commission

class resumeSerializer(serializers.ModelSerializer):
    class Meta:
        model = resData
        fields = ['id', 'skills', 'modelResult', 'resumeData']

class hiredCanditateSerializer(serializers.ModelSerializer):
    class Meta:
        model = hiredCanditate
        fields = ['id', 'name', 'position', 'email', 'contact', 'status', 'agency', 'agency_contact', 'commission']

class CommissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Commission
        fields = ['id', 'number', 'company', 'hiredNumber', 'amount']

