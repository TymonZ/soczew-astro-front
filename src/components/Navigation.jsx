import { useState } from "react"

const Header = ({ children }) => {
	return (
		<h1 className='text-6xl font-body font-normal p-5 w-fit my-link-style'>
			{children}
		</h1>
	)
}

const ClickedMenu = ({ handleMenuClick }) => {
	const links = [
		{name:'> ABOUT', href:'/about'},
		{name:'> STORE', href:'/store'},
		{name:'> EVENTS', href:'/events'},
		{name:'> CONTACT', href:'/about#contact'},
	]
	const listItems = links.map((link)=>
		<li key={link.name}>
			<a href={link.href} onClick={handleMenuClick}>
				<Header>{link.name}</Header>
			</a>
		</li>
	)
	return (
		<ul className="self-center">
			{listItems}
		</ul>	
	)
}

const NotClickedMenu = () => {
	return (
		<>
		<div className='fixed z-20 bottom-0 left-0 origin-top-left -rotate-90 translate-y-full'>
			<a href="./about">
				<Header>
					©SOCZEW
				</Header>
			</a>
		</div>
		<div className='fixed z-20 top-0 right-0 origin-top-left rotate-90 translate-x-full'>
			<a href="./store">
				<Header>
					STORE
				</Header>
			</a>
		</div>
		</>
	)
}
	
export function Navigation({ isScrollable }) {
	const [menuClicked, setMenuClicked] = useState(false)
	const handleMenuClick = () => {
		setMenuClicked(!menuClicked)
	}
	const navBlur = {
		backdropFilter: 'blur(20px)',
		position: 'fixed',
	}

	return (
		<nav
			className='w-screen h-screen top-0 left-0 z-20 flex'
			style={menuClicked ? navBlur : {}}
		>
			<div className='fixed z-20 top-0 left-0'>
				<button onClick={handleMenuClick}>
					<Header>
						MENU
					</Header>
				</button>
			</div>
			{menuClicked ? <ClickedMenu handleMenuClick={handleMenuClick}/> : (isScrollable ? null : <NotClickedMenu />)}
		</nav>
	)
}