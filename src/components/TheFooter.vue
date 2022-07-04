<template>
    <div class="py-5 bg_dark">
        <div class="my-container py-5 mb-5 text-white">
            <div class="row">
                <div class="col-3">
                    <a href="" class="_btn btn-nex fs-6 d-inline-block mb-4">N e x <span class="text-white">g e n</span></a>
                    <div class="mb-4">A Functional HTML Template for Corporate & Business</div>
                    <div class="mb-4">
                        <div v-for="(info,i) in agencyInfo" :key="i" class="mb-3">
                            <i :class="`fa-solid ${info.icon} me-2`"></i>
                            <span>{{info.text}}</span>
                        </div>
                    </div>
                    <a href="" class="d-inline-block _btn btn-green-outline text-white">get in touch</a>
                </div>
                <div class="col">
                    <div class="row h-100">
                        <div class="col h-100" v-for="(info,id) in footerInfo" :key="id">
                            <div class="my-card">
                                <div class="fw-bold fs-5 mb-3">{{info.title}}</div>
                                <ul class="list-unstyled">
                                    <li v-for="(element,i) in info.text" :key="i" class="mb-2">
                                        <i class="fa-solid fa-chevron-right me-2"></i>
                                        <a href="">{{element}}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {state} from '../store'

export default {
        name: 'TheFooter',
        computed: {
            agencyInfo() {
                return state.agencyInfo
            },
            footerInfo() {
                return state.footerInfo
            }
        }
    }

</script>

<style lang="scss">
@import '../assets/scss/variables';

.my-card {
    background-color: #19191F;
    border-radius: 8px;
    padding: 30px;
    height: 100%;

    a {
        color: white;
        text-decoration: none;

        &:hover,&:focus {
            text-decoration: underline;
            color: $color-primary;
        }
    }
}
</style>