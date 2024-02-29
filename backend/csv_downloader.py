#This script is used to download current day's csv file from the ACLED website and store it in the data folder.

import os
import requests
from io import StringIO
import pandas as pd
from datetime import datetime

def download_csv():
    td = datetime.today().strftime('%Y-%m-%d')
    parameters = {
        "email": "guoz88@mcmaster.ca",
        "key": "AtGm2ZvQ8lH0EBIwWtqH",
        "region": "11",
        "country": "Israel|Palestine", 
        "event_date": f"2023-10-01|{td}",
        "event_date_where": "BETWEEN",
        "limit": 99999,
    }
    print("Downloading CSV file...")
    response = requests.get("https://api.acleddata.com/acled/read.csv", params=parameters)

    if response.status_code == 200:
        df = pd.read_csv(StringIO(response.text))
        print("CSV file downloaded successfully.")
    else:
        print('Failed to download CSV file. Status code:', response.status_code)
        return  # Exit the function if download fails
    
    # Path to the CSV file
    csv_file_path = 'data/ACLED.csv'
    
    # Create the directory if it doesn't exist
    if not os.path.exists('data'):
        os.makedirs('data')

    # Check if the file already exists
    if os.path.exists(csv_file_path):
        # Overwrite the existing file
        print("Overwriting existing file...")
        df.to_csv(csv_file_path, index=False)  # Overwrite without index
    else:
        # Save the DataFrame as a new file
        print("Creating new file...")
        df.to_csv(csv_file_path, index=False)

if __name__ == "__main__":
    download_csv()