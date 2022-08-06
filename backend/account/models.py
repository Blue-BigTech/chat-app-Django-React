from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin,BaseUserManager
# Create your models here.


class CustomUserManager(BaseUserManager):
    def create_user(self, email, password, **other_fields):
        if not email:
            raise ValueError('You must provide email address')
        email = email.lower()
        user = self.model(email=email, **other_fields)
        user.set_password(password)
        user.save()
        return user
        
        

    def create_superuser(self, email, password, **other_fields):
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_staff', True)

        return self.create_user(email, password, **other_fields)



class MyUser(AbstractBaseUser, PermissionsMixin):
    id = models.AutoField(primary_key=True)
    email = models.EmailField(max_length=90, blank=False, unique=True)
    timeStamp = models.DateTimeField(auto_now_add=True, blank=True)

    
    is_active = models.BooleanField(default=True)
    is_superuser = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    
    objects = CustomUserManager()

    USERNAME_FIELD = 'email'

    

    def __str__(self):
        return self.email
