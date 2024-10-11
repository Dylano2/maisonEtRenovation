import type { SVGProps } from "react"
import React from "react"
import PrestationCard from "@/components/PrestationCard"
import { BrickWall } from "lucide-react"

export function GameIconsSpikedFence(props: SVGProps<SVGSVGElement>) {
  return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}>
    <path fill="currentColor"
          d="m59.04 23.11l-35.3 93.59l25.96-14.9V158c-1.32 18-13.82 32.6-30.39 36.7v19.1c11.64-2 22.12-7.5 30.39-15.3v97.3c-11.62 1.9-22.1 7.3-30.39 15.1v39.4c1.68-17.5 14.08-31.5 30.39-35.4v177.5h18.69V314.9c16.46 4 28.96 18.4 30.55 36.1v141.5h18.66V354.4c3.9-18.9 15.1-39.3 31.2-39.6v177.6h18.7V314.9c17.4 4.4 30.4 20.3 30.6 39.5v138.1h18.6V354.3c.3-19.4 13.5-35.4 31.2-39.5v177.6h18.7V315c17.4 4.4 30.2 20.3 30.4 39.4c.4 45.6.2 92.2.2 138.1h18.7V350.9c1.6-17.8 14.2-32.2 30.8-36.1v177.6h18.7V315c17.4 4.3 30.3 20.1 30.3 39.3c.5 45.5.2 92.3.2 138.2h18.7V349.7c2-17.4 14.6-31.3 31-35v177.7h18.7V315.1c16.4 4.3 28.7 18.9 30 36.7v-40.7c-8.2-7.7-18.5-13.1-30-15.1v-97.6c8.1 7.8 18.5 13.2 30 15.3v-19.1c-17-4.5-29.5-19.9-30-38.6v-54.2l25.9 14.9l-35.3-93.59l-35.3 93.59l26-14.9v53.5c-5 23-22.7 40.1-40.2 40.6c-22.1 0-40-18-40-40.5c-.1-17.8 0-35.8 0-53.6l26 14.9L356 23.11l-35.3 93.59l26-14.9v55.6c-1 21.6-18.5 38.5-39.9 38.5c-22.1 0-40-18-40.2-40.6v-53.5l26 14.9l-35.3-93.59L222 116.7l25.9-14.9v53.6c-.2 22.5-18.1 40.5-40.1 40.5c-22.1 0-40-18-40.2-40.6c-.2-17.7-.1-35.7-.1-53.5l26 14.9l-35.3-93.59l-35.3 93.59l25.9-14.9v55.4c-1.2 21.7-18.7 38.7-40.1 38.7c-22.09 0-39.99-18-40.19-40.6c-.25-17.6-.13-35.7-.13-53.5l25.96 14.9zm9.35 175.19c8.28 7.9 18.82 13.4 30.55 15.5v97.3c-8.31-7.8-18.85-13.3-30.55-15.2zm99.11 0c8.3 7.9 18.8 13.5 30.6 15.5v97.5c-8.3-7.9-18.9-13.5-30.6-15.4zm278.1 0v97.4c-11.9 1.8-22.5 7.3-31 15.1v-97c11.9-1.9 22.6-7.4 31-15.5m-179 .1c8.3 7.9 18.9 13.4 30.6 15.4v97.7c-8.3-8-18.8-13.6-30.6-15.6zm-18.7 0v97.4c-11.9 1.9-22.7 7.4-31.2 15.5v-97.4c12.2-3.2 23.4-8.3 31.2-15.5m-99.1 0v97.4c-12 1.9-22.7 7.5-31.2 15.7v-97.6c12.2-3.1 23.4-8.2 31.2-15.5m216.6.1c8.3 7.9 18.8 13.4 30.5 15.3v97.5c-8.2-7.9-18.8-13.4-30.5-15.4zm-18.7.1v97.2c-11.8 1.9-22.5 7.4-30.8 15.3v-97.2c12-3.1 23.1-8.1 30.8-15.3"></path>
  </svg>)
}


export function TablerIroning1(props: SVGProps<SVGSVGElement>) {
  return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 6h7.459a3 3 0 0 1 2.959 2.507l.577 3.464l.81 4.865A1 1 0 0 1 19.82 18H3a7 7 0 0 1 7-7h9.8M12 15h.01"></path>
  </svg>)
}


const PrestationsPresentation = () => {
  const prestations =
    [
      {
        name: "Peinture",
        icon: <BrickWall />
      },
      {
        name: "Ferronerie",
        icon: <TablerIroning1 />
      },
      {
        name: "Barrière",
        icon: <GameIconsSpikedFence />
      },
      {
        name: "Rénovation volets",
        type: [{ name: "bois" }, { name: "fer" }]
      },
      {
        name: "Maçonnerie",
        type: [{ name: "murs" }, { name: "murets" }, { name: "panneaux rigides" }]
      }]
  return (
    <div className="bg-green-300 max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-2">
        {prestations.map((prestation) => <PrestationCard key={prestation.name} prestation={prestation} />)}
        <a
          className="group flex flex-col justify-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50 rounded-xl p-4 md:p-7"
          href="#">
          <div className="flex justify-center items-center size-12 bg-blue-600 rounded-xl">
            <svg className="shrink-0 size-6 text-white" xmlns="http://www.w3.org/2000/svg" width="24"
                 height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                 stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 7h-9" />
              <path d="M14 17H5" />
              <circle cx="17" cy="17" r="3" />
              <circle cx="7" cy="7" r="3" />
            </svg>
          </div>
          <div className="mt-5">
            <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800">Customizable</h3>
            <p className="mt-1 text-gray-600">Components are easily customized and extendable</p>
            <span
              className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium">
          Learn more
          <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path
            d="m9 18 6-6-6-6" /></svg>
        </span>
          </div>
        </a>

        <a
          className="group flex flex-col justify-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50 rounded-xl p-4 md:p-7"
          href="#">
          <div className="flex justify-center items-center size-12 bg-blue-600 rounded-xl">
            <svg className="shrink-0 size-6 text-white" xmlns="http://www.w3.org/2000/svg" width="24"
                 height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                 stroke-linecap="round" stroke-linejoin="round">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
          </div>
          <div className="mt-5">
            <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800">Documentation</h3>
            <p className="mt-1 text-gray-600">Every component and plugin is well documented</p>
            <span
              className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium">
          Learn more
          <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path
            d="m9 18 6-6-6-6" /></svg>
        </span>
          </div>
        </a>

        <a
          className="group flex flex-col justify-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50 rounded-xl p-4 md:p-7"
          href="#">
          <div className="flex justify-center items-center size-12 bg-blue-600 rounded-xl">
            <svg className="shrink-0 size-6 text-white" xmlns="http://www.w3.org/2000/svg" width="24"
                 height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                 stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
              <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
            </svg>
          </div>
          <div className="mt-5">
            <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800">24/7
              Support</h3>
            <p className="mt-1 text-gray-600">Contact us 24 hours a day, 7 days a week</p>
            <span
              className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium">
          Learn more
          <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path
            d="m9 18 6-6-6-6" /></svg>
        </span>
          </div>
        </a>
      </div>
    </div>

  )
}

export default PrestationsPresentation