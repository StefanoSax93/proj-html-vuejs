<template>
    <div class="py-5 bg-news">
        <div class="my-container p-5">
            <div class="row gap-3">
                <div class="col">
                    <div class="subtitle">newsletter</div>
                    <div class="title text-white mb-2"><span class="title-bg">Know</span> First</div>
                    <p class="text-white">Follow closely and receive content about our company
                    and the news of the current market.</p>
                </div>
                <div class="col">
                    <input type="text" class="form-control bg-input mb-3" placeholder="Name">
                    <input type="text" class="form-control bg-input mb-4" placeholder="Email">
                    <a href="" class="_btn btn-green">subscribe</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'TheNewsletter',
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