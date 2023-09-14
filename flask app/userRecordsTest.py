import unittest
from userRecords import app


class MyTestCase(unittest.TestCase):
    def setUp(self):
        app.testing = True
        self.app = app.test_client()

    def test_getUser(self):
        res = self.app.get('/getUser')
        self.assertEqual(res.status_code, 200)

    def test_addUser(self):
        user = {
            "fname": "example",
            "lname": "example",
            "mobile": "8899887767",
            "email": "example@example.com",
            "dob": "1990-01-01",
            "address": "123,cbe"
        }
        resp = self.app.post('/addUser', json=user)
        self.assertEqual(resp.status_code, 200)

    def test_getMail(self):
        res = self.app.get("/getMail/example@example.com")
        self.assertEqual(res.status_code, 200)

    def test_editUser(self):
        res = self.app.get("/editUser/example@example.com")
        self.assertEqual(res.status_code, 200)

    def test_update(self):
        data = {
            "email": "example@example.com",
            "fname": "example",
            "lname": "empty",
            "mobile": "9876543210",
            "dob": "2002-10-08",
            "address": "example address"
        }
        res = self.app.post("/update", json=data)
        self.assertEqual(res.status_code, 200)

    def test_delete(self):
        res = self.app.delete("/delete/example@example.com")
        self.assertEqual(res.status_code, 200)


if __name__ == '__main__':
    unittest.main()
