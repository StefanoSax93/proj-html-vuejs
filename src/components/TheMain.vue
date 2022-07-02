<template>
    <div>
        <InsuranceConsulting/>
        <TheCompany/>
    </div>
</template>

<script>
import InsuranceConsulting from './InsuranceConsulting.vue';
import TheCompany from './TheCompany.vue';


    export default {
        name: 'TheMain',
        components: { InsuranceConsulting,TheCompany }
    }

</script>

<style lang="scss">

</style>