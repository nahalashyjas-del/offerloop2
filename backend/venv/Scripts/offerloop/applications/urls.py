from django.urls import path, include
from .views import apply_job, get_applications, get_student_applications, update_applications, delete_applications

urlpatterns = [
    path('apply/', apply_job),
    path('', get_applications),
    path('student/<int:student_id>/', get_student_applications),
    path('update/<int:id>/', update_applications),
    path('delete/<int:id>/', delete_applications),
    
]
