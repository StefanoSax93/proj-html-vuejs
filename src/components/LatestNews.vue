<template>
    <div class="py-5">
        <div class="my-container py-5">
            <div class="subtitle">our editorial content</div>
            <div class="title">Latest <span class="title-bg text_primary">News</span></div>
            <div class="d-flex justify-content-between mt-2 mb-4">
                <p>Every week we publish content about what is best in business world.</p>
                <div>
                    <a href="" class="_btn btn-green">see all</a>
                </div>
            </div>
            <div class="row">
                <div class="col-4" v-for="(item,i) in latestNews" :key="i">
                    <div class="position-relative">
                        <img :src="`img/${item.img}`" alt="" class="w-100 card-board">
                        <div class="card-overlay card-board p-4 text-center fs-5">
                            <div class="d-flex h-100 text-white align-items-end">
                                {{item.text}}
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
    name:'LatestNews',
    computed: {
        latestNews() {
            return state.latestNews;
        }
    }
}

</script>

<style lang="scss" scoped>
.card-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.5);
        transition: all .3s ease;
        opacity: 0;
        font-weight: 600;

        &:hover {
            opacity: 1;
        }
}
.card-board {
        border-radius: 10px;
}
</style>