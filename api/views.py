from rest_framework import generics, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import get_user_model
from .models import MovieTicket, Order
from .serializers import UserSerializer, MovieTicketSerializer, OrderSerializer
import random
import string

# Get the User model
User = get_user_model()

# Utility function to generate a random ticket code
def generate_ticket_code():
    return ''.join(random.choices(string.ascii_uppercase + string.digits, k=10))

# Custom permission class to ensure the user is an admin based on their role
class IsAdminRole(IsAuthenticated):
    def has_permission(self, request, view):
        return request.user.role == 'admin'  # Check if the user's role is 'admin'

# User Signup View
class UserSignup(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# User Login View
class UserLogin(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        user = User.objects.filter(email=email).first()
        if user and user.check_password(password):
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            })
        return Response({'error': 'Invalid Credentials'}, status=status.HTTP_401_UNAUTHORIZED)

# MovieTicket List & Create View
class MovieTicketList(generics.ListCreateAPIView):
    queryset = MovieTicket.objects.all()
    serializer_class = MovieTicketSerializer

    def get_permissions(self):
        # Only authenticated users can view the list of tickets
        if self.request.method == 'POST':
            # Only admin users can create tickets
            return [IsAdminRole()]
        return [IsAuthenticated()]  # Everyone can view the list of tickets

# MovieTicket Detail View (Retrieve, Update, Destroy)
class MovieTicketDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = MovieTicket.objects.all()
    serializer_class = MovieTicketSerializer

    def get_permissions(self):
        if self.request.method in ['PUT', 'PATCH', 'DELETE']:
            # Only admin users can update or delete tickets
            return [IsAdminRole()]
        return [IsAuthenticated()]  # Anyone can view the ticket details

# Validate Ticket View (Admin-only)
class ValidateTicket(APIView):
    permission_classes = [IsAdminRole]  # Only admins can validate tickets

    def post(self, request):
        code = request.data.get('code')
        order = Order.objects.filter(ticket_code=code).first()
        if order:
            order.validated = True
            order.save()
            return Response({'status': 'Ticket validated'})
        return Response({'error': 'Invalid Ticket Code'}, status=status.HTTP_400_BAD_REQUEST)

# Checkout View (Authenticated users)
class Checkout(APIView):
    permission_classes = [IsAuthenticated]  # Any authenticated user can checkout

    def post(self, request):
        user = request.user
        cart = request.data.get('cart')  # List of ticket items the user wants to buy
        total_amount = request.data.get('total_amount')
        payment_method = request.data.get('payment_method')

        ticket_codes = []  # List to store ticket codes and movie ticket IDs

        # Iterate over each ticket in the cart
        for item in cart:
            ticket = MovieTicket.objects.get(id=item['id'])  # Fetch the ticket object by ID
            quantity = item['quantity']  # Quantity of this ticket in the cart
            
            # Check if enough stock is available
            if ticket.stock < quantity:
                return Response({'error': f'Not enough stock for {ticket.name}'}, status=status.HTTP_400_BAD_REQUEST)

            # Generate ticket codes for each ticket being purchased
            for _ in range(quantity):
                ticket_code = generate_ticket_code()  # Generate a unique ticket code
                ticket.stock -= 1  # Decrease stock by one for each ticket purchased
                ticket.save()

                # Create an order for each ticket
                order = Order.objects.create(
                    user=user,
                    cart=cart,  # Store the whole cart as a JSON field
                    total_amount=total_amount,
                    payment_method=payment_method,
                    ticket_code=ticket_code,  # Assign a unique ticket code to this order
                    validated=False  # Set default validation status
                )
                
                # Append the ticket ID and generated ticket code to the response list
                ticket_codes.append({
                    'ticket_id': ticket.id,
                    'ticket_code': ticket_code
                })

        # Return the generated ticket codes with corresponding movie ticket IDs
        return Response({'tickets': ticket_codes}, status=status.HTTP_200_OK)
class PurchaseHistory(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        orders = Order.objects.filter(user=user)

        # Prepare the data for the response
        response_data = []
        for order in orders:
            order_details = {
                'order_id': order.id,
                'total_amount': order.total_amount,
                'payment_method': order.payment_method,
                'ticket_code': order.ticket_code,  # Ticket code from the order
                'order_date': order.created_at,  # Order creation date
            }

            # Add tickets associated with the order
            ticket_details = []
            for item in order.cart:
                ticket = MovieTicket.objects.get(id=item['id'])  # Fetch the ticket by ID
                ticket_code = item.get('ticket_code', 'N/A')  # Ticket-specific code from the cart

                # Ticket details
                ticket_details.append({
                    'ticket_id': ticket.id,
                    'ticket_code': order.ticket_code,  # Ticket code from the cart
                    'name': ticket.name,
                    'description': ticket.description,
                    'image_url': ticket.image_url,
                    'cost': ticket.cost,
                    'currency': ticket.currency,
                    'stock': ticket.stock,
                    'time': ticket.time,
                    'date': ticket.date,
                    'place': ticket.place,
                    'seats': ticket.seats,
                    'movie_code': ticket.code,
                })

            order_details['tickets'] = ticket_details
            response_data.append(order_details)

        return Response({'purchase_history': response_data})
