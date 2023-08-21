import { useState } from 'react'
import Overlay from './Overlay'
import MainBg from './three_components/MainBg'

function Hero() {
  const events = [
		{
			id: 0,
			name: 'CLAY:KLEJ',
			date: '22.10.22',
			place: 'Ziemia',
      type: 'club event',
      tax: '20/30pln',
		},
		{
			id: 1,
			name: 'One Night',
			date: '03.12.22',
			place: 'Fyrtel',
      type: 'club event',
      tax: '20/30pln',
		},
		{
			id: 2,
			name: 'Bo To Noise',
			date: '13.12.22',
			place: 'Teatr BOTO',
      type: 'workshop',
      tax: 'free/40pln',
		},
		{
			id: 3,
			name: 'Lecznica Serc',
			date: '26.05.23',
			place: 'Goyki 3',
      type: 'tatoo convention',
      tax: 'free',
		},
		{
			id: 4,
			name: 'Matki Polki Przeciwko Muzyce Techno',
			date: '26.05.23',
			place: 'Czudner SPOT',
      type: 'club event',
      tax: '30/40pln',
		},
		
	]

  const startingID = 4
  const [posterTexturePath, setPosterTexturePath] = useState(`./textures/${startingID}.jpg`)
  const [selectedEventID, setSelectedEventID] = useState(startingID)
	const handleEventListMouseEnter = (id) => {
    if (id != 'default') {
      setSelectedEventID(id)
    }
    setPosterTexturePath(`./textures/${id}.jpg`)
	}

  const [showEventWidget, setShowEventWidget] = useState(false)
  const handlePosterClick = () => {
    setShowEventWidget(!showEventWidget)
  }

  return (
    <main>
      <MainBg 
        posterTexturePath={posterTexturePath} 
        handlePosterClick={handlePosterClick}
      />
      <Overlay 
        events={events} 
        handleEventListMouseEnter={handleEventListMouseEnter}
        selectedEventID={selectedEventID}
        showEventWidget={showEventWidget}
      />
    </main>
  )
}

export default Hero