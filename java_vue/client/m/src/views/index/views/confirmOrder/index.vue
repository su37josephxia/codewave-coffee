<template>
    <van-linear-layout :ref="`vanLinearLayout1`" class="l-root-h5" :type="`root`" :gap="`none`" style="background-color: #0000001a; height: auto; padding-bottom: 110px; --update-key: g2ds">
        <van-linear-layout :ref="`linear_layout_1`" :direction="`horizontal`" :wrap="true" style="width: 100%">
            <van-linear-layout :ref="`linear_layout_4`" :direction="`vertical`" :gap="`normal`" style="margin-left: 16px; --update-key: 4l8y; margin-right: 16px; --van-space-base: 16px">
                <van-linear-layout :ref="`linear_layout_5`" :wrap="true" style="width: auto; height: 46px; background-color: #ffffff">
                    <van-linear-layout :ref="`linear_layout_10`" :direction="`horizontal`" :wrap="true" :mode="`flex`" :justify="`start`" :alignment="`center`" style="width: 100%; height: 46px; background-color: #ffffff; position: relative; left: 0; top: 0; border-bottom-width: 1px; border-style: solid; --update-key: 629t; border-color: #00000011">
                        <van-text :ref="`text_4`" :text="`自取 `" @click="text_4_click($event)" :style="{ color: gentext_4_bindStyles_color_expression_viewMatchExpression() }" style="font-size: 16px; color: #00000066; margin-left: 16px; --update-key: ih0d"></van-text>
                        <van-text :ref="`text_5`" :text="`｜`" style="font-size: 16px"></van-text>
                        <van-text :ref="`text_6`" :text="`外送`" @click="text_6_click($event)" :style="{ color: gentext_6_bindStyles_color_expression_viewMatchExpression() }" style="font-size: 16px; color: #00000066; --update-key: h4cb"></van-text>
                    </van-linear-layout>
                </van-linear-layout>
                <van-linear-layout :ref="`linear_layout_6`" :wrap="true" style="background-color: #ffffff">
                    <van-linear-layout :ref="`linear_layout_11`" :direction="`horizontal`" :wrap="true" :justify="`space-between`" :gap="`normal`" style="width: 100%; background-color: #ffffff; --update-key: ld2r; padding-top: 16px; padding-left: 16px; padding-right: 16px">
                        <van-linear-layout :ref="`linear_layout_14`" :direction="`horizontal`" :wrap="true" :layout="`block`" style="text-align: left">
                            <van-text :ref="`text_7`" :text="`NetEase Coffee`" style="font-weight: bold; font-size: 18px; color: #000000"></van-text>
                            <van-text :ref="`text_8`" :text="`浙江省杭州市滨江区杭州网易有限公司`" style="color: #00000066"></van-text>
                        </van-linear-layout>
                        <van-linear-layout :ref="`linear_layout_15`" :direction="`horizontal`" :wrap="true" :mode="`flex`" :justify="`end`" :alignment="`center`" :gap="`normal`" style="--van-space-base: 8px">
                            <van-iconv :ref="`iconv_2`" :name="`location`" :icotype="`only`">
                                <van-text :ref="`text_10`" :text="`图标`"></van-text>
                            </van-iconv>
                            <van-iconv :ref="`iconv_3`" :name="`//lcap-static-saas.nos-eastchina1.126.net/user/jystudy/1714027727734_%E7%94%B5%E8%AF%9D.svg`" :icotype="`only`" style="margin-top: 2px; --update-key: ld2z">
                                <van-text :ref="`text_11`" :text="`图标`"></van-text>
                            </van-iconv>
                        </van-linear-layout>
                    </van-linear-layout>
                    <van-linear-layout :ref="`linear_layout_12`" :direction="`horizontal`" :wrap="true" style="width: 100%; background-color: #ffffff">
                        <van-divider :ref="`divider_1`" :dashed="`a`"></van-divider>
                    </van-linear-layout>
                    <van-linear-layout :ref="`linear_layout_13`" :direction="`horizontal`" :wrap="true" style="width: 100%; background-color: #ffffff">
                        <van-form :ref="`form_1`">
                            <van-field :ref="`field_1`" :drole="`other`" :required="true" :rules="[{ validate: 'required', message: `表单项不得为空`, trigger: 'input+blur', required: true }]">
                                <template #title :ref="`template_1`">
                                    <van-text :ref="`text_13`" :text="`姓名`"></van-text>
                                </template>
                                <template #input :ref="`template_2`">
                                    <van-linear-layout :ref="`linear_layout_16`" :direction="`horizontal`" style="width: 100%">
                                        <van-fieldinput :ref="`fieldinput_1`" :placeholder="`请输入收货人姓名`" :value.sync="orderEntity.consigneeName"></van-fieldinput>
                                    </van-linear-layout>
                                </template>
                            </van-field>
                            <van-field
                                :ref="`field_2`"
                                :drole="`other`"
                                :required="true"
                                :rules="[
                                    { validate: 'required', message: `表单项不得为空`, trigger: 'input+blur', required: true },
                                    { validate: 'mobile', args: [`zh-CN`, false], message: `请输入合法的手机号码`, trigger: 'input+blur' },
                                ]"
                            >
                                <template #title :ref="`template_3`">
                                    <van-text :ref="`text_14`" :text="`手机号`"></van-text>
                                </template>
                                <template #input :ref="`template_4`">
                                    <van-linear-layout :ref="`linear_layout_17`" :direction="`horizontal`" style="width: 100%">
                                        <van-fieldinput :ref="`fieldinput_2`" :placeholder="`请输入收货人电话`" :value.sync="orderEntity.consigneePhone"></van-fieldinput>
                                    </van-linear-layout>
                                </template>
                            </van-field>
                            <van-field :ref="`field_3`" :key="`field_3`" :drole="`other`" :required="true" :rules="[{ validate: 'required', message: `表单项不得为空`, trigger: 'input+blur', required: true }]" v-if="(orderEntity || {}).pickupMethod == '1'">
                                <template #title :ref="`template_5`">
                                    <van-text :ref="`text_15`" :text="`地区`"></van-text>
                                </template>
                                <template #input :ref="`template_6`">
                                    <van-linear-layout :ref="`linear_layout_18`" :direction="`horizontal`" style="width: 100%">
                                        <van-area :ref="`area_1`" :title="`标题`" :inputAlign="`left`" :converter="`name`" :value.sync="orderEntity.consigneeArea">
                                            <template #picker-bottom :ref="`template_9`">
                                                <van-picker-action-slot :ref="`picker_action_slot_1`" :targetMethod="`cancel`">
                                                    <van-button :ref="`button_2`" :type="`info_secondary`" :size="`normal`" :text="`取消`" :squareroud="`round`"></van-button>
                                                </van-picker-action-slot>
                                                <van-picker-action-slot :ref="`picker_action_slot_2`" :targetMethod="`confirm`">
                                                    <van-button :ref="`button_3`" :type="`info`" :size="`normal`" :text="`确认`" :squareroud="`round`"></van-button>
                                                </van-picker-action-slot>
                                            </template>
                                            <template #picker-top :ref="`template_10`">
                                                <van-picker-action-slot :ref="`picker_action_slot_3`" :targetMethod="`cancel`">
                                                    <van-iconv :ref="`iconv_4`" :name="`left-arrow`" :icotype="`only`"></van-iconv>
                                                </van-picker-action-slot>
                                                <van-picker-action-slot :ref="`picker_action_slot_4`" :targetMethod="`confirm`"></van-picker-action-slot>
                                            </template>
                                            <template #pannel-title :ref="`template_11`">
                                                <van-text :ref="`text_17`" :text="`标题`"></van-text>
                                            </template>
                                            <template #title :ref="`template_12`"></template>
                                        </van-area>
                                    </van-linear-layout>
                                </template>
                            </van-field>
                            <van-field :ref="`field_4`" :key="`field_4`" :drole="`other`" :required="true" :rules="[{ validate: 'required', message: `表单项不得为空`, trigger: 'input+blur', required: true }]" v-if="(orderEntity || {}).pickupMethod == '1'">
                                <template #title :ref="`template_7`">
                                    <van-text :ref="`text_16`" :text="`详细地址`"></van-text>
                                </template>
                                <template #input :ref="`template_8`">
                                    <van-linear-layout :ref="`linear_layout_19`" :direction="`horizontal`" style="width: 100%">
                                        <van-fieldinput :ref="`fieldinput_4`" :placeholder="`请输入收货人详细地址`" :value.sync="orderEntity.consigneeAddress"></van-fieldinput>
                                    </van-linear-layout>
                                </template>
                            </van-field>
                            <div :ref="`div_1`"></div>
                        </van-form>
                    </van-linear-layout>
                </van-linear-layout>
                <van-linear-layout :ref="`linear_layout_7`" :wrap="true" style="width: auto; background-color: #ffffff">
                    <van-grid-view :ref="`grid_view_1`" pageable="" :vusion-disabled-addslot="true" :pageSize="20" :dataSource="(orderEntity || {}).coffeeList" :col="1" style="height: 100%">
                        <template #item="current" :ref="`template_13`">
                            <van-linear-layout :ref="`linear_layout_21_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`normal`" :mode="`flex`" :direction="`horizontal`" :justify="`start`" :alignment="`start`" style="--van-space-base: 8px">
                                <van-linear-layout :ref="`linear_layout_22_${(current || {}).__nodeKey || (current || {}).index}`" :wrap="true" :widthStretch="`false`" style="width: 25%">
                                    <van-image :ref="`image_1_${(current || {}).__nodeKey || (current || {}).index}`" :src="(((current || {}).item || {}).coffee || {}).coffeeImage" :fit="`contain`" :preview="true" style="width: 100%; height: 80px"></van-image>
                                </van-linear-layout>
                                <van-linear-layout :ref="`linear_layout_23_${(current || {}).__nodeKey || (current || {}).index}`" :wrap="true" :widthStretch="`true`">
                                    <van-linear-layout :ref="`linear_layout_25_${(current || {}).__nodeKey || (current || {}).index}`" :direction="`vertical`" :gap="`none`">
                                        <van-linear-layout :ref="`linear_layout_26_${(current || {}).__nodeKey || (current || {}).index}`" :wrap="true" style="height: 40px">
                                            <van-text :ref="`text_20_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).coffee || {}).coffeename)"></van-text>
                                        </van-linear-layout>
                                        <van-linear-layout :ref="`linear_layout_27_${(current || {}).__nodeKey || (current || {}).index}`" :wrap="true" :mode="`flex`" :alignment="`end`" :justify="`space-between`" style="height: 40px">
                                            <van-text :ref="`text_21_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', $utils['ToString']('nasl.core.String', `X `) + $utils['ToString']('nasl.core.Long', ((current || {}).item || {}).count))" style="color: #00000066"></van-text>
                                            <van-text :ref="`text_22_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', $utils['ToString']('nasl.core.String', `¥ `) + $utils['ToString']('nasl.core.Decimal', $global.multiply((((current || {}).item || {}).coffee || {}).price, ((current || {}).item || {}).count)))"></van-text>
                                        </van-linear-layout>
                                    </van-linear-layout>
                                </van-linear-layout>
                            </van-linear-layout>
                        </template>
                    </van-grid-view>
                </van-linear-layout>
                <van-linear-layout :ref="`linear_layout_8`" :wrap="true" style="width: auto; background-color: #ffffff; text-align: right; --update-key: 095t; margin-top: -16px; padding-bottom: 24px; padding-right: 12px">
                    <van-text :ref="`text_23`" :text="`总金额`"></van-text>
                    <van-text :ref="`text_24`" :text="$utils['ToString']('nasl.core.Decimal', (orderEntity || {}).totalAmount)" style="font-weight: bold"></van-text>
                </van-linear-layout>
                <van-linear-layout :ref="`linear_layout_9`" :wrap="true" :mode="`flex`" :justify="`start`" :alignment="`start`" style="width: auto; background-color: #ffffff; margin-bottom: 12px; --update-key: h4ng; padding-top: 16px">
                    <van-text :ref="`text_25`" :text="`备注`" style="margin-left: 16px; --update-key: 18b6; font-size: 16px"></van-text>
                    <van-fieldtextarea :ref="`fieldtextarea_1`" :placeholder="`请输入备注`" :value.sync="orderEntity.remark" :maxlength="150" :showWordLimit="true" :widthStretch="`false`" style="width: 80%; text-align: left; padding-top: 5px; --update-key: r5r2"></van-fieldtextarea>
                </van-linear-layout>
            </van-linear-layout>
        </van-linear-layout>
        <van-linear-layout :ref="`linear_layout_29`" :direction="`horizontal`" :wrap="true" :mode="`flex`" :alignment="`center`" :justify="`space-between`" style="width: 100%; height: 60px; background-color: #ffffff; padding-top: 16px; padding-left: 16px; padding-right: 16px; padding-bottom: 16px; --update-key: xbc9; position: fixed; left: 1px; bottom: 50px; z-index: 9999">
            <van-linear-layout :ref="`linear_layout_30`" :direction="`horizontal`" :wrap="true" :widthStretch="`false`" style="width: 50%">
                <van-text :ref="`text_28`" :text="`应付`"></van-text>
                <van-text :ref="`text_29`" :text="$utils['ToString']('nasl.core.Decimal', (orderEntity || {}).totalAmount)" style="font-weight: bold; font-size: 16px"></van-text>
            </van-linear-layout>
            <van-button :ref="`button_7`" :type="`info`" :size="`normal`" :text="`去支付`" :squareroud="`round`" @click="button_7_click($event)"></van-button>
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
        return {
            ["orderEntity"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.OrderEntity", undefined),
            ["orderJsonString"]: this.$route.query.hasOwnProperty("orderJsonString") && !["undefined", "null"].includes(this.$route.query.orderJsonString) ? this.$genInitFromSchema("nasl.core.String", this.$route.query.orderJsonString) : undefined,
        };
    },
    computed: {},
    meta: {
        title: "确认订单",
        crumb: undefined,
        crumbI18n: undefined,
        first: undefined,
        auth: undefined,
    },
    methods: {
        async confirmOrder_created(event) {
            await (async () => {
                if (this.$utils["HasValue"]({ type: "nasl.core.String", value: this.orderJsonString })) {
                    this.orderEntity = this.$genInitFromSchema("app.dataSources.defaultDS.entities.OrderEntity", await JSON.parse(this.orderJsonString));
                } else {
                }

                return;
            })();
        },
        async button_7_click(event) {
            await (async () => {
                let saveOrderResult = undefined;

                if ((this.$genInitFromSchema("nasl.ui.ValidateResult", await (this.$refs && this.$refs[`form_1`] && this.$refs[`form_1`].validate && this.$refs[`form_1`].validate())) || {}).valid) {
                    this.orderEntity.orderStatus = "2";
                    saveOrderResult = await this.$logics["app.logics.saveOrder"]({
                        config: {
                            download: false,
                        },
                        query: {},
                        headers: {
                            "lcap-calllogic-uuid": "52db09a1a9094ea187e3fc1145a77dd5",
                        },
                        path: {},
                        body: {
                            order: this.orderEntity,
                        },
                    });
                    if (saveOrderResult) {
                        await this.$toast.show(this.$utils["ToString"]("nasl.core.String", `订单创建成功`));
                        this.$destination(`/m/index/myOrder`, "_self");
                    } else {
                        await this.$toast.show(this.$utils["ToString"]("nasl.core.String", `订单创建失败`));
                        this.$destination(`/m/index/menu`, "_self");
                    }
                } else {
                }

                return;
            })();
        },
        async text_4_click(event) {
            await (async () => {
                this.orderEntity.pickupMethod = "0";
                return;
            })();
        },
        async text_6_click(event) {
            await (async () => {
                this.orderEntity.pickupMethod = "1";
                return;
            })();
        },
        gentext_4_bindStyles_color_expression_viewMatchExpression() {
            return (() => {
                if (this.$global.isEqual((this.orderEntity || {}).pickupMethod, "0")) {
                    return `#000000`;
                } else if (this.$global.isEqual((this.orderEntity || {}).pickupMethod, "1")) {
                    return `#00000066`;
                } else {
                }
            })();
        },

        gentext_6_bindStyles_color_expression_viewMatchExpression() {
            return (() => {
                if (this.$global.isEqual((this.orderEntity || {}).pickupMethod, "0")) {
                    return `#00000066`;
                } else if (this.$global.isEqual((this.orderEntity || {}).pickupMethod, "1")) {
                    return `#000000`;
                } else {
                }
            })();
        },
    },
    async created() {
        await this.confirmOrder_created();
    },
};
</script>
