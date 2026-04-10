from rest_framework import serializers
from .models import JobApplication
from students.models import Student
from jobs.models import Job

class JobApplicationSerializer(serializers.ModelSerializer):

    student = serializers.PrimaryKeyRelatedField(
        queryset=Student.objects.all()
    )

    job = serializers.PrimaryKeyRelatedField(
        queryset=Job.objects.all()
    )

    class Meta:
        model = JobApplication
        fields = '__all__'

    # ✅ Extra validation (optional but best)
    def validate(self, data):
        student = data.get('student')
        job = data.get('job')

        # prevent duplicate application
        if JobApplication.objects.filter(student=student, job=job).exists():
            raise serializers.ValidationError("Already applied for this job")

        return data