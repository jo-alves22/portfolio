import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import BlogNavbar from './BlogNavbar'
import { getPostBySlug } from '../../utils/posts'
import './Blog.css'

function BlogPost() {
    const { slug } = useParams()
    const post = getPostBySlug(slug)

    const formatDate = (dateString) => {
        const date = new Date(dateString)
        return date.toLocaleDateString('pt-BR')
    }

    if (!post) {
        return (
            <>
                <BlogNavbar />
                <main className="blog-container">
                    <div className="post-not-found">
                        <h2>Post não encontrado</h2>
                        <Link to="/blog" className="back-to-blog">← Voltar para o Blog</Link>
                    </div>
                </main>
            </>
        )
    }

    return (
        <>
            <BlogNavbar />
            <main className="blog-container">
                <article className="post-full">
                    <Link to="/blog" className="back-to-blog">← Voltar para o Blog</Link>
                    <header className="post-full-header">
                        <h1 className="post-full-title">{post.title}</h1>
                        <div className="post-meta">
                            <span className="post-date">{formatDate(post.date)}</span>
                            <span className="post-read-time">{post.readTime} de leitura</span>
                        </div>
                        <div className="post-tags">
                            {post.tags.map(tag => (
                                <span key={tag} className="tag">{tag}</span>
                            ))}
                        </div>
                    </header>
                    <div className="post-full-content">
                        <ReactMarkdown>{post.content}</ReactMarkdown>
                    </div>
                </article>
            </main>
        </>
    )
}

export default BlogPost
