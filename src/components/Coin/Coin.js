import s from './Coin.module.css'
import Home from './../Home/Home'
import {useState,useEffect} from 'react'
import { IoIosRocket } from "react-icons/io";
import { CgMoreO } from "react-icons/cg";
import { FaKey } from "react-icons/fa6";
import { SlEnergy } from "react-icons/sl";
import Boost from './../Boost/Boost'
import {BrowserRouter, Routes, Route,NavLink} from "react-router-dom"

const Coin = ()=>{
	let energyStorage = JSON.parse(localStorage.getItem('energy'))
	let coinStroage = localStorage.getItem('coin')

	const [coin,setCoin] = useState(0)
	const [energy,setEnergy] = useState(energyStorage)
	const [fullEng,setFullEng] = useState(1000)
	const [point,setPoint] = useState(1)
	// const [home,setHome] = useState(true)
	// const [boost,setBoost] = useState(false)

// 
// 	useEffect(()=>{
// 		let coinStroage = localStorage.getItem('coin')
// 		let energyStorage = localStorage.getItem('energy')
// 
// 		setEnergy(energyStorage)
// 	},[])

	useEffect(()=>{
		let timer;
		if(energy < fullEng){
			timer =	setInterval(()=>{setEnergy((prevEnergy) => {
        if (prevEnergy < fullEng) {
          return prevEnergy + 1;
        } else {
          clearInterval(timer);
          return prevEnergy;
        }
      });
    }, 1000);
  }

	return () => {
    clearInterval(timer);
  };
	},[energy,fullEng])
	return (
		<div className={s.megaContainer}>
		<Routes>
			<Route path="/" element={<><Home  
			coin={coin} 
			setCoin={setCoin} 
			energy={energy} 
			setEnergy={setEnergy}
			point={point}
			setPoint={setPoint}/>
			<div className={s.content}>
				<NavLink to="/boost"><button><IoIosRocket /><br />Boost</button></NavLink>
				<NavLink to="/missions"><button><CgMoreO/><br />Missons</button></NavLink>
				<NavLink to="/promocode"><button><FaKey /><br/>Promo</button></NavLink>
			</div>
			<div className={s.fuelEnergy}>
			<h3><SlEnergy/>{energy}/{fullEng}</h3>
			</div>
			<div className={s.energy}>
				
				<div className={s.miniEnergy} style={{width:`${100 / 10 * energy / 100}%`}} ></div>
				
			</div> </> }/>
			<Route path="/boost" element={
				<Boost 
				coin={coin} 
				setCoin={setCoin}
				energy={energy}
				setEnergy={setEnergy}
				fullEng={fullEng}
				setFullEng={setFullEng}
				point={point}
				setPoint={setPoint}/>} />
		</Routes>
			<div className={s.autor}>Ⓒ amiryann23</div>
		</div>
		)
}

export default Coin