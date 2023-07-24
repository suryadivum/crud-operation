let sno = 1;
function getdata(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;

    let table = document.getElementById("tablebody");
    let newrow = document.createElement("tr");

    let cell1 = document.createElement("td");
    let cell2 = document.createElement("td");
    let cell3 = document.createElement("td");
    let cell4 = document.createElement("td");
    let cell5 = document.createElement("td");

    cell1.innerText = ++sno;
    cell2.innerText = name;
    cell3.innerText = email;
    cell4.innerText = number;
    cell5.innerText = "edit delete";

    newrow.appendChild(cell1);
    newrow.appendChild(cell2);
    newrow.appendChild(cell3);
    newrow.appendChild(cell4);
    newrow.appendChild(cell5);

    table.appendChild(newrow);
}