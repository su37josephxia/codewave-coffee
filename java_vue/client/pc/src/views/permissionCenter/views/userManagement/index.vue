<template>
    <l-root :ref="`lRoot1`" style="background-color: #f5f6fa; height: 100%; --custom-start: auto; min-height: 200px">
        <u-router-view :ref="`uRouterView1`"></u-router-view>
        <u-linear-layout :ref="`linear_layout_5`" :direction="`horizontal`" style="height: 100%; width: 100%; --custom-start: auto; min-height: 200px">
            <u-linear-layout :ref="`linear_layout11`" :direction="`horizontal`" style="width: 100%">
                <u-alert :ref="`alert1`" :type="`info`" style="margin: 0 0 10px 0; width: 100%">
                    <template #title :ref="`template30`">
                        <u-text :ref="`text29`" :text="`开发者可根据需求情况，自行修改权限中心页面`"></u-text>
                    </template>
                </u-alert>
            </u-linear-layout>
            <u-panel :ref="`panel_1`" style="margin-bottom: 16px; --update-key: vs6a; width: 100%; border-top-width: 0px; border-left-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-style: solid">
                <template #title :ref="`template_1`">
                    <u-text :ref="`text_1`" :text="`用户管理`" style="--custom-start: auto"></u-text>
                </template>
                <u-linear-layout :ref="`linear_layout1`" :direction="`vertical`" style="--custom-start: auto">
                    <u-linear-layout :ref="`linear_layout_2`" :mode="`block`" style="--custom-start: auto">
                        <u-linear-layout :ref="`linear_layout_3`" style="margin-bottom: 16px; --update-key: mtge">
                            <u-text :ref="`text30`" :text="`用户名`" style="--custom-start: auto"></u-text>
                            <u-input :ref="`input3`" :placeholder="`请输入`" :value.sync="filter.userName" :clearable="true" style="--custom-start: auto"></u-input>
                            <u-text :ref="`text_12`" :text="`手机号`" style="--custom-start: auto"></u-text>
                            <u-input :ref="`input_1`" :placeholder="`请输入`" :value.sync="filter.phone" :clearable="true" style="--custom-start: auto"></u-input>
                        </u-linear-layout>
                        <u-linear-layout :ref="`linear_layout_4`" :justify="`space-between`">
                            <u-button :ref="`button7`" :color="`primary`" :text="`查询`" @click="button7_click($event)" style="--custom-start: auto"></u-button>
                            <u-button :ref="`button2`" :color="`primary`" :text="`创建普通用户`" :icon="`add`" @click="button2_click($event)" style="--custom-start: auto"></u-button>
                        </u-linear-layout>
                    </u-linear-layout>
                </u-linear-layout>
            </u-panel>
            <u-panel :ref="`panel_3`" style="min-height: 100px; border-top-width: 0px; border-left-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-style: solid; --update-key: guzc">
                <template #title :ref="`template_31`"></template>
                <u-table-view :ref="`tableView`" :dataSource="load" :dataSchema="`LoadTest2TableViewStructure`" :valueField="`user.id`" :pagination="true" :showSizer="true" key="tableView" style="--custom-start: auto">
                    <u-table-view-column :ref="`table_view_column1`" :type="`index`" :width="`60`">
                        <template #title :ref="`template15`">
                            <u-text :ref="`text14`" :text="`序号`"></u-text>
                        </template>
                    </u-table-view-column>
                    <u-table-view-column :ref="`table_view_column2`" :field="`user.userName`">
                        <template #cell="current" :ref="`template1`">
                            <u-linear-layout :ref="`linear_layout3_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                <u-text :ref="`text1_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).user || {}).userName)"></u-text>
                            </u-linear-layout>
                        </template>
                        <template #title :ref="`template16`">
                            <u-text :ref="`text15`" :text="`用户名`"></u-text>
                        </template>
                    </u-table-view-column>
                    <u-table-view-column :ref="`table_view_column3`" :field="`user.phone`">
                        <template #cell="current" :ref="`template2`">
                            <u-linear-layout :ref="`linear_layout4_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                <u-text :ref="`text2_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).user || {}).phone)"></u-text>
                            </u-linear-layout>
                        </template>
                        <template #title :ref="`template17`">
                            <u-text :ref="`text16`" :text="`手机号`"></u-text>
                        </template>
                    </u-table-view-column>
                    <u-table-view-column :ref="`table_view_column4`" :field="`user.email`">
                        <template #cell="current" :ref="`template3`">
                            <u-linear-layout :ref="`linear_layout5_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                <u-text :ref="`text3_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).user || {}).email)"></u-text>
                            </u-linear-layout>
                        </template>
                        <template #title :ref="`template18`">
                            <u-text :ref="`text17`" :text="`邮箱`"></u-text>
                        </template>
                    </u-table-view-column>
                    <u-table-view-column :ref="`table_view_column5`" :field="`user.displayName`">
                        <template #cell="current" :ref="`template4`">
                            <u-linear-layout :ref="`linear_layout6_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                <u-text :ref="`text4_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).user || {}).displayName)"></u-text>
                            </u-linear-layout>
                        </template>
                        <template #title :ref="`template19`">
                            <u-text :ref="`text18`" :text="`昵称`"></u-text>
                        </template>
                    </u-table-view-column>
                    <u-table-view-column :ref="`table_view_column_2`" :field="`deptUser`">
                        <template #cell="current" :ref="`template_120`">
                            <u-linear-layout :ref="`linear_layout_329_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                <u-text :ref="`text_287_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', ((current || {}).item || {}).deptUser)"></u-text>
                            </u-linear-layout>
                        </template>
                        <template #title :ref="`template_121`">
                            <u-text :ref="`text_286`" :text="`直属主管`"></u-text>
                        </template>
                    </u-table-view-column>
                    <u-table-view-column :ref="`table_view_column_1`" :field="`dept.name`" :width="`15%`" style="--custom-start: auto">
                        <template #cell="current" :ref="`template_117`">
                            <u-linear-layout :ref="`linear_layout_328_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`none`" :mode="`flex`" :direction="`vertical`" :alignment="`start`" :justify="`center`" :wrap="true" style="--update-key: 9kzv; --custom-start: auto">
                                <u-text :ref="`text_284_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).dept || {}).name)" style="--custom-start: auto"></u-text>
                                <u-text :ref="`text_285_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).dept || {}).deptId)" style="color: #999"></u-text>
                            </u-linear-layout>
                        </template>
                        <template #title :ref="`template_118`">
                            <u-text :ref="`text_281`" :text="`部门`"></u-text>
                        </template>
                    </u-table-view-column>
                    <u-table-view-column :ref="`table_view_column6`" :field="`user.status`">
                        <template #cell="current" :ref="`template5`">
                            <u-linear-layout :ref="`linear_layout7_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                <i-ico :ref="`ico_2_${(current || {}).__nodeKey || (current || {}).index}`" :key="`ico_2_${(current || {}).__nodeKey || (current || {}).index}`" :name="`https://lcap-static-saas.nos-eastchina1.126.net/user/community1/1695795472172_%E5%9C%86%E5%BD%A2+15.svg`" :icotype="`only`" v-if="(((current || {}).item || {}).user || {}).status == 'Normal'" :style="{}" style="font-size: 12px">
                                    <u-text :ref="`text_14_${(current || {}).__nodeKey || (current || {}).index}`" :text="`图标`"></u-text>
                                </i-ico>
                                <i-ico :ref="`ico_3_${(current || {}).__nodeKey || (current || {}).index}`" :key="`ico_3_${(current || {}).__nodeKey || (current || {}).index}`" :name="`https://lcap-static-saas.nos-eastchina1.126.net/user/community1/1695795477666_%E5%9C%86%E5%BD%A2+15+%281%29.svg`" :icotype="`only`" v-if="(((current || {}).item || {}).user || {}).status == 'Forbidden'" :style="{}" style="font-size: 12px">
                                    <u-text :ref="`text_15_${(current || {}).__nodeKey || (current || {}).index}`" :text="`图标`"></u-text>
                                </i-ico>
                                <i-ico :ref="`ico_4_${(current || {}).__nodeKey || (current || {}).index}`" :key="`ico_4_${(current || {}).__nodeKey || (current || {}).index}`" :name="`https://lcap-static-saas.nos-eastchina1.126.net/user/community1/1695795494923_%E5%9C%86%E5%BD%A2+15+%282%29.svg`" :icotype="`only`" v-if="false" :style="{}" style="font-size: 12px">
                                    <u-text :ref="`text_16_${(current || {}).__nodeKey || (current || {}).index}`" :text="`图标`"></u-text>
                                </i-ico>
                                <u-text :ref="`text5_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', $utils['EnumValueToText']((((current || {}).item || {}).user || {}).status, { concept: 'TypeAnnotation', typeKind: 'reference', typeNamespace: 'app.enums', typeName: 'UserStatusEnum', typeArguments: null, returnType: null, properties: null, name: '' }))" style="margin-left: -5px; --update-key: 88sd"></u-text>
                            </u-linear-layout>
                        </template>
                        <template #title :ref="`template20`">
                            <u-text :ref="`text19`" :text="`状态`"></u-text>
                        </template>
                    </u-table-view-column>
                    <u-table-view-column :ref="`table_view_column8`" :field="`user.source`">
                        <template #cell="current" :ref="`template13`">
                            <u-linear-layout :ref="`linear_layout12_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                <u-text :ref="`text12_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', $utils['EnumValueToText']((((current || {}).item || {}).user || {}).source, { concept: 'TypeAnnotation', typeKind: 'reference', typeNamespace: 'app.enums', typeName: 'UserSourceEnum', typeArguments: null, returnType: null, properties: null, name: '' }))"></u-text>
                            </u-linear-layout>
                        </template>
                        <template #title :ref="`template21`">
                            <u-text :ref="`text20`" :text="`登录方式`"></u-text>
                        </template>
                    </u-table-view-column>
                    <u-table-view-column :ref="`table_view_column7`" :width="120">
                        <template #cell="current" :ref="`template6`">
                            <u-linear-layout :ref="`linear_layout8_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                <u-link :ref="`link1_${(current || {}).__nodeKey || (current || {}).index}`" :text="`修改`" @click="link1_click($event, current)"></u-link>
                                <u-link :ref="`link2_${(current || {}).__nodeKey || (current || {}).index}`" :text="`删除`" :disabled="(((current || {}).item || {}).user || {}).userName == ($global.userInfo || {}).UserName" @click="link2_click($event, current)" style="color: #f24957"></u-link>
                            </u-linear-layout>
                        </template>
                        <template #title :ref="`template22`">
                            <u-text :ref="`text21`" :text="`操作`"></u-text>
                        </template>
                    </u-table-view-column>
                </u-table-view>
            </u-panel>
        </u-linear-layout>
        <u-modal :ref="`saveModal`" style="--custom-start: auto">
            <template #foot :ref="`template7`">
                <u-linear-layout :ref="`linear_layout9`">
                    <u-button :ref="`button3`" :key="`button3`" :color="`primary`" :text="`提交修改`" @click="button3_click($event)" v-if="isUpdate"></u-button>
                    <u-button :ref="`button4`" :key="`button4`" :color="`primary`" :text="`立即创建`" @click="button4_click($event)" v-if="!isUpdate"></u-button>
                </u-linear-layout>
            </template>
            <template #body :ref="`template8`">
                <u-form :ref="`saveModalForm`" key="saveModalForm">
                    <u-form-item
                        :ref="`form_item6`"
                        :required="true"
                        :rules="[
                            { validate: 'filled', message: `用户名不得为空`, trigger: 'input+blur', required: true },
                            { validate: 'excluded', args: [userNameList], message: `该用户名已存在`, trigger: 'input+blur' },
                        ]"
                        :ignoreValidation="isUpdate"
                    >
                        <u-input :ref="`input4`" :placeholder="`请输入用户名`" :value.sync="input.userName" :disabled="isUpdate"></u-input>
                        <template #label :ref="`template23`">
                            <u-text :ref="`text22`" :text="`用户名`"></u-text>
                        </template>
                    </u-form-item>
                    <u-form-item
                        :ref="`form_item7`"
                        :key="`form_item7`"
                        :required="true"
                        :rules="[
                            { validate: 'required', message: `密码不得为空`, trigger: 'input+blur', required: true },
                            { validate: 'rangeLength', args: [8, 12], message: `请输入${8}-${12}个字符`, trigger: 'input+blur' },
                            { validate: '^azAZ09-_$', message: `以字母、数字、'-'或'_'组成`, trigger: 'input+blur' },
                        ]"
                        :ignoreValidation="(isUpdate && (input || {}).source != 'Normal') || (input || {}).password == oldPassword"
                        v-if="(input || {}).source == 'Normal'"
                    >
                        <u-input :ref="`input5`" :placeholder="`请输入8-12位普通登录密码`" :value.sync="input.password" :password="true" :type="`password`"></u-input>
                        <template #label :ref="`template24`">
                            <u-text :ref="`text23`" :text="`登录密码`"></u-text>
                        </template>
                    </u-form-item>
                    <u-form-item :ref="`form_item8`" :rules="[{ validate: 'mobile', args: [`zh-CN`, undefined], message: `请输入合法的手机号码`, trigger: 'input+blur' }]">
                        <u-input :ref="`input6`" :placeholder="`请输入手机号`" :value.sync="input.phone"></u-input>
                        <template #label :ref="`template25`">
                            <u-text :ref="`text24`" :text="`手机号`"></u-text>
                        </template>
                    </u-form-item>
                    <u-form-item :ref="`form_item9`" :rules="[{ validate: 'email', message: `请输入正确的邮箱`, trigger: 'input+blur' }]">
                        <u-input :ref="`input7`" :placeholder="`请输入邮箱`" :value.sync="input.email"></u-input>
                        <template #label :ref="`template26`">
                            <u-text :ref="`text25`" :text="`邮箱`"></u-text>
                        </template>
                    </u-form-item>
                    <u-form-item :ref="`form_item10`">
                        <u-input :ref="`input8`" :placeholder="`请输入昵称`" :value.sync="input.displayName"></u-input>
                        <template #label :ref="`template27`">
                            <u-text :ref="`text26`" :text="`昵称`"></u-text>
                        </template>
                    </u-form-item>
                    <u-form-item :ref="`form_item3`" :key="`form_item3`" v-if="isUpdate">
                        <u-select :ref="`select1`" :placeholder="`请选择`" :valueField="`value`" :dataSource="$utils['EnumToList']({ concept: 'TypeAnnotation', typeKind: 'reference', typeNamespace: 'app.enums', typeName: 'UserStatusEnum', typeArguments: null, returnType: null, properties: null, changedTime: 1676988664861, name: '' })" :value.sync="input.status" key="select1"></u-select>
                        <template #label :ref="`template28`">
                            <u-text :ref="`text27`" :text="`状态`"></u-text>
                        </template>
                    </u-form-item>
                    <u-form-item :ref="`form_item2`" :required="true">
                        <u-input :ref="`input2`" :placeholder="`普通登录`" :value="$utils['EnumValueToText']((input || {}).source, { concept: 'TypeAnnotation', typeKind: 'reference', typeNamespace: 'app.enums', typeName: 'UserSourceEnum', typeArguments: null, returnType: null, properties: null, changedTime: 1710904712847 })" :disabled="true"></u-input>
                        <template #label :ref="`template29`">
                            <u-text :ref="`text28`" :text="`用户来源`"></u-text>
                        </template>
                    </u-form-item>
                    <u-form-item :ref="`form_item_10`" :required="false" :rules="[]" style="--custom-start: auto">
                        <template #label :ref="`template_119`">
                            <u-text :ref="`text_283`" :text="`直属主管`"></u-text>
                        </template>
                        <u-select :ref="`select_1`" :clearable="true" :placeholder="`请选择`" :dataSource="$global.useDatabaseCallback()(__select_1_handleDataSourceLoad)" :pageSize="50" :dataSchema="`LoadUserManagementSelect_1Structure`" :textField="`lCAPUser.userName`" :valueField="`lCAPUser.userId`" :pagination="true" :value.sync="input.directLeaderId" :filterable="true" key="select_1"></u-select>
                    </u-form-item>
                </u-form>
            </template>
            <template #title :ref="`template9`">
                <div :ref="`div1`" :key="`div1`" v-if="isUpdate">
                    <u-text :ref="`text6`" :text="`修改用户`"></u-text>
                </div>
                <div :ref="`div2`" :key="`div2`" v-if="!isUpdate">
                    <u-text :ref="`text7`" :text="`创建普通用户`"></u-text>
                </div>
            </template>
        </u-modal>
        <u-modal :ref="`deleteModal`" icon="" style="--custom-start: auto">
            <template #foot :ref="`template10`">
                <u-linear-layout :ref="`linear_layout10`">
                    <u-button :ref="`button5`" :color="`primary`" :text="`确定`" @click="button5_click($event)"></u-button>
                    <u-button :ref="`button6`" :text="`取消`" @click="button6_click($event)"></u-button>
                </u-linear-layout>
            </template>
            <template #body :ref="`template11`">
                <u-text :ref="`text8`" :text="`该用户相关的角色关联关系都会被删除！`" :display="`block`" style="--custom-start: auto"></u-text>
                <u-text :ref="`text10`" :text="`确认删除用户：`"></u-text>
                <u-text :ref="`text_11`" :text="$utils['ToString']('nasl.core.String', (deleteUserBody || {}).userName)" style="--custom-start: auto"></u-text>
                <u-text :ref="`text11`" :text="` ？`"></u-text>
            </template>
            <template #title :ref="`template12`">
                <u-text :ref="`text9`" :text="`删除用户 `"></u-text>
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
            ["input"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPUser", undefined),
            ["filter"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPUser", undefined),
            ["isUpdate"]: undefined,
            ["deleteUserBody"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPUser", undefined),
            ["userNameList"]: this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", undefined),
            ["updateUserName"]: undefined,
            ["oldPassword"]: undefined,
        };
    },
    computed: {},
    meta: {
        title: "用户管理",
        crumb: "",
        crumbI18n: undefined,
        first: undefined,
        auth: "loginAuth",
    },
    methods: {
        async load(params) {
            params = this.$genInitFromSchema("nasl.ui.DataSourceParams", params === undefined ? (this.$route.query.hasOwnProperty("params") ? this.$genInitFromSchema("nasl.ui.DataSourceParams", this.$route.query.params) : undefined) : params);
            let result = this.$genInitFromSchema("{list: nasl.collection.List<app.structures.LCAPGetUserResult>, total: nasl.core.Long}", undefined);

            result = this.$genInitFromSchema(
                "{list: nasl.collection.List<app.structures.LCAPGetUserResult>, total: nasl.core.Long}",
                await this.$logics["app.logics.LCAPGetUserTableView"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "ec256e2321d043a68b520559ee0e73bd",
                    },
                    path: {},
                    body: {
                        page: (params || {}).page,
                        size: (params || {}).size,
                        sort: (params || {}).sort,
                        order: (params || {}).order,
                        filter: this.filter,
                    },
                })
            );
            return result;
        },
        async getUserNameList() {
            let result = this.$genInitFromSchema("{list: nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>, total: nasl.core.Long}", undefined);

            result = this.$genInitFromSchema(
                "{list: nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>, total: nasl.core.Long}",
                await this.$logics["app.logics.LCAPGetAllUsers"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "4cf74e40cae3410db8d2bcc2b95d19f1",
                    },
                    path: {},
                    body: {},
                })
            );
            var $forEachListVariable8894 = (result || {}).list;
            var $forEachStartVariable8894 = 0;
            var $forEachEndVariable8894 = ((result || {}).list || {}).length;
            if (Array.isArray($forEachListVariable8894)) {
                for (let index = $forEachStartVariable8894; index < $forEachEndVariable8894; index++) {
                    const item = $forEachListVariable8894[index];
                    this.$utils["Add"](this.userNameList, ((item || {}).lCAPUser || {}).userName);
                }
            }

            return result;
        },
        async isUserNameRepeated(userName) {
            userName = userName === undefined ? (this.$route.query.hasOwnProperty("userName") ? this.$genInitFromSchema("nasl.core.String", this.$route.query.userName) : ``) : userName;
            let result = undefined;

            result = await this.$logics["app.logics.LCAPIsUserNameRepeated"]({
                config: {
                    download: false,
                },
                query: {},
                headers: {
                    "lcap-calllogic-uuid": "90def9479ab940699bc17fcfda7850d8",
                },
                path: {},
                body: {
                    userName: userName,
                },
            });
            if ((this.input || {}).userName == this.updateUserName && this.isUpdate) {
                result = false;
            } else {
            }

            return result;
        },
        async submit() {
            let inputCopy = this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPUser", undefined);

            if (await this.isUserNameRepeated((this.input || {}).userName)) {
                await this.$toast.show(this.$utils["ToString"]("nasl.core.String", `重复的用户名！`));
            } else {
                if ((this.$genInitFromSchema("nasl.ui.ValidateResult", await (this.$refs && this.$refs[`saveModalForm`] && this.$refs[`saveModalForm`].validate && this.$refs[`saveModalForm`].validate())) || {}).valid) {
                    inputCopy = this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPUser", this.$utils["Clone"](this.input));
                    if (this.isUpdate == true) {
                        if (this.oldPassword == (this.input || {}).password) {
                            await this.$logics["app.logics.LCAPUpdateNormalUser"]({
                                config: {
                                    download: false,
                                },
                                query: {},
                                headers: {
                                    "lcap-calllogic-uuid": "247522bb843b45ea98069453e90f2efb",
                                },
                                path: {},
                                body: {
                                    user: inputCopy,
                                    isChange: false,
                                },
                            });
                        } else {
                            await this.$logics["app.logics.LCAPUpdateNormalUser"]({
                                config: {
                                    download: false,
                                },
                                query: {},
                                headers: {
                                    "lcap-calllogic-uuid": "4d6b7110d9b24ddbaf4f4e0ac174fb61",
                                },
                                path: {},
                                body: {
                                    user: inputCopy,
                                    isChange: true,
                                },
                            });
                        }
                    } else {
                        await this.$logics["app.logics.LCAPCreateNormalUser"]({
                            config: {
                                download: false,
                            },
                            query: {},
                            headers: {
                                "lcap-calllogic-uuid": "71c8ae84eaa7481aa0cf588d76d16fdc",
                            },
                            path: {},
                            body: {
                                user: inputCopy,
                            },
                        });
                    }

                    await (this.$refs && this.$refs[`saveModal`] && this.$refs[`saveModal`].close && this.$refs[`saveModal`].close());
                    await (this.$refs && this.$refs[`tableView`] && this.$refs[`tableView`].reload && this.$refs[`tableView`].reload());
                    await this.$toast.show(this.$utils["ToString"]("nasl.core.String", `操作成功！`));
                } else {
                }
            }

            return;
        },
        async userManagement_created(event) {
            await (async () => {
                this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPUser", this.$utils["Clear"](this.filter));
                return;
            })();
        },
        async button3_click(event) {
            await (async () => {
                await this.submit();
                return;
            })();
        },
        async button4_click(event) {
            await (async () => {
                await this.submit();
                return;
            })();
        },
        async button5_click(event) {
            await (async () => {
                await this.$logics["app.dataSources.defaultDS.entities.LCAPUser.logics.delete"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "6d5e5bb1b1754825ab17a119e1433fdb",
                    },
                    query: {
                        id: (this.deleteUserBody || {}).id,
                    },
                    body: {},
                });
                await this.$logics["app.dataSources.defaultDS.entities.LCAPUserDeptMapping.logics.deleteBy"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "1fc3e02ce59d4f819c516a28c907ab5b",
                    },
                    body: {
                        concept: "Function",
                        name: "filter",
                        returnExpression: this.$resolveRequestData({ concept: "BinaryExpression", operator: "==", left: { concept: "MemberExpression", object: { concept: "Identifier", name: "_", label: null, description: null, folded: false, offsetX: null, offsetY: null }, property: { concept: "Identifier", name: "userId", label: null, description: null, folded: false, offsetX: null, offsetY: null } }, right: { concept: "MemberExpression", value: (this.deleteUserBody || {}).userId, expression: "(this.deleteUserBody || {}).userId" } }),
                    },
                });
                await (this.$refs && this.$refs[`tableView`] && this.$refs[`tableView`].reload && this.$refs[`tableView`].reload());
                await (this.$refs && this.$refs[`deleteModal`] && this.$refs[`deleteModal`].close && this.$refs[`deleteModal`].close());
                await this.$toast.show(this.$utils["ToString"]("nasl.core.String", `删除成功！`));
                this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPUser", this.$utils["Clear"](this.deleteUserBody));
                return;
            })();
        },
        async button6_click(event) {
            await (async () => {
                await (this.$refs && this.$refs[`deleteModal`] && this.$refs[`deleteModal`].close && this.$refs[`deleteModal`].close());
                return;
            })();
        },
        async button7_click(event) {
            await (async () => {
                await (this.$refs && this.$refs[`tableView`] && this.$refs[`tableView`].reload && this.$refs[`tableView`].reload());
                return;
            })();
        },
        async button2_click(event) {
            await (async () => {
                this.isUpdate = false;
                this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPUser", this.$utils["Clear"](this.input));
                this.input.source = "Normal";
                await (this.$refs && this.$refs[`saveModal`] && this.$refs[`saveModal`].open && this.$refs[`saveModal`].open());
                return;
            })();
        },
        async link1_click(event, current) {
            await (async () => {
                this.isUpdate = true;
                this.input = this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPUser", this.$utils["Clone"](((current || {}).item || {}).user));
                this.oldPassword = (this.input || {}).password;
                this.updateUserName = (((current || {}).item || {}).user || {}).userName;
                await (this.$refs && this.$refs[`saveModal`] && this.$refs[`saveModal`].open && this.$refs[`saveModal`].open());
                return;
            })();
        },
        async link2_click(event, current) {
            await (async () => {
                this.deleteUserBody = ((current || {}).item || {}).user;
                await (this.$refs && this.$refs[`deleteModal`] && this.$refs[`deleteModal`].open && this.$refs[`deleteModal`].open());
                return;
            })();
        },
        async __select_1_handleDataSourceLoad(params) {
            this["__select_1_params"] = { ...params };
            return this.$genInitFromSchema(
                "{list: nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>, total: nasl.core.Long}",
                await this.$logics["app.logics.LCAPLoadUserManagementSelect"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "e8c24ecf09cc4db6996639dbe9fb7dfe",
                    },
                    path: {},
                    body: {
                        page: this.__select_1_params && this.__select_1_params.page,
                        size: this.__select_1_params && this.__select_1_params.size,
                        userId: (this.input || {}).userId,
                        name: this.__select_1_params && this.__select_1_params.filterText,
                    },
                })
            );
        },
    },
    async created() {
        await this.userManagement_created();
    },
};
</script>
