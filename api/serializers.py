from rest_framework import serializers  
from django.contrib.auth import get_user_model  
from .models import MovieTicket, Order  
  
User = get_user_model()  
from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'password', 'role']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        # Ensure username is included; otherwise, create a default
        username = validated_data.get('username', None)
        if not username:
            username = validated_data['email']  # Use email as default username
        validated_data['username'] = username

        # Create user with validated data
        user = User.objects.create_user(**validated_data)
        return user


  
class MovieTicketSerializer(serializers.ModelSerializer):  
    class Meta:  
        model = MovieTicket  
        fields = '__all__'  
  
class OrderSerializer(serializers.ModelSerializer):  
    class Meta:  
        model = Order  
        fields = '__all__'  