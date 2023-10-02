"use client"

import { motion, useAnimation, useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'

type TProps = {
    text: React.ReactElement | React.ReactElement[],
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
            duration: 0.1
        }
    }
}

const AnimatedText = ({ text, className, el: Wrapper = 'p', once, repeatDelay }: TProps) => {
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
    }, [IsInView])

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
                            {line.split(" ").map((word, index) => (
                                <span key={index} className='inline-block'>
                                    {word.split("").map((char, index) => (
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