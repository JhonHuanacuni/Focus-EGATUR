# Generated by Django 5.0.4 on 2024-05-03 17:19

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('descripcion', models.TextField(blank=True)),
                ('done', models.BooleanField(default=False)),
            ],
        ),
    ]