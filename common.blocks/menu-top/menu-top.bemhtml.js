block('menu-top').content()(function() {
    return [
        {elem: 'ul', tag: 'ul',
            attrs: {itemprop:'about', itemscope: true, itemtype: 'http://schema.org/ItemList'},
            elemMods: {'level': 1},
            content:[
                { elem: 'li',
                    tag: 'li',
                    attrs: {itemprop: "itemListElement", itemscope: true, itemtype: "http://schema.org/ItemList"},
                    elemMods: {'livel': 1},
                    content: [{ block: 'link', url: '#', attrs: {itemprop: 'url'},
                    content: 'Agency'},
                    {tag: 'meta', attrs: {itemprop: 'name', content: 'Agency'}}
                  ]
                },
                { elem: 'li',
                    tag: 'li',
                    attrs: {itemprop: "itemListElement", itemscope: true, itemtype: "http://schema.org/ItemList"},
                    elemMods: {'livel': 1, 'drop':'down'},
                    content: [
                        { block: 'link', url: '#1', attrs: {itemprop: 'url'}, 
                          content: [
                            'Services',
                            { block: 'icon', mods:{size:'m','chevron-white':true} },
                            {tag: 'meta', attrs: {itemprop: 'name', content: 'Services'}}
                          ]
                        }
                       
                    ]
                },
                { elem: 'li',
                    tag: 'li',
                    attrs: {itemprop: "itemListElement", itemscope: true, itemtype: "http://schema.org/ItemList"},
                    elemMods: {'livel': 1, 'drop':'down'},
                    content: [
                        { block: 'link', url: '#1', attrs: {itemprop: 'url'}, 
                          content: [
                            'Works',
                            { block: 'icon', mods:{size:'m','chevron-white':true} },
                            {tag: 'meta', attrs: {itemprop: 'name', content: 'Works'}}
                          ]
                        }
                    ]
                },
                { elem: 'li',
                    tag: 'li',
                    attrs: {itemprop: "itemListElement", itemscope: true, itemtype: "http://schema.org/ItemList"},
                    elemMods: {'livel': 1},
                    content: [{ block: 'link', url: '#', attrs: {itemprop: 'url'},
                    content: 'Team'},
                    {tag: 'meta', attrs: {itemprop: 'name', content: 'Team'}}
                  ]
                },
                { elem: 'li',
                    tag: 'li',
                    attrs: {itemprop: "itemListElement", itemscope: true, itemtype: "http://schema.org/ItemList"},
                    elemMods: {'livel': 1},
                    content: [{ block: 'link', url: '#', attrs: {itemprop: 'url'},
                    content: 'Blog'},
                    {tag: 'meta', attrs: {itemprop: 'name', content: 'Blog'}}
                  ]
                },
                { elem: 'li',
                    tag: 'li',
                    attrs: {itemprop: "itemListElement", itemscope: true, itemtype: "http://schema.org/ItemList"},
                    elemMods: {'livel': 1},
                    content: [{ block: 'link', url: '#', attrs: {itemprop: 'url'},
                    content: 'Contacts'},
                    {tag: 'meta', attrs: {itemprop: 'name', content: 'Contacts'}}
                  ]
                }
            ]
      }
    ]
});
