// crie a lógica do seu formulário aqui

let listFoods = new Array();

function createFood(code, names, namesEnglish, scientificName, group) {  
  const food = {
    code,
    names: names.split(","),
    namesEnglish: namesEnglish.split(","),
    group,
    scientificName,
  }
  return food;
}

function add() {
  const inputCode = document.querySelector("#code");
  const inputNames = document.querySelector("#names");
  const inputNamesEnglish = document.querySelector("#namesEnglish");
  const inputScientficName = document.querySelector("#scientificName");
  const inputGroup = document.querySelector("#group");

  const newFood = createFood(
    inputCode.value,
    inputNames.value,
    inputNamesEnglish.value,
    inputScientficName.value,
    inputGroup.value
  );

  listFoods.push(newFood);
}

function list() {
  for (let i = 0; i < listFoods.length; i++) {
    console.log(i, listFoods[i]);
  }
}
