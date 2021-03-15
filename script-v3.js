// crie a lógica do seu formulário aqui

let listFoods = new Array();

function createFood(food) {  
  return {      
    ...food,
    names: food.names.split(","),
    namesEnglish: food.namesEnglish.split(","),      
  };  
}

function add() {
  const code = document.querySelector("#code").value;
  const names = document.querySelector("#names").value;
  const namesEnglish = document.querySelector("#namesEnglish").value;
  const scientficName = document.querySelector("#scientificName").value;
  const group = document.querySelector("#group").value;

  const newFood = createFood({
    code,
    names,
    namesEnglish,
    scientficName,
    group,
  });  
  listFoods.push(newFood);
}

function list() {
  for (let i = 0; i < listFoods.length; i++) {
    console.log(i, listFoods[i]);
  }
}
