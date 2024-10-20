import React from 'react'
import Footer from 'src/components/Footer'
import RegisterHeader from 'src/components/RegisterHeader'

interface Props {
  children?: React.ReactNode
}

function LoginLayout({ children }: Props) {
  return (
    <React.Fragment>
      <RegisterHeader />
      {children}
      <Footer />
    </React.Fragment>
  )
}

export default LoginLayout
