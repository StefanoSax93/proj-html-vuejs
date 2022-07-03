<template>
    <div>
        <InsuranceConsulting/>
        <TheCompany/>
        <TheServices/>
        <ProcessManagement/>
    </div>
</template>

<script>
import InsuranceConsulting from './InsuranceConsulting.vue';
import TheCompany from './TheCompany.vue';
import TheServices from './TheServices.vue';
import ProcessManagement from './ProcessManagement.vue';


    export default {
        name: 'TheMain',
        components: { InsuranceConsulting, TheCompany, TheServices, ProcessManagement },
    }

</script>

<style lang="scss">

</style>