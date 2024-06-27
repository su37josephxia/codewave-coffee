<template>
    <van-linear-layout :ref="`vanLinearLayout1`" :gap="`none`">
        <van-linear-layout :ref="`linear_layout_2`" :direction="`horizontal`" :wrap="true" :mode="`flex`" :justify="`center`" :alignment="`center`" :gap="`normal`" style="--van-space-base: 4px">
            <van-iconv :ref="`iconv_4`" :key="`iconv_4`" :name="`decrease`" :icotype="`only`" @click="iconv_4_click($event)" v-if="count != 0" style="font-size: 20px">
                <van-text :ref="`text_6`" :text="`图标`"></van-text>
            </van-iconv>
            <van-text :ref="`text_8`" :key="`text_8`" :text="$utils['ToString']('nasl.core.Long', count)" v-if="count != 0"></van-text>
            <van-iconv :ref="`iconv_5`" :name="`increase`" :icotype="`only`" @click="iconv_5_click($event)" style="font-size: 20px">
                <van-text :ref="`text_7`" :text="`图标`"></van-text>
            </van-iconv>
        </van-linear-layout>
    </van-linear-layout>
</template>
<script>
const keyboardEventMixin = {
    mounted() {
        document.addEventListener("keydown", this.onKeyDown);
        document.addEventListener("keyup", this.onKeyUp);
    },
    beforeDestory() {
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
    props: {
        ["count"]: {
            type: Number,
            default: function () {
                return undefined;
            },
        },
    },
    watch: {
        ["count"]: {
            handler(val) {
                this.$emit("update:count", val);
            },
        },
    },

    data() {
        return {};
    },
    computed: {},
    meta: {
        title: "购物车增减",
        crumb: undefined,
        crumbI18n: undefined,
        first: undefined,
        auth: undefined,
    },
    methods: {
        async iconv_4_click(event) {
            await (async () => {
                this.count = this.$global.minus(this.count, 1);
                this.$emit("reduce", {
                    value: this.count,
                });
                return;
            })();
        },
        async iconv_5_click(event) {
            await (async () => {
                this.count = this.$global.add(this.count, 1);
                this.$emit("add", {
                    value: this.count,
                });
                return;
            })();
        },
    },
};
</script>
