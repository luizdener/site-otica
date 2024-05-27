import styles from './products.module.scss'

import Image from 'next/image'

import OculosGrau from '../../../../public/oculos01.png'
import OculosTransition from '../../../../public/oculos02.png'
import OculosSol from '../../../../public/oculos03.png'
import OculosInfantil from '../../../../public/oculos04.png'

export default function Products (){
    return (
        <section id='products' className={styles.products}>
            <div className={styles.limited_width}>
                <h3>Nossos produtos</h3>
                <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculonos, feminino e infantil.</p>
                <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
                
                <div className={styles.container_cards}>
                    <div className={styles.card_product}>
                        <h4>Óculos de grau</h4>
                        <Image src={OculosGrau}/>
                        <p>R$ 500,00</p>
                    </div>
                
                    <div className={styles.card_product}>
                        <h4>Óculos transition</h4>
                        <Image src={OculosTransition}/>
                        <p>R$ 750,00</p>
                    </div>

                    <div className={styles.card_product}>
                        <h4>Óculos de sol</h4>
                        <Image src={OculosSol}/>
                        <p>R$ 700,00</p>
                    </div>

                    <div className={styles.card_product}>
                        <h4>Óculos infantil</h4>
                        <Image src={OculosInfantil}/>
                        <p>R$ 500,00</p>
                    </div>
                </div>

                <h3>Todos os nossos produtos incluem:</h3>
                
                <ul>
                    <li>Garantia de 1 ano</li>
                    <li>Manutenção preventiva</li>
                    <li>Descontos especiais na compra da segunda unidade</li>
                    <li>Flexibilidade de pagamento</li>
                </ul>
            </div>
        </section>
    )
}