import s from "./Mission1.module.css"
import { BsCoin } from "react-icons/bs";
import { RiCoinsFill } from "react-icons/ri"
import { GrFormClose } from "react-icons/gr";
import { AiOutlineCheck } from "react-icons/ai";
import {useState,useEffect,useRef} from 'react'

const Mission1 = ({coin,setCoin})=>{
		let mission1Storage = JSON.parse(localStorage.getItem('mission1'))
		const [mission1,setMission1] = useState(mission1Storage ? mission1Storage : false)
	const btn1 = useRef(null)
	const btn1Anim = useRef(null)

	let coinStroage = JSON.parse(localStorage.getItem('coin'))
	useEffect(()=>{
		setCoin(coinStroage)
		if(coin > 10000 && !mission1){
			btn1.current.disabled = false
			btn1.current.classList.add(s.animBtn1)
			btn1Anim.current.classList.add(s.btn1Anim)
		} else {btn1.current.disabled = true}
			}
		
	,[])


	useEffect(()=>{
		if(mission1){
			btn1.current.classList.remove(s.animBtn1)
			btn1Anim.current.classList.remove(s.btn1Anim)
			btn1.current.disabled = true
		}
	},[mission1])

	return (
		<div className={s.content2}>
		<button ref={btn1}  onClick={()=>{
				if(coin >= 10000){
				setMission1((prevMission1)=>true)
				localStorage.setItem('mission1',true)
				setCoin((prevCoin)=>prevCoin + 5000)
				localStorage.setItem('coin',coin + 5000)
			}
			}}>
			<span className={s.miniContent1}><BsCoin /></span>
			{coin < 10000 
			? <span className={s.miniContent2}>
				<span className={s.miniBlock1}>Collect 10000 a-coin</span>
				<span className={s.miniBlock2}><h5>+5000</h5><RiCoinsFill /></span>
			</span>
			: <span className={s.miniContent2}>
				<span className={s.miniBlock1}>Collect 10000 a-coin</span>
				<span className={s.miniBlock2}><h5>+5000</h5><RiCoinsFill /></span>
				<span className={s.miniBlock3} ref={btn1Anim}>{!mission1 ? "Take!" : "Taken" }</span>
			</span>
			}
			{!mission1 
			? <span className={`${s.miniContent3} ${s.icon1}`}><GrFormClose /></span> 
			: <span className={`${s.miniContent3} ${s.icon2}`}><AiOutlineCheck /></span>}
			</button> 
			
		</div>
		)
}

export default Mission1