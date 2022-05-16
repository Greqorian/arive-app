import React from 'react'
import '../../styles/Container.scss'

type ContainerType = {
  children: React.ReactNode
}

export const Container = ({ children }: ContainerType) => {
  return <div className="container-page">{children}</div>
}

export default Container
