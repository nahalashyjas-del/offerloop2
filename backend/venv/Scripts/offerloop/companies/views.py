from django.shortcuts import render

# Create your views here.

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Company
from .serializers import CompanySerializer

# ✅ Create Company
@api_view(['POST'])
def add_company(request):
    serializer = CompanySerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Company added", "data": serializer.data})
    return Response(serializer.errors)


# ✅ Get All Companies
@api_view(['GET'])
def get_companies(request):
    companies = Company.objects.all()
    serializer = CompanySerializer(companies, many=True)
    return Response(serializer.data)


# ✅ Get Single Company
@api_view(['GET'])
def get_company(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist:
        return Response({"error": "Company not found"})

    serializer = CompanySerializer(company)
    return Response(serializer.data)
    
@api_view(['PUT'])
def update_company(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist:
        return Response({"error": "Company not found"})

    serializer = CompanySerializer(company, data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response({
            "message": "Company updated successfully",
            "data": serializer.data
        })

    return Response(serializer.errors)

# ✅ Delete Company
@api_view(['DELETE'])
def delete_company(request, id):
    try:
        company = Company.objects.get(id=id)
        company.delete()
        return Response({"message": "Company deleted"})
    except Company.DoesNotExist:
        return Response({"error": "Company not found"})