block('call-to-action').content()(function() {
    return[{
        block:'cta',
        content:[{
            block:'content',
            content:[{
                elem:'Let',
                content:'Let’s talk about your project'
            },{
                elem:'just',
                content:'Just fill in the brief or contact us by email'
            },{
                block: 'button',
                content: [
                    'Contact us',
                    {
                        block: 'image',
                        url: '../../../img/icon/pencin.svg',
                        alt: ''
                    }
                ]
            }]
    }]
    }];
});
