
import { useEffect, useState } from 'react';
import './App.css'
import TailwindTest from './components/TailwindTest';
import Watch from './components/watch/Watch';
import add from './utils/calculator';
// import { add, subtract, val1, val2 } from './utils/calculator';
// import { add, subtract, val1, val2 } from './utils/calculator';


function App() {
  const first = 10, second = 5;
  const res = add(first, second)
  console.log(res);

  // watches data in js object format
  // const watches = [
  //   { brand: "Apple", id: 1, price: 399 },
  //   { brand: "Samsung", id: 2, price: 299 },
  //   { brand: "Fitbit", id: 3, price: 199 }
  // ];

  // watches data in json object format
  // const watches = [
  //   {
  //     "brand": "Apple",
  //     "id": 1,
  //     "price": 399
  //   },
  //   {
  //     "brand": "Samsung",
  //     "id": 2,
  //     "price": 299
  //   },
  //   {
  //     "brand": "Fitbit",
  //     "id": 3,
  //     "price": 199
  //   }
  // ]
  const str ='[10,20,30]';
  const jsonArray = JSON.parse(str);
  console.log("json array:",jsonArray);
  const jsonObj =  {"name":"John", "age":30, "car":null};
  console.log("json obj: ",jsonObj);
  const jsObj = jsonObj;
  console.log("js Obj: ",jsObj);
  
  // setting watches states
  const [watches,setWatches]=useState([]);

  // fetching and loading watches
  useEffect(()=>{
    fetch("watches.json")
    .then(response=>response.json())
    .then(data=>setWatches(data));
  },[])

  return (
    <>
      <h1>Vite + React</h1>
      <div className="grid grid-cols-3 gap-5">
        <TailwindTest></TailwindTest>
        <TailwindTest></TailwindTest>
        <TailwindTest></TailwindTest>
      </div>
      <div className="grid grid-cols-2 gap-10 mt-10">
        {
          watches.map(watch => <Watch key={watch.id} sendProto={watch} res={50} name={"hello bro"}></Watch>)
        }
      </div>

    </>
  )
}

export default App
