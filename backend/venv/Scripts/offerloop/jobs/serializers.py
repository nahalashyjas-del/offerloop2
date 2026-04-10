from rest_framework import serializers
from .models import Job
from companies.models import Company
from companies.serializers import CompanySerializer

class JobSerializer(serializers.ModelSerializer):

    # For POST/PUT (write)
    company = serializers.PrimaryKeyRelatedField(
        queryset=Company.objects.all()
    )

    # For GET (read - extra info)
    company_details = CompanySerializer(source='company', read_only=True)

    class Meta:
        model = Job
        fields = '__all__'