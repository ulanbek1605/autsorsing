import CallToAction from '@/components/CallToAction/CallToAction'
import Reviews from '@/components/Reviews/Reviews'
import Team from '@/components/Team/Team'
import React from 'react'

function page() {
	return (
		<div>
			<Team />
			<Reviews />
			<CallToAction text='ХОТИТЕ УЗНАТЬ, ГДЕ МЫ НАХОДИМСЯ?' href='/contacts' />
		</div>
	)
}

export default page