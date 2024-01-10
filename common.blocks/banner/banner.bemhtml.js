block('banner').content()(function() {
    return [
        {
            block: 'icon',
            mods: { 'line': true }
        },
        {
            block: 'icon',
            mods: { size: 'bg', 'bg': true },
            content: [
                {
                    block: 'artical'
                },{
                    block:'button',
                    content:'Get in touch'
                }
            ]
        }
    ];
});
