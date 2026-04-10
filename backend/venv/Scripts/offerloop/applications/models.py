from django.db import models

class JobApplication(models.Model):

    student = models.ForeignKey(
        'students.Student',
        on_delete=models.CASCADE
    )

    job = models.ForeignKey(
        'jobs.Job',
        on_delete=models.CASCADE
    )

    status = models.CharField(
        max_length=20,
        choices=[
            ('applied', 'Applied'),
            ('shortlisted', 'Shortlisted'),
            ('rejected', 'Rejected')
        ],
        default='applied'
    )

    applied_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.student.name} - {self.job.job_role}"