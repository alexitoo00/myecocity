from django.shortcuts import render
import json
from django.http import HttpResponse
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

# Create your views here.


def index(response):
    return render(response, 'core/index.html', {})


def recyclair(response):
    return render(response, 'core/recyclair.html', {})


def display_json(request):
    if request.method == 'POST':
        # Get the new data points from the request body
        new_points = json.loads(request.body)
        # Open the JSON file and read its contents
        with open('core/static/json/points.json', 'r') as f:
            data = json.load(f)
        # Append the new data points to the existing data
        data['points'].extend(new_points)
        # Write the updated data back to the JSON file
        with open('core/static/json/points.json', 'w') as f:
            json.dump(data, f, indent=4)
        # Return a response indicating success
        return JsonResponse({'success': True})
    else:
        # Read the JSON file and return its contents
        with open('core/static/json/points.json', 'r') as f:
            data = json.load(f)
        return JsonResponse(data, json_dumps_params={'indent': 4})


@csrf_exempt
def update_points(request):
  if request.method == 'PUT':
    # Load the JSON file
    with open('core/static/json/points.json', 'r') as json_file:
      data = json.load(json_file)

    # Update the "points" array with the new point
    new_point = json.loads(request.body)
    data['points'].append(new_point)

    # Save the updated JSON file
    with open('core/static/json/points.json', 'w') as json_file:
      json.dump(data, json_file)

    return JsonResponse(data)