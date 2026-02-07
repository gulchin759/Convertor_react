
import { useState } from 'react'
import './App.css'
import Moneys from './Moneys';




function App() {

  const [nowmoney, setnowmoney] = useState("RUB")

  const [star_v, Setstar_v] = useState('');
  const [finish_v, Setfinish_v] = useState('');

  const [tomoney, settomoney] = useState("RUB");

  const [activ, setactiv] = useState("firstavtiv")



  const active1 = () => {
    setactiv('firstavtiv')
  }
  const active2 = () => {
    setactiv('secundtavtiv')
  }


  const change1 = (e) => {
    Setstar_v(Number(e.target.value))
  }
  const change2 = (e) => {
    Setfinish_v(Number(e.target.value))
  }

  if (activ == "firstavtiv") {

    fetch(`https://v6.exchangerate-api.com/v6/1ee89f8aa693562882fbd494/latest/${nowmoney}`)
      .then((res) => res.json())
      .then((data) => {
    
        Setfinish_v(Number(star_v) * Number(data.conversion_rates[tomoney]))

      })
  }

  else {

    fetch(`https://v6.exchangerate-api.com/v6/1ee89f8aa693562882fbd494/latest/${tomoney}`)
      .then((res) => res.json())
      .then((data) => {

        Setstar_v(Number(finish_v) * Number(data.conversion_rates[nowmoney]))
      })
  }



  return (

    <div className='App'>
      <h1>Converter</h1>

      <div className='blocks'>
        <div className='block1'>
          <div className='block-word'> <Moneys onSelect={setnowmoney} /> </div>
          <input type="number" value={star_v} onChange={change1} onClick={active1} />
        </div>

        <div className='block2'>
          <div className='block-word'> <Moneys onSelect={settomoney} /> </div>


          <input type="number" value={finish_v} onChange={change2} onClick={active2} />
        </div>

      </div>




    </div>


  )
}

export default App
