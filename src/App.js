// import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
// let [text,setText]=useState('ubaid')
// function reverstText(){
// let reversedText=text.split('').reverse().join('')
// setText(reversedText)
// }

let [show,setShow]=useState(true)
let bulboff='https://images-eu.ssl-images-amazon.com/images/I/51bCZTw1HlL._AC_UL600_SR600,600_.jpg'
let bulbon='https://static.vecteezy.com/system/resources/previews/009/385/277/non_2x/colored-light-bulb-clipart-design-illustration-free-png.png'


  // const text='welcome to html'
  // const meme='moye moye'
  // const num=5
  // const isExist=true
  // const car={
  //   name:'civic',
  //   model:2021,
  //   color:'red'

  // }
  // const memes = ['Moye Moye', 'Aayeen',
  // 'Program War Gya', 'Kehna kia chahtay ho?',
  // 'Jaldi bol! Subha kahi jana hai!', 'Kesa diya?']

  // const cars = ['Audi', 'Mehran', 'Civic', 'Corolla']
  // const carlist=[
  //   {
  //     name:'audi',
  //     model:2016,
  //     color:'blue',
  //     features:['power','ingine','mike']
  //   },
  //   {
  //     name:'mehran',
  //     model:2011,
  //     color:'gray',
  //     features:['power','battery','ac']
  //   },
  //   {
  //     name:'civic',
  //     model:2019,
  //     color:'red',
  //     features:['power','ingine','petrol']
  //   }
  // ]
  
  
  return (

    <div className="App">
      <header className="App-header">
        <img width='190px' src={show? bulbon:bulboff}/>
        <button onClick={()=> setShow(!show)}> on/off </button>
    
      </header>
    </div>
  );
}

export default App;
