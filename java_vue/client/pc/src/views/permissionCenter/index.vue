<template>
    <l-root :ref="`lRoot1`" style="min-width: 1440px">
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
                        <u-multi-layout-item :ref="`multi_layout_item7`" :alignItems="`center`" style="width: 200px">
                            <u-image :ref="`image1`" :fit="`cover`" :src="`/assets/lcap-logo-light.svg`" style="width: 28px; height: 28px; margin: 16px 14px; --custom-start: auto; vertical-align: middle"></u-image>
                            <u-text :ref="`text1`" :text="`权限中心`" :size="`large`" style="--custom-start: auto; vertical-align: middle"></u-text>
                        </u-multi-layout-item>
                    </template>
                </u-navbar-multi>
            </u-multi-layout-item>
            <u-multi-layout-item :ref="`multi_layout_item2`">
                <u-multi-layout :ref="`multi_layout2`">
                    <u-multi-layout-item :ref="`multi_layout_item3`" :fixed="true" style="width: 200px; left: 0">
                        <u-sidebar :ref="`sidebar1`" :value="`3`" :router="true">
                            <u-sidebar-item :ref="`sidebar_item1`" :destination="`/permissionCenter/userManagement`" :value="`1`" icon="">
                                <i-ico :ref="`ico_15`" :name="`//minio-api.codewave-test.163yun.com/lowcode-static/user/newtest/1713843695557_1711962366172_1710987645543_%E7%BB%84%E4%BB%B6%201.svg`" :icotype="`only`">
                                    <u-text :ref="`text_306`" :text="`图标`"></u-text>
                                </i-ico>
                                <u-text :ref="`text4`" :text="`用户管理`" style="--update-key: oh4b; margin-left: 5px"></u-text>
                            </u-sidebar-item>
                            <u-sidebar-item :ref="`sidebar_item_3`" :destination="`/permissionCenter/departmentManagement`" :value="`1`" icon="" style="--custom-start: auto">
                                <i-ico :ref="`ico_16`" :name="`//minio-api.codewave-test.163yun.com/lowcode-static/user/newtest/1713843695595_1711962366172_1710987510308_%E5%AE%B9%E5%99%A8%20%281%29.svg`" :icotype="`only`">
                                    <u-text :ref="`text_307`" :text="`图标`"></u-text>
                                </i-ico>
                                <u-text :ref="`text_3`" :text="`部门管理`" style="--update-key: oh4b; margin-left: 5px"></u-text>
                            </u-sidebar-item>
                            <u-sidebar-item :ref="`sidebar_item_2`" :destination="`/permissionCenter/roleManagement`" :value="`1`" style="--custom-start: auto">
                                <i-ico :ref="`ico_17`" :name="`//minio-api.codewave-test.163yun.com/lowcode-static/user/newtest/1713843695713_1711962366172_1708398687100_user-settings-line.svg`" :icotype="`only`">
                                    <u-text :ref="`text_308`" :text="`图标`"></u-text>
                                </i-ico>
                                <u-text :ref="`text_2`" :text="`角色管理`" style="margin-left: 5px; --update-key: 56sv"></u-text>
                            </u-sidebar-item>
                            <u-sidebar-item :ref="`sidebar_item_1`" :destination="`/permissionCenter/permissionManagement`" :value="`1`" style="--custom-start: auto">
                                <i-ico :ref="`ico_18`" :name="`//minio-api.codewave-test.163yun.com/lowcode-static/user/newtest/1713843695658_1711962366172_1710987712570_%E7%BB%84%E4%BB%B6%201%20%282%29.svg`" :icotype="`only`">
                                    <u-text :ref="`text_309`" :text="`图标`"></u-text>
                                </i-ico>
                                <u-text :ref="`text_1`" :text="`权限管理`" style="margin-left: 5px; --update-key: w94b"></u-text>
                            </u-sidebar-item>
                        </u-sidebar>
                    </u-multi-layout-item>
                    <u-multi-layout-item :ref="`multi_layout_item4`" style="margin-left: 200px; padding-top: 20px; padding-left: 40px; padding-right: 40px; padding-bottom: 40px; --update-key: 9uhu; background-color: #f5f6fa">
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
const mixin = {
    data() {
        return { userInfo: null, noticeCount: 0, noticeActive: false };
    },
    watch: {
        $route: {
            immediate: true,
            handler($route) {
                this.noticeActive = $route.path.startsWith("/notice");
            },
        },
    },
    created() {
        this.$auth && this.$auth.getUserInfo().then((userInfo) => (this.userInfo = userInfo));
    },
    methods: {
        logout() {
            /* eslint-disable new-cap */ this.$confirm("确定退出登录吗？", "提示")
                .then(() => this.$auth.logout())
                .then(() => {
                    this.eraseCookie();
                    location.reload();
                });
        },
        eraseCookie() {
            const cookies = document.cookie.split(";");
            cookies.forEach((cookie) => {
                const eqPos = cookie.indexOf("=");
                const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
                const d = new Date();
                d.setTime(d.getTime() - 1 * 24 * 60 * 60 * 1000);
                document.cookie = `${name}=; expires=${d.toGMTString()}; path=/`;
            });
        },
    },
};
export default {
    mixins: [mixin, keyboardEventMixin],
    data() {
        return {};
    },
    computed: {},
    meta: {
        title: "权限中心",
        crumb: "",
        crumbI18n: undefined,
        first: undefined,
        auth: "loginAuth",
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
