from django.urls import path
from .views import add_job, get_jobs, get_job, update_job, delete_job

urlpatterns = [
    path('', get_jobs),                 # GET all jobs
    path('add/', add_job),              # POST
    path('<int:id>/', get_job),         # GET single
    path('update/<int:id>/', update_job),  # PUT
    path('delete/<int:id>/', delete_job),  # DELETE
]