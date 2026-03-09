import { config } from 'dotenv'
config({ path: '.env.local' })

const seed = async () => {
  console.log('Starting seed...')
  const { getPayload } = await import('./lib/payload')
  const payload = await getPayload()

  // 1. Site Settings
  try {
    console.log('Seeding site settings...')
    await payload.updateGlobal({
      slug: 'site-settings',
      data: {
        schoolName: 'Unilorin Secondary School',
        motto: 'Hard work, Discipline and Progress',
        description:
          'Unilorin Secondary School (USS) is a distinguished co-educational institution affiliated with the University of Ilorin, founded in 1982.',
        contactPhone: '0705 154 9666',
        contactEmail: 'info@uilsecondary.unilorin.edu.ng',
        address: 'Mini Campus, University of Ilorin, Ilorin, Kwara State, Nigeria',
        portalUrl: 'https://portal.uss.sch.ng',
        admissionSteps: [
          {
            stepNumber: 1,
            title: 'Obtain Application Form',
            description:
              'Purchase the application form from the school administrative office or download it from the student portal.',
          },
          {
            stepNumber: 2,
            title: 'Complete Application',
            description:
              'Fill out the application form with accurate information. Attach a recent passport photograph.',
          },
          {
            stepNumber: 3,
            title: 'Submit Required Documents',
            description:
              'Submit the completed form along with all required documents before the deadline.',
          },
          {
            stepNumber: 4,
            title: 'Entrance Examination',
            description:
              'Attend the entrance examination. The exam covers English Language, Mathematics, and General Knowledge.',
          },
          {
            stepNumber: 5,
            title: 'Admission Offer & Registration',
            description:
              'Successful candidates receive admission letters. Complete registration within two weeks.',
          },
        ],
        requiredDocuments: [
          { document: 'Birth Certificate or Age Declaration' },
          { document: 'Primary School Leaving Certificate' },
          { document: 'Recent Passport Photographs (4 copies)' },
          { document: 'Report Cards from Previous School' },
          { document: 'Local Government Identification' },
          { document: 'Medical Fitness Certificate' },
          { document: 'Parent/Guardian Identification' },
        ],
      },
    })
    console.log('Site settings seeded successfully.')
  } catch (error) {
    console.error('Error seeding site settings:', error)
  }

  // 2. Principals
  try {
    console.log('Seeding principals...')
    const existingPrincipals = await payload.find({
      collection: 'principals',
      limit: 1,
    })

    if (existingPrincipals.totalDocs === 0) {
      const principals = [
        { name: 'S. O. Oshatoba', title: 'Late Chief', tenureStart: 1982, tenureEnd: '1992', order: 1 },
        { name: 'O. O. Omotosho', title: 'Chief', tenureStart: 1992, tenureEnd: '1996', order: 2 },
        { name: 'S. O. Awobuluyi', title: 'Mrs.', tenureStart: 1996, tenureEnd: '2009', order: 3 },
        { name: 'R. O. Alaja', title: 'Alhaji', tenureStart: 2010, tenureEnd: '2015', order: 4 },
        { name: 'S. N. Jaiyeola', title: 'Alhaja', tenureStart: 2016, tenureEnd: '2019', order: 5 },
        { name: 'T. N. Durojaiye', title: 'Alhaji', tenureStart: 2020, tenureEnd: 'Present', order: 6 },
      ]

      for (const principal of principals) {
        await payload.create({
          collection: 'principals',
          data: principal,
        })
        console.log(`  Created principal: ${principal.title} ${principal.name}`)
      }
      console.log('Principals seeded successfully.')
    } else {
      console.log('Principals already exist, skipping.')
    }
  } catch (error) {
    console.error('Error seeding principals:', error)
  }

  // 3. Testimonials
  try {
    console.log('Seeding testimonials...')
    const existingTestimonials = await payload.find({
      collection: 'testimonials',
      limit: 1,
    })

    if (existingTestimonials.totalDocs === 0) {
      const testimonials = [
        {
          quote:
            'USS gave me a solid academic foundation that prepared me for university. The discipline I learned here continues to guide my career.',
          author: 'Aisha Abdullahi',
          role: 'Alumni, Class of 2018',
        },
        {
          quote:
            'As a parent, I am thoroughly impressed with the standard of education and care my children receive. The teachers are dedicated and the environment is nurturing.',
          author: 'Dr. Olumide Fashola',
          role: 'Parent',
        },
        {
          quote:
            'The combination of academic rigour and extracurricular activities at USS makes it one of the best secondary schools in Kwara State.',
          author: 'Ibrahim Saliu',
          role: 'SS3 Student',
        },
      ]

      for (const testimonial of testimonials) {
        await payload.create({
          collection: 'testimonials',
          data: testimonial,
        })
        console.log(`  Created testimonial by: ${testimonial.author}`)
      }
      console.log('Testimonials seeded successfully.')
    } else {
      console.log('Testimonials already exist, skipping.')
    }
  } catch (error) {
    console.error('Error seeding testimonials:', error)
  }

  // 4. News
  try {
    console.log('Seeding news...')
    const existingNews = await payload.find({
      collection: 'news',
      limit: 1,
    })

    if (existingNews.totalDocs === 0) {
      const newsItems = [
        {
          title: 'USS Students Excel at National Science Olympiad',
          slug: 'science-olympiad-2025',
          excerpt:
            'Our science department students brought home multiple awards at this year\'s National Science Olympiad.',
          category: 'news' as const,
          status: 'published' as const,
          featured: true,
          publishedDate: '2025-11-15',
        },
        {
          title: 'Annual Cultural Day Celebration',
          slug: 'cultural-day-2025',
          excerpt:
            'Students from all departments came together to celebrate Nigeria\'s rich cultural heritage through performances, food, and art exhibitions.',
          category: 'events' as const,
          status: 'published' as const,
          featured: true,
          publishedDate: '2025-10-20',
        },
        {
          title: '2026/2027 Admission Process Now Open',
          slug: 'admissions-2026-2027',
          excerpt:
            'Registration for the 2026/2027 academic session is now open. Visit our admissions page or the student portal to begin your application.',
          category: 'announcements' as const,
          status: 'published' as const,
          featured: true,
          publishedDate: '2025-09-01',
        },
      ]

      for (const item of newsItems) {
        await payload.create({
          collection: 'news',
          data: item,
        })
        console.log(`  Created news: ${item.title}`)
      }
      console.log('News seeded successfully.')
    } else {
      console.log('News already exist, skipping.')
    }
  } catch (error) {
    console.error('Error seeding news:', error)
  }

  console.log('Seed complete!')
  process.exit(0)
}

seed().catch((error) => {
  console.error('Seed failed:', error)
  process.exit(1)
})
