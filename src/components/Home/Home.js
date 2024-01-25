import s from "./Home.module.css"
import { BsCoin } from "react-icons/bs";
import { TbCoinFilled } from "react-icons/tb";
import { FaStopwatch } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { BsEmojiSmileUpsideDown } from "react-icons/bs";
import {useState,useEffect,useRef} from 'react'

const Home = ({energy,setEnergy,coin,setCoin,point,setPoint,buyTurbo,setBuyTurbo,buyEnergy,setBuyEnergy,energyPoint,setEnergyPoint})=>{
	
	
	const [change,setChange] = useState("")
	const [wait,setWait] = useState(true)
	const [second,setSecond] = useState(15)
	const intervalRef = useRef(null);

	const timerRef = useRef(null);
	const timerRef2 = useRef(null);	

	//

	useEffect(()=>{
		
		clearInterval(intervalRef.current)
		clearTimeout(timerRef.current)
		
		if(buyTurbo === true){
			intervalRef.current = setInterval(()=>{setSecond((prevSecond)=>prevSecond - 1)},1000)
	timerRef.current = setTimeout(()=>{
		setBuyTurbo((prevBuyTurbo)=>false)

		setPoint((prevPoint)=> prevPoint - 5)
	},16000)
	}	
		
			 return () => {
      clearTimeout(timerRef.current)
      clearInterval(intervalRef.current)
    };
	},[buyTurbo])


	useEffect(()=>{
		clearTimeout(timerRef2.current)

		if(buyEnergy === true){
			timerRef2.current = setTimeout(()=>{
				setBuyEnergy((prevBuyEnergy)=>false)
			},5000)
		}	return ()=>{
			clearTimeout(timerRef2.current)
		}
	},[buyEnergy])

	//

	// useEffect(()=>{
	// 	clearInterval(intervalRef.current)
	// 	
	// 	if(buyTurbo === true){
	// 	
	// 	intervalRef.current = setInterval(()=>{setSecond((prevSecond)=>prevSecond - 1)},1000)
	// 	}
	// 		 return () => {
 //      clearInterval(intervalRef.current);
 //      // clearTimeout(timerRef.current)
 //    };
	// },[buyTurbo])



	//

	useEffect(()=>{
		if(energy === 0){
			setWait(false)
		} else (setWait(true))

	
	},[energy])

	//

	const CoinChange = useRef()
	let coinStroage = JSON.parse(localStorage.getItem('coin'))
	// let energyPointStorage = JSON.parse(localStorage.getItem('energyPoint'))
	

	//

	useEffect(()=>{
		setCoin(coinStroage)
		// setEnergyPoint(energyPointStorage)
		
	},[])

	//



	useEffect(()=>{
		if(change === true ){
			CoinChange.current.classList.add(s.animCoin)
			// setTimeout(()=>{setChange(false)},0)
			
			setTimeout(()=>{
				CoinChange.current.classList.remove(s.animCoin)
				setChange((prevChange)=>false)
			},50)
		}
	},[change])

	//

	const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

	return (
		<div className={s.megaContainer}>
			<div className={s.content1}><h3>aCoin</h3></div>
			<div className={s.content2}><BsCoin /><h2>{coin}</h2></div>
			{buyTurbo === true &&	<div className={s.miniContent}> 
			<div className={s.turboMode}>Turbo Mode</div>
			<div className={s.turboContent}>
			<div className={s.turboMiniContent} style={{width:`${(second / 150) * 1000}%`}}></div>
			</div>
			<div className={s.second}>{second} s.</div>
			</div>}
			<div className={s.content3}  ref={CoinChange} >{wait ? <TbCoinFilled onClick={
				isMobile ? undefined : (e)=>{
				e.preventDefault()
				if(energy > 0){
				setCoin((prevCoin) => prevCoin + point)
				setChange((prevChange)=>true)
				if(energy >= energyPoint){
				setEnergy((prevEnergy) => prevEnergy - energyPoint)
				}
			}
				localStorage.setItem('coin',coin)
				localStorage.setItem('energy',JSON.stringify(energy))

			}} 
			onTouchStart={(e)=>{
				e.preventDefault()
				if(energy > 0){
				setCoin((prevCoin) => prevCoin + point)
				setChange((prevChange)=>true)
				if(energy >= energyPoint){
				setEnergy((prevEnergy) => prevEnergy - energyPoint)
				}
			}
				localStorage.setItem('coin',coin)
				localStorage.setItem('energy',JSON.stringify(energy))
			}}
		
			/> : <div className={s.miniContent3}><h3>Waiting...</h3><BsEmojiSmileUpsideDown /></div> }</div> 
			<div className={s.content4}></div>
		</div>
		)
}

export default Home