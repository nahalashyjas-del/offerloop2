from django.db import models

class Company(models.Model):

    company_id = models.CharField(max_length=20, unique=True)

    company_name = models.CharField(max_length=150)

    company_address = models.TextField()

    company_details = models.TextField()

    hr_name = models.CharField(max_length=100)

    hr_email = models.EmailField()

    hr_contact = models.CharField(max_length=15)

    company_website = models.URLField(blank=True, null=True)

    industry_type = models.CharField(max_length=100)

    # Added fields for job listings
    role = models.CharField(max_length=150, blank=True, null=True)
    package = models.CharField(max_length=150, blank=True, null=True)
    eligibility = models.CharField(max_length=150, blank=True, null=True)
    min_cgpa = models.FloatField(default=0.0)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.company_name