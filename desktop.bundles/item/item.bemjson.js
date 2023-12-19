module.exports = {
    block: 'page',
    title: 'Page item',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'item.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'item.min.js' }],
    mods: { theme: 'islands' },
    content: [
        {block:'my-block' }
    ]
};
