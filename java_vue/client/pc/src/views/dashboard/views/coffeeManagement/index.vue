<template>
    <u-linear-layout :ref="`uLinearLayout1`" :type="`root`" :gap="`none`" style="height: 100%; --custom-start: auto; min-height: 200px">
        <u-router-view :ref="`router_view1`"></u-router-view>
        <u-panel :ref="`panel_3`">
            <template #title :ref="`template_58`">
                <u-text :ref="`text_53`" :text="`咖啡管理`"></u-text>
            </template>
            <u-linear-layout :ref="`linear_layout_20`" :direction="`vertical`">
                <u-linear-layout :ref="`linear_layout_21`">
                    <u-form :ref="`form_1`" :layout="`inline`" key="form_1">
                        <u-form-item :ref="`form_item_11`" :layout="`center`" v-feAnnotation="`{\\'annotationName\\':\\'feAnnotation\\',\\'argsList\\':[true,true],\\'dataRefList\\':[{\\'typeNamespace\\':\\'app.dataSources.defaultDS.entities\\',\\'typeName\\':\\'Coffee\\',\\'propName\\':\\'coffeename\\'}]}`">
                            <template #label :ref="`template_59`">
                                <u-text :ref="`text_55`" :text="`咖啡名称`"></u-text>
                            </template>
                            <u-input :ref="`input_3`" :placeholder="`请输入咖啡名称`" :value.sync="filter.coffeename"></u-input>
                        </u-form-item>
                        <u-form-item :ref="`form_item_12`" :layout="`center`" v-feAnnotation="`{\\'annotationName\\':\\'feAnnotation\\',\\'argsList\\':[true,true],\\'dataRefList\\':[{\\'typeNamespace\\':\\'app.dataSources.defaultDS.entities\\',\\'typeName\\':\\'Coffee\\',\\'propName\\':\\'coffeeCategory\\'}]}`">
                            <template #label :ref="`template_60`">
                                <u-text :ref="`text_56`" :text="`咖啡类目`"></u-text>
                            </template>
                            <u-select :ref="`select_6`" clearable="" :placeholder="`请选择咖啡类目`" :dataSource="$global.useDatabaseCallback()(__select_6_handleDataSourceLoad)" :pageSize="50" :textField="`coffeeCategory.cateGoryName`" :valueField="`coffeeCategory.id`" :pagination="true" :value.sync="filter.coffeeCategory" key="select_6"></u-select>
                        </u-form-item>
                        <u-form-item :ref="`form_item_13`" :layout="`center`" v-feAnnotation="`{\\'annotationName\\':\\'feAnnotation\\',\\'argsList\\':[true,true],\\'dataRefList\\':[{\\'typeNamespace\\':\\'app.dataSources.defaultDS.entities\\',\\'typeName\\':\\'Coffee\\',\\'propName\\':\\'isDisplay\\'}]}`">
                            <template #label :ref="`template_61`">
                                <u-text :ref="`text_57`" :text="`是否显示`"></u-text>
                            </template>
                            <u-select :ref="`select_7`" clearable="" :placeholder="`请输入是否显示`" :value.sync="filter.isDisplay" key="select_7">
                                <u-select-item :ref="`select_item_9`" :value="true" :text="`是`">
                                    <u-text :ref="`text_58`" :text="`是`"></u-text>
                                </u-select-item>
                                <u-select-item :ref="`select_item_10`" :value="false" :text="`否`">
                                    <u-text :ref="`text_59`" :text="`否`"></u-text>
                                </u-select-item>
                            </u-select>
                        </u-form-item>
                        <u-form-item :ref="`form_item_14`" :layout="`center`" :labelSize="`auto`">
                            <u-button :ref="`button_10`" :color="`primary`" :text="`查 询`" @click="button_10_click($event)"></u-button>
                        </u-form-item>
                    </u-form>
                </u-linear-layout>
                <u-linear-layout :ref="`linear_layout_22`" :mode="`flex`" :alignment="`start`" :justify="`end`">
                    <u-button :ref="`button_11`" :color="`primary`" :text="`创 建`" @click="button_11_click($event)"></u-button>
                </u-linear-layout>
                <u-table-view :ref="`tableView_1`" :dataSource="$global.useDatabaseCallback()(__tableView_1_handleDataSourceLoad)" :dataSchema="`LoadCoffeeManagementTableView_1Structure`" :valueField="`coffee.id`" :pagination="true" :showSizer="true" :pageSize="20" :pageNumber="1" key="tableView_1">
                    <u-table-view-column :ref="`table_view_column_1`" :type="`index`" :width="`60`">
                        <template #expander="current" :ref="`template_62`">
                            <u-table-view-expander :ref="`table_view_expander_1_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                        </template>
                        <template #cell="current" :ref="`template_63`"></template>
                        <template #title :ref="`template_64`">
                            <u-text :ref="`text_60`" :text="`序号`"></u-text>
                        </template>
                    </u-table-view-column>
                    <u-table-view-column :ref="`table_view_column_2`" :field="`coffee.createdTime`" v-feAnnotation="`{\\'annotationName\\':\\'feAnnotation\\',\\'argsList\\':[true,true],\\'dataRefList\\':[{\\'typeNamespace\\':\\'app.logics\\',\\'typeName\\':\\'loadCoffeeManagementTableView_1\\',\\'propName\\':\\'coffee.createdTime\\'},{\\'typeNamespace\\':\\'app.dataSources.defaultDS.entities\\',\\'typeName\\':\\'Coffee\\',\\'propName\\':\\'createdTime\\'}]}`">
                        <template #expander="current" :ref="`template_65`">
                            <u-table-view-expander :ref="`table_view_expander_2_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                        </template>
                        <template #cell="current" :ref="`template_66`">
                            <u-linear-layout :ref="`linear_layout_23_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                <u-text :ref="`text_61_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.DateTime', (((current || {}).item || {}).coffee || {}).createdTime)"></u-text>
                            </u-linear-layout>
                        </template>
                        <template #title :ref="`template_67`">
                            <u-text :ref="`text_62`" :text="`创建时间`"></u-text>
                        </template>
                    </u-table-view-column>
                    <u-table-view-column :ref="`table_view_column_3`" :field="`coffee.updatedTime`" v-feAnnotation="`{\\'annotationName\\':\\'feAnnotation\\',\\'argsList\\':[true,true],\\'dataRefList\\':[{\\'typeNamespace\\':\\'app.logics\\',\\'typeName\\':\\'loadCoffeeManagementTableView_1\\',\\'propName\\':\\'coffee.updatedTime\\'},{\\'typeNamespace\\':\\'app.dataSources.defaultDS.entities\\',\\'typeName\\':\\'Coffee\\',\\'propName\\':\\'updatedTime\\'}]}`">
                        <template #expander="current" :ref="`template_68`">
                            <u-table-view-expander :ref="`table_view_expander_3_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                        </template>
                        <template #cell="current" :ref="`template_69`">
                            <u-linear-layout :ref="`linear_layout_24_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                <u-text :ref="`text_63_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.DateTime', (((current || {}).item || {}).coffee || {}).updatedTime)"></u-text>
                            </u-linear-layout>
                        </template>
                        <template #title :ref="`template_70`">
                            <u-text :ref="`text_64`" :text="`更新时间`"></u-text>
                        </template>
                    </u-table-view-column>
                    <u-table-view-column :ref="`table_view_column_4`" :field="`coffee.coffeename`" v-feAnnotation="`{\\'annotationName\\':\\'feAnnotation\\',\\'argsList\\':[true,true],\\'dataRefList\\':[{\\'typeNamespace\\':\\'app.logics\\',\\'typeName\\':\\'loadCoffeeManagementTableView_1\\',\\'propName\\':\\'coffee.coffeename\\'},{\\'typeNamespace\\':\\'app.dataSources.defaultDS.entities\\',\\'typeName\\':\\'Coffee\\',\\'propName\\':\\'coffeename\\'}]}`">
                        <template #expander="current" :ref="`template_71`">
                            <u-table-view-expander :ref="`table_view_expander_4_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                        </template>
                        <template #cell="current" :ref="`template_72`">
                            <u-linear-layout :ref="`linear_layout_25_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                <u-text :ref="`text_65_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).coffee || {}).coffeename)"></u-text>
                            </u-linear-layout>
                        </template>
                        <template #title :ref="`template_73`">
                            <u-text :ref="`text_66`" :text="`咖啡名称`"></u-text>
                        </template>
                    </u-table-view-column>
                    <u-table-view-column :ref="`table_view_column_5`" :field="`coffee.price`" v-feAnnotation="`{\\'annotationName\\':\\'feAnnotation\\',\\'argsList\\':[true,true],\\'dataRefList\\':[{\\'typeNamespace\\':\\'app.logics\\',\\'typeName\\':\\'loadCoffeeManagementTableView_1\\',\\'propName\\':\\'coffee.price\\'},{\\'typeNamespace\\':\\'app.dataSources.defaultDS.entities\\',\\'typeName\\':\\'Coffee\\',\\'propName\\':\\'price\\'}]}`">
                        <template #expander="current" :ref="`template_74`">
                            <u-table-view-expander :ref="`table_view_expander_5_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                        </template>
                        <template #cell="current" :ref="`template_75`">
                            <u-linear-layout :ref="`linear_layout_26_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                <u-text :ref="`text_67_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.Decimal', (((current || {}).item || {}).coffee || {}).price)"></u-text>
                            </u-linear-layout>
                        </template>
                        <template #title :ref="`template_76`">
                            <u-text :ref="`text_68`" :text="`价格`"></u-text>
                        </template>
                    </u-table-view-column>
                    <u-table-view-column :ref="`table_view_column_6`" :field="`coffee.coffeeImage`" v-feAnnotation="`{\\'annotationName\\':\\'feAnnotation\\',\\'argsList\\':[true,true],\\'dataRefList\\':[{\\'typeNamespace\\':\\'app.logics\\',\\'typeName\\':\\'loadCoffeeManagementTableView_1\\',\\'propName\\':\\'coffee.coffeeImage\\'},{\\'typeNamespace\\':\\'app.dataSources.defaultDS.entities\\',\\'typeName\\':\\'Coffee\\',\\'propName\\':\\'coffeeImage\\'}]}`">
                        <template #expander="current" :ref="`template_77`">
                            <u-table-view-expander :ref="`table_view_expander_6_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                        </template>
                        <template #cell="current" :ref="`template_78`">
                            <u-linear-layout :ref="`linear_layout_27_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                <u-image :ref="`image_2_${(current || {}).__nodeKey || (current || {}).index}`" :src="(((current || {}).item || {}).coffee || {}).coffeeImage" :fit="`contain`" style="width: 80px; height: 80px"></u-image>
                            </u-linear-layout>
                        </template>
                        <template #title :ref="`template_79`">
                            <u-text :ref="`text_70`" :text="`咖啡图片`"></u-text>
                        </template>
                    </u-table-view-column>
                    <u-table-view-column :ref="`table_view_column_7`" :field="`coffee.coffeeCategory`" v-feAnnotation="`{\\'annotationName\\':\\'feAnnotation\\',\\'argsList\\':[true,true],\\'dataRefList\\':[{\\'typeNamespace\\':\\'app.logics\\',\\'typeName\\':\\'loadCoffeeManagementTableView_1\\',\\'propName\\':\\'coffeeCategory.cateGoryName\\'},{\\'typeNamespace\\':\\'app.dataSources.defaultDS.entities\\',\\'typeName\\':\\'CoffeeCategory\\',\\'propName\\':\\'cateGoryName\\'}]}`">
                        <template #expander="current" :ref="`template_80`">
                            <u-table-view-expander :ref="`table_view_expander_7_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                        </template>
                        <template #cell="current" :ref="`template_81`">
                            <u-linear-layout :ref="`linear_layout_28_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                <u-text :ref="`text_71_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).coffeeCategory || {}).cateGoryName)"></u-text>
                            </u-linear-layout>
                        </template>
                        <template #title :ref="`template_82`">
                            <u-text :ref="`text_72`" :text="`咖啡类目`"></u-text>
                        </template>
                    </u-table-view-column>
                    <u-table-view-column :ref="`table_view_column_8`" :field="`coffee.isDisplay`" v-feAnnotation="`{\\'annotationName\\':\\'feAnnotation\\',\\'argsList\\':[true,true],\\'dataRefList\\':[{\\'typeNamespace\\':\\'app.logics\\',\\'typeName\\':\\'loadCoffeeManagementTableView_1\\',\\'propName\\':\\'coffee.isDisplay\\'},{\\'typeNamespace\\':\\'app.dataSources.defaultDS.entities\\',\\'typeName\\':\\'Coffee\\',\\'propName\\':\\'isDisplay\\'}]}`">
                        <template #expander="current" :ref="`template_83`">
                            <u-table-view-expander :ref="`table_view_expander_8_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                        </template>
                        <template #cell="current" :ref="`template_84`">
                            <u-linear-layout :ref="`linear_layout_29_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                <u-text :ref="`text_73_${(current || {}).__nodeKey || (current || {}).index}`" :key="`text_73_${(current || {}).__nodeKey || (current || {}).index}`" :text="`是`" v-if="(((current || {}).item || {}).coffee || {}).isDisplay"></u-text>
                                <u-text :ref="`text_74_${(current || {}).__nodeKey || (current || {}).index}`" :key="`text_74_${(current || {}).__nodeKey || (current || {}).index}`" :text="`否`" v-if="!(((current || {}).item || {}).coffee || {}).isDisplay"></u-text>
                            </u-linear-layout>
                        </template>
                        <template #title :ref="`template_85`">
                            <u-text :ref="`text_75`" :text="`是否显示`"></u-text>
                        </template>
                    </u-table-view-column>
                    <u-table-view-column :ref="`table_view_column_9`">
                        <template #expander="current" :ref="`template_86`">
                            <u-table-view-expander :ref="`table_view_expander_9_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                        </template>
                        <template #cell="current" :ref="`template_87`">
                            <u-linear-layout :ref="`linear_layout_30_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                <u-link :ref="`link_1_${(current || {}).__nodeKey || (current || {}).index}`" :text="`修改`" @click="link_1_click($event, current)"></u-link>
                                <u-link :ref="`link_2_${(current || {}).__nodeKey || (current || {}).index}`" :text="`删除`" @click="link_2_click($event, current)"></u-link>
                            </u-linear-layout>
                        </template>
                        <template #title :ref="`template_88`">
                            <u-text :ref="`text_76`" :text="`操作`"></u-text>
                        </template>
                    </u-table-view-column>
                </u-table-view>
            </u-linear-layout>
        </u-panel>
        <u-modal :ref="`saveModal_3`">
            <template #foot :ref="`template_89`">
                <u-linear-layout :ref="`linear_layout_31`">
                    <u-button :ref="`button_12`" :key="`button_12`" :color="`primary`" :text="`提交修改`" @click="button_12_click($event)" v-if="isUpdate"></u-button>
                    <u-button :ref="`button_13`" :key="`button_13`" :color="`primary`" :text="`立即创建`" @click="button_13_click($event)" v-if="!isUpdate"></u-button>
                </u-linear-layout>
            </template>
            <template #body :ref="`template_90`">
                <u-form :ref="`saveModalForm_3`" key="saveModalForm_3">
                    <u-form-item :ref="`form_item_15`" :required="true" :rules="[{ validate: 'required', message: `表单项不得为空`, trigger: 'input+blur', required: true }]" :layout="`center`" v-feAnnotation="`{\\'annotationName\\':\\'feAnnotation\\',\\'argsList\\':[true,true],\\'dataRefList\\':[{\\'typeNamespace\\':\\'app.dataSources.defaultDS.entities\\',\\'typeName\\':\\'Coffee\\',\\'propName\\':\\'coffeename\\'}]}`">
                        <template #label :ref="`template_91`">
                            <u-text :ref="`text_77`" :text="`咖啡名称`"></u-text>
                        </template>
                        <u-input :ref="`input_4`" :placeholder="`请输入咖啡名称`" :value.sync="input.coffeename"></u-input>
                    </u-form-item>
                    <u-form-item :ref="`form_item_16`" :required="true" :rules="[{ validate: 'required', message: `表单项不得为空`, trigger: 'input+blur', required: true }]" :layout="`center`" v-feAnnotation="`{\\'annotationName\\':\\'feAnnotation\\',\\'argsList\\':[true,true],\\'dataRefList\\':[{\\'typeNamespace\\':\\'app.dataSources.defaultDS.entities\\',\\'typeName\\':\\'Coffee\\',\\'propName\\':\\'description\\'}]}`">
                        <template #label :ref="`template_92`">
                            <u-text :ref="`text_78`" :text="`咖啡简介`"></u-text>
                        </template>
                        <u-input :ref="`input_5`" :placeholder="`请输入咖啡简介`" :value.sync="input.description"></u-input>
                    </u-form-item>
                    <u-form-item :ref="`form_item_17`" :required="true" :rules="[{ validate: 'required', message: `表单项不得为空`, trigger: 'input+blur', required: true }]" :layout="`center`" v-feAnnotation="`{\\'annotationName\\':\\'feAnnotation\\',\\'argsList\\':[true,true],\\'dataRefList\\':[{\\'typeNamespace\\':\\'app.dataSources.defaultDS.entities\\',\\'typeName\\':\\'Coffee\\',\\'propName\\':\\'price\\'}]}`">
                        <template #label :ref="`template_93`">
                            <u-text :ref="`text_79`" :text="`价格`"></u-text>
                        </template>
                        <u-number-input :ref="`number_input_2`" :precision="0" :step="0" :placeholder="`请输入价格`" :value.sync="input.price"></u-number-input>
                    </u-form-item>
                    <u-form-item
                        :ref="`form_item_18`"
                        :required="true"
                        :rules="[
                            { validate: 'maxLength', args: [4000], message: `不得超过${4000}个字符`, trigger: 'input+blur' },
                            { validate: 'required', message: `表单项不得为空`, trigger: 'input+blur', required: true },
                        ]"
                        :layout="`center`"
                        v-feAnnotation="`{\\'annotationName\\':\\'feAnnotation\\',\\'argsList\\':[true,true],\\'dataRefList\\':[{\\'typeNamespace\\':\\'app.dataSources.defaultDS.entities\\',\\'typeName\\':\\'Coffee\\',\\'propName\\':\\'coffeeImage\\'}]}`"
                    >
                        <template #label :ref="`template_94`">
                            <u-text :ref="`text_80`" :text="`咖啡图片`"></u-text>
                        </template>
                        <u-uploader :ref="`uploader_4`" :listType="`card`" :accept="`.png,.jpg,.jpeg,.gif,.bmp`" :url="`/upload`" :urlField="`filePath`" :limit="999" :maxSize="`50MB`" :converter="`simple`" :value.sync="input.coffeeImage">
                            <template #file-list :ref="`template_99`">
                                <i-ico :ref="`ico_7`" :flag="`file-icon`" :name="`file-default`" :icotype="`only`" style="margin: 0px 8px 0px 0px"></i-ico>
                                <u-text :ref="`text_89`" :flag="`file-name`" :text="`文件名称`" style="margin: 0px 8px 0px 0px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; display: inherit"></u-text>
                                <u-text :ref="`text_90`" :flag="`file-size`" :text="`文件大小`" style="margin: 0px 8px 0px 0px"></u-text>
                                <i-ico :ref="`ico_8`" :flag="`download-icon`" :name="`download`" :icotype="`only`" style="margin: 0px 8px 0px 0px"></i-ico>
                            </template>
                        </u-uploader>
                    </u-form-item>
                    <u-form-item :ref="`form_item_19`" :required="true" :rules="[{ validate: 'required', message: `表单项不得为空`, trigger: 'input+blur', required: true }]" :layout="`center`" v-feAnnotation="`{\\'annotationName\\':\\'feAnnotation\\',\\'argsList\\':[true,true],\\'dataRefList\\':[{\\'typeNamespace\\':\\'app.dataSources.defaultDS.entities\\',\\'typeName\\':\\'Coffee\\',\\'propName\\':\\'coffeeCategory\\'}]}`">
                        <template #label :ref="`template_95`">
                            <u-text :ref="`text_81`" :text="`咖啡类目`"></u-text>
                        </template>
                        <u-select :ref="`select_8`" :clearable="true" :placeholder="`请选择咖啡类目`" :textField="`coffeeCategory.cateGoryName`" :valueField="`coffeeCategory.id`" :dataSource="$global.useDatabaseCallback()(__select_8_handleDataSourceLoad)" :pageSize="50" :pagination="true" :value.sync="input.coffeeCategory" key="select_8"></u-select>
                    </u-form-item>
                    <u-form-item :ref="`form_item_20`" :required="true" :rules="[{ validate: 'required', message: `表单项不得为空`, trigger: 'input+blur', required: true }]" :layout="`center`" v-feAnnotation="`{\\'annotationName\\':\\'feAnnotation\\',\\'argsList\\':[true,true],\\'dataRefList\\':[{\\'typeNamespace\\':\\'app.dataSources.defaultDS.entities\\',\\'typeName\\':\\'Coffee\\',\\'propName\\':\\'isDisplay\\'}]}`">
                        <template #label :ref="`template_96`">
                            <u-text :ref="`text_82`" :text="`是否显示`"></u-text>
                        </template>
                        <u-select :ref="`select_9`" :clearable="true" :placeholder="`请输入是否显示`" :value.sync="input.isDisplay" key="select_9">
                            <u-select-item :ref="`select_item_11`" :value="true" :text="`是`">
                                <u-text :ref="`text_83`" :text="`是`"></u-text>
                            </u-select-item>
                            <u-select-item :ref="`select_item_12`" :value="false" :text="`否`">
                                <u-text :ref="`text_84`" :text="`否`"></u-text>
                            </u-select-item>
                        </u-select>
                    </u-form-item>
                </u-form>
            </template>
            <template #title :ref="`template_97`">
                <div :ref="`div_5`" :key="`div_5`" v-if="isUpdate">
                    <u-text :ref="`text_85`" :text="`修改`"></u-text>
                </div>
                <div :ref="`div_6`" :key="`div_6`" v-if="!isUpdate">
                    <u-text :ref="`text_86`" :text="`创建`"></u-text>
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
            ["coffee"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.Coffee", undefined),
            ["input"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.Coffee", undefined),
            ["filter"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.Coffee", undefined),
            ["isUpdate"]: undefined,
        };
    },
    computed: {},
    meta: {
        title: "咖啡管理",
        crumb: undefined,
        crumbI18n: undefined,
        first: undefined,
        auth: undefined,
    },
    methods: {
        async coffeeManagement_created(event) {
            await (async () => {
                this.$genInitFromSchema("app.dataSources.defaultDS.entities.Coffee", this.$utils["Clear"](this.filter));
                return;
            })();
        },
        async button_11_click(event) {
            await (async () => {
                this.isUpdate = false;
                this.input = this.$genInitFromSchema("app.dataSources.defaultDS.entities.Coffee", this.$utils["Clone"](this.coffee));
                await (this.$refs && this.$refs[`saveModal_3`] && this.$refs[`saveModal_3`].open && this.$refs[`saveModal_3`].open());
                return;
            })();
        },
        async button_12_click(event) {
            await (async () => {
                if ((this.$genInitFromSchema("nasl.ui.ValidateResult", await (this.$refs && this.$refs[`saveModalForm_3`] && this.$refs[`saveModalForm_3`].validate && this.$refs[`saveModalForm_3`].validate())) || {}).valid) {
                    this.$genInitFromSchema(
                        "app.dataSources.defaultDS.entities.Coffee",
                        await this.$logics["app.dataSources.defaultDS.entities.Coffee.logics.update"]({
                            config: {
                                download: false,
                            },
                            query: {},
                            headers: {
                                "lcap-calllogic-uuid": "7da3087eaebf4b198a620b7dd3db63c1",
                            },
                            body: {
                                entity: this.input,
                            },
                        })
                    );
                    await (this.$refs && this.$refs[`saveModal_3`] && this.$refs[`saveModal_3`].close && this.$refs[`saveModal_3`].close());
                    await (this.$refs && this.$refs[`tableView_1`] && this.$refs[`tableView_1`].reload && this.$refs[`tableView_1`].reload());
                } else {
                }

                return;
            })();
        },
        async button_13_click(event) {
            await (async () => {
                if ((this.$genInitFromSchema("nasl.ui.ValidateResult", await (this.$refs && this.$refs[`saveModalForm_3`] && this.$refs[`saveModalForm_3`].validate && this.$refs[`saveModalForm_3`].validate())) || {}).valid) {
                    this.$genInitFromSchema(
                        "app.dataSources.defaultDS.entities.Coffee",
                        await this.$logics["app.dataSources.defaultDS.entities.Coffee.logics.create"]({
                            config: {
                                download: false,
                            },
                            query: {},
                            headers: {
                                "lcap-calllogic-uuid": "c8356c57a5fd4cebbc0feb2eaba82f6c",
                            },

                            body: this.input,
                        })
                    );
                    await (this.$refs && this.$refs[`saveModal_3`] && this.$refs[`saveModal_3`].close && this.$refs[`saveModal_3`].close());
                    await (this.$refs && this.$refs[`tableView_1`] && this.$refs[`tableView_1`].reload && this.$refs[`tableView_1`].reload());
                } else {
                }

                return;
            })();
        },
        async button_10_click(event) {
            await (async () => {
                await (this.$refs && this.$refs[`tableView_1`] && this.$refs[`tableView_1`].reload && this.$refs[`tableView_1`].reload());
                return;
            })();
        },
        async link_1_click(event, current) {
            await (async () => {
                this.isUpdate = true;
                this.input = this.$genInitFromSchema("app.dataSources.defaultDS.entities.Coffee", this.$utils["Clone"](((current || {}).item || {}).coffee));
                await (this.$refs && this.$refs[`saveModal_3`] && this.$refs[`saveModal_3`].open && this.$refs[`saveModal_3`].open());
                return;
            })();
        },
        async link_2_click(event, current) {
            await (async () => {
                await this.$logics["app.dataSources.defaultDS.entities.Coffee.logics.delete"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "15f748819caf427ba7560ac85b066205",
                    },
                    query: {
                        id: (((current || {}).item || {}).coffee || {}).id,
                    },
                    body: {},
                });
                await (this.$refs && this.$refs[`tableView_1`] && this.$refs[`tableView_1`].reload && this.$refs[`tableView_1`].reload());
                return;
            })();
        },
        async __select_6_handleDataSourceLoad(params) {
            this["__select_6_params"] = { ...params };
            return this.$genInitFromSchema(
                "{list: nasl.collection.List<{coffeeCategory: app.dataSources.defaultDS.entities.CoffeeCategory}>, total: nasl.core.Long}",
                await this.$logics["app.logics.loadCoffeeManagementSelect_5CoffeeCategory"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "6fb34cc62a09471c9d95a16f5a423199",
                    },
                    path: {},
                    body: {
                        page: this.__select_6_params && this.__select_6_params.page,
                        size: this.__select_6_params && this.__select_6_params.size,
                    },
                })
            );
        },

        async __tableView_1_handleDataSourceLoad(params) {
            this["__tableView_1_params"] = { ...params };
            return this.$genInitFromSchema(
                "{list: nasl.collection.List<{coffee: app.dataSources.defaultDS.entities.Coffee, coffeeCategory: app.dataSources.defaultDS.entities.CoffeeCategory}>, total: nasl.core.Long}",
                await this.$logics["app.logics.loadCoffeeManagementTableView_1"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "033ef6cdedb449c4980b8c5775bb48d0",
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

        async __select_8_handleDataSourceLoad(params) {
            this["__select_8_params"] = { ...params };
            return this.$genInitFromSchema(
                "{list: nasl.collection.List<{coffeeCategory: app.dataSources.defaultDS.entities.CoffeeCategory}>, total: nasl.core.Long}",
                await this.$logics["app.logics.loadCoffeeManagementSelect_5CoffeeCategory"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "25d5e5dcc13440f3bfce4309877782a1",
                    },
                    path: {},
                    body: {
                        page: this.__select_8_params && this.__select_8_params.page,
                        size: this.__select_8_params && this.__select_8_params.size,
                    },
                })
            );
        },
    },
    async created() {
        await this.coffeeManagement_created();
    },
};
</script>
