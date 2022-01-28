const fetch = require("node-fetch");
const pass = require("password-hash");
const xd = async (id_sez) => {
  var pozice = [];
  const fetchList = await fetch("http://localhost:3001/list", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: `{"id_sez":${id_sez}}`,
  });
  const data = await fetchList.json();
  const typesData = await fetch("http://localhost:3001/item/howManyTypes");
  const types = await typesData.json();


};

const xdddd = () => {
  const arr = []
  arr[5] = 45
  let xd = arr[5]
  arr[5] = [...xd, 1]
  console.log(arr)
}

//xdddd()
//xd(45);




const dasdasds = async (id_sez) => {
  const fetchList = await fetch("http://localhost:3001/list", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: `{"id_sez":${id_sez}}`,
  });
  const array = await fetchList.json(); 
//Comparer Function    
function GetSortOrder(prop) {    
    return (a, b) => {    
        if (a[prop] > b[prop]) {    
            return 1;    
        } else if (a[prop] < b[prop]) {    
            return -1;    
        }    
        return 0;    
    }    
}    
    
console.log(array)
console.log('-----')
array.sort(GetSortOrder('id_szn')); //Pass the attribute to be sorted on      
for (var item in array) {    
  console.log(array[item]);    
} 
}

dasdasds(45)