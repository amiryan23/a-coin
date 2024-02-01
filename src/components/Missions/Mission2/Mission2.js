import s from "./Mission2.module.css"
import { BsCoin } from "react-icons/bs";
import { RiCoinsFill } from "react-icons/ri"
import { GrFormClose } from "react-icons/gr";
import { AiOutlineCheck } from "react-icons/ai";
import {useState,useEffect,useRef} from 'react'
import { PiTelegramLogo } from "react-icons/pi";

const Mission2 = ({visitTele,setVisitTele,coin,setCoin})=>{
	
	let mission2Storage = JSON.parse(localStorage.getItem('mission2'))
	let visitTeleStorage = JSON.parse(localStorage.getItem('visitTele'))
	const [mission2,setMission2] = useState(mission2Storage ? mission2Storage : false)
	const [tele,setTele] = useState(visitTeleStorage ? visitTeleStorage : false)

	const btn2 = useRef(null)
	const btn2Anim = useRef(null)
	
	// let visitTeleStorage = JSON.parse(localStorage.getItem('visitTele'))

// 	useEffect(()=>{
// 		
// setTele(visitTeleStorage ? visitTeleStorage : false)
// 	},[])

	useEffect(()=>{
setTimeout(()=>{
		
		
		 
		if(tele === true && !mission2){
			 btn2.current.disabled = false
			btn2.current.classList.add(s.animBtn2)
				
			btn2Anim.current.classList.add(s.btn2Anim)
		
		
		} else { btn2.current.disabled = true}

		
			 },0)
		}
		
	,[tele])


	useEffect(()=>{
		setTimeout(()=>{
			if (btn2.current){
			
		if(mission2 && btn2.current && btn2Anim.current){
			btn2.current.classList.remove(s.animBtn2)
			btn2Anim.current.classList.remove(s.btn2Anim)
			btn2.current.disabled = true
		} 
	} },0)
	},[mission2])

	return (
		<div className={s.content3}>
		<button className={s.btn2} ref={btn2}  onClick={()=>{
			if(!mission2){
				setMission2((prevMission2)=>true)
				localStorage.setItem('mission2',true)
				setCoin((prevCoin)=>prevCoin + 3000)
				localStorage.setItem('coin',coin + 3000)
				
				console.log(tele,mission2)

				}

			}}>
			<span className={s.miniContent1}><PiTelegramLogo /></span>
			{!tele 
			? <span className={s.miniContent2}>
				<span className={s.miniBlock1}>Visit telegram channel</span>
				<span className={s.miniBlock2}><h5>+3000</h5><RiCoinsFill /></span>
			</span>
			: <span className={s.miniContent2}>
				<span className={s.miniBlock1}>Visit telegram channel</span>
				<span className={s.miniBlock2}><h5>+3000</h5><RiCoinsFill /></span>
				<span className={s.miniBlock3} ref={btn2Anim}>{!mission2 ? "Take!" : "Taken" }</span>
			</span>
			}
			{!mission2
			? <span className={`${s.miniContent3} ${s.icon1}`}><GrFormClose /></span> 
			: <span className={`${s.miniContent3} ${s.icon2}`}><AiOutlineCheck /></span>}
			</button> 
			
		</div>
		)
}

export default Mission2