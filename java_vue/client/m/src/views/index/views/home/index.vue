<template>
    <van-linear-layout :ref="`vanLinearLayout1`" class="l-root-h5" :type="`root`" :gap="`none`" style="background-color: #fff3ed; --update-key: 7dzz; height: 100%; padding-bottom: 50px">
        <van-linear-layout :ref="`linear_layout_2`" :direction="`vertical`" :gap="`none`">
            <van-linear-layout :ref="`linear_layout_3`" :wrap="true" style="height: 300px">
                <van-swipe :ref="`swipe_1`" class="my-swipe" :autoplay="3000" :indicatorColor="`white`" :dataSource="$global.useDatabaseCallback()(__swipe_1_handleDataSourceLoad)" style="height: 100%">
                    <template #item="current" :ref="`template_1`">
                        <van-swipe-item :ref="`swipe_item_1_${(current || {}).__nodeKey || (current || {}).index}`" :vusion-disabled-cut="true" :vusion-disabled-copy="true" :vusion-slot-name="`default`">
                            <van-image :ref="`image_1_${(current || {}).__nodeKey || (current || {}).index}`" :src="(((current || {}).item || {}).slide || {}).slideImage" :fit="`cover`" style="width: 100%; height: 100%"></van-image>
                        </van-swipe-item>
                    </template>
                </van-swipe>
            </van-linear-layout>
            <van-linear-layout :ref="`linear_layout_4`" :wrap="true" style="padding-left: 16px; --update-key: n7ck; padding-right: 16px">
                <van-cardu :ref="`cardu_2`" :split="true" style="width: 100%; height: auto; margin-top: -40px; --update-key: g0zd; border-top-width: 1px; border-left-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-style: solid; border-top-left-radius: 8px; border-top-right-radius: 8px; border-bottom-right-radius: 8px; border-bottom-left-radius: 8px; --van-cardu-head-margin-top: 8px; --van-cardu-head-margin-left: 16px; --van-cardu-head-margin-right: 0px; --van-cardu-content-margin-left: 16px; --van-cardu-content-margin-right: 16px">
                    <template #head :ref="`template_3`">
                        <van-linear-layout :ref="`linear_layout_6`" :gap="`none`" :mode="`flex`" :direction="`horizontal`" :justify="`space-between`" :alignment="`center`">
                            <van-linear-layout :ref="`linear_layout_7`" :wrap="true" :mode="`flex`" :direction="`vertical`" :justify="`start`" :alignment="`start`" :gap="`normal`" :heightStretch="`false`" :widthStretch="`false`" style="--van-space-base: 8px; height: auto; width: 50%">
                                <van-text :ref="`text_9`" :text="`NetEase Coffee`" style="font-weight: bold; font-size: 18px"></van-text>
                                <van-text :ref="`text_11`" :color="`secondary`" :text="`9:00:00~19:00:00`"></van-text>
                            </van-linear-layout>
                            <van-linear-layout :ref="`linear_layout_8`" :wrap="true" :widthStretch="`false`" style="width: 50%">
                                <van-image :ref="`image_6`" :src="`/assets/1716977925049_%E5%92%96%E5%95%A1logo.png`" :fit="`contain`" :preview="true" style="height: 90px; width: 100%"></van-image>
                            </van-linear-layout>
                        </van-linear-layout>
                    </template>
                    <van-linear-layout :ref="`linear_layout_10`" :gap="`none`" :mode="`flex`" :direction="`horizontal`" :justify="`space-between`" :alignment="`center`" style="margin-top: 20px; --update-key: w415">
                        <van-linear-layout :ref="`linear_layout_11`" :wrap="true">
                            <van-iconv :ref="`iconv_2`" :name="`location`" :icotype="`left`">
                                <van-text :ref="`text_13`" :text="`浙江省杭州市滨江区`" style="margin-left: 4px; --update-key: xxat"></van-text>
                            </van-iconv>
                        </van-linear-layout>
                        <van-linear-layout :ref="`linear_layout_12`" :wrap="true">
                            <van-iconv :ref="`iconv_3`" :name="`//lcap-static-saas.nos-eastchina1.126.net/user/jystudy/1714027727734_%E7%94%B5%E8%AF%9D.svg`" :icotype="`left`">
                                <van-text :ref="`text_14`" :text="`联系商家`" style="margin-left: 4px; --update-key: xxat"></van-text>
                            </van-iconv>
                        </van-linear-layout>
                    </van-linear-layout>
                </van-cardu>
                <van-cardu :ref="`cardu_5`" style="width: 100%; margin-top: 16px; --update-key: b6nx; margin-bottom: 16px">
                    <template #head :ref="`template_6`"></template>
                    <bs-customBoard :ref="`bs_customBoard_1`" :tag="`news`" :board="`今日上新 - 鲜萃黑咖·深度烘焙`"></bs-customBoard>
                </van-cardu>
                <van-linear-layout :ref="`linear_layout_14`" :direction="`vertical`" :gap="`none`">
                    <van-linear-layout :ref="`linear_layout_15`" :wrap="true">
                        <van-text :ref="`text_21`" :text="`最新单品`"></van-text>
                    </van-linear-layout>
                    <van-linear-layout :ref="`linear_layout_16`" :wrap="true" style="margin-top: 16px; --update-key: uy2z; margin-bottom: 16px">
                        <van-image :ref="`image_7`" :src="`/assets/1717061945784_%E6%9C%80%E6%96%B0%E5%8D%95%E5%93%811.png`" :fit="`cover`" :preview="true" style="width: 100%; height: 126px; border-top-left-radius: 8px; border-top-right-radius: 8px; border-bottom-right-radius: 8px; border-bottom-left-radius: 8px; --update-key: jbut"></van-image>
                    </van-linear-layout>
                    <van-linear-layout :ref="`linear_layout_17`" :wrap="true">
                        <van-image :ref="`image_8`" :src="`/assets/1717061989006_%E6%9C%80%E6%96%B0%E5%8D%95%E5%93%812.jpg`" :fit="`cover`" :preview="true" style="width: 100%; height: 126px; border-top-left-radius: 8px; border-top-right-radius: 8px; border-bottom-right-radius: 8px; border-bottom-left-radius: 8px; --update-key: jbut"></van-image>
                    </van-linear-layout>
                </van-linear-layout>
            </van-linear-layout>
        </van-linear-layout>
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
        title: "店铺首页",
        crumb: undefined,
        crumbI18n: undefined,
        first: undefined,
        auth: undefined,
    },
    methods: {
        async __swipe_1_handleDataSourceLoad(params) {
            this["__swipe_1_params"] = { ...params };
            return this.$genInitFromSchema(
                "nasl.collection.List<{slide: app.dataSources.defaultDS.entities.Slide}>",
                await this.$logics["app.logics.loadSlideList"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "631678203f5c4a8b8490949f82c54310",
                    },
                    path: {},
                    body: {},
                })
            );
        },
    },
};
</script>
