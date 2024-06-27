<template>
    <van-linear-layout :ref="`vanLinearLayout1`" :gap="`none`">
        <van-linear-layout :ref="`linear_layout_1`" :direction="`horizontal`" :wrap="true" style="height: auto; background-color: #f6f6f6">
            <van-list-view :ref="`list_view_1`" pageable="" :vusion-disabled-addslot="true" :pageSize="20" :dataSource="sidebarList" style="background-color: #f6f6f6; width: 100%; min-width: 25%; --custom-start: auto; height: 100vh">
                <template #next :ref="`template_1`">
                    <van-text :ref="`text_1`" :text="`下一页`"></van-text>
                </template>
                <template #prev :ref="`template_2`">
                    <van-text :ref="`text_2`" :text="`上一页`"></van-text>
                </template>
                <template #item="current" :ref="`template_3`">
                    <van-linear-layout :ref="`linear_layout_3_${(current || {}).__nodeKey || (current || {}).index}`" :direction="`horizontal`" :wrap="true" @click="linear_layout_3_click($event, current)" :style="{ color: genlinear_layout_3_bindStyles_color_expression_viewMatchExpression(current), 'background-color': genlinear_layout_3_bindStyles_background_color_expression_viewMatchExpression(current) }" style="padding-top: 16px; padding-left: 16px; padding-right: 16px; padding-bottom: 16px; --update-key: 7yi8">
                        <van-text :ref="`text_3_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', ((current || {}).item || {}).content)"></van-text>
                    </van-linear-layout>
                </template>
            </van-list-view>
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
        ["sidebarList"]: {
            type: Array,
            default: function () {
                return this.$genInitFromSchema("nasl.collection.List<app.structures.SidebarStructure>", undefined);
            },
        },
        ["selectSidebaritem"]: {
            type: Object,
            default: function () {
                return this.$genInitFromSchema("app.structures.SidebarStructure", undefined);
            },
        },
        ["fontColor"]: {
            type: String,
            default: function () {
                return `#000000`;
            },
        },
        ["selectedFontColor"]: {
            type: String,
            default: function () {
                return `#bc8148`;
            },
        },
        ["bgColor"]: {
            type: String,
            default: function () {
                return `#f6f6f6`;
            },
        },
        ["selectedBgColor"]: {
            type: String,
            default: function () {
                return `#ffffff`;
            },
        },
    },
    watch: {
        ["sidebarList"]: {
            handler(val) {
                this.$emit("update:sidebarList", val);
            },
        },
        ["selectSidebaritem"]: {
            handler(val) {
                this.$emit("update:selectSidebaritem", val);
            },
        },
        ["fontColor"]: {
            handler(val) {
                this.$emit("update:fontColor", val);
            },
        },
        ["selectedFontColor"]: {
            handler(val) {
                this.$emit("update:selectedFontColor", val);
            },
        },
        ["bgColor"]: {
            handler(val) {
                this.$emit("update:bgColor", val);
            },
        },
        ["selectedBgColor"]: {
            handler(val) {
                this.$emit("update:selectedBgColor", val);
            },
        },
    },

    data() {
        return {};
    },
    computed: {},
    meta: {
        title: "自定义侧边栏",
        crumb: undefined,
        crumbI18n: undefined,
        first: undefined,
        auth: undefined,
    },
    methods: {
        async linear_layout_3_click(event, current) {
            await (async () => {
                this.selectSidebaritem = (current || {}).item;
                this.selectSidebaritem.isSelect = true;
                this.sidebarList = this.$genInitFromSchema(
                    "nasl.collection.List<app.structures.SidebarStructure>",
                    await this.$utils["ListTransformAsync"](
                        this.sidebarList,
                        async (item) =>
                            await (async () => {
                                const obj = this.$genInitFromSchema("app.structures.SidebarStructure", this.$utils["New"]({ concept: "TypeAnnotation", typeKind: "reference", typeNamespace: "app.structures", typeName: "SidebarStructure" }));
                                obj.isSelect = false;
                                obj.content = (item || {}).content;
                                obj.value = (item || {}).value;
                                return obj;
                            })()
                    )
                );
                this.$genInitFromSchema("app.structures.SidebarStructure", this.$utils["Set"](this.sidebarList, (current || {}).index, this.selectSidebaritem));
                await console.log(this.$utils["ToString"]("nasl.core.String", this.$utils["ToString"]("app.structures.SidebarStructure", this.selectSidebaritem)));
                return;
            })();
        },
        genlinear_layout_3_bindStyles_color_expression_viewMatchExpression(current) {
            return (() => {
                if (this.$global.isEqual(((current || {}).item || {}).isSelect, true)) {
                    return this.selectedFontColor;
                } else if (this.$global.isEqual(((current || {}).item || {}).isSelect, false)) {
                    return this.fontColor;
                } else {
                }
            })();
        },

        genlinear_layout_3_bindStyles_background_color_expression_viewMatchExpression(current) {
            return (() => {
                if (this.$global.isEqual(((current || {}).item || {}).isSelect, true)) {
                    return this.selectedBgColor;
                } else if (this.$global.isEqual(((current || {}).item || {}).isSelect, false)) {
                    return this.bgColor;
                } else {
                }
            })();
        },
    },
};
</script>
