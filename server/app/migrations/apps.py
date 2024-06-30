from django.http import HttpResponse
from django.views.decorators.http import require_http_methods
import json, time, hashlib

def response(code: int, message:str, data=None):
    body = {'code': code, 'message': message, 'data': {}}
    if data:
        if hasattr(data, '__dict__'):
            body['data'] = data.__dict__
        else:
            body['data'] = data
    return HttpResponse(json.dumps(body, sort_keys=True, ensure_ascii=False))

camps_data = [
        {
            "id": "1", 
            "title": "title1", 
            "stars": 3, 
            "desc": "desc1", 
            "lat": 23.245943, 
            "lng": 114.453450,
            "address": "address1", 
            "comments": 10, 
            "time": "2021-10-10 10:10:10",
            "imgs": [
                "https://hips.hearstapps.com/hmg-prod/images/camping-ideas-1561136670.jpg?crop=1.00xw:0.753xh;0,0.186xh&resize=1200:*",
                "https://hips.hearstapps.com/hmg-prod/images/camping-ideas-1561136670.jpg?crop=1.00xw:0.753xh;0,0.186xh&resize=1200:*"
            ]
        },
        {
            "id": "2", 
            "title": "title2", 
            "stars": 4, 
            "desc": "desc2", 
            "lat": 23.245943, 
            "lng": 114.453450,
            "address": "address2", 
            "comments": 20, 
            "time": "2021-10-10 10:10:10",
            "imgs": [
                "https://hips.hearstapps.com/hmg-prod/images/camping-ideas-1561136670.jpg?crop=1.00xw:0.753xh;0,0.186xh&resize=1200:*",
                "https://hips.hearstapps.com/hmg-prod/images/camping-ideas-1561136670.jpg?crop=1.00xw:0.753xh;0,0.186xh&resize=1200:*"
            ]
        },
        {
            "id": "3", 
            "title": "title3", 
            "stars": 5, 
            "desc": "desc3", 
            "lat": 23.245943, 
            "lng": 114.453450,
            "address": "address3", 
            "comments": 30, 
            "time": "2021-10-10 10:10:10",
            "imgs": [
                "https://hips.hearstapps.com/hmg-prod/images/camping-ideas-1561136670.jpg?crop=1.00xw:0.753xh;0,0.186xh&resize=1200:*",
                "https://hips.hearstapps.com/hmg-prod/images/camping-ideas-1561136670.jpg?crop=1.00xw:0.753xh;0,0.186xh&resize=1200:*"
            ]
        }
]

comments_data = [
    {
        "campID" : "1",
        "user": "user1",
        "stars": 3,
        "time": "2021-10-10 10:10:10",
        "desc": "desc1"
    },
    {
        "campID" : "2",
        "user": "user2",
        "stars": 4,
        "time": "2021-10-10 10:10:10",
        "desc": "desc2"
    },
    {
        "campID" : "3",
        "user": "user3",
        "stars": 5,
        "time": "2021-10-10 10:10:10",
        "desc": "desc3"
    }
]

# find camp data by ID
def findCampByID(id):
    for idx in range(len(camps_data)):
        if camps_data[idx]['id'] == id:
            return camps_data[idx]
    return None

# find comment data by ID
def findCommentByCampID(id):
    coms = []
    for idx in range(len(comments_data)):
        if comments_data[idx]['campID'] == id:
            coms.append(comments_data[idx])
    return coms

# request campaign list
@require_http_methods(["GET"])
def list(request):
    return response(0, 'success', camps_data)

# request campaign detail, enter ID as parameter
@require_http_methods(["GET"])
def detail(request):
    id = request.GET.get("id", "")
    data = findCampByID(id)
    return response(0, 'success', data)

# request comment list of camp, enter ID as parameter
@require_http_methods(["GET"])
def comments(request):
    id = request.GET.get("campID", "")
    coms = findCommentByCampID(id)
    return response(0, 'success', coms)

# add comment to camp, enter campID, user, stars, desc as parameter
# use post, enter json data
@require_http_methods(["POST"])
def comment_add(request):
    if str(request.body, 'utf-8') == '':
        return response(1, 'data cannot be empty')
    
    comment = {
        "campID" : "",
        "user": "",
        "stars": 0,
        "time": time.strftime('%Y-%m-%d %H:%M:%S', time.localtime()),
        "desc": ""
    }

    param = json.loads(request.body)

    if 'campID' not in param or param['campID'] == '':
        return response(1, 'campID cannot be empty')
    comment['campID'] = param['campID']

    if 'user' not in param or param['user'] == '':
        return response(1, 'user cannot be empty')
    comment['user'] = param['user']

    if 'stars' not in param:
        return response(1, 'stars cannot be empty')
    comment['stars'] = param['stars']

    if 'desc' not in param or param['desc'] == '':
        return response(1, 'desc cannot be empty')
    comment['desc'] = param['desc']

    comments_data.append(comment)

    return response(0, 'success')

# upload picture API
pics = {}
@require_http_methods(["POST"])
def upload(request):
    f = request.FILES['file']
    fileName = "{}{}".format(f.name, time.time())
    hFileName = hashlib.md5(fileName.encode("utf-8")).hexdigest()


    pics[hFileName] = {"type": f.content_type, "body": f.read()}

    return response(0, 'success', {"id": hFileName})

# get picture API
@require_http_methods(["GET"])
def file(request):
    id = request.GET.get("id", "")
    if id not in pics:
        return response(100, 'file not found')
    return HttpResponse(pics[id]['body'], content_type=pics[id]['type'])    

# add new camp
# use post, enter json data
@require_http_methods(["POST"])
def add(request):
    if str(request.body, 'utf-8') == '':
        return response(1, 'data cannot be empty')
    
    camp = {
        "id": "",
        "user": "",
        "title": "",
        "stars": 0,
        "desc": "",
        "lat": 0,
        "lng": 0,
        "address": "",
        "comments": 0,
        "time": time.strftime('%Y-%m-%d %H:%M:%S', time.localtime()),
        "imgs": []
    }

    param = json.loads(request.body)

    titleName = "{}{}".format(param['title'], time.time())
    camp['id'] = hashlib.md5(titleName.encode("utf-8")).hexdigest()

    if 'user' not in param or param['user'] == '':
        return response(1, 'user cannot be empty')
    camp['user'] = param['user']

    if 'title' not in param or param['title'] == '':
        return response(1, 'title cannot be empty')
    camp['title'] = param['title']

    if 'stars' not in param:
        return response(1, 'stars cannot be empty')
    camp['stars'] = param['stars']

    if 'desc' not in param or param['desc'] == '':
        return response(1, 'desc cannot be empty')
    camp['desc'] = param['desc']

    if 'lat' not in param:
        return response(1, 'lat cannot be empty')
    camp['lat'] = param['lat']

    if 'lng' not in param:
        return response(1, 'lng cannot be empty')
    camp['lng'] = param['lng']

    if 'address' not in param or param['address'] == '':
        return response(1, 'address cannot be empty')
    camp['address'] = param['address']

    if 'imgs' not in param:
        return response(1, 'imgs cannot be empty')
    camp['imgs'] = param['imgs']

    camps_data.append(camp)

    return response(0, 'success', camp)
