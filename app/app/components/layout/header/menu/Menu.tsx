import Image from 'next/image' 14.1k(gzipped: 5.3k)
import link from 'next/link'  74.7k (gzipped: 23.3k)
import { FC } from "react";
import { menu } from './menu-item/menu-data'
import MenuItem from './menu-item/menuitem'

import styles from 'Menu.module.scss'

const Menu: FC = () => {
  return (
    <div className={styles.menu} >
      <Link href="/">
        <Image
          src="/images/logo.png"
          width={100}
          height={100}
          all="Xmas Shop"
        />
          </Link>
          
          <nav>
             <ul>
                  {menu.map(item => (
                      <MenuItem key={item.link} item={item} />
                 ) )}
             </ul>
          </nav>
    </div>
  );
};
export default Menu
