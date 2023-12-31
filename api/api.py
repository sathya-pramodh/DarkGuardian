from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/api/analyze-site", methods = ["POST"])
def analyze_site():
    # TODO: Work out how to respond with the appropriate results from the LLM.
    return jsonify({"result": "<RESULT>"})

if __name__ == "__main__":
    app.run()
