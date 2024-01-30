import s from './Missions.module.css'
import {useState,useEffect,useRef} from 'react'
import { GrLinkPrevious } from "react-icons/gr";
import {NavLink} from 'react-router-dom'
import { BsCoin } from "react-icons/bs";
import { RiCoinsFill } from "react-icons/ri"
import { GrFormClose } from "react-icons/gr";
import { AiOutlineCheck } from "react-icons/ai";
import Mission1 from './Mission1/Mission1'
import Mission2 from './Mission2/Mission2'

const Missions = ({coin,setCoin})=>{

	// const [mission1,setMission1] = useState(false)
	// const btn1 = useRef(null)
	// const btn1Anim = useRef(null)

	const boostAnim = useRef(null)

  		useEffect(()=>{
  			let bAnim = true
  			setTimeout(()=>{boostAnim.current.classList.add(s.boostAnim)},0)

  			return ()=>{
  				if(!bAnim){
  				boostAnim.current.classList.remove(s.boostAnim)
  			}
  			}
  		},[])

	let coinStroage = JSON.parse(localStorage.getItem('coin'))
	useEffect(()=>{
		setCoin(coinStroage)
		
	},[])
// 
// 
// 	useEffect(()=>{
// 		if(mission1){
// 			btn1.current.classList.remove(s.animBtn1)
// 			btn1Anim.current.classList.remove(s.btn1Anim)
// 			btn1.current.disabled = true
// 		}
// 	},[mission1])



	

	return (
		<div className={s.megaContainer} ref={boostAnim}>
			<div className={s.content1}>
			<span><NavLink to="/"><GrLinkPrevious/></NavLink></span>
			<span><h3></h3></span>
			<span className={s.miniBlock3}><BsCoin /><h3>{coin}</h3></span>
			</div>
			<Mission1 coin={coin} setCoin={setCoin}/>
			<Mission2 coin={coin} setCoin={setCoin}/>
			
			<div className={s.content3}></div>
			<div className={s.content4}></div>
			<div className={s.content5}></div>
			<div className={s.content6}></div>
		</div>
		)
}

export default Missions