<template>
    <l-root :ref="`lRoot1`" style="background-color: #f5f6fa; --custom-start: auto; height: calc(100vh - 210px); min-height: 200px">
        <u-router-view :ref="`uRouterView1`"></u-router-view>
        <u-linear-layout :ref="`linear_layout_293`" :direction="`horizontal`" style="--custom-start: auto; height: calc(100vh - 210px)">
            <u-panel :ref="`panel_1`" style="margin-bottom: 16px; --update-key: a59q; width: 100%; border-top-width: 0px; border-left-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-style: solid">
                <template #title :ref="`template_1`">
                    <u-text :ref="`text_1`" :text="`功能权限管理`"></u-text>
                </template>
                <u-linear-layout :ref="`linear_layout1`" :direction="`vertical`" style="--custom-start: auto">
                    <u-linear-layout :ref="`linear_layout2`" :justify="`start`">
                        <u-form :ref="`form1`" :layout="`inline`" :labelSize="`auto`" key="form1" style="--custom-start: auto">
                            <u-form-item :ref="`form_item1`" style="width: 332px; text-align: left">
                                <u-input :ref="`input1`" :placeholder="`请输入权限名称`" :value.sync="filter.name" :clearable="true"></u-input>
                                <template #label :ref="`template14`">
                                    <u-text :ref="`text13`" :text="`权限名称`"></u-text>
                                </template>
                            </u-form-item>
                        </u-form>
                    </u-linear-layout>
                    <u-linear-layout :ref="`linear_layout_292`" :justify="`space-between`" style="--custom-start: auto">
                        <u-button :ref="`button1`" :color="`primary`" :text="`查询`" @click="button1_click($event)" style="--custom-start: auto"></u-button>
                        <u-button :ref="`button_4`" :color="`primary`" :text="`新增功能权限`" :icon="`add`" @click="button_4_click($event)"></u-button>
                    </u-linear-layout>
                </u-linear-layout>
            </u-panel>
            <u-panel :ref="`panel_2`" style="border-top-width: 0px; border-left-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-style: solid; --update-key: lwdt">
                <template #title :ref="`template_73`"></template>
                <u-table-view :ref="`tableView`" :dataSource="load" :dataSchema="`LoadTest2TableViewStructure`" :valueField="`lACPPermission.id`" :pagination="true" :showSizer="true" key="tableView" style="--custom-start: auto">
                    <u-table-view-column :ref="`table_view_column1`" :type="`index`" :width="`60`">
                        <template #title :ref="`template15`">
                            <u-text :ref="`text14`" :text="`序号`"></u-text>
                        </template>
                    </u-table-view-column>
                    <u-table-view-column :ref="`table_view_column2`" :field="`lACPPermission.name`">
                        <template #cell="current" :ref="`template1`">
                            <u-linear-layout :ref="`linear_layout3_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                <u-text :ref="`text1_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).lACPPermission || {}).name)"></u-text>
                            </u-linear-layout>
                        </template>
                        <template #title :ref="`template16`">
                            <u-text :ref="`text15`" :text="`权限名称`"></u-text>
                        </template>
                    </u-table-view-column>
                    <u-table-view-column :ref="`table_view_column3`" :field="`roleList`">
                        <template #cell="current" :ref="`template2`">
                            <u-linear-layout :ref="`linear_layout4_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                <u-text
                                    :ref="`text2_${(current || {}).__nodeKey || (current || {}).index}`"
                                    :text="
                                        $utils['ToString'](
                                            'nasl.core.String',
                                            $utils['Join'](
                                                $utils['ListTransform'](((current || {}).item || {}).roleList, (item) => (item || {}).name),
                                                `、`
                                            )
                                        )
                                    "
                                ></u-text>
                            </u-linear-layout>
                        </template>
                        <template #title :ref="`template17`">
                            <u-text :ref="`text16`" :text="`权限角色`"></u-text>
                        </template>
                    </u-table-view-column>
                    <u-table-view-column :ref="`table_view_column4`" :field="`lACPPermission.description`">
                        <template #cell="current" :ref="`template3`">
                            <u-linear-layout :ref="`linear_layout5_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                <u-text :ref="`text3_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).lACPPermission || {}).description)"></u-text>
                            </u-linear-layout>
                        </template>
                        <template #title :ref="`template18`">
                            <u-text :ref="`text17`" :text="`权限描述`"></u-text>
                        </template>
                    </u-table-view-column>
                    <u-table-view-column :ref="`table_view_column7`" :width="120">
                        <template #cell="current" :ref="`template6`">
                            <u-linear-layout :ref="`linear_layout8_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                <u-link
                                    :ref="`link1_${(current || {}).__nodeKey || (current || {}).index}`"
                                    :text="`修改`"
                                    :disabled="
                                        $utils['Contains'](
                                            $utils['ListTransform'](((current || {}).item || {}).roleList, (item) => (item || {}).editable),
                                            false
                                        )
                                    "
                                    @click="link1_click($event, current)"
                                ></u-link>
                                <u-link
                                    :ref="`link2_${(current || {}).__nodeKey || (current || {}).index}`"
                                    :text="`删除`"
                                    :disabled="
                                        $utils['Contains'](
                                            $utils['ListTransform'](((current || {}).item || {}).roleList, (item) => (item || {}).editable),
                                            false
                                        )
                                    "
                                    @click="link2_click($event, current)"
                                    style="--link-color: #f24957; --update-key: x3cb"
                                ></u-link>
                            </u-linear-layout>
                        </template>
                        <template #title :ref="`template22`">
                            <u-text :ref="`text21`" :text="`操作`"></u-text>
                        </template>
                    </u-table-view-column>
                </u-table-view>
            </u-panel>
        </u-linear-layout>
        <u-modal :ref="`saveModal`" :size="`auto`" style="--custom-start: auto">
            <template #foot :ref="`template7`">
                <u-linear-layout :ref="`linear_layout9`">
                    <u-button :ref="`button3`" :key="`button3`" :color="`primary`" :text="`提交修改`" @click="button3_click($event)" v-if="isUpdate"></u-button>
                    <u-button :ref="`button4`" :key="`button4`" :color="`primary`" :text="`立即新增`" @click="button4_click($event)" v-if="!isUpdate"></u-button>
                    <u-button :ref="`uButton7`" :text="`取 消`" @click="uButton7_click($event)"></u-button>
                </u-linear-layout>
            </template>
            <template #body :ref="`template8`">
                <u-form :ref="`saveModalForm`" key="saveModalForm">
                    <u-form-item
                        :ref="`form_item6`"
                        :required="true"
                        :rules="[
                            { validate: 'filled', message: `权限名称不得为空`, trigger: 'input+blur', required: true },
                            { validate: 'excluded', args: [permissionNameList], message: `该权限名已存在`, trigger: 'input+blur' },
                        ]"
                    >
                        <u-input :ref="`input4`" :placeholder="`请输入权限名称`" :value.sync="input.name"></u-input>
                        <template #label :ref="`template23`">
                            <u-text :ref="`text22`" :text="`权限名称`"></u-text>
                        </template>
                    </u-form-item>
                    <u-form-item :ref="`form_item10`">
                        <u-input :ref="`input8`" :placeholder="`请输入权限描述`" :value.sync="input.description"></u-input>
                        <template #label :ref="`template27`">
                            <u-text :ref="`text26`" :text="`权限描述`"></u-text>
                        </template>
                    </u-form-item>
                    <u-form-item :ref="`form_item_1`" :labelLayout="`block`" style="--custom-start: auto">
                        <template #label :ref="`template_61`">
                            <u-text :ref="`text_184`" :text="`关联资源`"></u-text>
                        </template>
                        <u-transfer :ref="`transfer_1`" :showHead="true" :sourceTitle="`未选资源`" :targetTitle="`已选资源`" :source.sync="notAddResouces" :target.sync="addResouces" :filterable="true" :valueField="`value`" :textField="`text`" :clearable="true" style="--custom-start: auto"></u-transfer>
                    </u-form-item>
                </u-form>
            </template>
            <template #title :ref="`template9`">
                <div :ref="`div1`" :key="`div1`" v-if="isUpdate">
                    <u-text :ref="`text6`" :text="`修改权限`"></u-text>
                </div>
                <div :ref="`div2`" :key="`div2`" v-if="!isUpdate">
                    <u-text :ref="`text7`" :text="`新增权限`"></u-text>
                </div>
            </template>
        </u-modal>
        <u-modal :ref="`deleteModal`" :icon="`warning`" style="--custom-start: auto">
            <template #foot :ref="`template10`">
                <u-linear-layout :ref="`linear_layout10`">
                    <u-button :ref="`button5`" :color="`primary`" :text="`确定`" @click="button5_click($event)"></u-button>
                    <u-button :ref="`button6`" :text="`取消`" @click="button6_click($event)"></u-button>
                </u-linear-layout>
            </template>
            <template #body :ref="`template11`">
                <u-text :ref="`text8`" :text="`该权限相关的角色关联关系都会被删除！确认删除权限：`"></u-text>
                <u-text :ref="`text10`" :text="$utils['ToString']('nasl.core.String', (deletePermission || {}).name)"></u-text>
                <u-text :ref="`text11`" :text="` ？`"></u-text>
            </template>
            <template #title :ref="`template12`">
                <u-text :ref="`text9`" :text="`删除权限`"></u-text>
            </template>
        </u-modal>
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
        return {
            ["lCAPPermission"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPPermission", undefined),
            ["input"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPPermission", undefined),
            ["filter"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPPermission", undefined),
            ["isUpdate"]: undefined,
            ["deletePermission"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPPermission", undefined),
            ["permissionNameList"]: this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", undefined),
            ["updatePermissionName"]: undefined,
            ["notAddResouces"]: this.$genInitFromSchema("nasl.collection.List<app.structures.LCAPPermissionAndResource>", undefined),
            ["addResouces"]: this.$genInitFromSchema("nasl.collection.List<app.structures.LCAPPermissionAndResource>", undefined),
            ["permissionOldIdList"]: this.$genInitFromSchema("nasl.collection.List<nasl.core.Long>", undefined),
        };
    },
    computed: {},
    meta: {
        title: "功能权限管理",
        crumb: "",
        crumbI18n: undefined,
        first: undefined,
        auth: "loginAuth",
    },
    methods: {
        async load() {
            let result = this.$genInitFromSchema("nasl.collection.List<app.structures.LCAPGetPerResult>", undefined);

            result = this.$genInitFromSchema(
                "nasl.collection.List<app.structures.LCAPGetPerResult>",
                await this.$logics["app.logics.LCAPLoadPerManagementTableView"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "fd0fbcd04dc54cb7b9f9b405d447d770",
                    },
                    path: {},
                    body: {
                        filter: this.filter,
                    },
                })
            );
            return result;
        },
        async getPerNameList() {
            let result = this.$genInitFromSchema("{list: nasl.collection.List<{lCAPPermission: app.dataSources.defaultDS.entities.LCAPPermission}>, total: nasl.core.Long}", undefined);

            result = this.$genInitFromSchema(
                "{list: nasl.collection.List<{lCAPPermission: app.dataSources.defaultDS.entities.LCAPPermission}>, total: nasl.core.Long}",
                await this.$logics["app.logics.LCAPGetLAllACPPermission"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "da4e026a-8feb-4066-9aea-2ccc355b7084",
                    },
                    path: {},
                    body: {},
                })
            );
            var $forEachListVariable3788 = (result || {}).list;
            var $forEachStartVariable3788 = 0;
            var $forEachEndVariable3788 = ((result || {}).list || {}).length;
            if (Array.isArray($forEachListVariable3788)) {
                for (let index = $forEachStartVariable3788; index < $forEachEndVariable3788; index++) {
                    const item = $forEachListVariable3788[index];
                    this.$utils["Add"](this.permissionNameList, ((item || {}).lCAPPermission || {}).name);
                }
            }

            return result;
        },
        async permissionManagement_created(event) {
            await (async () => {
                this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPPermission", this.$utils["Clear"](this.filter));
                return;
            })();
        },
        async button3_click(event) {
            await (async () => {
                let mapping = this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPPerResMapping", undefined);
                let mappingList = this.$genInitFromSchema("nasl.collection.List<app.dataSources.defaultDS.entities.LCAPPerResMapping>", undefined);

                this.$genInitFromSchema("{list: nasl.collection.List<{lCAPPermission: app.dataSources.defaultDS.entities.LCAPPermission}>, total: nasl.core.Long}", await this.getPerNameList());
                this.$utils["ListDistinct"](this.permissionNameList);
                this.$utils["Remove"](this.permissionNameList, this.updatePermissionName);
                if ((this.$genInitFromSchema("nasl.ui.ValidateResult", await (this.$refs && this.$refs[`saveModalForm`] && this.$refs[`saveModalForm`].validate && this.$refs[`saveModalForm`].validate())) || {}).valid) {
                    this.$genInitFromSchema(
                        "app.dataSources.defaultDS.entities.LCAPPermission",
                        await this.$logics["app.dataSources.defaultDS.entities.LCAPPermission.logics.update"]({
                            config: {
                                download: false,
                            },
                            query: {},
                            headers: {
                                "lcap-calllogic-uuid": "bf289bf874ce49c990b911b975559878",
                            },
                            body: {
                                entity: this.input,
                            },
                        })
                    );
                    if ((this.addResouces || {}).length > 0) {
                        var $forEachListVariable3302 = this.addResouces;
                        var $forEachStartVariable3302 = 0;
                        var $forEachEndVariable3302 = (this.addResouces || {}).length;
                        if (Array.isArray($forEachListVariable3302)) {
                            for (let index = $forEachStartVariable3302; index < $forEachEndVariable3302; index++) {
                                const item = $forEachListVariable3302[index];
                                mapping.permissionId = (this.input || {}).id;
                                mapping.resourceId = (item || {}).value;
                                this.$utils["Add"](mappingList, this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPPerResMapping", this.$utils["Clone"](mapping)));
                            }
                        }

                        this.$genInitFromSchema(
                            "nasl.collection.List<app.dataSources.defaultDS.entities.LCAPPerResMapping>",
                            await this.$logics["app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.batchCreate"]({
                                config: {
                                    download: false,
                                },
                                query: {},
                                headers: {
                                    "lcap-calllogic-uuid": "2fe6a24f7e8b412c9f54dbc84b095f0c",
                                },

                                body: mappingList,
                            })
                        );
                    } else {
                    }

                    if ((this.permissionOldIdList || {}).length > 0) {
                        await this.$logics["app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.batchDelete"]({
                            config: {
                                download: false,
                            },
                            query: {},
                            headers: {
                                "lcap-calllogic-uuid": "926ac92107264020b65fa52d8658bcf1",
                            },

                            body: this.permissionOldIdList,
                        });
                    } else {
                    }

                    await (this.$refs && this.$refs[`saveModal`] && this.$refs[`saveModal`].close && this.$refs[`saveModal`].close());
                    await (this.$refs && this.$refs[`tableView`] && this.$refs[`tableView`].reload && this.$refs[`tableView`].reload());
                    await this.$toast.show(this.$utils["ToString"]("nasl.core.String", `修改成功！`));
                } else {
                }

                return;
            })();
        },
        async button4_click(event) {
            await (async () => {
                let mappingList = this.$genInitFromSchema("nasl.collection.List<app.dataSources.defaultDS.entities.LCAPPerResMapping>", undefined);
                let permissionCreated = this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPPermission", undefined);
                let mapping = this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPPerResMapping", undefined);

                this.$genInitFromSchema("{list: nasl.collection.List<{lCAPPermission: app.dataSources.defaultDS.entities.LCAPPermission}>, total: nasl.core.Long}", await this.getPerNameList());
                this.$utils["ListDistinct"](this.permissionNameList);
                if ((this.$genInitFromSchema("nasl.ui.ValidateResult", await (this.$refs && this.$refs[`saveModalForm`] && this.$refs[`saveModalForm`].validate && this.$refs[`saveModalForm`].validate())) || {}).valid) {
                    permissionCreated = this.$genInitFromSchema(
                        "app.dataSources.defaultDS.entities.LCAPPermission",
                        await this.$logics["app.dataSources.defaultDS.entities.LCAPPermission.logics.create"]({
                            config: {
                                download: false,
                            },
                            query: {},
                            headers: {
                                "lcap-calllogic-uuid": "368583e2d1804d13bc0fce6c6ddad355",
                            },

                            body: this.input,
                        })
                    );
                    if ((this.addResouces || {}).length > 0) {
                        var $forEachListVariable256 = this.addResouces;
                        var $forEachStartVariable256 = 0;
                        var $forEachEndVariable256 = (this.addResouces || {}).length;
                        if (Array.isArray($forEachListVariable256)) {
                            for (let index = $forEachStartVariable256; index < $forEachEndVariable256; index++) {
                                const item = $forEachListVariable256[index];
                                mapping.permissionId = (permissionCreated || {}).id;
                                mapping.resourceId = (item || {}).value;
                                this.$utils["Add"](mappingList, this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPPerResMapping", this.$utils["Clone"](mapping)));
                            }
                        }

                        this.$genInitFromSchema(
                            "nasl.collection.List<app.dataSources.defaultDS.entities.LCAPPerResMapping>",
                            await this.$logics["app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.batchCreate"]({
                                config: {
                                    download: false,
                                },
                                query: {},
                                headers: {
                                    "lcap-calllogic-uuid": "d1e4533839c04d4587b4856d490d4b7c",
                                },

                                body: mappingList,
                            })
                        );
                    } else {
                    }

                    await (this.$refs && this.$refs[`saveModal`] && this.$refs[`saveModal`].close && this.$refs[`saveModal`].close());
                    await (this.$refs && this.$refs[`tableView`] && this.$refs[`tableView`].reload && this.$refs[`tableView`].reload());
                    await this.$toast.show(this.$utils["ToString"]("nasl.core.String", `新增成功！`));
                } else {
                }

                return;
            })();
        },
        async uButton7_click(event) {
            await (async () => {
                await (this.$refs && this.$refs[`saveModal`] && this.$refs[`saveModal`].close && this.$refs[`saveModal`].close());
                this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPPermission", this.$utils["Clear"](this.input));
                return;
            })();
        },
        async button5_click(event) {
            await (async () => {
                await this.$logics["app.dataSources.defaultDS.entities.LCAPPermission.logics.delete"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "3775736c-4250-4fd2-b3e1-cdb84aa114c7",
                    },
                    query: {
                        id: (this.deletePermission || {}).id,
                    },
                    body: {},
                });
                await (this.$refs && this.$refs[`tableView`] && this.$refs[`tableView`].reload && this.$refs[`tableView`].reload());
                await (this.$refs && this.$refs[`deleteModal`] && this.$refs[`deleteModal`].close && this.$refs[`deleteModal`].close());
                await this.$toast.show(this.$utils["ToString"]("nasl.core.String", `删除成功！`));
                this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPPermission", this.$utils["Clear"](this.deletePermission));
                return;
            })();
        },
        async button6_click(event) {
            await (async () => {
                await (this.$refs && this.$refs[`deleteModal`] && this.$refs[`deleteModal`].close && this.$refs[`deleteModal`].close());
                return;
            })();
        },
        async button1_click(event) {
            await (async () => {
                await (this.$refs && this.$refs[`tableView`] && this.$refs[`tableView`].reload && this.$refs[`tableView`].reload());
                return;
            })();
        },
        async button_4_click(event) {
            await (async () => {
                this.isUpdate = false;
                this.input = this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPPermission", this.$utils["Clone"](this.lCAPPermission));
                this.$genInitFromSchema("nasl.collection.List<app.structures.LCAPPermissionAndResource>", this.$utils["Clear"](this.notAddResouces));
                this.$genInitFromSchema("nasl.collection.List<app.structures.LCAPPermissionAndResource>", this.$utils["Clear"](this.addResouces));
                this.notAddResouces = this.$genInitFromSchema(
                    "nasl.collection.List<app.structures.LCAPPermissionAndResource>",
                    await this.$logics["app.logics.LCAPGetPermissionResourseNotRelated"]({
                        config: {
                            download: false,
                        },
                        query: {},
                        headers: {
                            "lcap-calllogic-uuid": "d75b3d2592074925adf232982eb1611d",
                        },
                        path: {},
                        body: {
                            permissionId: undefined,
                        },
                    })
                );
                await (this.$refs && this.$refs[`saveModal`] && this.$refs[`saveModal`].open && this.$refs[`saveModal`].open());
                return;
            })();
        },
        async link1_click(event, current) {
            await (async () => {
                this.isUpdate = true;
                this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPPermission", this.$utils["Clear"](this.input));
                this.$utils["Clear"](this.updatePermissionName);
                this.$genInitFromSchema("nasl.collection.List<app.structures.LCAPPermissionAndResource>", this.$utils["Clear"](this.notAddResouces));
                this.$genInitFromSchema("nasl.collection.List<app.structures.LCAPPermissionAndResource>", this.$utils["Clear"](this.addResouces));
                this.input = this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPPermission", this.$utils["Clone"](((current || {}).item || {}).lACPPermission));
                this.updatePermissionName = this.$utils["Clone"]((((current || {}).item || {}).lACPPermission || {}).name);
                this.addResouces = this.$genInitFromSchema(
                    "nasl.collection.List<app.structures.LCAPPermissionAndResource>",
                    await this.$logics["app.logics.LCAPGetPermissionResourceRelated"]({
                        config: {
                            download: false,
                        },
                        query: {},
                        headers: {
                            "lcap-calllogic-uuid": "ce821417dc024e2e9e352263d13132bb",
                        },
                        path: {},
                        body: {
                            permissinId: (((current || {}).item || {}).lACPPermission || {}).id,
                        },
                    })
                );
                this.notAddResouces = this.$genInitFromSchema(
                    "nasl.collection.List<app.structures.LCAPPermissionAndResource>",
                    await this.$logics["app.logics.LCAPGetPermissionResourseNotRelated"]({
                        config: {
                            download: false,
                        },
                        query: {},
                        headers: {
                            "lcap-calllogic-uuid": "75b5a3c41a9f4b97955ea1e45bda344c",
                        },
                        path: {},
                        body: {
                            permissionId: (((current || {}).item || {}).lACPPermission || {}).id,
                        },
                    })
                );
                this.permissionOldIdList = this.$genInitFromSchema(
                    "nasl.collection.List<nasl.core.Long>",
                    await this.$utils["ListTransformAsync"](
                        this.$genInitFromSchema(
                            "nasl.collection.List<{lCAPPerResMapping: app.dataSources.defaultDS.entities.LCAPPerResMapping}>",
                            await this.$logics["app.logics.LCAPGetPerResMappingByPermissionId"]({
                                config: {
                                    download: false,
                                },
                                query: {},
                                headers: {
                                    "lcap-calllogic-uuid": "0a0cf1afd2954833a799173ac8d1674f",
                                },
                                path: {},
                                body: {
                                    permissionId: (((current || {}).item || {}).lACPPermission || {}).id,
                                },
                            })
                        ),
                        (item) => ((item || {}).lCAPPerResMapping || {}).id
                    )
                );
                await (this.$refs && this.$refs[`saveModal`] && this.$refs[`saveModal`].open && this.$refs[`saveModal`].open());
                return;
            })();
        },
        async link2_click(event, current) {
            await (async () => {
                this.deletePermission = ((current || {}).item || {}).lACPPermission;
                await (this.$refs && this.$refs[`deleteModal`] && this.$refs[`deleteModal`].open && this.$refs[`deleteModal`].open());
                return;
            })();
        },
    },
    async created() {
        await this.permissionManagement_created();
    },
};
</script>
