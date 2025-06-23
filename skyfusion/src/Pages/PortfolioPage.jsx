import React from 'react'
import NavPortfolio from '../Components/NavPortfolio'
import PortfolioSection from '../Components/PortfolioSection'
import WholeCircle from '../Components/WholeCircle'
import Portfolio from '../Components/Portfolio'
import Experience from '../Components/Experience'
import PortfolioShowcase from '../Components/PortfolioShowcase'

function PortfolioPage() {
  return (
    <>
      <div>
        <NavPortfolio />
        <WholeCircle />
        <PortfolioSection />
        <Portfolio />
        <PortfolioShowcase />
        {/* <Experience /> */}
      </div>
    </>
  )
}

export default PortfolioPage
