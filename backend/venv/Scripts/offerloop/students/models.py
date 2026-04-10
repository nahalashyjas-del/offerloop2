from django.db import models

class Student(models.Model):

    name = models.CharField(max_length=100)
    usn = models.CharField(max_length=20, unique=True)

    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)

    contact_number = models.CharField(max_length=15)

    profile_photo = models.URLField(blank=True, null=True)
    resume_link = models.URLField(blank=True, null=True)
    portfolio_link = models.URLField(blank=True, null=True)

    address = models.TextField()

    dob = models.DateField()

    cgpa = models.FloatField()

    education = models.CharField(max_length=200)

    experience = models.TextField(blank=True, null=True)

    projects = models.TextField(blank=True, null=True)

    skills = models.TextField(blank=True, null=True)

    socials = models.JSONField(blank=True, null=True)

    career_preference = models.CharField(max_length=200)

    expected_ctc = models.FloatField()

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.usn}"