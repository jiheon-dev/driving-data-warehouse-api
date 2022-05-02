import pandas as pd
from os.path import exists
import json

from pymongo import MongoClient
# TODO: Clean the missing values in datasets

def get_data_frame():
    return pd.read_csv('./datasets/ngsim-data.csv')

def get_database():
    client = MongoClient(host = 'localhost', port = 27027)
    database = client['driving-data']
    return None

def get_column_title(df):
    return df.columns.values.tolist()

def make_file(data):
    f = open("newfile.json", "w")
    f.write(data)
    f.close()

def get_json_data():
    f = open("newfile.json", "r")
    return json.dumps(f.read()); f.close()

def get_result_data(columns, data = None):
    return json.dumps({"columns": columns, "data": data})

if __name__ == "__main__":
    df = get_data_frame()
    is_file_exists = exists("newfile.json")
    
    if not is_file_exists:
        make_file(df.to_json(orient = 'records'))

    column_title = get_column_title(df)
    # result = get_result_data(column_title, get_json_data())
    for index, row in df.iterrows():
        print(index)

        print(row.to_json())
    # json = get_json_data()
    # print(json[0])