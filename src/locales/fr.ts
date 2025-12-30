export default {
  title: 'Livre références',
  categories: [
    {
      name: 'Programmation',
      code: 'programming'
    },
    {
      name: 'Test',
      code: 'testing'
    }
  ],
  books: [
    {
      title: 'Le Programmeur pragmatique: Comment devenir pro',
      link: 'https://www.fnac.com/a20360131/Andrew-Hunt-Programmeur-pragmatique?oref=00000000-0000-0000-0000-000000000000&storecode=&Origin=SEA_GOOGLE_PLA_BOOKS&esl-k=sem-google%7Cnx%7Cc%7Cm%7Ck%7Cp%7Ct%7Cdc%7Ca20111491090%7Cg20111491090&gclsrc=aw.ds&gad_source=1&gad_campaignid=19663887777&gclid=CjwKCAiAjc7KBhBvEiwAE2BDOcfWaj5sxcUlEQLbsO_17L49vR7jNuglpeEjjo9cXwO5Ha-d-EcMXBoCQvYQAvD_BwE',
      coverImage: 'the-pragmatic-programmer.jpg',
      category: 'programming',
      authors: 'Andrew Hunt & David Thomas',
      keyConcepts: [
        'ETC',
        'DRY',
        'Couplage',
        'Tests unitaires',
        'Concurrence',
        'Intégration continue'
      ],
      summary: `Livre de référence pour appréhender le développement logiciel au 
      XXIᵉ siècle. Il permet d’acquérir les bases essentielles à la bonne conduite 
      d’un projet : philosophie de programmation pragmatique, création d’un environnement 
      de développement efficace, design patterns, enjeux de maintenabilité du code, gestion 
      de la concurrence, automatisation, tests, etc. Il pose les repères de nombreux concepts que 
      l’on pourra ensuite explorer plus librement à travers des ouvrages plus spécialisés.`,
      questions: [
        'Comment aborder le développement logiciel ?',
        'Comment disposer d’un environnement de développement efficace ?',
        'Quelles sont les choses auxquelles je dois faire attention pour rendre mon logiciel pérenne ?'
      ]
    }
  ]
}
