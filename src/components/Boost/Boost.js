import s from './Boost.module.css'
import { BsCoin } from "react-icons/bs";
import { GrLinkPrevious } from "react-icons/gr";
import {NavLink} from 'react-router-dom'
import { BsRocket } from "react-icons/bs";
import { SlEnergy } from "react-icons/sl";
import {useState,useEffect,useRef} from 'react'
import CoinBoost from './CoinBoost/CoinBoost'


const Boost = ({coin,setCoin,point,setPoint,energy,setEnergy,fullEng,setFullEng,buyTurbo,setBuyTurbo,buyEnergy,setBuyEnergy}) =>{
	let coinStroage = localStorage.getItem('coin')
	let turboStorage = JSON.parse(localStorage.getItem('turbo'))
	let energyStorage = JSON.parse(localStorage.getItem('setEnergy'))
	
	const [turbo,setTurbo] = useState(turboStorage === null ? 3 : turboStorage )
	const [boostEnergy,setBoostEnergy] = useState(energyStorage === null ? 3 : energyStorage)
	
	

	const btn1 = useRef()
	const btn2 = useRef()
		// const timerRef = useRef(null);
  		// const timerRef2 = useRef(null);

  		const timerRef3 = useRef(null)
  		const timerRef4 = useRef(null)

  		useEffect(()=>{
  			localStorage.setItem('turbo',turbo)
  			localStorage.setItem('setEnergy',boostEnergy)
  			clearTimeout(timerRef4.current)
  			clearTimeout(timerRef3.current)
  			if(turbo < 3){
  				timerRef3.current = setInterval(()=>{setTurbo((prevTurbo)=>prevTurbo + 1)},6000)
  				
  			}
  			if(boostEnergy < 3){
  				timerRef4.current = setInterval(()=>{setBoostEnergy((prevBoostEnergy)=>prevBoostEnergy + 1)},6000)
  				
  			}

  			return ()=>{
  				clearTimeout(timerRef3.current)
  				clearTimeout(timerRef4.current)
  			}
  		},[turbo,boostEnergy])

	useEffect(()=>{
		
  		
  		// clearTimeout(timerRef.current);
  		// clearTimeout(timerRef2.current);

		if(buyTurbo ){
			btn1.current.disabled = true;
		// timerRef.current = setTimeout(()=>{setBuyTurbo((prevBuyTurbo)=>false)},15000)
		} else (btn1.current.disabled = false)

		if(buyEnergy ){
			btn2.current.disabled = true;
		// timerRef2.current = setTimeout(()=>{setBuyEnergy(false)},5000)
		} else (btn2.current.disabled = false)

		return () => {
			// clearTimeout(timerRef.current);
			// clearTimeout(timerRef2.current);
		}
	},[buyTurbo,buyEnergy])


// 	useEffect(()=>{
// 		
// 		if(buyTurbo === true){
// 		setTimeout(()=>{
// 				setPoint((prevPoint)=> 1)
// 				// setBuyTurbo(false)
// 		},15000)
// 
// 		} 
// 		
// 	},[buyTurbo,buyEnergy])

	const setTurboBoost = turbo > 0 ? turbo - 1 : turbo
	const setEnergyBoost = boostEnergy > 0 ? boostEnergy - 1 : boostEnergy

	return (
		<div className={s.megaContainer}>
			<div className={s.content1}><span><NavLink to="/"><GrLinkPrevious/></NavLink></span><span><h3></h3></span><span></span></div>
			<div className={s.content2}>
			<span className={s.block1}>Your balance</span>
			<span className={s.block2}><BsCoin/>{coin}</span>
			</div>
			<div className={s.content3}><h2>Free boosters</h2></div>
			<div className={s.content4}>
			<button ref={btn1} onClick={()=>{
				
				if(buyTurbo === false){
				localStorage.setItem('turbo',setTurboBoost)
				
				if(turbo > 0){
				setPoint((prevPoint)=>prevPoint + 5)
				setTurbo((prevTurbo)=>prevTurbo - 1)
				setBuyTurbo((prevBuyTurbo)=> true)
			}
			    } else (setPoint(point))


			}}>
				<span className={s.miniContent1}>Turbo<span>{turbo}/3 </span></span>
				<span className={s.miniContent2}><BsRocket/></span>
			</button>
			<button ref={btn2} onClick={()=>{
				
				if(buyEnergy === false){

					localStorage.setItem('setEnergy',setEnergyBoost)
					
					if(boostEnergy > 0){
					setBoostEnergy((prevBoostEnergy)=> prevBoostEnergy - 1)
					setBuyEnergy((prevBuyEnergy)=> true)
					setEnergy((prevEnergy)=>fullEng)
				}
				}
			}}>
				<span className={s.miniContent1}>Energy<span>{boostEnergy}/3 </span></span>
				<span className={s.miniContent3}><SlEnergy/></span>
			</button>
			</div>
			<div className={s.content5}>Boosters</div>
			<div className={s.content6}>
			<CoinBoost 
			coinStroage={coinStroage}
			point={point}
			setPoint={setPoint}
			coin={coin}
			setCoin={setCoin}
			fullEng={fullEng}
			setFullEng={setFullEng}/>
			</div>
			<div className={s.content7}></div>
		</div>
		)
}


export default Boost;