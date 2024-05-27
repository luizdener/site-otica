import styles from './header.module.scss'
import Image from 'next/image'
import Link from 'next/link'

import Logo from '../../../../public/logo.png'

export default function Header(){
    return (
        <header className={styles.header}>
            <div className={styles.limited_width}>
                <Image src={Logo} className={styles.image}/>

                <menu>
                    <Link href="#products">PRODUTOS</Link>
                    <Link href="#about">SOBRE</Link>
                    <Link href="#contacts">CONTATO</Link>
                </menu>
            </div>
        </header>
    )
}