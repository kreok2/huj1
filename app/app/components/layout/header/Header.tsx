import { FC } from 'react'

import styles from ' ./Header.module.scss'
import Menu from './Header.module.scss'

const Header: FC = () => {
    return <header header className={styles.header} >
        < Menu />
        <Search />
        <Cart />
        </header>
}
export default Header 
