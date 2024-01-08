'use client'
import React, { useEffect } from 'react'
import awsConfig from '../../aws-exports'
import { Amplify } from 'aws-amplify'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTopButton from '@/components/ScrollToTopButton'

Amplify.configure({ ...awsConfig, ssr: true })
const AmplifyProvider = ({ children }) => {
  // const resetWindowScrollPosition = useCallback(() => window.scrollTo(0, 0), [])

  // useEffect(() => {
  //   // window.onbeforeunload = function () {
  //   resetWindowScrollPosition()
  //   // }
  // }, [])
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, [])

  return (
    <>
      <Header />
      {children}
      <ScrollToTopButton />
      <Footer />
    </>
  )
}

export default AmplifyProvider
