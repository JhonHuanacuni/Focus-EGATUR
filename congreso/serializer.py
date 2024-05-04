from rest_framework import serializers
from .models import Task

# La clase TaskSerializer convierte objetos del modelo Task en datos JSON con todos los campos del modelo
class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
    #    fields = ("id", "title", "description", "done")
        fields= "__all__"
