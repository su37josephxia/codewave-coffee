<template>
    <u-linear-layout :ref="`uLinearLayout1`" :type="`root`" :gap="`none`" style="height: 100%; --custom-start: auto; min-height: 200px">
        <u-router-view :ref="`router_view1`"></u-router-view>
        <u-panel :ref="`panel_1`">
            <template #title :ref="`template_1`">
                <u-text :ref="`text_1`" :text="`幻灯片管理`"></u-text>
            </template>
            <u-linear-layout :ref="`linear_layout_1`" :direction="`vertical`">
                <u-linear-layout :ref="`linear_layout_2`">
                    <u-form :ref="`form_1`" :layout="`inline`" key="form_1">
                        <u-form-item :ref="`form_item_1`" :layout="`center`" v-feAnnotation="`{\\'annotationName\\':\\'feAnnotation\\',\\'argsList\\':[true,true],\\'dataRefList\\':[{\\'typeNamespace\\':\\'app.dataSources.defaultDS.entities\\',\\'typeName\\':\\'Slide\\',\\'propName\\':\\'isDisplay\\'}]}`">
                            <template #label :ref="`template_2`">
                                <u-text :ref="`text_3`" :text="`是否显示`"></u-text>
                            </template>
                            <u-select :ref="`select_1`" clearable="" :placeholder="`请输入是否显示`" :value.sync="filter.isDisplay" key="select_1">
                                <u-select-item :ref="`select_item_1`" :value="true" :text="`是`">
                                    <u-text :ref="`text_4`" :text="`是`"></u-text>
                                </u-select-item>
                                <u-select-item :ref="`select_item_2`" :value="false" :text="`否`">
                                    <u-text :ref="`text_5`" :text="`否`"></u-text>
                                </u-select-item>
                            </u-select>
                        </u-form-item>
                        <u-form-item :ref="`form_item_2`" :layout="`center`" :labelSize="`auto`">
                            <u-button :ref="`button_1`" :color="`primary`" :text="`查 询`" @click="button_1_click($event)"></u-button>
                        </u-form-item>
                    </u-form>
                </u-linear-layout>
                <u-linear-layout :ref="`linear_layout_3`" :mode="`flex`" :alignment="`start`" :justify="`end`">
                    <u-button :ref="`button_2`" :color="`primary`" :text="`创 建`" @click="button_2_click($event)"></u-button>
                </u-linear-layout>
                <u-table-view :ref="`tableView_1`" :dataSource="$global.useDatabaseCallback()(__tableView_1_handleDataSourceLoad)" :dataSchema="`LoadSlideManagementTableView_1Structure`" :valueField="`slide.id`" :pagination="true" :showSizer="true" :pageSize="20" :pageNumber="1" key="tableView_1">
                    <u-table-view-column :ref="`table_view_column_1`" :type="`index`" :width="`60`">
                        <template #expander="current" :ref="`template_3`">
                            <u-table-view-expander :ref="`table_view_expander_1_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                        </template>
                        <template #cell="current" :ref="`template_4`"></template>
                        <template #title :ref="`template_5`">
                            <u-text :ref="`text_6`" :text="`序号`"></u-text>
                        </template>
                    </u-table-view-column>
                    <u-table-view-column :ref="`table_view_column_2`" :field="`slide.createdTime`" v-feAnnotation="`{\\'annotationName\\':\\'feAnnotation\\',\\'argsList\\':[true,true],\\'dataRefList\\':[{\\'typeNamespace\\':\\'app.logics\\',\\'typeName\\':\\'loadSlideManagementTableView_1\\',\\'propName\\':\\'slide.createdTime\\'},{\\'typeNamespace\\':\\'app.dataSources.defaultDS.entities\\',\\'typeName\\':\\'Slide\\',\\'propName\\':\\'createdTime\\'}]}`">
                        <template #expander="current" :ref="`template_6`">
                            <u-table-view-expander :ref="`table_view_expander_2_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                        </template>
                        <template #cell="current" :ref="`template_7`">
                            <u-linear-layout :ref="`linear_layout_4_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                <u-text :ref="`text_7_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.DateTime', (((current || {}).item || {}).slide || {}).createdTime)"></u-text>
                            </u-linear-layout>
                        </template>
                        <template #title :ref="`template_8`">
                            <u-text :ref="`text_8`" :text="`创建时间`"></u-text>
                        </template>
                    </u-table-view-column>
                    <u-table-view-column :ref="`table_view_column_3`" :field="`slide.updatedTime`" v-feAnnotation="`{\\'annotationName\\':\\'feAnnotation\\',\\'argsList\\':[true,true],\\'dataRefList\\':[{\\'typeNamespace\\':\\'app.logics\\',\\'typeName\\':\\'loadSlideManagementTableView_1\\',\\'propName\\':\\'slide.updatedTime\\'},{\\'typeNamespace\\':\\'app.dataSources.defaultDS.entities\\',\\'typeName\\':\\'Slide\\',\\'propName\\':\\'updatedTime\\'}]}`">
                        <template #expander="current" :ref="`template_9`">
                            <u-table-view-expander :ref="`table_view_expander_3_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                        </template>
                        <template #cell="current" :ref="`template_10`">
                            <u-linear-layout :ref="`linear_layout_5_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                <u-text :ref="`text_9_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.DateTime', (((current || {}).item || {}).slide || {}).updatedTime)"></u-text>
                            </u-linear-layout>
                        </template>
                        <template #title :ref="`template_11`">
                            <u-text :ref="`text_10`" :text="`更新时间`"></u-text>
                        </template>
                    </u-table-view-column>
                    <u-table-view-column :ref="`table_view_column_4`" :field="`slide.slideImage`" v-feAnnotation="`{\\'annotationName\\':\\'feAnnotation\\',\\'argsList\\':[true,true],\\'dataRefList\\':[{\\'typeNamespace\\':\\'app.logics\\',\\'typeName\\':\\'loadSlideManagementTableView_1\\',\\'propName\\':\\'slide.slideImage\\'},{\\'typeNamespace\\':\\'app.dataSources.defaultDS.entities\\',\\'typeName\\':\\'Slide\\',\\'propName\\':\\'slideImage\\'}]}`">
                        <template #expander="current" :ref="`template_12`">
                            <u-table-view-expander :ref="`table_view_expander_4_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                        </template>
                        <template #cell="current" :ref="`template_13`">
                            <u-linear-layout :ref="`linear_layout_6_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                <u-image :ref="`image_1_${(current || {}).__nodeKey || (current || {}).index}`" :src="(((current || {}).item || {}).slide || {}).slideImage" :fit="`contain`" style="width: 120px; height: 120px"></u-image>
                            </u-linear-layout>
                        </template>
                        <template #title :ref="`template_14`">
                            <u-text :ref="`text_12`" :text="`幻灯片图片`"></u-text>
                        </template>
                    </u-table-view-column>
                    <u-table-view-column :ref="`table_view_column_5`" :field="`slide.displayOrder`" v-feAnnotation="`{\\'annotationName\\':\\'feAnnotation\\',\\'argsList\\':[true,true],\\'dataRefList\\':[{\\'typeNamespace\\':\\'app.logics\\',\\'typeName\\':\\'loadSlideManagementTableView_1\\',\\'propName\\':\\'slide.displayOrder\\'},{\\'typeNamespace\\':\\'app.dataSources.defaultDS.entities\\',\\'typeName\\':\\'Slide\\',\\'propName\\':\\'displayOrder\\'}]}`">
                        <template #expander="current" :ref="`template_15`">
                            <u-table-view-expander :ref="`table_view_expander_5_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                        </template>
                        <template #cell="current" :ref="`template_16`">
                            <u-linear-layout :ref="`linear_layout_7_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                <u-text :ref="`text_13_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.Long', (((current || {}).item || {}).slide || {}).displayOrder)"></u-text>
                            </u-linear-layout>
                        </template>
                        <template #title :ref="`template_17`">
                            <u-text :ref="`text_14`" :text="`显示顺序`"></u-text>
                        </template>
                    </u-table-view-column>
                    <u-table-view-column :ref="`table_view_column_6`" :field="`slide.isDisplay`" v-feAnnotation="`{\\'annotationName\\':\\'feAnnotation\\',\\'argsList\\':[true,true],\\'dataRefList\\':[{\\'typeNamespace\\':\\'app.logics\\',\\'typeName\\':\\'loadSlideManagementTableView_1\\',\\'propName\\':\\'slide.isDisplay\\'},{\\'typeNamespace\\':\\'app.dataSources.defaultDS.entities\\',\\'typeName\\':\\'Slide\\',\\'propName\\':\\'isDisplay\\'}]}`">
                        <template #expander="current" :ref="`template_18`">
                            <u-table-view-expander :ref="`table_view_expander_6_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                        </template>
                        <template #cell="current" :ref="`template_19`">
                            <u-linear-layout :ref="`linear_layout_8_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                <u-text :ref="`text_15_${(current || {}).__nodeKey || (current || {}).index}`" :key="`text_15_${(current || {}).__nodeKey || (current || {}).index}`" :text="`是`" v-if="(((current || {}).item || {}).slide || {}).isDisplay"></u-text>
                                <u-text :ref="`text_16_${(current || {}).__nodeKey || (current || {}).index}`" :key="`text_16_${(current || {}).__nodeKey || (current || {}).index}`" :text="`否`" v-if="!(((current || {}).item || {}).slide || {}).isDisplay"></u-text>
                            </u-linear-layout>
                        </template>
                        <template #title :ref="`template_20`">
                            <u-text :ref="`text_17`" :text="`是否显示`"></u-text>
                        </template>
                    </u-table-view-column>
                    <u-table-view-column :ref="`table_view_column_7`">
                        <template #expander="current" :ref="`template_21`">
                            <u-table-view-expander :ref="`table_view_expander_7_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                        </template>
                        <template #cell="current" :ref="`template_22`">
                            <u-linear-layout :ref="`linear_layout_9_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                <u-link :ref="`link_1_${(current || {}).__nodeKey || (current || {}).index}`" :text="`修改`" @click="link_1_click($event, current)"></u-link>
                                <u-link :ref="`link_2_${(current || {}).__nodeKey || (current || {}).index}`" :text="`删除`" @click="link_2_click($event, current)"></u-link>
                            </u-linear-layout>
                        </template>
                        <template #title :ref="`template_23`">
                            <u-text :ref="`text_18`" :text="`操作`"></u-text>
                        </template>
                    </u-table-view-column>
                </u-table-view>
            </u-linear-layout>
        </u-panel>
        <u-modal :ref="`saveModal_1`">
            <template #foot :ref="`template_24`">
                <u-linear-layout :ref="`linear_layout_10`">
                    <u-button :ref="`button_3`" :key="`button_3`" :color="`primary`" :text="`提交修改`" @click="button_3_click($event)" v-if="isUpdate"></u-button>
                    <u-button :ref="`button_4`" :key="`button_4`" :color="`primary`" :text="`立即创建`" @click="button_4_click($event)" v-if="!isUpdate"></u-button>
                </u-linear-layout>
            </template>
            <template #body :ref="`template_25`">
                <u-form :ref="`saveModalForm_1`" key="saveModalForm_1">
                    <u-form-item
                        :ref="`form_item_3`"
                        :required="true"
                        :rules="[
                            { validate: 'maxLength', args: [4000], message: `不得超过${4000}个字符`, trigger: 'input+blur' },
                            { validate: 'required', message: `表单项不得为空`, trigger: 'input+blur', required: true },
                        ]"
                        :layout="`center`"
                        v-feAnnotation="`{\\'annotationName\\':\\'feAnnotation\\',\\'argsList\\':[true,true],\\'dataRefList\\':[{\\'typeNamespace\\':\\'app.dataSources.defaultDS.entities\\',\\'typeName\\':\\'Slide\\',\\'propName\\':\\'slideImage\\'}]}`"
                    >
                        <template #label :ref="`template_26`">
                            <u-text :ref="`text_19`" :text="`幻灯片图片`"></u-text>
                        </template>
                        <u-uploader :ref="`uploader_2`" :listType="`card`" :accept="`.png,.jpg,.jpeg,.gif,.bmp`" :url="`/upload`" :urlField="`filePath`" :limit="999" :maxSize="`50MB`" :converter="`simple`" :value.sync="input.slideImage">
                            <template #file-list :ref="`template_31`">
                                <i-ico :ref="`ico_3`" :flag="`file-icon`" :name="`file-default`" :icotype="`only`" style="margin: 0px 8px 0px 0px"></i-ico>
                                <u-text :ref="`text_28`" :flag="`file-name`" :text="`文件名称`" style="margin: 0px 8px 0px 0px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; display: inherit"></u-text>
                                <u-text :ref="`text_29`" :flag="`file-size`" :text="`文件大小`" style="margin: 0px 8px 0px 0px"></u-text>
                                <i-ico :ref="`ico_4`" :flag="`download-icon`" :name="`download`" :icotype="`only`" style="margin: 0px 8px 0px 0px"></i-ico>
                            </template>
                        </u-uploader>
                    </u-form-item>
                    <u-form-item :ref="`form_item_4`" :required="true" :rules="[{ validate: 'required', message: `表单项不得为空`, trigger: 'input+blur', required: true }]" :layout="`center`" v-feAnnotation="`{\\'annotationName\\':\\'feAnnotation\\',\\'argsList\\':[true,true],\\'dataRefList\\':[{\\'typeNamespace\\':\\'app.dataSources.defaultDS.entities\\',\\'typeName\\':\\'Slide\\',\\'propName\\':\\'displayOrder\\'}]}`">
                        <template #label :ref="`template_27`">
                            <u-text :ref="`text_20`" :text="`显示顺序`"></u-text>
                        </template>
                        <u-number-input :ref="`number_input_1`" :placeholder="`请输入显示顺序`" :value.sync="input.displayOrder"></u-number-input>
                    </u-form-item>
                    <u-form-item :ref="`form_item_5`" :required="true" :rules="[{ validate: 'required', message: `表单项不得为空`, trigger: 'input+blur', required: true }]" :layout="`center`" v-feAnnotation="`{\\'annotationName\\':\\'feAnnotation\\',\\'argsList\\':[true,true],\\'dataRefList\\':[{\\'typeNamespace\\':\\'app.dataSources.defaultDS.entities\\',\\'typeName\\':\\'Slide\\',\\'propName\\':\\'isDisplay\\'}]}`">
                        <template #label :ref="`template_28`">
                            <u-text :ref="`text_21`" :text="`是否显示`"></u-text>
                        </template>
                        <u-select :ref="`select_2`" :clearable="true" :placeholder="`请输入是否显示`" :value.sync="input.isDisplay" key="select_2">
                            <u-select-item :ref="`select_item_3`" :value="true" :text="`是`">
                                <u-text :ref="`text_22`" :text="`是`"></u-text>
                            </u-select-item>
                            <u-select-item :ref="`select_item_4`" :value="false" :text="`否`">
                                <u-text :ref="`text_23`" :text="`否`"></u-text>
                            </u-select-item>
                        </u-select>
                    </u-form-item>
                </u-form>
            </template>
            <template #title :ref="`template_29`">
                <div :ref="`div_1`" :key="`div_1`" v-if="isUpdate">
                    <u-text :ref="`text_24`" :text="`修改`"></u-text>
                </div>
                <div :ref="`div_2`" :key="`div_2`" v-if="!isUpdate">
                    <u-text :ref="`text_25`" :text="`创建`"></u-text>
                </div>
            </template>
        </u-modal>
    </u-linear-layout>
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
            ["slide"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.Slide", undefined),
            ["input"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.Slide", undefined),
            ["filter"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.Slide", undefined),
            ["isUpdate"]: undefined,
        };
    },
    computed: {},
    meta: {
        title: "幻灯片管理",
        crumb: undefined,
        crumbI18n: undefined,
        first: undefined,
        auth: undefined,
    },
    methods: {
        async slideManagement_created(event) {
            await (async () => {
                this.$genInitFromSchema("app.dataSources.defaultDS.entities.Slide", this.$utils["Clear"](this.filter));
                return;
            })();
        },
        async button_2_click(event) {
            await (async () => {
                this.isUpdate = false;
                this.input = this.$genInitFromSchema("app.dataSources.defaultDS.entities.Slide", this.$utils["Clone"](this.slide));
                await (this.$refs && this.$refs[`saveModal_1`] && this.$refs[`saveModal_1`].open && this.$refs[`saveModal_1`].open());
                return;
            })();
        },
        async button_3_click(event) {
            await (async () => {
                if ((this.$genInitFromSchema("nasl.ui.ValidateResult", await (this.$refs && this.$refs[`saveModalForm_1`] && this.$refs[`saveModalForm_1`].validate && this.$refs[`saveModalForm_1`].validate())) || {}).valid) {
                    this.$genInitFromSchema(
                        "app.dataSources.defaultDS.entities.Slide",
                        await this.$logics["app.dataSources.defaultDS.entities.Slide.logics.update"]({
                            config: {
                                download: false,
                            },
                            query: {},
                            headers: {
                                "lcap-calllogic-uuid": "787cd59f5faa4f46881d7f4ce17e17a9",
                            },
                            body: {
                                entity: this.input,
                            },
                        })
                    );
                    await (this.$refs && this.$refs[`saveModal_1`] && this.$refs[`saveModal_1`].close && this.$refs[`saveModal_1`].close());
                    await (this.$refs && this.$refs[`tableView_1`] && this.$refs[`tableView_1`].reload && this.$refs[`tableView_1`].reload());
                } else {
                }

                return;
            })();
        },
        async button_4_click(event) {
            await (async () => {
                if ((this.$genInitFromSchema("nasl.ui.ValidateResult", await (this.$refs && this.$refs[`saveModalForm_1`] && this.$refs[`saveModalForm_1`].validate && this.$refs[`saveModalForm_1`].validate())) || {}).valid) {
                    this.$genInitFromSchema(
                        "app.dataSources.defaultDS.entities.Slide",
                        await this.$logics["app.dataSources.defaultDS.entities.Slide.logics.create"]({
                            config: {
                                download: false,
                            },
                            query: {},
                            headers: {
                                "lcap-calllogic-uuid": "e1deaeebe1464a3ba1f94613404e1206",
                            },

                            body: this.input,
                        })
                    );
                    await (this.$refs && this.$refs[`saveModal_1`] && this.$refs[`saveModal_1`].close && this.$refs[`saveModal_1`].close());
                    await (this.$refs && this.$refs[`tableView_1`] && this.$refs[`tableView_1`].reload && this.$refs[`tableView_1`].reload());
                } else {
                }

                return;
            })();
        },
        async button_1_click(event) {
            await (async () => {
                await (this.$refs && this.$refs[`tableView_1`] && this.$refs[`tableView_1`].reload && this.$refs[`tableView_1`].reload());
                return;
            })();
        },
        async link_1_click(event, current) {
            await (async () => {
                this.isUpdate = true;
                this.input = this.$genInitFromSchema("app.dataSources.defaultDS.entities.Slide", this.$utils["Clone"](((current || {}).item || {}).slide));
                await (this.$refs && this.$refs[`saveModal_1`] && this.$refs[`saveModal_1`].open && this.$refs[`saveModal_1`].open());
                return;
            })();
        },
        async link_2_click(event, current) {
            await (async () => {
                await this.$logics["app.dataSources.defaultDS.entities.Slide.logics.delete"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "0b05170c54d04b5aa4b22f44829d34bc",
                    },
                    query: {
                        id: (((current || {}).item || {}).slide || {}).id,
                    },
                    body: {},
                });
                await (this.$refs && this.$refs[`tableView_1`] && this.$refs[`tableView_1`].reload && this.$refs[`tableView_1`].reload());
                return;
            })();
        },
        async __tableView_1_handleDataSourceLoad(params) {
            this["__tableView_1_params"] = { ...params };
            return this.$genInitFromSchema(
                "{list: nasl.collection.List<{slide: app.dataSources.defaultDS.entities.Slide}>, total: nasl.core.Long}",
                await this.$logics["app.logics.loadSlideManagementTableView_1"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "d4b9f833be554de88ee1e343ef77ddb1",
                    },
                    path: {},
                    body: {
                        page: this.__tableView_1_params && this.__tableView_1_params.page,
                        size: this.__tableView_1_params && this.__tableView_1_params.size,
                        sort: this.__tableView_1_params && this.__tableView_1_params.sort,
                        order: this.__tableView_1_params && this.__tableView_1_params.order,
                        filter: this.filter,
                    },
                })
            );
        },
    },
    async created() {
        await this.slideManagement_created();
    },
};
</script>
