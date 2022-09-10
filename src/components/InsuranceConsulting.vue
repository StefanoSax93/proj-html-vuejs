<template>
    <div class="position-relative">
        <img src="../../public/img/bg-6.jpg" alt="" class="jumbotron" data-aos="fade-right" data-aos-easing="ease-in" data-aos-duration="1000">
        <div class="my-container vertical-padding" data-aos="fade-left" data-aos-easing="ease-in" data-aos-duration="1000">
            <div class="row justify-content-center">
                <div class="col d-none d-lg-block"></div>
                <div class="col-10 col-lg-6">
                    <div class="subtitle">fusions & acquisitions</div>
                    <div class="text-capitalize title main-title mb-4">insurance consulting</div>
                    <div class="row row-cols-1 row-cols-md-2">
                        <div v-for="placeholder in placeholders" :key="placeholder" class="col">
                            <input type="text" class="form-control bg-input mb-2" id="exampleFormControlInput1" :placeholder="placeholder">
                        </div>
                        <div class="col mb-4">
                            <div class="dropdown">
                                <button class="form-control bg-input text-muted px-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <div class="d-flex justify-content-between align-items-center px-1">
                                        <div>More Info</div>
                                        <i class="fa-solid fa-angle-down"></i>
                                    </div>
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li v-for="link in navLinks" :key="link"><a class="dropdown-item" :href="link.href">{{link.title}}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a href="" class="_btn btn-green me-3">get in touch</a>
                        <a href="" class="_btn btn-green-outline">read more</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {state} from '../store';

export default {
    name: 'InsuranceConsulting',
    computed: {
        navLinks() {
            return state.navLinks;
        },
        placeholders() {
            return state.placeholders;
        }
    }
}
</script>

<style lang="scss">
@import '../assets/scss/variables';
.jumbotron {
    position: absolute;
    left: 0;
    top: -120px;
    width: 100%;
    height: calc(100% + 120px);
    object-fit: cover;
    z-index: -5;
    
}
.vertical-padding {
padding: 150px 0;
    
    .bg-input {
    background-color: #D8D9D9;
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
}



</style>