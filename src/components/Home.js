import React from 'react'
import Section from './Section'

function Home() {
  return (
    <div>
      <Section 
        title="Model 3"
        description="Order Online for "
        backgroundImg="model-3.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
        underlineText
      />
      <Section 
        title="Model Y"
        description="Order Online for "
        backgroundImg="model-y.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
        underlineText
      />
      <Section 
        title="Model S"
        description="Order Online for"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
        underlineText
      />
      <Section 
        title="Model X"
        description="Order Online for "
        backgroundImg="model-x.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
        underlineText
      />  
      <Section 
        title="Lowest Cost Solar Panels in America"
        description="Money-back gurantee"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn more"
      /> 
      <Section 
        title="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn more"
      />  
      <Section 
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftBtnText="Shop now"
      />     
    </div>
  )
}

export default Home