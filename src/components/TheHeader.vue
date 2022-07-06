<template>
        <nav class="sticky-top py-3" :class="{'bg-light': scrollPosition > 100}">
            <div class="my-container">
                <div class="d-flex justify-content-between align-items-center">
                    <a class="_btn btn-nex">N e x <span class="text-black">g e n</span></a>
                    <div class="d-flex align-items-center d-none d-lg-flex">
                        <span v-for="link in navLinks" :key="link">
                            <ul class="nav">
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" :href="link.href">{{link.title}}</a>
                                </li>
                            </ul>
                        </span>
                        <span></span>
                        <a href="" class="_btn btn-green ms-2">get in touch</a>
                    </div>
                    <div class="d-lg-none">
                        <div type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa-solid fa-2x fa-bars text_primary"></i>
                        </div>
                        <ul class="dropdown-menu">
                            <li v-for="link in navLinks" :key="link"><a class="dropdown-item" :href="link.href">{{link.title}}</a></li>
                        </ul>
                    </div>
                </div>
            </div> 
        </nav>    
</template>

<script>
import {state} from '../store';


    export default {
        name: 'TheHeader',
        data() {
            return {
                scrollPosition: null
            } 
        },
        methods: {
            updateScroll() {
                this.scrollPosition = window.scrollY
            }
        },
        mounted() {
                window.addEventListener('scroll', this.updateScroll);
        },
        computed: {
            navLinks() {
                return state.navLinks;
            }
        }
    }

</script>

<style lang="scss" scoped>
@import '../assets/scss/variables';
.nav-link {
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 500;

    &:hover, &:focus {
            color: $color-primary;
    }
}
.dropdown-item {
    text-transform: uppercase;
    text-decoration: none;
    color: $color-primary;

    &:hover, &:focus {
        background-color: $color-primary;
        color: white;
    }
}

</style>