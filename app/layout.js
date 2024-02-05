"use client"
import { useEffect } from 'react'
import './globals.css'
import Header from '@/Components/Header'


import Hero from '@/Components/Hero'








export default function RootLayout({ children }) {
  

  useEffect(() => {
   
 
    return () => {
      if(typeof window!=="undefined"){
       require('bootstrap/dist/js/bootstrap.min.js')
      }
    }
  }, [])

  return (
    <html lang="en">
      <body >
       <Header/>
       
       
       
       

        {children}
        
        </body>
    </html>
  )
}
