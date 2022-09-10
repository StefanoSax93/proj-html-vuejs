<template>
    <div class="py-5" id="process" data-aos="zoom-in">
        <div class="my-container pt-5 px-5 text-center" >
            <div class="subtitle">how it works in practice</div>
            <div class="title"><span class="text_primary title-bg">Process</span> Management</div>
            <p class="px-5 mt-3">
                We work with innovative methodologies to ensure that the entire reformatting process is done
                from start to finish as planned.
            </p>
        </div>
        <div class="my-5">
            <div class="d-flex justify-content-center flex-wrap flex-xl-nowrap">
                <div class="text-center" v-for="process in processList" :key="process.id">
                    <div class="d-flex justify-content-center align-items-center">
                        <div class="flex-grow-1 line d-none d-xl-flex"></div>
                        <div class="board">{{process.id}}</div>
                        <div class="flex-grow-1 line d-none d-xl-flex"></div>
                    </div> 
                    <div class="mx-3 ">
                        <div class="fw-bold fs-5 my-3 px-3">{{process.title}}</div>
                        <p>
                            Lorem ipsum dolor sit amet
                            consectetur.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {state} from '../store';

export default {
    name: 'ProcessManagement',
    computed: {
        processList() {
            return state.processList;
        }
    }
}

</script>

<style lang="scss" scoped>
@import '../assets/scss/variables';
.line {
    border-bottom:5px solid $color-primary-opaque;
}
</style>