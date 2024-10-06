import Image from "next/image";
import Link from "next/link";

export default function App() {
    const navLinks = [{
        id: '1',
        name: "Home",
        url: "/home",
    }, {
        id: '2',
        name: "Prestation",
        url: "/prestation",
    }, {
        id: '3',
        name: "Login",
        url: "/login",
    }]
    return (
        <><Image src='/logo.png' width={500}
                 height={500} alt={'test'}/>
            <nav>
                <ul>
                    {navLinks.map((navLink) =>
                        <Link key={navLink.id} href={navLink.url}>
                            <li> {navLink.name}</li>
                        </Link>
                    )}
                </ul>
            </nav>
        </>
    );
}



