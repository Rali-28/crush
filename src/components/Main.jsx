import React from 'react'
import { useState } from 'react'
import Question from './Question'
import Response from './Response'

const Main = () => {
    const [showResponse, setShowResponse] = useState(false)

  return (
    <div>
        {showResponse ? <Response /> : <Question onYes={() => setShowResponse(true)} />}
    </div>
  )
}

export default Main