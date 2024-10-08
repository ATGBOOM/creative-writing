# Generated by Django 4.2.5 on 2024-07-28 12:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='SignUp',
            fields=[
                ('username', models.CharField(max_length=50, primary_key=True, serialize=False)),
                ('password', models.CharField(max_length=20)),
                ('time', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='WriteUp',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('writeupid', models.CharField(editable=False, max_length=255, unique=True)),
                ('title', models.CharField(max_length=50)),
                ('description', models.CharField(max_length=100)),
                ('time', models.DateTimeField(auto_now_add=True)),
                ('data', models.CharField(max_length=600)),
                ('username', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.signup')),
            ],
        ),
        migrations.CreateModel(
            name='Comments',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('data', models.CharField(max_length=600)),
                ('username', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.signup')),
                ('writeupid', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.writeup')),
            ],
        ),
    ]
