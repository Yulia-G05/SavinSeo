block('card').content()(function() {
    return [
        {
            block: 'icon',
            mods: { size: 'small', 'small': true }
        },
        {
            block: 'div',
            content: [
                {
                    block: 'title',
                    content: [
                        {
                            elem: 'text',
                            content: '23/10/2023'
                        },
                        {
                            elem: 'text2',
                            content: 'Advertising'
                        }
                    ]
                },
                {
                    block: 'bady',
                    elem: 'text',
                    content: 'SEO Myths: 12 SEO Misconceptions That Aren’t True'
                }
            ]
        }
    ];
});
