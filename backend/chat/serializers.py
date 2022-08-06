from rest_framework.serializers import ModelSerializer, ValidationError
from rest_framework import serializers 
from .models import Chat

from django.contrib.auth import get_user_model

User = get_user_model()

class ChatSerializer(ModelSerializer):
    user = serializers.CharField()
    recipient = serializers.CharField()
    trash_by_user = serializers.BooleanField(read_only=True)
    trash_by_recipient = serializers.BooleanField(read_only=True)
    class Meta:
        model = Chat
        fields = ['id', 'user', 'recipient', 'title', 'body', 'trash_by_user', 'trash_by_recipient']
    
    def create(self, validated_data):
        print(validated_data)
        try:
            user = User.objects.get(email=validated_data['user'])
        except User.DoesNotExist:
            raise ValidationError('This Email Is Not Available.')
        
        try:
            recipient = User.objects.get(email=validated_data['recipient'])
        except User.DoesNotExist:
            raise ValidationError('This Recipient Email Is Not Valied.')
        
        title = validated_data['title']
        body = validated_data['body']
        chat = Chat.objects.create(user=user, recipient=recipient, title=title, body=body)
        return chat