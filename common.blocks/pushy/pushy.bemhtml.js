block('pushy').content()(function() {
    return[ {
        block: 'pushy-content',
        content:[
            {
              block: 'ul',
              attrs: {'itemscope': true, itemtype:'http://www.schema.org/SiteNavigationElement'},
              tag:'ul',
              content:[
                { block: 'pushy-link', tag: 'li', attrs: { itemprop: "name" }, mods:{ level: '1'}, content: { block: 'link', url:'#', content:'О Сергее'} },
                {
                  block: 'pushy-submenu', tag: 'li', attrs: { itemprop: "name" }, content:[
                  { block: 'button', content:'Курсы' },
                  { block: 'ul', tag:'ul', mods:{ 'level': 2}, content: [
                    {
                      block: 'pushy-link', tag: 'li', mods:{ 'level': 2}, content:
                        {
                          block: 'link',
                          url:'#',
                          mix: { block: 'pushy-link' },
                          content: 'Курс 1'
                        }
                    },
                    {
                      block: 'pushy-link', tag: 'li', mods:{ 'level': 2}, content:
                        {
                          block: 'link',
                          url:'#',
                          mix: { block: 'pushy-link' },
                          content: 'Курс 2'
                        }
                    },
                    {
                      block: 'pushy-link', tag: 'li', mods:{ 'level': 2}, content:
                        {
                          block: 'link',
                          url:'#',
                          mix: { block: 'pushy-link' },
                          content: 'Курс 3'
                        }
                    },
                    {
                      block: 'pushy-link', tag: 'li', mods:{ 'level': 2}, content:
                        {
                          block: 'link',
                          url:'#',
                          mix: { block: 'pushy-link' },
                          content: 'Курс 4'
                        }
                    },
                    ]
                  }]
                },
                {
                  block: 'pushy-submenu', tag: 'li', attrs: { itemprop: "name" }, content:[
                  { block: 'button', content:'Тренинги' },
                  { block: 'ul', tag:'ul', mods:{ 'level': 2}, content: [
                    {
                      block: 'pushy-link', tag: 'li', mods:{ 'level': 2}, content:
                        {
                          block: 'link',
                          url:'#',
                          mix: { block: 'pushy-link' },
                          content: 'Тренинг 1'
                        }
                    },
                    {
                      block: 'pushy-link', tag: 'li', mods:{ 'level': 2}, content:
                        {
                          block: 'link',
                          url:'#',
                          mix: { block: 'pushy-link' },
                          content: 'Тренинг 2'
                        }
                    },
                    {
                      block: 'pushy-link', tag: 'li', mods:{ 'level': 2}, content:
                        {
                          block: 'link',
                          url:'#',
                          mix: { block: 'pushy-link' },
                          content: 'Тренинг 3'
                        }
                    },
                    {
                      block: 'pushy-link', tag: 'li', mods:{ 'level': 2}, content:
                        {
                          block: 'link',
                          url:'#',
                          mix: { block: 'pushy-link' },
                          content: 'Тренинг 4'
                        }
                    },
                    ]
                  }]
                },
                { block: 'pushy-link', tag: 'li', mods:{ level: '1'}, attrs: { itemprop: "name" }, content: { block: 'link', url:'#', content:'Расписание'} },
                { block: 'pushy-link', tag: 'li', mods:{ level: '1'}, attrs: { itemprop: "name" }, content: { block: 'link', url:'#', content:'Консультация'} },
                { block: 'pushy-link', tag: 'li', mods:{ level: '1'}, attrs: { itemprop: "name" }, content: { block: 'link', url:'#', content:'Корпоративным клиентам'} },
                { block: 'pushy-link', tag: 'li', mods:{ level: '1'}, attrs: { itemprop: "name" }, content: { block: 'link', url:'#', content:'Контакты'} },
  
              ]
            },
          ]
        }
      ];
});
