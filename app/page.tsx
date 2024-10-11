"use client"
import SiteHeader from "@/components/SiteHeader"
import PrestationsPresentation from "@/components/PrestationsPresentation"

export default function App() {

  return (
    <>

      <SiteHeader />
      <PrestationsPresentation />
      {/*       <nav>
                <ul>
                    {navLinks.map((navLink) =>
                        <Link key={navLink.id} href={navLink.url}>
                            <li> {navLink.name}</li>
                        </Link>
                    )}
                </ul>
            </nav>*/}
    </>
  )
}



