import pandas as pd
from datetime import datetime

def main(Filters):
    df = pd.read_csv('2023-10-01-2024-01-29-Middle_East-Israel-Palestine.csv')

    def extract_DateTime(DataFrame, DateTime):
        original_date = datetime.strptime(DateTime, "%B %d, %Y")
        formatted_date_str = original_date.strftime("%d %B %Y")
        return DataFrame[DataFrame['event_date'] == formatted_date_str]

    def extract_Country(DataFrame, Country):
        if Country == 'All': # All, Israel, Palestine
            return DataFrame
        return dDataFramef[DataFrame['country'] == Country]
        
    def extract_CiviTarget(DataFrame, CiviTarget):
        if CiviTarget: # Trur or False
            return DataFrame[DataFrame['civilian_targeting'] == 'Civilian targeting']
        return DataFrame

    def extract_Actor1(DataFrame, Actor1):
        if Actor1 == 'All':
            return DataFrame
        return DataFrame[DataFrame['actor1'] == Actor1]

    def extract_Event_Type(DataFrame, event):
        if event == 'All':
            return DataFrame
        return DataFrame[DataFrame['event_type'] == event]

    def extract_fatalities(DataFrame, fatalities):
        if fatalities == 'All':
            return DataFrame
        elif fatalities == '0':
            return DataFrame[DataFrame['fatalities'] == 0]
        elif fatalities == '1-10':
            return DataFrame[(DataFrame['fatalities'] > 0) & (df['fatalities'] <= 10)]
        elif fatalities == '10-50':
            return DataFrame[(DataFrame['fatalities'] > 10) & (df['fatalities'] <= 50)]
        elif fatalities == '50+':
            return DataFrame[DataFrame['fatalities'] > 50]
    
    df = extract_DateTime(df, Filters['DateTime'])
    df = extract_Country(df, Filters['Country'])
    df = extract_CiviTarget(df, Filters['CiviTarget'])
    df = extract_Actor1(df, Filters['Actor1'])
    df = extract_Event_Type(df, Filters['Event_Type'])
    df = extract_fatalities(df, Filters['fatalities'])

    return df

def generateData(DataFrame):
    return DataFrame.to_json(orient='records')

if __name__ == "__main__":
    test = {
        'DateTime': 'October 1, 2023',
        'Country': 'All',
        'CiviTarget': False,
        'Actor1': 'All',
        'Event_Type': 'All',
        'fatalities': 'All'
        }
    main(test)