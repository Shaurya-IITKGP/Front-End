import React from 'react'
import footer_logo from "../../assets/logo-shaurya.png"
import s from "./Footer.module.css"

const Footer = () => {
  return (
	<footer className={s.footer}>
	<div className={s.footcontainer}>
		<div className={s.footrow}>
			<div className={s.footer_col}>
				<div className={s.foot_shaurya_logo}><img className={s.foot_shaurya_logo_img} src={footer_logo} alt="" /></div>
				
			</div>
			<div className={s.footer_col}>
				<h4>Contact Us</h4>
				<ul className="">
		 <div className="flex-col">
		   <li>
		 
		 <div>
		 <h1 className="text-white">Shreya Mishra</h1>
		   <a className="text-white" href="https://mail.google.com/mail/u/lee@example.org/#compose">mshreya1210@gmail.com</a></div>
		 <div>
		 <h1 className="text-white">Soujanya Nayak</h1>
		   <a className="text-white" href="https://mail.google.com/mail/u/lee@example.org/#compose">soujanya.nayak@shaurya-iitkgp.org</a></div>
		 <div>
		 <h1 className="text-white">SSVKSS Jyothiraditya</h1>
		   <a className="text-white" href="https://mail.google.com/mail/u/lee@example.org/#compose">jyothiraditya29@gmail.com</a></div>
		 </li>



		 </div>
		 
					
				</ul>
			</div>
			
			<div class={s.footer_col}>
				<h4>Follow us</h4>
				<div class={s.social_links}>
					<a href="https://www.facebook.com/shauryaiitkgp/"><i className="fab fa-facebook-f"></i></a>
				
					<a href="https://www.instagram.com/shaurya.iitkgp/"><i className="fab fa-instagram"></i></a>
					<a href="https://www.linkedin.com/company/shaurya-iit-kharagpur/"><i className="fab fa-linkedin-in"></i></a>
				</div>
			</div>
		</div>
	</div>
</footer>
  )
}

export default Footer

