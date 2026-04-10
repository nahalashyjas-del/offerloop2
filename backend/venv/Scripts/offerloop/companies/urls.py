from django.urls import path
from .views import add_company, get_companies, get_company, delete_company, update_company

urlpatterns = [
    path('', get_companies),                     # GET all
    path('add/', add_company),                  # POST
    path('<int:id>/', get_company),             # GET single
    path('delete/<int:id>/', delete_company),   # DELETE
    path('update/<int:id>/', update_company),   # PUT
]