import s from './Boost.module.css'
import { BsCoin } from "react-icons/bs";
import { GrLinkPrevious } from "react-icons/gr";
import {NavLink} from 'react-router-dom'
import { BsRocket } from "react-icons/bs";
import { SlEnergy } from "react-icons/sl";
import {useState,useEffect,useRef} from 'react'


const Boost = ({coin,setCoin,point,setPoint,energy,setEnergy,fullEng,setFullEng,buyTurbo,setBuyTurbo}) =>{
	let coinStroage = localStorage.getItem('coin')

	const [turbo,setTurbo] = useState(3)
	const [boostEnergy,setBoostEnergy] = useState(3)
	
	const [buyEnergy,setBuyEnergy] = useState(false)

	const btn1 = useRef()
	const btn2 = useRef()
		const timerRef = useRef(null);
  		const timerRef2 = useRef(null);

	useEffect(()=>{
		
  		
  		clearTimeout(timerRef.current);
  		clearTimeout(timerRef2.current);

		if(buyTurbo ){
			btn1.current.disabled = true;
		timerRef.current = setTimeout(()=>{setBuyTurbo((prevBuyTurbo)=>false)},15000)
		} else (btn1.current.disabled = false)

		if(buyEnergy ){
			btn2.current.disabled = true;
		timerRef2.current = setTimeout(()=>{setBuyEnergy(false)},5000)
		} else (btn2.current.disabled = false)

		return () => {
			clearTimeout(timerRef.current);
			clearTimeout(timerRef2.current);
		}
	},[buyTurbo,buyEnergy])


	useEffect(()=>{
		
		if(buyTurbo === true){
		setTimeout(()=>{
				setPoint((prevPoint)=> 1)
				setBuyTurbo(false)
		},15000)

		} 
		
	},[buyTurbo,buyEnergy])

	

	return (
		<div className={s.megaContainer}>
			<div className={s.content1}><span><NavLink to="/"><GrLinkPrevious/></NavLink></span><span><h3></h3></span><span></span></div>
			<div className={s.content2}>
			<span className={s.block1}>Your balance</span>
			<span className={s.block2}><BsCoin/>{coinStroage}</span>
			</div>
			<div className={s.content3}><h2>Free boosters</h2></div>
			<div className={s.content4}>
			<button ref={btn1} onClick={()=>{
				
				if(buyTurbo === false){
					
				setPoint((prevPoint)=> 5)
				if(turbo > 0){
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

					
					setEnergy((prevEnergy)=>fullEng)
					if(boostEnergy > 0){
					setBoostEnergy((prevBoostEnergy)=> prevBoostEnergy - 1)
					setBuyEnergy((prevBuyEnergy)=> true)
				}
				}
			}}>
				<span className={s.miniContent1}>Energy<span>{boostEnergy}/3 </span></span>
				<span className={s.miniContent3}><SlEnergy/></span>
			</button>
			</div>
			<div className={s.content5}>Boosters</div>
			<div className={s.content6}></div>
			<div className={s.content7}></div>
		</div>
		)
}


export default Boost;