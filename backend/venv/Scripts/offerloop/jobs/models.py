from django.db import models

class Job(models.Model):
    company = models.ForeignKey(
        'companies.Company',  # Use string to avoid circular import
        on_delete=models.CASCADE,
        related_name="jobs"
    )
    job_role = models.CharField(max_length=100)
    ctc = models.FloatField(help_text="CTC in LPA or annual package")
    skills_required = models.TextField()
    job_description = models.TextField()
    vacancies = models.PositiveIntegerField(default=1)

    EMPLOYEE_TYPE_CHOICES = [
        ('Full-time', 'Full-time'),
        ('Part-time', 'Part-time'),
        ('Internship', 'Internship'),
        ('Contract', 'Contract')
    ]
    employee_type = models.CharField(max_length=50, choices=EMPLOYEE_TYPE_CHOICES)

    job_created = models.DateTimeField(auto_now_add=True)
    job_deadline = models.DateTimeField()

    JOB_STATUS_CHOICES = [
        ('Open', 'Open'),
        ('Closed', 'Closed')
    ]
    job_status = models.CharField(max_length=20, choices=JOB_STATUS_CHOICES, default='Open')

    def __str__(self):
        return f"{self.job_role} at {self.company.company_name}"