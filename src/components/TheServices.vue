<template>
    <div class="bg_light py-5" id="services">
        <div class="my-container py-5">
            <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
                <div class="subtitle">our business area</div>
                <div class="title mb-3">Exellence in <span class="title-bg text_primary">Services</span></div>
                <div class="d-flex flex-column flex-md-row gap-3 justify-content-between mb-5">
                    <p class="w-75 my-0">
                        We are leaders in providing consultancy services with a set of cutting-edge technologies and a
                        team of
                        experienced and renowned professionals. These are some options that you can hire.
                    </p>
                    <div>
                        <a href="" class="_btn btn-green d-inline-block">see all</a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col col-md-4 mb-3" v-for="(service,i) in servicesList" :key="i" data-aos="fade-up"
                    data-aos-easing="linear" data-aos-duration="1000">
                    <div class="card border-0 p-4">
                        <div class="d-flex justify-content-between text_primary mb-3">
                            <i :class="`fa solid ${service.icon} fs-2`"></i>
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                        <div class="fw-bold fs-5 mb-4">{{service.title}}</div>
                        <p>
                            Lorem ipsum dolor sit amet
                            consectetur adipiscing elit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { state } from '../store';

export default {
    name: 'TheServices',
    computed: {
        servicesList() {
            return state.servicesList;
        }
    }
}
</script>

<style lang="scss" scoped>

</style>