import styles from './contacts.module.scss'

import Image from 'next/image'

import Endereco from '../../../../public/local.png'
import Telefone from '../../../../public/telefone.png'
import Email from '../../../../public/email.png'
import Facebook from '../../../../public/fb.png'
import Instagram from '../../../../public/ig.png'
import Twitter from '../../../../public/tt.png'

export default function Contacts () {
    return (
        <section id='contacts' className={styles.contacts}>
            <section className={styles.section_text}>
                <h3>Fale conosco</h3>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
            </section>

            <div className={styles.section_cards}>
                <aside>
                    <h3>Nossos Contatos</h3>
                    <section>
                        <span><Image src={Endereco}/> Nova Iguaçu, RJ</span>
                        <span><Image src={Telefone}/> (21) 9999-9999</span>
                        <span><Image src={Email}/> contato@oticavida.com</span>
                    </section>
                </aside>

                <aside>
                    <h3>Nossas Redes Sociais</h3>

                    <section>
                        <span><Image src={Facebook}/> /OticaVida</span>
                        <span><Image src={Instagram}/> @oticavidarj</span>
                        <span><Image src={Twitter}/> @oticavidarj</span>
                    </section>
                </aside>
            </div>
        </section>
    )
}