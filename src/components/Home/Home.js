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
	const [animation,setAnimation] = useState(true)
	const [animation2,setAnimation2] = useState(false)
	const [animation3,setAnimation3] = useState(false)
	const [animation4,setAnimation4] = useState(false)
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
		if(energy < energyPoint){
			setWait(false)
		} else (setWait(true))

	
	},[energy])

	//	



	const CoinChange = useRef()
	let coinStroage = JSON.parse(localStorage.getItem('coin'))
	// let energyPointStorage = JSON.parse(localStorage.getItem('energyPoint'))
	// let energyPointStorage = JSON.parse(localStorage.getItem('energyPoint'))


	//

	// const [energyPoint,setEnergyPoint] = useState(energyPointStorage)

	useEffect(()=>{
		setCoin(coinStroage)
		// setEnergyPoint(energyPointStorage)
		
	},[])

	//

	const pointAnim1 = useRef(null)
	const pointAnim2 = useRef(null)
	const pointAnim3 = useRef(null)
	const pointAnim4 = useRef(null)

	const timer1 = useRef(null)
	const timer2 = useRef(null)


	useEffect(()=>{

		

		if(change && CoinChange.current){
			CoinChange.current.classList.add(s.animCoin)
			// setTimeout(()=>{setChange(false)},0)
			setChange((prevChange)=>false)
			setTimeout(()=>{
				CoinChange.current.classList.remove(s.animCoin)
				// setAnimation((prevAnimation)=>true)
				console.log(animation,animation2,animation3)
			},40)
		}
		if(change === true && CoinChange.current){
			
			// setTimeout(()=>{setChange(false)},0)
			if(animation && energy > energyPoint){
			pointAnim1.current.classList.add(s.pointAnim1)
			// pointAnim1.current.classList.remove(s.miniPoint)
				// setAnimation((prevAnimation)=>false)
				// setAnimation2((prevAnimation2)=>true)
				
			
		timer1.current = setTimeout(()=>{
				
				pointAnim1.current.classList.remove(s.pointAnim1)
				
				
			},500)
		}
		} else if(animation2  && energy > energyPoint){
			pointAnim2.current.classList.add(s.pointAnim2)
						// 
						// setAnimation2((prevAnimation2)=>false)
						// setAnimation3((prevAnimation3)=>true)
			timer2.current = setTimeout(()=>{
				
				
				pointAnim2.current.classList.remove(s.pointAnim2)
				
			},500)
		} else if(animation3  && energy > energyPoint){
			pointAnim3.current.classList.add(s.pointAnim3)
				// setAnimation((prevAnimation)=>true)
				// 
				// setAnimation3((prevAnimation3)=>false)
			setTimeout(()=>{
				
				
				pointAnim3.current.classList.remove(s.pointAnim3)
				
			},500)
		} else if(animation4  && energy > energyPoint){
			pointAnim4.current.classList.add(s.pointAnim4)
				// setAnimation((prevAnimation)=>true)
				// 
				// setAnimation3((prevAnimation3)=>false)
			setTimeout(()=>{
				
				
				pointAnim4.current.classList.remove(s.pointAnim4)
				
			},500)
		}



	},[change])
 		

// useEffect(()=>{
// 		if(change === true ){
// 			
// 			// setTimeout(()=>{setChange(false)},0)
// 			pointAnim1.current.classList.add(s.pointAnim1)
// 			// pointAnim1.current.classList.remove(s.miniPoint)
// 			pointAnim2.current.classList.add(s.pointAnim2)
// 			setTimeout(()=>{
// 				
// 				pointAnim1.current.classList.remove(s.pointAnim1)
// 				pointAnim2.current.classList.remove(s.pointAnim2)
// 				setChange((prevChange)=>false)
// 			},5000)
// 		}
// 	},[change])
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
			<div className={s.second}>{second} s</div>
			</div>}
			<div className={s.content3}  ref={CoinChange} >{wait ? <> <TbCoinFilled onClick={
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

				if(animation){
					setAnimation((prevAnimation)=>false)
					setAnimation2((prevAnimation2)=>true)
				} else if (animation2) {
						setAnimation2((prevAnimation2)=>false)
						setAnimation3((prevAnimation3)=>true)
				} else if (animation3){
					setAnimation4((prevAnimation)=>true)
				
				setAnimation3((prevAnimation3)=>false)
				}  else if (animation4){
					setAnimation4((prevAnimation)=>false)
				
				setAnimation((prevAnimation3)=>true)
				}

			}

			} 
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

					if(animation){
					setAnimation((prevAnimation)=>false)
					setAnimation2((prevAnimation2)=>true)
				} else if (animation2) {
						setAnimation2((prevAnimation2)=>false)
						setAnimation3((prevAnimation3)=>true)
				} else if (animation3){
					setAnimation4((prevAnimation)=>true)
				
				setAnimation3((prevAnimation3)=>false)
				} else if (animation4){
					setAnimation4((prevAnimation)=>false)
				
				setAnimation((prevAnimation3)=>true)
				}
			}}
		
			/> <div className={s.contentAnim}>
			<span className={s.miniPoint} ref={pointAnim1}>+{point}</span>
			<span className={s.miniPoint} ref={pointAnim2}>+{point}</span>
			<span className={s.miniPoint} ref={pointAnim3}>+{point}</span>
			<span className={s.miniPoint} ref={pointAnim4}>+{point}</span>
			</div>  </> : <div className={s.miniContent3}><h3>Waiting...</h3><BsEmojiSmileUpsideDown /></div> }</div> 
			<div className={s.content4}></div>
		</div>
		)
}

export default Home