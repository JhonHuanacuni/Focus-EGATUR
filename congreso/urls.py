#rutas que necesita el FronEnt
from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers #agarra la vista y geenra todo los Urls
from congreso import views

#api versioning // versinoado de API
router = routers.DefaultRouter()
router.register(r'tasks', views.TaskView, 'congreso')

urlpatterns = [
    path("api/v1/", include(router.urls)),
    path('docs/', include_docs_urls(title="Paso A"))
]


#genera 
""" GET 
POST
PUT
DELETE """