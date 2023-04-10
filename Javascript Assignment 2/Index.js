//Question 1:
function addNumberClosure(number) {
    return function(x) {
      return x + number;
    };
  }
  const add5 = addNumberClosure(5);

  const result = add5(10); 
 


//Question 2:

function searchArray(arr, value) {
    if (arr.length === 0) {
      return false;
    }
    
    if (arr[0] === value) {
      return true;
    }
    
    return searchArray(arr.slice(1), value);
  }


  //Question 3:
  function addParagraph(text) {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    document.body.appendChild(paragraph);
  }

  addParagraph('This is a new paragraph!');


//Question 4:
function addListItem(text) {
    const list = document.querySelector('ul');
    const listItem = document.createElement('li');
    listItem.textContent = text;
    list.appendChild(listItem);
  }
  addListItem('This is a new list item!');


  //Question 5:
function changeBackgroundColor(element, color) {
  element.style.backgroundColor = color;
}

//Question 6:
function saveObjectToLocalStorage(key, object) {
    localStorage.setItem(key, JSON.stringify(object));
  }

  //Question 7:
  function getObjectFromLocalStorage(key) {
    const item = localStorage.getItem(key);
    return JSON.parse(item);
  }

  //Question 8:
  function saveObjectPropertiesToLocalStorage(object) {
    for (let property in object) {
      localStorage.setItem(property, JSON.stringify(object[property]));
    }
    
    const newObject = {};
    for (let property in object) {
      const item = localStorage.getItem(property);
      newObject[property] = JSON.parse(item);
    }
    
    return newObject;
  }