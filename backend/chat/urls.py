from django.urls import path
from django.urls.conf import include
from rest_framework import routers
from .views import *

router = routers.SimpleRouter()
router.register(r'chats', ChatView)

urlpatterns = [
    # path(r'/', ),
]

urlpatterns += router.urls