import React from "react"
import { Separator } from "@/components/ui/separator"

const PrestationCard = ({ prestation }) => {
  return (
    <a
      className="group mx-auto flex flex-col justify-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50 rounded-xl p-4 md:p-7"
      href="#">
      <div className="flex justify-center items-center size-24 bg-secondary p-4 rounded-full">
        {prestation.icon ?? prestation.icon}
      </div>
      <div className="mt-5 mx-auto ">
        <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 ">{prestation.name}</h3>
      </div>
      <Separator />
    </a>
  )
}

export default PrestationCard