block('related').content()(function() {
    return [{
        block: 'Frame',
        content: [{
            elem: 'text', 
            content: 'Related topics',
        }, {
            block: 'card-block',
            content: [{
                block: 'card'
            },{
                block: 'card'
            }
        ],
        }],
    }];
});
