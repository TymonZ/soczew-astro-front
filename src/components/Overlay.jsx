import { Navigation } from "./Navigation"

function EventList({ events, handleEventMouseEnter }) {
	const listItems = events.map((event)=>
		<li 
			key={event.id} 
			className="text-right font-display text-sm"
		>
			<span 
				className="px-2 hover:bg-black hover:text-white"
				onMouseEnter={()=>handleEventMouseEnter(event.id)}
			>
				{event.name} | {event.place} | {event.date}
			</span>
		</li>
	)

	return (
		<div className="p-5" style={{maxWidth: '85vw'}}>
			<h2 className="text-right font-display font-bold text-sm px-2">
				=== PAST EVENTS ===
			</h2>
			<ol className="flex flex-col-reverse justify-end">
				{listItems}
			</ol>
			<div className="text-right font-display font-bold text-sm">
				<a href="./archive" className="hover:bg-black hover:text-white px-2" onMouseEnter={()=>handleEventMouseEnter('default')}>
					{'> see more'}
				</a>
			</div>
		</div>
	)
}

function EventWidget({ events, selectedEventID }) {
	const selectedEvent = events.filter(e => e.id == selectedEventID)[0]
	
	const style = {
		top: '50vh',
		left: '50vw',
	}
	const linkText = '> read more'
	return (
		<div className="absolute z-10 p-3 bg-black text-white flex flex-col" style={style}>
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
			
			<a href="./store" className="font-display text-sm hover:font-bold">
				{linkText}
			</a>
		</div>
	)
}

function Overlay({ events, handleEventListMouseEnter, selectedEventID, showEventWidget }) {
	return (
		<>
		<Navigation isScrollable={false}/>

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