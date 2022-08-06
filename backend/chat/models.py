from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()
# Create your models here.
class Chat(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=False, blank=False,  related_name='User')
    recipient = models.ForeignKey(User, on_delete=models.CASCADE, null=False, blank=False,  related_name='Recipient')
    title = models.CharField('Title', max_length=100, blank=False)
    body = models.TextField('Body')
    trash_by_user = models.BooleanField(default=False)
    trash_by_recipient = models.BooleanField(default=False)
    def __str__(self):
        return self.title