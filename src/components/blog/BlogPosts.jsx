import './BlogPosts.css'
import ReactMarkdown from 'react-markdown'


function BlogPosts() {
    // Posts de exemplo - você pode substituir por dados de uma API ou estado
    const posts = [
        {
            id: 3,
            title: "O mercado de trabalho em tecnologia em 2025: o que esperar e como se preparar",
            content: (
                <>
                    <p>O mercado de tecnologia segue em constante transformação — e 2025 promete ser um ano decisivo.
                    A aceleração da inteligência artificial, a popularização da computação em nuvem e a crescente demanda por segurança digital estão redefinindo o que as empresas buscam nos profissionais de TI.
                    Mas, afinal, <strong>como está o mercado de trabalho em tecnologia em 2025? Quais são as áreas mais promissoras e o que os profissionais precisam fazer para se destacar?</strong></p>

                    <h3>Um mercado ainda em expansão</h3>

                    <p>Mesmo com oscilações econômicas e cortes pontuais em grandes empresas, o setor de tecnologia continua entre os que mais contratam.
                    Startups, indústrias e grandes corporações seguem ampliando seus times de desenvolvimento, dados e infraestrutura, especialmente por causa da transformação digital que se tornou essencial em praticamente todos os setores.</p>

                    <p>Segundo levantamentos recentes, a demanda por profissionais de TI <strong>supera em mais de 40% a oferta</strong> no Brasil — e essa lacuna tende a crescer.
                    Ou seja: <strong>quem tem qualificação técnica e soft skills bem desenvolvidas, encontra oportunidades rapidamente</strong>.</p>

                    <h3>As áreas em maior destaque em 2025</h3>

                    <p>O foco das empresas mudou: agora, elas querem profissionais capazes de criar soluções inteligentes, seguras e escaláveis.</p>
                    <p>Veja as áreas que mais crescem neste ano:</p>
                    <ul>
                        <li><b>Inteligência Artificial e Machine Learning:</b> as empresas buscam especialistas em dados, desenvolvedores de modelos e engenheiros de IA capazes de integrar soluções de automação e análise preditiva.</li>

                        <li><b>Computação em Nuvem:</b> AWS, Azure e Google Cloud continuam no topo. Profissionais com certificações cloud são disputados por empresas que buscam reduzir custos e aumentar a escalabilidade.</li>

                        <li><b>Cibersegurança:</b> com o aumento dos ataques e vazamentos de dados, cresce a necessidade de analistas de segurança, especialistas em governança e engenheiros de proteção de infraestrutura.</li>

                        <li><b>Desenvolvimento de Software e APIs:</b> o desenvolvimento full stack segue em alta, especialmente com frameworks modernos e integração entre sistemas via APIs REST e GraphQL.</li>

                        <li><b>Ciência de Dados e Engenharia de Dados:</b> interpretar dados e transformá-los em decisões estratégicas nunca foi tão valioso.</li>

                        <li><b>UX/UI e Produto Digital:</b> o foco no usuário e na experiência continua sendo diferencial competitivo.</li>
                    </ul>
                    <h3>As habilidades mais valorizadas</h3>

                    <p>As empresas em 2025 não estão apenas procurando quem sabe programar, mas sim quem entende o negócio.
                    <br></br>Entre as principais competências exigidas estão:</p>
                    <ul>
                        <li>Capacidade de <b>resolver problemas complexos</b> com pensamento crítico;</li>

                        <li><b>Colaboração e comunicação</b> entre equipes multidisciplinares;</li>

                        <li><b>Aprendizado contínuo</b> — já que as tecnologias mudam a cada ano;</li>

                        <li>E claro, <b>domínio técnico sólido</b>, com base em lógica, algoritmos e boas práticas de desenvolvimento.</li>
                    </ul>
                    <h3>Trabalho híbrido e remoto: a nova normalidade</h3>

                    O trabalho remoto deixou de ser um benefício e passou a ser parte da cultura de TI.
                    Profissionais podem atuar de qualquer lugar do mundo, e isso ampliou a competição global — mas também as oportunidades.
                    Empresas internacionais estão contratando brasileiros com salários em dólar e ambientes de trabalho mais flexíveis.

                    <h3>Como se preparar para o futuro</h3>

                    Para quem quer se destacar no mercado de tecnologia em 2025 (e além), as principais recomendações são:

                    <ol>
                        <li><b>Aprenda continuamente.</b> Acompanhe tendências, faça cursos e pratique.</li>
                        <li><b>Construa um portfólio real.</b> Mostre projetos, contribuições open source e experiências práticas.</li>
                        <li><b>Desenvolva soft skills.</b> Comunicação, empatia e pensamento estratégico fazem diferença.</li>
                        <li><b>Certifique-se.</b> As certificações em Cloud, Segurança e Dados continuam sendo diferenciais.</li>
                        <li><b>Conecte-se.</b> Participe de comunidades, eventos e redes profissionais.</li>
                    </ol>

                    <h3>Conclusão</h3>

                    O mercado de tecnologia em 2025 é competitivo, mas cheio de oportunidades.<br></br>
                    Mais do que dominar uma linguagem ou ferramenta, o profissional que se destaca é aquele que entende o impacto da tecnologia nos negócios e nas pessoas.
                    <br></br>
                    Em um cenário de mudanças rápidas, quem aprende e se adapta mais rápido, vence.

                    <p>💬 Em outras palavras: o futuro da tecnologia é agora — e o melhor investimento é em você mesmo.</p>
                </>
            ),
            date: "2024-01-10",
            tags: ["Programação"],
            readTime: "10 min"
        },
        {
            id: 2,
            title: "Qual é a melhor linguagem de programação hoje em dia?",
            content: (
                <>
                    <p>Essa é, sem dúvida, uma das perguntas mais frequentes no mundo da tecnologia — e talvez uma das mais difíceis de responder. Afinal, <strong>não existe uma "melhor" linguagem de programação universal</strong>, e sim a <strong>melhor para cada contexto, objetivo e pessoa</strong>.</p>
                    
                    <p>A tecnologia evolui rápido, e com ela surgem novas linguagens, frameworks e formas de pensar o desenvolvimento. No entanto, cada linguagem tem suas peculiaridades, pontos fortes e limitações, que se adequam melhor a determinados tipos de projeto e perfil de desenvolvedor.</p>
                    
                    <h3>Cada linguagem tem seu propósito</h3>
                    
                    <ul>
                        <li><strong>Python</strong>, por exemplo, é famosa por sua simplicidade e versatilidade. É amplamente usada em ciência de dados, inteligência artificial, automação e back-end web.</li>
                        <li><strong>JavaScript</strong> domina o desenvolvimento web e hoje também é usado no back-end com o <strong>Node.js</strong>, além de frameworks modernos como <strong>React</strong>, <strong>Vue</strong> e <strong>Angular</strong>.</li>
                        <li><strong>Java</strong> e <strong>C#</strong> continuam muito fortes em ambientes corporativos, pela robustez, segurança e capacidade de lidar com grandes sistemas de forma estruturada.</li>
                        <li><strong>Go (Golang)</strong> e <strong>Rust</strong> vêm ganhando espaço em áreas que exigem eficiência e concorrência, especialmente em infraestrutura de nuvem e microsserviços.</li>
                        <li><strong>Kotlin</strong>, <strong>Swift</strong> e <strong>Dart</strong> são populares na comunidade de desenvolvimento mobile. Kotlin, Swift e Dart dominam o desenvolvimento mobile, cada uma com sua comunidade e vantagens próprias.</li>
                    </ul>

                    <h3>Cada pessoa se adapta a um ambiente</h3>
                    <p>A escolha da linguagem também tem um lado pessoal. Alguns desenvolvedores preferem linguagens mais “limpas” e de fácil leitura; outros gostam de ter controle total sobre o hardware e o desempenho.
                    O importante é encontrar uma linguagem que <strong>combine com seu estilo de pensamento e com o tipo de projeto que você quer construir</strong>.</p>

                    <h3>Cada empresa precisa de um tipo de entrega</h3>

                    <p>Empresas escolhem linguagens com base em suas necessidades de negócio: desempenho, custo, disponibilidade de profissionais, tempo de entrega, integração com sistemas legados e muito mais.
                    Uma startup pode optar por Python pela agilidade no desenvolvimento, enquanto uma empresa de telecomunicações pode preferir Java pela estabilidade e escalabilidade.</p>
                    <hr></hr>
                    <h3>Conclusão</h3>

                    <p>A melhor linguagem de programação é a que resolve o seu problema da forma mais eficiente, levando em conta o contexto, a equipe e o objetivo final.</p>
                    <p>Mais importante do que escolher “a melhor”, é dominar os fundamentos da lógica de programação, pois isso permitirá que você se adapte facilmente a qualquer linguagem ou tecnologia que surgir no futuro.</p>

                    Em resumo: não é sobre qual linguagem é a melhor — é sobre qual linguagem é a melhor para você, para o seu projeto e para o seu momento.
                </>
            ),
            date: "2024-01-10",
            tags: ["Programação"],
            readTime: "10 min"
        },
        {
            id: 1,
            title: "Apresentação",
            content: (
                <>
                    <p>Olá! Este é o meu espaço onde quero compartilhar minhas experiências e conhecimentos, tanto no âmbito profissional, quanto pessoal, dentro dos limites razoáveis.</p>
                    <p>A bagagem emocional pode ser de grande valia nestes tempos conturbados. Afunçaõ de liderança de equipe em uma empresa de tecnologia, me faz questionar métodos, atitudes de forma constante.</p> 
                    <p>Por ser um ambiente predominantemente jovem, me faz refletir sobre o papel do líder, que não é apenas cobrar resultados, mas sim, ser um facilitador, um mentor.</p> 
                    <p>Espero que gostem dos conteúdos que irei postar aqui</p>
                </>
            ),
            date: "2024-01-05",
            tags: ["Tecnologia", "Mentoria", "Evolução"],
            readTime: "2 min"
        }
    ]

    const formatDate = (dateString) => {
        const date = new Date(dateString)
        return date.toLocaleDateString('pt-BR')
    }

    return (
        <section className="blog-posts">
            <div className="posts-grid">
                {posts.map(post => (
                    <article key={post.id} className="post-card">
                        <div className="post-header">
                            <h2 className="post-title">{post.title}</h2>
                            <div className="post-meta">
                                <span className="post-date">{formatDate(post.date)}</span>
                                <span className="post-read-time">{post.readTime} de leitura</span>
                            </div>
                        </div>
                        
                        <div className="post-excerpt">
                            {post.content}
                        </div>
                        
                        <div className="post-footer">
                            <div className="post-tags">
                                {post.tags.map((tag, index) => (
                                    <span key={index} className="tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            

                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default BlogPosts