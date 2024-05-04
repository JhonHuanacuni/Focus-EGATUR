#rutas que necesita el FronEnt
from django.urls import path, include
from rest_framework import routers #agarra la vista y geenra todo los Urls
from congreso import views

#api versioning // versinoado de API
router = routers.DefaultRouter()
router.register(r'tasks', views.TaskView, 'congreso')

urlpatterns = [
    path("api/v1/", include(router.urls))
]


#genera 
""" GET 
POST
PUT
DELETE """