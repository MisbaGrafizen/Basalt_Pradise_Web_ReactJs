import React from 'react'

export default function NoticeCo() {
  return (
    <>


      <div className="  w-[81%] font-Poppins mx-auto p-4">
        <div className="bg-[#f1f7f9] rounded-[13px] p-6">
          <h2 className="text-gray-700 font-medium  text-[20px] mb-4">Note:</h2>
          <ul className="space-y-1 text-gray-600 text-[15px]">
            <li className="flex gap-2">
              <span className="text-gray-400">•</span>
              Check-in time: 12:00 Noon & Check-Out time: 10:00 AM
            </li>
            <li className="flex gap-2">
              <span className="text-gray-400">•</span>
              Extra Adult Charges – Per Person Per Day | Extra Adult Charges (CP) – Per Person Per Day | Extra Adult
              Charges (AP) – Per Person Per Day
            </li>
            <li className="flex gap-2">
              <span className="text-gray-400">•</span>
              Extra Child Charges (6 to 12 Yrs) – Per Child Per Day | Extra Child Charges (CP) – Per Child Per Day | Extra
              Child Charges (AP) – Per Child Per Day
            </li>
            <li className="flex gap-2">
              <span className="text-gray-400">•</span>
              GST applicable as per government norms.
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
