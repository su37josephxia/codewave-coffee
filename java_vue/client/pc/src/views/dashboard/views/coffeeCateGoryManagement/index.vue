<template>
    <u-linear-layout :ref="`uLinearLayout1`" :type="`root`" :gap="`none`" style="height: 100%; --custom-start: auto; min-height: 200px">
        <u-router-view :ref="`router_view1`"></u-router-view>
        <u-panel :ref="`panel_2`">
            <template #title :ref="`template_32`">
                <u-text :ref="`text_30`" :text="`咖啡类目管理`"></u-text>
            </template>
            <u-linear-layout :ref="`linear_layout_11`" :direction="`vertical`">
                <u-linear-layout :ref="`linear_layout_12`">
                    <u-form :ref="`form_1`" :layout="`inline`" key="form_1">
                        <u-form-item :ref="`form_item_6`" :layout="`center`" v-feAnnotation="`{\\'annotationName\\':\\'feAnnotation\\',\\'argsList\\':[true,true],\\'dataRefList\\':[{\\'typeNamespace\\':\\'app.dataSources.defaultDS.entities\\',\\'typeName\\':\\'CoffeeCategory\\',\\'propName\\':\\'cateGoryName\\'}]}`">
                            <template #label :ref="`template_33`">
                                <u-text :ref="`text_32`" :text="`类目名称`"></u-text>
                            </template>
                            <u-input :ref="`input_1`" :placeholder="`请输入类目名称`" :value.sync="filter.cateGoryName"></u-input>
                        </u-form-item>
                        <u-form-item :ref="`form_item_7`" :layout="`center`" v-feAnnotation="`{\\'annotationName\\':\\'feAnnotation\\',\\'argsList\\':[true,true],\\'dataRefList\\':[{\\'typeNamespace\\':\\'app.dataSources.defaultDS.entities\\',\\'typeName\\':\\'CoffeeCategory\\',\\'propName\\':\\'isDisplay\\'}]}`">
                            <template #label :ref="`template_34`">
                                <u-text :ref="`text_33`" :text="`是否显示`"></u-text>
                            </template>
                            <u-select :ref="`select_3`" clearable="" :placeholder="`请输入是否显示`" :value.sync="filter.isDisplay" key="select_3">
                                <u-select-item :ref="`select_item_5`" :value="true" :text="`是`">
                                    <u-text :ref="`text_34`" :text="`是`"></u-text>
                                </u-select-item>
                                <u-select-item :ref="`select_item_6`" :value="false" :text="`否`">
                                    <u-text :ref="`text_35`" :text="`否`"></u-text>
                                </u-select-item>
                            </u-select>
                        </u-form-item>
                        <u-form-item :ref="`form_item_8`" :layout="`center`" :labelSize="`auto`">
                            <u-button :ref="`button_6`" :color="`primary`" :text="`查 询`" @click="button_6_click($event)"></u-button>
                        </u-form-item>
                    </u-form>
                </u-linear-layout>
                <u-linear-layout :ref="`linear_layout_13`" :mode="`flex`" :alignment="`start`" :justify="`end`">
                    <u-button :ref="`button_7`" :color="`primary`" :text="`创 建`" @click="button_7_click($event)"></u-button>
                </u-linear-layout>
                <u-table-view :ref="`tableView_1`" :dataSource="$global.useDatabaseCallback()(__tableView_1_handleDataSourceLoad)" :dataSchema="`LoadCoffeeCateGoryManagementTableView_1Structure`" :valueField="`coffeeCategory.id`" :pagination="true" :showSizer="true" :pageSize="20" :pageNumber="1" key="tableView_1">
                    <u-table-view-column :ref="`table_view_column_1`" :type="`index`" :width="`60`">
                        <template #expander="current" :ref="`template_35`">
                            <u-table-view-expander :ref="`table_view_expander_1_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                        </template>
                        <template #cell="current" :ref="`template_36`"></template>
                        <template #title :ref="`template_37`">
                            <u-text :ref="`text_36`" :text="`序号`"></u-text>
                        </template>
                    </u-table-view-column>
                    <u-table-view-column :ref="`table_view_column_2`" :field="`coffeeCategory.createdTime`" v-feAnnotation="`{\\'annotationName\\':\\'feAnnotation\\',\\'argsList\\':[true,true],\\'dataRefList\\':[{\\'typeNamespace\\':\\'app.logics\\',\\'typeName\\':\\'loadCoffeeCateGoryManagementTableView_1\\',\\'propName\\':\\'coffeeCategory.createdTime\\'},{\\'typeNamespace\\':\\'app.dataSources.defaultDS.entities\\',\\'typeName\\':\\'CoffeeCategory\\',\\'propName\\':\\'createdTime\\'}]}`">
                        <template #expander="current" :ref="`template_38`">
                            <u-table-view-expander :ref="`table_view_expander_2_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                        </template>
                        <template #cell="current" :ref="`template_39`">
                            <u-linear-layout :ref="`linear_layout_14_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                <u-text :ref="`text_37_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.DateTime', (((current || {}).item || {}).coffeeCategory || {}).createdTime)"></u-text>
                            </u-linear-layout>
                        </template>
                        <template #title :ref="`template_40`">
                            <u-text :ref="`text_38`" :text="`创建时间`"></u-text>
                        </template>
                    </u-table-view-column>
                    <u-table-view-column :ref="`table_view_column_3`" :field="`coffeeCategory.updatedTime`" v-feAnnotation="`{\\'annotationName\\':\\'feAnnotation\\',\\'argsList\\':[true,true],\\'dataRefList\\':[{\\'typeNamespace\\':\\'app.logics\\',\\'typeName\\':\\'loadCoffeeCateGoryManagementTableView_1\\',\\'propName\\':\\'coffeeCategory.updatedTime\\'},{\\'typeNamespace\\':\\'app.dataSources.defaultDS.entities\\',\\'typeName\\':\\'CoffeeCategory\\',\\'propName\\':\\'updatedTime\\'}]}`">
                        <template #expander="current" :ref="`template_41`">
                            <u-table-view-expander :ref="`table_view_expander_3_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                        </template>
                        <template #cell="current" :ref="`template_42`">
                            <u-linear-layout :ref="`linear_layout_15_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                <u-text :ref="`text_39_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.DateTime', (((current || {}).item || {}).coffeeCategory || {}).updatedTime)"></u-text>
                            </u-linear-layout>
                        </template>
                        <template #title :ref="`template_43`">
                            <u-text :ref="`text_40`" :text="`更新时间`"></u-text>
                        </template>
                    </u-table-view-column>
                    <u-table-view-column :ref="`table_view_column_4`" :field="`coffeeCategory.cateGoryName`" v-feAnnotation="`{\\'annotationName\\':\\'feAnnotation\\',\\'argsList\\':[true,true],\\'dataRefList\\':[{\\'typeNamespace\\':\\'app.logics\\',\\'typeName\\':\\'loadCoffeeCateGoryManagementTableView_1\\',\\'propName\\':\\'coffeeCategory.cateGoryName\\'},{\\'typeNamespace\\':\\'app.dataSources.defaultDS.entities\\',\\'typeName\\':\\'CoffeeCategory\\',\\'propName\\':\\'cateGoryName\\'}]}`">
                        <template #expander="current" :ref="`template_44`">
                            <u-table-view-expander :ref="`table_view_expander_4_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                        </template>
                        <template #cell="current" :ref="`template_45`">
                            <u-linear-layout :ref="`linear_layout_16_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                <u-text :ref="`text_41_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).coffeeCategory || {}).cateGoryName)"></u-text>
                            </u-linear-layout>
                        </template>
                        <template #title :ref="`template_46`">
                            <u-text :ref="`text_42`" :text="`类目名称`"></u-text>
                        </template>
                    </u-table-view-column>
                    <u-table-view-column :ref="`table_view_column_5`" :field="`coffeeCategory.isDisplay`" v-feAnnotation="`{\\'annotationName\\':\\'feAnnotation\\',\\'argsList\\':[true,true],\\'dataRefList\\':[{\\'typeNamespace\\':\\'app.logics\\',\\'typeName\\':\\'loadCoffeeCateGoryManagementTableView_1\\',\\'propName\\':\\'coffeeCategory.isDisplay\\'},{\\'typeNamespace\\':\\'app.dataSources.defaultDS.entities\\',\\'typeName\\':\\'CoffeeCategory\\',\\'propName\\':\\'isDisplay\\'}]}`">
                        <template #expander="current" :ref="`template_47`">
                            <u-table-view-expander :ref="`table_view_expander_5_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                        </template>
                        <template #cell="current" :ref="`template_48`">
                            <u-linear-layout :ref="`linear_layout_17_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                <u-text :ref="`text_43_${(current || {}).__nodeKey || (current || {}).index}`" :key="`text_43_${(current || {}).__nodeKey || (current || {}).index}`" :text="`是`" v-if="(((current || {}).item || {}).coffeeCategory || {}).isDisplay"></u-text>
                                <u-text :ref="`text_44_${(current || {}).__nodeKey || (current || {}).index}`" :key="`text_44_${(current || {}).__nodeKey || (current || {}).index}`" :text="`否`" v-if="!(((current || {}).item || {}).coffeeCategory || {}).isDisplay"></u-text>
                            </u-linear-layout>
                        </template>
                        <template #title :ref="`template_49`">
                            <u-text :ref="`text_45`" :text="`是否显示`"></u-text>
                        </template>
                    </u-table-view-column>
                    <u-table-view-column :ref="`table_view_column_6`">
                        <template #expander="current" :ref="`template_50`">
                            <u-table-view-expander :ref="`table_view_expander_6_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                        </template>
                        <template #cell="current" :ref="`template_51`">
                            <u-linear-layout :ref="`linear_layout_18_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                <u-link :ref="`link_1_${(current || {}).__nodeKey || (current || {}).index}`" :text="`修改`" @click="link_1_click($event, current)"></u-link>
                                <u-link :ref="`link_2_${(current || {}).__nodeKey || (current || {}).index}`" :text="`删除`" @click="link_2_click($event, current)"></u-link>
                            </u-linear-layout>
                        </template>
                        <template #title :ref="`template_52`">
                            <u-text :ref="`text_46`" :text="`操作`"></u-text>
                        </template>
                    </u-table-view-column>
                </u-table-view>
            </u-linear-layout>
        </u-panel>
        <u-modal :ref="`saveModal_2`">
            <template #foot :ref="`template_53`">
                <u-linear-layout :ref="`linear_layout_19`">
                    <u-button :ref="`button_8`" :key="`button_8`" :color="`primary`" :text="`提交修改`" @click="button_8_click($event)" v-if="isUpdate"></u-button>
                    <u-button :ref="`button_9`" :key="`button_9`" :color="`primary`" :text="`立即创建`" @click="button_9_click($event)" v-if="!isUpdate"></u-button>
                </u-linear-layout>
            </template>
            <template #body :ref="`template_54`">
                <u-form :ref="`saveModalForm_2`" key="saveModalForm_2">
                    <u-form-item
                        :ref="`form_item_9`"
                        :required="true"
                        :rules="[
                            { validate: 'maxLength', args: [30], message: `不得超过${30}个字符`, trigger: 'input+blur' },
                            { validate: 'required', message: `表单项不得为空`, trigger: 'input+blur', required: true },
                        ]"
                        :layout="`center`"
                        v-feAnnotation="`{\\'annotationName\\':\\'feAnnotation\\',\\'argsList\\':[true,true],\\'dataRefList\\':[{\\'typeNamespace\\':\\'app.dataSources.defaultDS.entities\\',\\'typeName\\':\\'CoffeeCategory\\',\\'propName\\':\\'cateGoryName\\'}]}`"
                    >
                        <template #label :ref="`template_55`">
                            <u-text :ref="`text_47`" :text="`类目名称`"></u-text>
                        </template>
                        <u-input :ref="`input_2`" :placeholder="`请输入类目名称`" :value.sync="input.cateGoryName"></u-input>
                    </u-form-item>
                    <u-form-item :ref="`form_item_10`" :required="true" :rules="[{ validate: 'required', message: `表单项不得为空`, trigger: 'input+blur', required: true }]" :layout="`center`" v-feAnnotation="`{\\'annotationName\\':\\'feAnnotation\\',\\'argsList\\':[true,true],\\'dataRefList\\':[{\\'typeNamespace\\':\\'app.dataSources.defaultDS.entities\\',\\'typeName\\':\\'CoffeeCategory\\',\\'propName\\':\\'isDisplay\\'}]}`">
                        <template #label :ref="`template_56`">
                            <u-text :ref="`text_48`" :text="`是否显示`"></u-text>
                        </template>
                        <u-select :ref="`select_4`" :clearable="true" :placeholder="`请输入是否显示`" :value.sync="input.isDisplay" key="select_4">
                            <u-select-item :ref="`select_item_7`" :value="true" :text="`是`">
                                <u-text :ref="`text_49`" :text="`是`"></u-text>
                            </u-select-item>
                            <u-select-item :ref="`select_item_8`" :value="false" :text="`否`">
                                <u-text :ref="`text_50`" :text="`否`"></u-text>
                            </u-select-item>
                        </u-select>
                    </u-form-item>
                </u-form>
            </template>
            <template #title :ref="`template_57`">
                <div :ref="`div_3`" :key="`div_3`" v-if="isUpdate">
                    <u-text :ref="`text_51`" :text="`修改`"></u-text>
                </div>
                <div :ref="`div_4`" :key="`div_4`" v-if="!isUpdate">
                    <u-text :ref="`text_52`" :text="`创建`"></u-text>
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
            ["coffeeCategory"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.CoffeeCategory", undefined),
            ["input"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.CoffeeCategory", undefined),
            ["filter"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.CoffeeCategory", undefined),
            ["isUpdate"]: undefined,
        };
    },
    computed: {},
    meta: {
        title: "咖啡类别管理",
        crumb: undefined,
        crumbI18n: undefined,
        first: undefined,
        auth: undefined,
    },
    methods: {
        async coffeeCateGoryManagement_created(event) {
            await (async () => {
                this.$genInitFromSchema("app.dataSources.defaultDS.entities.CoffeeCategory", this.$utils["Clear"](this.filter));
                return;
            })();
        },
        async button_7_click(event) {
            await (async () => {
                this.isUpdate = false;
                this.input = this.$genInitFromSchema("app.dataSources.defaultDS.entities.CoffeeCategory", this.$utils["Clone"](this.coffeeCategory));
                await (this.$refs && this.$refs[`saveModal_2`] && this.$refs[`saveModal_2`].open && this.$refs[`saveModal_2`].open());
                return;
            })();
        },
        async button_8_click(event) {
            await (async () => {
                if ((this.$genInitFromSchema("nasl.ui.ValidateResult", await (this.$refs && this.$refs[`saveModalForm_2`] && this.$refs[`saveModalForm_2`].validate && this.$refs[`saveModalForm_2`].validate())) || {}).valid) {
                    this.$genInitFromSchema(
                        "app.dataSources.defaultDS.entities.CoffeeCategory",
                        await this.$logics["app.dataSources.defaultDS.entities.CoffeeCategory.logics.update"]({
                            config: {
                                download: false,
                            },
                            query: {},
                            headers: {
                                "lcap-calllogic-uuid": "091209a6f914425d9c83a57349c4d653",
                            },
                            body: {
                                entity: this.input,
                            },
                        })
                    );
                    await (this.$refs && this.$refs[`saveModal_2`] && this.$refs[`saveModal_2`].close && this.$refs[`saveModal_2`].close());
                    await (this.$refs && this.$refs[`tableView_1`] && this.$refs[`tableView_1`].reload && this.$refs[`tableView_1`].reload());
                } else {
                }

                return;
            })();
        },
        async button_9_click(event) {
            await (async () => {
                if ((this.$genInitFromSchema("nasl.ui.ValidateResult", await (this.$refs && this.$refs[`saveModalForm_2`] && this.$refs[`saveModalForm_2`].validate && this.$refs[`saveModalForm_2`].validate())) || {}).valid) {
                    this.$genInitFromSchema(
                        "app.dataSources.defaultDS.entities.CoffeeCategory",
                        await this.$logics["app.dataSources.defaultDS.entities.CoffeeCategory.logics.create"]({
                            config: {
                                download: false,
                            },
                            query: {},
                            headers: {
                                "lcap-calllogic-uuid": "80a194d461484e15b26f52ac3e9edb47",
                            },

                            body: this.input,
                        })
                    );
                    await (this.$refs && this.$refs[`saveModal_2`] && this.$refs[`saveModal_2`].close && this.$refs[`saveModal_2`].close());
                    await (this.$refs && this.$refs[`tableView_1`] && this.$refs[`tableView_1`].reload && this.$refs[`tableView_1`].reload());
                } else {
                }

                return;
            })();
        },
        async button_6_click(event) {
            await (async () => {
                await (this.$refs && this.$refs[`tableView_1`] && this.$refs[`tableView_1`].reload && this.$refs[`tableView_1`].reload());
                return;
            })();
        },
        async link_1_click(event, current) {
            await (async () => {
                this.isUpdate = true;
                this.input = this.$genInitFromSchema("app.dataSources.defaultDS.entities.CoffeeCategory", this.$utils["Clone"](((current || {}).item || {}).coffeeCategory));
                await (this.$refs && this.$refs[`saveModal_2`] && this.$refs[`saveModal_2`].open && this.$refs[`saveModal_2`].open());
                return;
            })();
        },
        async link_2_click(event, current) {
            await (async () => {
                await this.$logics["app.dataSources.defaultDS.entities.CoffeeCategory.logics.delete"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "3dab931f33634126ae9641cf57b8f561",
                    },
                    query: {
                        id: (((current || {}).item || {}).coffeeCategory || {}).id,
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
                "{list: nasl.collection.List<{coffeeCategory: app.dataSources.defaultDS.entities.CoffeeCategory}>, total: nasl.core.Long}",
                await this.$logics["app.logics.loadCoffeeCateGoryManagementTableView_1"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "5ef7aa752932458591ff95989c3145c1",
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
        await this.coffeeCateGoryManagement_created();
    },
};
</script>
