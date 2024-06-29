from django.http import HttpResponse

list_data = [
     {"title": "title1", "stars": 4, "desc": "desc1", "imgs": "https://hips.hearstapps.com/hmg-prod/images/camping-ideas-1561136670.jpg?crop=1.00xw:0.753xh;0,0.186xh&resize=1200:*"}
]

def list(request):
    return HttpResponse("test")