from django.db import models

# Create your models here.
class resData(models.Model):
    skills = models.CharField(max_length=250)
    modelResult = models.CharField(max_length=50)
    resumeData = models.CharField(max_length=2000)