import { Link } from 'react-router-dom'
import { posts } from '../../utils/posts'
import './BlogPosts.css'

function getExcerpt(content, maxLength = 180) {
    const firstParagraph = content.split('\n').find(line => line.trim() && !line.startsWith('#'))
    const text = (firstParagraph ?? content).replaceAll('**', '').replaceAll('*', '')
    if (text.length <= maxLength) return text
    const cut = text.slice(0, maxLength)
    const lastSpace = cut.lastIndexOf(' ')
    return cut.slice(0, lastSpace > 0 ? lastSpace : maxLength) + '…'
}

function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('pt-BR')
}

function BlogPosts() {
    return (
        <section className="blog-posts">
            <div className="posts-grid">
                {posts.map(post => (
                    <article key={post.slug} className="post-card">
                        <div className="post-header">
                            <h2 className="post-title">{post.title}</h2>
                            <div className="post-meta">
                                <span className="post-date">{formatDate(post.date)}</span>
                                <span className="post-read-time">{post.readTime} de leitura</span>
                            </div>
                        </div>

                        <p className="post-excerpt">{getExcerpt(post.content)}</p>

                        <div className="post-footer">
                            <div className="post-tags">
                                {post.tags.map(tag => (
                                    <span key={tag} className="tag">{tag}</span>
                                ))}
                            </div>
                            <Link to={`/blog/${post.slug}`} className="read-more-link">
                                Ler mais →
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default BlogPosts
