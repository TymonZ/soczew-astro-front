import { useState } from "react"

const Header = ({ children }) => {
	return (
		<h1 className='text-6xl font-body font-normal p-5 w-fit hover:bg-black hover:text-white'>
			{children}
		</h1>
	)
}

const Icon = () => {
	return (
		<div className="fixed z-20 top-0 right-0 h-16 w-16 mr-4 mt-6">
			<img src="./logo/logo-black.svg"/>
		</div>
	)
}

const ClickedMenu = () => {
	return (
		<ul className="self-center">
			<li><a href="./about"><Header>{'> ABOUT'}</Header></a></li>
			<li><a href="./store"><Header>{'> STORE'}</Header></a></li>
			<li><a href="./archive"><Header>{'> ARCHIVE'}</Header></a></li>
			<li><a href="./about#contact"><Header>{'> CONTACT'}</Header></a></li>
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
	const navScrollable = {
		// position: 'absolute',
		// zIndex: ''
	}

	return (
		<nav
			className='w-screen h-screen top-0 left-0 z-20 flex'
			style={menuClicked ? navBlur : (isScrollable ? navScrollable : {})}
		>
			<div className='fixed z-20 top-0 left-0'>
				<button onClick={handleMenuClick}>
					<Header>
						MENU
					</Header>
				</button>
			</div>
			{/* {isScrollable ? <Icon /> : null} */}
			{menuClicked ? <ClickedMenu /> : (isScrollable ? null : <NotClickedMenu />)}
		</nav>
	)
}