import psycopg2 as db

conn = db.connect(database="postgres", user="postgres", password="postgres", host="localhost")
cur = conn.cursor()

email = "Surya@gmail.com"
fname = "Surya"
lname = "K"
mobile = "9876543210"
dob = "08-10-2002"
address = "west street"
query = "insert into records(email, fname, lname, mobile, dob, address) values(%s,%s,%s,%s,%s,%s)"
try:
    cur.execute(query, (email, fname, lname, mobile, dob, address))
    conn.commit()
    print("success")
except db.Error:
    conn.rollback()
    print("failed")
