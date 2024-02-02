import s from "./Mission5.module.css"
import { BsCoin } from "react-icons/bs";
import { RiCoinsFill } from "react-icons/ri"
import { GrFormClose } from "react-icons/gr";
import { AiOutlineCheck } from "react-icons/ai";
import {useState,useEffect,useRef} from 'react'

const Mission5 = ({coin,setCoin})=>{
		let mission5Storage = JSON.parse(localStorage.getItem('mission5'))
		let coinStroage = JSON.parse(localStorage.getItem('coin'))
		const [mission5,setMission5] = useState(mission5Storage ? mission5Storage : false)
		const [coin3,setCoin3] = useState(coinStroage)
	const btn5 = useRef(null)
	const btn5Anim = useRef(null)

	// let coinStroage = JSON.parse(localStorage.getItem('coin'))
	useEffect(()=>{
		
		setTimeout(()=>{
		
		if(coin3 > 100000 && !mission5){
			btn5.current.disabled = false
			btn5.current.classList.add(s.animBtn5)
			btn5Anim.current.classList.add(s.btn5Anim)
		} else {btn5.current.disabled = true}
		},0)
			}
		
	,[])


	useEffect(()=>{
		setTimeout(()=>{
		if(mission5 && btn5.current && btn5Anim.current){
			btn5.current.classList.remove(s.animBtn5)
			btn5Anim.current.classList.remove(s.btn5Anim)
			btn5.current.disabled = true
		} },0)
	},[mission5])

	return (
		<div className={s.content6}>
		<button ref={btn5}  onClick={()=>{
				if(coin3 >= 100000 && !mission5){
				setMission5((prevMission5)=>true)
				localStorage.setItem('mission5',true)
				setCoin3((prevCoin3)=>prevCoin3 + 50000)
				localStorage.setItem('coin',coin3 + 50000)
			}
			}}>
			<span className={s.miniContent1}><BsCoin /></span>
			{coin3 < 100000 
			? <span className={s.miniContent2}>
				<span className={s.miniBlock1}>Collect 100000 a-coin</span>
				<span className={s.miniBlock2}><h5>+50000</h5><RiCoinsFill /></span>
			</span>
			: <span className={s.miniContent2}>
				<span className={s.miniBlock1}>Collect 100000 a-coin</span>
				<span className={s.miniBlock2}><h5>+50000</h5><RiCoinsFill /></span>
				<span className={s.miniBlock3} ref={btn5Anim}>{!mission5 ? "Take!" : "Taken" }</span>
			</span>
			}
			{!mission5 
			? <span className={`${s.miniContent3} ${s.icon1}`}><GrFormClose /></span> 
			: <span className={`${s.miniContent3} ${s.icon2}`}><AiOutlineCheck /></span>}
			</button> 
			
		</div>
		)
}

export default Mission5