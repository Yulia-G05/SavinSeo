block('tag').content()(function() {
    return [{
        block: 'artical',
        content: [
            {
              block:'h2',
                elem: 'text',
                content: 'Site Permissions'
            },
            {
                
                        block: 'icon',
                         mods: { size: 'pic', 'pic': true }
                    
                
            },{
              elem:'text',
              content:'To make browsing the internet safe and convenient, Yandex Browser applies various processing rules to website elements. It blocks pop-ups, warns you when a website requests your location, and so on. To change Yandex Browser behavior for all sites or the selected one, go to settings or use the Protect panel. For example, you can prevent all sites from launching JavaScript or allow a particular site to access your camera.'
          },  {elem: 'ol', tag: 'ol',

            content:[
                { elem: 'li',
                    tag: 'li',
                    content: [{content: 'List Item'}
                  ]
                },
                { elem: 'li',
                    tag: 'li',
                    content: [{content: 'List Item'}
                  ]
                },
                { elem: 'li',
                    tag: 'li',
                    content: [{content: 'List Item'}
                  ]
                },
                { elem: 'li',
                    tag: 'li',
                    content: [{content: 'List Item'}
                  ]
                },
                { elem: 'li',
                    tag: 'li',
                    content: [{content: 'List Item'}
                  ]
                }
            ]
      },{
        block:'Frame',
        content:[{
        elem:'text',
        content:'Changing handling rules for all sites'},{
        elem:'text1',
        content:'Element processing rules for all sites can be changed in Yandex Browser settings:'
        }, {elem: 'ol', tag: 'ol',

        content:[
          { elem: 'li',
          tag: 'li',
          content: [{content: 'Click → Settings → Websites.'}
        ]
      },
      { elem: 'li',
      tag: 'li',
      content: [{content: 'At the bottom of the page, click Advanced site settings.'}
    ]
  },
  { elem: 'li',
  tag: 'li',
  content: [{content: 'Set your element processing rules.'}]
}
        ]
  }
    ]
      },
      {
        block:'Frame-2',
        content:[{
          elem:'text',
          content:'To make browsing the internet safe and convenient, Yandex Browser applies various processing rules to website elements. It blocks pop-ups, warns you when a website requests your location, and so on. To change Yandex Browser behavior for all sites or the selected one, go to settings or use the Protect panel. For example, you can prevent all sites from launching JavaScript or allow a particular site to access your camera.For example, you can prevent all sites from launching JavaScript or allow a particular site to access your camera.'
        },{
          block: 'icon',
          mods: { size: 'pic-2', 'pic-2': true }
        }]

      },{
        elem: 'ul', tag: 'ul',

            content:[
                { elem: 'li',
                    tag: 'li',
                    content: [{content: 'List Item'}
                  ]
                },
                { elem: 'li',
                    tag: 'li',
                    content: [{content: 'List Item'}
                  ]
                },
                { elem: 'li',
                    tag: 'li',
                    content: [{content: 'List Item'}
                  ]
                }
            ]}
    //    ,{
    //     block: 'table',
    //     content: [
    //         {
    //             tag: 'tr',
    //             content: [
    //                 { tag: 'th', content: '' },
    //                 { tag: 'th', content: 'Name' },
    //                 { tag: 'th', content: 'Name' },
    //                 { tag: 'th', content: 'Name' }
    //             ]
    //         },
    //         {
    //             tag: 'tr',
    //             content: [
    //                 { tag: 'td', content: 'Name' },
    //                 { tag: 'td', content: 'text' },
    //                 { tag: 'td', content: 'text' },
    //                 { tag: 'td', content: 'text' }
    //             ]
    //         },
    //         {
    //             tag: 'tr',
    //             content: [
    //                 { tag: 'td', content: 'Name' },
    //                 { tag: 'td', content: 'text' },
    //                 { tag: 'td', content: 'text' },
    //                 { tag: 'td', content: 'text' }
    //             ]
    //         },
    //         {
    //             tag: 'tr',
    //             content: [
    //                 { tag: 'td', content: 'Name' },
    //                 { tag: 'td', content: 'text' },
    //                 { tag: 'td', content: 'text' },
    //                 { tag: 'td', content: 'text' }
    //             ]
    //         },
    //         {
    //             tag: 'tr',
    //             content: [
    //                 { tag: 'td', content: 'Name' },
    //                 { tag: 'td', content: 'text' },
    //                 { tag: 'td', content: 'text' },
    //                 { tag: 'td', content: 'text' }
    //             ]
    //         },
    //         {
    //             tag: 'tr',
    //             content: [
    //                 { tag: 'td', content: 'Name' },
    //                 { tag: 'td', content: 'text' },
    //                 { tag: 'td', content: 'text' },
    //                 { tag: 'td', content: 'text' }
    //             ]
    //         },
    //         {
    //             tag: 'tr',
    //             content: [
    //                 { tag: 'td', content: 'Name' },
    //                 { tag: 'td', content: 'text' },
    //                 { tag: 'td', content: 'text' },
    //                 { tag: 'td', content: 'text' }
    //             ]
    //         }
    //     ]
    // }   
        ]
    }];
});
