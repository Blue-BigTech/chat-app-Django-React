from rest_framework.response import Response
from rest_framework import status
from chat.models import Chat
from chat.serializers import ChatSerializer
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import action
from django.db.models import Q


# Create your views here.
class ChatView(viewsets.ModelViewSet):
    serializer_class = ChatSerializer
    queryset = Chat.objects.all().order_by('-id')

    def list(self, request, *args, **kwargs):
        user = request.user
        user_chat = Q(user=user, trash_by_user=False)
        recipient_chat = Q(recipient=user,  trash_by_recipient=False)
        chats = Chat.objects.filter(user_chat | recipient_chat).order_by('-id')
        serializer = self.get_serializer(chats, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)


    def create(self, request, *args, **kwargs):
        user = request.user
        if(user.email == request.data['recipient']):
            return Response(['Both the email are same'], status=status.HTTP_400_BAD_REQUEST)
        return super().create(request, *args, **kwargs)

    def retrieve(self, request, *args, **kwargs):
        try:
            chat = Chat.objects.get(id=kwargs['pk'])
        except Chat.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        user = request.user

        if(user == chat.user or chat.recipient == user):
            return super().retrieve(request, *args, **kwargs)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def destroy(self, request, *args, **kwargs):
        try:
            chat = Chat.objects.get(id=kwargs['pk'])
        except Chat.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        user = request.user
        if(user == chat.user):
            return super().destroy(request, *args, **kwargs)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)

            
    @action(detail=True, methods=['post'])
    def trash(self, request, *args, **kwargs):
        print('in')
        try:
            chat = Chat.objects.get(id=kwargs['pk'])
        except Chat.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        user = request.user
        if(user == chat.user):
            chat.trash_by_user = True
            chat.save()
            return Response(status=status.HTTP_200_OK)
        elif(user == chat.recipient):
            chat.trash_by_recipient = True
            chat.save()
            return Response(status=status.HTTP_200_OK)

        else:
            return Response(status=status.HTTP_404_NOT_FOUND)
            
    @action(detail=True, methods=['post'])
    def rmtrash(self, request, *args, **kwargs):
        print('in')
        try:
            chat = Chat.objects.get(id=kwargs['pk'])
        except Chat.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        user = request.user
        if(user == chat.user):
            chat.trash_by_user = False
            chat.save()
            return Response(status=status.HTTP_200_OK)
        elif(user == chat.recipient):
            chat.trash_by_recipient = False
            chat.save()
            return Response(status=status.HTTP_200_OK)

        else:
            return Response(status=status.HTTP_404_NOT_FOUND)
            
    @action(detail=False, methods=['get'])
    def getrash(self, request, *args, **kwargs):
        user = request.user
        user_chat = Q(user=user, trash_by_user=True)
        recipient_chat = Q(recipient=user,  trash_by_recipient=True)
        chats = Chat.objects.filter(user_chat | recipient_chat).order_by('-id')
        serializer = self.get_serializer(chats, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
        
            

    @action(detail=False, methods=['get'])
    def sent(self, request, *args, **kwargs):
        user = request.user
        chats = Chat.objects.filter(user=user)
        chats = chats.filter(trash_by_user=False).order_by('-id')
        serializer = self.get_serializer(chats, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
        

    @action(detail=False, methods=['get'])
    def received(self, request, *args, **kwargs):
        user = request.user
        chats = Chat.objects.filter(recipient=user)
        chats = chats.filter(trash_by_recipient=False).order_by('-id')
        serializer = self.get_serializer(chats, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
        
