var isAsc = false;
var lastName = document.getElementById('input-last-name');
var firstName = document.getElementById('input-first-name');
var age = document.getElementById('input-age');
var country = document.getElementById('input-country');
var addButton = document.getElementsByClassName('add-text')[0];
var editButton = document.getElementsByClassName('save-text')[0];
var myArray = [{
    "id": 1,
    "firstName": "Ulick",
    "lastName": "Richardot",
    "age": "24",
    "country": "PE"
  }, {
    "id": 2,
    "firstName": "Vance",
    "lastName": "Bernot",
    "age": "59",
    "country": "PH"
  }, {
    "id": 3,
    "firstName": "Willamina",
    "lastName": "Mogie",
    "age": "83",
    "country": "CN"
  }, {
    "id": 4,
    "firstName": "Zaccaria",
    "lastName": "Hogben",
    "age": "40",
    "country": "CN"
  }, {
    "id": 5,
    "firstName": "Bellanca",
    "lastName": "Tookey",
    "age": "65",
    "country": "ID"
  }, {
    "id": 6,
    "firstName": "Samaria",
    "lastName": "Thickett",
    "age": "19",
    "country": "CF"
  }, {
    "id": 7,
    "firstName": "Kinny",
    "lastName": "Pilsworth",
    "age": "92",
    "country": "CN"
  }, {
    "id": 8,
    "firstName": "Berty",
    "lastName": "Wooff",
    "age": "30",
    "country": "ML"
  }, {
    "id": 9,
    "firstName": "Rosina",
    "lastName": "Ramshaw",
    "age": "59",
    "country": "NI"
  }, {
    "id": 10,
    "firstName": "Wilow",
    "lastName": "Monument",
    "age": "75",
    "country": "CZ"
  }];

addMyTemplate();

function addMyTemplate(){
    var listText = '';
    
    for(i = 0; i < myArray.length; i++){
        listText += '<tr class="items" data-id="'+myArray[i].id+'"><td>' + myArray[i].lastName+ '</td><td>' + myArray[i].firstName+ '</td><td>' + myArray[i].age + '</td><td>'  + myArray[i].country + '</td><td class="text-right"><button class="btn btn-outline-success edit-text far fa-edit" onclick="editItem('+myArray[i].id+')"></button> <button class="btn btn-outline-danger delete-text far fa-trash-alt" onclick="removeItem('+myArray[i].id+')"></button></td></tr>';
    }

    document.getElementById('item-list').innerHTML = listText;
    lastName.value = '';
    firstName.value = '';
    age.value = '';
    country.value = '';
}

function searchInput(ctx){
    var queryMatch = document.getElementsByClassName('items');
    
    for(i = 0; i < myArray.length; i++){
        if(ctx.length >= 0){
            if(queryMatch[i].innerText.toUpperCase().indexOf(ctx.toUpperCase()) > -1){
                queryMatch[i].style.display = '';
            } else {
                queryMatch[i].style.display = 'none';
            }
        } else {
            queryMatch[i].style.display = '';
        }
    }
}

function addItem(){
    myArray.push({id: Date.now(), lastName: lastName.value, firstName: firstName.value, age: age.value, country: country.value});
    
    addMyTemplate();
}

function editItem(id){
    for(i = 0; i < myArray.length; i++){
        if(id === myArray[i].id){
            lastName.value = myArray[i].lastName;
            firstName.value = myArray[i].firstName;
            age.value = myArray[i].age;
            country.value = myArray[i].country;
            editButton.setAttribute("data-id", myArray[i].id);
        }
    }
    addButton.style.display = 'none';
    editButton.style.display = '';
}

function removeItem(id){
    for(i = 0; i < myArray.length; i++){
        if(id === myArray[i].id){
            myArray.splice(i, 1);
            addMyTemplate();
        }
    }
}

function saveItem(){
    addButton.style.display = '';
    editButton.style.display = 'none';
    var items = editButton.getAttribute("data-id");
    for(i = 0; i < myArray.length; i++){
        if(items && (items == myArray[i].id)){
            myArray[i].lastName = lastName.value;
            myArray[i].firstName = firstName.value;
            myArray[i].age = age.value;
            myArray[i].country = country.value;
            addMyTemplate();
        }
    }
    lastName.value = '';
    firstName.value = '';
    age.value = '';
    country.value = '';
}

function doSort(key){
    isAsc = !isAsc;
    function compare(a, b){
        var compare = 0;
        if(a[key] > b[key]){
            compare = 1;
        }
        if(a[key] < b[key]){
            compare = -1;
        }
        
        return compare;
    }
    if(isAsc){
        myArray.sort(compare);
    } else {
        myArray.reverse(compare);
    }
    
    addMyTemplate();
}