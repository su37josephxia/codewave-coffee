<template>
    <div :ref="`div1`" class="h5template-404" :vusion-slot-name="`default`">
        <div :ref="`div2`" class="m404-image-wrap">
            <van-image :ref="`image1`" class="m404-image" :src="`/assets/h5/404_h5.png`"></van-image>
            <div :ref="`div3`" class="m404-image-text">
                <van-text :ref="`text1`" :text="`抱歉，你访问的页面不存在`"></van-text>
            </div>
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
        title: "找不到页面",
        crumb: undefined,
        crumbI18n: undefined,
        first: undefined,
        auth: undefined,
    },
    methods: {},
};
</script>
