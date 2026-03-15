export default {
  title: 'Books reference',
  categories: [
    {
      name: 'Algorithmics & Programming',
      code: 'algorithmics'
    },
    {
      name: 'Architecture & Modeling',
      code: 'architecture & modeling'
    },
    {
      name: 'Architecture & Distributed Systems',
      code: 'architecture & distributed systems'
    },
    {
      name: 'DevOps Practices',
      code: 'devops'
    },
    {
      name: 'Engineering & Management',
      code: 'engineering & management'
    },
    {
      name: 'Engineering & Finance',
      code: 'engineering & finance'
    },
    {
      name: 'Agile Methods & Project Management',
      code: 'agile & project management'
    },
    {
      name: 'UX/UI Design',
      code: 'ux/ui design'
    },
    {
      name: 'Testing & Specification (QA)',
      code: 'test & specification'
    },
    {
      name: 'Cybersecurity',
      code: 'cybersecurity'
    }
  ],
  books: [
    {
      title:
        'Grokking Algorithms: An Illustrated Guide for Programmers and Other Curious People',
      link: 'https://www.fnac.com/livre-numerique/a16066511/Aditya-Bhargava-Grokking-Algorithms',
      coverImage: 'grokking-algorithms.jpg',
      category: 'algorithmics',
      authors: 'Aditya Bhargava',
      keyConcepts: [
        'Data structures',
        'Algorithmic complexity',
        'Sorting and searching',
        'Graphs',
        'Recursion'
      ],
      summary: [
        `This book offers a visual and intuitive approach to understanding algorithms and data structures.
    It is designed for beginner or curious programmers who want to build a solid foundation in algorithmics.`,

        `The book covers fundamental concepts such as algorithmic complexity, sorting and searching, graphs, hash tables, and recursion. Each concept is illustrated with simple and visual examples, helping readers understand how and why each algorithm works.`,

        `While pedagogical in nature, the book also provides a good introduction to the principles of algorithmic design
        and problem solving.`
      ],
      questions: [
        'How do you analyze the complexity of an algorithm?',
        'How do you choose the right data structure for a given problem?',
        'How do you reason about graphs and recursion?',
        'Which sorting and searching algorithms are most suitable depending on the context?'
      ]
    },

    {
      title: 'Le Programmeur pragmatique: Comment devenir pro',
      link: 'https://www.fnac.com/a20360131/Andrew-Hunt-Programmeur-pragmatique?oref=00000000-0000-0000-0000-000000000000&storecode=&Origin=SEA_GOOGLE_PLA_BOOKS&esl-k=sem-google%7Cnx%7Cc%7Cm%7Ck%7Cp%7Ct%7Cdc%7Ca20111491090%7Cg20111491090&gclsrc=aw.ds&gad_source=1&gad_campaignid=19663887777&gclid=CjwKCAiAjc7KBhBvEiwAE2BDOcfWaj5sxcUlEQLbsO_17L49vR7jNuglpeEjjo9cXwO5Ha-d-EcMXBoCQvYQAvD_BwE',
      coverImage: 'the-pragmatic-programmer.jpg',
      category: 'algorithmics',
      authors: 'Andrew Hunt & David Thomas',
      keyConcepts: [
        'ETC',
        'DRY',
        'Coupling',
        'Unit testing',
        'Concurrency',
        'Continuous integration'
      ],
      summary: [
        `A reference book for approaching software development.`,

        `This accessible book provides the essential foundations for conducting a software project well: pragmatic programming philosophy, building an efficient development environment, design patterns, code maintainability challenges, concurrency management, automation, testing, and more.`,

        `It establishes reference points for many concepts that can then be explored more freely through more specialized works.`
      ],
      questions: [
        'How should one approach software development?',
        'How do you set up an efficient development environment?',
        'What are the key things to watch out for to make software sustainable?'
      ]
    },
    {
      title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
      link: 'https://www.fnac.com/livre-numerique/a18399573/Erich-Gamma-Design-Patterns-Elements-of-Reusable-Object-Oriented-Software',
      coverImage:
        'design-patterns-elements-of-reusable-object-oriented-software.jpg',
      category: 'algorithmics',
      authors: 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides',
      keyConcepts: [
        'Design patterns',
        'Object-oriented',
        'Maintainability',
        'Reusability',
        'Decoupling',
        'Abstraction'
      ],
      summary: [
        `A foundational work on design patterns, describing 23 proven algorithmic techniques for solving recurring problems in object-oriented programming.
         It provides a common vocabulary for discussing design and improving code reusability and maintainability.`,

        `Patterns are organized into three categories: creational, structural, and behavioral. Each pattern is
        explained with concrete examples, UML diagrams, and advice on when it is most useful.`,

        `For beginner and intermediate developers, the book helps reason about software design
         and build good programming habits, enabling the production of clean and reusable code. It remains an
         essential reference for any object-oriented developer.`
      ],
      questions: [
        'Which patterns should be adopted to make code more understandable and maintainable?',
        'How do you organize objects and classes to maximize reusability?',
        'Which behavioral patterns help manage interactions between objects?'
      ]
    },

    {
      title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
      link: 'https://www.fnac.com/mp4246815/Clean-Code-Robert-C-Martin-Series?oref=47dfc134-d448-416b-ed57-9d06b71b6f6b',
      coverImage: 'clean-code.jpg',
      category: 'algorithmics',
      authors: 'Robert C. Martin',
      keyConcepts: [
        'Clean code',
        'Maintainability',
        'SOLID principles',
        'Refactoring',
        'Single responsibility',
        'Unit testing'
      ],
      summary: [
        `An essential work on code quality, 'Clean Code' explains how to write readable,
        understandable, and maintainable code. It emphasizes the importance of meaningful names,
        short functions, and clear structure.`,

        `The book details best practices for refactoring, unit testing, and dependency management.
         It also emphasizes SOLID principles and single responsibility to ensure long-term code coherence
         and flexibility.`,

        `The book is aimed at developers of all levels. It is particularly useful for those who want
        to adopt more professional and rigorous programming habits in their projects.`
      ],
      questions: [
        'How do you make code readable and understandable?',
        'What practices help maintain clean and evolvable code?',
        'How do you apply SOLID principles and single responsibility on a daily basis?',
        'How do you structure functions and classes to improve maintenance and testing?'
      ]
    },

    {
      title: 'Software Architecture: The Hard Parts',
      link: 'https://www.fnac.com/mp50664603/Software-Architecture-The-Hard-Parts-by-Zhamak-Dehghani?oref=0739a1b8-fe4e-33ee-1b4c-0f6411001123',
      coverImage: 'software-architecture-the-hard-parts.jpg',
      category: 'architecture & modeling',
      authors: 'Neal Ford & Mark Richards',
      keyConcepts: [
        'Architectural decisions',
        'Non-functional requirements',
        'Trade-offs',
        'Security',
        'Performance'
      ],
      summary: [
        `This book focuses on the most complex part of software architecture: the difficult decisions that affect the quality, maintainability, and performance of systems. It emphasizes the need to understand and document trade-offs between different approaches.`,
        `Aimed at experienced architects and developers, it focuses on critical thinking,
        documentation, and communication of architectural decisions. It is both a practical and conceptual work,
        designed to guide decision-making in complex, large-scale systems.`,
        `The book details mechanisms for analyzing non-functional requirements such as scalability, resilience, security, and performance. It provides tools and methods for evaluating trade-offs and choosing the most appropriate decisions for each context.`
      ],
      questions: [
        'How do you make informed architectural decisions?',
        'How do you evaluate trade-offs between quality, performance, and scalability?',
        'How do you document and communicate difficult decisions?',
        'How do you handle non-functional requirements in complex systems?'
      ]
    },

    {
      title:
        "Clean Architecture: A Craftsman's Guide to Software Structure and Design",
      link: 'https://www.fnac.com/mp36379595/Clean-Architecture-A-Craftsman-S-Guide-To-Software-Structure-And-Design?oref=f079f010-36a0-17c0-00e2-aa7eb2fa2336',
      coverImage: 'clean-architecture.jpg',
      category: 'architecture & modeling',
      authors: 'Robert C. Martin',
      keyConcepts: [
        'Separation of Concerns',
        'SOLID principles',
        'Hexagonal architecture',
        'Use Cases',
        'Dependency Rule'
      ],
      summary: [
        `This book formalizes the principles for building systems that are independent of
frameworks, databases, and user interfaces, placing business logic at the center of the application
(concepts closely related to Domain-Driven Design).`,

        `It details the SOLID principles and software craftsmanship, a normative approach that aims to ensure better maintainability,
testability, and evolvability of software systems. Conceptually demanding, this methodology
is aimed at developers and architects with significant programming experience to be properly understood and challenged.
Applied without a good grasp of its foundations and stakes, it can lead to excessive complexity and over-engineering.`,

        `The book introduces the "Dependency Rule": dependencies must always point
towards the inside of the system. This rule protects the business core from technical details
and preserves the stability of the model against technological changes.`
      ],
      questions: [
        'How do you structure an application to make it stand the test of time?',
        'How do you protect the business core from technical dependencies?',
        'How do you make an architecture truly testable?',
        "What is the architect's role in software quality?"
      ]
    },

    {
      title:
        'Domain-Driven Design: Tackling Complexity in the Heart of Software',
      link: 'https://www.fnac.com/livre-numerique/a11046925/Eric-Evans-Domain-Driven-Design',
      coverImage: 'domain-driven-design.jpg',
      category: 'architecture & modeling',
      authors: 'Eric Evans',
      keyConcepts: [
        'Domain',
        'Modeling',
        'Ubiquitous Language',
        'Bounded Context',
        'Anti-Corruption Layer'
      ],
      summary: [
        `The founding work on Domain-Driven Design (DDD), which has become highly influential in software architecture.
        It proposes a structured method for managing complexity by placing the business model at the heart of development.
        The book emphasizes the importance of collaborative domain modeling and the development of a shared
        ubiquitous language between domain experts and developers.`,

        `Dense and conceptual, it is primarily aimed at experienced developers and architects who face
        complex business domain challenges.`,

        `It introduces strategic concepts (Bounded Context, Context Mapping) and tactical patterns
         (Entities, Value Objects, Aggregates, Repositories)
        for building coherent, expressive, and durable systems.`
      ],
      questions: [
        'How do you rigorously model a complex business domain?',
        'How do you align code with the business language and understanding?',
        'How do you split a system into coherent and independent subdomains?',
        'How do you maintain the consistency of the model over time?'
      ]
    },

    {
      title: 'Designing Data-Intensive Applications',
      link: 'https://www.fnac.com/mp35615968/Designing-Data-Intensive-Applications?oref=5ed65406-e384-9ed0-18fd-2ff8895efbd5',
      coverImage: 'designing-data-intensive-applications.jpg',
      category: 'architecture & distributed systems',
      authors: 'Martin Kleppmann',
      keyConcepts: [
        'Distributed systems',
        'Resilience',
        'Transactions',
        'Scalability',
        'Replication',
        'Event Streaming'
      ],
      summary: [
        `A reference work for understanding the foundations of modern distributed systems
        and data-oriented architectures. It offers an in-depth analysis
        of the principles underlying databases, messaging systems,
        streaming, and large-scale infrastructures.`,

        `More than a tools guide, it is a conceptual work that builds
        a deep understanding of the fundamental abstractions of distributed systems.
        It targets developers and architects who want to understand how
        to design large-scale applications capable of serving many
        users and handling large volumes of data while remaining
        performant and reliable.`,

        `The book explores in detail the mechanisms of replication, partitioning,
        and transaction management, as well as the trade-offs inherent in consistency,
        availability, and performance (CAP theorem). It provides a structuring perspective
        on reliability, scalability, and resilience challenges.`
      ],
      questions: [
        'How do you design a system capable of handling massive volumes of data?',
        'What trade-offs are acceptable between consistency, availability, and performance?',
        'How do you guarantee the reliability of a distributed system?',
        'What are the fundamental mechanisms behind modern databases?'
      ]
    },

    {
      title: 'Building Microservices',
      link: 'https://www.fnac.com/mp35618453/Building-Microservices-Paperback?oref=f6e0bc0a-0448-b97f-43a6-70794161aeca',
      coverImage: 'building-microservices.jpg',
      category: 'architecture & distributed systems',
      authors: 'Sam Newman',
      keyConcepts: [
        'Inter-service communication',
        'Continuous deployment',
        'Observability',
        'Distributed transactions'
      ],
      summary: [
        `This book focuses on designing and implementing microservices.
    It explains how to decompose a complex system into independent services while
    preserving the coherence and maintainability of the business domain.`,

        `It is a good introductory book on microservices, helping readers understand the challenges
        and trade-offs associated with this architectural approach.
        It remains genuinely accessible, although a basic knowledge of distributed systems is recommended.`,

        `The book covers technical and organizational aspects: inter-service communication,
    distributed transactions, continuous deployment, observability, and resilience.
    The author emphasizes best practices and pitfalls to avoid when building robust and scalable services.`
      ],
      questions: [
        'How do you decompose a monolithic system into microservices?',
        'How do you manage communication and transactions between services?',
        'What trade-offs are acceptable between independence and operational complexity?',
        'How do you ensure resilience and observability in a microservices system?'
      ]
    },
    {
      title: 'Understanding Distributed Systems',
      link: 'https://www.amazon.fr/Understanding-Distributed-Systems-distributed-applications-ebook/dp/B09MSPG4F4',
      coverImage: 'understanding-distributed-systems.jpg',
      category: 'architecture & distributed systems',
      authors: 'Roberto Vitillo',
      keyConcepts: [
        'Distributed systems',
        'Network communication',
        'Scalability',
        'Observability',
        'Resilience'
      ],
      summary: [
        `This book aims to provide a solid and practical understanding of distributed systems, by
        explaining how the components of a distributed system interact, communicate, and
        exchange information in a consistent manner. It brings together the fundamental concepts
        around the structure and behaviors of distributed systems to help
        developers understand how everything fits together without getting lost in scattered details.`,

        `It is a good complement to the previous works on distributed systems: it helps consolidate
        one's understanding of the various fundamental concepts and link them together to build a
        practical and modern vision of distributed architectures.`,

        `The book covers essential aspects such as network communication, data consistency models,
        scalability, and fault tolerance. It emphasizes the trade-offs
        between different consistency models and the architectural implications of these choices, while
        providing practical benchmarks for designing reliable and performant systems.`
      ],
      questions: [
        'What characterizes a distributed system compared to a centralized one?',
        'How do you reason about trade-offs between consistency, availability, and performance?',
        'What communication and data models are commonly used in a distributed system?',
        'How do you make a distributed system observable, resilient, and maintainable?'
      ]
    },
    {
      title:
        'The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win',
      link: 'https://www.fnac.com/livre-numerique/a6123316/George-Spafford-The-Phoenix-Project',
      coverImage: 'the-phoenix-project.jpg',
      category: 'devops',
      authors: 'Gene Kim, Kevin Behr & George Spafford',
      keyConcepts: [
        'DevOps',
        'The Three Ways',
        'Continuous improvement',
        'Lean IT',
        'Theory of Constraints'
      ],
      summary: [
        `Presented as a business novel, this book illustrates the principles of the DevOps movement through
         the story of Bill Palmer, newly appointed VP of IT Operations at a struggling company.
         Tasked with saving a critical project — the "Phoenix Project" — that is behind schedule and over budget,
         Bill discovers that the technical problems are merely the visible face of a disorganized system.`,

        `Throughout the story, he learns to apply the **"Three Ways" of DevOps**: optimizing the flow of work
        from left to right to reduce lead times, creating fast feedback loops to detect and fix
        errors, and cultivating a culture of continuous learning and experimentation. These concepts help
        not only improve technical performance, but also transform collaboration between development,
        operations, and management. The narrative also highlights principles from lean and the theory of constraints.`,

        `This book is a good introduction to DevOps concepts and practices, particularly for those who prefer
        a narrative approach over a more technical presentation. It is accessible even for less technical profiles,
        helping them grasp the stakes of a DevOps transformation and the benefits it can bring to an organization.`
      ],
      questions: [
        'What DevOps lessons can be drawn from an IT transformation story?',
        'How do you improve workflow and reduce work in progress in IT?',
        'Why are culture and collaboration essential to a successful DevOps transformation?'
      ]
    },
    {
      title:
        'Continuous Delivery Pipelines: How To Build Better Software Faster',
      link: 'https://leanpub.com/cd-pipelines',
      coverImage: 'continuous-delivery-pipelines.jpg',
      category: 'devops',
      authors: 'David Farley',
      keyConcepts: [
        'CI/CD Pipelines',
        'Infrastructure as Code',
        'Automation',
        'Automated testing',
        'Continuous improvement'
      ],
      summary: [
        `This practical guide presents a step-by-step approach to designing, building, and improving continuous
         deployment pipelines in order to produce better quality software faster.`,

        `It is an accessible book that helps readers understand what a continuous deployment pipeline
        conceptually is and what is at stake, and identify best practices for building and improving it.`,

        `The book describes the essential components of a CI/CD pipeline, from code integration to deployment,
        including technical and acceptance testing, automation, and version management.
        It emphasizes best practices for minimizing human errors, accelerating deliveries, and
        ensuring fast feedback on every change.`
      ],
      questions: [
        'What are the essential steps of an effective CI/CD pipeline?',
        'How do you integrate automated testing and continuous integration into a CI/CD pipeline?',
        'What measurement points and rapid feedback are crucial for improving a pipeline?',
        'How do you reduce deployment risks while increasing release frequency?'
      ]
    },

    {
      title: 'Infrastructure as Code: Dynamic Systems for the Cloud Age',
      link: 'https://www.fnac.com/mp35618546/Infrastructure-As-Code-Managing-Servers-In-The-Cloud-Paperback?oref=7bee1f59-2541-1a5a-332a-8caebb1b57bb',
      coverImage: 'infrastructure-as-code.jpg',
      category: 'devops',
      authors: 'Kief Morris',
      keyConcepts: [
        'Infrastructure as Code',
        'Declarative models',
        'Infrastructure testing',
        'Provisioning',
        'Resilience'
      ],
      summary: [
        `This book presents the concept and foundations of infrastructure as code: how to define, version,
        test, and deliver infrastructure components using declarative or procedural languages,
        while adopting DevOps practices such as automation, repeatability, and reproducibility.
        It presents practices and patterns for provisioning and configuring systems, while avoiding
        the pitfalls of fragile or scattered infrastructures.`,

        `It is aimed at engineers already familiar with DevOps practices who want to implement an
        infrastructure as code approach to ease operations management and infrastructure deployment
        efficiently, in a cloud or on-premise context.`
      ],
      questions: [
        'What is infrastructure as code and what fundamental principles guide it?',
        'How do you version, test, and deploy infrastructure like code?',
        'What patterns and best practices help avoid fragile or scattered infrastructures?',
        'How do you integrate IaC into DevOps pipelines to ensure quality, resilience, and continuous improvement?'
      ]
    },
    {
      title: 'Engineering Management for the Rest of Us',
      link: 'https://www.fnac.com/livre-numerique/a17419970/Sarah-Drasner-Engineering-Management-for-the-Rest-of-Us#FORMAT=ebook%20(ePub)',
      coverImage: 'engineering-management-for-the-rest-of-us.jpg',
      category: 'engineering & management',
      authors: 'Sarah Drasner',
      keyConcepts: [
        'Leadership',
        'Communication',
        'Constructive feedback',
        'Prioritization',
        'Conflict management'
      ],
      summary: [
        `This book is aimed at engineers and technical managers who find themselves in a leadership role
        within an engineering team. It offers a practical and accessible approach to understanding
        the foundations of engineering management, with a focus on building trust-based relationships,
        clear communication, and a healthy team culture.`,

        `The book covers essential topics such as the importance of regular feedback, prioritization,
        cross-team collaboration, and conflict resolution. The author shares advice based on
        her personal management experience, emphasizing that effective management is not built on
        authority, but on empathy, active listening, and value alignment.`,

        `More than a theoretical manual, this book provides concrete tools and reflective prompts to
        help readers become better technical leaders. It addresses how to manage one's own work,
        structure meetings effectively, enable the growth of team members,
        and maintain personal balance while supporting the team.`
      ],
      questions: [
        'How do you build trust and psychological safety within your team?',
        'What practices help give and receive constructive feedback?',
        'How do you balance technical priorities with organizational goals?',
        'What interpersonal skills are essential for supporting an engineering team?'
      ]
    },
    {
      title:
        'Team Topologies: Organizing Business and Technology Teams for Fast Flow',
      link: 'https://www.fnac.com/livre-numerique/a18984171/Matthew-Skelton-Team-Topologies#FORMAT=ebook%20(ePub)',
      coverImage: 'team-topologies.jpg',
      category: 'engineering & management',
      authors: 'Matthew Skelton & Manuel Pais',
      keyConcepts: [
        'Team topologies',
        'Cognitive load',
        'Value stream',
        "Conway's Law",
        'Stream-aligned teams'
      ],
      summary: [
        `This book offers a pragmatic framework for designing and organizing technical and business teams
         to maximize efficiency and alignment around what truly matters: delivering quality work that brings
         real value. The authors present team structures and interaction modes
         specifically adapted to modern organizations, where autonomous teams must collaborate effectively.`,

        `The book introduces four fundamental team types — stream-aligned, enabling, complicated-subsystem,
         and platform teams — along with three interaction modes: collaboration, X-as-a-service,
         and facilitation. It also emphasizes managing cognitive load
         to avoid overload, clarify responsibilities, and reduce organizational friction.`,

        `The book is aimed at people managing technical teams, but also at all engineers who want
        to understand which organizational dynamics can foster or hinder their team's effectiveness.
        No technical prerequisites are required. However, prior experience working in a team within
        a company is recommended to fully grasp the challenges and benefits raised by the book.`
      ],
      questions: [
        'What are the four team types proposed, and when should each be used?',
        'How do you structure interactions between teams to maximize value flow?',
        'What is cognitive load and how do you optimize it within an organization?',
        "How do you apply Conway's Law to create an organization aligned with software architecture?"
      ]
    },
    {
      title:
        "Financial Intelligence: A Manager's Guide to Knowing What the Numbers Really Mean",
      link: 'https://www.fnac.com/a4890443/Karen-Berman-Financial-Intelligence-Revised-Edition',
      coverImage: 'financial-intelligence.jpg',
      category: 'engineering & finance',
      authors: 'Karen Berman & Joe Knight',
      keyConcepts: [
        'Financial analysis',
        'Cash flow',
        'Balance sheet',
        'Income statement',
        'ROI',
        'Budgeting'
      ],
      summary: [
        `Engineering also requires grasping the financial stakes of the projects one is involved in,
        whether as an entrepreneur or an employee. This book helps managers and technical leaders understand the figures
        and financial statements that underpin business decisions. It explains in a concrete and accessible way why financial
        data matters, how to read it, and how to use it to guide informed choices.`,

        `The book covers the main elements of financial statements such as the balance sheet,
        the income statement, and the cash flow statement. It details how to interpret
        these reports, what questions to ask to understand the financial health of an organization, and how to use
         financial ratios to assess performance and viability.`,

        `Aimed at managers, technical leaders, and anyone involved in strategic decision-making,
        this book emphasizes practical understanding of numbers rather than
        complex calculations. It provides benchmarks for discussing with financial stakeholders, evaluating
        investment proposals, and better aligning technical decisions with business objectives.`
      ],
      questions: [
        'What are the key elements of financial statements and how do you interpret them?',
        'How do you analyze a balance sheet, an income statement, and a cash flow statement?',
        "Which ratios are useful for assessing a company's performance?",
        'How do you use financial intelligence to guide strategic decisions?'
      ]
    },
    {
      title: 'Agile Estimating and Planning',
      link: 'https://www.fnac.com/a8446930/Cohn-Agile-Estimating-And-Planning?oref=ccf5173b-e3b4-b122-d7a5-dbc3c7eaf550',
      coverImage: 'agile-estimating-and-planning.jpg',
      category: 'agile & project management',
      authors: 'Mike Cohn',
      keyConcepts: [
        'Agile estimation',
        'Planning',
        'User stories',
        'Release planning',
        'Sprint',
        'Prioritization'
      ],
      summary: [
        `This book presents a coherent and pragmatic approach to estimating and planning in an agile context.
        The author shows how to create reliable estimates and realistic plans based on user stories,
        adapting practices to the changing realities of software projects.`,

        `The book covers key notions of estimation (size, effort), velocity, team capacity,
        and release and sprint planning. Mike Cohn provides concrete examples, estimation techniques
        (such as story points and planning poker), and advice on adjusting plans
        as projects evolve.`,

        `Aimed at developers, Scrum Masters, Product Owners, and agile team leads, the book
        emphasizes collaboration, transparency, and adaptation. It provides practical benchmarks
        for making informed planning decisions, balancing commitments, and managing risks
        while remaining aligned with business value.`
      ],
      questions: [
        'How do you effectively estimate user stories in an agile context?',
        'How do you use velocity to plan realistic releases?',
        'Which agile estimation tools and techniques are most effective?',
        'How do you adapt plans as projects evolve?'
      ]
    },
    {
      title: 'The Mythical Man-Month: Essays on Software Engineering',
      link: 'https://www.fnac.com/livre-numerique/a5100366/Frederick-P-Brooks-Jr-The-Mythical-Man-Month-Anniversary-Edition-Essays-On-Software-Engineering',
      coverImage: 'the-mythical-man-month.jpg',
      category: 'agile & project management',
      authors: 'Frederick P. Brooks Jr.',
      keyConcepts: [
        "Brooks's Law",
        'Essential vs. accidental complexity',
        'Conceptual integrity',
        'Schedule management'
      ],
      summary: [
        `Originally published in 1975, this book compiles lessons drawn from managing the IBM System/360 project.
        It is famous for formulating Brooks's Law: "Adding human resources to a late software project makes it later."
        The book explores the human and organizational dynamics specific to complex software projects.`,

        `Brooks distinguishes essential complexity (inherent to the problem) from accidental complexity
        (related to tools and processes), and emphasizes the importance of a system's conceptual integrity.
         He shows that architectural coherence must take precedence over multiplying contributors,
         and that communication represents an exponential cost in large teams.`,

        `Aimed at experienced project managers, architects, and engineers, the book offers enduring reflections
        on estimation, planning, and team organization. Despite its age, it remains
        an essential reference for understanding the structural limitations of software projects and
        the recurring pitfalls of technical management.`
      ],
      questions: [
        'Why can adding developers to a late project make things worse?',
        'What is the difference between essential and accidental complexity?',
        'Why is conceptual integrity crucial in software architecture?',
        'Which organizational lessons remain valid in modern projects?'
      ]
    },
    {
      title: 'Extreme Programming Explained: Embrace Change',
      link: 'https://www.fnac.com/a829169/Beck-Extreme-3D-programming-explained?oref=ac761453-a755-211e-3927-1eee1acca023',
      coverImage: 'extreme-programming-explained.jpg',
      category: 'agile & project management',
      authors: 'Kent Beck',
      keyConcepts: [
        'Pair Programming',
        'Refactoring',
        'Continuous integration',
        'TDD'
      ],
      summary: [
        `This foundational book presents the principles and practices of Extreme Programming (XP), an agile method centered
        on adapting to change and code quality. Kent Beck formalizes an approach based on short feedback cycles,
        close collaboration with the customer, and strong technical discipline.`,

        `The book introduces the emblematic practices of XP such as Test-Driven Development (TDD),
        pair programming, continuous integration, continuous refactoring, and frequent delivery.
        It explains how these practices are organized around core values — communication, simplicity,
        feedback, courage, and respect — to create a coherent and sustainable system.`,

        `The book is more suited to engineers already familiar with agile concepts and software development practices.
        It shows how to adopt a posture of continuous improvement and how to build an environment that fosters
        learning and quality.
        More than a simple method, XP is presented as a cultural and technical framework aimed at reducing risks
        while maximizing delivered value.`
      ],
      questions: [
        'What are the core values of Extreme Programming?',
        'How do TDD and refactoring improve software quality?',
        'Why is rapid feedback central to XP?',
        'How do you integrate XP into a modern agile organization?'
      ]
    },

    {
      title:
        "Don't Make Me Think, Revisited: A Common Sense Approach to Web Usability",
      link: 'https://www.fnac.com/livre-numerique/a6840019/Steve-Krug-Don-t-Make-Me-Think-Revisited#FORMAT=ebook%20(ePub)',
      coverImage: 'don-t-make-me-think-revisited.jpg',
      category: 'ux/ui design',
      authors: 'Steve Krug',
      keyConcepts: [
        'Usability',
        'Intuitive navigation',
        'User-centered design',
        'Visual scanning',
        'Visual hierarchy',
        'Usability testing',
        'UX conventions',
        'Simplicity',
        'Accessibility'
      ],
      summary: [
        `This book offers a pragmatic approach to UX/UI for web and digital interfaces,
         based on a simple principle: don't make the user think. The author explains that
          pages should be obvious, self-explanatory, and minimize the cognitive effort required
           to complete a task.`,

        `The book draws on behavioral observations — users scan rather than read, they choose the first
         reasonable option and "muddle through" rather than analyze —
          to formulate design techniques. These include: clear visual hierarchy, explicit labels,
           consistent navigation, elimination of distractions, and removal of unnecessary words.`,

        `Steve Krug also emphasizes the importance of usability testing from the earliest stages, with
        simple and low-cost techniques to quickly identify design problems. Accessible
        yet rich in insight, this book is aimed at developers, designers, and anyone
        involved in creating intuitive and effective interfaces.`
      ],
      questions: [
        'What are the golden rules of an interface that "doesn\'t make you think"?',
        'Why do users scan, and how can this behavior be leveraged in design?',
        'How do you structure navigation and visual hierarchy to reduce friction?',
        'How do you conduct simple usability tests to quickly improve an interface?'
      ]
    },
    {
      title: 'Test-Driven Development: By Example',
      link: 'https://www.fnac.com/livre-numerique/a19431560/Kent-Beck-Test-Driven-Development#FORMAT=ebook%20(ePub)',
      coverImage: 'test-driven-development.jpg',
      category: 'test & specification',
      authors: 'Kent Beck',
      keyConcepts: [
        'Test-Driven Development',
        'Red-Green-Refactor',
        'Unit testing',
        'Refactoring'
      ],
      summary: [
        `This foundational book introduces and formalizes the practice of Test-Driven Development (TDD), a discipline
        consisting of writing automated tests before production code. Kent Beck presents
        the "Red-Green-Refactor" cycle: write a failing test, write the minimum code to make it pass,
        then refactor to improve the design.`,

        `Through progressive examples (notably the implementation of a financial calculation engine),
        the author shows how TDD influences not only code quality
        but also software design itself. Tests become a
        design tool for producing more modular, simpler,
        and more easily maintainable code.`,

        `Practicing TDD does not require being a particularly experienced developer.
        Basic algorithmic and programming knowledge is however recommended to follow
        the examples and grasp the challenges presented by the book.
        The book emphasizes discipline,
         simplicity, and rapid feedback. It illustrates how TDD reduces regressions,
         improves confidence in the code, and fosters emergent design guided by real needs
         rather than premature abstractions.`
      ],
      questions: [
        'What is the Red-Green-Refactor cycle and how do you apply it effectively?',
        'How does TDD influence software design?',
        'What are the common pitfalls when adopting TDD?',
        'How do you balance development speed and quality through testing?'
      ]
    },
    {
      title:
        'BDD in Action: Behavior-Driven Development for the Whole Software Lifecycle',
      link: 'https://www.fnac.com/mp39559129/BDD-in-Action-Behavior-driven-development-for-the-whole-software-lifecycle-Version-Originale?oref=950f0630-1ab5-e61d-99de-b61ecb1570ff',
      coverImage: 'BDD-in-action.jpg',
      category: 'test & specification',
      authors: 'John Ferguson Smart',
      keyConcepts: [
        'Behavior-Driven Development',
        'User stories',
        'Business-technical collaboration',
        'Living documentation'
      ],
      summary: [
        `This book introduces and formalizes the practice of Behavior-Driven Development (BDD),
        an extension of TDD centered on collaboration between developers, testers, and business
        stakeholders. The goal is to create living specifications from scenarios
        understandable by everyone.`,

        `The book explains how to transform user stories into concrete scenarios, which
        serve both as automated tests and living documentation. It shows how to structure
        tests to be readable, reliable, and maintainable.`,

        `This book is aimed at developers already familiar with TDD. It broadens the concept of testing by
         emphasizing communication and shared understanding. It shows how BDD reduces ambiguities, promotes
        rapid feedback, and enables the delivery of software aligned with business needs, while
        facilitating code maintenance and evolution.`
      ],
      questions: [
        'How does BDD improve collaboration between technical and business teams?',
        'How do you transform user stories into concrete and automatable scenarios?',
        'What tools and languages are used for BDD and why?',
        'How does BDD enable the production of living and reliable documentation?'
      ]
    },
    {
      title:
        'Specification by Example: How Successful Teams Deliver the Right Software',
      link: 'https://www.fnac.com/mp50395920/Specification-by-Example-by-Gojko-Adzic?oref=6100596d-60f8-ca86-5cbf-727f98133285',
      coverImage: 'specification-by-example.jpg',
      category: 'test & specification',
      authors: 'Gojko Adzic',
      keyConcepts: [
        'Specification by Example',
        'BDD',
        'Acceptance Tests',
        'Living Documentation'
      ],
      summary: [
        `This book presents the Specification by Example approach, a collaborative practice aimed at defining
        software features from concrete examples rather than abstract specifications. The goal
        is to reduce ambiguities and align technical and business teams around a shared understanding.`,

        `The book shows how to transform requirements into structured examples, then into automated acceptance
        tests that serve both as functional validation and living documentation.
        This approach, close to Behavior-Driven Development, enables short feedback cycles
        and limits misunderstandings between developers, testers, and business stakeholders.`,

        `This is an interesting read as a complement to works on TDD and BDD approaches. It offers
        concrete practices for introducing specification by example into an organization. It emphasizes
        collaboration, simplicity of scenarios, and progressive automation in order to build
        a system that is more reliable, better understood, and more evolvable.`
      ],
      questions: [
        'How do you write specifications from concrete examples?',
        'How does Specification by Example differ from traditional specifications?',
        'How do you transform business examples into automated acceptance tests?',
        'How do you turn automated tests into living documentation of the system?'
      ]
    },
    {
      title:
        'Security Engineering: A Guide to Building Dependable Distributed Systems',
      link: 'https://www.fnac.com/livre-numerique/a15516724/Ross-Anderson-Security-Engineering#FORMAT=ebook%20(ePub)',
      coverImage: 'security-engineering.jpg',
      category: 'cybersecurity',
      authors: 'Ross Anderson',
      keyConcepts: [
        'Applied cryptography',
        'Authentication',
        'Access control',
        'Network security',
        'Distributed systems security',
        'Application security'
      ],
      summary: [
        `This book is a reference in security engineering, covering the principles, threats, and mechanisms
        needed to build reliable and attack-resistant systems. Ross Anderson explores security
        at different levels — from embedded systems to distributed infrastructures — combining technical rigor
        with concrete case studies.`,

        `The book addresses fundamental topics such as applied cryptography, authentication, access control,
        network and application security. It also analyzes common threats, attack vectors,
         and countermeasures, emphasizing the importance of understanding adversaries to design
         secure architectures.`,

        `This is a dense and fairly technical book, primarily aimed at experienced engineers who want to
        deepen their knowledge in security.
        The book emphasizes security integrated
        from the design phase (security by design). It provides examples, threat models, and concrete recommendations
        for applying effective security practices in complex or distributed systems.`
      ],
      questions: [
        'What is security by design and how do you integrate it from the start?',
        'Which cryptographic mechanisms are essential for ensuring confidentiality and integrity?',
        'How do you model and counter threats in a distributed system?',
        'What are the key elements of authentication and access control?'
      ]
    },
    {
      title: 'Hacking: The Art of Exploitation',
      link: 'https://www.fnac.com/a3701679/Erickson-J-Hacking',
      coverImage: 'hacking.jpg',
      category: 'cybersecurity',
      authors: 'Jon Erickson',
      keyConcepts: [
        'Shellcode',
        'Buffer overflow',
        'Reverse engineering',
        'Applied cryptography',
        'Debugging',
        'Network security',
        'Active attacks'
      ],
      summary: [
        `This book explores computer security from the attacker's perspective, combining theory, concrete examples, and code.
        Rather than a simple security manual, it shows how vulnerabilities actually work and how
         they can be exploited, allowing the reader to understand the low-level mechanisms underlying
          modern attacks.`,

        `The book covers topics such as buffer overflows, shellcode generation and execution,
        reverse engineering, debugging, and protocol analysis and network vulnerability techniques.
        It includes C and assembly code to show how attacks are built and executed.`,

        `The book uses concrete examples on low-level code (C). The basics of the programming language are
        explained at the beginning of the book, with a particular focus on memory management, making it a good complement
        to a first introduction to low-level languages. The book remains technically demanding overall.`
      ],
      questions: [
        'How does a buffer overflow attack work at the machine level?',
        'What is shellcode and how is it generated and executed?',
        'How do you use debugging and reverse engineering to analyze vulnerabilities?',
        'What network exploitation techniques are covered and how do you understand them?'
      ]
    }
  ]
}
