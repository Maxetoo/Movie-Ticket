from django.urls import path  
from .views import UserSignup, UserLogin, MovieTicketList, MovieTicketDetail, ValidateTicket, Checkout, PurchaseHistory  
  
urlpatterns = [  
    path('signup/', UserSignup.as_view(), name='signup'),  
    path('login/', UserLogin.as_view(), name='login'),  
    path('tickets/', MovieTicketList.as_view(), name='tickets_list'),  
    path('tickets/<int:pk>/', MovieTicketDetail.as_view(), name='ticket_detail'),  
    path('validate_ticket/', ValidateTicket.as_view(), name='validate_ticket'),  
    path('checkout/', Checkout.as_view(), name='checkout'),  
    path('purchase-history/', PurchaseHistory.as_view(), name='purchase-history'),
]  