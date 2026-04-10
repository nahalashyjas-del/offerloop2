from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import JobApplication
from .serializers import JobApplicationSerializer

# ✅ Apply for Job
@api_view(['POST'])
def apply_job(request):
    serializer = JobApplicationSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Applied successfully", "data": serializer.data})

    return Response(serializer.errors)


# ✅ Get all applications
@api_view(['GET'])
def get_applications(request):
    applications = JobApplication.objects.all()
    serializer = JobApplicationSerializer(applications, many=True)
    return Response(serializer.data)


# ✅ Get applications of a student
@api_view(['GET'])
def get_student_applications(request, student_id):
    applications = JobApplication.objects.filter(student_id=student_id)
    serializer = JobApplicationSerializer(applications, many=True)
    return Response(serializer.data)


# ✅ Update status (HR side)
@api_view(['PUT'])
def update_applications(request, id):
    try:
        application = JobApplication.objects.get(id=id)
    except JobApplication.DoesNotExist:
        return Response({"error": "Application not found"})

    serializer = JobApplicationSerializer(application, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Updated", "data": serializer.data})

    return Response(serializer.errors)


# ✅ Delete application
@api_view(['DELETE'])
def delete_applications(request, id):
    try:
        application = JobApplication.objects.get(id=id)
        application.delete()
        return Response({"message": "Deleted"})
    except JobApplication.DoesNotExist:
        return Response({"error": "Not found"})