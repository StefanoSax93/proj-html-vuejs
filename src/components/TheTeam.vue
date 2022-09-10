<template>
    <div class="bg_dark py-5" id="team">
        <div class="my-container py-5" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300"
            data-aos-offset="0">
            <div class="subtitle">we like what we do</div>
            <div class="row flex-column flex-lg-row gap-1">
                <div class="col col-lg-8">
                    <div class="title text-white"><span class="title-bg">Team</span>of Experts</div>
                    <p class="text-white mb-5">
                        Ethics and integrity are the bases on which our professionals build their careers.
                        They are fundamentals that become daily attitudes.
                    </p>
                    <div class="row ">
                        <div class="col col-md-6 text-white mb-4" v-for="(member,i) in teamList" :key="i">
                            <div class="d-flex gap-3">
                                <img :src="`img/${member.img}`" alt="" class="img-style">
                                <div class="p-2">
                                    <div class="mb-2 fs-5 fw-bold">{{member.name}}</div>
                                    <div class="text-uppercase mb-2"><small>{{member.role}}</small></div>
                                    <div class="d-flex text_primary gap-3 text-center">
                                        <i class="fa-brands board fa-facebook-f"></i>
                                        <i class="fa-brands board fa-twitter"></i>
                                        <i class="fa-brands board fa-linkedin-in"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col mt-4">
                    <div class="bg_primary p-3 rounded text-white">
                        <div class="fs-5 fw-bold mb-3">President Speech</div>
                        <p class="mb-4 text-white">
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit
                            Praesent ut lacinia diam.
                        </p>
                        <p class="mb-4 text-white">
                            Vivamus efficitur et est quis
                            posuere. Nulla sollicitudin vulputate
                            dui, id pretium tortor congue eu.
                            Integer aliquet justo eu quam
                            volutpat ullamcorper.
                        </p>
                        <p class="mb-4 text-white">
                            Duis ut hendrerit mauris. Phasellus
                            faucibus ut enim vel tincidunt
                            Nunc venenatis a dui et laoreet.
                        </p>
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <div class="fs-6 text-white fw-bold">T.Johnson</div>
                            <i class="fa-solid fa-2x fa-quote-right" style="color: #046162;"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { state } from '../store'
export default {
    name: 'TheTeam',
    computed: {
        teamList() {
            return state.teamList
        }
    }
}

</script>

<style lang="scss" scoped>
.img-style {
    max-width: 100px;
    border-radius: 5px;
}
</style>