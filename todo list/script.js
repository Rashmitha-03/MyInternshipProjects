const addTaskB = document.getElementById('addTask');
const btn = addTaskB.innerText;
const taskText = document.getElementById('task');
const recordsDisplay = document.getElementById('records');
let userArray = [];
let checkboxStates = [];
let edit_id = null;

let objstr = localStorage.getItem('task');
console.log(objstr);
if (objstr != '') {
    userArray = JSON.parse(objstr);
}

let checkboxStatesStr = localStorage.getItem('checkboxStates');
if (checkboxStatesStr) {
    checkboxStates = JSON.parse(checkboxStatesStr);
}

DisplayInfo();
addTaskB.onclick = () => {
    const name = taskText.value;
    if (edit_id != null) {
        userArray.splice(edit_id, 1, { 'name': name })
        edit_id = null;
    } else {

        userArray.push({ 'name': name });
    }
    checkboxStates.push(false);
    SaveInfo(userArray);
    taskText.value = '';
    DisplayInfo();
    addTaskB.innerText = btn;
    loadCheckboxState();
}

function SaveInfo(userArray) {
    let str = JSON.stringify(userArray);
    localStorage.setItem('task', str);

    let checkboxStatesStr = JSON.stringify(checkboxStates);
    localStorage.setItem('checkboxStates', checkboxStatesStr);
    DisplayInfo();
}

function DisplayInfo() {
    let statement = '';
    userArray.forEach((task, i) => {
        statement += `<tr>
        <th scope="row">${i + 1}</th>
        <td>${task.name}</td>
        <td><i class="btn text-white fa fa-edit btn-info mx-2" onclick='EditInfo(${i})'></i> <i
                class="btn btn-danger text-white fa fa-trash" onclick='DeleteInfo(${i})'></i></td>
                <td><div class="form-check">
                <input class="form-check-input" type="checkbox" id="checkbox${i}" ${getCheckboxState(i)} onchange="toggleCheckbox(${i})">

                <label class="form-check-label" for="flexCheckDefault">
                  Yes
                </label></td>
    </tr>`
    })
    recordsDisplay.innerHTML = statement;
    loadCheckboxState();
}

function EditInfo(id) {
    edit_id = id;
    taskText.value = userArray[id].name;
    addTaskB.innerText = 'Save Changes';
    loadCheckboxState();
}

function DeleteInfo(id) {
    userArray.splice(id, 1)
    SaveInfo(userArray);
    DisplayInfo();
    loadCheckboxState();
}

function saveCheckboxState() {
    const checkbox = document.getElementById('flexCheckDefault');
    localStorage.setItem('checkboxState', checkbox.checked);
}

function loadCheckboxState() {
    const checkbox = document.getElementById('flexCheckDefault');
    const savedState = localStorage.getItem('checkboxState');

    if (savedState === 'true') {
        checkbox.checked = true;
    } else {
        checkbox.checked = false;
    }
}

function getCheckboxState(index) {
    return checkboxStates[index] ? 'checked' : '';
}

function loadCheckboxState() {
    userArray.forEach((task, i) => {
        const checkbox = document.getElementById(`checkbox${i}`);
        checkbox.checked = checkboxStates[i];
    });
}

checkboxStates.push(false);

function toggleCheckbox(index) {
    checkboxStates[index] = !checkboxStates[index];
    SaveInfo(userArray);
}


const checkbox = document.getElementById('flexCheckDefault');
checkbox.addEventListener('change', saveCheckboxState);

window.addEventListener('load', loadCheckboxState);

function toggleCheckbox(index) {
    checkboxStates[index] = !checkboxStates[index]; // Toggle the checkbox state
    SaveInfo(userArray);
}