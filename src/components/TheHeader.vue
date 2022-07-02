<template>
    <div class="sticky-top">
        <div class="py-3 bg-white">
            <div class="my-container">
                <div class="d-flex justify-content-between align-items-center">
                    <a class="_btn btn-nex">N e x <span class="text-black">g e n</span> </a>
                    <div class="d-flex align-items-center">
                        <span v-for="link in NavLinks" :key="link">
                            <NavBarLinks :link="link"></NavBarLinks>
                        </span>
                        <span></span>
                        <a href="" class="_btn btn-green ms-2">get in touch</a>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
import NavBarLinks from './NavBarLinks.vue';

    export default {
        name: 'TheHeader',
        components: { NavBarLinks },

        data() {
            return {
                NavLinks: ['home', 'about', 'services', 'process', 'team', 'blog']
            }
        }
    }

</script>

<style lang="scss">
@import '../assets/scss/variables';


</style>