<template>
    <u-linear-layout :ref="`uLinearLayout1`" :type="`root`" :gap="`none`" style="height: 100%; --custom-start: auto; min-height: 200px">
        <u-router-view :ref="`router_view1`"></u-router-view>
        <u-panel :ref="`panel_4`">
            <template #title :ref="`template_100`">
                <u-text :ref="`text_91`" :text="`订单管理`"></u-text>
            </template>
            <u-linear-layout :ref="`linear_layout_32`" :direction="`vertical`">
                <u-linear-layout :ref="`linear_layout_33`">
                    <u-form :ref="`form_1`" :layout="`inline`" key="form_1">
                        <u-form-item :ref="`form_item_21`" :layout="`center`" v-feAnnotation="`{\\'annotationName\\':\\'feAnnotation\\',\\'argsList\\':[true,true],\\'dataRefList\\':[{\\'typeNamespace\\':\\'app.dataSources.defaultDS.entities\\',\\'typeName\\':\\'OrderEntity\\',\\'propName\\':\\'orderStatus\\'}]}`">
                            <template #label :ref="`template_101`">
                                <u-text :ref="`text_93`" :text="`订单状态`"></u-text>
                            </template>
                            <u-select :ref="`select_10`" :clearable="true" :placeholder="`请选择订单状态`" :dataSource="$utils['EnumToList']({ concept: 'TypeAnnotation', typeKind: 'reference', typeNamespace: 'app.enums', typeName: 'OrderStatusEnum' })" :pageSize="50" :value.sync="filter.orderStatus" key="select_10"></u-select>
                        </u-form-item>
                        <u-form-item :ref="`form_item_22`" :layout="`center`" v-feAnnotation="`{\\'annotationName\\':\\'feAnnotation\\',\\'argsList\\':[true,true],\\'dataRefList\\':[{\\'typeNamespace\\':\\'app.dataSources.defaultDS.entities\\',\\'typeName\\':\\'OrderEntity\\',\\'propName\\':\\'consigneeName\\'}]}`">
                            <template #label :ref="`template_102`">
                                <u-text :ref="`text_94`" :text="`收货人姓名`"></u-text>
                            </template>
                            <u-input :ref="`input_6`" :placeholder="`请输入收货人姓名`" :value.sync="filter.consigneeName"></u-input>
                        </u-form-item>
                        <u-form-item :ref="`form_item_23`" :layout="`center`" v-feAnnotation="`{\\'annotationName\\':\\'feAnnotation\\',\\'argsList\\':[true,true],\\'dataRefList\\':[{\\'typeNamespace\\':\\'app.dataSources.defaultDS.entities\\',\\'typeName\\':\\'OrderEntity\\',\\'propName\\':\\'pickupMethod\\'}]}`">
                            <template #label :ref="`template_103`">
                                <u-text :ref="`text_95`" :text="`取货方式`"></u-text>
                            </template>
                            <u-select :ref="`select_11`" :clearable="true" :placeholder="`请选择取货方式`" :dataSource="$utils['EnumToList']({ concept: 'TypeAnnotation', typeKind: 'reference', typeNamespace: 'app.enums', typeName: 'PickupMethodEnum' })" :pageSize="50" :value.sync="filter.pickupMethod" key="select_11"></u-select>
                        </u-form-item>
                        <u-form-item :ref="`form_item_24`" :layout="`center`" :labelSize="`auto`">
                            <u-button :ref="`button_15`" :color="`primary`" :text="`查 询`" @click="button_15_click($event)"></u-button>
                        </u-form-item>
                    </u-form>
                </u-linear-layout>
                <u-linear-layout :ref="`linear_layout_34`" :mode="`flex`" :alignment="`start`" :justify="`end`">
                    <u-button :ref="`button_16`" :color="`primary`" :text="`创 建`" @click="button_16_click($event)"></u-button>
                </u-linear-layout>
                <u-table-view :ref="`tableView_1`" :dataSource="$global.useDatabaseCallback()(__tableView_1_handleDataSourceLoad)" :dataSchema="`LoadOrderManagementTableView_1Structure`" :valueField="`orderEntity.id`" :pagination="true" :showSizer="true" :pageSize="20" :pageNumber="1" key="tableView_1">
                    <u-table-view-column :ref="`table_view_column_1`" :type="`index`" :width="`60`">
                        <template #expander="current" :ref="`template_104`">
                            <u-table-view-expander :ref="`table_view_expander_1_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                        </template>
                        <template #cell="current" :ref="`template_105`"></template>
                        <template #title :ref="`template_106`">
                            <u-text :ref="`text_96`" :text="`序号`"></u-text>
                        </template>
                    </u-table-view-column>
                    <u-table-view-column :ref="`table_view_column_2`" :field="`orderEntity.createdTime`" v-feAnnotation="`{\\'annotationName\\':\\'feAnnotation\\',\\'argsList\\':[true,true],\\'dataRefList\\':[{\\'typeNamespace\\':\\'app.logics\\',\\'typeName\\':\\'loadOrderManagementTableView_1\\',\\'propName\\':\\'orderEntity.createdTime\\'},{\\'typeNamespace\\':\\'app.dataSources.defaultDS.entities\\',\\'typeName\\':\\'OrderEntity\\',\\'propName\\':\\'createdTime\\'}]}`">
                        <template #expander="current" :ref="`template_107`">
                            <u-table-view-expander :ref="`table_view_expander_2_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                        </template>
                        <template #cell="current" :ref="`template_108`">
                            <u-linear-layout :ref="`linear_layout_35_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                <u-text :ref="`text_97_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.DateTime', (((current || {}).item || {}).orderEntity || {}).createdTime)"></u-text>
                            </u-linear-layout>
                        </template>
                        <template #title :ref="`template_109`">
                            <u-text :ref="`text_98`" :text="`创建时间`"></u-text>
                        </template>
                    </u-table-view-column>
                    <u-table-view-column :ref="`table_view_column_3`" :field="`orderEntity.totalAmount`" v-feAnnotation="`{\\'annotationName\\':\\'feAnnotation\\',\\'argsList\\':[true,true],\\'dataRefList\\':[{\\'typeNamespace\\':\\'app.logics\\',\\'typeName\\':\\'loadOrderManagementTableView_1\\',\\'propName\\':\\'orderEntity.totalAmount\\'},{\\'typeNamespace\\':\\'app.dataSources.defaultDS.entities\\',\\'typeName\\':\\'OrderEntity\\',\\'propName\\':\\'totalAmount\\'}]}`">
                        <template #expander="current" :ref="`template_110`">
                            <u-table-view-expander :ref="`table_view_expander_3_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                        </template>
                        <template #cell="current" :ref="`template_111`">
                            <u-linear-layout :ref="`linear_layout_36_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                <u-text :ref="`text_99_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.Decimal', (((current || {}).item || {}).orderEntity || {}).totalAmount)"></u-text>
                            </u-linear-layout>
                        </template>
                        <template #title :ref="`template_112`">
                            <u-text :ref="`text_100`" :text="`订单总金额`"></u-text>
                        </template>
                    </u-table-view-column>
                    <u-table-view-column :ref="`table_view_column_4`" :field="`orderEntity.coffeeCount`" v-feAnnotation="`{\\'annotationName\\':\\'feAnnotation\\',\\'argsList\\':[true,true],\\'dataRefList\\':[{\\'typeNamespace\\':\\'app.logics\\',\\'typeName\\':\\'loadOrderManagementTableView_1\\',\\'propName\\':\\'orderEntity.coffeeCount\\'},{\\'typeNamespace\\':\\'app.dataSources.defaultDS.entities\\',\\'typeName\\':\\'OrderEntity\\',\\'propName\\':\\'coffeeCount\\'}]}`">
                        <template #expander="current" :ref="`template_113`">
                            <u-table-view-expander :ref="`table_view_expander_4_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                        </template>
                        <template #cell="current" :ref="`template_114`">
                            <u-linear-layout :ref="`linear_layout_37_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                <u-text :ref="`text_101_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.Long', (((current || {}).item || {}).orderEntity || {}).coffeeCount)"></u-text>
                            </u-linear-layout>
                        </template>
                        <template #title :ref="`template_115`">
                            <u-text :ref="`text_102`" :text="`咖啡总数量`"></u-text>
                        </template>
                    </u-table-view-column>
                    <u-table-view-column :ref="`table_view_column_5`" :field="`orderEntity.orderStatus`" v-feAnnotation="`{\\'annotationName\\':\\'feAnnotation\\',\\'argsList\\':[true,true],\\'dataRefList\\':[{\\'typeNamespace\\':\\'app.logics\\',\\'typeName\\':\\'loadOrderManagementTableView_1\\',\\'propName\\':\\'orderEntity.orderStatus\\'},{\\'typeNamespace\\':\\'app.dataSources.defaultDS.entities\\',\\'typeName\\':\\'OrderEntity\\',\\'propName\\':\\'orderStatus\\'}]}`">
                        <template #expander="current" :ref="`template_116`">
                            <u-table-view-expander :ref="`table_view_expander_5_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                        </template>
                        <template #cell="current" :ref="`template_117`">
                            <u-linear-layout :ref="`linear_layout_38_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                <u-text :ref="`text_103_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('app.enums.OrderStatusEnum', (((current || {}).item || {}).orderEntity || {}).orderStatus)"></u-text>
                            </u-linear-layout>
                        </template>
                        <template #title :ref="`template_118`">
                            <u-text :ref="`text_104`" :text="`订单状态`"></u-text>
                        </template>
                    </u-table-view-column>
                    <u-table-view-column :ref="`table_view_column_6`" :field="`orderEntity.pickupMethod`" v-feAnnotation="`{\\'annotationName\\':\\'feAnnotation\\',\\'argsList\\':[true,true],\\'dataRefList\\':[{\\'typeNamespace\\':\\'app.logics\\',\\'typeName\\':\\'loadOrderManagementTableView_1\\',\\'propName\\':\\'orderEntity.pickupMethod\\'},{\\'typeNamespace\\':\\'app.dataSources.defaultDS.entities\\',\\'typeName\\':\\'OrderEntity\\',\\'propName\\':\\'pickupMethod\\'}]}`">
                        <template #expander="current" :ref="`template_119`">
                            <u-table-view-expander :ref="`table_view_expander_6_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                        </template>
                        <template #cell="current" :ref="`template_120`">
                            <u-linear-layout :ref="`linear_layout_39_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                <u-text :ref="`text_105_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('app.enums.PickupMethodEnum', (((current || {}).item || {}).orderEntity || {}).pickupMethod)"></u-text>
                            </u-linear-layout>
                        </template>
                        <template #title :ref="`template_121`">
                            <u-text :ref="`text_106`" :text="`取货方式`"></u-text>
                        </template>
                    </u-table-view-column>
                    <u-table-view-column :ref="`table_view_column_7`">
                        <template #expander="current" :ref="`template_122`">
                            <u-table-view-expander :ref="`table_view_expander_7_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                        </template>
                        <template #cell="current" :ref="`template_123`">
                            <u-linear-layout :ref="`linear_layout_40_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                <u-link :ref="`link_1_${(current || {}).__nodeKey || (current || {}).index}`" :text="`修改`" @click="link_1_click($event, current)"></u-link>
                                <u-link :ref="`link_2_${(current || {}).__nodeKey || (current || {}).index}`" :text="`删除`" @click="link_2_click($event, current)"></u-link>
                            </u-linear-layout>
                        </template>
                        <template #title :ref="`template_124`">
                            <u-text :ref="`text_107`" :text="`操作`"></u-text>
                        </template>
                    </u-table-view-column>
                </u-table-view>
            </u-linear-layout>
        </u-panel>
        <u-modal :ref="`saveModal_4`">
            <template #foot :ref="`template_125`">
                <u-linear-layout :ref="`linear_layout_41`">
                    <u-button :ref="`button_17`" :key="`button_17`" :color="`primary`" :text="`提交修改`" @click="button_17_click($event)" v-if="isUpdate"></u-button>
                    <u-button :ref="`button_18`" :key="`button_18`" :color="`primary`" :text="`立即创建`" @click="button_18_click($event)" v-if="!isUpdate"></u-button>
                </u-linear-layout>
            </template>
            <template #body :ref="`template_126`">
                <u-form :ref="`saveModalForm_4`" key="saveModalForm_4">
                    <u-form-item :ref="`form_item_25`" :required="true" :rules="[{ validate: 'required', message: `表单项不得为空`, trigger: 'input+blur', required: true }]" :layout="`center`" v-feAnnotation="`{\\'annotationName\\':\\'feAnnotation\\',\\'argsList\\':[true,true],\\'dataRefList\\':[{\\'typeNamespace\\':\\'app.dataSources.defaultDS.entities\\',\\'typeName\\':\\'OrderEntity\\',\\'propName\\':\\'consigneeName\\'}]}`">
                        <template #label :ref="`template_127`">
                            <u-text :ref="`text_108`" :text="`收货人姓名`"></u-text>
                        </template>
                        <u-input :ref="`input_7`" :placeholder="`请输入收货人姓名`" :value.sync="input.consigneeName"></u-input>
                    </u-form-item>
                    <u-form-item :ref="`form_item_26`" :required="true" :rules="[{ validate: 'required', message: `表单项不得为空`, trigger: 'input+blur', required: true }]" :layout="`center`" v-feAnnotation="`{\\'annotationName\\':\\'feAnnotation\\',\\'argsList\\':[true,true],\\'dataRefList\\':[{\\'typeNamespace\\':\\'app.dataSources.defaultDS.entities\\',\\'typeName\\':\\'OrderEntity\\',\\'propName\\':\\'consigneePhone\\'}]}`">
                        <template #label :ref="`template_128`">
                            <u-text :ref="`text_109`" :text="`收货人电话`"></u-text>
                        </template>
                        <u-input :ref="`input_8`" :placeholder="`请输入收货人电话`" :value.sync="input.consigneePhone"></u-input>
                    </u-form-item>
                    <u-form-item :ref="`form_item_27`" :required="true" :rules="[{ validate: 'required', message: `表单项不得为空`, trigger: 'input+blur', required: true }]" :layout="`center`" v-feAnnotation="`{\\'annotationName\\':\\'feAnnotation\\',\\'argsList\\':[true,true],\\'dataRefList\\':[{\\'typeNamespace\\':\\'app.dataSources.defaultDS.entities\\',\\'typeName\\':\\'OrderEntity\\',\\'propName\\':\\'consigneeArea\\'}]}`">
                        <template #label :ref="`template_129`">
                            <u-text :ref="`text_110`" :text="`收货人地区`"></u-text>
                        </template>
                        <u-input :ref="`input_9`" :placeholder="`请输入收货人地区`" :value.sync="input.consigneeArea"></u-input>
                    </u-form-item>
                    <u-form-item :ref="`form_item_28`" :required="true" :rules="[{ validate: 'required', message: `表单项不得为空`, trigger: 'input+blur', required: true }]" :layout="`center`" v-feAnnotation="`{\\'annotationName\\':\\'feAnnotation\\',\\'argsList\\':[true,true],\\'dataRefList\\':[{\\'typeNamespace\\':\\'app.dataSources.defaultDS.entities\\',\\'typeName\\':\\'OrderEntity\\',\\'propName\\':\\'consigneeAddress\\'}]}`">
                        <template #label :ref="`template_130`">
                            <u-text :ref="`text_111`" :text="`收货人详细地址`"></u-text>
                        </template>
                        <u-input :ref="`input_10`" :placeholder="`请输入收货人详细地址`" :value.sync="input.consigneeAddress"></u-input>
                    </u-form-item>
                </u-form>
            </template>
            <template #title :ref="`template_131`">
                <div :ref="`div_7`" :key="`div_7`" v-if="isUpdate">
                    <u-text :ref="`text_112`" :text="`修改`"></u-text>
                </div>
                <div :ref="`div_8`" :key="`div_8`" v-if="!isUpdate">
                    <u-text :ref="`text_113`" :text="`创建`"></u-text>
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
            ["orderEntity"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.OrderEntity", undefined),
            ["input"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.OrderEntity", undefined),
            ["filter"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.OrderEntity", undefined),
            ["isUpdate"]: undefined,
        };
    },
    computed: {},
    meta: {
        title: "订单管理",
        crumb: undefined,
        crumbI18n: undefined,
        first: undefined,
        auth: undefined,
    },
    methods: {
        async orderManagement_created(event) {
            await (async () => {
                this.$genInitFromSchema("app.dataSources.defaultDS.entities.OrderEntity", this.$utils["Clear"](this.filter));
                return;
            })();
        },
        async button_16_click(event) {
            await (async () => {
                this.isUpdate = false;
                this.input = this.$genInitFromSchema("app.dataSources.defaultDS.entities.OrderEntity", this.$utils["Clone"](this.orderEntity));
                await (this.$refs && this.$refs[`saveModal_4`] && this.$refs[`saveModal_4`].open && this.$refs[`saveModal_4`].open());
                return;
            })();
        },
        async button_17_click(event) {
            await (async () => {
                if ((this.$genInitFromSchema("nasl.ui.ValidateResult", await (this.$refs && this.$refs[`saveModalForm_4`] && this.$refs[`saveModalForm_4`].validate && this.$refs[`saveModalForm_4`].validate())) || {}).valid) {
                    this.$genInitFromSchema(
                        "app.dataSources.defaultDS.entities.OrderEntity",
                        await this.$logics["app.dataSources.defaultDS.entities.OrderEntity.logics.update"]({
                            config: {
                                download: false,
                            },
                            query: {},
                            headers: {
                                "lcap-calllogic-uuid": "648926b6e7f3424f8b19d0d68c0e9365",
                            },
                            body: {
                                entity: this.input,
                            },
                        })
                    );
                    await (this.$refs && this.$refs[`saveModal_4`] && this.$refs[`saveModal_4`].close && this.$refs[`saveModal_4`].close());
                    await (this.$refs && this.$refs[`tableView_1`] && this.$refs[`tableView_1`].reload && this.$refs[`tableView_1`].reload());
                } else {
                }

                return;
            })();
        },
        async button_18_click(event) {
            await (async () => {
                if ((this.$genInitFromSchema("nasl.ui.ValidateResult", await (this.$refs && this.$refs[`saveModalForm_4`] && this.$refs[`saveModalForm_4`].validate && this.$refs[`saveModalForm_4`].validate())) || {}).valid) {
                    this.$genInitFromSchema(
                        "app.dataSources.defaultDS.entities.OrderEntity",
                        await this.$logics["app.dataSources.defaultDS.entities.OrderEntity.logics.create"]({
                            config: {
                                download: false,
                            },
                            query: {},
                            headers: {
                                "lcap-calllogic-uuid": "b620380ff7d04e45bd7d90cc33020111",
                            },

                            body: this.input,
                        })
                    );
                    await (this.$refs && this.$refs[`saveModal_4`] && this.$refs[`saveModal_4`].close && this.$refs[`saveModal_4`].close());
                    await (this.$refs && this.$refs[`tableView_1`] && this.$refs[`tableView_1`].reload && this.$refs[`tableView_1`].reload());
                } else {
                }

                return;
            })();
        },
        async button_15_click(event) {
            await (async () => {
                await (this.$refs && this.$refs[`tableView_1`] && this.$refs[`tableView_1`].reload && this.$refs[`tableView_1`].reload());
                return;
            })();
        },
        async link_1_click(event, current) {
            await (async () => {
                this.isUpdate = true;
                this.input = this.$genInitFromSchema("app.dataSources.defaultDS.entities.OrderEntity", this.$utils["Clone"](((current || {}).item || {}).orderEntity));
                await (this.$refs && this.$refs[`saveModal_4`] && this.$refs[`saveModal_4`].open && this.$refs[`saveModal_4`].open());
                return;
            })();
        },
        async link_2_click(event, current) {
            await (async () => {
                await this.$logics["app.dataSources.defaultDS.entities.OrderEntity.logics.delete"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "fc71c84f2a7c4162b4dd68be99adabe7",
                    },
                    query: {
                        id: (((current || {}).item || {}).orderEntity || {}).id,
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
                "{list: nasl.collection.List<{orderEntity: app.dataSources.defaultDS.entities.OrderEntity}>, total: nasl.core.Long}",
                await this.$logics["app.logics.loadOrderManagementTableView_1"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "a06c5dc9343649bdb9183f6873efa9d1",
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
        await this.orderManagement_created();
    },
};
</script>
