<template>
    <div :ref="`div1`" class="h5template-401" :vusion-slot-name="`default`">
        <div :ref="`div2`" class="m401-image-wrap">
            <van-image :ref="`image1`" class="m401-image" :src="`/assets/h5/401_h5.png`"></van-image>
            <div :ref="`div3`" class="m401-image-text">
                <van-text :ref="`text1`" :text="`你没有访问该页面的权限`"></van-text>
            </div>
            <van-button :ref="`loginButton`" :type="`info`" :text="`重新登录`" :destination="`/m/login`" style="color: #fff; background: #337eff; --custom-start: auto; text-align: center; border-radius: 1.06667vw; height: 8.53333vw; line-height: 32px; margin-left: auto; margin-right: auto; margin-top: 10.66667vw; display: block"></van-button>
        </div>
    </div>
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
        title: "无权限页面",
        crumb: undefined,
        crumbI18n: undefined,
        first: undefined,
        auth: undefined,
    },
    methods: {},
};
</script>
