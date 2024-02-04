from flask import Flask, jsonify, request
from flask_cors import CORS
import pandas as pd
from datetime import datetime
import numpy as np

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})


def query(DateTime, Country, Civilian, Actor, Event, Fatalities):
    df = pd.read_csv("2023-10-01-2024-01-29-Middle_East-Israel-Palestine.csv")

    def extract_DateTime(DataFrame, DateTime):
        original_date = datetime.strptime(DateTime, "%B %d, %Y")
        formatted_date_str = original_date.strftime("%d %B %Y")
        return DataFrame[DataFrame["event_date"] == formatted_date_str]

    def extract_Country(DataFrame, Country):
        if Country == "All":  # All, Israel, Palestine
            return DataFrame
        return DataFrame[DataFrame["country"] == Country]

    def extract_CiviTarget(DataFrame, CiviTarget):
        if CiviTarget:  # True or False
            return DataFrame[DataFrame["civilian_targeting"] == "Civilian targeting"]
        return DataFrame

    def extract_Actor1(DataFrame, Actor1):
        if Actor1 == "Choose...":
            return DataFrame
        return DataFrame[DataFrame["actor1"] == Actor1]

    def extract_Event_Type(DataFrame, event):
        if event == "Choose...":
            return DataFrame
        return DataFrame[DataFrame["event_type"] == event]

    def extract_fatalities(DataFrame, fatalities):
        if fatalities == "All":
            return DataFrame
        elif fatalities == "0":
            return DataFrame[DataFrame["fatalities"] == 0]
        elif fatalities == "1-10":
            return DataFrame[
                (DataFrame["fatalities"] > 0) & (DataFrame["fatalities"] <= 10)
            ]
        elif fatalities == "10-50":
            return DataFrame[
                (DataFrame["fatalities"] > 10) & (DataFrame["fatalities"] <= 50)
            ]
        elif fatalities == "50+":
            return DataFrame[DataFrame["fatalities"] > 50]

    df = extract_DateTime(df, DateTime)
    df = extract_Country(df, Country)
    df = extract_CiviTarget(df, Civilian)
    df = extract_Actor1(df, Actor)
    df = extract_Event_Type(df, Event)
    df = extract_fatalities(df, Fatalities)
    df = df.replace({np.nan: None})

    return df.to_dict(orient="records")


@app.route("/")
def hello_world():
    return "Hello, World!"


@app.route("/casualty")
def get_casualties():
    DateTime = request.args.get("DateTime")
    Country = request.args.get("Country")
    Civilian = request.args.get("Civilian") == "true"
    Actor = request.args.get("Actor")
    Event = request.args.get("Event")
    Fatalities = request.args.get("Fatalities")

    data = query(DateTime, Country, Civilian, Actor, Event, Fatalities)
    return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True)
