import Vue from 'vue'

export const state = Vue.observable({
    agencyInfo: [
        {icon:'fa-phone', text:'+1 (305) 1234-5678'},
        {icon:'fa-envelope', text:'hello@example.com'},
        {icon:'fa-location-dot', text:'Main Avenue, 987'},
    ],
    placeholders: ['Name', 'Email', 'Phone'],
    navLinks: ['home', 'about', 'services', 'process', 'team', 'blog'],
    companyList: [
        {icon: 'fa-award', title: 'tradition'},
        {icon: 'fa-lock', title: 'security'},
        {icon: 'fa-file-pen', title: 'certificate'},
        {icon: 'fa-graduation-cap', title: 'expertise'},
    ],
    servicesList: [
        {icon: 'fa-sitemap', title: 'Audit & Assurance'},
        {icon: 'fa-briefcase', title: 'Financial Advisory'},
        {icon: 'fa-chart-simple', title: 'AnalYtics and M&A'},
        {icon: 'fa-plane', title: 'Middle Marketing'},
        {icon: 'fa-globe', title: 'Legal Consulting'},
        {icon: 'fa-box-archive', title: 'Regulatory Risk'},
    ],
    processList: [
        {id:'01', title:'Collection on information'},
        {id:'02', title:'Strategic Planning'},
        {id:'03', title:'Assignment of responsabilities'},
        {id:'04', title:'Formatting porcess'},
        {id:'05', title:'Continuity formalization'},
    ],
    teamList: [
        {img:'team-1.jpg', name:'David Cooper', role: 'cto & co-founder'},
        {img:'team-3.jpg', name:'David Cooper', role: 'cto & co-founder'},
        {img:'team-2.jpg', name:'David Cooper', role: 'cto & co-founder'},
        {img:'team-4.jpg', name:'David Cooper', role: 'cto & co-founder'}
    ],
    latestNews: [
        {img:'news-1.jpg',text:'Increasing creativity is possible for everyone'},
        {img:'news-2.jpg',text:'Because market research is part of the business plan'},
        {img:'news-3.jpg',text:'Working from home is now a trend'}
    ],
    footerInfo: [
        {title:'About', text:['The Company', 'Institutional', 'Social & Events', 'Innovation' , 'Environment' , 'Technology']},
        {title:'Services', text:['Audit & Assurance', 'Financial Advisory', 'Analytics M&A', 'Middle Marketing' , 'Legal Consulting' , 'Regulatory Risk']},
        {title:'Support', text:['Responsability', 'Terms of Use', 'About Cookies', 'Privacy Policy' , 'Accessibility' , 'Information']},
    ]
})