"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { mobileVariants } from './animation/navbarAnimation'
import Link from 'next/link'

const MobileNavLink = ({title, href}: any) => {
  return (
    <motion.div
     variants={mobileVariants}
    //  initial="initial"
    //  animate="open"
     className="text-3xl uppercase text-black cursor-pointer overflow-hidden">
        <Link href={href}>{title}</Link>
    </motion.div>
  )
}

export default MobileNavLink