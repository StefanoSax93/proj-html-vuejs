<template>
    <div class="bg_dark py-5" id="about">
        <div class="my-container py-5">
            <div class="row flex-column flex-md-row">
                <div class="col">
                    <div class="subtitle">about the network</div>
                    <h1 class="text-white title"><span class="title-bg">The</span>Company</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                        iaculis diam varius diam ultricies lacinia. Mauris lacus tellus,
                        ultrices eu volutpat sit amet, finibus a ipsum.
                    </p>
                    <p>
                        Curabitur convallis, diam a egestas iaculis, neque lorem
                        interdum felis, in viverra lacus tortor in leo.
                    </p>
                </div>
                <div class="col">
                    <div class="row row-cols-2">
                        <div class="col" v-for="(item,i) in companyList" :key="i">
                            <div class="py-3">
                                <div class="mb-3">
                                    <i :class="`fa solid ${item.icon} subtitle fs-5`"></i>
                                    <span class="text-white text-capitalize fw-bold fs-5 ms-2">{{item.title}}</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {state} from '../store';

export default {
    name: 'TheCompany',
    computed: {
        companyList() {
            return state.companyList;
        }
    }
}
</script>

<style lang="scss" scoped>

</style>