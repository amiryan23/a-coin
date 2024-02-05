import s from './Coin.module.css'
import Home from './../Home/Home'
import {useState,useEffect,useRef} from 'react'
import { IoIosRocket } from "react-icons/io";
import { CgMoreO } from "react-icons/cg";
import { FaKey } from "react-icons/fa6";
import { SlEnergy } from "react-icons/sl";
import Boost from './../Boost/Boost'
import Missions from './../Missions/Missions'
import Promo from './../Promo/Promo'
import {BrowserRouter, Routes, Route,NavLink} from "react-router-dom"

const Coin = ()=>{
	let energyStorage = JSON.parse(localStorage.getItem('energy'))
	let coinStroage = localStorage.getItem('coin')
	let pointStorage = JSON.parse(localStorage.getItem('point'))
	let fullEngStorage = JSON.parse(localStorage.getItem('fullEng'))
	let energyPointStorage = JSON.parse(localStorage.getItem('energyPoint'))
	let recharghPointStorage = JSON.parse(localStorage.getItem('recharghPoint')) 
	let visitTeleStorage = JSON.parse(localStorage.getItem('visitTele'))
	let visitGitHubStorage = JSON.parse(localStorage.getItem('visitGitHub'))
	const [coin,setCoin] = useState(coinStroage ? coinStroage : 0)
	const [energy,setEnergy] = useState(energyStorage ? energyStorage : 1000 )
	const [fullEng,setFullEng] = useState(fullEngStorage ? fullEngStorage : 1000)
	const [point,setPoint] = useState(pointStorage ? pointStorage : 1)
	const [energyPoint,setEnergyPoint] = useState(energyPointStorage ? energyPointStorage : 1)
	const [recharghPoint,setRecharghPoint] = useState(recharghPointStorage ? recharghPointStorage : 1)
	const [buyTurbo,setBuyTurbo] = useState(false)
	const [buyEnergy,setBuyEnergy] = useState(false)
	const [visitTele,setVisitTele] = useState(visitTeleStorage ? visitTeleStorage : false)
	const [visitGitHub,setVisitGitHub] = useState(visitGitHubStorage ? visitGitHubStorage : false)

const boostAnim1 = useRef(null)

  		useEffect(()=>{
  			let bAnim = true
  			setTimeout(()=>{boostAnim1.current.classList.add(s.boostAnim)},0)

  			return ()=>{
  				if(!bAnim){
  				boostAnim1.current.classList.remove(s.boostAnim)
  			}
  			}
  		},[])


	useEffect(()=>{
		let timer;
		if(energy < fullEng){
			timer =	setInterval(()=>{setEnergy((prevEnergy) => {
        if (prevEnergy < fullEng) {
        	localStorage.setItem('energy',prevEnergy)
          return prevEnergy + recharghPoint;
        } else {
          clearInterval(timer);
          return prevEnergy;
        }
      });
    }, 1000);
  } else if(energy > fullEng){
  	setEnergy(fullEng)
  }

	return () => {
    clearInterval(timer);
  };
	},[energy,fullEng])


	return (
		<div className={s.megaContainer} ref={boostAnim1}>
		<Routes>
			<Route path="/" element={<>
			<Home  
			coin={coin} 
			setCoin={setCoin} 
			energy={energy} 
			setEnergy={setEnergy}
			point={point}
			setPoint={setPoint}
			buyTurbo={buyTurbo}
			setBuyTurbo={setBuyTurbo}
			buyEnergy={buyEnergy}
			setBuyEnergy={setBuyEnergy}
			energyPoint={energyPoint}
			setEnergyPoint={setEnergyPoint}
			visitTele={visitTele}
			setVisitTele={setVisitTele}
			visitGitHub={visitGitHub}
			setVisitGitHub={setVisitGitHub}
			/>
			<div className={s.content}>
				<NavLink to="/boost"><button><IoIosRocket /><br />Boost</button></NavLink>
				<NavLink to="/missions"><button><CgMoreO/><br />Missons</button></NavLink>
				<NavLink to="/promocode"><button><FaKey /><br/>Promo</button></NavLink>
			</div>
			<div className={s.fuelEnergy}>
			<h3><SlEnergy/>{energy}/{fullEng}</h3>
			</div>
			<div className={s.energy}>
				
				<div className={s.miniEnergy} style={{width:`${(energy/fullEng) 
				* 100}%`}} ></div>
				
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
				setPoint={setPoint}
				buyTurbo={buyTurbo}
				setBuyTurbo={setBuyTurbo}
				buyEnergy={buyEnergy}
				setBuyEnergy={setBuyEnergy}
				energyPoint={energyPoint}
				setEnergyPoint={setEnergyPoint}
				recharghPoint={recharghPoint}
				setRecharghPoint={setRecharghPoint}/>} />
				<Route path="/missions" element={
					<Missions
					coin={coin} 
					setCoin={setCoin}
					visitTele={visitTele}
					setVisitTele={setVisitTele}
					visitGitHub={visitGitHub}
					setVisitGitHub={setVisitGitHub}
					 />} />
				<Route path="/promocode" element={<Promo />} />
		</Routes>
			<div className={s.autor}>Ⓒ amiryan23</div>
		</div>
		)
}

export default Coin