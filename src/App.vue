<template>
    <div class="my-content">
        <rps-header></rps-header>
        <rps-content></rps-content>
    </div>
</template>

<script>
import rpsHeader from "@/components/rps-header";
import rpsContent from "@/components/rps-content";

export default {
    components: {
        rpsHeader,
        rpsContent
    }
};
</script>

<style>
/*сброс стилей*/
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
}
html,
body {
    height: 100%;
    width: 100%;
    font-size: 16px;
    line-height: 1;
}
/*общие стилей*/
.container {
    height: 100%;
    max-width: 1400px;
    padding: 0 20px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
}
.my-content {
    height: 100vh;
}
</style>