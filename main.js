'use strict';
const dataLi = document.getElementById('dataLi');

let objectTree = {
  "Рыбы": {
      "Форель": {},
      "Щука": {}
  },

  "Деревья": {
      "Хвойные": {
          "Лиственница": {},
          "Ель": {}
      },
      "Цветковые": {
          "Берёза": {},
          "Тополь": {}
      }
  }
};

function createTree(element, object) {
let treeUl = document.createElement("ul");
element.append(treeUl);
for (let key in object) {
  let treeLi = document.createElement("li");
  treeLi.innerHTML = key;
  treeUl.append(treeLi);

    if (Object.keys(object[key]).length > 0) {
        createTree(treeLi, object[key]);
    }
  }
}
createTree(dataLi, objectTree); 
