function Title(t1) {
  this.mytitle = t1;
}

Title.prototype.getName = function () {
  return (this.mytitle);
}

var socialMedia = {
  facebook: 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

const elem_table = document.getElementById("myTable");

const check_box = document.querySelectorAll('input[type="checkbox"]');
const check_box_checked = document.querySelectorAll('input[type="checkbox"]:checked');
const check_box_count = check_box_checked.length;

//To initialize grey color for Submit button
checkboxdependency();
function checkboxdependency() {
  if (check_box_count == 0) {
    document.getElementById("button").style.backgroundColor = 'grey';
    document.getElementById("button").style.borderColor = 'grey';
  }
  for (i = 0; i < check_box.length; i++) {

    check_box[i].addEventListener("click", function () {
      //To check the checked button count
      const check_box_checked = document.querySelectorAll('input[type="checkbox"]:checked');
      const check_box_count = check_box_checked.length;

      //if check_box_checked, change to orange otherwise, grey
      if (check_box_count > 0) {
        document.getElementById("button").style.backgroundColor = 'orange';
        document.getElementById("button").style.borderColor = 'orange';
      }
      else {
        document.getElementById("button").style.backgroundColor = 'grey';
        document.getElementById("button").style.borderColor = 'grey';
      }

      //Check if checked, then change background color and include delete button
      if (this.checked) {
        let delete_button = this.parentElement.parentElement.lastElementChild.previousElementSibling.firstChild;
        let edit_button = this.parentElement.parentElement.lastElementChild.firstChild;

        if (delete_button.className == "delete") {
          delete_button.style.display = 'initial';
        }
        if (edit_button.className == "edit") {
          edit_button.style.display = 'initial';
        }
        this.parentElement.parentElement.classList.add("bg-color");
      }
      //if not, revert back to white
      else {
        let delete_button = this.parentElement.parentElement.lastElementChild.previousElementSibling.firstChild;
        let edit_button = this.parentElement.parentElement.lastElementChild.firstChild;
        if (delete_button.className == "delete") {
          delete_button.style.display = 'none';
        }
        if (edit_button.className == "edit") {
          edit_button.style.display = 'none';
        }
        this.parentElement.parentElement.classList.remove("bg-color");

      }
    });
  }
}

hideColumn();

function hideColumn() {
  let count = 0;
  for (i = 0; i < check_box.length; i++) {

    if (!check_box[i].checked) {
      check_box[i].parentElement.parentElement.querySelectorAll("td")[8].classList.add("hide");
      check_box[i].parentElement.parentElement.querySelectorAll("td")[9].classList.add("hide");
      count++;
    }
    if (check_box.length == count) {
      document.querySelectorAll("tr")[0].querySelectorAll("th")[8].classList.add("hide");
      document.querySelectorAll("tr")[0].querySelectorAll("th")[9].classList.add("hide");

    }
  }
}
displayColumn();

function displayColumn() {
  for (let i = 0; i < check_box.length; i++) {
    check_box[i].addEventListener("click", function () {
      if (check_box[i].checked) {
        document.querySelectorAll("tr")[0].querySelectorAll("th")[8].classList.remove("hide");
        document.querySelectorAll("tr")[0].querySelectorAll("th")[9].classList.remove("hide");
        check_box[i].parentElement.parentElement.querySelectorAll("td")[8].classList.remove("hide");
        check_box[i].parentElement.parentElement.querySelectorAll("td")[9].classList.remove("hide");
      } else {
        document.querySelectorAll("tr")[0].querySelectorAll("th")[8].classList.add("hide");
        document.querySelectorAll("tr")[0].querySelectorAll("th")[9].classList.add("hide");
        check_box[i].parentElement.parentElement.querySelectorAll("td")[8].classList.add("hide");
        check_box[i].parentElement.parentElement.querySelectorAll("td")[9].classList.add("hide");
      }
    })
  }
}

delete_row();
function delete_row() {
  const elem_button_delete = elem_table.getElementsByClassName("delete");
  for (i = 0; i < elem_button_delete.length; i++) {

    elem_button_delete[i].addEventListener("click", function () {

      //get parent row
      let parent_row = this.parentElement.parentElement;
      //get next row with Award details
      let parent_next_row = parent_row.nextElementSibling;

      //Delete both
      parent_row.style.display = 'none';
      parent_next_row.style.display = 'none';
      alert('Record deleted successfully');
      document.getElementById("button").style.backgroundColor = 'grey';
      document.getElementById("button").style.borderColor = 'grey';
      document.querySelectorAll("tr")[0].querySelectorAll("th")[8].classList.add("hide");
      document.querySelectorAll("tr")[0].querySelectorAll("th")[9].classList.add("hide");
    });
  }

}

edit_row();
function edit_row() {
  const elem_button_edit = elem_table.getElementsByClassName("edit");
  for (i = 0; i < elem_button_edit.length; i++) {

    elem_button_edit[i].addEventListener("click", function () {
      window.prompt('Edit the details.');
    });
  }
  displayColumn();
}

image_dropdown();
function image_dropdown() {
  const elem_image = elem_table.getElementsByTagName("img");
  for (i = 0; i < elem_image.length; i++) {
    elem_image[i].addEventListener("click", function () {

      //get next row with dropdown
      let next_row = this.parentElement.parentElement.nextElementSibling;

      //get next row classname
      let next_row_class = next_row.className;

      if (next_row_class == "dropDownTextArea") {

        //if dropdown is not selected and we click on it, it should show the table-row values defined else display nothing.
        if (next_row.style.display == 'none') {
          next_row.style.display = 'table-row';
        }
        else {
          next_row.style.display = 'none';
        }

      }
    });
  }
}

const elem_rows = elem_table.getElementsByTagName("tr");
for (i = 0; i < elem_rows.length; i++) {

  let next_row = elem_rows[i];

  //get next row classname
  let next_row_class = next_row.className;

  if (next_row_class == "dropDownTextArea") {

    if (next_row.style.display == 'none') {
      next_row.style.display = 'table-row';
    }
    else {
      next_row.style.display = 'none';
    }

  }
}

no_increase = 3;
function addNewStudent() {

  const elem_table = document.getElementById("myTable");

  var row_value = document.getElementById("myTable").rows.length;
  no_increase = no_increase + 1;

  const column_value = document.getElementById("myTable").rows[0].cells.length;
  var row_added = document.getElementById("myTable").insertRow(document.getElementById("myTable").rows.length);
  alert('Record added successfully');
  for (i = 0; i < column_value; i++) {
    row_added.insertCell(i);

  }
  let myArray = {
    elem1: "Student " + (no_increase), elem2: "Teacher " + (no_increase), elem3: "Approved", elem4: "Fall", elem5: "TA", elem6: "12345", elem7: "100%"
  };



  const checkboxs = document.createElement("input");
  checkboxs.setAttribute("type", "checkbox");

  const image = document.createElement("IMG");
  image.setAttribute("tag", "img");
  image.setAttribute("src", "down.png");
  image.setAttribute("width", "25px");

  const image_button = document.createElement("button");
  image_button.append(image);

  const delete_button = document.createElement("button");
  delete_button.textContent = "Delete";
  delete_button.setAttribute("class", "delete");

  const edit_button = document.createElement("button");
  edit_button.textContent = "Edit";
  edit_button.setAttribute("class", "edit");

  const row = document.createElement("tr");
  row.setAttribute("class", "dropDownTextArea");
  document.getElementById("myTable").appendChild(row);

  let row_data = document.createElement("td");
  row.appendChild(row_data);
  row_data.setAttribute("colspan", 10);

  const para = document.getElementById("myTable").getElementsByTagName("tr")[2];
  const new_para_row = para.cloneNode(true);
  row.cells[0].innerHTML = new_para_row.outerHTML;
  row.style.display = 'none';

  row_added.cells[0].innerHTML += checkboxs.outerHTML + "<br><br>" + image.outerHTML;
  row_added.cells[1].innerHTML = myArray.elem1;
  row_added.cells[2].innerHTML = myArray.elem2;
  row_added.cells[3].innerHTML = myArray.elem3;
  row_added.cells[4].innerHTML = myArray.elem4;
  row_added.cells[5].innerHTML = myArray.elem5;
  row_added.cells[6].innerHTML = myArray.elem6;
  row_added.cells[7].innerHTML = myArray.elem7;
  row_added.cells[8].innerHTML = delete_button.outerHTML;
  row_added.cells[9].innerHTML = edit_button.outerHTML;

  const elem_button_delete = elem_table.getElementsByClassName("delete");
  for (i = 0; i < elem_button_delete.length; i++) {
    elem_button_delete[i].addEventListener("click", function () {

      //get parent row
      let parent_row = this.parentElement.parentElement;
      let parent_next_row_index = this.parentElement.parentElement.rowIndex;
      let parent_next_row = elem_table.rows[parent_next_row_index + 1];;
      //get next row with Award details
      //Delete both
      parent_row.style.display = 'none';
      parent_next_row.style.display = 'none';
      alert('Record deleted successfully');
      document.getElementById("button").style.backgroundColor = 'grey';
      document.getElementById("button").style.borderColor = 'grey';
      document.querySelectorAll("tr")[0].querySelectorAll("th")[8].classList.add("hide");
      document.querySelectorAll("tr")[0].querySelectorAll("th")[9].classList.add("hide");

    });
  }

  edit_row();

  const elem_image = elem_table.getElementsByTagName("img");
  for (i = 0; i < elem_image.length; i++) {
    elem_image[i].addEventListener("click", function () {


      let next_row_index = this.parentElement.parentElement.rowIndex;
      let next_row = elem_table.rows[next_row_index + 1];
      let next_row_class = next_row.className;

      if (next_row_class == "dropDownTextArea") {
        //if dropdown is not selected and we click on it, it should show the table-row values defined else display nothing.
        if (next_row.style.display == 'none') {
          next_row.style.display = 'table-row';
        }
        else {
          next_row.style.display = 'none';
        }

      }
    });
  }

  const check_box = document.querySelectorAll('input[type="checkbox"]');
  const check_box_checked = document.querySelectorAll('input[type="checkbox"]:checked');
  const check_box_count = check_box_checked.length;


  //To initialize grey color for Submit button
  if (check_box_count == 0) {
    document.getElementById("button").style.backgroundColor = 'grey';
    document.getElementById("button").style.borderColor = 'grey';
  }
  for (i = 0; i < check_box.length; i++) {

    check_box[i].addEventListener("click", function () {
      //To check the checked button count
      const check_box_checked = document.querySelectorAll('input[type="checkbox"]:checked');
      const check_box_count = check_box_checked.length;

      //if check_box_checked, change to orange otherwise, grey
      if (check_box_count > 0) {
        document.getElementById("button").style.backgroundColor = 'orange';
        document.getElementById("button").style.borderColor = 'orange';
      }
      else {
        document.getElementById("button").style.backgroundColor = 'grey';
        document.getElementById("button").style.borderColor = 'grey';
      }

      //Check if checked, then change background color and include delete button
      if (this.checked) {
        let delete_button = this.parentElement.parentElement.lastElementChild.previousElementSibling.firstChild;
        let edit_button = this.parentElement.parentElement.lastElementChild.firstChild;
        if (delete_button.className == "delete") {
          delete_button.style.display = 'initial';
        }
        if (edit_button.className == "edit") {
          edit_button.style.display = 'initial';
        }
        this.parentElement.parentElement.classList.add("bg-color");
      }
      //if not, revert back to white
      else {
        let delete_button = this.parentElement.parentElement.lastElementChild.previousElementSibling.firstChild;
        let edit_button = this.parentElement.parentElement.lastElementChild.firstChild;
        if (delete_button.className == "delete") {
          delete_button.style.display = 'none';
        }
        if (edit_button.className == "edit") {
          edit_button.style.display = 'none';
        }
        this.parentElement.parentElement.classList.remove("bg-color");
      }
    });
  }
}