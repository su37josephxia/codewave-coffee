<template>
    <van-linear-layout :ref="`vanLinearLayout1`" class="l-root-h5" :type="`root`" :gap="`none`">
        <lcap-h5-login :ref="`lcap_h5_login1`" :src="`http://nuims.vusion.top`"></lcap-h5-login>
    </van-linear-layout>
</template>
<script>
const keyboardEventMixin = {
    mounted() {
        document.addEventListener("keydown", this.onKeyDown);
        document.addEventListener("keyup", this.onKeyUp);
    },
    beforeDestroy() {
        document.removeEventListener("keydown", this.onKeyDown);
        document.removeEventListener("keyup", this.onKeyUp);
    },
    methods: {
        async onKeyDown(e) {},
        async onKeyUp(e) {},
    },
};
export default {
    mixins: [keyboardEventMixin],
    data() {
        return {};
    },
    computed: {},
    meta: {
        title: "登录页",
        crumb: undefined,
        crumbI18n: undefined,
        first: undefined,
        auth: undefined,
    },
    methods: {},
};
</script>
