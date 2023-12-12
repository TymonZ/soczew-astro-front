import { useState, useRef } from "react"
import { BiLogoInstagram, BiLogoFacebookCircle } from "react-icons/bi";
import { Header } from "./Header";

const ClickedMenu = ({ handleMenuClick }) => {
	const links = [
		{name:'> MAIN', href:'/'},
		{name:'> STORE', href:'/store'},
		{name:'> EVENTS', href:'/events'},
		{name:'> ABOUT', href:'/about'},
	]
	const listItems = links.map((link)=>
		<li key={link.name}>
			<a href={link.href} onClick={handleMenuClick}>
				<Header>{link.name}</Header>
			</a>
		</li>
	)
	return (
		<>
		<ul className="self-center">
			{listItems}
		</ul>
		<ul className='fixed z-20 bottom-0 right-0 flex flex-row mr-7 mb-5 gap-5'>
			<li>
				<a href="https://www.instagram.com/s0czew/">
					<BiLogoInstagram size="64px" />
				</a>
			</li>
			<li>
				<a href="https://www.facebook.com/profile.php?id=100086122046455">
					<BiLogoFacebookCircle size="60px"/>
				</a>
			</li>
		</ul>
		</>
	)
}
	
export function Navigation() {
	const [menuClicked, setMenuClicked] = useState(false)
	const buttonRef = useRef(null)
	const handleMenuClick = () => {
		setMenuClicked(!menuClicked)
		buttonRef.current.focus()
	}

	return (
		<nav
			className={`w-screen h-screen top-0 left-0 z-20 flex ${menuClicked ? 'fixed-blur' : ''}`}
			// style={menuClicked ? navBlur : {}}
		>
			<div className={`fixed z-20 top-0 left-0`}>
				<button onClick={handleMenuClick} ref={buttonRef}>
					<Header>
						MENU
					</Header>
				</button>
			</div>
			{menuClicked ? <ClickedMenu handleMenuClick={handleMenuClick}/> : null}
		</nav>
	)
}