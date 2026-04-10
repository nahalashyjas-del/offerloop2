from django.shortcuts import render
from rest_framework import viewsets
from .models import Student
from .serializers import StudentSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    
# Create your views here.
@api_view(['POST'])
def student_signup(request):


    serializer = StudentSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

        return Response(serializer.data)


    return Response(serializer.errors)


@api_view(['POST'])
def student_login(request):
    email = request.data.get('email')
    password = request.data.get('password')

    try:
        student = Student.objects.get(email=email)

        # simple password check (plain text)
        if student.password == password:
            return Response({
                "message": "Login successful",
                "name": student.name,
                "email": student.email
            })
        else:
            return Response({
                "error": "Wrong password"
            })

    except Student.DoesNotExist:
        return Response({
            "error": "Student not found"
        })


@api_view(['GET'])
def get_students(request):
    students = Student.objects.all()
    serializer = StudentSerializer(students, many=True)
    return Response(serializer.data)
