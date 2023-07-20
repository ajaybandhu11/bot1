from django.db import models




class Organization(models.Model):
    name = models.CharField(max_length=255)
    handle = models.CharField(max_length=255)
    created_by = models.CharField(max_length=255)
    created_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Bot(models.Model):



    name = models.CharField(max_length=255)
    organization = models.CharField(max_length=25)
    created_by = models.CharField(max_length=255)
    created_time = models.DateTimeField(auto_now_add=True)
    handle_name = models.CharField(max_length=255)
    tools = models.CharField(max_length=255)
    openai_api_key = models.CharField(max_length=255,default='ajay')
    initial_message = models.TextField()
    intro_message = models.TextField()
    rules = models.TextField()

   

    def __str__(self):
        return self.name

