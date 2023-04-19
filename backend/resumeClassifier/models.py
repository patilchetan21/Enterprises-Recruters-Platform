from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

# Create your models here.
class resData(models.Model):
    skills = models.CharField(max_length=250)
    modelResult = models.CharField(max_length=50)
    resumeData = models.CharField(max_length=2000)

class hiredCanditate(models.Model):
    name = models.CharField(max_length=255)
    position = models.CharField(max_length=255)
    email = models.EmailField()
    contact = models.CharField(max_length=20)
    status = models.CharField(max_length=255)
    commission = models.FloatField(validators=[MinValueValidator(0.0), MaxValueValidator(100.0)])
    agency = models.CharField(max_length=255)
    agency_contact = models.CharField(max_length=75)