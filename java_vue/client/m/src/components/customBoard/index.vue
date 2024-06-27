<template>
    <van-linear-layout :ref="`vanLinearLayout1`" :gap="`none`">
        <van-row :ref="`row_2`" :gutter="`0`">
            <van-col :ref="`col_4`" :span="22" :mode="`flex`" :direction="`horizontal`" :justify="`start`" :alignment="`center`">
                <van-tag :ref="`tag_1`" :type="`primary`" :size="`medium`">
                    <van-text :ref="`text_1`" :text="$utils['ToString']('nasl.core.String', tag)"></van-text>
                </van-tag>
                <van-notice-bar :ref="`notice_bar_1`" :scrollable="true" :widthStretch="`true`" style="background-color: #ffffff">
                    <van-text :ref="`text_2`" :text="$utils['ToString']('nasl.core.String', board)"></van-text>
                </van-notice-bar>
            </van-col>
            <van-col :ref="`col_5`" :span="2" :mode="`flex`" :justify="`end`" :alignment="`center`">
                <van-iconv :ref="`iconv_2`" :name="`right-arrow`" :icotype="`only`">
                    <van-text :ref="`text_4`" :text="`图标`"></van-text>
                </van-iconv>
            </van-col>
        </van-row>
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
        ["tag"]: {
            type: String,
            default: function () {
                return undefined;
            },
        },
        ["board"]: {
            type: String,
            default: function () {
                return undefined;
            },
        },
    },
    watch: {
        ["tag"]: {
            handler(val) {
                this.$emit("update:tag", val);
            },
        },
        ["board"]: {
            handler(val) {
                this.$emit("update:board", val);
            },
        },
    },

    data() {
        return {};
    },
    computed: {},
    meta: {
        title: "自定义通知栏",
        crumb: undefined,
        crumbI18n: undefined,
        first: undefined,
        auth: undefined,
    },
    methods: {},
};
</script>
