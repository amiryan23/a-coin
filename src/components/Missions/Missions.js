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
import Mission3 from './Mission3/Mission3'
import MIssion4 from './Mission4/Mission4'
import Mission5 from './Mission5/Mission5'

const Missions = ({coin,setCoin,visitTele,setVisitTele,visitGitHub,setVisitGitHub})=>{

	// const [mission1,setMission1] = useState(false)
	// const btn1 = useRef(null)
	// const btn1Anim = useRef(null)

	const boostAnim4 = useRef()

  		useEffect(()=>{
  			let bAnim = true
  			setTimeout(()=>{boostAnim4.current.classList.add(s.boostAnim)},0)

  			return ()=>{
  				if(!bAnim){
  				boostAnim4.current.classList.remove(s.boostAnim)
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
		<div className={s.megaContainer} ref={boostAnim4}>
			<div className={s.content1}>
			<span><NavLink to="/"><GrLinkPrevious/></NavLink></span>
			<span><h3></h3></span>
			<span className={s.miniBlock3}><BsCoin /><h3>{coin}</h3></span>
			</div>
			<Mission1 c
			oin={coin} 
			setCoin={setCoin}/>
			<Mission2 
			visitTele={visitTele} 
			setVisitTele={setVisitTele}
			coin={coin} 
			setCoin={setCoin}/>
			<Mission3 
			coin={coin} 
			setCoin={setCoin} 
			visitTele={visitTele} 
			setVisitTele={setVisitTele}/>
			<MIssion4 
			coin={coin} 
			setCoin={setCoin} 
			visitGitHub={visitGitHub}
			setVisitGitHub={setVisitGitHub} />
			<Mission5
			coin={coin} 
			setCoin={setCoin}  />
			
		</div>
		)
}

export default Missions