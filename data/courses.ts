import { Course } from '@/types/course';

export const courses: Course[] = [
  {
    slug: 'ui-ux-design-pune',
    title: 'UI/UX Masterclass',
    subtitle: 'Master UI/UX design with practical projects and placement support',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tableOfContents: [
      { title: 'What is UI/UX?', id: 'what-is-ui-ux' },
      { title: 'Tools You Will Learn', id: 'tools' },
      { title: 'Career Scope', id: 'career-scope' },
      { title: 'Average Salary', id: 'average-salary' },
      { title: 'Join Prime Point Academy', id: 'join-academy' },
      { title: 'Why Choose Prime Point Academy?', id: 'why-choose' },
      { title: 'Start Your UI/UX Career', id: 'start-career' },
    ],
    sections: [
      {
        id: 'what-is-ui-ux',
        heading: 'What is UI/UX?',
        content: [
          {
            type: 'paragraph',
            text: 'UI/UX Design is an important part of creating visually attractive and user-friendly digital experiences. The UI design is the front-end of the whole website or application, it is accessed by users through the interaction of visual elements of a platform (buttons, colors, typography, icons, layout, etc.). UX design, on the other hand, takes care of the user’s experience, making sure that it’s smooth and engaging. Our UI UX design course in Pune covers everything from wireframing to prototyping, including all industry required skills so the students can master them and easily secure their dream job in the UI/UX design industry.',
          },
        ],
      },
      {
        id: 'tools',
        heading: 'Tools You Will Learn in the UI UX Course in Pune',
        content: [
          {
            type: 'paragraph',
            text: 'Our UI and UX design courses in Pune provide project based UI UX training using industry-standard tools such as:',
          },
          {
            type: 'list',
            items: [
              '**Figma** – The most leading tool for UI/UX design and prototyping.',
              '**Adobe XD** – The best tool to create beautiful UI and UX designs in a very short time.',
              '**Sketch** – A powerful tool for web and mobile UI design.',
              '**Adobe Photoshop & Illustrator** – Essential tools for graphics and icon design.',
              '**InVision** – For interactive prototyping and collaboration.',
              '**HTML & CSS Basics** – Understanding frontend structure for UI designers.',
            ],
          },
        ],
      },
      {
        id: 'career-scope',
        heading: 'Career Scope of UI/UX Designing',
        content: [
          {
            type: 'paragraph',
            text: 'Digitalisation is growing rapidly. Because of that, the demand for UI/UX designers is continuously increasing in various industries. If you want to become one of the high demand professionals of this digital world, learn our UI UX course in Pune and grab the various high paying jobs, such as:',
          },
          {
            type: 'list',
            items: [
              '**UI Designer** – Focus on aesthetics and visual design.',
              '**UX Designer** – Work on user journey and experience optimization.',
              '**Product Designer** – Combine UI and UX for product development.',
              '**Interaction Designer** – Specialize in motion graphics and animations.',
              '**Web & App Designer** – Design user-friendly web and mobile applications',
            ],
          },
        ],
      },
      {
        id: 'average-salary',
        heading: 'What is the Average Salary of a UI/UX Designer?',
        content: [
          {
            type: 'paragraph',
            text: 'In India, the salary of a UI UX designer totally depends on their skills, experience and the job location.',
          },
          {
            type: 'list',
            items: [
              'The Salary of a fresher UI/UX Designer is around ₹4-6 LPA.',
              'The Salary of a experienced UI/UX Designer is around ₹6-12+ LPA.',
              'The Salary of UI/UX Designer who has more than 5 to 7 years of experience is around ₹12-20+ LPA.',
            ],
          },
          {
            type: 'paragraph',
            text: 'By joining our UI UX design course in Pune with placement assistance, we guarantees that you will get all the necessary knowledge and skills that will make you ready for the industry and eventually help you to get high paying job of the IT industry.',
          },
        ],
      },
      {
        id: 'join-academy',
        heading: 'Join Prime Point Academy - Best UI UX Design Classes in Pune',
        content: [
          {
            type: 'paragraph',
            text: 'Looking for the best UI UX design course in Pune? At Prime Point Academy, we provide:',
          },
          {
            type: 'list',
            items: [
              '**Expert Trainers** – Learn from industry professionals.',
              '**Hands-on Training** – Work on live projects and real-world applications.',
              '**Certification Assistance** – Boost your resume with a professional UI/UX certification.',
              '**Job-Oriented Syllabus** – Learn design thinking, wireframing, usability testing, and prototyping.',
              '**Placement Support** – 100% placement assistance to secure top UI/UX job roles.',
            ],
          },
        ],
      },
      {
        id: 'why-choose',
        heading: 'Why Choose Prime Point Academy?',
        content: [
          {
            type: 'list',
            items: [
              '**Affordable UI UX Design Course Fees in Pune** – Flexible payment options available.',
              '**Industry-Standard Tools**: Hands-on learning with top UI/UX tools.',
              '**Project-Based Learning**: Work on real-world projects.',
              '**Small Batch Size**: Personalized training and mentorship.',
              '**Career Guidance**: Resume building, interview preparation, and soft skills training.',
            ],
          },
        ],
      },
      {
        id: 'start-career',
        heading: 'Start Your UI UX Design Career with Prime Point Academy',
        content: [
          {
            type: 'paragraph',
            text: 'If you’re looking to start a career in UI/UX design, then our UI UX training in Pune is the best choice for you. With our job oriented syllabus, live projects and 100% placement assistance, we will help you to create a solid foundation in UI/UX designing. Join Prime Point Academy today and become a certified UI/UX professional!',
          },
        ],
      },
    ],
    duration: '6 Months',
    difficulty: 'Beginner',
    price: 299,
    rating: 4.8,
    studentsEnrolled: 12450,
    bestseller: true,
    testimonials: [
      {
        id: 1,
        name: "Rohan Sharma",
        feedback:
          "The UI UX course in Pune at Prime Point Academy was an amazing experience! The trainers provided hands-on training with real projects, and I learned Figma, Adobe XD, and Sketch. Thanks to their placement assistance, I landed a job as a UI/UX designer in a reputed company.",
        rating: 5,
      },
      {
        id: 2,
        name: "Pooja Vasave",
        feedback:
          "If you’re looking for the best UI UX design course in Pune, then stop the search here! Prime Point Academy provides a well-structured and job oriented syllabus, industry-relevant projects, and complete placement support. The UI UX design course in Pune with placement helped me get hired within weeks.",
        rating: 5,
      },
      {
        id: 3,
        name: "Amit Deshmukh",
        feedback:
          "I joined UI UX training in Pune at Prime Point Academy, and it was a game-changer. The faculty is experienced, and the UI UX design classes in Pune focus on practical knowledge. I highly recommend this institute for aspiring UI/UX designers.",
        rating: 5,
      },
      {
        id: 4,
        name: "Sneha Patil",
        feedback:
          "I was concerned about the UI UX design course fees in Pune, but Prime Point Academy offered an affordable and high-quality training program. The projects, mentorship, and career guidance were excellent. I secured a high-paying UI/UX job thanks to them.",
        rating: 5,
      },
      {
        id: 5,
        name: "Vikram Desai",
        feedback:
          "I took UI UX classes in Pune at Prime Point Academy, and the experience was fantastic. The trainers focus on every student, ensuring we learn UI/UX concepts thoroughly. Their placement support helped me get my first UI/UX job.",
        rating: 5,
      },
    ],
    FAQItem: [
      {
        question: "What is the duration of the UI UX Design Course in Pune?",
        answer:
          "The duration of our UI UX course in Pune is 6 months. It includes 3 months of training and 3 months of internship.",
      },
      {
        question: "What are the UI UX Design Course Fees in Pune?",
        answer:
          "The UI UX design course fees in Pune are different for different structures of the course you take and they also vary by different institutes. Contact us to know more about fee details and EMI options.",
      },
      {
        question: "Do you offer UI UX training in Pune with placement assistance?",
        answer:
          "Yes! Our UI UX design course in Pune with placement has been designed in such a manner that we can give you 100% placement assistance.",
      },
      {
        question: "Do I need prior design experience to join the UI UX Design Course in Pune?",
        answer:
          "No prior experience is needed! Our UI UX training in Pune starts from basics and progresses to advanced levels.",
      },
      {
        question: "How can I join in UI UX classes in Pune at Prime Point Academy?",
        answer:
          "You can join by physically visiting our institute in Pune, calling us, or applying online through our website.",
      },
    ]
  },
  {
    slug: 'full-stack',
    title: 'Full Stack Developer Course in Pune',
    subtitle: 'Become an expert in front-end and back-end development with hands-on training and placement support',
    image:
      'data:image/jpeg;base64,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',
    tableOfContents: [
      { title: 'What is Full Stack Developer Course in Pune?', id: 'what-is-full-stack' },
      { title: 'Demand of Full Stack Developers in the IT Industry', id: 'demand' },
      { title: 'Why Join Full Stack Course in Pune?', id: 'why-join' },
      { title: 'Join One of the Best Full Stack Classes in Pune', id: 'join-classes' },
      { title: 'Full Stack Developer Course in Pune with Placement', id: 'placement' },
      { title: 'Eligibility For Full Stack Development Course in Pune', id: 'eligibility' },
      { title: 'Career Opportunities After Completing Full Stack Training in Pune', id: 'career-opportunities' },
      { title: 'Why Choose Prime Point Academy?', id: 'why-choose' },
      { title: "Start Your IT Career with Prime Point Academy's Industry-oriented Training", id: 'start-career' },
      // { title: 'Student Reviews', id: 'student-reviews' },
      // { title: 'FAQs', id: 'faqs' },
    ],
    sections: [
      {
        id: 'what-is-full-stack',
        heading: 'What is Full Stack Developer Course in Pune?',
        content: [
          {
            type: 'paragraph',
            text: 'A full stack developer is a professional in the Information Technology sector who can develop front-end and back-end of application or website as well as manage the complete project. A full stack developer knowledgeable with technologies such as HTML, CSS, JavaScript, React, Node.js, MongoDB, SQL, and many others. Our full stack developer course in Pune will equip you with comprehensive skills in both front-end and back-end development along with database technologies.',
          },
        ],
      },
      {
        id: 'demand',
        heading: 'Demand of Full Stack Developers in the IT Industry',
        content: [
          {
            type: 'paragraph',
            text: 'In IT industries, Full Stack Developers are always in high demand. IT companies are on the lookout for individuals who can manage all processes of development. Full Stack Developers are valuable employees to the company due to their ability to use and implement both front-end and back-end technologies.',
          },
        ],
      },
      {
        id: 'why-join',
        heading: 'Why Join Full Stack Course in Pune?',
        content: [
          {
            type: 'paragraph',
            text: "Pune is becoming a leading IT hub in India. In last 10 years, many startups and reputed IT companies have opened their offices in Pune's various IT parks. These IT companies have a high demand of full stack developers. Being in Pune, you get opportunities to network with professionals, internships, and placement in these companies.",
          },
          {
            type: 'paragraph',
            text: "The Full Stack Course in Pune by Prime Point Academy will prepare you with required technical skills along with soft skills. It will help to increase your self confidence so you can easily crack all the rounds of your job interview. We have strong connections with industry HRs and recruiters. With the help of those connections, we will provide placement opportunities in reputed companies. Hurry up and grab this opportunity of becoming demanding professional. Contact us today for a free demo session of our full stack developer course in Pune and begin your journey to becoming a Full Stack developer!",
          },
        ],
      },
      {
        id: 'join-classes',
        heading: 'Join One of the Best Full Stack Classes in Pune',
        content: [
          {
            type: 'paragraph',
            text: 'At Prime Point Academy, our full stack developer classes in Pune provide hands-on experience with React, Node.js, Express.js, MongoDB, MySQL, and more. You will also learn industry-required tools and frameworks.',
          },
        ],
      },
      {
        id: 'placement',
        heading: 'Full Stack Developer Course in Pune with Placement',
        content: [
          {
            type: 'paragraph',
            text: 'Our full stack developer course in Pune with placement assistance makes sure that our students receive proper training, personal guidance of resume building and interview preparation through mock interviews to get their dream IT job with good salary.',
          },
        ],
      },
      {
        id: 'eligibility',
        heading: 'Eligibility For Full Stack Development Course in Pune',
        content: [
          {
            type: 'list',
            items: [
              'Freshers who are looking to start their careers in IT industry as full stack developer.',
              'Working professionals looking to upskill for career growth and better career opportunities.',
              'Business owners and freelancers who want to develop and manage complete applications or websites',
            ],
          },
        ],
      },
      {
        id: 'career-opportunities',
        heading: 'Career Opportunities After Completing Full Stack Training in Pune',
        content: [
          {
            type: 'list',
            items: [
              'Full Stack Developer',
              'Frontend Developer',
              'Backend Developer',
              'Web Developer',
              'Software Developer',
              'Software Engineer',
            ],
          },
        ],
      },
      {
        id: 'why-choose',
        heading: 'Why Choose Prime Point Academy?',
        content: [
          {
            type: 'list',
            items: [
              '**Industry-Oriented Syllabus** – Learn the latest technologies.',
              '**Practical Training** – Work on live projects.',
              '**Affordable Course Fees** – Budget-friendly learning.',
              '**Flexible Batches** – Weekday and weekend options available.',
              '**100% Placement Assistance** – Helping you get placed in top IT companies.',
            ],
          },
        ],
      },
      {
        id: 'start-career',
        heading: "Start Your IT Career with Prime Point Academy's Industry-oriented Training",
        content: [
          {
            type: 'paragraph',
            text: 'Looking to begin your career in Full Stack Development? Join Prime Point Academy today and become an expert in full stack development with hands-on training and real-world projects.',
          },
        ],
      },
      // testimonials: [
      //         {
      //           id: 1,
      //           name: 'Rohit Patil',
      //           feedback:
      //             'The full stack developer course in Pune at Prime Point Academy provided me with real-time training and hands-on projects. The placement support helped me secure a job as a Full Stack Developer in an IT company. Highly recommended!',
      //           rating: 5,
      //         },
      //         {
      //           id: 2,
      //           name: 'Amit Valvi',
      //           feedback:
      //             'If you are looking for full stack classes in Pune, Prime Point Academy is the best choice. The trainers are industry experts, and the syllabus is job-oriented. I got placed in a reputed company after completing my training.',
      //           rating: 5,
      //         },
      //         {
      //           id: 3,
      //           name: 'Priya Desai',
      //           feedback:
      //             'I enrolled in the full stack developer course in Pune with placement, and it was the best decision. The training covered all technologies in-depth, and the job support was excellent. I landed my dream job as a Web Developer.',
      //           rating: 5,
      //         },
      //         {
      //           id: 4,
      //           name: 'Pankaj Patil',
      //           feedback:
      //             'Prime Point Academy offers the best online full stack training in Pune. The live sessions, recorded lectures, and mentor support made learning easy and effective. Thanks to the institute, I now work as a Software Engineer.',
      //           rating: 5,
      //         },
      //         {
      //           id: 5,
      //           name: 'Bhushan Marathe',
      //           feedback:
      //             'I joined the full stack java developer course in Pune at Prime Point Academy. My entire learning experience was amazing. The practical training with live projects and experienced trainers helped improve my coding skills.',
      //           rating: 5,
      //         },
      //       ],
    ],
    duration: '6 Months',
    difficulty: 'Beginner',
    price: 399,
    rating: 4.7,
    studentsEnrolled: 9800,
    bestseller: true,
    testimonials: [
      {
        id: 1,
        name: 'Rohit Patil',
        feedback:
          'The full stack developer course in Pune at Prime Point Academy provided me with real-time training and hands-on projects. The placement support helped me secure a job as a Full Stack Developer in an IT company. Highly recommended!',
        rating: 5,
      },
      {
        id: 2,
        name: 'Amit Valvi',
        feedback:
          'If you are looking for full stack classes in Pune, Prime Point Academy is the best choice. The trainers are industry experts, and the syllabus is job-oriented. I got placed in a reputed company after completing my training.',
        rating: 5,
      },
      {
        id: 3,
        name: 'Priya Desai',
        feedback:
          'I enrolled in the full stack developer course in Pune with placement, and it was the best decision. The training covered all technologies in-depth, and the job support was excellent. I landed my dream job as a Web Developer.',
        rating: 5,
      },
      {
        id: 4,
        name: 'Pankaj Patil',
        feedback:
          'Prime Point Academy offers the best online full stack training in Pune. The live sessions, recorded lectures, and mentor support made learning easy and effective. Thanks to the institute, I now work as a Software Engineer.',
        rating: 5,
      },
      {
        id: 5,
        name: 'Bhushan Marathe',
        feedback:
          'I joined the full stack java developer course in Pune at Prime Point Academy. My entire learning experience was so amazing. The practical training with live projects and experienced trainers helped to improve my coding skills.',
        rating: 5,
      },
    ],
    FAQItem: [
      {
        question: 'What is the duration of the Full Stack Developer Course in Pune?',
        answer:
          'The duration of our full stack development course in Pune is 6 months. It includes 3 months of training and 3 months of internship.It totally depends on batch type and student learning pace.',
      },
      {
        question: 'What are the Full Stack Developer Course Fees in Pune?',
        answer:
          'The fee structure of full stack developer course fees in Pune differs from institute to institute as well as the course you take. Contact us to know more about fee details and EMI options..',
      },
      {
        question: 'Do you offer placement assistance for the Full Stack Course in Pune?',
        answer:
          'Yes! We offer 100% placement assistance, helping students secure jobs in top IT firms.',
      },
      {
        question: 'Can I join the course without prior programming knowledge?',
        answer:
          'Yes! Our full stack developer classes in Pune start from the basics and progress to advanced levels.',
      },
      {
        question: 'How can I enroll in the Full Stack Developer Course?',
        answer:
          'You can contact us using our website, call us, or visit our institute in person!',
      },
    ]
  },
  {
    slug: 'java-programming-mastery1',
    title: 'Java Programming Course in Pune',
    subtitle: 'Master Java from basics to advanced with practical projects and placement support',
    image:
      'https://5.imimg.com/data5/QQ/CT/AO/GLADMIN-25397883/selection-064-500x500.png',
    tableOfContents: [
      { title: 'Introduction to Java Classes in Pune', id: 'introduction' },
      { title: 'What Will You Learn from Our Java Programming Course in Pune?', id: 'what-you-will-learn' },
      { title: 'Why You Must Learn Java Training Course in Pune?', id: 'why-learn-java' },
      { title: 'What to Expect From Java Training in Pune?', id: 'what-to-expect' },
      { title: 'Advantages of Java Certification in Pune', id: 'advantages' },
      { title: 'Benefits of Taking Java Coaching in Pune', id: 'benefits' },
      { title: 'Online Java Training in Pune', id: 'online-training' },
      { title: 'Eligibility Criteria to Join Java Course in Pune', id: 'eligibility' },
      { title: 'Why Choose Prime Point Academy for Java Coaching Classes in Pune?', id: 'why-choose' },
      // { title: 'Student Reviews', id: 'student-reviews' },
      // { title: 'FAQs', id: 'faqs' },
    ],
    sections: [
      {
        id: 'introduction',
        heading: 'Introduction to Java Classes in Pune',
        content: [
          {
            type: 'paragraph',
            text: 'Java programming language is one of the strongest and popular programming languages across the globe. No matter whether you are a fresher or you have years of experience, if you learn Java, you will get multiple career opportunities. At Prime Point Academy, we have Java classes in Pune that include the basics to advanced programming concepts. In our training period, we make sure that our students learn each and every concept properly and become skilled professionals.',
          },
        ],
      },
      {
        id: 'what-you-will-learn',
        heading: 'What Will You Learn from Our Java Programming Course in Pune?',
        content: [
          {
                type: 'paragraph',
                text: 'Our Java programming course in Pune offers comprehensive knowledge of:',
          },
          {
            type: 'list',
            items: [
              'Core Java concepts: OOPs, data types, and control statements.',
              'Advanced Java: Multithreading, collections, and exception handling.',
              'Database connectivity using JDBC.',
              'Web application development with Servlets and JSP.',
              'Frameworks like Spring and Hibernate.',
              'Real-world project development.',
            ],
          },
        ],
      },
      {
        id: 'why-learn-java',
        heading: 'Why You Must Learn Java Training Course in Pune?',
        content: [
          {
            type: 'list',
            items: [
              '**High Demand** – The demand for Java developers is very high among IT companies, who are always looking to recruit skilled Java developers to join their team.',
              '**Versatility** – Java is a programming language that is used to develop websites, mobile apps, and enterprise applications.',
              '**Strong Community** Support – A tremendous network of developers contributes to Java’s constant evolution.',
              '**Career Growth** – A career in Java can lead you to various job profiles such as Java Developer, Software Engineer, Web Developer, and Backend Developer.',
            ],
          },
        ],
      },
      {
        id: 'what-to-expect',
        heading: 'What to Expect From Java Training in Pune?',
        content: [
          {
            type: 'list',
            items: [
              'Expert guidance from industry professionals.',
              'Practical learning with hands-on projects.',
              'Real-world case studies to enhance problem-solving skills.',
              'Placement assistance with resume-building sessions.',
            ],
          },
        ],
      },
      {
        id: 'advantages',
        heading: 'Advantages of Java Certification in Pune',
        content: [
          {
            type: 'list',
            items: [
              '**Boosts Your Resume** – Certification validates your skills for employers.',
              '**Improves Your Technical Knowledge** – Learn technical skills through practice on live projects.',
              '**Increases Job Opportunities** –  A Java certificate in Pune offers you better job offers.',
              '**Higher Salary Packages** – Companies easily hire certified Java developers and offer more salary than non-certified developers.',
            ],
          },
        ],
      },
      {
        id: 'benefits',
        heading: 'Benefits of Taking Java Coaching in Pune',
        content: [
          {
            type: 'list',
            items: [
              'Experienced Faculty – Learn from expert Java professionals.',
              'Structured Learning Path – From basics to advanced concepts.',
              'Flexible Batches – Weekday and weekend options available.',
              'Real-time Project Work – Gain practical industry experience.',
              'Mock Interviews & Placement Assistance – Get job-ready with our Java coaching in Pune.',
            ],
          },
        ],
      },
      {
        id: 'online-training',
        heading: 'Online Java Training in Pune',
        content: [
          {
            type: 'paragraph',
            text: 'Can’t attend physical classes? No problem! We know that relocating to Pune or finding time to attend classes physically might be challenging for you. Considering this, we launched our online Java course. In our online Java training in Pune, you will get live interactive sessions, recorded lectures, and personalized mentorship.',
          },
        ],
      },
      {
        id: 'eligibility',
        heading: 'Eligibility Criteria to Join Java Course in Pune',
        content: [
          {
            type: 'list',
            items: [
              'Beginners who want to start a career in Java development.',
              'Students and fresh graduates looking for job opportunities.',
              'Professionals who want to enhance their programming skills.',
              'Anyone passionate about Java programming.',
            ],
          },
        ],
      },
      {
        id: 'why-choose',
        heading: 'Why Choose Prime Point Academy for Java Coaching Classes in Pune?',
        content: [
          {
            type: 'list',
            items: [
              '**Comprehensive Curriculum**: Core Java, Advanced Java, Spring, and Hibernate plus many more are covered.',
              '**Industry Experts as Trainers**: Learn from industry experienced trainers.',
              '**Live Projects & Assignments**: Practical learning by working on live projects.',
              '**Affordable Fees**: We offer one of the most affordable Java course fees in Pune.',
              '**100% Placement Assistance**: Our 100% placement assistance will help you to get your dream job with a good salary.',
            ],
          },
        ],
      },
      // {
      //   id: 'student-reviews',
      //   heading: 'Student Reviews',
      //   content: [
      //     {
      //       type: 'testimonial',
      //       testimonials: [
      //         {
      //           id: 1,
      //           name: 'Vishal Jagtap',
      //           feedback:
      //             'Prime Point Academy provides the best Java classes in Pune. My trainers explain concepts in a very simple way, and practical projects helped me gain real-world knowledge. I secured a job as a Java Developer after completing the course.',
      //           rating: 5,
      //         },
      //         {
      //           id: 2,
      //           name: 'Manish Bansode',
      //           feedback:
      //             'I opted for a Java certification in Pune at Prime Point Academy, and the course structure, projects, and placement assistance helped me land my first job as a Software Engineer. Highly recommended!',
      //           rating: 5,
      //         },
      //         {
      //           id: 3,
      //           name: 'Vikas Patel',
      //           feedback:
      //             'The Java coaching in Pune at Prime Point Academy was an excellent experience. The trainers provided in-depth knowledge and practical training. The placement team also assisted with interview preparation and job opportunities.',
      //           rating: 5,
      //         },
      //         {
      //           id: 4,
      //           name: 'Neha Mishra',
      //           feedback:
      //             'I chose the online Java training in Pune due to my busy schedule. The live sessions, recorded lectures, and mentor support made learning very convenient. I got placed in a reputed IT company.',
      //           rating: 5,
      //         },
      //         {
      //           id: 5,
      //           name: 'Mahesh Kulkarni',
      //           feedback:
      //             'Joining the Java training course in Pune at Prime Point Academy was a turning point in my career. The practical, project-based approach boosted my confidence in coding and helped me secure a great job.',
      //           rating: 5,
      //         },
      //       ],
      //     },
      //   ],
      // },
      // {
      //   id: 'faqs',
      //   heading: 'FAQs',
      //   content: [
      //     {
      //       type: 'list',
      //       items: [
      //         'What is the duration of the Java Course in Pune? – The course runs for 6 to 7 months, including 3 months of training and 3 months of internship (subject to batch type and student learning speed).',
      //         'Do you provide placement assistance after Java training in Pune? – Yes, we offer 100% placement assistance to help you secure a job in an IT company.',
      //         'Can I enroll in Java coaching classes in Pune without prior coding experience? – Yes, our course starts from the basics and progresses to advanced levels.',
      //         'What are the Java course fees in Pune? – The fees depend on the mode of training. Please contact us for detailed fee information.',
      //         'Is online Java training in Pune as effective as classroom training? – Yes, our online training includes live interactive classes, live projects, and personal mentor support for an effective learning experience.',
      //       ],
      //     },
      //   ],
      // },
    ],
    duration: '6-7 Months',
    difficulty: 'Beginner',
    price: 349,
    rating: 4.8,
    studentsEnrolled: 11000,
    bestseller: true,
    testimonials: [
      {
        id: 1,
        name: 'Vishal Jagtap',
        feedback:
          'Prime Point Academy provides the best Java classes in Pune. My trainers explain concepts in a very simple way. Practice on real-world projects helped me to learn practical knowledge. I secured a job as a Java Developer after completing the my course.',
        rating: 5,
      },
      {
        id: 2,
        name: 'Manish Bansode',
        feedback:
          'I wanted to do a Java certification in Pune and Prime Point Academy was my perfect choice for it. The course structure and syllabus, projects, and placement assistance helped me to get my first job as a Software Engineer. Highly recommended!',
        rating: 5,
      },
      {
        id: 3,
        name: 'Vikas Patel',
        feedback:
          'The Java coaching in Pune at Prime Point Academy was my excellent experience. My trainers provide in-depth knowledge and practical training. The placement team also helped me by providing me placement opportunities in reputed IT companies. They also helped me in interview preparation.',
        rating: 5,
      },
      {
        id: 4,
        name: 'Neha Mishra',
        feedback:
          'I opted for the online Java training in Pune due to my busy schedule. The live sessions, recorded videos, and mentor support made learning convenient. I got placed in a reputed IT company.',
        rating: 5,
      },
      {
        id: 5,
        name: 'Mahesh Kulkarni',
        feedback:
          'Joining Java training course in Pune at Prime Point Academy was a turning point for my career. The practical project based training gives me confidence in my coding skills.',
        rating: 5,
      },
    ],
    FAQItem: [
      {
        question: 'What is the duration of the Java Course in Pune?',
        answer:
          'The duration of our Java programming course in Pune is 6 to 7 months. It includes 3 months of training and 3 months of internship. But it totally depends on batch type and student learning speed.',
      },
      {
        question: 'Do you provide placement assistance after Java training in Pune?',
        answer:
          'Yes! We offer 100% placement assistance to help you secure a job in an IT company.',
      },
      {
        question: 'Can I enroll in Java coaching classes in Pune without prior coding experience?',
        answer:
          'Yes! Our course starts from the basics and ends up on advanced levels.',
      },
      {
        question: 'What are the Java course fees in Pune?',
        answer:
          'The Java course fees totally depend on the mode of training. Contact us for details.',
      },
      {
        question: 'Is online Java training in Pune as effective as classroom training?',
        answer:
          'Yes! Our online Java training in Pune offers live interactive classes, live projects, and personal mentor support to ensure an effective learning experience.',
      },
    ]
  },
  {
    slug: 'mern-stack-course-pune',
    title: 'MERN Stack Masterclass',
    subtitle: 'Master Full Stack Development with MERN Stack (MongoDB, Express.js, React, and Node.js)',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh_9g7TzHRZJeVWRJ9iSnUgha2sIFmiIQOaw&s',
    tableOfContents: [
      { title: 'What is MERN Stack?', id: 'what-is-mern' },
      { title: 'Why Choose MERN Stack Classes in Pune?', id: 'why-choose-mern' },
      { title: 'What Will You Learn from Our MERN Stack Course in Pune?', id: 'course-content' },
      { title: 'Prime Point Academy - Best MERN Stack Training Institute in Pune', id: 'academy-info' },
      { title: 'Start Your Web Development Career', id: 'career' },
      // { title: 'FAQs', id: 'faq' }
    ],
    sections: [
      {
        id: 'what-is-mern',
        heading: 'What is MERN Stack?',
        content: [
          {
            type: 'paragraph',
            text: "MERN Stack stands for the combination of four technologies: MongoDB, Express.js, React, and Node.js. It creates a powerful framework for any web application. It is commonly used to develop dynamic and responsive web applications. It is common for many IT professionals to look for a MERN Stack course in Pune. Our MERN Stack courses help students become experts in full stack web development. Over the years, Prime Point Academy developed best web development course in Pune for our students to become skilled full stack web developers."
          },
          {
            type: 'paragraph',
            text: "With MERN Stack, you can work on the front and back end of applications, which results in you becoming a demanding web developer in the IT industry. You can join our MERN Stack classes in Pune and have the opportunity to work on real-world projects in your training period."
          }
        ]
      },
      {
        id: 'why-choose-mern',
        heading: 'Why Choose MERN Stack Classes in Pune?',
        content: [
          {
            type: 'list',
            items: [
              "**High Industry Demand** - The need for MERN Stack developers is high within different sectors of the IT industry.",
              "**Versatile Skill Set** - Gain skills in **front-end development (React.js)** and **back-end development (Node.js, Express.js, MongoDB).**",
              "**Faster Development** - MERN Stack allows you fast development and deployment of web applications.",
              "**Open Source & Community Support** - All technologies used in the MERN Stack are open source and have large supportive communities of developers.",
              "**Career Growth Opportunities** – Job opportunities with high salaries in software development, web development, and cloud computing for faster career growth."
            ]
          },
          {
            type: 'paragraph',
            text: "By enrolling in Prime Point Academy’s MERN Stack classes in Pune, you will achieve extensive knowledge and effective skills in web development, which will help you to secure a good position in the job market."
          }
        ]
      },
      {
        id: 'course-content',
        heading: 'What Will You Learn from Our MERN Stack Course in Pune?',
        content: [
          {
            type: 'paragraph',
            text: 'At Prime Point Academy, our MERN Stack course in Pune covers:'
          },
          {
            type: 'subheading',
            text: 'MongoDB - The NoSQL database'
          },
          {
            type: 'list',
            items: [
              'Introduction to MongoDB',
              'CRUD Operations',
              'Data Modeling',
              'Aggregation Framework'
            ]
          },
          {
            type: 'subheading',
            text: 'Express.js - Web framework for Node.js'
          },
          {
            type: 'list',
            items: [
              'Introduction to Express.js',
              'RESTful APIs Development',
              'Middleware & Routing',
              'Authentication & Security'
            ]
          },
          {
            type: 'subheading',
            text: 'React.js - Front-End Development'
          },
          {
            type: 'list',
            items: [
              'Introduction to React.js',
              'JSX & Components',
              'State Management with Redux',
              'API Integration & Hooks'
            ]
          },
          {
            type: 'subheading',
            text: 'Node.js - Server-Side Development'
          },
          {
            type: 'list',
            items: [
              'Introduction to Node.js',
              'Asynchronous Programming',
              'Building REST APIs',
              'Deployment & Hosting'
            ]
          },
          {
            type: 'paragraph',
            text: 'After completing our MERN Stack training in Pune, you will get practical experience in MERN Stack development by working on real-world web applications.'
          }
        ]
      },
      {
        id: 'academy-info',
        heading: 'Prime Point Academy - Best MERN Stack Training Institute in Pune',
        content: [
          {
            type: 'paragraph',
            text: "At Prime Point Academy, we offer best MERN Stack training, ensuring a well designed syllabus considering industry requirements. Our trainers are professionals who have been working in the industry for many years. At the end of our MERN Stack web development classes in Pune, we provide 100% placement assistance to help our students to get their job in the IT industry."
          },
          {
            type: 'list',
            items: [
              "**Industry expert trainers** with real-world experience",
              "**Hands-on training** with live projects",
              "**100% Placement Assistance** for career opportunities",
              "**Flexible Learning Modes** - Classroom & Online Training",
              "**Certification** after successful completion of our MERN Stack course in Pune"
            ]
          },
          {
            type: 'paragraph',
            text: "If you’re searching for the best MERN Stack training institute in Pune, Prime Point Academy is the place to be. Join us today and learn the skills you need to become a full-stack web developer from scratch."
          }
        ]
      },
      {
        id: 'career',
        heading: 'Start Your Web Development Career With Prime Point Academy',
        content: [
          {
            type: 'paragraph',
            text: "If you are a fresher or experienced working professional looking to upgrade your skills, our MERN Stack course in Pune is designed for you. You will be confident to develop, deploy, and manage web applications by the end of our training."
          },
          {
            type: 'paragraph',
            text: "Join our MERN Stack classes in Pune today and start your journey to a successful web development career!"
          }
        ]
      },
      // {
      //   id: 'faq',
      //   heading: 'FAQs',
      //   content: [
      //     {
      //       type: 'list',
      //       items: [
      //         "What is the duration of the MERN Stack course in Pune? - The duration of our MERN Stack course in Pune is 6 months, 3 months of training and 3 months of internship. But it can vary because of students learning speed and batch type you choose.",
      //         "Does Prime Point Academy provide placement assistance? - Yes, we give 100% placement assistance after successfully completing our course to help students get job opportunities in reputed IT companies.",
      //         "Can I Join the MERN Stack course online at Prime Point Academy? - Yes, we offer online and offline batches so you can learn our MERN Stack training in Pune as per your convenience.",
      //         "What are the requirements to join the MERN Stack course? - If you have the basic knowledge of HTML, CSS, and JavaScript, it will be beneficial for you. But if you don't have any knowledge of it, don't worry we cover all the concepts from basics.",
      //         "Why should I learn MERN Stack? - In modern web development, the use of MERN Stack is very common. By learning MERN Stack you will be able to develop full web applications and it offers high-paying job opportunities."
      //       ]
      //     }
      //   ]
      // }
    ],
    duration: '6 Months',
    difficulty: 'Beginner',
    price: 299,
    rating: 4.8,
    studentsEnrolled: 12450,
    bestseller: true,
    testimonials: [
      {
        id: 1,
        name: "Akash More",
        feedback:
          "As per my personal experience, Prime Point Academy is the best MERN Stack training institute in Pune. My trainers were highly knowledgeable, and the practical based training helped me to develop my first website. Highly recommended!",
        rating: 5
      },
      {
        id: 2,
        name: "Ronak Patel",
        feedback:
          "After completing my graduation in BCA, I joined the MERN Stack course in Pune at Prime Point Academy, and it was a great learning experience here. My trainers taught me every concept in detail, so I have gained deep knowledge of MongoDB, Express.js, React, and Node.js.",
        rating: 5
      },
      {
        id: 3,
        name: "Asawari Deshmukh",
        feedback:
          "After completing my MERN Stack training in Pune, I easily got my first job as a Web Developer in one of Pune's reputed IT company because of Prime Point Academy's proper training and great placement assistance. Thank you so much team Prime Point Academy.",
        rating: 5
      },
      {
        id: 4,
        name: "Durgesh Khalane",
        feedback:
          "The best thing about MERN Stack classes in Pune at Prime Point Academy is their practical approach to learning. The real-time projects helped me gain confidence in my development skills.",
        rating: 5
      },
      {
        id: 5,
        name: "Vivek Desle",
        feedback:
          "I experienced that Prime Point Academy provides the best MERN Stack course in Pune at affordable course fees. My trainers were very supportive, and the learning environment of the institute was excellent. Highly recommended from my side.",
        rating: 5
      }
    ],
    FAQItem: [
      {
        question: "What is the duration of the MERN Stack course in Pune?",
        answer: "The duration of our MERN Stack course in Pune is 6 months, 3 months of training and 3 months of internship. But it can vary because of students learning speed and batch type you choose."
      },
      {
        question: "Does Prime Point Academy provide placement assistance?",
        answer: "Yes, we give 100% placement assistance after successfully completing our course to help students get job opportunities in reputed IT companies."
      },
      {
        question: "Can I Join the MERN Stack course online at Prime Point Academy?",
        answer: "Yes, we offer online and offline batches so you can learn our MERN Stack training in Pune as per your convenience."
      },
      {
        question: "What are the requirements to join the MERN Stack course?",
        answer: "If you have the basic knowledge of HTML, CSS, and JavaScript, it will be beneficial for you. But if you don't have any knowledge of it, don't worry we cover all the concepts from basics."
      },
      {
        question: "Why should I learn MERN Stack?",
        answer: "In modern web development, the use of MERN Stack is very common. By learning MERN Stack you will be able to develop full web applications and it offers high-paying job opportunities."
      }
    ]
  },
  {
    slug: "sap-course-pune",
    title: "SAP Course in Pune",
    subtitle: "Master SAP with Certification and 100% Placement Assistance at Prime Point Academy",
    image: "https://cdn.wallpapersafari.com/91/61/1XiO0m.jpg",
    tableOfContents: [
      { title: "Introduction", id: "introduction" },
      { title: "Build Your Successful Career", id: "career-success" },
      { title: "Benefits of Having SAP Certification", id: "benefits" },
      { title: "Prime Point Academy - SAP Institute", id: "academy" },
      { title: "Why Choose Prime Point Academy?", id: "why-choose" },
      { title: "SAP Courses Offered", id: "sap-courses" },
      // { title: "Download Brochure", id: "download-brochure" },
      // { title: "Student Reviews", id: "reviews" }
      // { title: "FAQs", id: "faqs" }
    ],
    sections: [
      {
        id: "introduction",
        heading: "Introduction to SAP Course in Pune",
        content: [
          {
            type: "paragraph",
            text: "SAP (Systems, Applications, and Products) stands out as one of the most popular ERP (Enterprise Resource Planning) systems in the world. SAP is used in various industries to efficiently manage finance, human resources, supply chain, customer relations, and business processes. If you are in search of an SAP course in Pune, Prime Point Academy is the one to offer the best SAP training in Pune with certification and 100% placement assistance."
          },
          {
            type: "paragraph",
            text: "At Prime Point Academy, in Pune, we provide SAP FICO course in Pune and SAP MM course in Pune. All our courses are designed to meet the industry requirements so they can be beneficial for freshers as well as the working professionals who want to upgrade skills. After joining our SAP institute in Pune, you will definitely learn all the required skills and achieve your career goals."
          }
        ]
      },
      {
        id: "career-success",
        heading: "Build Your Successful Career with SAP Classes in Pune",
        content: [
          {
            type: "paragraph",
            text: "SAP is mostly used in industries like IT, manufacturing, healthcare, retail, and finance. If you do SAP certification in Pune, you will get many career opportunities in those companies with high salaries."
          },
          {
            type: "list",
            items: [
              "**High Demand** - SAP specialists are hired by companies in every industry for business automation. It creates high demand for SAP specialists in the job market.",
              "**Global Career Opportunities** - SAP is recognised worldwide, opening doors for international jobs.",
              "**Better Salary Packages** - Certified SAP professionals earn higher salaries.",
              "**Diverse Career Paths** - Select from a range of options such as SAP FICO, SAP MM, SAP SD, SAP HR, SAP PP, SAP ABAP, and many more modules.",
              "**Industry-Oriented Training** - Gain practical knowledge by working on live projects during your training period."
            ]
          },
          {
            type: "paragraph",
            text: "At Prime Point Academy - the best SAP training institute in Pune. We provide real-time projects, experienced trainers, and flexible learning options such as online and offline batches to help our students become job-ready SAP professionals."
          }
        ]
      },
      {
        id: "benefits",
        heading: "Benefits of Having SAP Certification in Pune",
        content: [
          {
            type: "list",
            items: [
              "**Industry Recognition** - SAP certification improves the value of your skills and makes your resume stand out.",
              "**Job Opportunities** - More than 90% of companies in all the industries use SAP. Because of that, there are many job opportunities.",
              "**High-Paying Job Roles** - SAP professionals can get incomes between ₹5 LPA to ₹20 LPA, depending on experience.",
              "**Global Recognition** - Having an SAP certification provides you access to global career opportunities."
            ]
          },
          {
            type: "paragraph",
            text: "You will have an advantage in the competitive job market if you join SAP classes in Pune with placement assistance at Prime Point Academy."
          }
        ]
      },
      {
        id: "academy",
        heading: "Prime Point Academy - SAP Institute in Pune",
        content: [
          {
            type: "paragraph",
            text: "Prime Point Academy is one of the leading SAP training institutes in Pune, Maharashtra where students gain high-quality SAP training and hands-on experience through practicing on live projects. The experienced trainers of our academy give personal attention to our students to learn our SAP course completely."
          }
        ]
      },
      {
        id: "why-choose",
        heading: "Why Choose Prime Point Academy for SAP Coaching in Pune?",
        content: [
          {
            type: "list",
            items: [
              "**Expert Trainers** - Learn from SAP certified trainers with years of experience.",
              "**100% Placement Assistance** - We provide 100% placement assistance after successfully completing our SAP course.",
              "**Flexible Learning Options** - We have both batch options for offline or online SAP training in Pune.",
              "**Affordable SAP Course Fees in Pune** - We provide best SAP courses at an affordable price.",
              "**Hands-On Experience** - Work on live projects and case studies to learn practical experience."
            ]
          },
          {
            type: "paragraph",
            text: "If you're looking for the best SAP training institute in Pune with placement, Prime Point Academy is the ideal training institute for you."
          }
        ]
      },
      {
        id: "sap-courses",
        heading: "Which SAP Courses You Can Learn in Our SAP Training Institute in Pune?",
        content: [
          {
            type: "paragraph",
            text: "We offer various SAP modules, including:"
          },
          // {
          //   type: "paragraph",
          //   text: "SAP FICO (Finance and Controlling)"
          // },
          // {
          //   type: "list",
          //   items: [
          //     "General Ledger Accounting",
          //     "Accounts Payable & Receivable",
          //     "Asset Accounting",
          //     "Cost Center & Profitability Analysis"
          //   ]
          // },
          // {
          //   type: "paragraph",
          //   text: "SAP MM (Material Management)"
          // },
          // {
          //   type: "list",
          //   items: [
          //     "Procurement & Inventory Management",
          //     "Vendor Management",
          //     "Invoice Verification"
          //   ]
          // }
        ]
      },
      // {
      //   id: "download-brochure",
      //   heading: "Download Brochure",
      //   content: [
      //     {
      //       type: "list",
      //       items: [
      //         "Download Brochure for SAP FICO",
      //         "Download Brochure for SAP MM"
      //       ]
      //     }
      //   ]
      // },
      // {
      //   id: "reviews",
      //   heading: "Student Reviews",
      //   content: [
      //     {
      //       type: "paragraph",
      //       text: "Rasika Patil: Prime Point Academy is truly the best SAP institute in Pune. My trainers were very helpful and kind, and they teach me SAP coaching in Pune is practical. I secured a job after completing my SAP FICO course. Thank you Prime Point Academy."
      //     },
      //     {
      //       type: "paragraph",
      //       text: "Sanket Akhade: I joined SAP classes in Pune at Prime Point Academy, and it was an amazing experience. The SAP classes fees in Pune were reasonable, and the training was excellent. Highly recommended!"
      //     },
      //     {
      //       type: "paragraph",
      //       text: "Chetna Mehta: I got my SAP certification in Pune from Prime Point Academy and landed a job within weeks. Their placement support is top-notch!"
      //     },
      //     {
      //       type: "paragraph",
      //       text: "Pooja Rajput: The faculty at Prime Point Academy is very knowledgeable. This is the best SAP training institute in Pune with placement, it covers all important concepts with real-time projects."
      //     },
      //     {
      //       type: "paragraph",
      //       text: "Abhi Salunkhe: If you are trying to find the best institute for SAP in Pune, Prime Point Academy is the best option for you. The course syllabus is well-planned, and the trainers are excellent here."
      //     }
      //   ]
      // },
      // {
      //   id: "faqs",
      //   heading: "FAQs",
      //   content: [
      //     {
      //       type: "list",
      //       items: [
      //         "What is the SAP Course Duration and Fees in Pune? - The duration of our SAP training in Pune is 6 months, 3 months of training and 3 months of internship. But it can vary because of students’ learning speed and the batch type you choose. To know the fee structure, contact us.",
      //         "Does Prime Point Academy provide SAP certification in Pune? - Yes, we provide SAP certification after successfully completing the course, which helps you for career growth.",
      //         "What are the SAP course fees in Pune? - The SAP course fees in Pune are different for different structures of the course you take. Contact us to know more about fee details and EMI options.",
      //         "Does Prime Point Academy offer SAP training with placement? - Yes, we provide SAP training in Pune with 100% placement assistance to help our students to grab their job in a reputed company.",
      //         "Can I join online SAP coaching in Pune? - Yes, we offer SAP coaching in Pune online and offline, allowing flexible learning options."
      //       ]
      //     }
      //   ]
      // }
    ],
    duration: "6 Months",
    difficulty: "Beginner",
    price: 299,
    rating: 4.8,
    studentsEnrolled: 12450,
    bestseller: true,
    testimonials: [
      {
        id: 1,
        name: "Rasika Patil",
        feedback: "Prime Point Academy is truly the best SAP institute in Pune. My trainers were very helpful and kind, and they teach me SAP coaching in Pune is practical. I secured a job after completing my SAP FICO course. Thank you Prime Point Academy",
        rating: 5
      },
      {
        id: 2,
        name: "Sanket Akhade",
        feedback: "I joined SAP classes in Pune at Prime Point Academy, and it was an amazing experience. The SAP classes fees in Pune were reasonable, and the training was excellent. Highly recommended!",
        rating: 5
      },
      {
        id: 3,
        name: "Chetna Mehta",
        feedback: "I got my SAP certification in Pune from Prime Point Academy and landed a job within weeks. Their placement support is top-notch!",
        rating: 5
      },
      {
        id: 4,
        name: "Pooja Rajput",
        feedback: "The faculty at Prime Point Academy is very knowledgeable. This is the best SAP training institute in Pune with placement, it covers all important concepts with real-time projects.",
        rating: 5
      },
      {
        id: 5,
        name: "Abhi Salunkhe",
        feedback: "If you are trying to find the best institute for SAP in Pune, Prime Point Academy is the best option for you. The course syllabus is well-planned, and the trainers are excellent here.",
        rating: 5
      }
    ],
    FAQItem: [
      {
        question: "What is the SAP Course Duration and Fees in Pune?",
        answer: "The duration of our SAP training in Pune is 6 months, 3 months of training and 3 months of internship. But it can vary because of students’ learning speed and the batch type you choose. To know the fee structure, contact us."
      },
      {
        question: "Does Prime Point Academy provide SAP certification in Pune?",
        answer: "Yes, we provide SAP certification after successfully completing the course, which helps you for career growth."
      },
      {
        question: "What are the SAP course fees in Pune?",
        answer: "The SAP course fees in Pune are different for different structures of the course you take. Contact us to know more about fee details and EMI options."
      },
      {
        question: "Does Prime Point Academy offer SAP training with placement?",
        answer: "Yes, we provide SAP training in Pune with 100% placement assistance to help our students to grab their job in a reputed company."
      },
      {
        question: "Can I join online SAP coaching in Pune?",
        answer: "Yes, we offer SAP coaching in Pune online and offline, allowing flexible learning options."
      }
    ]
  },
  {
    "slug": "sap-fico-course-pune",
    "title": "SAP FICO Course in Pune",
    "subtitle": "Learn SAP Financial Accounting and Controlling with 100% Placement Assistance at Prime Point Academy",
    "image": "https://www.sipltraining.com/blog/uploads/images/202201/image_750x_61e916fc7636b.jpg",
    "tableOfContents": [
      { "title": "Introduction", "id": "introduction" },
      { "title": "Start Your Successful Career", "id": "career" },
      { "title": "Why Choose SAP FICO?", "id": "why-choose" },
      { "title": "Why Join SAP FICO Training?", "id": "why-join" },
      { "title": "Key Features", "id": "key-features" },
      { "title": "SAP Certification", "id": "sap-certification" },
      { "title": "Why Prime Point Academy", "id": "why-ppa" },
      { "title": "Training Modes", "id": "training-modes" },
      // { "title": "Student Reviews", "id": "reviews" },
      // { "title": "FAQs", "id": "faqs" }
    ],
    "sections": [
      {
        "id": "introduction",
        "heading": "Introduction to SAP FICO Course in Pune",
        "content": [
          {
            "type": "paragraph",
            "text": "SAP FICO, which stands for SAP Financial Accounting and Controlling, serves as a fundamental component of SAP ERP. It plays a crucial role in managing financial transactions, accounting, and reporting. Our SAP FICO course in Pune is designed to help our students who wish to learn and develop skills in financial management of SAP software. Join our SAP FICO classes in Pune which are held at Prime Point Academy, to learn about all the key areas, such as a general ledger, accounts payable/receivable, asset accounting, and controlling."
          }
        ]
      },
      {
        "id": "career",
        "heading": "Start Your Successful Career with Our SAP FICO Classes in Pune",
        "content": [
          {
            "type": "paragraph",
            "text": "Companies in all the sectors are looking for skilled SAP FICO professionals to effectively manage their finances. Because of that, the demand for SAP FICO professionals is continuously increasing. At Prime Point Academy, we offer SAP FICO training in Pune that makes sure you learn all the concepts through practical experience by working on real-world projects."
          }
        ]
      },
      {
        "id": "why-choose",
        "heading": "Why Choose SAP FICO?",
        "content": [
          {
            "type": "list",
            "items": [
              "High demand from all industries, such as finance, IT, and manufacturing.",
              "Attractive salary packages with many career growth opportunities",
              "Global recognition with SAP certification in Pune."
            ]
          }
        ]
      },
      {
        "id": "why-join",
        "heading": "Why Should You Join SAP FICO Training in Pune?",
        "content": [
          {
            "type": "paragraph",
            "text": "By joining Prime Point Academy to learn the best SAP FICO course in Pune, you have the advantage of having the opportunity to work on real-world projects with deep knowledge. Our trainers have years of experience in the industry, so we can guarantee you practical exposure to SAP software."
          }
        ]
      },
      {
        "id": "key-features",
        "heading": "Key Features of Our SAP FICO Classes in Pune",
        "content": [
          {
            "type": "list",
            "items": [
              "Expert Trainers: Learn from SAP-certified professionals with years of experience.",
              "Practical Training: Get practical knowledge and skills by working on live projects.",
              "SAP Certification in Pune: Get ready to take SAP certification by globally recognized SAP exams.",
              "Flexible Learning Options: Select between offline or online SAP FICO training in Pune. Both options are available at Prime Point Academy.",
              "Placement Assistance: Get 100% placement assistance from Prime Point Academy, including personal guidance for interview preparation."
            ]
          }
        ]
      },
      {
        "id": "sap-certification",
        "heading": "SAP FICO - SAP Certification in Pune",
        "content": [
          {
            "type": "paragraph",
            "text": "Having SAP certification in Pune gives you multiple job opportunities and great career growth. At Prime Point Academy, our organised training program equips you with the skills and knowledge needed for SAP FICO certification so that you are ready for any job in the SAP FICO domain. Our SAP training institute in Pune provides a comprehensive syllabus designed to meet the needs of the industry."
          }
        ]
      },
      {
        "id": "why-ppa",
        "heading": "Why Choose Prime Point Academy's SAP FICO Course in Pune?",
        "content": [
          {
            "type": "list",
            "items": [
              "Industry-oriented curriculum that covers every required facet of SAP FICO.",
              "Personal guidance with 1-on-1 mentoring sessions.",
              "Affordable SAP FICO course fees in Pune with convenient payment options.",
              "Interactive and engaging training sessions to improve practical knowledge."
            ]
          }
        ]
      },
      {
        "id": "training-modes",
        "heading": "Join Offline or Online SAP FICO Training in Pune at Prime Point Academy",
        "content": [
          {
            "type": "paragraph",
            "text": "We provide both offline and online SAP FICO training in Pune so you can join our SAP FICO classes as per your comfort. Our goal is to make sure that every student becomes an expert in SAP FICO, which will make them able to crack their job interview for the best companies on the market."
          }
        ]
      },
      // {
      //   "id": "reviews",
      //   "heading": "Student Reviews",
      //   "content": [
      //     {
      //       "type": "paragraph",
      //       "text": "Jagruti Patil: I enrolled in the SAP FICO course in Pune at Prime Point Academy and had an amazing learning experience. The trainers provided hands-on training, and the placement assistance was really helpful. Highly recommend it!"
      //     },
      //     {
      //       "type": "paragraph",
      //       "text": "Priti Mahajan: The SAP FICO classes in Pune at Prime Point Academy are excellent. The trainers are very knowledgeable, and I got real-world exposure to SAP software. I secured a job within a month of completing my training!"
      //     },
      //     {
      //       "type": "paragraph",
      //       "text": "Kunal Pardeshi: I was looking for the best SAP FICO training in Pune with placement and found Prime Point Academy. Their practical approach to training helped me understand the concepts better. Great experience!"
      //     },
      //     {
      //       "type": "paragraph",
      //       "text": "Neha Patil: The SAP certification in Pune at Prime Point Academy has led my career to the next level. The training sessions were very organised, and the placement team was always helping me during the job search time."
      //     },
      //     {
      //       "type": "paragraph",
      //       "text": "Bhavesh Joshi: I joined the online SAP FICO Training in Pune, as it was the same as the offline training. A flexible schedule, expert trainers, and an in-depth syllabus always make it simple to learn for me."
      //     }
      //   ]
      // },
      // {
      //   "id": "faqs",
      //   "heading": "FAQs",
      //   "content": [
      //     {
      //       "type": "list",
      //       "items": [
      //         "What is the duration of the SAP FICO course in Pune? - The duration of our SAP FICO course in Pune is 6 months, 3 months of training and 3 months of internship. But it can vary because of students’ learning speed and the batch type you choose.",
      //         "Do you provide placement assistance for SAP FICO training in Pune? - Yes, we provide 100% placement support with resume building, interview preparation, and mock interviews to help our students to grab their job.",
      //         "Is the SAP FICO certification in Pune recognized globally? - Yes, SAP FICO certification holds global recognition and it is highly valued by employers across the globe.",
      //         "Can I enroll in online SAP FICO training in Pune? - Yes, we offer offline and online SAP FICO training in Pune, allowing flexible learning options.",
      //         "What are the SAP FICO course fees in Pune? - The SAP FICO course fees in Pune are different for different structures of the course you take. Contact us to know more about fee details and EMI options."
      //       ]
      //     }
      //   ]
      // }
    ],
    "duration": "6 Months",
    "difficulty": "Beginner",
    "price": 299,
    "rating": 4.8,
    "studentsEnrolled": 12450,
    "bestseller": true,
    "testimonials": [
      {
        "id": 1,
        "name": "Jagruti Patil",
        "feedback": "I enrolled in the SAP FICO course in Pune at Prime Point Academy and had an amazing learning experience. The trainers provided hands-on training, and the placement assistance was really helpful. Highly recommend it!",
        "rating": 5
      },
      {
        "id": 2,
        "name": "Priti Mahajan",
        "feedback": "The SAP FICO classes in Pune at Prime Point Academy are excellent. The trainers are very knowledgeable, and I got real-world exposure to SAP software. I secured a job within a month of completing my training!",
        "rating": 5
      },
      {
        "id": 3,
        "name": "Kunal Pardeshi",
        "feedback": "I was looking for the best SAP FICO training in Pune with placement and found Prime Point Academy. Their practical approach to training helped me understand the concepts better. Great experience!",
        "rating": 5
      },
      {
        "id": 4,
        "name": "Neha Patil",
        "feedback": "The SAP certification in Pune at Prime Point Academy has led my career to the next level. The training sessions were very organised, and the placement team was always helping me during the job search time.",
        "rating": 5
      },
      {
        "id": 5,
        "name": "Bhavesh Joshi",
        "feedback": "I joined the online SAP FICO Training in Pune, as it was the same as the offline training. A flexible schedule, expert trainers, and an in-depth syllabus always make it simple to learn for me.",
        "rating": 5
      }
    ],
    "FAQItem": [
      {
        "question": "What is the duration of the SAP FICO course in Pune?",
        "answer": "The duration of our SAP FICO course in Pune is 6 months, 3 months of training and 3 months of internship. But it can vary because of students’ learning speed and the batch type you choose."
      },
      {
        "question": "Do you provide placement assistance for SAP FICO training in Pune?",
        "answer": "Yes, we provide 100% placement support with resume building, interview preparation, and mock interviews to help our students to grab their job."
      },
      {
        "question": "Is the SAP FICO certification in Pune recognized globally?",
        "answer": "Yes, SAP FICO certification holds global recognition and it is highly valued by employers across the globe."
      },
      {
        "question": "Can I enroll in online SAP FICO training in Pune?",
        "answer": "Yes, we offer offline and online SAP FICO training in Pune, allowing flexible learning options."
      },
      {
        "question": "What are the SAP FICO course fees in Pune?",
        "answer": "The SAP FICO course fees in Pune are different for different structures of the course you take. Contact us to know more about fee details and EMI options."
      }
    ]
  },
  {
    "slug": "sap-mm-course-pune",
    "title": "SAP MM Course in Pune",
    "subtitle": "Master SAP Material Management with Industry-Oriented Training at Prime Point Academy",
    "image": "https://www.cromacampus.com/public/uploads/Blog/2022/07/week_3/SAP-MM-TRAINING-NON-PROMOTIONAL-BLOG-IMAGE.jpg",
    "tableOfContents": [
      { "title": "Introduction", "id": "introduction" },
      { "title": "Why Should You Join SAP MM Training in Pune?", "id": "why-join" },
      { "title": "SAP MM - SAP Certification in Pune", "id": "sap-certification" },
      { "title": "Why Choose Prime Point Academy's SAP Course in Pune", "id": "why-choose" },
      { "title": "Join Our SAP Classes in Pune to Master SAP MM", "id": "join" },
      // { "title": "Student Reviews", "id": "reviews" },
      // { "title": "FAQs", "id": "faqs" }
    ],
    "sections": [
      {
        "id": "introduction",
        "heading": "Introduction - SAP MM Course in Pune",
        "content": [
          {
            "type": "paragraph",
            "text": "The SAP MM (Material Management) is known as one of the modules of SAP, which is used by professionals for supply chain and procurement management. At Prime Point Academy, we provide the best SAP MM course in Pune, ensuring that our students learn all required skills and gain practical experience to master SAP MM functionalities. Our SAP MM training in Pune is industry-oriented. It is beneficial for both freshers and current working professionals."
          }
        ]
      },
      {
        "id": "why-join",
        "heading": "Why Should You Join SAP MM Training in Pune?",
        "content": [
          {
            "type": "paragraph",
            "text": "SAP MM is an important SAP module in various industries for resource planning and managing materials and inventory effectively. For that, companies in various industries need skilled SAP MM professionals. Our SAP MM training in Pune has a well-designed syllabus and it includes:"
          },
          {
            "type": "list",
            "items": [
              "Well-designed curriculum that covers inventory management, valuation, invoice verification and procurement.",
              "Experienced trainers with practical knowledge of the industry.",
              "Hands-on Learning through live projects and practical case studies.",
              "Placement Assistance to help you secure jobs in top companies."
            ]
          },
          {
            "type": "paragraph",
            "text": "Whether you are looking for an SAP MM certification in Pune or need an affordable SAP MM course fee in Pune, Prime Point Academy ensures quality education at the best price."
          }
        ]
      },
      {
        "id": "sap-certification",
        "heading": "SAP MM - SAP Certification in Pune",
        "content": [
          {
            "type": "paragraph",
            "text": "Getting certified is the most important part of your journey to get credibility in any field. We provide globally recognized SAP certification in our SAP MM training institute in Pune to help our students to secure a good job in today's competitive job market. By completing our SAP MM course in Pune with certification, you can improve your career prospects in SAP consulting, procurement, supply chain, and warehouse management."
          }
        ]
      },
      {
        "id": "why-choose",
        "heading": "Why Choose Prime Point Academy's SAP Course in Pune to Learn SAP MM?",
        "content": [
          {
            "type": "paragraph",
            "text": "Prime Point Academy is one of the leading SAP training institutes in Pune for various SAP modules, such as SAP MM classes in Pune. Here’s why students prefer us:"
          },
          {
            "type": "list",
            "items": [
              "**Industry-Expert Trainers** Learn from experienced trainers with years of experience.",
              "**Updated Course Curriculum** Covers all the latest industry requirements of SAP MM training in Pune.",
              "**Affordable Fees** We offer the most affordable SAP MM course fees in Pune without compromising the quality of course content and training.",
              "**Placement Support** Get 100% placement assistance after successfully completing our SAP MM course.",
              "**Flexible Learning Options** Join offline or online SAP MM coaching in Pune."
            ]
          }
        ]
      },
      {
        "id": "join",
        "heading": "Join Our SAP Classes in Pune to Master SAP MM",
        "content": [
          {
            "type": "paragraph",
            "text": "If you are searching for the best SAP MM institute in Pune, then Prime Point Academy is your finest choice. Our SAP MM training in Pune is specially designed to ensure our students gain practical experience and make them ready for the job interview. Join now and take your career to the next level."
          }
        ]
      },
      // {
      //   "id": "reviews",
      //   "heading": "Student Reviews",
      //   "content": [
      //     {
      //       "type": "paragraph",
      //       "text": "Yash Parab: The SAP MM course in Pune at Prime Point Academy was a great experience! The trainers provided hands-on training, and the placement support was outstanding."
      //     },
      //     {
      //       "type": "paragraph",
      //       "text": "Pratik Malvade: I joined SAP MM classes in Pune and I was impressed with the course content. My trainers were highly knowledgeable, and the SAP certification added great value to my resume."
      //     },
      //     {
      //       "type": "paragraph",
      //       "text": "Anisha Sawant: One of the best SAP MM training institutes in Pune with expert coaching and placement assistance. Highly recommended for SAP aspirants!"
      //     },
      //     {
      //       "type": "paragraph",
      //       "text": "Atul Kulkarni: The SAP MM course fees in Pune at Prime Point Academy were very reasonable, and the training quality was excellent. I landed a job right after completion."
      //     },
      //     {
      //       "type": "paragraph",
      //       "text": "Srishti Singh: If you want to start your career in SAP, Prime Point Academy is the best SAP coaching in Pune. Training through live projects helped me a lot to learn and I got practical experience."
      //     }
      //   ]
      // },
      // {
      //   "id": "faqs",
      //   "heading": "FAQs",
      //   "content": [
      //     {
      //       "type": "list",
      //       "items": [
      //         "What is the duration of the SAP MM course in Pune? - The duration of our SAP FICO course is 6 months, 3 months of training and 3 months of internship.",
      //         "What are the SAP MM course fees in Pune? - The SAP MM course fees in Pune at Prime Point Academy is very affordable and it depends on the course you take. Contact us to know more about fee details and EMI options.",
      //         "Is placement assistance provided after SAP MM training? - Yes, we provide 100% placement support in our SAP MM training program with resume building, interview preparation, and mock interviews to help our students to grab their job.",
      //         "Do you provide online SAP MM training in Pune? - Yes, we offer offline and online SAP MM course in Pune to provide flexible learning options.",
      //         "Is SAP MM certification included in the course? - Yes, we provide SAP MM certification after successfully completing our SAP MM course."
      //       ]
      //     }
      //   ]
      // }
    ],
    "duration": "6 Months",
    "difficulty": "Beginner",
    "price": 299,
    "rating": 4.8,
    "studentsEnrolled": 12450,
    "bestseller": true,
    "testimonials": [
      {
        "id": 1,
        "name": "Yash Parab",
        "feedback": "The SAP MM course in Pune at Prime Point Academy was a great experience! The trainers provided hands-on training, and the placement support was outstanding.",
        "rating": 5
      },
      {
        "id": 2,
        "name": "Pratik Malvade",
        "feedback": "I joined SAP MM classes in Pune and I was impressed with the course content. My trainers were highly knowledgeable, and the SAP certification added great value to my resume.",
        "rating": 5
      },
      {
        "id": 3,
        "name": "Anisha Sawant",
        "feedback": "One of the best SAP MM training institutes in Pune with expert coaching and placement assistance. Highly recommended for SAP aspirants!",
        "rating": 5
      },
      {
        "id": 4,
        "name": "Atul Kulkarni",
        "feedback": "The SAP MM course fees in Pune at Prime Point Academy were very reasonable, and the training quality was excellent. I landed a job right after completion.",
        "rating": 5
      },
      {
        "id": 5,
        "name": "Srishti Singh",
        "feedback": "If you want to start your career in SAP, Prime Point Academy is the best SAP coaching in Pune. Training through live projects helped me a lot to learn and I got practical experience.",
        "rating": 5
      }
    ],
    "FAQItem": [
      {
        "question": "What is the duration of the SAP MM course in Pune?",
        "answer": "The duration of our SAP FICO course is 6 months, 3 months of training and 3 months of internship."
      },
      {
        "question": "What are the SAP MM course fees in Pune?",
        "answer": "The SAP MM course fees in Pune at Prime Point Academy is very affordable and it depends on the course you take. Contact us to know more about fee details and EMI options."
      },
      {
        "question": "Is placement assistance provided after SAP MM training?",
        "answer": "Yes, we provide 100% placement support in our SAP MM training program with resume building, interview preparation, and mock interviews to help our students to grab their job."
      },
      {
        "question": "Do you provide online SAP MM training in Pune?",
        "answer": "Yes, we offer offline and online SAP MM course in Pune to provide flexible learning options."
      },
      {
        "question": "Is SAP MM certification included in the course?",
        "answer": "Yes, we provide SAP MM certification after successfully completing our SAP MM course."
      }
    ]
  }
  
  
  
  
];
