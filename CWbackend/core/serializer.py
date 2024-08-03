# turn the model into JSON format for react

from rest_framework import serializers
from .models import WriteUp
from .models import SignUp


class WriteUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = WriteUp
        fields = ('writeupid', 'title', 'username','description', 'time', 'data', 'image')


class SignUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = SignUp
        fields = ('username', 'password', 'time')
