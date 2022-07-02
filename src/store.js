import Vue from 'vue'

export const state = Vue.observable({
    NavLinks: ['home', 'about', 'services', 'process', 'team', 'blog'],
    CompanyList: [
        {icon: 'fa-award', title: 'tradition'},
        {icon: 'fa-lock', title: 'security'},
        {icon: 'fa-file-pen', title: 'certificate'},
        {icon: 'fa-graduation-cap', title: 'expertise'},
    ]
})