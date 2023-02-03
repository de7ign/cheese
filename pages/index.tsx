import styles from '@/styles/index.module.css'

import { Concert_One, JetBrains_Mono } from '@next/font/google'

const concert = Concert_One({ weight: '400', subsets: ['latin'] })
const jbMono = JetBrains_Mono({ weight: '400', subsets: ['latin'] })

export default function index() {
  return (
    <div className="bg-primary">
      <div className="max-w-sm mx-auto flex flex-col items-center justify-center min-h-screen gap-10 px-4">
        <div title="Cheese" className={[styles.poof, concert.className, "text-8xl relative z-0 text-accent before:content-[attr(title)] before:-z-10 before:stroke-current before:stroke-2 before:absolute"].join(' ')}>Cheese</div>
        <div className={[jbMono.className, styles.cardShadow, "flex flex-col max-w-sm rounded-xl w-full py-12 px-8 gap-8 bg-white"].join(' ')}>
          <input className="outline-none border-b-4 border-accent" type="number" placeholder="size" />
          <input className="outline-none border-b-4 border-accent" type="number" placeholder="price" />
        </div>
        <div className={[jbMono.className, styles.cardShadow, "flex flex-col max-w-sm rounded-xl w-full py-12 px-8 gap-8 bg-white"].join(' ')}>
          <input className="outline-none border-b-4 border-accent" type="number" placeholder="size" />
          <input className="outline-none border-b-4 border-accent" type="number" placeholder="price" />
        </div>
        <button className={[jbMono.className, styles.buttonShadow, "max-w-sm rounded-xl w-full bg-accent p-2 text-white text-4xl"].join(' ')}>Check</button>
      </div>
    </div>
  )
}