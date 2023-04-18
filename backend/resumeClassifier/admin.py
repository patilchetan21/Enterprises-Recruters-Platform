from django.contrib import admin
from .models import resData
# Register your models here.

@admin.register(resData)
class resAdmin(admin.ModelAdmin):
    list_display = ['id', 'skills', 'modelResult', 'resumeData']