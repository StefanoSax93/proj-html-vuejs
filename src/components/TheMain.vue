<template>
    <div>
        <InsuranceConsulting/>
        <TheCompany/>
        <TheServices/>
        <ProcessManagement/>
        <TheTeam/>
    </div>
</template>

<script>
import InsuranceConsulting from './InsuranceConsulting.vue';
import TheCompany from './TheCompany.vue';
import TheServices from './TheServices.vue';
import ProcessManagement from './ProcessManagement.vue';
import TheTeam from './TheTeam.vue';


    export default {
        name: 'TheMain',
        components: { InsuranceConsulting, TheCompany, TheServices, ProcessManagement , TheTeam },
    }

</script>

<style lang="scss">

</style>