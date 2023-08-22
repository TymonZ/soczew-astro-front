import { useState } from 'react'
import Overlay from './Overlay'
import MainBg from './three_components/MainBg'

function Hero() {
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
        handleEventListMouseEnter={handleEventListMouseEnter}
        selectedEventID={selectedEventID}
        showEventWidget={showEventWidget}
      />
    </main>
  )
}

export default Hero