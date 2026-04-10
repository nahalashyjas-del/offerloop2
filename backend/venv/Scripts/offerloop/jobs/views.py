from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Job
from .serializers import JobSerializer

# ✅ Add Job
@api_view(['POST'])
def add_job(request):
    serializer = JobSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Job added", "data": serializer.data})
    return Response(serializer.errors)


# ✅ Get All Jobs
@api_view(['GET'])
def get_jobs(request):
    jobs = Job.objects.all()
    serializer = JobSerializer(jobs, many=True)
    return Response(serializer.data)


# ✅ Get Single Job
@api_view(['GET'])
def get_job(request, id):
    try:
        job = Job.objects.get(id=id)
    except Job.DoesNotExist:
        return Response({"error": "Job not found"})

    serializer = JobSerializer(job)
    return Response(serializer.data)


# ✅ Update Job
@api_view(['PUT'])
def update_job(request, id):
    try:
        job = Job.objects.get(id=id)
    except Job.DoesNotExist:
        return Response({"error": "Job not found"})

    serializer = JobSerializer(job, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Job updated", "data": serializer.data})
    return Response(serializer.errors)


# ✅ Delete Job
@api_view(['DELETE'])
def delete_job(request, id):
    try:
        job = Job.objects.get(id=id)
        job.delete()
        return Response({"message": "Job deleted"})
    except Job.DoesNotExist:
        return Response({"error": "Job not found"})