import React from 'react'
import Collapse from './collapse'
import '../style/a-propos.css'
import aboutData from '../data/a-propos.json'

function AboutDesc() {
  return (
    <div className='collapse-wrapper'>
      {aboutData.map((rule, id) => (
        <Collapse
          key={id}
          title={rule.title}
          content={rule.content}
        />
      ))}
    </div>
  )
}

export default AboutDesc
