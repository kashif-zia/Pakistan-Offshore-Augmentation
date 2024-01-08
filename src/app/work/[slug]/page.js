'use client'
import Hero from '@/components/WorkDetail/Hero'
import Technology from '@/components/WorkDetail/Technology'
import TheWebsite from '@/components/WorkDetail/TheWebsite'
import Design from '@/components/WorkDetail/Design'
import Team from '@/components/WorkDetail/Team'
import Process from '@/components/WorkDetail/Process'
import Feedback from '@/components/WorkDetail/Feedback'
// import GetConnected from '@/components/WorkDetail/GetConnected'
import { work } from '../../../../dummyData'

export default function WorkDetail({ params }) {
  const element = work[params.slug - 1]

  return (
    <section>
      <Hero element={element} />
      <TheWebsite element={element} />
      <Technology element={element} />
      <Design element={element} />
      <Team element={element} />
      <Process element={element} />
      <Feedback element={element} />
      {/* <GetConnected element={element} /> */}
    </section>
  )
}
