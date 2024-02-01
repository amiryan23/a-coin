import s from "./Mission4.module.css"
import { BsCoin } from "react-icons/bs";
import { RiCoinsFill } from "react-icons/ri"
import { GrFormClose } from "react-icons/gr";
import { AiOutlineCheck } from "react-icons/ai";
import {useState,useEffect,useRef} from 'react'
import { PiTelegramLogo } from "react-icons/pi";

const Mission4 = ({visitTele,setVisitTele,coin,setCoin})=>{
	
	let mission4Storage = JSON.parse(localStorage.getItem('mission4'))
	let visitGitHubStorage = JSON.parse(localStorage.getItem('visitGitHub'))
	const [mission4,setMission4] = useState(mission4Storage ? mission4Storage : false)
	const [git,setGit] = useState(visitGitHubStorage ? visitGitHubStorage : false)

	const btn4 = useRef(null)
	const btn4Anim = useRef(null)
	
	// let visitTeleStorage = JSON.parse(localStorage.getItem('visitTele'))

// 	useEffect(()=>{
// 		
// setTele(visitTeleStorage ? visitTeleStorage : false)
// 	},[])

	useEffect(()=>{
setTimeout(()=>{
		
		
		 
		if(git === true && !mission4){
			 btn4.current.disabled = false
			btn4.current.classList.add(s.animBtn4)
				
			btn4Anim.current.classList.add(s.btn4Anim)
		
		
		} else { btn4.current.disabled = true}

		
			 },0)
		}
		
	,[git])


	useEffect(()=>{
		setTimeout(()=>{
			if (btn4.current){
			
		if(mission4 && btn4.current && btn4Anim.current){
			btn4.current.classList.remove(s.animBtn4)
			btn4Anim.current.classList.remove(s.btn4Anim)
			btn4.current.disabled = true
		} 
	} },0)
	},[mission4])

	return (
		<div className={s.content5}>
		<button className={s.btn4} ref={btn4}  onClick={()=>{
			if(!mission4){
				setMission4((prevMission4)=>true)
				localStorage.setItem('mission4',true)
				setCoin((prevCoin)=>prevCoin + 3000)
				localStorage.setItem('coin',coin + 3000)
				
				console.log(git,mission4)

				}

			}}>
			<span className={s.miniContent1}><PiTelegramLogo /></span>
			{!git
			? <span className={s.miniContent2}>
				<span className={s.miniBlock1}>Visit GitHub account</span>
				<span className={s.miniBlock2}><h5>+3000</h5><RiCoinsFill /></span>
			</span>
			: <span className={s.miniContent2}>
				<span className={s.miniBlock1}>Visit  GitHub account</span>
				<span className={s.miniBlock2}><h5>+3000</h5><RiCoinsFill /></span>
				<span className={s.miniBlock3} ref={btn4Anim}>{!mission4 ? "Take!" : "Taken" }</span>
			</span>
			}
			{!mission4
			? <span className={`${s.miniContent3} ${s.icon1}`}><GrFormClose /></span> 
			: <span className={`${s.miniContent3} ${s.icon2}`}><AiOutlineCheck /></span>}
			</button> 
			
		</div>
		)
}

export default Mission4