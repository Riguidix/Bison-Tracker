/**
 *
 *
 * 
 */
function addSubject() {
  let data = readForm();

  // Add the Values to the History
  insertSubjectHistory(data);

  // Last function on the logic
  resetForm();
}

/**
 * Takes the Values of the Form and implement it on an Object *
 * @returns {Object} data
 */
function readForm() {
  let data = {};

  data['subject'] = document.getElementById('name_subject').value;
  data['time'] = document.getElementById('time_subject').value;

  return data;
}


/**
 *
 *
 * @param {Object} subjectObject
 */
function insertSubjectHistory(subjectObject) {
  let table = document.getElementById('table-history');

  // Takes the last row of the Table
  let lastRow = table.rows[ table.rows.length + 1 ];

  // Create an Empty <tr> element and add it to the 1st position of the table
  let row = table.insertRow(lastRow);

  // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
  let idCell = row.insertCell(0);
  let subjectCell = row.insertCell(1);
  let timeCell = row.insertCell(2);
  let optionsCell = row.insertCell(3);

  
  // Get the ID, if it's there's not an actual row set the id to 0

  // Options Buttons the last cell of the table
  let optionsButtons = `
    <button class="btn btn-danger" type="button" onclick="alert('Borrar');">
      Borrar
    </button>

  <button class="btn btn-warning" type="button" onclick="alert('Editar');">
      Editar
  </button>
  `;

  // Displaying into the HTML Content
  subjectCell.innerHTML = subjectObject.subject;
  timeCell.innerHTML = subjectObject.time;
  optionsCell.innerHTML = optionsButtons;
}

/**
 *
 *
 * @param {Object} subjectObject
 */
function insertSubjectSchedule(subjectObject) {

}

/**
 * Reset the entire form setting no name to the Subject and empty time to the Time
 *
 */
function resetForm() {
  document.getElementById('name_subject').value = '';
  document.getElementById('time_subject').value = '';
}