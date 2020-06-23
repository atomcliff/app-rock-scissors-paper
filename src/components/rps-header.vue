<template>
    <div class="rpsHeader">
        <div class="container">
            <div class="result">
                <div class="result__player">Вы: {{myCnt}}</div>
                <div class="result__enemy">Противник: {{enemyCnt}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters(["myCnt", "enemyCnt"])
    }
};
</script>

<style scoped>
.rpsHeader {
    background-image: url("~@/assets/images/background.jpg");
}
.result {
    min-height: 100px;
    font-size: 50px;
    font-family: "Roboto", sans-serif;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}

@media screen and (max-width: 768px) {
    .result {
        font-size: 30px;
    }
}

@media screen and (max-width: 992px) and (orientation: landscape) {
    .result {
        min-height: 50px;
        font-size: 20px;
    }
}
</style>
