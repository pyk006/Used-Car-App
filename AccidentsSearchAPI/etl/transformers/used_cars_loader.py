from elasticsearch import Elasticsearch

import csv

es = Elasticsearch(hosts=["http://127.0.0.1:9200"])

with open("../../data/vehicles.csv", "r", encoding="utf-8") as f:
    reader = csv.reader(f)

    for i, line in enumerate(reader):
        document = {
            "id": line[0],
            "manufacturer": line[6],
            "model": line[7],
            "year": line[5],
            "price": line[4],
            "condition": line[8],
            "cylinders": line[9],
            "fuel": line[10],
            "odometer": line[11],
            "paint_color": line[18],
            "size": line[16],
            "transmission": line[13],
            "description": line[20],
            "county": line[21],
            "state": line[22]
            
        }

        es.index(index="used_cars", document=document)