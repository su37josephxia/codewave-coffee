<template>
    <van-linear-layout :ref="`vanLinearLayout1`" class="l-root-h5" :type="`root`" :gap="`none`" style="height: auto">
        <van-grid-view :ref="`grid_view_1`" :pageable="`load-more`" :vusion-disabled-addslot="true" :pageSize="20" :dataSource="$global.useDatabaseCallback()(__grid_view_1_handleDataSourceLoad)" :col="1" style="height: auto">
            <template #item="current" :ref="`template_1`">
                <van-cardu :ref="`cardu_2_${(current || {}).__nodeKey || (current || {}).index}`" :split="true">
                    <template #head :ref="`template_3_${(current || {}).__nodeKey || (current || {}).index}`">
                        <van-linear-layout :ref="`linear_layout_2_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`none`" :mode="`flex`" :direction="`horizontal`" :alignment="`center`" :justify="`space-between`">
                            <van-linear-layout :ref="`linear_layout_3_${(current || {}).__nodeKey || (current || {}).index}`" :wrap="true" :widthStretch="`false`" style="width: 50%">
                                <van-tag :ref="`tag_1_${(current || {}).__nodeKey || (current || {}).index}`" :type="`primary`" :size="`medium`" style="width: auto">
                                    <van-text :ref="`text_5_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('app.enums.PickupMethodEnum', (((current || {}).item || {}).orderEntity || {}).pickupMethod)" :overflow="`nowrap`" v-feAnnotation="`{\\'annotationName\\':\\'feAnnotation\\',\\'argsList\\':[true,true],\\'dataRefList\\':[{\\'typeNamespace\\':\\'app.logics\\',\\'typeName\\':\\'loadMyOrder\\',\\'propName\\':\\'orderEntity.pickupMethod\\'},{\\'typeNamespace\\':\\'app.dataSources.defaultDS.entities\\',\\'typeName\\':\\'OrderEntity\\',\\'propName\\':\\'pickupMethod\\'}]}`"></van-text>
                                </van-tag>
                            </van-linear-layout>
                            <van-linear-layout :ref="`linear_layout_4_${(current || {}).__nodeKey || (current || {}).index}`" :wrap="true" :widthStretch="`true`" style="text-align: right">
                                <van-text :ref="`text_6_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('app.enums.OrderStatusEnum', (((current || {}).item || {}).orderEntity || {}).orderStatus)" v-feAnnotation="`{\\'annotationName\\':\\'feAnnotation\\',\\'argsList\\':[true,true],\\'dataRefList\\':[{\\'typeNamespace\\':\\'app.logics\\',\\'typeName\\':\\'loadMyOrder\\',\\'propName\\':\\'orderEntity.orderStatus\\'},{\\'typeNamespace\\':\\'app.dataSources.defaultDS.entities\\',\\'typeName\\':\\'OrderEntity\\',\\'propName\\':\\'orderStatus\\'}]}`"></van-text>
                                <van-iconv :ref="`iconv_2_${(current || {}).__nodeKey || (current || {}).index}`" :name="`//lcap-static-saas.nos-eastchina1.126.net/user/jystudy/1716968323230_1712740953830_1712123928413_1710813479902_1710411355638_delete-bin-6-line.svg`" :icotype="`only`" @click="iconv_2_click($event, current)">
                                    <van-text :ref="`text_8_${(current || {}).__nodeKey || (current || {}).index}`" :text="`图标`"></van-text>
                                </van-iconv>
                            </van-linear-layout>
                        </van-linear-layout>
                    </template>
                    <van-linear-layout :ref="`linear_layout_6_${(current || {}).__nodeKey || (current || {}).index}`" :direction="`vertical`" :gap="`normal`" style="width: auto; height: auto; --van-space-base: 16px">
                        <van-linear-layout :ref="`linear_layout_7_${(current || {}).__nodeKey || (current || {}).index}`" :wrap="true">
                            <van-list-view :ref="`list_view_1_${(current || {}).__nodeKey || (current || {}).index}`" :pageable="`load-more`" :vusion-disabled-addslot="true" :pageSize="20" :dataSource="(((current || {}).item || {}).orderEntity || {}).coffeeList" style="width: auto; height: auto">
                                <template #next :ref="`template_4_${(current || {}).__nodeKey || (current || {}).index}`">
                                    <van-text :ref="`text_9_${(current || {}).__nodeKey || (current || {}).index}`" :text="`下一页`"></van-text>
                                </template>
                                <template #prev :ref="`template_5_${(current || {}).__nodeKey || (current || {}).index}`">
                                    <van-text :ref="`text_10_${(current || {}).__nodeKey || (current || {}).index}`" :text="`上一页`"></van-text>
                                </template>
                                <template #item="current1" :ref="`template_6_${(current || {}).__nodeKey || (current || {}).index}`">
                                    <van-linear-layout :ref="`linear_layout_12_${(current || {}).__nodeKey || (current || {}).index}_${(current1 || {}).__nodeKey || (current1 || {}).index}`" :gap="`normal`" :mode="`flex`" :direction="`horizontal`" :justify="`start`" :alignment="`start`" style="--van-space-base: 16px; margin-top: 10px; --update-key: kwna; margin-bottom: 10px">
                                        <van-linear-layout :ref="`linear_layout_13_${(current || {}).__nodeKey || (current || {}).index}_${(current1 || {}).__nodeKey || (current1 || {}).index}`" :wrap="true">
                                            <van-image :ref="`image_1_${(current || {}).__nodeKey || (current || {}).index}_${(current1 || {}).__nodeKey || (current1 || {}).index}`" :src="(((current1 || {}).item || {}).coffee || {}).coffeeImage" :fit="`contain`" :preview="true" style="width: 80px; height: 80px"></van-image>
                                        </van-linear-layout>
                                        <van-linear-layout :ref="`linear_layout_14_${(current || {}).__nodeKey || (current || {}).index}_${(current1 || {}).__nodeKey || (current1 || {}).index}`" :wrap="true" :widthStretch="`true`">
                                            <van-linear-layout :ref="`linear_layout_16_${(current || {}).__nodeKey || (current || {}).index}_${(current1 || {}).__nodeKey || (current1 || {}).index}`" :direction="`vertical`" :gap="`normal`" style="--van-space-base: 16px">
                                                <van-linear-layout :ref="`linear_layout_17_${(current || {}).__nodeKey || (current || {}).index}_${(current1 || {}).__nodeKey || (current1 || {}).index}`" :wrap="true" :mode="`flex`" :alignment="`start`" :justify="`space-between`">
                                                    <van-text :ref="`text_11_${(current || {}).__nodeKey || (current || {}).index}_${(current1 || {}).__nodeKey || (current1 || {}).index}`" :text="$utils['ToString']('nasl.core.String', (((current1 || {}).item || {}).coffee || {}).coffeename)" v-feAnnotation="`{\\'annotationName\\':\\'feAnnotation\\',\\'argsList\\':[true,true],\\'dataRefList\\':[{\\'typeNamespace\\':\\'app.logics\\',\\'typeName\\':\\'loadMyOrder\\',\\'propName\\':\\'current1.item.coffee.coffeename\\'},{\\'typeNamespace\\':\\'app.dataSources.defaultDS.entities\\',\\'typeName\\':\\'Coffee\\',\\'propName\\':\\'coffeename\\'}]}`"></van-text>
                                                    <van-text :ref="`text_12_${(current || {}).__nodeKey || (current || {}).index}_${(current1 || {}).__nodeKey || (current1 || {}).index}`" :text="$utils['ToString']('nasl.core.String', $utils['ToString']('nasl.core.String', `X `) + $utils['ToString']('nasl.core.Long', ((current1 || {}).item || {}).count))" style="color: #00000066"></van-text>
                                                </van-linear-layout>
                                                <van-linear-layout :ref="`linear_layout_18_${(current || {}).__nodeKey || (current || {}).index}_${(current1 || {}).__nodeKey || (current1 || {}).index}`" :wrap="true">
                                                    <van-text :ref="`text_13_${(current || {}).__nodeKey || (current || {}).index}_${(current1 || {}).__nodeKey || (current1 || {}).index}`" :text="$utils['ToString']('nasl.core.String', (((current1 || {}).item || {}).coffee || {}).description)" v-feAnnotation="`{\\'annotationName\\':\\'feAnnotation\\',\\'argsList\\':[true,true],\\'dataRefList\\':[{\\'typeNamespace\\':\\'app.logics\\',\\'typeName\\':\\'loadMyOrder\\',\\'propName\\':\\'current1.item.coffee.description\\'},{\\'typeNamespace\\':\\'app.dataSources.defaultDS.entities\\',\\'typeName\\':\\'Coffee\\',\\'propName\\':\\'description\\'}]}`" style="color: #00000066"></van-text>
                                                </van-linear-layout>
                                            </van-linear-layout>
                                        </van-linear-layout>
                                    </van-linear-layout>
                                </template>
                            </van-list-view>
                        </van-linear-layout>
                        <van-linear-layout :ref="`linear_layout_8_${(current || {}).__nodeKey || (current || {}).index}`" :wrap="true">
                            <van-divider :ref="`divider_1_${(current || {}).__nodeKey || (current || {}).index}`" :dashed="`a`"></van-divider>
                        </van-linear-layout>
                        <van-linear-layout :ref="`linear_layout_9_${(current || {}).__nodeKey || (current || {}).index}`" :mode="`block`" :justify="`space-between`" :gap="`normal`">
                            <van-linear-layout :ref="`linear_layout_19_${(current || {}).__nodeKey || (current || {}).index}`" :direction="`horizontal`" :wrap="true">
                                <van-text :ref="`text_15_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.DateTime', (((current || {}).item || {}).orderEntity || {}).createdTime)" v-feAnnotation="`{\\'annotationName\\':\\'feAnnotation\\',\\'argsList\\':[true,true],\\'dataRefList\\':[{\\'typeNamespace\\':\\'app.logics\\',\\'typeName\\':\\'loadMyOrder\\',\\'propName\\':\\'orderEntity.createdTime\\'},{\\'typeNamespace\\':\\'app.dataSources.defaultDS.entities\\',\\'typeName\\':\\'OrderEntity\\',\\'propName\\':\\'createdTime\\'}]}`" style="color: #00000066"></van-text>
                            </van-linear-layout>
                            <van-linear-layout :ref="`linear_layout_20_${(current || {}).__nodeKey || (current || {}).index}`" :direction="`horizontal`" :wrap="true" style="text-align: right">
                                <van-text :ref="`text_16_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', $utils['ToString']('nasl.core.String', `共 `) + $utils['ToString']('nasl.core.Long', (((current || {}).item || {}).orderEntity || {}).coffeeCount) + $utils['ToString']('nasl.core.String', ` 件商品`))" style="color: #00000066"></van-text>
                                <van-text :ref="`text_17_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', $utils['ToString']('nasl.core.String', `¥ `) + $utils['ToString']('nasl.core.Decimal', (((current || {}).item || {}).orderEntity || {}).totalAmount))"></van-text>
                            </van-linear-layout>
                        </van-linear-layout>
                        <van-linear-layout :ref="`linear_layout_10_${(current || {}).__nodeKey || (current || {}).index}`" :wrap="true" style="width: 100%; text-align: right">
                            <van-button :ref="`button_2_${(current || {}).__nodeKey || (current || {}).index}`" :type="`info_secondary`" :size="`small`" :text="`再来一单`" :squareroud="`round`" @click="button_2_click($event, current)"></van-button>
                            <van-button :ref="`button_3_${(current || {}).__nodeKey || (current || {}).index}`" :type="`info_secondary`" :size="`small`" :text="`开发票`" :squareroud="`round`"></van-button>
                        </van-linear-layout>
                    </van-linear-layout>
                </van-cardu>
            </template>
        </van-grid-view>
        <van-dialog :ref="`dialog_1`" :safeAreaInsetBottom="true">
            <template #footer :ref="`template_7`">
                <van-linear-layout :ref="`linear_layout_21`" :type="`flex`" :vusion-disabled-cut="true" style="width: 100%">
                    <van-button :ref="`button_4`" class="van-button van-button--default van-dialog__cancel" :text="`取消`"></van-button>
                    <van-button :ref="`button_5`" class="van-button van-button--default van-dialog__confirm van-hairline--left" :text="`确认`" @click="button_5_click($event)"></van-button>
                </van-linear-layout>
            </template>
            <div :ref="`div_1`" class="dialogchild" :vusion-slot-name="`default`" :vusion-disabled-copy="true" :vusion-disabled-cut="true" :env="`alone`" style="min-height: 100px">
                <van-text :ref="`text_18`" :text="`确认要删除此订单吗？`"></van-text>
            </div>
        </van-dialog>
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
        return {
            ["deleteOrderId"]: undefined,
        };
    },
    computed: {},
    meta: {
        title: "我的订单",
        crumb: undefined,
        crumbI18n: undefined,
        first: undefined,
        auth: undefined,
    },
    methods: {
        async button_5_click(event) {
            await (async () => {
                if (this.$utils["HasValue"]({ type: "nasl.core.Long", value: this.deleteOrderId })) {
                    await this.$logics["app.logics.deleteOrderById"]({
                        config: {
                            download: false,
                        },
                        query: {},
                        headers: {
                            "lcap-calllogic-uuid": "f4059b14838a4364955694deed05eeba",
                        },
                        path: {},
                        body: {
                            orderid: this.deleteOrderId,
                        },
                    });
                    await (this.$refs && this.$refs[`dialog_1`] && this.$refs[`dialog_1`].closeModal && this.$refs[`dialog_1`].closeModal());
                    await (this.$refs && this.$refs[`grid_view_1`] && this.$refs[`grid_view_1`].reload && this.$refs[`grid_view_1`].reload());
                    await this.$toast.show(this.$utils["ToString"]("nasl.core.String", `订单删除成功！`));
                } else {
                    await this.$toast.show(this.$utils["ToString"]("nasl.core.String", `订单删除失败，请重试！`));
                }

                return;
            })();
        },
        async button_2_click(event, current) {
            await (async () => {
                this.$destination(`/m/index/menu`, "_self");
                return;
            })();
        },
        async iconv_2_click(event, current) {
            await (async () => {
                this.deleteOrderId = this.$utils["Clone"]((((current || {}).item || {}).orderEntity || {}).id);
                await (this.$refs && this.$refs[`dialog_1`] && this.$refs[`dialog_1`].openModal && this.$refs[`dialog_1`].openModal());
                return;
            })();
        },
        async __grid_view_1_handleDataSourceLoad(params) {
            this["__grid_view_1_params"] = { ...params };
            return this.$genInitFromSchema(
                "nasl.collection.List<{orderEntity: app.dataSources.defaultDS.entities.OrderEntity}>",
                await this.$logics["app.logics.loadMyOrder"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "fd4f5b86dded458a9182a9170950746a",
                    },
                    path: {},
                    body: {},
                })
            );
        },
    },
};
</script>
