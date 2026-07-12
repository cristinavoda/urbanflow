import { Menu, X } from 'lucide-react'

export default function MobileHeader({ menuOpen, setMenuOpen }) {

    return (

        <header className="mobile-header">

            <button
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <X size={24}/> : <Menu size={24}/>}
            </button>

           

        </header>

    )

}