<template>
    <l-root :ref="`lRoot1`">
        <u-multi-layout :ref="`multi_layout1`" :direction="`vertical`">
            <u-multi-layout-item :ref="`multi_layout_item1`" style="height: 60px">
                <u-navbar-multi :ref="`navbar_multi1`">
                    <template #right :ref="`template1`">
                        <u-multi-layout-item :ref="`multi_layout_item6`" :alignItems="`center`" :justify="`end`">
                            <u-dropdown :ref="`dropdown1`" style="margin-right: 10px">
                                <template #default :ref="`template3`">
                                    <u-dropdown-item :ref="`dropdown_item1`" @click="dropdown_item1_click($event)">
                                        <u-text :ref="`text2`" :text="`安全退出`"></u-text>
                                    </u-dropdown-item>
                                </template>
                                <template #title :ref="`template4`">
                                    <u-linear-layout :ref="`linear_layout1`" :key="`linear_layout1`" :gap="`small`" v-if="$global.userInfo">
                                        <u-image :ref="`image2`" :src="`/assets/avatar-default.svg`" :fit="`cover`" style="width: 36px; height: 36px; vertical-align: middle"></u-image>
                                        <span :ref="`span1`" style="display: inline-block; vertical-align: top; margin-left: 10px; margin-right: 10px">
                                            <u-text :ref="`text3`" :text="$utils['ToString']('nasl.core.String', ($global.userInfo || {}).UserName)"></u-text>
                                        </span>
                                    </u-linear-layout>
                                </template>
                            </u-dropdown>
                        </u-multi-layout-item>
                    </template>
                    <template #left :ref="`template2`">
                        <u-multi-layout-item :ref="`multi_layout_item7`" :alignItems="`center`" style="width: auto">
                            <u-image :ref="`image1`" :fit="`cover`" :src="`/assets/lcap-logo-light.svg`" style="width: 28px; height: 28px; margin: 16px 14px; --custom-start: auto; vertical-align: middle"></u-image>
                            <u-text :ref="`text1`" :size="`large`" :text="`NetEase咖啡管理后台`" style="--custom-start: auto; vertical-align: middle"></u-text>
                        </u-multi-layout-item>
                    </template>
                </u-navbar-multi>
            </u-multi-layout-item>
            <u-multi-layout-item :ref="`multi_layout_item2`">
                <u-multi-layout :ref="`multi_layout2`">
                    <u-multi-layout-item :ref="`multi_layout_item3`" :fixed="true" style="width: 200px; left: 0">
                        <u-sidebar :ref="`sidebar1`" :router="true">
                            <u-sidebar-item :ref="`sidebar_item1`" :value="null" :destination="`/dashboard/slideManagement`">
                                <u-text :ref="`text4`" :text="`幻灯片管理`"></u-text>
                            </u-sidebar-item>
                            <u-sidebar-item :ref="`sidebar_item2`" :value="null" :destination="`/dashboard/coffeeCateGoryManagement`">
                                <u-text :ref="`text5`" :text="`咖啡类目管理`"></u-text>
                            </u-sidebar-item>
                            <u-sidebar-item :ref="`sidebar_item_1`" :value="null" :destination="`/dashboard/coffeeManagement`">
                                <u-text :ref="`text_1`" :text="`咖啡管理`"></u-text>
                            </u-sidebar-item>
                            <u-sidebar-item :ref="`sidebar_item_2`" :value="null" :destination="`/dashboard/orderManagement`">
                                <u-text :ref="`text_2`" :text="`订单管理`"></u-text>
                            </u-sidebar-item>
                        </u-sidebar>
                    </u-multi-layout-item>
                    <u-multi-layout-item :ref="`multi_layout_item4`" style="margin-left: 200px; padding: 40px 40px 40px 40px">
                        <u-crumb :ref="`crumb1`" :auto="true"></u-crumb>
                        <u-router-view :ref="`router_view1`"></u-router-view>
                    </u-multi-layout-item>
                </u-multi-layout>
            </u-multi-layout-item>
        </u-multi-layout>
    </l-root>
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
        title: "总览页",
        crumb: undefined,
        crumbI18n: undefined,
        first: "coffeeManagement",
        auth: undefined,
    },
    methods: {
        async dropdown_item1_click(event) {
            await (async () => {
                await this.$global.logout({});
                return;
            })();
        },
    },
};
</script>
