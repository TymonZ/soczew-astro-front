import { useState } from 'react'
import { EVENTS } from '../consts'
import Overlay from './Overlay'
import MainBg from './three_components/MainBg'

function Hero() {
  const startingID = EVENTS.length-1 // poster of the latest event
  const [posterTexturePath, setPosterTexturePath] = useState(`./textures/${startingID}.jpg`)
  const [selectedEventID, setSelectedEventID] = useState(startingID)
  const [currentModel, setCurrentModel] = useState('Poster')
	const handleEventListMouseEnter = (id) => {
    if (id == 'seemore') {
      setCurrentModel('Soczewiak')
    }
    else {
      setSelectedEventID(id)
      setPosterTexturePath(`./textures/${id}.jpg`)
      setCurrentModel('Poster')
    }
	}

  const [showEventWidget, setShowEventWidget] = useState(false)
  const handlePosterClick = () => {
    setShowEventWidget(!showEventWidget)
  }

  const handleSoczewiakClick = () => {
    location.assign('/events')
  }

  return (
    <section className='bg-white'>
      <MainBg 
        posterTexturePath={posterTexturePath} 
        handlePosterClick={handlePosterClick}
        handleSoczewiakClick={handleSoczewiakClick}
        currentModel={currentModel}
      />
      <Overlay 
        handleEventListMouseEnter={handleEventListMouseEnter}
        selectedEventID={selectedEventID}
        showEventWidget={showEventWidget}
      />
    </section>
  )
}

export default Hero