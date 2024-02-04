from flask import Flask, jsonify, request 
from flask_cors import CORS
app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route('/casualty') 
def get_casualties():
    DateTime = request.args.get("DateTime")
    Country = request.args.get("Country")
    Civilian = request.args.get("Civilian") == "true"
    Actor = request.args.get("Actor")
    Event = request.args.get("Event")
    Fatalities = request.args.get("Fatalities")
    
    data = { 
        "DateTime" : DateTime,
        "Country" : Country,
        "Civilian" : Civilian,
        "Actor" : Actor,
        "Event" : Event,
        "Fatalities" : Fatalities
    } 

    return jsonify(data)

