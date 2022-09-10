<template>
    <div class="py-5 bg-news">
        <div class="my-container p-5" data-aos="zoom-out-left" data-aos-easing="linear" data-aos-duration="1000">
            <div class="row flex-column flex-md-row gap-3">
                <div class="col">
                    <div class="subtitle">newsletter</div>
                    <div class="title text-white mb-2"><span class="title-bg">Know</span> First</div>
                    <p class="text-white">Follow closely and receive content about our company
                    and the news of the current market.</p>
                </div>
                <div class="col">
                    <div v-for="(placeholder,i) in placeholders" :key="i">
                        <input type="text" class="form-control bg-input mb-3" :placeholder="placeholder">
                    </div>
                    <a href="" class="_btn btn-green d-inline-block">subscribe</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { state } from '../store'

export default {
    name:'TheNewsletter',
    computed: {
        placeholders() {
            return state.placeholders.slice(0,2);
        }
    }
}

</script>

<style lang="scss" scoped>
.bg-news {
    background-image: url('../../public/img/bg-1.jpg');
    background-position: center;
    background-size: cover;

    .bg-input {
        opacity: 0.5;
        padding: 10px;
    }
}
</style>