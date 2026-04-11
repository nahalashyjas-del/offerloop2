from rest_framework.routers import DefaultRouter
from .views import StudentViewSet

router = DefaultRouter()
router.register(r'students', StudentViewSet)

urlpatterns = router.urls
from django.urls import path
from .views import student_signup, student_login, get_students, admin_login

urlpatterns = [
    path('signup/', student_signup, name='student-signup'),
    path('login/', student_login, name='student-login'),
    path('admin/login/', admin_login, name='admin-login'),
    path('', get_students, name='get-students'),
    
]