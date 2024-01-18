block('footer').content()(function() {
    return [{
        block: 'conteiner',
        elem: 'wrapper',
        content: [
            {
                elem: 'block-a',
                content: [
                    {
                        block: 'content',
                        content: [
                            {
                                block: 'logo'
                            },
                            {
                                block: 'menu-top'
                            },
                            {
                                elem: 'text',
                                content: '© 2015-2023 Savin-seo'
                            }
                        ]
                    }
                ]
            },
            {
                elem: 'block-b',
                content: [{
                    block: 'content',
                    content: [
                        {
                            elem: 'question',
                            content: 'Want to talk? '
                        },
                        {
                            block: 'link',
                            elem:'email',
                            content:'order@savin-seo.com',
                            url:'#'
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
                        }
                    ]
                }]
            }
        ]
    }];
});
