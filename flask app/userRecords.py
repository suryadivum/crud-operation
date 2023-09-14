import psycopg2 as db
from flask import Flask, request, Response
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

conn = db.connect(database="postgres", user="postgres", password="postgres", host="localhost")
cur = conn.cursor()


@app.route("/getUser", methods=["GET"])
@cross_origin()
def getUser():
    print("user")
    if request.method == "GET":
        try:
            cur.execute("select * from records")
            res = cur.fetchall()
            return res
        except db.Error:
            return Response("Not Found", 400)
    return Response("Method not found", 405)


@app.route("/getMail/<email>", methods=["GET"])
@cross_origin()
def getMail(email):
    if request.method == "GET":
        try:
            cur.execute("select exists (select email from records where email=%s)", (email,))
            res = cur.fetchall()
            return res
        except db.Error:
            return Response("Not Found", 400)
    return Response("Method Not Found", 405)


@app.route("/editUser/<email>", methods=["GET"])
@cross_origin()
def editUser(email):
    if request.method == "GET":
        try:
            cur.execute("select * from records where email=%s", (email,))
            res = cur.fetchall()
            return res
        except db.Error:
            return Response("Not Found", 400)
    return Response("Method Not Found", 405)


@app.route("/update", methods=["POST"])
@cross_origin()
def update():
    if request.method == "POST":
        data = request.get_json()
        query = "update records set fname=%s, lname=%s, mobile=%s, dob=%s, address=%s where email=%s"
        try:
            cur.execute(query, (data['fname'], data['lname'], data['mobile'], data['dob'], data['address'], data['email'],))
            conn.commit()
            return Response("success", 200)
        except db.Error:
            conn.rollback()
            return Response("Not Found", 400)
    return Response("Method Not Found", 405)


@app.route("/delete/<email>", methods=["DELETE"])
@cross_origin()
def delete(email):
    if request.method == "DELETE":
        try:
            cur.execute("delete from records where email=%s", (email,))
            conn.commit()
            return Response("success", 200)
        except db.Error:
            conn.rollback()
            return Response("Not found", 400)
    return Response("Method Not Found", 405)


@app.route("/addUser", methods=["POST"])
@cross_origin()
def addUser():
    if request.method == "POST":
        data = request.get_json()
        query = "insert into records(email, fname, lname, mobile, dob, address) values(%s,%s,%s,%s,%s,%s)"
        try:
            cur.execute(query, (data['email'], data['fname'], data['lname'], data['mobile'], data['dob'], data['address']))
            conn.commit()
            return Response("success", 200)
        except db.Error:
            conn.rollback()
            return Response("not found", 400)
    return Response("Method not found", 405)


if __name__ == '__main__':
    app.run(debug=True)
