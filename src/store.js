import Vue from 'vue'

export const state = Vue.observable({
    NavLinks: ['home', 'about', 'services', 'process', 'team', 'blog'],
    CompanyList: [
        {icon: 'fa-award', title: 'tradition'},
        {icon: 'fa-lock', title: 'security'},
        {icon: 'fa-file-pen', title: 'certificate'},
        {icon: 'fa-graduation-cap', title: 'expertise'},
    ],
    ServicesList: [
        {icon: 'fa-sitemap', title: 'Audit & Assurance'},
        {icon: 'fa-briefcase', title: 'Financial Advisory'},
        {icon: 'fa-chart-simple', title: 'AnalYtics and M&A'},
        {icon: 'fa-plane', title: 'Middle Marketing'},
        {icon: 'fa-globe', title: 'Legal Consulting'},
        {icon: 'fa-box-archive', title: 'Regulatory Risk'},
    ],
    ProcessList: [
        {id:'01', title:'Collection on information'},
        {id:'02', title:'Strategic Planning'},
        {id:'03', title:'Assignment of responsabilities'},
        {id:'04', title:'Formatting porcess'},
        {id:'05', title:'Continuity formalization'},
    ]
})