const modules = import.meta.glob('../posts/*.md', { query: '?raw', import: 'default', eager: true })

function parseFrontmatter(raw) {
    const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
    if (!match) return { data: {}, content: raw }

    const data = {}
    for (const line of match[1].split('\n')) {
        const colonIdx = line.indexOf(':')
        if (colonIdx === -1) continue
        const key = line.slice(0, colonIdx).trim()
        let value = line.slice(colonIdx + 1).trim()
        if (value.startsWith('[')) {
            data[key] = JSON.parse(value)
        } else {
            data[key] = value.replace(/^["']|["']$/g, '')
        }
    }

    return { data, content: match[2].trim() }
}

function slugFromPath(path) {
    return path.replace(/^.*\//, '').replace(/\.md$/, '')
}

export const posts = Object.entries(modules)
    .map(([path, raw]) => {
        const { data, content } = parseFrontmatter(raw)
        return {
            slug: slugFromPath(path),
            title: data.title ?? '',
            date: data.date ?? '',
            tags: data.tags ?? [],
            readTime: data.readTime ?? '',
            content,
        }
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))

export function getPostBySlug(slug) {
    return posts.find(p => p.slug === slug) ?? null
}
