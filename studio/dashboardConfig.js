export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60b0f5ce7c9b261ecae60061',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-afx9kpez',
                  apiId: 'f99780e6-699c-4efd-b0ab-e786e0f0376f'
                },
                {
                  buildHookId: '60b0f5ce6b255d06c78a22f8',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-2qw53aq2',
                  apiId: 'a8821763-45ae-4571-916b-91e14ccdc0d8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JoshuaPoddoku/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-2qw53aq2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
