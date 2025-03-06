from flask import Flask, request, jsonify
from flask_cors import CORS
import data;

root = data.Trie()

for country in data.countries :
    root.insert(country.lower())



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



if __name__ == "__main__":
    app.run(debug=True, port=5000)  # Runs on http://127.0.0.1:5000/
