"use client"

import { motion, useAnimation, useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'

type TProps = {
    text: string
    className: string,
    el?: keyof JSX.IntrinsicElements,
    once?: boolean,
    repeatDelay?: number
}

const defaultAnimations = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1
        }
    }
}

const AnimatedText = ({ className, el: Wrapper = 'p', once, repeatDelay, text }: TProps) => {
    const controls = useAnimation()
    const textArray = Array.isArray(text) ? text : [text]
    const ref = useRef(null)
    const IsInView = useInView(ref, { amount: 0.5, once })

    useEffect(() => {
        let timeout: NodeJS.Timeout
        const show = () => {
            controls.start("visible")
            if (repeatDelay) {
                timeout = setTimeout(async () => {
                    await controls.start("hidden")
                    controls.start("visible")
                }, repeatDelay)
            }
        }
        if (IsInView) {
            show()
        } else {
            controls.start("hidden")
        }

        return () => clearTimeout(timeout)
    }, [IsInView, controls, repeatDelay])

    return (
        <div className='max-w-4xl mx-auto'>
            <Wrapper className={className}><span className="sr-only"></span>
                <motion.span
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={{
                        visible: { transition: { staggerChildren: 0.1 } },
                        hidden: {}
                    }}
                    aria-hidden className="">
                    {textArray.map((line, index) => (
                        <span className="block" key={index}>
                            {line.split(" ").map((word: any, index: number) => (
                                <span key={index} className='inline-block'>
                                    {word.split("").map((char: any, index: number) => (
                                        <motion.span
                                            className='inline-block'
                                            variants={defaultAnimations} key={index}>
                                            {char}
                                        </motion.span>
                                    ))}
                                    <span className="inline-block">&nbsp;</span>
                                </span>

                            ))}
                        </span>
                    ))}

                </motion.span>
            </Wrapper>
        </div>
    )
}

export default AnimatedText