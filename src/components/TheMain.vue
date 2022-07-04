<template>
    <div>
        <InsuranceConsulting/>
        <TheCompany/>
        <TheServices/>
        <ProcessManagement/>
        <TheTeam/>
        <LatestNews/>
        <TheNewsletter/>
    </div>
</template>

<script>
import InsuranceConsulting from './InsuranceConsulting.vue';
import TheCompany from './TheCompany.vue';
import TheServices from './TheServices.vue';
import ProcessManagement from './ProcessManagement.vue';
import TheTeam from './TheTeam.vue';
import LatestNews from './LatestNews.vue';
import TheNewsletter from './TheNewsletter.vue';


    export default {
        name: 'TheMain',
        components: { InsuranceConsulting, TheCompany, TheServices, ProcessManagement, TheTeam, LatestNews , TheNewsletter },
    }

</script>

<style lang="scss">

</style>