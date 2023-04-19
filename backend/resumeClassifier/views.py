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

# candidate1 = hiredCanditate.objects.create(
#     name='John Doe',
#     email='johndoe@example.com',
#     contact='+1 123-456-7890',
#     position='Software Developer',
#     status='Pending',
#     commission='10',
#     agency='ABC Staffing',
#     agency_contact='Jane Smith'
# )

# candidate2 = hiredCanditate.objects.create(
#     name='Jane Doe',
#     email='janedoe@example.com',
#     contact='+1 234-567-8901',
#     position='UI/UX Designer',
#     status='Interviewing',
#     commission='15',
#     agency='XYZ Staffing',
#     agency_contact='John Smith'
# )

# candidate3 = hiredCanditate.objects.create(
#     name='Jim Smith',
#     email='jimsmith@example.com',
#     contact='+1 345-678-9012',
#     position='Data Analyst',
#     status='Hired',
#     commission='20',
#     agency='DEF Staffing',
#     agency_contact='Mark Johnson'
# )
