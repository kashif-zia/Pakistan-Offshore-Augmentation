import React from 'react'
import Hero from '@/components/Hero'
import Video from '@/components/Video'
import AboutUs from '@/components/AboutUs'
import Work from '@/components/Work'
import Service from '@/components/Service'
import ClientTestimonials from '@/components/ClientTestimonials'
// import Engagement from '@/components/Engagement'
import Brand from '@/components/Brand'
import HireUs from '@/components/HireUs'
import CaseStudies from '@/components/CaseStudies'

export default function Home() {
  return (
    <section>
      <Hero />
      <Video />
      <AboutUs />
      <Service />
      <Work />
      <ClientTestimonials />
      <CaseStudies />
      {/* <Engagement /> */}
      <Brand />
      <HireUs key="landingPage" Header="Hire us" uniqueId="landingPage" />
    </section>
  )
}
