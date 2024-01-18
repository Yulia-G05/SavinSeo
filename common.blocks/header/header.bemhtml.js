block('header').content()(function() {
    return [
        {
            block: 'begin',
            content: [
                {
                    block: 'logo'
                },
                {
                    block: 'menu-top'
                },
                {
                    block: 'button',
                    content: [
                        'Brief',
                        {
                            block: 'image',
                            url: '../../../img/icon/pencin.svg',
                            alt: ''
                        }
                    ]
                },
                {
                    block: 'navigation',
                    content: [
                        {
                            tag: 'input',
                            attrs: {
                                type: 'checkbox',
                                class: 'toggle-menu',
                                id: 'toggle-menu'
                            }
                        },
                        {
                            tag: 'div',
                            attrs: {
                                class: 'hamburger menu-icon'
                            }
                        }
                    ]
                },
                { block: 'pushy', mix: { block: 'pushy-left' }},
            ]
        }
    ];
});
