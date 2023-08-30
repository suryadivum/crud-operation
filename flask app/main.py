from flask import Flask, request, Response
import psycopg2 as db
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)


conn = db.connect(database="postgres", user="postgres", password="postgres", host="127.0.0.1")
cur = conn.cursor()


@app.route("/")
def home():
    return "this is home page"


@app.route("/login", methods=["POST"])
@cross_origin()
def login():
    if request.method == "POST":
        data = request.get_json()
        if data['username'] != "" and data['passwd'] != "":
            try:
                cur.execute("select * from flaskapp where username=%s", (data['username'],))
                res = cur.fetchall()
                if res[0][3] == data['passwd']:
                    return res, 200
                else:
                    return "enter the correct user name and password"
            except db.Error:
                conn.rollback()
                return "something went wrong"
        else:
            return "enter all details"
    return "try again!!!"


@app.route("/signup", methods=["POST"])
def signup():
    if request.method == "POST":
        data = request.get_json()
        name = data['name']
        email = data['email']
        passwd = data['passwd']
        if name != "" and email != "" and passwd != "":
            username = email[0:email.index("@")]
            query = "insert into flaskapp(username, name, email, password) values(%s,%s,%s,%s)"
            try:
                cur.execute(query, (username, name, email, passwd,))
                conn.commit()
                return Response("success", 200)
            except db.Error:
                conn.rollback()
                return "try again later!!!"
        else:
            return "enter all details"
    return "something went wrong!!"


@app.route("/edit", methods=["PUT"])
def edit():
    data = request.get_json()
    username = data['username']
    name = data['name']
    email = data['email']
    passwd = data['passwd']
    query = "update flaskapp set name=%s, email=%s, password=%s where username=%s"
    try:
        cur.execute("select exists (select name from flaskapp where username=%s)", (username,))
        res = cur.fetchall()
        if res[0][0]:
            cur.execute(query, (name, email, passwd, username))
        else:
            return "Invalid user name"
        conn.commit()
    except db.Error:
        conn.rollback()
        return "try again later!!!"
    return "Updated successfully"


@app.route("/remove", methods=["DELETE"])
def remove():
    data = request.get_json()
    try:
        cur.execute("select exists (select name from flaskapp where username=%s)", (data['username'],))
        res = cur.fetchall()
        if res[0][0]:
            cur.execute("delete from flaskapp where username=%s", (data['username'],))
        else:
            return "Invalid user name"
        conn.commit()
    except db.Error:
        conn.rollback()
        return "something went wrong!!!"
    return "deleted successfully"


if __name__ == '__main__':
    app.run(debug=True)
