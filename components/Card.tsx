import styles from '@/styles/Card.module.css'

import { JetBrains_Mono } from '@next/font/google'
import { useAnimationControls, motion } from 'framer-motion'
import { ChangeEvent } from 'react'

const jbMono = JetBrains_Mono({ weight: '400', subsets: ['latin'] })

export interface CardValue {
    size: string,
    price: string
}

interface props {
  value: CardValue,
  onUpdate: (evt: CardValue) => void
}

export default function Card({value, onUpdate}: props) {

  const animation = useAnimationControls();
  const shim = useAnimationControls();

  const handleSizeChange = (evt: ChangeEvent<HTMLInputElement>): void => {
    onUpdate({
      ...value,
      size: evt.target.value
    })
  }

  const handlePriceChange = (evt: ChangeEvent<HTMLInputElement>): void => {
    onUpdate({
      ...value,
      price: evt.target.value
    })
  }

   async function foo() {
    await animation.start({
      scale: 1.1
    })
    await shim.start({
      visibility: 'visible',
      left: ['-50%', '110%'],
      transition: {
        duration: .45,
        repeat: 1,
        repeatType: "mirror",
      },
    })
    await animation.start({
      scale: 1
    })
  }

  return (
    <>
      <motion.div
        className={[styles.cardShadow, "flex flex-col max-w-sm rounded-xl w-full relative overflow-hidden py-20 px-8 gap-8 bg-white"].join(' ')} animate={animation}>
        <motion.div className={styles.shim} animate={shim}></motion.div>
        <input className="outline-none border-b-4 border-accent" type="number" placeholder="size" value={value.size} onChange={handleSizeChange}/>
        <input className="outline-none border-b-4 border-accent" type="number" placeholder="price" value={value.price} onChange={handlePriceChange}/>
      </motion.div>
    </>
  )
}