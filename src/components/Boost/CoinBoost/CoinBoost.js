import s from "./CoinBoost.module.css"
import { GiClick } from "react-icons/gi";
import { TbLock } from "react-icons/tb";
import { RiCoinsFill } from "react-icons/ri";
import { SiFastapi } from "react-icons/si";
import { BsSpeedometer2 } from "react-icons/bs";
import {useState,useEffect,useRef} from "react"

const CoinBoost = ({coin,setCoin,point,setPoint,fullEng,setFullEng}) => {
let coinStroage = localStorage.getItem('coin')
	const multitapCoinStorage = JSON.parse(localStorage.getItem('multitapCoin'))
	const energyCoinStorage = JSON.parse(localStorage.getItem('energyCoin'))

	const [multitapCoin,setMultitapCoin] = useState(multitapCoinStorage ? multitapCoinStorage : 1000)
	const [energyCoin,setEnergyCoin] = useState(energyCoinStorage ? energyCoinStorage : 1000)
	const [recharghingCoin,setRecharchingCoin] = useState(1000)

	useEffect(()=>{
			
		

		setCoin(coinStroage)
		
	},[])

	//
	// useEffect(()=>{
	// 		localStorage.setItem('coin',coin)
	// 		localStorage.setItem('point',point)
	// 		localStorage.setItem('multitapCoin',multitapCoin)
	// },[multitapCoin])
	//

	const multitap1 = useRef(null)
	const multitap2 = useRef(null)
	const multitap3 = useRef(null)

	useEffect(()=>{
		if(coinStroage > multitapCoin){
			multitap1.current.classList.remove(s.block1)
			multitap1.current.classList.add(s.multitap1)
			multitap2.current.classList.remove(s.miniBlock1)
			multitap2.current.classList.add(s.multitap2)
			multitap3.current.classList.remove(s.miniBlock2)
			multitap3.current.classList.add(s.multitap3)
		} else {
			multitap1.current.classList.add(s.block1)
			multitap1.current.classList.remove(s.multitap1)
			multitap2.current.classList.add(s.miniBlock1)
			multitap2.current.classList.remove(s.multitap2)
			multitap3.current.classList.add(s.miniBlock2)
			multitap3.current.classList.remove(s.multitap3)
		}
	},[])

	//

	const energy1 = useRef(null)
	const energy2 = useRef(null)
	const energy3 = useRef(null)

	useEffect(()=>{
		if(coin > energyCoin){
			energy1.current.classList.remove(s.block11)
			energy1.current.classList.add(s.energy1)
			energy2.current.classList.remove(s.miniBlock1)
			energy2.current.classList.add(s.energy2)
			energy3.current.classList.remove(s.miniBlock2)
			energy3.current.classList.add(s.energy3)
		} else {
			energy1.current.classList.add(s.block11)
			energy1.current.classList.remove(s.energy1)
			energy2.current.classList.add(s.miniBlock1)
			energy2.current.classList.remove(s.energy2)
			energy3.current.classList.add(s.miniBlock2)
			energy3.current.classList.remove(s.energy3)
		}
	},[])

	return (
		<>
		<button className={s.btn} onClick={()=>{

			if(coin > multitapCoin){
				setMultitapCoin((prevMultitapCoin)=>prevMultitapCoin * 2 )
				setPoint((prevPoint)=>prevPoint + 1)
				setCoin((prevCoin)=>prevCoin - multitapCoin)
					localStorage.setItem('coin',coin - multitapCoin)
			localStorage.setItem('point',point + 1)
			localStorage.setItem('multitapCoin',multitapCoin * 2)
				}

			
			
			
		}}>
			<div ref={multitap1}  className={s.block1}><GiClick /></div>
			<div className={s.block2}>
				<span ref={multitap2} className={s.miniBlock1}>Multitap</span>
				<span ref={multitap3} className={s.miniBlock2}><RiCoinsFill/> {multitapCoin}</span>
			</div>
			<div className={s.block3}>
				{coinStroage > multitapCoin ? "" : <TbLock />}
			</div>
		</button>
		<button className={s.btn} onClick={()=>{
			if(coin > energyCoin ){
				setEnergyCoin((prevEnergyCoin)=>prevEnergyCoin * 2)
				setFullEng((prevFullEng)=>prevFullEng + 200)
				setCoin((prevCoin)=>prevCoin - energyCoin)
				localStorage.setItem('coin',coin - energyCoin)
				localStorage.setItem('fullEng',fullEng + 200)
				localStorage.setItem('energyCoin',energyCoin * 2)
			}
		}}>
			<div className={s.block11} ref={energy1}><SiFastapi /></div>
			<div className={s.block2}>
				<span className={s.miniBlock1} ref={energy2}>Energy</span>
				<span className={s.miniBlock2} ref={energy3}><RiCoinsFill/> {energyCoin}</span>
			</div>
			<div className={s.block3}>
				{coin > energyCoin ? "" :<TbLock />}
			</div>
		</button>		
		<button className={s.btn}>
			<div className={s.block111}><BsSpeedometer2 /></div>
			<div className={s.block2}>
				<span className={s.miniBlock1}>Recharching</span>
				<span className={s.miniBlock2}><RiCoinsFill/> {recharghingCoin}</span>
			</div>
			<div className={s.block3}>
				{coin > recharghingCoin ? "" :<TbLock />}
			</div>
		</button>	
		</>
		)
}

export default CoinBoost;