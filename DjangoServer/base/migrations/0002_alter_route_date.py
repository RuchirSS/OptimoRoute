# Generated by Django 4.1.13 on 2024-04-20 03:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='route',
            name='date',
            field=models.DateField(),
        ),
    ]
