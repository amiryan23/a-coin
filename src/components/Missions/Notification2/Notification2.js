import s from './Notification2.module.css'
import {useState,useEffect,useRef} from 'react'
import { IoIosRocket } from "react-icons/io";
import {NavLink} from 'react-router-dom'

const Notification2 = ({openNotific,setOpenNotific,openNotific2,setOpenNotific2,openNotific3,setOpenNotific3,openNotific4,setOpenNotific4,openNotific5,setOpenNotific5,icon,text})=>{
	const notificAnim = useRef(null)
	const turboAnim = useRef(null)
	const useAnim = useRef(null)
	const textAnim = useRef(null)
	useEffect(()=>{
		if(openNotific){
			setTimeout(()=>{
			notificAnim.current.classList.add(s.notificAnim)
			turboAnim.current.classList.add(s.turboAnim)
			useAnim.current.classList.add(s.useAnim)
			textAnim.current.classList.add(s.textAnim)
			},50)
			setTimeout(()=>{
				notificAnim.current.classList.remove(s.notificAnim)
			turboAnim.current.classList.remove(s.turboAnim)
			useAnim.current.classList.remove(s.useAnim)
			textAnim.current.classList.remove(s.textAnim)

		},5000)
			setTimeout(()=>{
				setOpenNotific((prevOpenNotific)=>false)
			},5500)
		} 

			if(openNotific2){
			setTimeout(()=>{
			notificAnim.current.classList.add(s.notificAnim)
			turboAnim.current.classList.add(s.turboAnim)
			useAnim.current.classList.add(s.useAnim)
			textAnim.current.classList.add(s.textAnim)
			},50)
			setTimeout(()=>{
				notificAnim.current.classList.remove(s.notificAnim)
			turboAnim.current.classList.remove(s.turboAnim)
			useAnim.current.classList.remove(s.useAnim)
			textAnim.current.classList.remove(s.textAnim)

		},5000)
			setTimeout(()=>{
				setOpenNotific2((prevOpenNotific2)=>false)
			},5500)
		}


		if(openNotific3){
			setTimeout(()=>{
			notificAnim.current.classList.add(s.notificAnim)
			turboAnim.current.classList.add(s.turboAnim)
			useAnim.current.classList.add(s.useAnim)
			textAnim.current.classList.add(s.textAnim)
			},50)
			setTimeout(()=>{
				notificAnim.current.classList.remove(s.notificAnim)
			turboAnim.current.classList.remove(s.turboAnim)
			useAnim.current.classList.remove(s.useAnim)
			textAnim.current.classList.remove(s.textAnim)

		},5000)
			setTimeout(()=>{
				setOpenNotific3((prevOpenNotific3)=>false)
			},5500)
		}

			if(openNotific4){
			setTimeout(()=>{
			notificAnim.current.classList.add(s.notificAnim)
			turboAnim.current.classList.add(s.turboAnim)
			useAnim.current.classList.add(s.useAnim)
			textAnim.current.classList.add(s.textAnim)
			},50)
			setTimeout(()=>{
				notificAnim.current.classList.remove(s.notificAnim)
			turboAnim.current.classList.remove(s.turboAnim)
			useAnim.current.classList.remove(s.useAnim)
			textAnim.current.classList.remove(s.textAnim)

		},5000)
			setTimeout(()=>{
				setOpenNotific4((prevOpenNotific4)=>false)
			},5500)
		}

			if(openNotific5){
			setTimeout(()=>{
			notificAnim.current.classList.add(s.notificAnim)
			turboAnim.current.classList.add(s.turboAnim)
			useAnim.current.classList.add(s.useAnim)
			textAnim.current.classList.add(s.textAnim)
			},50)
			setTimeout(()=>{
				notificAnim.current.classList.remove(s.notificAnim)
			turboAnim.current.classList.remove(s.turboAnim)
			useAnim.current.classList.remove(s.useAnim)
			textAnim.current.classList.remove(s.textAnim)

		},5000)
			setTimeout(()=>{
				setOpenNotific5((prevOpenNotific5)=>false)
			},5500)
		}
	},[openNotific,openNotific2,openNotific3,openNotific4,openNotific5])
	return (
		<div className={s.megaContainer} ref={notificAnim}>
			<div className={s.content1} ref={turboAnim}>{icon}</div>
			<div className={s.content2} ref={textAnim}>{text}</div>
			<div className={s.content3} ref={useAnim}>
			{/* <button className={s.btn}>Okay</button> */}
			
			</div>
		</div>
		)
}

export default Notification2