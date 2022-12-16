import { Logo } from "../logo/Logo"
import { SearchInput } from "../serachInput/SearchInput"

export const Navbar=()=>{
    return(
        <nav>
            <Logo/>
            <SearchInput/>
        </nav>
    )
}