import React from 'react'
import  Card    from "./Card"
import { reviews } from '../data'


const Testimonials = () => {
  return (
    <div>
      <Card reviews={reviews}></Card>
    </div>
  )
}

export default Testimonials;
