from django.db import models  
from django.contrib.auth.models import AbstractUser
from django.utils import timezone 
  
class User(AbstractUser):
    email = models.EmailField(unique=True)
    role = models.CharField(max_length=10, choices=[('admin', 'Admin'), ('user', 'User')])

    # Custom related_name to prevent conflicts with the default User model
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='custom_user_set',  # Specify a custom related_name
        blank=True,
    )

    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='custom_user_permissions_set',  # Specify a custom related_name
        blank=True,
    )

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
  
class MovieTicket(models.Model):  
    name = models.CharField(max_length=255)  
    description = models.TextField()  
    image_url = models.URLField()  
    cost = models.IntegerField()  
    currency = models.CharField(max_length=10)  
    stock = models.IntegerField()  
    time = models.DateTimeField()  
    date = models.DateField()  
    place = models.CharField(max_length=255)  
    seats = models.IntegerField()  
    code = models.CharField(max_length=100, unique=True)  
  
class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    cart = models.JSONField()  # Store the cart items as a JSON field
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    payment_method = models.CharField(max_length=50)
    ticket_code = models.CharField(max_length=100, unique=True)
    validated = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)  # Auto set when the order is created

    def __str__(self):
        return f"Order {self.id} by {self.user.email}"
 