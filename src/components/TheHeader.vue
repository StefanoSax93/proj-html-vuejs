<template>
        <div class="sticky-top py-3 bg-white">
            <div class="my-container">
                <div class="d-flex justify-content-between align-items-center">
                    <a class="_btn btn-nex">N e x <span class="text-black">g e n</span></a>
                    <div class="d-flex align-items-center">
                        <span v-for="link in navLinks" :key="link">
                            <ul class="nav">
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="#">{{link}}</a>
                                </li>
                            </ul>
                        </span>
                        <span></span>
                        <a href="" class="_btn btn-green ms-2">get in touch</a>
                    </div>
                </div>
            </div> 
        </div>    
</template>

<script>
import {state} from '../store';


    export default {
        name: 'TheHeader',
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

</style>