import { useAtom } from 'jotai/react';
import {navigation} from '../Atom';
const Navbar =()=>{
    const [state, setState] = useAtom(navigation)
    
    return(
        <nav>

        </nav>
    )
}

export default Navbar;