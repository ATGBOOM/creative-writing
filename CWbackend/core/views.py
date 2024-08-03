from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import WriteUp, SignUp
from .serializer import WriteUpSerializer, SignUpSerializer
from rest_framework import status

class WriteUpView(APIView):
    def get(self, request):
        writeups = WriteUp.objects.all()
        serializer = WriteUpSerializer(writeups, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = WriteUpSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
class SignUpView(APIView):
    serializer_class = SignUpSerializer

    def get(self, request):
        detail = [{'username': detail.username, 'password': detail.password,
                   'time': detail.time} for detail in SignUp.objects.all()]
        return Response(detail)

    def post(self, request):
        serializer = SignUpSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
