from django.urls import path
from . import views

urlpatterns = [
    path('organizations/', views.OrganizationListCreateAPIView.as_view(), name='organization-list-create'),
    path('organizations/<int:pk>/', views.OrganizationRetrieveUpdateDestroyAPIView.as_view(), name='organization-retrieve-update-destroy'),
    path('bots/', views.BotListCreateAPIView.as_view(), name='bot-list-create'),
    path('bots/<int:pk>/', views.BotRetrieveUpdateDestroyAPIView.as_view(), name='bot-retrieve-update-destroy'),
]
