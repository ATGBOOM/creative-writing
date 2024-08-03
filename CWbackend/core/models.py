from django.db import models
from django.contrib.auth.models import AbstractUser
import time
import string
import random


def generate_custom_id(length=8):
    timestamp = int(time.time() * 1000)  # Current time in milliseconds
    random_string = ''.join(random.choices(
        string.ascii_letters + string.digits, k=length))
    custom_id = f"{timestamp}{random_string}"
    return custom_id


class SignUp(models.Model):
    username = models.CharField(max_length=50, primary_key=True)
    password = models.CharField(max_length=20)
    time = models.DateTimeField(auto_now_add=True)


class WriteUp(models.Model):
    writeupid = models.CharField(max_length=255, unique=True, editable=False)
    title = models.CharField(max_length=200)
    username = models.ForeignKey(SignUp, on_delete=models.CASCADE)
    description = models.CharField(max_length=300)
    time = models.DateTimeField(auto_now_add=True)
    data = models.CharField(max_length=5000)
    image = models.ImageField(upload_to='blog_images/', null=True, blank=True)

    def save(self, *args, **kwargs):
        if not self.writeupid:
            self.writeupid = generate_custom_id()
        super(WriteUp, self).save(*args, **kwargs)


class Comments(models.Model):
    username = models.ForeignKey(SignUp, on_delete=models.CASCADE)
    writeupid = models.ForeignKey(WriteUp, on_delete=models.CASCADE)
    data = models.CharField(max_length=600)
