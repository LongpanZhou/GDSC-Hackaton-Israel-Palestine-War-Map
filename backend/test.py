import requests
import datetime
import csv
import pandas as pd
from io import StringIO

def download_csv():
    td = datetime.datetime.today().strftime('%Y-%m-%d')
    parameters = {
    "email": "guoz88@mcmaster.ca",
    "key": "AtGm2ZvQ8lH0EBIwWtqH",
    "region": "11",
    "country": "Israel|Palestine", 
    "event_date": f"2023-10-01|{td}",
    "event_date_where": "BETWEEN",
    "limit": 99999,
    }
    
    response = requests.get("https://api.acleddata.com/acled/read.csv", params= parameters)

    if response.status_code == 200:
        df = pd.read_csv(StringIO(response.text))
    else:
        print('Failed to download CSV file. Status code:', response.status_code)

download_csv()