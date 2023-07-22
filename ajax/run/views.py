from django.shortcuts import render
from django.http import JsonResponse
# Create your views here.

def home(request):
    number=1
    context={
        'number':number
    }
    return render(request,'run/index.html',context)


def ajax_response(request,number):

    increment=int(number)+1
    return JsonResponse({'number':increment})
    

def add_comment(request):

    if request.method=="POST":
        comment=request.POST.get('comment')
        return JsonResponse({'comment':comment})
    
    return render(request,'run/index.html')