async function getUser() {
  const response = await fetch("http://localhost:5000/getUser");
  return await response.json();
}

async function getMail(email) {
  const url = "http://localhost:5000/getMail/" + email;
  const response = await fetch(url);
  return await response.json();
}

async function editUser(email) {
  const url = "http://localhost:5000/editUser/" + email;
  const response = await fetch(url);
  return await response.json();
}

async function updateUser(data) {
  const response = await fetch("http://localhost:5000/update", {
    method: "POST",
    body: data,
    headers: {
      "Content-type": "application/json",
    },
  });
  return response;
}

async function deleteUser(email) {
  const url = "http://localhost:5000/delete/" + email;
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  });
  return response;
}

async function addUser(data) {
  const response = await fetch("http://localhost:5000/addUser", {
    method: "POST",
    body: data,
    headers: {
      "Content-type": "application/json",
    },
  });
  return response;
}

export { getUser, getMail, updateUser, deleteUser, editUser, addUser };
