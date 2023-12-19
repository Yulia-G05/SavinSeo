({
    block : 'page',
    title : 'bem',
    head : [
        { elem : 'css', url : 'bem.min.css' }
    ],
    scripts : [{ elem : 'js', url : 'bem.min.js' }],
    mods : { theme : 'islands' },
    content : [
        {
            block : 'bem',
            content : [
                {
                    elem : 'logo',
                    content : 'LOGOTYPE'
                    }, 
                    {
                        content: [
                        {
                            block : 'input',
                            mods : { theme : 'islands', size : 'm' },
                        
                            // подмешиваем элемент для добавления CSS-правил
                            mix : { block : 'bem', elem : 'input' },
                            
                            
                        },           
                        {
                            block : 'enter',
                            mods : {theme : 'islands', size : 'm', type : 'submit'},
                            text : 'Поиск'
                        }]
                    },         
                    {
                    elem : 'number',
                    content : 'number'
                }
               
            ],
          
        },
        {
            block:'menu',
            
            
                
                content: [
                    {
                        block :'link',
                        url: 'http://localhost:8080/desktop.bundles/bem/bem.html',
                        content: 'Главная'
                    }
                    ,{
                        block :'link',
                        url: 'http://localhost:8080/desktop.bundles/bem/bem.html',
                        content: 'Первая'
                    },{
                        block :'link',
                        url: 'http://localhost:8080/desktop.bundles/bem/bem.html',
                        content: 'Вторая'
                    }
                ]
               
            
        },
        

        {
            block:'header',
            content:[
                {
                    elem:'header',
                    content: 'Шапка'
                }
            ]
        },
        {
            block: 'content',
            content: [
                {
                    elem: 'sidebar',
                    content: [
                        { elem: 'item', content: 'Item 1' },
                        { elem: 'item', content: 'Item 2' },
                        { elem: 'item', content: 'Item 3' },
                        { elem: 'item', content: 'Item 4' },
                        { elem: 'item', content: 'Item 5' }
                    ]
                },
                {
                    elem: 'MainInformation',
                    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                }
            ]
        },
        {
            block:'footer',
            content:[
                {
                    elem:'footer',
                    content: 'Подвал'
                }
            ]
        }
    ]
})
