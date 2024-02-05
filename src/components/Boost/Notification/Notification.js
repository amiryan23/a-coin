import s from './Notification.module.css'
import {useState,useEffect,useRef} from 'react'
import { IoIosRocket } from "react-icons/io";
import {NavLink} from 'react-router-dom'

const Notification = ({openNotific,setOpenNotific})=>{
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
		},100)
		} else {notificAnim.current.classList.remove(s.notificAnim)
			turboAnim.current.classList.remove(s.turboAnim)
			useAnim.current.classList.remove(s.useAnim)
			textAnim.current.classList.remove(s.textAnim)}
	},[openNotific])
	return (
		<div className={s.megaContainer} ref={notificAnim}>
			<div className={s.content1} ref={turboAnim}><IoIosRocket size="30" color="#999"/></div>
			<div className={s.content2} ref={textAnim}>Turbo mode enabled</div>
			<div className={s.content3} ref={useAnim}>
			<NavLink to="/" onClick={()=>{
				setOpenNotific((prevOpenNotific)=>false)
			}}>
			<button >Use!</button>
			</NavLink>
			</div>
		</div>
		)
}

export default Notification