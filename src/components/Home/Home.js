import s from "./Home.module.css"
import { BsCoin } from "react-icons/bs";
import { TbCoinFilled } from "react-icons/tb";
import { FaStopwatch } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { BsEmojiSmileUpsideDown } from "react-icons/bs";
import {useState,useEffect,useRef} from 'react'

const Home = ({energy,setEnergy,coin,setCoin,point,setPoint})=>{
	
	
	const [change,setChange] = useState(true)
	const [wait,setWait] = useState(true)

	useEffect(()=>{
		if(energy === 0){
			setWait(false)
		} else (setWait(true))
	},[energy])

	const CoinChange = useRef()
	let coinStroage = JSON.parse(localStorage.getItem('coin'))

	useEffect(()=>{
		setCoin(coinStroage)
	},[])


	useEffect(()=>{
		if(change === true ){
			CoinChange.current.classList.add(s.animCoin)
			// setTimeout(()=>{setChange(false)},0)
			setChange(false)
			setTimeout(()=>{CoinChange.current.classList.remove(s.animCoin)},50)
		}
	},[change])


	return (
		<div className={s.megaContainer}>
			<div className={s.content1}><h3>aCoin</h3></div>
			<div className={s.content2}><BsCoin /><h2>{coin}</h2></div>
			<div className={s.content3}  ref={CoinChange} >{wait ? <TbCoinFilled onClick={()=>{
				
				if(energy > 0){
				setCoin((prevCoin) => prevCoin + point)
				setChange(true)
				setEnergy((prevEnergy) => prevEnergy - 1)
			}
				localStorage.setItem('coin',coin)
				localStorage.setItem('energy',JSON.stringify(energy))

			}}/> : <div className={s.miniContent3}><h3>Waiting...</h3><BsEmojiSmileUpsideDown /></div> }</div> 
			<div className={s.content4}></div>
		</div>
		)
}

export default Home