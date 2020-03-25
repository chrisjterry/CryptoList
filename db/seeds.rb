# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
    User.destroy_all
    Profile.destroy_all
    ProfileExperience.destroy_all
    ProfileProject.destroy_all
    ProfileEducation.destroy_all
    Company.destroy_all
    CompanyEmployee.destroy_all
    CompanyInvestor.destroy_all
    CompanyPerk.destroy_all
    Job.destroy_all
    Application.destroy_all
    
    u1 = User.create!(name: 'Elon Musk', email: 'emusk@aa.io', password: 'password')
    u2 = User.create!(name: 'Jeff Bezos', email: 'jbezos@aa.io', password: 'password')
    u3 = User.create!(name: 'Mark Zuckerberg', email: 'mzuckerberg@aa.io', password: 'password')
    u4 = User.create!(name: 'Marc Benioff', email: 'mbenioff@aa.io', password: 'password')
    u5 = User.create!(name: 'Bill Gates', email: 'bgates@aa.io', password: 'password')

    c1 = Company.create!(
        owner: u1,
        company_name: 'Tesla',
        location: 'Fremont, CA',
        headcount: 48000,
        tagline: 'To accelerate the advent of sustainable transport',
        overview: 'Tesla was founded in 2003 by a group of engineers who wanted to prove that people didn’t need to compromise to drive electric – that electric vehicles can be better, quicker and more fun to drive than gasoline cars. Today, Tesla builds not only all-electric vehicles but also infinitely scalable clean energy generation and storage products. Tesla believes the faster the world stops relying on fossil fuels and moves towards a zero-emission future, the better.',
        culture: 'Tesla\'s organizational culture creates human resource competence necessary for innovative products in the global automotive business. A firm’s organizational or corporate culture represents the customs and values that define workers’ behaviors and decisions. Tesla’s organizational culture empowers its workforce to search for ideal solutions that make the business stand out in the automotive industry and the energy generation and storage industry. The company encourages employees to innovate to support continuous improvement of the business. For example, through its corporate culture, Tesla maintains the human resource capabilities important in its continuing growth in the global market for electric automobiles, batteries, solar panels, and related products. In this way, the corporation’s cultural traits function as a channel for adding to strategic effectiveness in enhancing the business. Through the organizational culture, Tesla Inc.’s management optimizes employees to achieve creative and innovative behaviors. These behaviors are essential to maintaining the technological innovation that forms part of the company’s foundation.',
        amount_raised: 4500,
        total_rounds: 17,
        valuation: 99000,
    )

    c2 = Company.create!(
        owner: u2,
        company_name: 'Amazon',
        location: 'Seattle, WA',
        headcount: 750000,
        tagline: 'Serve consumers through online and physical stores and focus on selection, price, and convenience',
        overview: 'Amazon is guided by four principles: customer obsession rather than competitor focus, passion for invention, commitment to operational excellence, and long-term thinking. We strive to have a positive impact on customers, employees, small businesses, the economy, and communities where we’re located. Amazonians are smart, passionate builders with different backgrounds and goals, who share a common desire to always be learning and inventing on behalf of our customers.',
        culture: 'Amazon’s distinctive organizational culture fosters a performance-driven environment that fires up employees to innovate in pursuit of an outstanding, continuously-improving customer experience. Its brand identity is based on delivering that same disruptively innovative customer experience. It is the fusion of Amazon’s culture and brand that powers the company. Everyone is singularly focused on one thing: excellence on behalf of the customer. No one needs to expend extra energy figuring out what to do or how to behave to achieve what Amazon wants its brand to stand for in the world. Customers have rewarded the organization’s single determination with their esteem, loyalty, and more importantly, dollars. And employees have recognized Amazon’s distinct culture by making it one of the most desired companies to work for.',
        amount_raised: 108,
        total_rounds: 2,
        valuation: 938000,
    )

    c3 = Company.create!(
        owner: u3,
        company_name: 'Facebook',
        location: 'Palo Alto, CA',
        headcount: 33000,
        tagline: 'Give people the power to build community and bring the world closer together',
        overview: 'Facebook is an online social networking service that allows its users to connect with friends and family as well as make new connections. It provides its users with the ability to create a profile, update information, add images, send friend requests, and accept requests from other users. Its features include status update, photo tagging and sharing, and more. Facebook’s profile structure includes a timeline, information related to the user, images of the user, images added by friends of the user, notes, pages, groups, and more. It enables its users to create pages related to entertainment, sports, business, finance, preferences, hobbies, culture, religion, causes, organizations, and a number of other categories. It also enables its users to join or create groups related to a vast number of categories.',
        culture: 'At the Facebook company, we are constantly iterating, solving problems and working together to connect people all over the world. That’s why it’s important that our workforce reflects the diversity of the people we serve. Hiring people with different backgrounds and points of view helps us make better decisions, build better products and create better experiences for everyone.',
        amount_raised: 2300,
        total_rounds: 14,
        valuation: 445000,
    )

    c4 = Company.create!(
        owner: u4,
        company_name: 'Salesforce',
        location: 'San Francisco, CA',
        headcount: 49000,
        tagline: 'To empowers companies to connect with their customers in a whole new way',
        overview: 'Salesforce is a customer relationship management solution that brings companies and customers together. It\'s one integrated CRM platform that gives all your departments — including marketing, sales, commerce, and service — a single, shared view of every customer. Ever since we started operating out of a small San Francisco apartment in 1999, we\'ve believed that doing well as a company means doing good in the world. That\'s why we\'ve committed our time, equity, and products to improving education, equality, and the environment for everyone.',
        culture: 'The Fourth Industrial Revolution is changing the way people work, using robotics, AI, the Internet of Things, and more. By making these innovations easier and more accessible, we’re helping create a future with greater opportunity and equality for all.',
        amount_raised: 65,
        total_rounds: 5,
        valuation: 131000,
    )

    c5 = Company.create!(
        owner: u5,
        company_name: 'Microsoft',
        location: 'Seattle, CA',
        headcount: 151000,
        tagline: 'To empower every person and every organization on the planet to achieve more',
        overview: 'Microsoft is an American multinational corporation that develops, manufactures, licenses, supports, and sells a range of software products and services. Microsoft’s devices and consumer (D&C) licensing segment licenses Windows operating system and related software; Microsoft Office for consumers; and Windows Phone operating system. The company’s computing and gaming hardware segment provides Xbox gaming and entertainment consoles and accessories, second-party and third-party video games, and Xbox Live subscriptions; surface devices and accessories; and Microsoft PC accessories. Its phone hardware segment offers Lumia smartphones and other non-Lumia phones. Its D&C other segment provides Windows Store, Xbox Live transactions, and Windows phone store; search advertising; display advertising; Office 365 Home and Office 365 Personal; first-party video games; and other consumer products and services as well as operating retail stores.',
        culture: 'Microsoft Corporation’s organizational culture ensures workforce resilience and capability to address business needs in the dynamic market for computer hardware and software products. A company’s corporate culture refers to the values, traditions and behavioral expectations among employees. Microsoft uses its organizational culture to facilitate innovation and customer satisfaction. As one of the leading firms in the IBM PC-compatible operating system market, the company must maintain cultural characteristics that suitably promote innovation and high quality output. Microsoft’s long-term success partly depends on this organizational culture and the corresponding competence of the company’s human resources.',
        amount_raised: 1,
        total_rounds: 1,
        valuation: 1100000,
    )

    ce1 = CompanyEmployee.create!(company: c1, employee_id: u1.id)
    ce2 = CompanyEmployee.create!(company: c2, employee_id: u2.id)
    ce3 = CompanyEmployee.create!(company: c3, employee_id: u3.id)
    ce4 = CompanyEmployee.create!(company: c4, employee_id: u4.id)
    ce5 = CompanyEmployee.create!(company: c5, employee_id: u5.id)

    cp11 = CompanyPerk.create!(company: c1, perk_description: 'Matching 401K')
    cp12 = CompanyPerk.create!(company: c1, perk_description: 'Free Funyuns')
    cp13 = CompanyPerk.create!(company: c1, perk_description: 'Access to Upper Management')
    cp21 = CompanyPerk.create!(company: c2, perk_description: 'Health and Dental')
    cp22 = CompanyPerk.create!(company: c2, perk_description: 'Nap Pods')
    cp23 = CompanyPerk.create!(company: c2, perk_description: 'Free Sauana')
    cp31 = CompanyPerk.create!(company: c3, perk_description: 'Vision and Life Insurance')
    cp32 = CompanyPerk.create!(company: c3, perk_description: 'Catered Brunches')
    cp33 = CompanyPerk.create!(company: c3, perk_description: 'Mimosas on Mondays')
    cp41 = CompanyPerk.create!(company: c4, perk_description: 'Cream Cheese in the Fridge')
    cp42 = CompanyPerk.create!(company: c4, perk_description: 'Campus Gym')
    cp43 = CompanyPerk.create!(company: c4, perk_description: 'Campus Laundry')
    cp51 = CompanyPerk.create!(company: c5, perk_description: 'Team Lunch on Fridays')
    cp52 = CompanyPerk.create!(company: c5, perk_description: 'Happy Hour on Wednesday')
    cp53 = CompanyPerk.create!(company: c5, perk_description: 'Taco Tuesday Burritos')

    ci11 = CompanyInvestor.create!(company: c1, investor_name: 'Goldman Sachs')
    ci12 = CompanyInvestor.create!(company: c1, investor_name: 'Susquehanna')
    ci21 = CompanyInvestor.create!(company: c2, investor_name: 'Serent Capital')
    ci22 = CompanyInvestor.create!(company: c2, investor_name: 'SageView Capital')
    ci31 = CompanyInvestor.create!(company: c3, investor_name: 'Sorenson Capital')
    ci32 = CompanyInvestor.create!(company: c3, investor_name: 'Waud Capital')
    ci41 = CompanyInvestor.create!(company: c4, investor_name: 'TPG Growth')
    ci42 = CompanyInvestor.create!(company: c4, investor_name: 'Vista Equity')
    ci51 = CompanyInvestor.create!(company: c5, investor_name: 'Carrick Capital')
    ci52 = CompanyInvestor.create!(company: c5, investor_name: 'Industry Ventures')
                        
    j31 = Job.create!(
        owner: u3,
        company: c3,
        job_title: 'Software Engineer, Mobile iOS',
        description: 'We are seeking full-time iOS Engineers to join the Mobile team. As a Facebook Mobile Software Engineer, you will specialize in building elegant products on world-class technologies that bring the Facebook experience to hundreds of millions of people, anytime and anywhere. We are looking for someone that has strong experience with developing user interfaces for applications on the iPhone or iPad using the iOS SDK. If you are interested in joining a world-class team of passionate people and industry veterans who like to work hard and play hard, we look forward to hearing from you soon!',
        location: 'Seattle, WA',
        job_type: 'Full Time',
        salary: 25,
        currency: 'bitcoin',
        years_experience: 3
    )
                
    j11 = Job.create!(
        owner: u1,
        company: c1,
        job_title: 'Software Engineer, Fleetnet',
        description: 'Companies have talked for years about a future of "connected cars." At Tesla, we’re at the forefront of innovation by providing a complete suite of rich backend services to our exponentially growing fleets. The team specialized in IoT communication is in charge of every remote interaction with the vehicles (remote control, remote diagnostic, vehicle telemetry for self-learning Autopilot algorithm, APIs for mobile apps, etc.). We’re also responsible for sending over-the-air software updates constantly delivering new features and improvements to our customers.',
        location: 'Palo Alto, CA',
        job_type: 'Full Time',
        salary: 25,
        currency: 'bitcoin  ',
        years_experience: 5
    )

    j22 = Job.create!(
        owner: u2,
        company: c2,
        job_title: 'Software Development Engineer',
        description: 'Successful candidates will be strong leaders who can prioritize well, communicate clearly, and have a consistent track record of ownership and delivery. A strong candidate should understand various optimization techniques and build innovative software solutions working with the supply chain business partners in delivering a viable solution. You should enjoy working closely with your peers in a group of very smart and talented engineers. We have a team culture that encourages innovation and expect developers and management alike to take a high level of ownership for the product vision, technical architecture and project delivery.',
        location: 'Toronto, ON',
        job_type: 'Full Time',
        salary: 20,
        currency: 'bitcoin',
        years_experience: 1
    )
            
    j32 = Job.create!(
        owner: u3,
        company: c3,
        job_title: 'Software Test Engineer',
        description: 'The ideal candidate is a self-driven individual working in a cross-functional team environment and will be responsible for planning the design, development, and implementation of factory test software. You will enforce manufacturability, testability and ensure cost-effective designs are implemented for testing and automation systems, software, and equipment. This position will have responsibilities for NPI test development and sustaining support of production released test and automation systems. You must be responsive, flexible and able to succeed within an open collaborative peer environment. We are looking for someone with a productive mindset who can apply their expertise to solve problems in creative, insightful ways.',
        location: 'Menlo Park, CA',
        job_type: 'Full Time',
        salary: 18,
        currency: 'bitcoin',
        years_experience: 1
    )
        
    j41 = Job.create!(
        owner: u4,
        company: c4,
        job_title: 'Engineer in Design',
        description: 'As Quip\'s web developer, you will be responsible for our product marketing website, including the development and source code management of the site. You will work closely with the design, product engineering, and marketing teams to prototype, iterate, and launch new experiences that define Quip to perspective customers. The ideal candidate has multiple years of experience — at an agency, on an in-house team, or as a freelancer — working on a large-scale, customer-facing websites and enjoys jumping between both the big picture and the details.',
        location: 'San Francisco, CA',
        job_type: 'Full Time',
        salary: 18,
        currency: 'bitcoin',
        years_experience: 1
    )

    j21 = Job.create!(
        owner: u2,
        company: c2,
        job_title: 'Software Development Manager',
        description: 'We are looking for a highly skilled, experienced, and motivated Engineering Leader to innovate and solve the challenges at a massive scale. You will participate in product direction and road-map planning, project execution scheduling, and hiring engineers to develop cutting-edge systems. A successful candidate will bring deep technical and leadership expertise, and ability to work within a fast-paced startup culture in a large company to deliver solid code that has broad business impact. This is a unique and rare opportunity to get in on the ground floor and start on the FinTech innovation.',
        location: 'Seattle, WA',
        job_type: 'Full Time',
        salary: 30,
        currency: 'bitcoin',
        years_experience: 10
    )

    j42 = Job.create!(
        owner: u4,
        company: c4,
        job_title: 'Senior Product Analyst',
        description: 'The Sr. Product Analyst collaborates with a group of Product Owners on requirements, business value scoring and success metrics. The Sr. Product Analyst drives the requirements gathering process that accurately reflects business needs which includes: risk analysis, “as is” and “to be” process documentation, agnostic of a specific technical solution. The Sr. Product Analyst reviews technical solutions for compliance to business process and objectives. The Sr. Product Analyst coordinates end to end UAT cycle and develops organizational change management framework; group/functional success metrics) acceptance criteria.',
        location: 'San Francisco, CA',
        job_type: 'Full Time',
        salary: 23,
        currency: 'bitcoin',
        years_experience: 4
    )
        
    j51 = Job.create!(
        owner: u5,
        company: c5,
        job_title: 'Product and Test Engineer',
        description: 'Product and Test Engineer who has a passion for development of high-performance CMOS products.  We are looking for someone who is creative and can deliver novel solutions.  As a member of the trail blazing team you would take a broad role.  The position will have responsibility for engineering tools to be used in development, setting up system level test, developing hardware for stress testing, and developing the capability to generate test based on verification test suites.  They will also be responsible for data analytics during characterization and manufacturing.',
        location: 'Sunnyvale, CA',
        job_type: 'Full Time',
        salary: 17,
        currency: 'bitcoin',
        years_experience: 1
    )
    
    j10 = Job.create!(
        owner: u1,
        company: c1,
        job_title: 'Full Stack Developer, Toolbox Software',
        description: 'As a Full-stack Developer in Service Engineering, you will be responsible for specifying, building, and maintaining the next generation of diagnostic tooling for our vehicles and energy products. You’ll be part of one of our multidisciplinary product team, where you will build both back-end and front-end systems, and work closely with product managers, engineers, operations, and data analysts.',
        location: 'Palo Alto, CA',
        job_type: 'Full Time',
        salary: 20,
        currency: 'bitcoin',
        years_experience: 3
    )

    j52 = Job.create!(
        owner: u5,
        company: c5,
        job_title: 'Senior Applied Scientist',
        description: 'What if your job description were simply “Make tomorrow better?” That’s the essence of roles within our Bing Team. Every day, we bring an insatiable curiosity to the table, challenging ourselves to reimagine what is and what can be. We build on what’s come before to create what’s next. We drive machine intelligence. We help shape the future. We empower billions of people around the globe. Online Advertising is one of the fastest growing businesses on the Internet today, with about $70 billion of a $600 billion advertising market already online. Search engines, web publishers, major ad networks, and ad exchanges are now serving billions of ad impressions per day and generating terabytes of user events data every day. The rapid growth of online advertising has created enormous opportunities as well as technical challenges that demand computational intelligence. Computational Advertising has emerged as a new interdisciplinary field that involves information retrieval, machine learning, data mining, statistics, operations research, and micro-economics, to solve challenging problems that arise in online advertising. The central problem of computational advertising is to select an optimized slate of eligible ads for a user to maximize a total utility function that captures the expected revenue, user experience and return on investment for advertisers.',
        location: 'Bellevue, WA',
        job_type: 'Full Time',
        salary: 24,
        currency: 'bitcoin',
        years_experience: 5
    )
end
