import { useState, useEffect } from "react"

export default function CalculativeSection() {
  const statsData = [
    { number: "12.19", description: "ACRES OF LANDSCAPE" },
    { number: "26", description: "ZEN ROOMS" },
    { number: "11", description: "VILLAS - PRIVATE POOL" },
    { number: "2", description: "BANQUET HALL" },
    { number: "1", description: "INFINITY POOL" },
    { number: "1", description: "DISCOTHEQUE" },
  ]




  const [animatedNumbers, setAnimatedNumbers] = useState(statsData.map(() => "0"))

  useEffect(() => {
    const animationDuration = 2000 // 2 seconds
    const frameDuration = 1000 / 60 // 60fps
    const totalFrames = Math.round(animationDuration / frameDuration)

    let frame = 0
    const timerId = setInterval(() => {
      frame++

      const progress = frame / totalFrames
      if (progress >= 1) {
        clearInterval(timerId)
        setAnimatedNumbers(statsData.map((item) => item.number))
        return
      }

      const newNumbers = statsData.map((item) => {
        const target = Number.parseFloat(item.number)
        const current = progress * target

        // Format the number to match the original format
        if (item.number.includes(".")) {
          const decimalPlaces = item.number.split(".")[1].length
          return current.toFixed(decimalPlaces)
        }
        return Math.floor(current).toString()
      })

      setAnimatedNumbers(newNumbers)
    }, frameDuration)

    return () => clearInterval(timerId)
  }, [])

  return (
    <>
    <div className="w-[81%] py-[20px] bg-white mx-auto font-Poppins overflow-x-auto">
      <div className="w-[100%] mx-auto ">
        <div className="flex flex-row justify-between min-w-max md:min-w-0">
          {statsData.map((stat, index) => (
            <div key={index} className="relative flex flex-col items-center text-center px-6 md:px-3">
              {/* Divider line (except for the first item) */}
              {index > 0 && (
                <div
                  className="absolute left-[-18px] top-0 h-full w-[1px] bg-gray-200 rotate-12"
                  style={{ transform: "rotate(12deg)", height: "90%", top: "10%" }}
                ></div>
              )}

              <h2 className="text-4xl md:text-[20px]  font-[500] mb-2">{animatedNumbers[index]}</h2>
              <p className="text-xs md:text-sm lg:text-[16px] text-gray-600 font-[400]">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
