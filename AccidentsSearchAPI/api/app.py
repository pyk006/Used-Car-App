from flask import Flask, request, jsonify
from elasticsearch import Elasticsearch
from flask_cors import CORS
es = Elasticsearch(hosts=["http://127.0.0.1:9200"])

app = Flask(__name__)
CORS(app, origins="http://localhost:3000")
@app.route("/search")
def search():
    query = request.args['query']
    category = request.args['category']
    payload= {
  "query": {
    "fuzzy" : {
      category : {
        "value": query
      }
    }
  }
}
    response = es.search(index="used_cars", body=payload, size=1000)

    return [eachDoc for eachDoc in response['hits']['hits']]



if __name__ == "__main__":
    app.run(debug=True)