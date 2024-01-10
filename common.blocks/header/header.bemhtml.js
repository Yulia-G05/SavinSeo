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
                                class: 'hamburger'
                            }
                        },
                        {
                            elem: 'menu',
                            tag: 'div',
                            content: 'Menu Content' // Adjust the content as needed
                        }
                    ]
                }
            ]
        }
    ];
});
