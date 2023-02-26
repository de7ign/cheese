import Card, { CardValue } from '@/components/Card'
import styles from '@/styles/Index.module.css'

import { Concert_One, JetBrains_Mono } from '@next/font/google'
import { useState } from 'react'

const concert = Concert_One({ weight: '400', subsets: ['latin'] })
const jbMono = JetBrains_Mono({ weight: '400', subsets: ['latin'] })

export default function Index() {

  const [cardOneDetails, setCardOneDetails] = useState({size: '', price: ''})
  const [cardTwoDetails, setCardTwoDetails] = useState({size: '', price: ''});


  const handleCardOneDetailsChange = (cardDetails: CardValue) => {
    setCardOneDetails(cardDetails);
  }
  
  const handleCardTwoDetailsChange = (cardDetails: CardValue) => {
    setCardTwoDetails(cardDetails)
  }

  return (  
    <div className="bg-primary">
      <div className="max-w-sm mx-auto flex flex-col items-center justify-center min-h-screen gap-10 px-4">
        <div title="Cheese" className={[styles.poof, concert.className, "text-8xl relative z-0 text-accent before:content-[attr(title)] before:-z-10 before:stroke-current before:stroke-2 before:absolute"].join(' ')}>Cheese</div>
        <Card value={cardOneDetails} onUpdate={handleCardOneDetailsChange}></Card>
        <Card value={cardTwoDetails} onUpdate={handleCardTwoDetailsChange}></Card>
        <button className={[jbMono.className, styles.buttonShadow, "outline-none max-w-sm rounded-xl w-full bg-accent p-2 text-white text-4xl"].join(' ')}>Check</button>
      </div>
    </div>
  )
}