<template>
    <div :ref="`div1`" class="h5template-user" :vusion-slot-name="`default`">
        <van-row :ref="`row1`" class="user-head-wrap" :type="`flex`" :align="`center`">
            <van-image :ref="`image1`" class="user-avatar" :src="`/assets/h5/head-icon.png`"></van-image>
            <div :ref="`div2`" class="user-name">
                <van-text :ref="`text2`" :text="$utils['ToString']('nasl.core.String', ($global.userInfo || {}).UserName)"></van-text>
            </div>
        </van-row>
        <van-cell :ref="`cell5`" :isLink="true" :center="true" :icon="`program`">
            <template :ref="`template1`">
                <van-text
                    :ref="`text3`"
                    :text="`
      内容
    `"
                ></van-text>
            </template>
            <template #title :ref="`template5`">
                <van-text :ref="`text7`" :text="`内容一`"></van-text>
            </template>
        </van-cell>
        <van-cell :ref="`cell3`" :isLink="true" :center="true" :icon="`program`">
            <template #title :ref="`template7`">
                <van-text :ref="`text9`" :text="`内容二`"></van-text>
            </template>
            <template :ref="`template8`">
                <van-text
                    :ref="`text10`"
                    :text="`
      内容
    `"
                ></van-text>
            </template>
        </van-cell>
        <van-cell :ref="`cell2`" :isLink="true" :center="true" :icon="`program`">
            <template #title :ref="`template4`">
                <van-text :ref="`text6`" :text="`内容三`"></van-text>
            </template>
            <template :ref="`template6`">
                <van-text
                    :ref="`text8`"
                    :text="`
      内容
    `"
                ></van-text>
            </template>
        </van-cell>
        <van-cell :ref="`cell1`" :isLink="true" :center="true" :icon="`program`">
            <template #title :ref="`template2`">
                <van-text :ref="`text4`" :text="`内容四`"></van-text>
            </template>
            <template :ref="`template3`">
                <van-text
                    :ref="`text5`"
                    :text="`
      内容
    `"
                ></van-text>
            </template>
        </van-cell>
        <van-button :ref="`logoutButton`" :type="`default`" :text="`退出登录`" :block="`blockb`" @click="logoutButton_click($event)" style="background: #fff; color: #f55a4c; --custom-start: auto; margin: 0 !important; margin-top: 4vw; height: 14.93333vw; text-align: center; font-size: 4.26667vw; width: 100%; border: none"></van-button>
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
        title: "个人中心页",
        crumb: undefined,
        crumbI18n: undefined,
        first: undefined,
        auth: undefined,
    },
    methods: {
        async logoutButton_click(event) {
            await (async () => {
                await this.$global.logout({});
                return;
            })();
        },
    },
};
</script>
