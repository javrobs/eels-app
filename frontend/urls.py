
from django.urls import path
from django.shortcuts import render

def main(request):
    return render(request,"frontend/index.html")

urlpatterns = [
    path('', main),
]

