import s from "./Mission3.module.css"
import { BsCoin } from "react-icons/bs";
import { RiCoinsFill } from "react-icons/ri"
import { GrFormClose } from "react-icons/gr";
import { AiOutlineCheck } from "react-icons/ai";
import {useState,useEffect,useRef} from 'react'

const Mission3 = ({coin,setCoin})=>{
		let mission1Storage = JSON.parse(localStorage.getItem('mission3'))
		let coinStroage = JSON.parse(localStorage.getItem('coin'))
		const [mission3,setMission3] = useState(mission1Storage ? mission1Storage : false)
		const [coin2,setCoin2] = useState(coinStroage)
	const btn3 = useRef(null)
	const btn3Anim = useRef(null)

	// let coinStroage = JSON.parse(localStorage.getItem('coin'))
	useEffect(()=>{
		
		setTimeout(()=>{
		
		if(coin2 > 10000 && !mission3){
			btn3.current.disabled = false
			btn3.current.classList.add(s.animBtn3)
			btn3Anim.current.classList.add(s.btn3Anim)
		} else {btn3.current.disabled = true}
		},0)
			}
		
	,[])


	useEffect(()=>{
		setTimeout(()=>{
		if(mission3 && btn3.current && btn3Anim.current){
			btn3.current.classList.remove(s.animBtn3)
			btn3Anim.current.classList.remove(s.btn3Anim)
			btn3.current.disabled = true
		} },0)
	},[mission3])

	return (
		<div className={s.content4}>
		<button ref={btn3}  onClick={()=>{
				if(coin2 >= 10000 && !mission3){
				setMission3((prevMission3)=>true)
				localStorage.setItem('mission3',true)
				setCoin2((prevCoin2)=>prevCoin2 + 5000)
				localStorage.setItem('coin',coin2 + 5000)
			}
			}}>
			<span className={s.miniContent1}><BsCoin /></span>
			{coin2 < 10000 
			? <span className={s.miniContent2}>
				<span className={s.miniBlock1}>Collect 10000 a-coin</span>
				<span className={s.miniBlock2}><h5>+5000</h5><RiCoinsFill /></span>
			</span>
			: <span className={s.miniContent2}>
				<span className={s.miniBlock1}>Collect 10000 a-coin</span>
				<span className={s.miniBlock2}><h5>+5000</h5><RiCoinsFill /></span>
				<span className={s.miniBlock3} ref={btn3Anim}>{!mission3 ? "Take!" : "Taken" }</span>
			</span>
			}
			{!mission3 
			? <span className={`${s.miniContent3} ${s.icon1}`}><GrFormClose /></span> 
			: <span className={`${s.miniContent3} ${s.icon2}`}><AiOutlineCheck /></span>}
			</button> 
			
		</div>
		)
}

export default Mission3