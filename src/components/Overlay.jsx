import { EVENTS } from "../consts"
import slugify from "../scripts/slugify"
import { Header } from "./Header"

function EventList({ events, handleEventMouseEnter }) {
	const listItems = events.map((event)=>
		<li 
			key={event.id} 
			className={`text-right font-display ${(event.id >= events.length-4) ? '' : 'hidden'}`}
		>
			<a
				href={`/events/${slugify(event.name)}`}
				onMouseEnter={()=>handleEventMouseEnter(event.id)}
			>
				<span className="hidden sm:inline px-2 my-link-style">{event.name} | {event.place} | {event.date}</span>
				<span className="sm:hidden px-2 my-link-style">{event.name} | {event.date}</span>
			</a>
		</li>
	)

	return (
		<div className="p-5 flex flex-col gap-1 text-xs sm:text-sm" style={{maxWidth: '85vw'}}>
			<h2 className="text-right font-display font-bold px-2">
				=== PAST EVENTS ===
			</h2>
			<menu className="flex flex-col-reverse justify-end gap-1 sm:gap-0">
				{listItems}
			</menu>
			<div className="text-right font-display font-bold">
				<a href="/events" className="my-link-style px-2" onMouseEnter={()=>handleEventMouseEnter('default')}>
					{'> see more'}
				</a>
			</div>
		</div>
	)
}

function EventWidget({ events, selectedEventID }) {
	const selectedEvent = events.filter(e => e.id == selectedEventID)[0]
	const eventURL = `/events/${slugify(selectedEvent.name)}`
	const linkText = '> read more'

	const style = {
		top: '50vh',
		left: '50vw',
	}
	
	return (
		<div className="absolute z-20 p-3 bg-black text-white flex flex-col" style={style}>
			<h2 className="font-body">
				{selectedEvent.name}
			</h2>
			<div className="font-display font-thin text-sm text-left py-2 flex flex-row gap-2">
				<ul>
					<li>date:</li>
					<li>type:</li>
					<li>place:</li>
					<li>tax:</li>
				</ul>
				<ul>
					<li>{selectedEvent.date}</li>
					<li>{selectedEvent.type}</li>
					<li>{selectedEvent.place}</li>
					<li>{selectedEvent.tax}</li>
				</ul>
			</div>
			
			<a href={eventURL} className="font-display text-sm hover:font-bold">
				{linkText}
			</a>
		</div>
	)
}

function Overlay({ handleEventListMouseEnter, selectedEventID, showEventWidget }) {
	const events = EVENTS
	return (
		<>
		<div className='absolute z-10 bottom-0 left-0 origin-top-left -rotate-90 translate-y-full'>
			<a href="/about">
				<Header>
					©SOCZEW
				</Header>
			</a>
		</div>
		<div className='absolute z-10 top-0 right-0 origin-top-left rotate-90 translate-x-full'>
			<a href="/store">
				<Header>
					STORE
				</Header>
			</a>
		</div>
		
		{ showEventWidget ? 
			<EventWidget events={events} selectedEventID={selectedEventID} /> 
			: null
		}

		<div className="absolute bottom-0 right-0 z-10" >
			<EventList events={events} handleEventMouseEnter={handleEventListMouseEnter}/>
		</div>
		</>
	)
}

export default Overlay