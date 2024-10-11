import React from "react"

const PrestationCard = ({ prestation }) => {
  return (
    <a
      className="group flex flex-col justify-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50 rounded-xl p-4 md:p-7"
      href="#">
      <div className="flex justify-center items-center size-12 bg-blue-600 rounded-xl">
        {prestation.icon ?? prestation.icon}
        {/*     <svg  xmlns="http://www.w3.org/2000/svg" width="24"
             height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
             stroke-linecap="round" stroke-linejoin="round">
          <rect width="10" height="14" x="3" y="8" rx="2" />
          <path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" />
          <path d="M8 18h.01" />
        </svg>*/}
      </div>
      <div className="mt-5">
        <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800">Responsive</h3>
        <p className="mt-1 text-gray-600">Responsive, and mobile-first project on the web</p>
        <span
          className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium">
          Learn more
          <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path
            d="m9 18 6-6-6-6" /></svg>
        </span>
      </div>
    </a>
  )
}

export default PrestationCard