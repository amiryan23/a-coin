import s from './Coin.module.css'
import Home from './../Home/Home'
import {useState,useEffect} from 'react'
import { IoIosRocket } from "react-icons/io";
import { CgMoreO } from "react-icons/cg";
import { FaKey } from "react-icons/fa6";

const Coin = ()=>{
	let energyStorage = JSON.parse(localStorage.getItem('energy'))
	let coinStroage = localStorage.getItem('coin')

	const [energy,setEnergy] = useState(energyStorage)
	const [fullEng,setFullEng] = useState(1000)

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
			<Home energy={energy} setEnergy={setEnergy}/>
			<div className={s.content}>
				<button><IoIosRocket /><br />Boost</button>
				<button><CgMoreO/><br />Missons</button>
				<button><FaKey /><br/>Promo</button>
			</div>
			<div className={s.fuelEnergy}>
			<h3>{energy}/{fullEng}</h3>
			</div>
			<div className={s.energy}>
				
				<div className={s.miniEnergy} style={{width:`${100 / 10 * energy / 100}%`}} ></div>
				
			</div>
			<div className={s.autor}>Ⓒ amiryann23</div>
		</div>
		)
}

export default Coin