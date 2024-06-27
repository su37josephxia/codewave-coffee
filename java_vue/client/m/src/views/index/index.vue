<template>
    <div :ref="`div1`" class="h5template-navi" :vusion-slot-name="`default`">
        <van-router-view :ref="`vanRouterView1`"></van-router-view>
        <van-tabbar :ref="`tabbar_1`" :fixed="true" :route="true" style="height: 50px; --van-tabbar-item-active-color: #ff8d4f; z-index: 9999">
            <van-tabbar-item :ref="`tabbar_item_1`" :icon="`frontpage`" :destination="`/m/index/home`" style="font-size: 24px">
                <van-text :ref="`text_1`" :text="`首页`"></van-text>
            </van-tabbar-item>
            <van-tabbar-item :ref="`tabbar_item_2`" :icon="`cart`" :destination="`/m/index/menu`" style="font-size: 24px">
                <van-text :ref="`text_2`" :text="`点单`"></van-text>
            </van-tabbar-item>
            <van-tabbar-item :ref="`tabbar_item_3`" :icon="`edit`" :destination="`/m/index/myOrder`" style="font-size: 24px">
                <van-text :ref="`text_3`" :text="`订单`"></van-text>
            </van-tabbar-item>
        </van-tabbar>
        <van-popup :ref="`demoNvaiPop`" :position="`left`" :closeOnClickOverlay="true">
            <div :ref="`div2`" class="diy-content">
                <van-cell :ref="`cell1`" :isLink="true" :center="true" :icon="`program`">
                    <template :ref="`template1`"></template>
                    <template #title :ref="`template2`">
                        <van-text :ref="`text2`" :text="`导航一`"></van-text>
                    </template>
                </van-cell>
                <van-cell :ref="`cell6`" :isLink="true" :center="true" :icon="`program`">
                    <template #title :ref="`template11`">
                        <van-text :ref="`text7`" :text="`导航二`"></van-text>
                    </template>
                    <template :ref="`template12`"></template>
                </van-cell>
                <van-cell :ref="`cell5`" :isLink="true" :center="true" :icon="`program`">
                    <template #title :ref="`template9`">
                        <van-text :ref="`text6`" :text="`导航三`"></van-text>
                    </template>
                    <template :ref="`template10`"></template>
                </van-cell>
                <van-cell :ref="`cell4`" :isLink="true" :center="true" :icon="`program`">
                    <template #title :ref="`template7`">
                        <van-text :ref="`text5`" :text="`导航四`"></van-text>
                    </template>
                    <template :ref="`template8`"></template>
                </van-cell>
                <van-cell :ref="`cell3`" :isLink="true" :center="true" :icon="`program`">
                    <template #title :ref="`template5`">
                        <van-text :ref="`text4`" :text="`导航五`"></van-text>
                    </template>
                    <template :ref="`template6`"></template>
                </van-cell>
                <van-cell :ref="`cell2`" :isLink="true" :center="true" :icon="`program`">
                    <template #title :ref="`template3`">
                        <van-text :ref="`text3`" :text="`导航六`"></van-text>
                    </template>
                    <template :ref="`template4`"></template>
                </van-cell>
            </div>
        </van-popup>
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
        title: "首页",
        crumb: undefined,
        crumbI18n: undefined,
        first: "home",
        auth: undefined,
    },
    methods: {
        async index_created(event) {
            await (async () => {
                await this.$library["adapter_sdk"].init();
                return;
            })();
        },
    },
    async created() {
        await this.index_created();
    },
};
</script>
