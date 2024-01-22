import s from './Boost.module.css'
import { BsCoin } from "react-icons/bs";
import { GrLinkPrevious } from "react-icons/gr";
import {NavLink} from 'react-router-dom'
import { BsRocket } from "react-icons/bs";
import { SlEnergy } from "react-icons/sl";
import {useState,useEffect} from 'react'


const Boost = ({coin,setCoin,point,setPoint,energy,setEnergy,fullEng,setFullEng}) =>{
	let coinStroage = localStorage.getItem('coin')

	const [turbo,setTurbo] = useState(3)
	const [boostEnergy,setBoostEnergy] = useState(3)
	const [buyTurbo,setBuyTurbo] = useState(false)
	const [buyEnergy,setBuyEnergy] = useState(false)

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
			<div onClick={()=>{
				setBuyTurbo(true)
				if(buyTurbo === true){
				setPoint((prevPoint)=> 5)
				if(turbo > 0){
				setTurbo((prevTurbo)=>prevTurbo - 1)
			}
			    } else (setPoint(point))
			}}>
				<span className={s.miniContent1}>Turbo<span>{turbo}/3 </span></span>
				<span className={s.miniContent2}><BsRocket/></span>
			</div>
			<div onClick={()=>{
				setBuyEnergy(true)
				if(buyEnergy === true){
					setEnergy((prevEnergy)=>fullEng)
					if(boostEnergy > 0){
					setBoostEnergy((prevBoostEnergy)=>prevBoostEnergy - 1)
				}
				}
			}}>
				<span className={s.miniContent1}>Energy<span>{boostEnergy}/3 </span></span>
				<span className={s.miniContent3}><SlEnergy/></span>
			</div>
			</div>
			<div className={s.content5}>Boosters</div>
			<div className={s.content6}></div>
			<div className={s.content7}></div>
		</div>
		)
}


export default Boost;