import s from "./Home.module.css"
import { BsCoin } from "react-icons/bs";
import { TbCoinFilled } from "react-icons/tb";
import {useState,useEffect,useRef} from 'react'

const Home = ({energy,setEnergy})=>{
	
	const [coin,setCoin] = useState(0)
	const [change,setChange] = useState(false)

	const CoinChange = useRef()
	let coinStroage = JSON.parse(localStorage.getItem('coin'))

	useEffect(()=>{
		setCoin(coinStroage)
	},[])


	useEffect(()=>{
		if(change === true){
			CoinChange.current.classList.add(s.animCoin)
			setTimeout(()=>{setChange(false)},0)
			setTimeout(()=>{CoinChange.current.classList.remove(s.animCoin)},50)
		}
	},[change])


	return (
		<div className={s.megaContainer}>
			<div className={s.content1}><h3>aCoin</h3></div>
			<div className={s.content2}><BsCoin /><h2>{coin}</h2></div>
			<div className={s.content3}  ref={CoinChange} ><TbCoinFilled onClick={()=>{
				setChange(true)
				setCoin((prevEnergy) => prevEnergy + 1)
				setEnergy((prevEnergy) => prevEnergy - 1)
				localStorage.setItem('coin',coin)
				localStorage.setItem('energy',JSON.stringify(energy))

			}}/></div>
			<div className={s.content4}></div>
		</div>
		)
}

export default Home