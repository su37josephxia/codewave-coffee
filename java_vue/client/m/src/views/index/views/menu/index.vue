<template>
    <van-linear-layout :ref="`vanLinearLayout1`" class="l-root-h5" :type="`root`" :gap="`none`" style="--custom-start: auto; height: 100vh">
        <van-linear-layout :ref="`linear_layout_6`" :direction="`horizontal`" :wrap="true" :mode="`flex`" :justify="`start`" :alignment="`center`" style="width: 100%; height: 46px; background-color: #ffffff; position: fixed; left: 0; top: 0px; border-bottom-width: 1px; border-style: solid; --update-key: 629t; border-color: #00000011">
            <van-text :ref="`text_4`" :text="`自取 `" @click="text_4_click($event)" :style="{ color: gentext_4_bindStyles_color_expression_viewMatchExpression() }" style="font-size: 16px; color: #00000066; margin-left: 16px; --update-key: ih0d"></van-text>
            <van-text :ref="`text_5`" :text="`｜`" style="font-size: 16px"></van-text>
            <van-text :ref="`text_6`" :text="`外送`" @click="text_6_click($event)" :style="{ color: gentext_6_bindStyles_color_expression_viewMatchExpression() }" style="font-size: 16px; color: #00000066; --update-key: h4cb"></van-text>
        </van-linear-layout>
        <van-linear-layout :ref="`linear_layout_7`" :direction="`horizontal`" :gap="`normal`" :mode="`flex`" :justify="`start`" :alignment="`start`" style="position: fixed; left: 1px; top: 46px; width: 373px; --van-space-base: 0px">
            <bs-customSidebar :ref="`bs_customSidebar_1`" :sidebarList.sync="sidebarList" :selectSidebaritem.sync="selectsidebarItem" style="width: 25%"></bs-customSidebar>
            <van-linear-layout :ref="`linear_layout_8`" :direction="`horizontal`" :wrap="true" :widthStretch="`false`" style="width: 75%; margin-top: 20px; --update-key: 0ypk">
                <van-text :ref="`text_8`" :text="$utils['ToString']('nasl.core.String', (selectsidebarItem || {}).content)" style="margin-left: 16px; --update-key: tvy3"></van-text>
                <van-grid-view :ref="`grid_view_1`" :pageable="`load-more`" :vusion-disabled-addslot="true" :pageSize="20" :dataSource="$utils['ListFilter'](coffeeStructureList, (item) => ((item || {}).coffee || {}).coffeeCategory == (selectsidebarItem || {}).value)" :col="1" style="--custom-start: auto; height: calc(100vh - 200px)">
                    <template #item="current" :ref="`template_1`">
                        <van-row :ref="`row_2_${(current || {}).__nodeKey || (current || {}).index}`" :gutter="`0`">
                            <van-col :ref="`col_4_${(current || {}).__nodeKey || (current || {}).index}`" :span="8">
                                <van-image :ref="`image_1_${(current || {}).__nodeKey || (current || {}).index}`" :src="(((current || {}).item || {}).coffee || {}).coffeeImage" :fit="`cover`" :preview="true" style="width: 80px; height: 80px"></van-image>
                            </van-col>
                            <van-col :ref="`col_5_${(current || {}).__nodeKey || (current || {}).index}`" :span="16" style="--update-key: adlm">
                                <van-linear-layout :ref="`linear_layout_10_${(current || {}).__nodeKey || (current || {}).index}`" :direction="`vertical`" :gap="`none`" style="margin-left: 10px; --update-key: lx7r">
                                    <van-linear-layout :ref="`linear_layout_11_${(current || {}).__nodeKey || (current || {}).index}`" :wrap="true">
                                        <van-text :ref="`text_9_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).coffee || {}).coffeename)" style="font-weight: bold; font-size: 16px"></van-text>
                                    </van-linear-layout>
                                    <van-linear-layout :ref="`linear_layout_12_${(current || {}).__nodeKey || (current || {}).index}`" :wrap="true" style="margin-top: 4px; --update-key: cias; margin-bottom: 4px">
                                        <van-text :ref="`text_10_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).coffee || {}).description)" :overflow="`break`" style="color: #00000099; --update-key: 2u54"></van-text>
                                    </van-linear-layout>
                                    <van-linear-layout :ref="`linear_layout_13_${(current || {}).__nodeKey || (current || {}).index}`" :wrap="true">
                                        <van-row :ref="`row_4_${(current || {}).__nodeKey || (current || {}).index}`" :gutter="`0`">
                                            <van-col :ref="`col_9_${(current || {}).__nodeKey || (current || {}).index}`" :span="8">
                                                <van-text :ref="`text_11_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', $utils['ToString']('nasl.core.String', `¥`) + $utils['ToString']('nasl.core.Decimal', (((current || {}).item || {}).coffee || {}).price))" style="font-size: 14px; font-weight: bold"></van-text>
                                            </van-col>
                                            <van-col :ref="`col_10_${(current || {}).__nodeKey || (current || {}).index}`" :span="16">
                                                <bs-changeQuantity :ref="`bs_changeQuantity_3_${(current || {}).__nodeKey || (current || {}).index}`" :count.sync="current.item.count" @reduce="bs_changeQuantity_3_reduce($event, current)" @add="bs_changeQuantity_3_add($event, current)"></bs-changeQuantity>
                                            </van-col>
                                        </van-row>
                                    </van-linear-layout>
                                </van-linear-layout>
                            </van-col>
                        </van-row>
                    </template>
                </van-grid-view>
            </van-linear-layout>
        </van-linear-layout>
        <van-linear-layout :ref="`linear_layout_15`" :direction="`horizontal`" :wrap="true" :gap="`normal`" :mode="`flex`" :justify="`center`" :alignment="`center`" style="width: 100%; height: 56px; --van-space-base: 0px; position: fixed; left: 1px; --update-key: kcq6; bottom: 60px; z-index: 9999">
            <van-linear-layout :ref="`linear_layout_16`" :direction="`horizontal`" :wrap="true" :mode="`flex`" :alignment="`center`" :justify="`space-between`" style="width: 94%; height: 56px; background-image: linear-gradient(90deg, #ffffff 0%, #523626 100%); border-top-left-radius: 100px; border-top-right-radius: 100px; border-bottom-right-radius: 100px; border-bottom-left-radius: 100px; --update-key: wxvs; z-index: 9999">
                <van-linear-layout :ref="`linear_layout_17`" :direction="`horizontal`" :wrap="true" :mode="`flex`" :justify="`center`" :alignment="`center`">
                    <van-badge :ref="`badge_1`" :content="$global.add(0, $utils['ListSum']($utils['ListTransform'](selectCoffeeList, (item) => (item || {}).count)))" style="width: 46px; height: 46px; background-color: #d1d1d1; border-top-left-radius: 100px; border-top-right-radius: 100px; border-bottom-right-radius: 100px; border-bottom-left-radius: 100px; --update-key: 3okq; text-align: center">
                        <van-iconv :ref="`iconv_2`" :name="`//lcap-static-saas.nos-eastchina1.126.net/user/jystudy/1715399217722_1702810286875_%E9%9B%B6%E5%94%AE%E7%AE%A1%E7%90%86.svg`" :icotype="`only`" @click="iconv_2_click($event)" style="width: 45px; height: 35px; font-size: 32px; color: #000000; border-top-left-radius: 100px; border-top-right-radius: 100px; border-bottom-right-radius: 100px; border-bottom-left-radius: 100px; --update-key: gfdt; margin-top: 8px">
                            <van-text :ref="`text_13`" :text="`图标`"></van-text>
                        </van-iconv>
                    </van-badge>
                    <van-text :ref="`text_14`" :text="$utils['ToString']('nasl.core.String', $utils['ToString']('nasl.core.String', `¥ `) + $utils['ToString']('nasl.core.Decimal', $global.add(0, $utils['ListSum']($utils['ListTransform'](selectCoffeeList, (item) => $global.multiply(((item || {}).coffee || {}).price, (item || {}).count))))))" :overflow="`ellipsis`" :widthStretch="`false`" style="margin-left: 16px; --update-key: 3dif; font-weight: bold; width: 70px"></van-text>
                </van-linear-layout>
                <van-linear-layout :ref="`linear_layout_18`" :direction="`horizontal`" :wrap="true" :widthStretch="`false`" :heightStretch="`false`" :mode="`flex`" :justify="`center`" :alignment="`center`" @click="linear_layout_18_click($event)" style="width: 25%; height: 100%; background-color: #523626; border-top-left-radius: 100px; border-top-right-radius: 100px; border-bottom-right-radius: 100px; border-bottom-left-radius: 100px; --update-key: co6d">
                    <van-text :ref="`text_15`" :text="`去结算 `" style="color: #ffffff; font-size: 16px; font-weight: bold"></van-text>
                </van-linear-layout>
            </van-linear-layout>
        </van-linear-layout>
        <van-popup :ref="`shopCart`" :position="`bottom`" :safeAreaInsetBottom="true" :evn="`picker`" :closeOnClickOverlay="true" style="height: auto; max-height: 70%">
            <van-linear-layout :ref="`linear_layout_19`" :direction="`horizontal`" :wrap="true">
                <van-cardu :ref="`cardu_2`" :split="true">
                    <template #head :ref="`template_3`">
                        <van-linear-layout :ref="`linear_layout_21`" :wrap="true" :mode="`flex`" :justify="`space-between`" :alignment="`center`">
                            <van-linear-layout :ref="`linear_layout_22`" :wrap="true">
                                <van-text :ref="`text_20`" :text="$utils['ToString']('nasl.core.String', $utils['ToString']('nasl.core.String', `已选购商品：`) + $utils['ToString']('nasl.core.Long', $utils['ListSum']($utils['ListTransform'](selectCoffeeList, (item) => (item || {}).count))) + $utils['ToString']('nasl.core.String', `件`))" :overflow="`ellipsis`"></van-text>
                            </van-linear-layout>
                            <van-linear-layout :ref="`linear_layout_23`" :wrap="true">
                                <van-iconv :ref="`iconv_4`" :name="`//lcap-static-saas.nos-eastchina1.126.net/user/jystudy/1716968323230_1712740953830_1712123928413_1710813479902_1710411355638_delete-bin-6-line.svg`" :icotype="`left`" @click="iconv_4_click($event)">
                                    <van-text :ref="`text_22`" :text="`清空购物车`" style="margin-left: 4px; --update-key: 1cwo"></van-text>
                                </van-iconv>
                            </van-linear-layout>
                        </van-linear-layout>
                    </template>
                    <van-list-view :ref="`list_view_1`" :pageable="`load-more`" :vusion-disabled-addslot="true" :pageSize="20" :dataSource="selectCoffeeList" style="height: auto">
                        <template #next :ref="`template_4`">
                            <van-text :ref="`text_23`" :text="`下一页`"></van-text>
                        </template>
                        <template #prev :ref="`template_5`">
                            <van-text :ref="`text_24`" :text="`上一页`"></van-text>
                        </template>
                        <template #item="current" :ref="`template_6`">
                            <van-linear-layout :ref="`linear_layout_25_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`normal`" :mode="`flex`" :direction="`horizontal`" :justify="`start`" :alignment="`start`" style="height: 80px; --van-space-base: 16px">
                                <van-linear-layout :ref="`linear_layout_26_${(current || {}).__nodeKey || (current || {}).index}`" :wrap="true">
                                    <van-image :ref="`image_2_${(current || {}).__nodeKey || (current || {}).index}`" :src="(((current || {}).item || {}).coffee || {}).coffeeImage" :fit="`cover`" :preview="true" style="width: 80px; height: 80px"></van-image>
                                </van-linear-layout>
                                <van-linear-layout :ref="`linear_layout_27_${(current || {}).__nodeKey || (current || {}).index}`" :wrap="true" :widthStretch="`true`">
                                    <van-linear-layout :ref="`linear_layout_29_${(current || {}).__nodeKey || (current || {}).index}`" :direction="`vertical`" :gap="`none`">
                                        <van-linear-layout :ref="`linear_layout_30_${(current || {}).__nodeKey || (current || {}).index}`" :wrap="true" style="width: 100%">
                                            <van-text :ref="`text_25_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).coffee || {}).coffeename)" style="font-size: 14px"></van-text>
                                        </van-linear-layout>
                                        <van-linear-layout :ref="`linear_layout_31_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`normal`" :mode="`flex`" :direction="`horizontal`" :alignment="`center`" :justify="`space-between`" style="--van-space-base: 4px; width: 100%">
                                            <van-text :ref="`text_26_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.Decimal', (((current || {}).item || {}).coffee || {}).price)" style="font-size: 14px; font-weight: bold"></van-text>
                                            <bs-changeQuantity :ref="`bs_changeQuantity_4_${(current || {}).__nodeKey || (current || {}).index}`" :count.sync="current.item.count" @reduce="bs_changeQuantity_4_reduce($event, current)"></bs-changeQuantity>
                                        </van-linear-layout>
                                    </van-linear-layout>
                                </van-linear-layout>
                            </van-linear-layout>
                        </template>
                    </van-list-view>
                </van-cardu>
            </van-linear-layout>
            <div :ref="`div_1`" :vusion-slot-name="`default`" :vusion-disabled-cut="true" style="min-height: 120px; width: 100vw; height: auto"></div>
        </van-popup>
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
            ["pickupMethod"]: this.$genInitFromSchema("app.enums.PickupMethodEnum", "0"),
            ["sidebarList"]: this.$genInitFromSchema("nasl.collection.List<app.structures.SidebarStructure>", undefined),
            ["selectsidebarItem"]: this.$genInitFromSchema("app.structures.SidebarStructure", undefined),
            ["coffeeStructureList"]: this.$genInitFromSchema("nasl.collection.List<app.structures.CoffeeStructure>", undefined),
            ["selectCoffeeList"]: this.$genInitFromSchema("nasl.collection.List<app.structures.CoffeeStructure>", undefined),
        };
    },
    computed: {},
    meta: {
        title: "点单",
        crumb: undefined,
        crumbI18n: undefined,
        first: undefined,
        auth: undefined,
    },
    methods: {
        async convertStructure() {
            let coffeeCategoryList = this.$genInitFromSchema("nasl.collection.List<{coffeeCategory: app.dataSources.defaultDS.entities.CoffeeCategory}>", undefined);
            let sidebar = this.$genInitFromSchema("app.structures.SidebarStructure", undefined);
            let result = this.$genInitFromSchema("nasl.collection.List<app.structures.SidebarStructure>", undefined);

            coffeeCategoryList = this.$genInitFromSchema(
                "nasl.collection.List<{coffeeCategory: app.dataSources.defaultDS.entities.CoffeeCategory}>",
                await this.$logics["app.logics.loadCoffeeCategoryList"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "d9581328bfe74390a7137d72461f5e9e",
                    },
                    path: {},
                    body: {},
                })
            );
            if (this.$utils["HasValue"]({ type: "nasl.collection.List<{coffeeCategory: app.dataSources.defaultDS.entities.CoffeeCategory}>", value: coffeeCategoryList })) {
                result = this.$genInitFromSchema(
                    "nasl.collection.List<app.structures.SidebarStructure>",
                    await this.$utils["ListTransformAsync"](
                        coffeeCategoryList,
                        async (item) =>
                            await (async () => {
                                const obj = this.$genInitFromSchema("app.structures.SidebarStructure", this.$utils["New"]({ concept: "TypeAnnotation", typeKind: "reference", typeNamespace: "app.structures", typeName: "SidebarStructure" }));
                                obj.content = ((item || {}).coffeeCategory || {}).cateGoryName;
                                obj.isSelect = false;
                                obj.value = ((item || {}).coffeeCategory || {}).id;
                                return obj;
                            })()
                    )
                );
                sidebar = this.$genInitFromSchema("app.structures.SidebarStructure", this.$utils["Get"](result, 0));
                sidebar.isSelect = true;
                this.$genInitFromSchema("app.structures.SidebarStructure", this.$utils["Set"](result, 0, sidebar));
                this.selectsidebarItem = sidebar;
            } else {
            }

            return result;
        },
        async menu_created(event) {
            await (async () => {
                this.sidebarList = this.$genInitFromSchema("nasl.collection.List<app.structures.SidebarStructure>", await this.convertStructure());
                this.coffeeStructureList = this.$genInitFromSchema(
                    "nasl.collection.List<app.structures.CoffeeStructure>",
                    await this.$logics["app.logics.loadCoffeeStructureList"]({
                        config: {
                            download: false,
                        },
                        query: {},
                        headers: {
                            "lcap-calllogic-uuid": "02f9f3de1a0b4718b809de407e6c5933",
                        },
                        path: {},
                        body: {},
                    })
                );
                return;
            })();
        },
        async text_4_click(event) {
            await (async () => {
                this.pickupMethod = "0";
                return;
            })();
        },
        async text_6_click(event) {
            await (async () => {
                this.pickupMethod = "1";
                return;
            })();
        },
        async linear_layout_18_click(event) {
            await (async () => {
                let order = this.$genInitFromSchema("app.dataSources.defaultDS.entities.OrderEntity", undefined);

                order.pickupMethod = this.pickupMethod;
                order.coffeeList = this.selectCoffeeList;
                order.coffeeCount = this.$utils["ListSum"](this.$genInitFromSchema("nasl.collection.List<nasl.core.Long>", await this.$utils["ListTransformAsync"](this.selectCoffeeList, (item) => (item || {}).count)));
                order.totalAmount = this.$utils["ListSum"](this.$genInitFromSchema("nasl.collection.List<nasl.core.Decimal>", await this.$utils["ListTransformAsync"](this.selectCoffeeList, (item) => this.$global.multiply(((item || {}).coffee || {}).price, (item || {}).count))));

                if (this.$utils["HasValue"]({ type: "nasl.core.Decimal", value: (order || {}).totalAmount }, { type: "nasl.core.Long", value: (order || {}).coffeeCount }, { type: "app.enums.PickupMethodEnum", value: (order || {}).pickupMethod }, { type: "nasl.collection.List<app.structures.CoffeeStructure>", value: (order || {}).coffeeList })) {
                    this.$destination(`/m/index/confirmOrder?orderJsonString=${await this.$utils["JsonSerialize"](order)}`, "_self");
                } else {
                    await this.$toast.show(this.$utils["ToString"]("nasl.core.String", `不可结算 请检查商品`));
                }

                return;
            })();
        },
        async iconv_2_click(event) {
            await (async () => {
                if (this.$utils["HasValue"]({ type: "nasl.collection.List<app.structures.CoffeeStructure>", value: this.selectCoffeeList })) {
                    await (this.$refs && this.$refs[`shopCart`] && this.$refs[`shopCart`].openModal && this.$refs[`shopCart`].openModal());
                } else {
                    await this.$toast.show(this.$utils["ToString"]("nasl.core.String", `请添加商品`));
                }

                return;
            })();
        },
        async iconv_4_click(event) {
            await (async () => {
                this.$genInitFromSchema("nasl.collection.List<app.structures.CoffeeStructure>", this.$utils["Clear"](this.selectCoffeeList));
                this.sidebarList = this.$genInitFromSchema("nasl.collection.List<app.structures.SidebarStructure>", await this.convertStructure());
                this.coffeeStructureList = this.$genInitFromSchema(
                    "nasl.collection.List<app.structures.CoffeeStructure>",
                    await this.$logics["app.logics.loadCoffeeStructureList"]({
                        config: {
                            download: false,
                        },
                        query: {},
                        headers: {
                            "lcap-calllogic-uuid": "d9510edda6934befbcfe09cf120597bf",
                        },
                        path: {},
                        body: {},
                    })
                );
                await (this.$refs && this.$refs[`shopCart`] && this.$refs[`shopCart`].closeModal && this.$refs[`shopCart`].closeModal());
                return;
            })();
        },
        async bs_changeQuantity_4_reduce(event, current) {
            await (async () => {
                if ((event || {}).value == 0) {
                    current.item.count = (event || {}).value;
                    this.$utils["Remove"](this.selectCoffeeList, (current || {}).item);
                    if ((this.selectCoffeeList || {}).length == 0) {
                        await (this.$refs && this.$refs[`shopCart`] && this.$refs[`shopCart`].closeModal && this.$refs[`shopCart`].closeModal());
                    } else {
                    }
                } else {
                }

                return;
            })();
        },
        async bs_changeQuantity_3_reduce(event, current) {
            await (async () => {
                if ((event || {}).value == 0) {
                    current.item.count = (event || {}).value;
                    this.$utils["Remove"](this.selectCoffeeList, (current || {}).item);
                } else {
                }

                return;
            })();
        },
        async bs_changeQuantity_3_add(event, current) {
            await (async () => {
                if (this.$utils["Contains"](this.$genInitFromSchema("nasl.collection.List<nasl.core.Long>", await this.$utils["ListTransformAsync"](this.selectCoffeeList, (item) => ((item || {}).coffee || {}).id)), (((current || {}).item || {}).coffee || {}).id)) {
                } else {
                    this.$utils["Add"](this.selectCoffeeList, (current || {}).item);
                }

                return;
            })();
        },
        gentext_4_bindStyles_color_expression_viewMatchExpression() {
            return (() => {
                if (this.$global.isEqual(this.pickupMethod, "0")) {
                    return `#000000`;
                } else if (this.$global.isEqual(this.pickupMethod, "1")) {
                    return `#00000066`;
                } else {
                }
            })();
        },

        gentext_6_bindStyles_color_expression_viewMatchExpression() {
            return (() => {
                if (this.$global.isEqual(this.pickupMethod, "0")) {
                    return `#00000066`;
                } else if (this.$global.isEqual(this.pickupMethod, "1")) {
                    return `#000000`;
                } else {
                }
            })();
        },
    },
    async created() {
        await this.menu_created();
    },
};
</script>
