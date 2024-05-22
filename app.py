from flask import Flask, request, send_file, jsonify

app = Flask(__name__, static_url_path='', static_folder='web')

@app.route('/')
def index():
    return send_file('web/index.html')

@app.route('/add', methods=['POST'])
def add():
    try:
        num1 = float(request.form['num1'])
        num2 = float(request.form['num2'])
        result = num1 + num2
        return jsonify({'result': result})
    except ValueError:
        return jsonify({'error': 'Invalid input'}), 400

if __name__ == "__main__":
    app.run(debug=True)
