from rest_framework import generics
from .models import Organization, Bot
from .serializers import OrganizationSerializer, BotSerializer

class OrganizationListCreateAPIView(generics.ListCreateAPIView):
    queryset = Organization.objects.all()
    serializer_class = OrganizationSerializer

class OrganizationRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Organization.objects.all()
    serializer_class = OrganizationSerializer

class BotListCreateAPIView(generics.ListCreateAPIView):
    queryset = Bot.objects.all()
    serializer_class = BotSerializer

class BotRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Bot.objects.all()
    serializer_class = BotSerializer
