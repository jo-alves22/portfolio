import { motion } from 'framer-motion'
import './aboutme.css'
import perfil from '../../assets/perfil.jpg'

export default function Aboutme () {
    return(
        <div className='containerabout'>
            <section>
                <motion.h1
                    className='titleabout'
                    initial={{ opacity: 0, y: -24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    Sobre mim
                </motion.h1>
                <motion.div
                    className="cardabout"
                    initial={{ opacity: 0, y: 48 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    <motion.figure
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
                    >
                        <img src={perfil} alt="imagem jonas" />
                    </motion.figure>
                    <motion.div
                        className="infoabout"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
                    >
                        <p>
                        Olá, eu sou o Jonas, desenvolvedor ETL com uma forte paixão por análise e ciência de dados.
                        Atualmente, atuo como Coordenador da equipe de integração de softwares na
                        &nbsp;
                        <b><a href="https://www.nappsolutions.com.br/" target="_blank" >NappSolutions</a></b>,
                        onde trabalho para liderar nossa equipe na busca por resultados sólidos e processos de integração eficientes.
                        <br></br>
                        <br></br>
                        Além disso, leciono para os cursos de Desenvolvimento de Sistemas e Informática para Internet no <b>Centro Paula Souza</b>, nos níveis de Ensino Médio e Técnico,
                        onde compartilho meu conhecimento e experiência com novos talentos na área de tecnologia.
                        </p>
                    </motion.div>
                </motion.div>
            </section>
        </div>
    )
}
