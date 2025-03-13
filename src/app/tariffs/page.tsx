import CallToAction from '@/components/CallToAction/CallToAction'
import FAQ from '@/components/FAQ/Faq'
import Tariffs from '@/components/Tariffs/Tariffs'
import TradeTariffs from '@/components/TradeTariffs/TradeTariffs'
import React from 'react'

function page() {
  return (
    <div>
      <Tariffs />
      <TradeTariffs />
      {/* <SpecialOffer /> */}
      <FAQ />
      <CallToAction text = 'ХОТИТЕ ВЗГЛЯНУТЬ НА НАШУ КОМАНДУ?' href='/team' />
    </div>
  )
}

export default page