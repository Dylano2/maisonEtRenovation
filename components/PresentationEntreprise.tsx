import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

// JSON constant with the company's information
const companyInfo = {
  entreprise: "MB Maison & Rénovation",
  presentation:
    "Votre partenaire de confiance pour tous vos projets de rénovation et de maçonnerie à Tarsul et ses environs",
  specialisations: {
    peinture:
      "Revitalisez vos espaces avec des services de peinture de haute qualité, que ce soit pour des structures en bois ou en fer.",
    ferronnerie: "Fabrication et rénovation de barrières et portails en fer forgé.",
    renovation: "Remise à neuf de volets et autres éléments en bois ou métal.",
    maconnerie: "Construction et rénovation de murs, murets, et installation de panneaux rigides."
  },
  contact: {
    telephone: "06.66.55.33.66",
    adresse: "13 rue de Corcelles, 21110 Tarsul"
  },
  message:
    "Ne laissez pas vos projets attendre, choisissez MB Maison & Rénovation pour des résultats durables et esthétiques !"
}

const HomePage = () => {
  return (
    <div>
      <section className="relative h-screen bg-cover bg-center"
      >
        <Image
          src="https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Background Image"
          fill={true}
          quality={80}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div
          className="relative z-10 flex flex-col items-center	justify-center h-full text-center text-white">
          <div className="backdrop-blur	p-8 rounded-xl">
            <h1 className="text-5xl font-bold mb-4">{companyInfo.entreprise}</h1>
            <p className="text-xl mb-8">{companyInfo.presentation}</p>
            <Button className="bg-white text-black hover:bg-gray-200">Contactez-nous</Button>
          </div>
        </div>
      </section>


      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Spécialisations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Peinture</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{companyInfo.specialisations.peinture}</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Ferronnerie</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{companyInfo.specialisations.ferronnerie}</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Rénovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{companyInfo.specialisations.renovation}</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Maçonnerie</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{companyInfo.specialisations.maconnerie}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Contactez-nous</h2>
          <p className="mb-4">{companyInfo.contact.telephone}</p>
          <p className="mb-8">{companyInfo.contact.adresse}</p>
          <Button className="bg-black text-white hover:bg-gray-700">Obtenir un devis</Button>
        </div>
      </section>
    </div>
  )
}

export default HomePage
