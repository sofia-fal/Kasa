import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import logementdata from '../data/logements.json'
import Error from './error'

function Logement() {
    const { id } = useParams()
    const [logement, setLogement] = useState(null)
    const navigate = useNavigate()


    useEffect(() => {
        const clickedCard = logementdata.find(logement => logement.id === id)
        if (!clickedCard) {
            navigate('*')
        } else {
            setLogement(clickedCard)
        }
    }, [id, navigate]
)

if (!logement) {
    return <Error />
}

  return (
    <div></div>
  )
}

export default Logement