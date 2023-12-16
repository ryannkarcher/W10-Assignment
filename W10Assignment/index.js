//boostrap styled table representing my choice of data
//boostrap styled form that allows user to add a new row 
//to the table when clicking on submit

id = 0; //for whatever input is given, it will be given a new ID
   //note: would normally use var or let but for an unknown reason,
      // the website believes that "id" has already been declared

//"add" attached to button element so that any information provided in 
   //the fields will be added with the addEventListener method
document.getElementById("add").addEventListener("click", () => {
   let table = document.getElementById("suggestionsList");
   let row = table.insertRow(1);
   row.setAttribute("id", `item-${id}`); //id is reassigned 
   row.insertCell(0).innerHTML = document.getElementById("new-club-date").value; //pulls data given to add to table
   row.insertCell(1).innerHTML = document.getElementById("new-book").value; //pulls data given to add to table
   row.insertCell(2).innerHTML = document.getElementById("new-user").value; //pulls data given to add to table
   id++; //increment id for the next item
});