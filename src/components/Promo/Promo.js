import s from './Promo.module.css'
import {useState,useEffect,useRef} from 'react'
import { GrLinkPrevious } from "react-icons/gr";
import {NavLink} from 'react-router-dom'
import { BsCoin } from "react-icons/bs";
import { FaAngleDoubleDown } from "react-icons/fa";

const Promo = () => {

	const boostAnim5 = useRef()

  		useEffect(()=>{
  			let bAnim = true
  			setTimeout(()=>{boostAnim5.current.classList.add(s.boostAnim)},0)

  			return ()=>{
  				if(!bAnim){
  				boostAnim5.current.classList.remove(s.boostAnim)
  			}
  			}
  		},[])

	return (
		<div className={s.megaContainer} ref={boostAnim5}>
			<div className={s.content1}>
			<span><NavLink to="/"><GrLinkPrevious/></NavLink></span>
			<span><h3></h3></span>
			<span className={s.miniBlock3}><h3></h3></span>
			</div>
			<div className={s.content2}>
				Enter the promo code to receive your prize
			</div>
			<div className={s.content3}>
				<FaAngleDoubleDown />
			</div>
			<div className={s.content4}>
				<input type="text" />
			</div>
			<div className={s.content5}>
				<button>OK!</button>
			</div>
			<div className={s.content6}>
				
			</div>
			<div className={s.content7}>
				I have created a project for learning React.js with the aim of earning coins through clicks. The concept is to accumulate coins by performing various tasks, and then use these coins to enhance different boosts or upgrades. Users can engage in activities or complete assignments to earn more coins, and in turn, invest those coins strategically to improve their overall experience within the project.
			</div>


			
		</div>
		)
}

export default Promo