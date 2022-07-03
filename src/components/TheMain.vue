<template>
    <div>
        <InsuranceConsulting/>
        <TheCompany/>
        <TheServices/>
    </div>
</template>

<script>
import InsuranceConsulting from './InsuranceConsulting.vue';
import TheCompany from './TheCompany.vue';
import TheServices from './TheServices.vue';


    export default {
        name: 'TheMain',
        components: { InsuranceConsulting,TheCompany,TheServices },
    }

</script>

<style lang="scss">

</style>