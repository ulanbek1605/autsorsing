import CallToAction from '@/components/CallToAction/CallToAction'
// import Reviews from '@/components/Reviews/Reviews'
import Services from '@/components/Services/Services'
import Team from '@/components/Team/Team'
import React from 'react'

function page() {
	return (
		<div>
			<Team />
			<Services />
			{/* <Reviews /> */}
			<CallToAction text='ХОТИТЕ УЗНАТЬ, ГДЕ МЫ НАХОДИМСЯ?' href='/contacts' />
		</div>
	)
}

export default page