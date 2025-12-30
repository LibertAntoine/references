export default {
  title: 'Book references',
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
      title:
        'The Pragmatic Programmer: your journey to mastery, 20th Anniversary Edition',
      link: 'https://bookshop.org/p/books/the-pragmatic-programmer-your-journey-to-mastery-20th-anniversary-edition-andrew-hunt/7357760a824fbe2b?ean=9780135957059&next=t',
      coverImage: 'the-pragmatic-programmer.jpg',
      category: 'programming',
      authors: 'Andrew Hunt & David Thomas',
      keyConcepts: [
        'ETC',
        'DRY',
        'Coupling',
        'Unit testing',
        'Concurrency',
        'Continuous integration'
      ],
      summary: `A landmark book for understanding software development in the 21st century. 
      It helps acquire the essential foundations for successfully managing a project: 
      pragmatic programming philosophy, building an effective development environment, 
      design patterns, code maintainability issues, concurrency management, automation, 
      testing, and more. It lays out the reference points for many concepts that can then 
      be explored more deeply through more specialized books.`,
      questions: [
        'How should I approach software development?',
        'How can I set up an effective development environment?',
        'What should I pay attention to in order to make my software sustainable?'
      ]
    }
  ]
}
