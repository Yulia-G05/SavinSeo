module.exports = {
    block: 'page',
    title: 'Page item',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'item.min.css' },
        // Add font-related link elements
        { elem: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
        { elem: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' } },
        { elem: 'link', attrs: { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap' } }
    ],
    scripts: [{ elem: 'js', url: 'item.min.js' }],
    mods: { theme: 'islands' },
    content: [
            { block: 'first-part'} ,
            {block:'footer'}
            
        
    ]
};
