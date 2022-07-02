<template>
    <nav class="nav">
        <a class="nav-link" aria-current="page" href="#">{{link}}</a>
    </nav>
</template>

<script>

export default {
    name: 'TheHeader',
    props: {
        link: String,
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables';
.nav-link {
    color: black;
    text-transform: uppercase;

    &:hover {
        color: $color-primary;
        text-decoration: underline;
    }
}

</style>