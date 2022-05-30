import pandas as pd
from os.path import exists
import json
import time

from pymongo import MongoClient

def get_data_frame():
    return pd.read_csv('./datasets/ngsim-data.csv')

def get_database():
    client = MongoClient(host = 'localhost', port = 27017)
    database = client['driving-data']
    return database

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
    start = time.time()
    df = get_data_frame()
    is_file_exists = exists("newfile.json")
    driving_data = get_database()
    
    if not is_file_exists:
        make_file(df.to_json(orient = 'records'))

    column_title = get_column_title(df)
    # result = get_result_data(column_title, get_json_data())
    for index, row in df.iterrows():
        print(index)
        # driving_data["ngsim"].insert_one(row.to_dict())
    # json = get_json_data()
    end = time.time()
    print(format(end-start))

    # print(json[0])