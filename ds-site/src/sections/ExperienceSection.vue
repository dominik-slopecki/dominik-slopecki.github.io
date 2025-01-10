<script setup lang="ts">
const experiences = [
  {
    companyName: 'Efigence',
    roles: [
      {
        roleName: 'QA Engineer',
        startDate: '06.2017',
        endDate: '07.2020',
      },
      {
        roleName: 'Full-Stack Developer',
        startDate: '12.2019',
        endDate: '07.2020',
      },
    ],
    jobDescription: `Multiple projects verification (around 20 projects from at least 15 different companies) with full RWD approach.
      Physical devices testing with various settings as well as tablets and laptops.
      Automated testing of applications using Selenium + TestNG + Cucumber stack (and ScreenDiff to verify if page styling hasn't gone bonkers).
      SEO Audits with SEOFrog.
      WCAG Audits with help of Lighthouse.
      Performance Testing with JMeter.
      Handmade Backdoor/SQL Injection tests with Postman and Fiddler.
      Analysis of SLA Agreements.
      Creating presentations and courses for the team (i.e. "Postman Basics" and similar).
      Writing articles for the company blog (SEO Basics, OG Tags by examples, Cookies and GPDR, PPI).
      Preparing various calculators and tools for the team for better project management (mostly using Google Sheets and similar).
      Designing Chrome/Firefox themes for the company and it's sister company when learning Figma.
      Designing mail motives with Figma, and creating (after-hours and from scratch) application that allowed to create release reports based on provided Redmine version link (it is still used by the company).`,
    technologiesUsed: [
      'Eclipse',
      'IntelliJ Community',
      'Maven',
      'Selenium',
      'TestNG',
      'Cucumber',
      'ExtentReports',
      'SoapUI',
      'JMeter',
      'Fiddler',
      'Lighthouse',
      'SEOFrog',
      'Google Docs',
      'Google Calc',
      'Google Presentation',
      'Git',
      'Redmine',
      'TestLink',
      'NuxtJS',
      'Vue2',
      'Node.js',
      'Express',
      'MJML',
      'Figma',
      'Git',
      'TypeScript',
      'Java',
    ],
    companySite: 'https://www.efigence.com/',
    companyColorClasses:
      'bg-indigo-950 border-indigo-950 hover:bg-indigo-900 hover:border-indigo-900',
  },
  {
    companyName: 'Apreel',
    roles: [
      {
        roleName: 'QA Engineer',
        startDate: '07.2020',
        endDate: '03.2023',
      },
      {
        roleName: 'Full-Stack Developer',
        startDate: '07.2021',
        endDate: '07.2023',
      },
    ],
    jobDescription: `Testing whole Wartas' Inside Project made on Angular using SerenityBDD + Cucumber stack (Including API Testing with RestAssured). Managed to refactor lots of code to be used as components for front-end side. Extended application features for both Frontend (Angular2 with Pug) and Backend (Spring + Hibernate + PostgreSQL) for Backend services. One example of added features would be allowing combining multiple parties for insurance offers. Added several rules and fixed several rules related to Insurance verification (using Groovy)`,
    technologiesUsed: [
      'IntelliJ Ultimate',
      'SerenityBDD',
      'Selenium',
      'Cucumber',
      'RestAssured',
      'Angular2',
      'Rest API',
      'Spring-Boot',
      'Hibernate',
      'LiquiBase',
      'Maven',
      'Gradle',
      'PostgreSQL',
      'TypeScript',
      'Pug',
      'Groovy',
      'Java',
    ],
    companySite: 'https://www.apreel.com/',
    companyColorClasses: 'bg-red-500 border-red-500 hover:bg-red-400 hover:border-red-400',
  },
  {
    companyName: 'Infogain Poland / Sabre',
    roles: [
      {
        roleName: 'Senior QA Engineer',
        startDate: '03.2023',
        endDate: '06.2023',
      },
    ],
    jobDescription: 'Waiting 2 months for any access before getting reduced ¯\_(ツ)_/¯',
    technologiesUsed: ['Microsoft Teams', 'Outlook'],
    companySite: 'https://www.sabre.com/',
    companyColorClasses: 'bg-red-800 border-red-800 hover:bg-red-700 hover:border-red-700',
  },
  {
    companyName: 'Samsung Electronics R&D Institute',
    roles: [
      {
        roleName: 'QA Engineer',
        startDate: '07.2023',
        endDate: '~',
      },
      {
        roleName: 'Full-Stack Developer',
        startDate: '07.2023',
        endDate: '~',
      },
    ],
    jobDescription: `Testing server-side for Watch Health related feature using RestAssured and Junit5,
      Searching for improvements (with SQLs analyzes, backend logic code analysis),
      Doing Busisness-Analyst replacement (Making new stories, specifications, tasks and synchronizing with teams from Korea and India),
      Fixing Backend bugs for if developers have problem with finding the root cause, Doing internal project related to time reporting.
      Adding new features and fixing bugs in internal companies Time reporting project.`,
    technologiesUsed: [
      'IntelliJ Ultimate',
      'RestAssured',
      'Postman',
      'AWS',
      'Spring-Boot',
      'LiquiBase',
      'Project-Reactor',
      'Junit5',
      'ArchUnit',
      'Jira',
      'PostgreSQL',
      'MSSQL',
      'Java',
      'Python',
    ],
    companySite: 'https://samsungrd.pl/',
    companyColorClasses: 'bg-blue-800 border-blue-800 hover:bg-blue-700 hover:border-blue-700',
  },
]
</script>

<template>
  <div class="overflow-hidden py-24 sm:py-32 text-gray-200">
    <h2
      class="text-center mb-24 mt-24 text-3xl font-extrabold leading-none tracking-tight text-gray-100 md:text-4xl lg:text-5xl dark:text-white"
      id="experience"
    >
      Professional Experience
    </h2>
    <div
      v-for="experience in experiences"
      :key="experience.companyName"
      class="px-6 lg:px-8 lg:mb-12"
    >
      <div
        class="flex flex-row flex-wrap shadow-2xl shadow-gray-900 hover:shadow-2xl hover:shadow-white justify-stretch rounded-lg transition-all px-4 lg:px-8 py-8 my-4 gap-y-8"
      >
        <div class="flex basis-full flex-wrap flex-row gap-x-4 gap-y-8 items-stretch">
          <div
            v-for="(role, index) in experience.roles"
            :key="role.roleName"
            class="lg:pr-8 lg:pt-4"
          >
            <div class="lg:max-w-lg flex flex-col">
              <h2 class="text-sm sm:text-base/7 font-semibold text-indigo-200">
                from {{ role.startDate }} to {{ role.endDate }}
              </h2>
              <div
                class="mt-2 text-pretty text-2xl font-semibold tracking-tight text-gray-300 sm:text-4xl"
              >
                <p v-if="index !== 0 && index !== experience.roles.length">and</p>
                {{ role.roleName }}
                <span v-if="index + 1 === experience.roles.length">in</span>
              </div>
            </div>
          </div>
          <a
            :href="experience.companySite"
            target="_blank"
            class="basis-full md:basis-1/3 border-2 self-end rounded-full text-white sm:text-xl text-base font-semibold transition-colors py-4 text-center lg:mr-auto ml-4"
            :class="experience.companyColorClasses"
          >
            {{ experience.companyName }}
          </a>
        </div>
        <div class="basis-full flex my-6 lg:mb-2 flex-wrap gap-x-2 gap-y-2">
          <p
            class="basis-full my-6 lg:mb-4 text-xl font-semibold text-indigo-200 sm:text-2xl hover:text-indigo-400 transition-colors"
          >
            Used tools / technologies / languages:
          </p>
          <div v-for="usedTechnology in experience.technologiesUsed" :key="usedTechnology">
            <div
              class="rounded-full bg-slate-800 py-0.5 px-2.5 border border-transparent text-sm text-white transition-all shadow-sm"
            >
              {{ usedTechnology }}
            </div>
          </div>
        </div>

        <div class="basis-full flex flex-wrap gap-x-2 gap-y-4">
          <p
            class="basis-full my-6 lg:mb-2 text-xl font-semibold text-indigo-200 sm:text-2xl hover:text-indigo-400 transition-colors"
          >
            Job description:
          </p>
          <p class="text-pretty sm:text-base text-sm tracking-tight">
            {{ experience.jobDescription }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
