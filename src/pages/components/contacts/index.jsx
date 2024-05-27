import styles from './contacts.module.scss'

export default function Contacts () {
    return (
        <section>
            <h3>Fale conosco</h3>

            <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>

            <div>
                <aside>
                    <h3>Nossos Contatos</h3>
                    <span><Image/> Nova Iguaçu, RJ</span>
                    <span><Image/> (21) 9999-9999</span>
                    <span><Image/> contato@oticavida.com</span>
                </aside>

                <aside>
                    <h3>Nossas Redes Sociais</h3>

                    <span><Image/> /OticaVida</span>
                    <span><Image/> @oticavidarj</span>
                    <span><Image/> @oticavidarj</span>
                </aside>
            </div>
        </section>
    )
}