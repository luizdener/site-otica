import styles from './about.module.scss'

import Image from 'next/image'

import Remedios from '../../../../public/loja.png'
import Atendimento from '../../../../public/atendimento.png'

export default function About () {
    return (
        <section id='about' className={styles.about} >
            <div className={styles.limited_width}>
                <div className={styles.text_container}>
                    <h3>QUEM SOMOS NÓS?</h3>
                    <p>Fundada em 2001, e Nova Iguaço - Rio de Janeiro, a Óticas Vida iniciou suas atividades focada no atendimento aopúblico de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>
                </div>
                <div className={styles.infos_container}>
                    <Image src={Remedios}/>
                    <aside>
                        <h4>NOSSAS FILIAIS</h4>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                    </aside>
                    <aside>
                        <h4>ATENDIMENTO FLEXÍVEL</h4>
                        <p>Nossa equipe possui treinamento para te atender</p>
                    </aside>
                    <Image src={Atendimento}/>
                </div>
            </div>
        </section>
    )
}