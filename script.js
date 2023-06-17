/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  arr.map((e)=>{
    if(e["profession"]==="developer")
    {
    console.log(e["name"]);
    }
  })//Write your code here , just console.log
}

function PrintDeveloperbyForEach() {
  arr.forEach(e => {
    if(e["profession"]==="developer")
    {
    console.log(e["name"]);
    }
  });//Write your code here , just console.log
}

function addData() {
  let newObj={d:4,name:"susan",age:"20",profession:"intern"}//Write your code here, just console.log
  arr.push(newObj);
  console.log(arr);
}

function removeAdmin() {
  let ans=arr.filter((e)=>{
    return e["profession"]!="admin";
  })
  console.log(ans);//Write your code here, just console.log
}

function concatenateArray() {
  let arr2 = [
    { id: 4, name: "Lakshay", age: "24", profession: "developer" },
    { id: 5, name: "Himan", age: "23", profession: "developer" },
    { id: 6, name: "Viart", age: "22", profession: "UI/UX" },
  ]; //Write your code here, just console.log
 let ans= arr.concat(arr2);
  console.log(ans);
}
