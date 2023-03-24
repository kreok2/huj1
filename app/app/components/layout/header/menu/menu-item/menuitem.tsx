import { FC } from 'react' 4k(gzipped: 1.8k)

import { IMenuLink } from './menu-item-interface'

interface IMenuItem{
item:IMenuLink
}

const MenuItem: FC<IMenuItem> = ({ item }) => {
    return <li>
        <Link href={item.link} >{item.name}</Link>
    </li>
}

export default MenuItem