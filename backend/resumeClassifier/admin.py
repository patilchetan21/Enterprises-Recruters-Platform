from django.contrib import admin
from .models import resData, hiredCanditate, Commission
# Register your models here.

@admin.register(resData)
class resAdmin(admin.ModelAdmin):
    list_display = ['id', 'skills', 'modelResult', 'resumeData']

@admin.register(hiredCanditate)
class resAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'position', 'email', 'contact', 'status', 'agency', 'agency_contact', 'commission_display']

    def commission_display(self, obj):
        return f"{obj.commission}%"
    commission_display.short_description = 'Commission'

@admin.register(Commission)
class resAdmin(admin.ModelAdmin):
    list_display = ['id', 'number', 'company', 'hiredNumber', 'amount']