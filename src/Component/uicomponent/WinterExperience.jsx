"use client"

import { useMemo, useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Snowflake } from "lucide-react"
import image1 from "../../../public/latestImagesBasalt/must.jpg"
import image2 from "../../../public/latestImagesBasalt/beutifull-kuwo2.jpg"
import image3 from "../../../public/latestImagesBasalt/zeroedgepool6.jpg"
import image4 from "../../../public/latestImagesBasalt/resturantnew1.jpg"
import image5 from "../../../public/NewDriveImage/Basalt infinity pool.jpg"
import image6 from "../../../public/NewDriveImage/mainfront.jpg"





const IMAGES = [
  image1,
  image2,
image3,
  image4,
 image5,
image6,
]

// Fallback helper for missing images -> graceful placeholder
function withFallback(src, query = "cozy+winter+bonfire") {
  return src || `/placeholder.svg?height=280&width=220&query=${query}`
}

// Infinite vertical auto-scroll track (duplicated list to loop seamlessly)
function AnimatedCarousel() {
  const duplicated = useMemo(() => [...IMAGES, ...IMAGES], [])

  return (
    <div className="relative">
      {/* Soft glow/blur background */}
      {/* <div className="absolute -inset-4 rounded-3xl bg-white/30 blur-xl" />
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/60 to-amber-50/40" /> */}

      <div className="relative max-h-[350px] overflow-hidden   rounded-3xl  backdrop-blur-md  ">
        <motion.div
          role="list"
          aria-label="Winter moments"
          className="flex flex-col gap-5 py-5"
          // Animate translateY from 0 to -50% of its height, then loop
          animate={{ y: ["0%", "-50%"] }}
          transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          {duplicated.map((src, i) => (
            <motion.div
              role="listitem"
              key={`${src}-${i}`}
              className="mx-auto w-[85%]"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <img
                src={withFallback(src, "winter+cozy+club") || "/placeholder.svg"}
                alt={`Winter moment ${i + 1}`}
                className="h-[250px] w-full object-cover rounded-2xl shadow-lg"
                onError={(e) => {
                  e.currentTarget.src = withFallback(null, "winter+cozy+club")
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

function WinterContent() {
  const containerRef = useRef(null)
  const inView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, x: 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative"
    >
      <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
        <Snowflake className="h-4 w-4" />
        Winter Experience
      </div>

      <h2 className="mt-4 text-4xl font-[600] leading-tight text-slate-900">
        <span className="">
          Feel the Breeze at <span className="  basalt bg-clip-text text-transparent">Basalt Paradise</span>
        </span>
      </h2>

      <p className="mt-3 text-[15px] font-[500] text-slate-700">
        Your perfect winter getaway — bonfire nights, foggy mornings, and cozy memories.
      </p>

      <p className="mt-4 text-slate-600 text-[14px] leading-[20px]">
        Infinity Sports Club welcomes you to our winter season — where the chill of the breeze meets the warmth of
        bonfires. Enjoy friendly matches, cozy evenings, and unforgettable memories with your squad.
      </p>

      <div className="mt-8">
        <a
          href="/private-vila-details"
          className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-800 px-3 py-2 font-[600] text-white shadow-lg hover:text-[#ffffffaa] shadow-indigo-500/20 transition hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-indigo-200"
        >
          Join Winter Events
        </a>
      </div>
    </motion.div>
  )
}

export default function WinterExperience() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] })
  // Parallax transforms for background flakes
  const flakeUp = useTransform(scrollYProgress, [0, 1], [0, -40])
  const flakeDown = useTransform(scrollYProgress, [0, 1], [0, 40])
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1])

  return (
    <motion.section
      ref={sectionRef}
      id="winter"
      className="relative  font-Poppins pb-[20px]  md:max-h-[400px] overflow-hidden"
      style={{ opacity: sectionOpacity }}
      aria-labelledby="winter-experience-title"
    >
      {/* Decorative parallax snowflakes (subtle) */}
      {/* <motion.div className="pointer-events-none absolute -top-6 left-8 text-blue-300/60" style={{ y: flakeUp }}>
        <Snowflake className="h-10 w-10 animate-spin" style={{ animationDuration: "12s" }} />
      </motion.div>
      <motion.div className="pointer-events-none absolute top-10 right-10 text-rose-300/60" style={{ y: flakeDown }}>
        <Snowflake className="h-12 w-12 animate-spin" style={{ animationDuration: "16s" }} />
      </motion.div>
      <motion.div className="pointer-events-none absolute bottom-8 left-1/3 text-amber-300/60" style={{ y: flakeUp }}>
        <Snowflake className="h-8 w-8 animate-spin" style={{ animationDuration: "20s" }} />
      </motion.div> */}

      <div className="relative mx-auto grid max-w-6xl grid-cols-1  gap-10 px-6 md:grid-cols-2 md:gap-12">
        {/* Left: Animated Carousel */}
        <AnimatedCarousel />

        {/* Right: Content */}
        <div>
          <h3 id="winter-experience-title" className="sr-only">
            Winter Experience
          </h3>
          <WinterContent />
        </div>
      </div>
    </motion.section>
  )
}
