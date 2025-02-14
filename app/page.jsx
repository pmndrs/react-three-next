'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './page.module.css'

export default function Page() {
  const [answer, setAnswer] = useState(null)

  useEffect(() => {
    const playSound = async () => {
      try {
        const audio = new Audio('https://www.myinstants.com/media/sounds/minecraft-oof.mp3')
        audio.volume = 0.7
        await audio.play()
      } catch (error) {
        console.log("Audio playback failed:", error)
      }
    }
    
    playSound()
  }, [])

  const handleYesClick = async () => {
    try {
      const audio = new Audio('https://www.myinstants.com/media/sounds/anime-wow-sound-effect.mp3')
      audio.volume = 0.7
      await audio.play()
    } catch (error) {
      console.log("Audio playback failed:", error)
    }
    setAnswer(true)
  }

  const handleNoClick = async () => {
    try {
      const audio = new Audio('https://www.myinstants.com/media/sounds/emotional-damage-meme.mp3')
      audio.volume = 0.7
      await audio.play()
    } catch (error) {
      console.log("Audio playback failed:", error)
    }
    setAnswer(false)
  }

  return (
    <div className='min-h-screen bg-pink-50'>
      {answer === null ? (
        <div className='flex min-h-screen flex-col items-center justify-center'>
          <div className='mb-12 text-center'>
            <h1 className='mb-8 text-center text-5xl font-bold text-pink-600'>will you be my valentine?</h1>
            
            <div className='flex justify-center gap-8'>
              <button
                onClick={handleYesClick}
                className='rounded-lg bg-pink-500 px-8 py-3 text-xl font-bold text-white transition-colors hover:bg-pink-600'
              >
                yes! uwu
              </button>
              <button
                onClick={handleNoClick}
                className='rounded-lg bg-gray-500 px-8 py-3 text-xl font-bold text-white transition-colors hover:bg-gray-600'
              >
                naur
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className='flex min-h-screen flex-col items-center justify-center gap-8'>
          <h1 className='text-4xl font-bold text-pink-600'>
            {answer ? "yay #jesh moots ship sail " : "was crack ship anyways (click go back)"}
          </h1>
          {answer ? (
            <div className={`relative size-96 ${styles.danceContainer}`}>
              <Image 
                src="/img/scores/chan.png"
                alt="Happy Chan"
                fill
                sizes="(max-width: 768px) 100vw, 384px"
                className={`object-contain ${styles.dance}`}
                priority
              />
            </div>
          ) : (
            <div className='relative size-96'>
              <Image 
                src="/img/scores/lottie.png"
                alt="Sad Lottie"
                fill
                sizes="(max-width: 768px) 100vw, 384px"
                className={`object-contain ${styles.sad}`}
                priority
              />
            </div>
          )}
          <button
            onClick={() => setAnswer(null)}
            className='rounded-lg bg-pink-500 px-6 py-2 text-lg font-bold text-white transition-colors hover:bg-pink-600'
          >
            Go Back
          </button>
        </div>
      )}
    </div>
  )
}
