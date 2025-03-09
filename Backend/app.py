from flask import Flask, request, jsonify
from flask_cors import CORS
import data;

root = data.Trie()
i = 0
for country in data.countries :
    root.insert(country.lower(), i)
    i += 1



app = Flask(__name__)
CORS(app)

@app.route('/allCountries')
def AllCountries():
    return data.countries;

@app.route('/SearchCountries', methods=['POST'])
def SearchCountries():
    data = request.get_json()
    search = data.get("search", "").lower()

    countries = root.find_All_Word(search)
    return countries

@app.route('/findAllCost', methods=['POST'])
def findAllCost() :
    datas = request.get_json()
    From = datas.get("from", "").lower()
    To = datas.get("to","").lower()
    Stops = int(datas.get("stops", "0"))
    Idx_From = root.search_Idx(From)
    Idx_To = root.search_Idx(To)

    paths = []
    vis = [False] * 50
    data.findAllPathWithPrice(data.graph, paths, Idx_From, Idx_To, [], vis, 0, Stops);
    return jsonify(sorted(paths, key=lambda path: path[-1][1]));

@app.route('/findPriceWithCountry', methods=['POST'])
def priceWithCountry() :
    datas = request.get_json()
    c = datas.get("country", [])
    nodes = []
    for i in c :
        nodes.append(root.search_Idx(i.lower()))
    return jsonify(data.MST(nodes));

if __name__ == "__main__":
    app.run(debug=True, port=5000)  # Runs on http://127.0.0.1:5000/
