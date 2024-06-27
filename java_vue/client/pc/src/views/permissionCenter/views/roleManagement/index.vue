<template>
    <u-linear-layout :ref="`uLinearLayout1`" :type="`root`" :gap="`none`" style="background-color: #f5f6fa; height: 100%; --custom-start: auto; min-height: 200px">
        <u-router-view :ref="`router_view1`"></u-router-view>
        <u-linear-layout :ref="`linear_layout_265`" :direction="`horizontal`" :mode="`flex`" :alignment="`start`" :justify="`start`" :wrap="false" :gap="`none`" style="--update-key: j935; background-color: #f5f6fa; width: 100%; min-height: 200px; height: 100%">
            <u-linear-layout :ref="`linear_layout_266`" :direction="`horizontal`" :heightStretch="`false`" :widthStretch="`false`" style="width: 20%; height: 100%">
                <u-panel :ref="`panel_2`" :shadow="`never`" :bordered="false" style="--panel-body-padding-x: 0px; --panel-body-padding-y: 0px; border-style: solid; --update-key: kub3; border-top-width: 0px; border-left-width: 0px; border-right-width: 1px; border-bottom-width: 0px; border-top-right-radius: 0px; border-bottom-right-radius: 0px; border-color: #e5e5e5; height: 100%">
                    <template #title :ref="`template_56`">
                        <u-text :ref="`text_185`" :text="`角色列表`" style="font-size: 16px"></u-text>
                    </template>
                    <u-linear-layout :ref="`linear_layout_2`" :direction="`vertical`" :gap="`none`" style="margin-top: 0px; margin-left: 0px; margin-right: 0px; margin-bottom: 0px; --update-key: lyc0; width: 100%">
                        <u-linear-layout :ref="`linear_layout_290`" :direction="`horizontal`" :mode="`flex`" :justify="`center`" :alignment="`start`" style="--update-key: 3l7s; position: relative; left: 0; top: 0; text-align: center; width: 100%; margin-top: 15px; margin-bottom: 12px">
                            <u-button :ref="`button_1`" :color="`primary`" :text="`创建角色`" :icon="`add`" :widthStretch="`false`" :size="`normal`" @click="button_1_click($event)" style="--update-key: nq50; width: 90%; height: 32px"></u-button>
                        </u-linear-layout>
                        <u-linear-layout :ref="`linear_layout_4`" :gap="`none`" :mode="`block`" :direction="`horizontal`" :justify="`center`" style="width: 100%; --update-key: n19t; --custom-start: auto; height: calc(100vh - 210px)">
                            <u-table-view :ref="`tableView`" :valueField="`lCAPRole.id`" :dataSource="loadRole" :showTotal="true" :sorting="{ field: undefined, order: 'desc' }" :pagination="false" :showHead="false" :selectable="true" :value.sync="selectRoleId" :pageSize="20" :line="false" :accordion="false" :resizable="false" :configurable="false" :virtual="false" :striped="false" @select="tableView_select($event)" key="tableView" style="--table-view-row-hover-background: rgba(51, 126, 255, 0.12); text-align: left; --table-view-border-color: none; width: 100%; height: 100%; --custom-start: auto; --table-view-row-selected-background: rgba(51, 126, 255, 0.12); --list-view-item-color-selected: none; --list-view-item-padding: none; --list-view-item-background-hover: none">
                                <u-table-view-column :ref="`uTableViewColumn2`" width="">
                                    <template #cell="current" :ref="`template13`">
                                        <u-linear-layout :ref="`uLinearLayout12_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`" :layout="`inline`" :mode="`flex`" :alignment="`center`" :justify="`start`" :wrap="false" style="margin-left: 5px; --update-key: dewy">
                                            <i-ico :ref="`ico_20_${(current || {}).__nodeKey || (current || {}).index}`" :name="`//minio-api.codewave-test.163yun.com/lowcode-static/user/newtest/1713843695713_1711962366172_1708398687100_user-settings-line.svg`" :icotype="`only`">
                                                <u-text :ref="`text_311_${(current || {}).__nodeKey || (current || {}).index}`" :text="`图标`"></u-text>
                                            </i-ico>
                                            <u-text :ref="`uText8_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).lCAPRole || {}).name)" :overflow="`ellipsis`" style="--update-key: w8v1; --custom-start: auto"></u-text>
                                        </u-linear-layout>
                                    </template>
                                    <template #title :ref="`template18`">
                                        <u-text :ref="`text2`" :text="`角色名称`"></u-text>
                                    </template>
                                </u-table-view-column>
                                <u-table-view-column :ref="`uTableViewColumn4`" :width="40" :style="{}">
                                    <template #cell="current" :ref="`template15`">
                                        <u-linear-layout :ref="`uLinearLayout14_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`" :style="{}" style="text-align: left">
                                            <u-popup-combination :ref="`popup_combination_1_${(current || {}).__nodeKey || (current || {}).index}`" :key="`popup_combination_1_${(current || {}).__nodeKey || (current || {}).index}`" :placement="`right-start`" :display="`inline`" v-if="(((current || {}).item || {}).lCAPRole || {}).editable" style="border-top-width: 0px; border-left-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-style: solid; --update-key: oeai; --custom-start: auto">
                                                <template #reference :ref="`template_76_${(current || {}).__nodeKey || (current || {}).index}`">
                                                    <i-ico :ref="`ico_5_${(current || {}).__nodeKey || (current || {}).index}`" :name="`https://lcap-static-saas.nos-eastchina1.126.net/user/community1/1705393136356_pc_%E6%9B%B4%E5%A4%9A_%E7%BA%BF%E6%80%A7_16px.svg`" :icotype="`only`" style="--custom-start: auto; cursor: pointer">
                                                        <u-text :ref="`text_214_${(current || {}).__nodeKey || (current || {}).index}`" :text="`图标`"></u-text>
                                                    </i-ico>
                                                </template>
                                                <u-linear-layout :ref="`linear_layout_300_${(current || {}).__nodeKey || (current || {}).index}`" :direction="`horizontal`" :mode="`flex`" :justify="`start`" :alignment="`center`" style="height: 32px">
                                                    <u-link :ref="`link_4_${(current || {}).__nodeKey || (current || {}).index}`" :text="`修改`" @click="link_4_click($event, current)" style="font-size: 16px"></u-link>
                                                </u-linear-layout>
                                                <u-linear-layout :ref="`linear_layout_301_${(current || {}).__nodeKey || (current || {}).index}`" :direction="`horizontal`" :mode="`flex`" :justify="`start`" :alignment="`center`" style="height: 32px">
                                                    <u-link :ref="`link_3_${(current || {}).__nodeKey || (current || {}).index}`" :text="`删除`" @click="link_3_click($event, current)" style="font-size: 16px"></u-link>
                                                </u-linear-layout>
                                            </u-popup-combination>
                                        </u-linear-layout>
                                    </template>
                                    <template #title :ref="`template20`">
                                        <u-text :ref="`text4`" :text="`操作`"></u-text>
                                    </template>
                                </u-table-view-column>
                            </u-table-view>
                        </u-linear-layout>
                    </u-linear-layout>
                </u-panel>
            </u-linear-layout>
            <u-linear-layout :ref="`linear_layout_267`" :direction="`horizontal`" :mode="`block`" :heightStretch="`false`" :widthStretch="`false`" style="width: 80%; height: 100%">
                <u-panel :ref="`panel_3`" :bordered="false" :shadow="`never`" style="border-left-width: 0px; border-style: solid; --update-key: m52n; height: 100%; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-top-left-radius: 0px; border-bottom-left-radius: 0px">
                    <template #title :ref="`template_57`">
                        <u-linear-layout :ref="`linear_layout_281`" :direction="`horizontal`" style="--custom-start: auto">
                            <u-grid-layout :ref="`grid_layout_4`" style="--custom-start: auto"></u-grid-layout>
                        </u-linear-layout>
                        <u-linear-layout :ref="`linear_layout_294`" :direction="`horizontal`" :layout="`inline`" :mode="`flex`" :justify="`start`" :alignment="`start`" style="padding-top: 10px; --update-key: kxye">
                            <u-linear-layout :ref="`linear_layout_297`" :direction="`horizontal`" :widthStretch="`false`" :heightStretch="`false`" :layout="`none`" :mode="`flex`" :alignment="`center`" :justify="`center`" style="width: 45px; height: 45px; border-top-width: 0px; border-left-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-style: solid; --update-key: rws0; background-color: #ebf2ff; border-top-left-radius: 8px; border-top-right-radius: 8px; border-bottom-right-radius: 8px; border-bottom-left-radius: 8px; --custom-start: auto">
                                <i-ico :ref="`ico_12`" :name="`//minio-api.codewave-test.163yun.com/lowcode-static/user/newtest/1713843695713_1711962366172_1708398687100_user-settings-line.svg`" :icotype="`only`" style="font-size: 24px; color: #337eff">
                                    <u-text :ref="`text_303`" :text="`图标`"></u-text>
                                </i-ico>
                            </u-linear-layout>
                            <u-linear-layout :ref="`linear_layout_298`" :gap="`none`" :mode="`flex`" :direction="`vertical`" :justify="`start`" :alignment="`start`" style="margin-top: -5px; --update-key: l2ll">
                                <u-text :ref="`text_219`" :text="$utils['ToString']('nasl.core.String', (selectRole || {}).name)" :display="`block`" style="--custom-start: auto"></u-text>
                                <u-text :ref="`text_220`" :text="$utils['ToString']('nasl.core.String', (selectRole || {}).description)" style="margin-left: 0px; --update-key: m35j; font-size: 14px; color: #a1a1a1; --custom-start: auto"></u-text>
                            </u-linear-layout>
                        </u-linear-layout>
                    </template>
                    <u-tabs :ref="`tabs_1`" :appear="`line`" titleField="" valueField="" urlField="" closableField="">
                        <u-tab :ref="`tab_1`">
                            <template #title :ref="`template_67`">
                                <u-text :ref="`text_198`" :text="`人员管理`"></u-text>
                            </template>
                            <u-linear-layout :ref="`linear_layout_7`" :direction="`vertical`" style="width: 100%; --custom-start: auto">
                                <u-linear-layout :ref="`linear_layout_10`" style="--custom-start: auto">
                                    <u-button :ref="`uButton1`" :text="`添加用户`" :color="`primary`" :icon="`add`" @click="uButton1_click($event)" style="text-align: left; margin: 0 0 0 0; --custom-start: auto"></u-button>
                                </u-linear-layout>
                                <u-linear-layout :ref="`linear_layout_9`">
                                    <u-table-view :ref="`tableView1`" :dataSource="loadUserRoleByUserId" :valueField="`lCAPUserRoleMapping.id`" :showTotal="true" :pagination="true" :pageSize="20" :initialLoad="false" :designerMode="`success`" key="tableView1" style="width: auto">
                                        <u-table-view-column :ref="`uTableViewColumn3`" :type="`index`" :width="`60`">
                                            <template #title :ref="`template6`">
                                                <u-text :ref="`text3`" :text="`序号`"></u-text>
                                            </template>
                                        </u-table-view-column>
                                        <u-table-view-column :ref="`uTableViewColumn5`">
                                            <template #cell="current" :ref="`template4`">
                                                <u-linear-layout :ref="`uLinearLayout4_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                                    <u-text :ref="`uText2_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).lCAPUserRoleMapping || {}).userName)"></u-text>
                                                </u-linear-layout>
                                            </template>
                                            <template #title :ref="`template21`">
                                                <u-text :ref="`text5`" :text="`用户名`"></u-text>
                                            </template>
                                        </u-table-view-column>
                                        <u-table-view-column :ref="`uTableViewColumn6`">
                                            <template #cell="current" :ref="`template5`">
                                                <u-linear-layout :ref="`uLinearLayout5_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                                    <u-link :ref="`uLink1_${(current || {}).__nodeKey || (current || {}).index}`" :text="`移除 `" @click="uLink1_click($event, current)" style="color: #f24957"></u-link>
                                                </u-linear-layout>
                                            </template>
                                            <template #title :ref="`template22`">
                                                <u-text :ref="`text6`" :text="`操作`"></u-text>
                                            </template>
                                        </u-table-view-column>
                                    </u-table-view>
                                </u-linear-layout>
                            </u-linear-layout>
                        </u-tab>
                        <u-tab :ref="`tab_2`">
                            <template #title :ref="`template_68`">
                                <u-text :ref="`text_200`" :text="`功能权限 `"></u-text>
                            </template>
                            <u-linear-layout :ref="`linear_layout_5`" :direction="`vertical`" style="--custom-start: auto">
                                <u-linear-layout :ref="`linear_layout_6`">
                                    <u-button :ref="`uButton5`" :text="`新增功能权限`" :disabled="(selectRole || {}).editable == false" :color="`primary`" :icon="`add`" @click="uButton5_click($event)" style="margin: 0 0 15px 0; --custom-start: auto"></u-button>
                                </u-linear-layout>
                                <u-linear-layout :ref="`linear_layout_8`">
                                    <u-table-view :ref="`tableView2`" :dataSource="loadPermissionByRoleId" :showSizer="true" values="" :valueField="`id`" :showTotal="true" :pagination="true" :pageSize="20" key="tableView2" style="width: auto">
                                        <u-table-view-column :ref="`uTableViewColumn7`" :width="50" :type="`index`" style="height: auto; width: 40px">
                                            <template #title :ref="`template32`">
                                                <u-text :ref="`text8`" :text="`序号`"></u-text>
                                            </template>
                                        </u-table-view-column>
                                        <u-table-view-column :ref="`uTableViewColumn8`" :type="`normal`">
                                            <template #cell="current" :ref="`template33`">
                                                <u-linear-layout :ref="`uLinearLayout21_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                                    <u-text :ref="`uText16_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', ((current || {}).item || {}).name)"></u-text>
                                                </u-linear-layout>
                                            </template>
                                            <template #title :ref="`template34`">
                                                <u-text :ref="`text9`" :text="`权限名称`"></u-text>
                                            </template>
                                        </u-table-view-column>
                                        <u-table-view-column :ref="`uTableViewColumn9`">
                                            <template #cell="current" :ref="`template35`">
                                                <u-linear-layout :ref="`uLinearLayout22_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                                    <u-text :ref="`uText17_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', ((current || {}).item || {}).description)"></u-text>
                                                </u-linear-layout>
                                            </template>
                                            <template #title :ref="`template36`">
                                                <u-text :ref="`text14`" :text="`权限描述`"></u-text>
                                            </template>
                                        </u-table-view-column>
                                        <u-table-view-column :ref="`uTableViewColumn10`">
                                            <template #cell="current" :ref="`template37`">
                                                <u-linear-layout :ref="`uLinearLayout23_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                                    <u-link :ref="`uLink2_${(current || {}).__nodeKey || (current || {}).index}`" :text="`移除该权限`" :disabled="(selectRole || {}).editable == false" @click="uLink2_click($event, current)"></u-link>
                                                </u-linear-layout>
                                            </template>
                                            <template #title :ref="`template38`">
                                                <u-text :ref="`text15`" :text="`操作`"></u-text>
                                            </template>
                                        </u-table-view-column>
                                    </u-table-view>
                                </u-linear-layout>
                            </u-linear-layout>
                        </u-tab>
                        <u-tab :ref="`tab_3`">
                            <template #title :ref="`template_69`">
                                <u-text :ref="`text_202`" :text="`数据权限`"></u-text>
                            </template>
                            <u-grid-layout :ref="`grid_layout_6`">
                                <u-grid-layout-row :ref="`grid_layout_row_2`" :repeat="24" :gap="`none`" :justify="`start`">
                                    <u-grid-layout-column :ref="`grid_layout_column_4`" :span="5">
                                        <u-linear-layout :ref="`linear_layout_310`" :direction="`horizontal`" :wrap="true" :gap="`normal`" style="padding-top: 12px; --update-key: 24gj; padding-right: 16px; border-color: #e6e7eb; border-right-width: 1px; border-style: solid; border-top-width: 0px; border-left-width: 0px; border-bottom-width: 0px; width: 100%; --space-base: 0px; height: 100%">
                                            <u-linear-layout :ref="`linear_layout_311`" :direction="`horizontal`" :wrap="false" :gap="`normal`" :mode="`flex`" :justify="`start`" :alignment="`center`" style="width: 100%; --space-base: 0px">
                                                <u-capsules :ref="`capsules_2`" :value.sync="selectDataTypeName" :autoSelect="true" :widthStretch="`true`" @select="capsules_2_select($event)" style="width: 100%">
                                                    <u-capsule :ref="`capsule_3`" label="" :value="`entity`" style="width: 50%">
                                                        <u-text :ref="`text_225`" :text="`实体`"></u-text>
                                                    </u-capsule>
                                                    <u-capsule :ref="`capsule_4`" :value="`logic`" style="--custom-start: auto; width: 50vh">
                                                        <u-text :ref="`text_226`" :text="`逻辑`"></u-text>
                                                    </u-capsule>
                                                </u-capsules>
                                            </u-linear-layout>
                                            <u-linear-layout :ref="`linear_layout_312`" :direction="`horizontal`" :wrap="true" style="--update-key: wk4r; margin-top: 8px; margin-bottom: 8px; width: 100%">
                                                <u-input :ref="`input_1`" :placeholder="geninput_1_bindAttrs_placeholder_expression_viewMatchExpression()" :value.sync="searchDataMetaName" :prefix="`search`" :clearable="true" @input="input_1_input($event)" style="width: 100%"></u-input>
                                            </u-linear-layout>
                                            <u-linear-layout :ref="`linear_layout_313`" :mode="`block`" :direction="`horizontal`" :gap="`normal`" style="--update-key: wk4r; margin-top: 8px; margin-bottom: 8px; width: 100%; --space-base: 0px; --custom-start: auto; height: calc(100vh + -380px)">
                                                <u-table-view :ref="`tableView_1`" :dataSource="$global.useDatabaseCallback()(__tableView_1_handleDataSourceLoad)" :dataSchema="`LoadRoleManagementTableView_1Structure`" :pagination="false" :showSizer="true" :pageSize="20" :pageNumber="1" :showHead="false" :valueField="`id`" :initialLoad="false" :selectable="true" :value.sync="selectDataMeta.id" @select="tableView_1_select($event)" @load="tableView_1_load($event)" key="tableView_1" style="--table-view-row-hover-background: #e8f0ff; --table-view-border-color: #ffffff; --table-view-td-color: #53576a; height: 100%; --table-view-td-padding: 5px 6px 5px 10px; --custom-start: auto; --table-view-row-selected-background: #e8f0ff">
                                                    <u-table-view-column :ref="`table_view_column_2`" :field="`dataName`">
                                                        <template #expander="current" :ref="`template_81`">
                                                            <u-table-view-expander :ref="`table_view_expander_2_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                                                        </template>
                                                        <template #cell="current" :ref="`template_82`">
                                                            <u-linear-layout :ref="`linear_layout_314_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`normal`" :mode="`block`" :direction="`vertical`" style="--space-base: 0px; width: auto">
                                                                <u-text :ref="`text_235_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', ((current || {}).item || {}).showDataName)" :overflow="`ellipsis`" style="--update-key: rokl; color: #111; --custom-start: auto; white-space: nowrap"></u-text>
                                                                <u-text :ref="`text_282_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', ((current || {}).item || {}).dataDescription)" :overflow="`ellipsis`" :display="`inline`" :widthStretch="`false`" style="color: #999"></u-text>
                                                            </u-linear-layout>
                                                        </template>
                                                        <template #title :ref="`template_83`">
                                                            <u-text :ref="`text_236`" :text="`实体名`"></u-text>
                                                        </template>
                                                    </u-table-view-column>
                                                </u-table-view>
                                            </u-linear-layout>
                                        </u-linear-layout>
                                    </u-grid-layout-column>
                                    <u-grid-layout-column :ref="`grid_layout_column_5`" :span="19">
                                        <u-linear-layout :ref="`linear_layout_315`" :direction="`horizontal`" :wrap="true" :gap="`normal`" style="--space-base: 0px; padding-left: 18px; --update-key: bwhw">
                                            <u-linear-layout :ref="`linear_layout_316`" :direction="`horizontal`" :wrap="true" :mode="`flex`" :gap="`normal`" :justify="`space-between`" :alignment="`center`" style="--space-base: 0px">
                                                <u-linear-layout :ref="`linear_layout_325`" :key="`linear_layout_325`" :direction="`horizontal`" :wrap="false" :gap="`normal`" :mode="`flex`" :alignment="`center`" :widthStretch="`false`" :justify="`space-between`" v-if="selectDataTypeName == `entity`" style="--space-base: 0px; width: 80%">
                                                    <u-text :ref="`text_240`" :text="$utils['ToString']('nasl.core.String', gentext_240_bindAttrs_text_expression_viewMatchExpression())" :display="`inline`" :overflow="`ellipsis`" :widthStretch="`false`" style="--update-key: zas1; max-width: 30%; --custom-start: auto; font-family: PingFang SC; font-size: 14px; font-weight: 500; line-height: 22px; letter-spacing: 0em; color: #1e1f27; white-space: nowrap"></u-text>
                                                    <u-linear-layout :ref="`linear_layout_326`" :direction="`horizontal`" :wrap="true" style="overflow: hidden; --update-key: dyqv; max-width: 30%">
                                                        <u-text :ref="`text_284`" :text="$utils['ToString']('nasl.core.String', gentext_284_bindAttrs_text_expression_viewMatchExpression())" :display="`inline`" :overflow="`ellipsis`" style="--update-key: akse; --custom-start: auto; font-family: PingFang SC; font-size: 14px; font-weight: 500; line-height: 22px; letter-spacing: 0em; color: #1e1f27"></u-text>
                                                    </u-linear-layout>
                                                    <u-text :ref="`text_285`" :text="$utils['ToString']('nasl.core.String', gentext_285_bindAttrs_text_expression_viewMatchExpression())" :overflow="`ellipsis`" :widthStretch="`false`" style="--update-key: 6rwb; max-width: 30%; --custom-start: auto; font-family: PingFang SC; font-size: 14px; font-weight: 500; line-height: 22px; letter-spacing: 0em; color: #1e1f27; white-space: nowrap"></u-text>
                                                </u-linear-layout>
                                                <u-linear-layout :ref="`linear_layout_327`" :key="`linear_layout_327`" :direction="`horizontal`" :wrap="false" :gap="`normal`" :mode="`flex`" :alignment="`center`" :widthStretch="`false`" :justify="`space-between`" v-if="selectDataTypeName == `logic`" style="--space-base: 0px; width: 52%">
                                                    <u-text :ref="`text_297`" :text="$utils['ToString']('nasl.core.String', gentext_297_bindAttrs_text_expression_viewMatchExpression())" :display="`inline`" :overflow="`ellipsis`" :widthStretch="`false`" style="--update-key: 943n; max-width: 46%; --custom-start: auto; font-family: PingFang SC; font-size: 14px; font-weight: 500; line-height: 22px; letter-spacing: 0em; color: #1e1f27; white-space: nowrap"></u-text>
                                                    <u-linear-layout :ref="`linear_layout_328`" :direction="`horizontal`" :wrap="true" style="overflow: hidden; --update-key: dyqv; max-width: 46.5%">
                                                        <u-text :ref="`text_299`" :text="$utils['ToString']('nasl.core.String', gentext_299_bindAttrs_text_expression_viewMatchExpression())" :display="`inline`" :overflow="`ellipsis`" style="--update-key: akse; --custom-start: auto; font-family: PingFang SC; font-size: 14px; font-weight: 500; line-height: 22px; letter-spacing: 0em; color: #1e1f27"></u-text>
                                                    </u-linear-layout>
                                                </u-linear-layout>
                                                <u-button :ref="`button_3`" :color="`primary`" :text="`保存`" :disabled="saveEnabled" @click="button_3_click($event)"></u-button>
                                            </u-linear-layout>
                                            <u-linear-layout :ref="`linear_layout_317`" :direction="`horizontal`" :gap="`normal`" :mode="`flex`" :justify="`start`" :alignment="`start`" :wrap="false" style="--space-base: 0px; margin-top: 16px; --update-key: fd9s; margin-bottom: 28px">
                                                <u-text :ref="`text_241`" :text="`行权限`" :widthStretch="`false`" style="margin-right: 30px; --update-key: p4tp; --custom-start: auto; font-family: PingFang SC; font-size: 14px; font-weight: 500; line-height: 22px; letter-spacing: 0em; color: #1e1f27"></u-text>
                                                <u-radios :ref="`radios_1`" :value.sync="selectDataMeta.rowRuleType" @select="radios_1_select($event)" style="--radio-space-x: 14px">
                                                    <template #item="current" :ref="`template_88`"></template>
                                                    <u-radio :ref="`radio_1`" :label="`self`" :autofocus="true" :disabled="(selectDataMeta || {}).hasCreatedBy" v-tooltip="genradio_1_bindDirectives_tooltip_expression_viewMatchExpression()">
                                                        <template #item :ref="`template_89`">
                                                            <u-text :ref="`text_248`" :text="`可读本人`"></u-text>
                                                        </template>
                                                    </u-radio>
                                                    <u-radio :ref="`radio_7`" :label="`underling`" :disabled="(selectDataMeta || {}).hasCreatedBy" v-tooltip="genradio_7_bindDirectives_tooltip_expression_viewMatchExpression()">
                                                        <template #item :ref="`template_106`">
                                                            <u-text :ref="`text_280`" :text="`可读本人及下属`"></u-text>
                                                        </template>
                                                    </u-radio>
                                                    <u-radio :ref="`radio_8`" :label="`department`" :disabled="(selectDataMeta || {}).hasCreatedBy" v-tooltip="genradio_8_bindDirectives_tooltip_expression_viewMatchExpression()">
                                                        <template #item :ref="`template_107`">
                                                            <u-text :ref="`text_281`" :text="`可读本部门及下级部门`"></u-text>
                                                        </template>
                                                    </u-radio>
                                                    <u-radio :ref="`radio_2`" :label="`all`">
                                                        <template #item :ref="`template_90`">
                                                            <u-text :ref="`text_249`" :text="`可读全部`"></u-text>
                                                        </template>
                                                    </u-radio>
                                                    <u-radio :ref="`radio_3`" :label="`custom`">
                                                        <template #item :ref="`template_91`">
                                                            <u-text :ref="`text_250`" :text="`自定义`"></u-text>
                                                        </template>
                                                    </u-radio>
                                                </u-radios>
                                            </u-linear-layout>
                                            <u-linear-layout :ref="`linear_layout_320`" :key="`linear_layout_320`" :direction="`horizontal`" :wrap="false" :mode="`flex`" :justify="`start`" :alignment="`center`" v-if="(selectDataMeta || {}).rowRuleType == `custom`" style="margin-bottom: 20px; --update-key: 1k2q; width: 100%">
                                                <u-list-view :ref="`list_view_1`" :pageNumber="1" :pageSize="50" :widthStretch="`false`" :dataSource="customRowRuleList" :initialLoad="false" :border="false" :height="`auto`" :designerMode="`success`" emptyText="" key="list_view_1" style="min-width: 100px; width: 100%; --custom-start: auto; --list-view-item-background-hover: none; --list-view-item-padding: 0px 0px; --list-view-item-background-selected: none; --list-view-item-color-selected: none">
                                                    <template #item="current" :ref="`template_105`">
                                                        <u-linear-layout :ref="`linear_layout_324_${(current || {}).__nodeKey || (current || {}).index}`" :direction="`horizontal`" :wrap="false" :mode="`flex`" :justify="`start`" :alignment="`start`">
                                                            <u-text :ref="`text_263_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', $utils['ToString']('nasl.core.String', `条件`) + $utils['ToString']('nasl.core.Long', $global.add((current || {}).index, 1)))" style="margin-right: 8px; --update-key: y3ws; margin-top: 6px; --custom-start: auto; white-space: nowrap"></u-text>
                                                            <u-linear-layout :ref="`linear_layout_321_${(current || {}).__nodeKey || (current || {}).index}`" :wrap="false" :mode="`flex`" :direction="`vertical`" :alignment="`start`" :justify="`center`">
                                                                <u-linear-layout :ref="`linear_layout_322_${(current || {}).__nodeKey || (current || {}).index}`" :direction="`horizontal`" :widthStretch="`false`" :mode="`flex`" :justify="`start`" :alignment="`center`" :wrap="false" style="width: 100%">
                                                                    <u-validator :ref="`validator_1_${(current || {}).__nodeKey || (current || {}).index}`" label="" :validatingValue="((current || {}).item || {}).propertyName" :rules="[{ validate: 'filled', message: `不得为空`, trigger: 'input+blur', required: true }]" :message="`不得为空`" :placement="`bottom`" :appendTo="`reference`" style="margin-right: 8px; --update-key: q1ue">
                                                                        <u-select :ref="`select_1_${(current || {}).__nodeKey || (current || {}).index}`" :placeholder="`请选择`" :pagination="true" :pageSize="50" :value.sync="current.item.propertyName" :dataSource="((current || {}).item || {}).propertys" :textField="`propertyTitle`" :valueField="`propertyName`" :appendTo="`body`" :width="`small`" @select="select_1_select($event, current)" @change="select_1_change($event, current)" key="select_1"></u-select>
                                                                    </u-validator>
                                                                    <u-validator :ref="`validator_2_${(current || {}).__nodeKey || (current || {}).index}`" label="" :validatingValue="((current || {}).item || {}).comparison" :rules="[{ validate: 'filled', message: `不得为空`, trigger: 'input+blur', required: true }]" :message="`不得为空`" :placement="`bottom`" style="margin-right: 8px; --update-key: hr39">
                                                                        <u-select :ref="`select_2_${(current || {}).__nodeKey || (current || {}).index}`" :placeholder="`请选择`" :pagination="true" :pageSize="50" :value.sync="current.item.comparison" :dataSource="((current || {}).item || {}).comparisons" :textField="`text`" :valueField="`value`" :sorting="`{ field: undefined, order: \\'asc\\' }`" iconField="" :appendTo="`body`" :width="`small`" @select="select_2_select($event, current)" key="select_2"></u-select>
                                                                    </u-validator>
                                                                    <u-validator :ref="`validator_4_${(current || {}).__nodeKey || (current || {}).index}`" label="" :validatingValue="((current || {}).item || {}).valuesType" :rules="[{ validate: 'filled', message: `不得为空`, trigger: 'input+blur', required: true }]" :message="`不得为空`" :placement="`bottom`">
                                                                        <u-select :ref="`select_4_${(current || {}).__nodeKey || (current || {}).index}`" :placeholder="`请选择`" :pagination="true" :pageSize="50" :value.sync="current.item.valuesType" textField="" valueField="" :sorting="`{ field: undefined, order: \\'asc\\' }`" iconField="" :appendTo="`body`" :width="`small`" :dataSource="[`固定值`, `登录信息变量`]" @select="select_4_select($event, current)" key="select_4" style="margin-right: 8px; --update-key: 20cu"></u-select>
                                                                    </u-validator>
                                                                    <u-validator :ref="`validator_3_${(current || {}).__nodeKey || (current || {}).index}`" label="" :validatingValue="((current || {}).item || {}).values" :rules="[{ validate: 'filled', message: `不得为空`, trigger: 'input+blur', required: true }]" :message="`不得为空`" :placement="`bottom`">
                                                                        <u-input :ref="`input_3_${(current || {}).__nodeKey || (current || {}).index}`" :key="`input_3_${(current || {}).__nodeKey || (current || {}).index}`" :placeholder="geninput_3_bindAttrs_placeholder_expression_viewMatchExpression(current)" :value.sync="current.item.values" @change="input_3_change($event, current)" @blur="input_3_blur($event, current)" v-if="(((current || {}).item || {}).propertyType == `String` || ((((current || {}).item || {}).comparison == `in` || ((current || {}).item || {}).comparison == `notIn`) && ((current || {}).item || {}).propertyType == `Enum`) || ((current || {}).item || {}).propertyType == `Integer` || ((current || {}).item || {}).propertyType == `Decimal` || !$utils['HasValue']({ type: 'nasl.core.String', value: ((current || {}).item || {}).propertyType })) && ((current || {}).item || {}).valuesType == `固定值`"></u-input>
                                                                        <u-number-input :ref="`number_input_1_${(current || {}).__nodeKey || (current || {}).index}`" :key="`number_input_1_${(current || {}).__nodeKey || (current || {}).index}`" value="" :unit="{ type: 'prefix', value: '' }" :advancedFormat="{ value: '' }" :placeholder="gennumber_input_1_bindAttrs_placeholder_expression_viewMatchExpression(current)" :hideButtons="true" :decimalLength="gennumber_input_1_bindAttrs_decimalLength_expression_viewMatchExpression(current)" @input="number_input_1_input($event, current)" v-if="((((current || {}).item || {}).propertyType == `Integer` && ((current || {}).item || {}).comparison != `in` && ((current || {}).item || {}).comparison != `notIn`) || (((current || {}).item || {}).propertyType == `Decimal` && ((current || {}).item || {}).comparison != `in` && ((current || {}).item || {}).comparison != `notIn`)) && false && ((current || {}).item || {}).valuesType == `固定值`"></u-number-input>
                                                                        <u-select :ref="`select_3_${(current || {}).__nodeKey || (current || {}).index}`" :key="`select_3_${(current || {}).__nodeKey || (current || {}).index}`" :placeholder="`请选择布尔值`" :pagination="true" :pageSize="50" :value.sync="current.item.values" :dataSource="[`true`, `false`]" textField="" valueField="" :sorting="`{ field: undefined, order: \\'asc\\' }`" iconField="" :appendTo="`body`" @select="select_3_select($event, current)" v-if="((current || {}).item || {}).propertyType == `Boolean` && ((current || {}).item || {}).valuesType == `固定值`" key="select_3"></u-select>
                                                                        <u-date-picker :ref="`date_picker_1_${(current || {}).__nodeKey || (current || {}).index}`" :key="`date_picker_1_${(current || {}).__nodeKey || (current || {}).index}`" :value.sync="current.item.values" :width="`normal`" @change="date_picker_1_change($event, current)" v-if="((current || {}).item || {}).propertyType == `Date` && ((current || {}).item || {}).valuesType == `固定值`"></u-date-picker>
                                                                        <u-time-picker :ref="`time_picker_1_${(current || {}).__nodeKey || (current || {}).index}`" :key="`time_picker_1_${(current || {}).__nodeKey || (current || {}).index}`" :value.sync="current.item.values" :clearable="false" :showFormatter="`HH:mm:ss`" @change="time_picker_1_change($event, current)" v-if="((current || {}).item || {}).propertyType == `Time` && ((current || {}).item || {}).valuesType == `固定值`"></u-time-picker>
                                                                        <u-date-time-picker :ref="`date_time_picker_1_${(current || {}).__nodeKey || (current || {}).index}`" :key="`date_time_picker_1_${(current || {}).__nodeKey || (current || {}).index}`" :value.sync="current.item.values" :converter="`format`" :placeholder="`请选择日期时间`" @change="date_time_picker_1_change($event, current)" v-if="((current || {}).item || {}).propertyType == `DateTime` && ((current || {}).item || {}).valuesType == `固定值`"></u-date-time-picker>
                                                                        <u-select :ref="`select_5_${(current || {}).__nodeKey || (current || {}).index}`" :key="`select_5_${(current || {}).__nodeKey || (current || {}).index}`" :placeholder="`请选择`" :pagination="true" :pageSize="50" :value.sync="current.item.values" :dataSource="[`登录用户名`, `登录用户ID`, `登录用户部门标识`]" textField="" valueField="" :sorting="`{ field: undefined, order: \\'asc\\' }`" iconField="" :appendTo="`body`" @select="select_5_select($event, current)" v-if="((current || {}).item || {}).valuesType == `登录信息变量`" key="select_5"></u-select>
                                                                        <u-select :ref="`select_6_${(current || {}).__nodeKey || (current || {}).index}`" :key="`select_6_${(current || {}).__nodeKey || (current || {}).index}`" :placeholder="`请选择枚举值`" :pagination="true" :pageSize="50" :value.sync="current.item.values" :dataSource="((current || {}).item || {}).propertyOptions" :textField="`title`" :valueField="`code`" :sorting="`{ field: undefined, order: \\'asc\\' }`" iconField="" :appendTo="`body`" @select="select_6_select($event, current)" v-if="((current || {}).item || {}).comparison != `in` && ((current || {}).item || {}).comparison != `notIn` && ((current || {}).item || {}).propertyType == `Enum` && ((current || {}).item || {}).valuesType == `固定值`" key="select_6"></u-select>
                                                                    </u-validator>
                                                                    <i-ico :ref="`ico_11_${(current || {}).__nodeKey || (current || {}).index}`" :key="`ico_11_${(current || {}).__nodeKey || (current || {}).index}`" :name="`remove`" :icotype="`only`" @click="ico_11_click($event, current)" v-if="(current || {}).index != 0" style="margin-left: 8px; --update-key: aoyi">
                                                                        <u-text :ref="`text_266_${(current || {}).__nodeKey || (current || {}).index}`" :text="`图标`"></u-text>
                                                                    </i-ico>
                                                                </u-linear-layout>
                                                                <u-linear-layout :ref="`linear_layout_323_${(current || {}).__nodeKey || (current || {}).index}`" :direction="`horizontal`" :wrap="true" :widthStretch="`false`" style="width: 100%; margin-top: 14px; --update-key: jyp2; margin-bottom: 8px">
                                                                    <u-dropdown :ref="`dropdown_1_${(current || {}).__nodeKey || (current || {}).index}`" :key="`dropdown_1_${(current || {}).__nodeKey || (current || {}).index}`" value="" :appendTo="`body`" :router="true" :trigger="`hover`" :opened="false" v-if="(current || {}).index == $global.minus((customRowRuleList || {}).length, 1)">
                                                                        <template #title :ref="`template_129_${(current || {}).__nodeKey || (current || {}).index}`">
                                                                            <u-text :ref="`text_300_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', relationStr)"></u-text>
                                                                        </template>
                                                                        <u-dropdown-item :ref="`dropdown_item_1_${(current || {}).__nodeKey || (current || {}).index}`" @click="dropdown_item_1_click($event, current)">
                                                                            <u-text :ref="`text_301_${(current || {}).__nodeKey || (current || {}).index}`" :text="`+且`"></u-text>
                                                                        </u-dropdown-item>
                                                                        <u-dropdown-item :ref="`dropdown_item_2_${(current || {}).__nodeKey || (current || {}).index}`" @click="dropdown_item_2_click($event, current)">
                                                                            <u-text :ref="`text_302_${(current || {}).__nodeKey || (current || {}).index}`" :text="`+或`"></u-text>
                                                                        </u-dropdown-item>
                                                                    </u-dropdown>
                                                                    <u-text :ref="`text_271_${(current || {}).__nodeKey || (current || {}).index}`" :key="`text_271_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', $utils['Replace'](relationStr, `+`, ``))" v-if="(current || {}).index != $global.minus((customRowRuleList || {}).length, 1)"></u-text>
                                                                </u-linear-layout>
                                                            </u-linear-layout>
                                                        </u-linear-layout>
                                                    </template>
                                                </u-list-view>
                                            </u-linear-layout>
                                            <u-linear-layout :ref="`linear_layout_318`" :direction="`horizontal`" :mode="`block`" :gap="`normal`" style="--space-base: 0px; --update-key: 3kmm; margin-bottom: 14px">
                                                <u-text :ref="`text_242`" :text="`列权限`" style="--custom-start: auto; font-family: PingFang SC; font-size: 14px; font-weight: 500; line-height: 22px; letter-spacing: 0em; color: #1e1f27"></u-text>
                                            </u-linear-layout>
                                            <u-linear-layout :ref="`linear_layout_319`" :direction="`horizontal`" :mode="`block`" :gap="`normal`" style="--space-base: 0px; --update-key: 1joa">
                                                <u-table-view :ref="`table_view_1`" :pagination="false" :pageSize="20" :pageNumber="1" :dataSource="$global.useDatabaseCallback()(__table_view_1_handleDataSourceLoad)" :initialLoad="false" key="table_view_1" style="--table-view-row-hover-background: #f5f6fa; --custom-start: auto; --table-view-td-line-height: 28px; --table-view-expander-size: 0px">
                                                    <u-table-view-column :ref="`table_view_column_3`" :key="`table_view_column_3`" :type="`expander`" :width="`35px`" v-if="selectDataTypeName == `logic`">
                                                        <template #expander="current" :ref="`template_92`">
                                                            <u-table-view-expander :ref="`table_view_expander_3_${(current || {}).__nodeKey || (current || {}).index}`" :key="`table_view_expander_3_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item" :expandIcon="`//minio-api.codewave-test.163yun.com/lowcode-static/user/newtest/1713165177814_%E5%87%8F%E5%B0%91_reduce.svg`" :collapseIcon="`//minio-api.codewave-test.163yun.com/lowcode-static/user/newtest/1713165187280_%E6%B7%BB%E5%8A%A0_add.svg`" v-if="$utils['HasValue']({ type: 'nasl.collection.List<app.structures.LCAPDataMetaColunmRule>', value: ((current || {}).item || {}).showPropertyNameList })" style="--update-key: ix0l; color: #8d90a0"></u-table-view-expander>
                                                        </template>
                                                        <template #title :ref="`template_93`"></template>
                                                        <template #cell="current" :ref="`template_94`"></template>
                                                        <template #expand-content="current" :ref="`template_108`">
                                                            <u-table-view :ref="`table_view_2_${(current || {}).__nodeKey || (current || {}).index}`" :pagination="false" :pageSize="20" :pageNumber="1" :initialLoad="true" :showHead="false" :dataSource="((current || {}).item || {}).showPropertyNameList" :sorting="`{ field: undefined, order: \\'asc\\' }`" valueField="" key="table_view_2" style="--custom-start: auto; --table-view-td-background-color: #f5f6fa">
                                                                <u-table-view-column :ref="`table_view_column_6_${(current || {}).__nodeKey || (current || {}).index}`" field="">
                                                                    <template #expander="current1" :ref="`template_109_${(current || {}).__nodeKey || (current || {}).index}`">
                                                                        <u-table-view-expander :ref="`table_view_expander_6_${(current || {}).__nodeKey || (current || {}).index}_${(current1 || {}).__nodeKey || (current1 || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                                                                    </template>
                                                                    <template #title :ref="`template_110_${(current || {}).__nodeKey || (current || {}).index}`">
                                                                        <u-text :ref="`text_286_${(current || {}).__nodeKey || (current || {}).index}`" :text="`表格列`"></u-text>
                                                                    </template>
                                                                    <template #cell="current1" :ref="`template_111_${(current || {}).__nodeKey || (current || {}).index}`">
                                                                        <u-text :ref="`text_287_${(current || {}).__nodeKey || (current || {}).index}_${(current1 || {}).__nodeKey || (current1 || {}).index}`" :text="$utils['ToString']('nasl.core.String', ((current1 || {}).item || {}).showPropertyName2)"></u-text>
                                                                    </template>
                                                                </u-table-view-column>
                                                                <u-table-view-column :ref="`table_view_column_9_${(current || {}).__nodeKey || (current || {}).index}`">
                                                                    <template #expander="current1" :ref="`template_119_${(current || {}).__nodeKey || (current || {}).index}`">
                                                                        <u-table-view-expander :ref="`table_view_expander_9_${(current || {}).__nodeKey || (current || {}).index}_${(current1 || {}).__nodeKey || (current1 || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                                                                    </template>
                                                                    <template #title :ref="`template_120_${(current || {}).__nodeKey || (current || {}).index}`">
                                                                        <u-text :ref="`text_293_${(current || {}).__nodeKey || (current || {}).index}`" :text="`表格列`"></u-text>
                                                                    </template>
                                                                    <template #cell="current1" :ref="`template_121_${(current || {}).__nodeKey || (current || {}).index}`">
                                                                        <u-text :ref="`text_295_${(current || {}).__nodeKey || (current || {}).index}_${(current1 || {}).__nodeKey || (current1 || {}).index}`" :text="$utils['ToString']('nasl.core.String', ((current1 || {}).item || {}).propertyTitle)"></u-text>
                                                                    </template>
                                                                </u-table-view-column>
                                                                <u-table-view-column :ref="`table_view_column_10_${(current || {}).__nodeKey || (current || {}).index}`">
                                                                    <template #expander="current1" :ref="`template_122_${(current || {}).__nodeKey || (current || {}).index}`">
                                                                        <u-table-view-expander :ref="`table_view_expander_10_${(current || {}).__nodeKey || (current || {}).index}_${(current1 || {}).__nodeKey || (current1 || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                                                                    </template>
                                                                    <template #title :ref="`template_123_${(current || {}).__nodeKey || (current || {}).index}`">
                                                                        <u-text :ref="`text_294_${(current || {}).__nodeKey || (current || {}).index}`" :text="`表格列`"></u-text>
                                                                    </template>
                                                                    <template #cell="current1" :ref="`template_124_${(current || {}).__nodeKey || (current || {}).index}`">
                                                                        <u-radios :ref="`radios_3_${(current || {}).__nodeKey || (current || {}).index}_${(current1 || {}).__nodeKey || (current1 || {}).index}`" :value.sync="current1.item.columnRule.columnRuleType" valueField="" :disabled="((current1 || {}).item || {}).isCheck" v-tooltip="genradios_3_bindDirectives_tooltip_expression_viewMatchExpression(current1, current)" @select="radios_3_select($event, current1, current)" style="--radio-space-x: 30px">
                                                                            <template #item="current2" :ref="`template_125_${(current || {}).__nodeKey || (current || {}).index}_${(current1 || {}).__nodeKey || (current1 || {}).index}`"></template>
                                                                            <u-radio :ref="`radio_9_${(current || {}).__nodeKey || (current || {}).index}_${(current1 || {}).__nodeKey || (current1 || {}).index}`" :label="`none`" style="--update-key: zydp">
                                                                                <template #item :ref="`template_126_${(current || {}).__nodeKey || (current || {}).index}_${(current1 || {}).__nodeKey || (current1 || {}).index}`">
                                                                                    <u-text :ref="`text_259_${(current || {}).__nodeKey || (current || {}).index}_${(current1 || {}).__nodeKey || (current1 || {}).index}`" :text="`无权限`"></u-text>
                                                                                </template>
                                                                            </u-radio>
                                                                            <u-radio :ref="`radio_10_${(current || {}).__nodeKey || (current || {}).index}_${(current1 || {}).__nodeKey || (current1 || {}).index}`" :label="`read`">
                                                                                <template #item :ref="`template_127_${(current || {}).__nodeKey || (current || {}).index}_${(current1 || {}).__nodeKey || (current1 || {}).index}`">
                                                                                    <u-text :ref="`text_260_${(current || {}).__nodeKey || (current || {}).index}_${(current1 || {}).__nodeKey || (current1 || {}).index}`" :text="`仅查看`"></u-text>
                                                                                </template>
                                                                            </u-radio>
                                                                            <u-radio :ref="`radio_11_${(current || {}).__nodeKey || (current || {}).index}_${(current1 || {}).__nodeKey || (current1 || {}).index}`" :key="`radio_11_${(current || {}).__nodeKey || (current || {}).index}_${(current1 || {}).__nodeKey || (current1 || {}).index}`" :label="`readWrite`" v-if="selectDataTypeName == `entity`">
                                                                                <template #item :ref="`template_128_${(current || {}).__nodeKey || (current || {}).index}_${(current1 || {}).__nodeKey || (current1 || {}).index}`">
                                                                                    <u-text :ref="`text_261_${(current || {}).__nodeKey || (current || {}).index}_${(current1 || {}).__nodeKey || (current1 || {}).index}`" :text="`查看并修改`"></u-text>
                                                                                </template>
                                                                            </u-radio>
                                                                        </u-radios>
                                                                    </template>
                                                                </u-table-view-column>
                                                            </u-table-view>
                                                        </template>
                                                    </u-table-view-column>
                                                    <u-table-view-column :ref="`table_view_column_7`" :type="`normal`">
                                                        <template #expander="current" :ref="`template_112`">
                                                            <u-table-view-expander :ref="`table_view_expander_7_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item" :expandIcon="`//minio-api.codewave-test.163yun.com/lowcode-static/user/newtest/1713164616714_%E6%B7%BB%E5%8A%A0_add.svg`" :collapseIcon="`//minio-api.codewave-test.163yun.com/lowcode-static/user/newtest/1713164649709_%E5%87%8F%E5%B0%91_reduce.svg`" style="--update-key: ix0l"></u-table-view-expander>
                                                        </template>
                                                        <template #title :ref="`template_113`">
                                                            <u-text :ref="`text_289`" :text="`属性名称`"></u-text>
                                                        </template>
                                                        <template #cell="current" :ref="`template_114`">
                                                            <u-text :ref="`text_290_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', ((current || {}).item || {}).showPropertyName)"></u-text>
                                                        </template>
                                                        <template #expand-content="current" :ref="`template_115`">
                                                            <u-table-view :ref="`table_view_3_${(current || {}).__nodeKey || (current || {}).index}`" :pagination="false" :pageSize="20" :pageNumber="1" :initialLoad="true" :showHead="false" :dataSource="((current || {}).item || {}).showPropertyNameList" :sorting="`{ field: undefined, order: \\'asc\\' }`" valueField="" key="table_view_3">
                                                                <u-table-view-column :ref="`table_view_column_8_${(current || {}).__nodeKey || (current || {}).index}`" field="">
                                                                    <template #expander="current1" :ref="`template_116_${(current || {}).__nodeKey || (current || {}).index}`">
                                                                        <u-table-view-expander :ref="`table_view_expander_8_${(current || {}).__nodeKey || (current || {}).index}_${(current1 || {}).__nodeKey || (current1 || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                                                                    </template>
                                                                    <template #title :ref="`template_117_${(current || {}).__nodeKey || (current || {}).index}`">
                                                                        <u-text :ref="`text_291_${(current || {}).__nodeKey || (current || {}).index}`" :text="`表格列`"></u-text>
                                                                    </template>
                                                                    <template #cell="current1" :ref="`template_118_${(current || {}).__nodeKey || (current || {}).index}`">
                                                                        <u-text :ref="`text_292_${(current || {}).__nodeKey || (current || {}).index}_${(current1 || {}).__nodeKey || (current1 || {}).index}`" :text="$utils['ToString']('app.structures.LCAPDataMetaColunmRule', (current1 || {}).item)"></u-text>
                                                                    </template>
                                                                </u-table-view-column>
                                                            </u-table-view>
                                                        </template>
                                                    </u-table-view-column>
                                                    <u-table-view-column :ref="`table_view_column_4`">
                                                        <template #expander="current" :ref="`template_95`">
                                                            <u-table-view-expander :ref="`table_view_expander_4_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                                                        </template>
                                                        <template #title :ref="`template_96`">
                                                            <u-text :ref="`text_252`" :text="`属性标题`"></u-text>
                                                        </template>
                                                        <template #cell="current" :ref="`template_97`">
                                                            <u-text :ref="`text_255_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', ((current || {}).item || {}).propertyTitle)"></u-text>
                                                        </template>
                                                    </u-table-view-column>
                                                    <u-table-view-column :ref="`table_view_column_5`" :width="`35%`">
                                                        <template #expander="current" :ref="`template_98`">
                                                            <u-table-view-expander :ref="`table_view_expander_5_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                                                        </template>
                                                        <template #title :ref="`template_99`">
                                                            <u-text :ref="`text_253`" :text="`权限`"></u-text>
                                                        </template>
                                                        <template #cell="current" :ref="`template_100`">
                                                            <u-radios :ref="`radios_2_${(current || {}).__nodeKey || (current || {}).index}`" :value.sync="current.item.columnRule.columnRuleType" valueField="" :disabled="((current || {}).item || {}).isCheck" v-tooltip="genradios_2_bindDirectives_tooltip_expression_viewMatchExpression(current)" @select="radios_2_select($event, current)">
                                                                <template #item="current1" :ref="`template_101_${(current || {}).__nodeKey || (current || {}).index}`"></template>
                                                                <u-radio :ref="`radio_4_${(current || {}).__nodeKey || (current || {}).index}`" :label="`none`" style="--update-key: zydp">
                                                                    <template #item :ref="`template_102_${(current || {}).__nodeKey || (current || {}).index}`">
                                                                        <u-text :ref="`text_256_${(current || {}).__nodeKey || (current || {}).index}`" :text="`无权限`"></u-text>
                                                                    </template>
                                                                </u-radio>
                                                                <u-radio :ref="`radio_5_${(current || {}).__nodeKey || (current || {}).index}`" :label="`read`">
                                                                    <template #item :ref="`template_103_${(current || {}).__nodeKey || (current || {}).index}`">
                                                                        <u-text :ref="`text_257_${(current || {}).__nodeKey || (current || {}).index}`" :text="`仅查看`"></u-text>
                                                                    </template>
                                                                </u-radio>
                                                                <u-radio :ref="`radio_6_${(current || {}).__nodeKey || (current || {}).index}`" :key="`radio_6_${(current || {}).__nodeKey || (current || {}).index}`" :label="`readWrite`" v-if="selectDataTypeName == `entity`">
                                                                    <template #item :ref="`template_104_${(current || {}).__nodeKey || (current || {}).index}`">
                                                                        <u-text :ref="`text_258_${(current || {}).__nodeKey || (current || {}).index}`" :text="`查看并修改`"></u-text>
                                                                    </template>
                                                                </u-radio>
                                                            </u-radios>
                                                        </template>
                                                    </u-table-view-column>
                                                </u-table-view>
                                            </u-linear-layout>
                                        </u-linear-layout>
                                    </u-grid-layout-column>
                                </u-grid-layout-row>
                            </u-grid-layout>
                        </u-tab>
                    </u-tabs>
                </u-panel>
            </u-linear-layout>
        </u-linear-layout>
        <u-modal :ref="`saveModal`" :showHead="true" :showFoot="true" style="--custom-start: auto">
            <template #foot :ref="`template1`">
                <u-linear-layout :ref="`uLinearLayout3`">
                    <u-button :ref="`uButton2`" :key="`uButton2`" :text="`添加`" :color="`primary`" @click="uButton2_click($event)" v-if="(inputRoleAddUser || {}).id == undefined"></u-button>
                    <u-button :ref="`button_5`" :text="`取消`" @click="button_5_click($event)"></u-button>
                </u-linear-layout>
            </template>
            <template #body :ref="`template2`">
                <u-form :ref="`form2`" key="form2">
                    <u-form-item :ref="`uFormItem2`">
                        <u-select :ref="`uSelect1`" :placeholder="`请选择用户名，支持搜索`" :dataSource="getRoleAddUser" :filterable="true" :value.sync="waitAddRoleUserIdList" :multiple="true" :remoteFiltering="true" :valueField="`lCAPUser.userId`" :pageable="true" :textField="`lCAPUser.userName`" :remotePaging="false" :clearable="true" :showRenderFooter="false" :pagination="true" :pageSize="10" key="uSelect1"></u-select>
                        <template #label :ref="`template23`">
                            <u-text :ref="`text7`" :text="`用户名`"></u-text>
                        </template>
                    </u-form-item>
                </u-form>
            </template>
            <template #title :ref="`template3`">
                <div :ref="`div2`" :key="`div2`" v-if="(inputRoleAddUser || {}).id == undefined">
                    <u-text :ref="`uText1`" :text="`请添加用户 `"></u-text>
                </div>
            </template>
        </u-modal>
        <u-modal :ref="`deleteUserRole`" :size="`normal`" :icon="`warning`" style="--custom-start: auto">
            <template #foot :ref="`template14`">
                <u-linear-layout :ref="`uLinearLayout13`">
                    <u-button :ref="`uButton11`" :color="`primary`" :text="`确定`" @click="uButton11_click($event)"></u-button>
                    <u-button :ref="`uButton12`" :text="`取消`" @click="uButton12_click($event)"></u-button>
                </u-linear-layout>
            </template>
            <template #body :ref="`template16`">
                <u-linear-layout :ref="`uLinearLayout15`" :direction="`vertical`">
                    <u-text :ref="`uText9`" :text="$utils['ToString']('nasl.core.String', $utils['ToString']('nasl.core.String', `移除后，该用户将失去`) + $utils['ToString']('nasl.core.String', (selectRole || {}).name) + $utils['ToString']('nasl.core.String', `对应的权限、资源关联关系！`))"></u-text>
                </u-linear-layout>
                <u-linear-layout :ref="`uLinearLayout16`" :direction="`vertical`">
                    <u-text :ref="`uText10`" :text="`确定移除成员：`"></u-text>
                    <u-text :ref="`uText11`" :text="$utils['ToString']('nasl.core.String', ((deleteUserRole || {}).lCAPUserRoleMapping || {}).userName)"></u-text>
                    <u-text :ref="`uText12`" :text="`？`"></u-text>
                </u-linear-layout>
            </template>
            <template #title :ref="`template19`">
                <u-text :ref="`text13`" :text="`移除成员`"></u-text>
            </template>
        </u-modal>
        <u-modal :ref="`removeResourcePopup`" icon="" style="--custom-start: auto">
            <template #foot :ref="`template24`">
                <u-linear-layout :ref="`uLinearLayout2`">
                    <u-button :ref="`uButton8`" :text="`确定`" :color="`primary`" @click="uButton8_click($event)"></u-button>
                    <u-button :ref="`uButton13`" :text="`取消`" @click="uButton13_click($event)"></u-button>
                </u-linear-layout>
            </template>
            <template #body :ref="`template25`">
                <u-linear-layout :ref="`linear_layout_283`" :direction="`horizontal`" style="--custom-start: auto">
                    <u-text :ref="`uText15`" :text="$utils['ToString']('nasl.core.String', (removePermission || {}).name)" style="--custom-start: auto"></u-text>
                </u-linear-layout>
            </template>
            <template #title :ref="`template28`">
                <u-text :ref="`uText13`" :text="`确定移除下面权限？`"></u-text>
            </template>
        </u-modal>
        <u-modal :ref="`selectResourcePopup`" :size="`huge`" style="--custom-start: auto">
            <template #foot :ref="`template29`">
                <u-linear-layout :ref="`uLinearLayout19`">
                    <u-button :ref="`uButton14`" :color="`primary`" :text="`确定`" @click="uButton14_click($event)"></u-button>
                    <u-button :ref="`uButton15`" :text="`取消`" @click="uButton15_click($event)"></u-button>
                </u-linear-layout>
            </template>
            <template #body :ref="`template30`">
                <u-linear-layout :ref="`uLinearLayout20`" :direction="`vertical`">
                    <u-table-view :ref="`tableView3`" :values="alreadySelectedPermissionIdList" :valueField="`lCAPPermission.id`" :pagination="true" :showSizer="true" :dataSource="getRoleAddPermission" key="tableView3">
                        <u-table-view-column :ref="`uTableViewColumn11`" :type="`checkbox`" :width="100">
                            <template #title :ref="`template39`">
                                <u-text :ref="`text16`" :text="`序号`"></u-text>
                            </template>
                        </u-table-view-column>
                        <u-table-view-column :ref="`uTableViewColumn12`">
                            <template #cell="current" :ref="`template40`">
                                <u-linear-layout :ref="`uLinearLayout24_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                    <u-text :ref="`uText18_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).lCAPPermission || {}).name)"></u-text>
                                </u-linear-layout>
                            </template>
                            <template #title :ref="`template41`">
                                <u-text :ref="`text17`" :text="`权限名称`"></u-text>
                            </template>
                        </u-table-view-column>
                        <u-table-view-column :ref="`uTableViewColumn13`">
                            <template #cell="current" :ref="`template42`">
                                <u-linear-layout :ref="`uLinearLayout25_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                    <u-text :ref="`uText19_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).lCAPPermission || {}).description)"></u-text>
                                </u-linear-layout>
                            </template>
                            <template #title :ref="`template43`">
                                <u-text :ref="`text18`" :text="`权限描述`"></u-text>
                            </template>
                        </u-table-view-column>
                    </u-table-view>
                </u-linear-layout>
            </template>
            <template #title :ref="`template31`">
                <u-text :ref="`uText14`" :text="`请勾选需要关联的权限`"></u-text>
            </template>
        </u-modal>
        <u-modal :ref="`createORUpdateRolePopup`" style="--custom-start: auto">
            <template #foot :ref="`template7`">
                <u-linear-layout :ref="`uLinearLayout6`">
                    <u-button :ref="`uButton6`" :key="`uButton6`" :text="`立即创建`" :color="`primary`" @click="uButton6_click($event)" v-if="!isUpdateRole"></u-button>
                    <u-button :ref="`uButton4`" :key="`uButton4`" :color="`primary`" :text="`提交修改 `" @click="uButton4_click($event)" v-if="isUpdateRole" style="--custom-start: auto"></u-button>
                    <u-button :ref="`uButton7`" :text="`取消`" @click="uButton7_click($event)"></u-button>
                </u-linear-layout>
            </template>
            <template #body :ref="`template8`">
                <u-linear-layout :ref="`uLinearLayout7`" :direction="`vertical`">
                    <u-form :ref="`form1`" key="form1">
                        <u-form-item :ref="`uFormItem5`" :required="true" :rules="[{ validate: 'filled', message: `角色名称不得为空`, trigger: 'input+blur', required: true }]">
                            <u-input :ref="`uInput4`" :placeholder="`请输入角色名称`" :value.sync="inputRole.name"></u-input>
                            <template #label :ref="`template26`">
                                <u-text :ref="`text10`" :text="`角色名称`"></u-text>
                            </template>
                        </u-form-item>
                        <u-form-item :ref="`uFormItem6`">
                            <u-input :ref="`uInput5`" :value.sync="inputRole.description" :placeholder="`请输入角色描述`"></u-input>
                            <template #label :ref="`template27`">
                                <u-text :ref="`text11`" :text="`角色描述`"></u-text>
                            </template>
                        </u-form-item>
                    </u-form>
                </u-linear-layout>
            </template>
            <template #title :ref="`template9`">
                <u-text :ref="`uText3`" :key="`uText3`" :text="`创建角色`" v-if="!isUpdateRole"></u-text>
                <u-text :ref="`text_2`" :key="`text_2`" :text="`修改角色`" v-if="isUpdateRole" style="--custom-start: auto"></u-text>
            </template>
        </u-modal>
        <u-modal :ref="`deleteRolePopup`" :size="`normal`" :icon="`warning`" style="--custom-start: auto">
            <template #foot :ref="`template10`">
                <u-linear-layout :ref="`uLinearLayout8`">
                    <u-button :ref="`uButton9`" :color="`primary`" :text="`确定`" @click="uButton9_click($event)"></u-button>
                    <u-button :ref="`uButton10`" :text="`取消`" @click="uButton10_click($event)"></u-button>
                </u-linear-layout>
            </template>
            <template #body :ref="`template11`">
                <u-linear-layout :ref="`uLinearLayout9`" :direction="`vertical`">
                    <u-text :ref="`uText4`" :text="`删除后，该角色对应的成员、权限、资源关联关系都会被删除！`"></u-text>
                </u-linear-layout>
                <u-linear-layout :ref="`uLinearLayout10`" :direction="`vertical`">
                    <u-text :ref="`uText5`" :text="`确定删除角色： `"></u-text>
                    <u-text :ref="`uText6`" :text="$utils['ToString']('nasl.core.String', (deleteRoleBody || {}).name)"></u-text>
                    <u-text :ref="`uText7`" :text="`？`"></u-text>
                </u-linear-layout>
            </template>
            <template #title :ref="`template12`">
                <u-text :ref="`text12`" :text="`删除角色`"></u-text>
            </template>
        </u-modal>
        <u-toast-single :ref="`toast_single_1`" :text="$utils['ToString']('nasl.core.String', $utils['ToString']('nasl.core.String', toastInfo) + $utils['ToString']('nasl.core.String', ` 属性值不得为空`))" :duration="2000" :color="`error`"></u-toast-single>
        <u-toast-single :ref="`toast_single_2`" :text="$utils['ToString']('nasl.core.String', $utils['ToString']('nasl.core.String', toastInfo) + $utils['ToString']('nasl.core.String', ` 比较符号不得为空`))" :duration="2000" :color="`error`"></u-toast-single>
        <u-toast-single :ref="`toast_single_3`" :text="$utils['ToString']('nasl.core.String', $utils['ToString']('nasl.core.String', toastInfo) + $utils['ToString']('nasl.core.String', ` 比较值不得为空`))" :duration="2000" :color="`error`"></u-toast-single>
        <u-toast-single :ref="`toast_single_4`" :text="$utils['ToString']('nasl.core.String', $utils['ToString']('nasl.core.String', toastInfo) + $utils['ToString']('nasl.core.String', ` 请输入正确的整数值`))" :duration="2000" :color="`error`"></u-toast-single>
        <u-toast-single :ref="`toast_single_5`" :text="$utils['ToString']('nasl.core.String', $utils['ToString']('nasl.core.String', toastInfo) + $utils['ToString']('nasl.core.String', ` 请输入正确的小数值`))" :duration="2000" :color="`error`"></u-toast-single>
        <u-toast-single :ref="`toast_single_6`" :text="$utils['ToString']('nasl.core.String', $utils['ToString']('nasl.core.String', toastInfo) + $utils['ToString']('nasl.core.String', ` 请输入正确的枚举值`))" :duration="2000" :color="`error`"></u-toast-single>
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
            ["filterRole"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPRole", undefined),
            ["inputRole"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPRole", undefined),
            ["deleteRoleBody"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPRole", undefined),
            ["updateRoleName"]: undefined,
            ["isUpdateRole"]: undefined,
            ["isNameRepeated"]: undefined,
            ["selectRole"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPRole", undefined),
            ["filterUser"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPUserRoleMapping", undefined),
            ["alreadyAddRoleUserIdList"]: this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", undefined),
            ["deleteUserRole"]: this.$genInitFromSchema("{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole, lCAPUserRoleMapping: app.dataSources.defaultDS.entities.LCAPUserRoleMapping}", undefined),
            ["waitAddRoleUserIdList"]: this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", undefined),
            ["inputRoleAddUser"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPUserRoleMapping", undefined),
            ["alreadyAddPermissionIdList"]: this.$genInitFromSchema("nasl.collection.List<nasl.core.Long>", undefined),
            ["removePermission"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPPermission", undefined),
            ["alreadySelectedPermissionIdList"]: this.$genInitFromSchema("nasl.collection.List<nasl.core.Long>", undefined),
            ["selectRoleId"]: undefined,
            ["selectDataTypeName"]: undefined,
            ["searchDataMetaName"]: undefined,
            ["selectDataMeta"]: this.$genInitFromSchema("app.structures.LCAPDataMetaStructure", undefined),
            ["saveEnabled"]: true,
            ["isSearch"]: false,
            ["dataPermission"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPDataPermission", undefined),
            ["updateColumnRuleList"]: this.$genInitFromSchema("nasl.collection.List<app.dataSources.defaultDS.entities.LCAPColumnRule>", undefined),
            ["customRowRuleList"]: this.$genInitFromSchema("nasl.collection.List<app.structures.LCAPDataMetaRowRule>", undefined),
            ["comparisonList"]: this.$genInitFromSchema("nasl.collection.List<app.structures.LCAPComparisonResult>", undefined),
            ["customColunmRuleList"]: this.$genInitFromSchema("nasl.collection.List<app.structures.LCAPDataMetaColunmRule>", undefined),
            ["toastInfo"]: undefined,
            ["isRoleSelect"]: false,
            ["relationStr"]: undefined,
        };
    },
    computed: {},
    meta: {
        title: "角色管理",
        crumb: undefined,
        crumbI18n: undefined,
        first: undefined,
        auth: "loginAuth",
    },
    methods: {
        async loadRole(params) {
            params = this.$genInitFromSchema("nasl.ui.DataSourceParams", params === undefined ? (this.$route.query.hasOwnProperty("params") ? this.$genInitFromSchema("nasl.ui.DataSourceParams", this.$route.query.params) : undefined) : params);
            let result = this.$genInitFromSchema("{list: nasl.collection.List<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole}>, total: nasl.core.Long}", undefined);

            result = this.$genInitFromSchema(
                "{list: nasl.collection.List<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole}>, total: nasl.core.Long}",
                await this.$logics["app.logics.LCAPLoadRoleManagementTableView"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "f4e4bddf-ef40-4a4a-9944-bf20ce8ce269",
                    },
                    path: {},
                    body: {
                        page: (params || {}).page,
                        size: (params || {}).size,
                        sort: (params || {}).sort,
                        order: (params || {}).order,
                        filter: this.filterRole,
                    },
                })
            );
            return result;
        },
        async isRoleNameRepeated(roleName) {
            roleName = roleName === undefined ? (this.$route.query.hasOwnProperty("roleName") ? this.$genInitFromSchema("nasl.core.String", this.$route.query.roleName) : ``) : roleName;
            let result = undefined;

            result = await this.$logics["app.logics.LCAPIsRoleNameRepeated"]({
                config: {
                    download: false,
                },
                query: {},
                headers: {
                    "lcap-calllogic-uuid": "4a5863ad-b644-4a63-9e8c-506978913a1f",
                },
                path: {},
                body: {
                    roleName: roleName,
                },
            });
            return result;
        },
        async loadUserRoleByUserId(params) {
            params = this.$genInitFromSchema("nasl.ui.DataSourceParams", params === undefined ? (this.$route.query.hasOwnProperty("params") ? this.$genInitFromSchema("nasl.ui.DataSourceParams", this.$route.query.params) : undefined) : params);
            let result = this.$genInitFromSchema("{list: nasl.collection.List<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole, lCAPUserRoleMapping: app.dataSources.defaultDS.entities.LCAPUserRoleMapping}>, total: nasl.core.Long}", undefined);

            this.filterUser.roleId = (this.selectRole || {}).id;
            result = this.$genInitFromSchema(
                "{list: nasl.collection.List<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole, lCAPUserRoleMapping: app.dataSources.defaultDS.entities.LCAPUserRoleMapping}>, total: nasl.core.Long}",
                await this.$logics["app.logics.LCAPLoadUserRoleMappingTableView"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "360846ae-d0a9-4b75-9e09-2fb8007d64a2",
                    },
                    path: {},
                    body: {
                        page: (params || {}).page,
                        size: (params || {}).size,
                        sort: (params || {}).sort,
                        order: (params || {}).order,
                        filter: this.filterUser,
                    },
                })
            );
            this.alreadyAddRoleUserIdList = this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", await this.$utils["ListTransformAsync"]((result || {}).list, (item) => ((item || {}).lCAPUserRoleMapping || {}).userId));
            return result;
        },
        async getRoleAddUser() {
            let returnBody = this.$genInitFromSchema("{list: nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>, total: nasl.core.Long}", undefined);
            let result = this.$genInitFromSchema("nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>", undefined);

            returnBody = this.$genInitFromSchema(
                "{list: nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>, total: nasl.core.Long}",
                await this.$logics["app.logics.LCAPLoadAddRoleUserTableView"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "261dcbdc-da3e-451d-86ef-193ee5230b4f",
                    },
                    path: {},
                    body: {
                        userIdList: this.alreadyAddRoleUserIdList,
                    },
                })
            );
            result = (returnBody || {}).list;
            await console.log(this.$utils["ToString"]("nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>", result));
            this.$utils["ListDistinct"](this.waitAddRoleUserIdList);
            return result;
        },
        async loadPermissionByRoleId() {
            let result = this.$genInitFromSchema("nasl.collection.List<app.dataSources.defaultDS.entities.LCAPPermission>", undefined);

            result = this.$genInitFromSchema(
                "nasl.collection.List<app.dataSources.defaultDS.entities.LCAPPermission>",
                await this.$logics["app.logics.LCAPGetPermissionByRoleId"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "56b7e4e0-61d8-4bae-821c-b6e199fe9ff9",
                    },
                    path: {},
                    body: {
                        roleId: (this.selectRole || {}).id,
                    },
                })
            );
            if ((result || {}).length == 0) {
                this.alreadyAddPermissionIdList = await (async () => {
                    const arr = [];
                    return arr;
                })();
            } else {
                this.alreadyAddPermissionIdList = this.$genInitFromSchema("nasl.collection.List<nasl.core.Long>", await this.$utils["ListTransformAsync"](result, (item) => (item || {}).id));
            }

            return result;
        },
        async getRoleAddPermission(params) {
            params = this.$genInitFromSchema("nasl.ui.DataSourceParams", params === undefined ? (this.$route.query.hasOwnProperty("params") ? this.$genInitFromSchema("nasl.ui.DataSourceParams", this.$route.query.params) : undefined) : params);
            let result = this.$genInitFromSchema("{list: nasl.collection.List<{lCAPPermission: app.dataSources.defaultDS.entities.LCAPPermission}>, total: nasl.core.Long}", undefined);

            result = this.$genInitFromSchema(
                "{list: nasl.collection.List<{lCAPPermission: app.dataSources.defaultDS.entities.LCAPPermission}>, total: nasl.core.Long}",
                await this.$logics["app.logics.LCAPLoadAddRolePermissionTableView"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "d55bb0b2-43b2-43df-bb4e-67a74318539f",
                    },
                    path: {},
                    body: {
                        page: (params || {}).page,
                        size: (params || {}).size,
                        sort: (params || {}).sort,
                        order: (params || {}).order,
                        permissionIdList: this.alreadyAddPermissionIdList,
                    },
                })
            );
            return result;
        },
        async loadDataMeta() {
            let result = this.$genInitFromSchema("nasl.collection.List<app.structures.LCAPDataMetaStructure>", undefined);

            result = this.$genInitFromSchema(
                "nasl.collection.List<app.structures.LCAPDataMetaStructure>",
                await this.$logics["app.logics.LCAPLoadDataMetaManagement"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "4b77ebac087f4872a2c0707bb0991d56",
                    },
                    path: {},
                    body: {
                        dataType: this.selectDataTypeName,
                        search: this.searchDataMetaName,
                    },
                })
            );
            if (this.$utils["HasValue"]({ type: "nasl.collection.List<app.structures.LCAPDataMetaStructure>", value: result })) {
                if (this.isSearch) {
                } else {
                    if (this.isRoleSelect) {
                        this.isRoleSelect = false;
                    } else {
                        this.selectDataMeta.id = (this.$genInitFromSchema("app.structures.LCAPDataMetaStructure", this.$utils["ListHead"](result)) || {}).id;
                    }
                }
            } else {
            }

            return result;
        },
        async loadDataMetaColunmRule() {
            let entityMeta = this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPEntityMeta", undefined);
            let logicMeta = this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPLogicMeta", undefined);
            let dataMetaProperty = this.$genInitFromSchema("app.structures.LCAPDataMetaColunmRule", undefined);
            let columnRuleList = this.$genInitFromSchema("nasl.collection.List<app.dataSources.defaultDS.entities.LCAPColumnRule>", undefined);
            let nameList = this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", undefined);
            let logicResult = this.$genInitFromSchema("nasl.collection.Map<nasl.core.String, nasl.collection.List<app.structures.LCAPDataMetaColunmRule>>", undefined);
            let logicNameList = this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", undefined);
            let mapList = this.$genInitFromSchema("nasl.collection.List<app.structures.LCAPDataMetaColunmRule>", undefined);
            let head = this.$genInitFromSchema("app.structures.LCAPDataMetaColunmRule", undefined);
            let filterList = this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", undefined);
            let searchList = this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", undefined);
            let propertyNameList = this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", undefined);
            let result = this.$genInitFromSchema("nasl.collection.List<app.structures.LCAPDataMetaColunmRule>", undefined);

            this.$genInitFromSchema("nasl.collection.List<app.dataSources.defaultDS.entities.LCAPColumnRule>", this.$utils["Clear"](this.updateColumnRuleList));
            this.$genInitFromSchema("nasl.collection.List<app.structures.LCAPDataMetaRowRule>", this.$utils["Clear"](this.customRowRuleList));
            this.$genInitFromSchema("nasl.collection.List<app.structures.LCAPDataMetaColunmRule>", this.$utils["Clear"](this.customColunmRuleList));
            this.saveEnabled = true;
            if (this.selectDataTypeName == `entity`) {
                entityMeta = this.$genInitFromSchema(
                    "app.dataSources.defaultDS.entities.LCAPEntityMeta",
                    await this.$logics["app.logics.LCAPGetEntityMetaById"]({
                        config: {
                            download: false,
                        },
                        query: {},
                        headers: {
                            "lcap-calllogic-uuid": "6e3dc19e4622478dba96e9aaad1ca9c2",
                        },
                        path: {},
                        body: {
                            id: (this.selectDataMeta || {}).id,
                        },
                    })
                );
                this.dataPermission = this.$genInitFromSchema(
                    "app.dataSources.defaultDS.entities.LCAPDataPermission",
                    await this.$logics["app.logics.LCAPGetDataPermissionByResourceName"]({
                        config: {
                            download: false,
                        },
                        query: {},
                        headers: {
                            "lcap-calllogic-uuid": "bab563bdaf5043c8be1582b03bac899d",
                        },
                        path: {},
                        body: {
                            resourceName: (entityMeta || {}).entityName,
                            resourceType: this.selectDataTypeName,
                            roleId: this.selectRoleId,
                        },
                    })
                );
                nameList = this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", this.$utils["Split"]((entityMeta || {}).entityName, `.`));
                if ((nameList || {}).length >= 2) {
                    this.selectDataMeta.defaultDataSource = this.$utils["Get"](nameList, 0);
                    this.selectDataMeta.showDataName = this.$utils["Get"](nameList, 1);
                } else {
                    this.selectDataMeta.defaultDataSource = (entityMeta || {}).entityName;
                    this.selectDataMeta.showDataName = (entityMeta || {}).entityName;
                }

                this.selectDataMeta.dataDescription = (entityMeta || {}).entityDescription;
                this.selectDataMeta.entityProperties = (entityMeta || {}).properties;
                this.selectDataMeta.id = (entityMeta || {}).id;
                this.selectDataMeta.logicProperties = this.$genInitFromSchema("nasl.collection.List<extensions.lcap_annotation_data_permission.structures.LogicPropertyStructure>", this.$utils["New"]({ concept: "TypeAnnotation", typeKind: "generic", typeNamespace: "nasl.collection", typeName: "List", typeArguments: [{ concept: "TypeAnnotation", typeKind: "reference", typeNamespace: "extensions.lcap_annotation_data_permission.structures", typeName: "LogicPropertyStructure", name: "T" }], returnType: null, properties: null, changedTime: 1712734282934 }));
                this.selectDataMeta.relation = (this.dataPermission || {}).relation;
                this.selectDataMeta.rowRuleType = (this.dataPermission || {}).rowRuleType;
                this.selectDataMeta.dataName = (entityMeta || {}).entityName;

                columnRuleList = this.$genInitFromSchema(
                    "nasl.collection.List<app.dataSources.defaultDS.entities.LCAPColumnRule>",
                    await this.$logics["app.logics.LCAPGetColumnRuleByDataPermissionId"]({
                        config: {
                            download: false,
                        },
                        query: {},
                        headers: {
                            "lcap-calllogic-uuid": "0f6d6d3318b543389042c9b784626995",
                        },
                        path: {},
                        body: {
                            dataPermissionId: (this.dataPermission || {}).id,
                        },
                    })
                );
                var $forEachListVariable8196 = (entityMeta || {}).properties;
                var $forEachStartVariable8196 = 0;
                var $forEachEndVariable8196 = ($forEachListVariable8196 || {}).length;
                if (Array.isArray($forEachListVariable8196)) {
                    for (let index = $forEachStartVariable8196; index < $forEachEndVariable8196; index++) {
                        const item = $forEachListVariable8196[index];
                        this.$genInitFromSchema("app.structures.LCAPDataMetaColunmRule", this.$utils["Clear"](dataMetaProperty));
                        this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", this.$utils["Clear"](nameList));
                        var $forEachListVariable7821 = columnRuleList;
                        var $forEachStartVariable7821 = 0;
                        var $forEachEndVariable7821 = ($forEachListVariable7821 || {}).length;
                        if (Array.isArray($forEachListVariable7821)) {
                            for (let index1 = $forEachStartVariable7821; index1 < $forEachEndVariable7821; index1++) {
                                const item1 = $forEachListVariable7821[index1];
                                if ((item || {}).propertyName == (item1 || {}).propertyName) {
                                    dataMetaProperty.propertyPermission = (item1 || {}).columnRuleType;
                                    dataMetaProperty.columnRule = item1;
                                } else {
                                }
                            }
                        }

                        dataMetaProperty.propertyName = (item || {}).propertyName;
                        dataMetaProperty.propertyTitle = (item || {}).propertyTitle;
                        dataMetaProperty.propertyTitlePath = (item || {}).columnName;
                        dataMetaProperty.propertyType = (item || {}).propertyType;
                        dataMetaProperty.propertyOptions = (item || {}).propertyOptions;

                        nameList = this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", this.$utils["Split"]((item || {}).propertyName, `.`));
                        if ((nameList || {}).length >= 2) {
                            dataMetaProperty.showPropertyName = this.$utils["Get"](nameList, 0);
                            dataMetaProperty.showPropertyName2 = this.$utils["Get"](nameList, 1);
                            if ((dataMetaProperty || {}).showPropertyName2 == `id` || (dataMetaProperty || {}).showPropertyName2 == `createdTime` || (dataMetaProperty || {}).showPropertyName2 == `updatedTime` || (dataMetaProperty || {}).showPropertyName2 == `createdBy` || (dataMetaProperty || {}).showPropertyName2 == `updatedBy`) {
                                dataMetaProperty.isCheck = true;
                            } else {
                                dataMetaProperty.isCheck = false;
                            }
                        } else {
                            dataMetaProperty.showPropertyName = (item || {}).propertyName;
                            dataMetaProperty.showPropertyName2 = undefined;
                            if ((dataMetaProperty || {}).showPropertyName == `id` || (dataMetaProperty || {}).showPropertyName == `createdTime` || (dataMetaProperty || {}).showPropertyName == `updatedTime` || (dataMetaProperty || {}).showPropertyName == `createdBy` || (dataMetaProperty || {}).showPropertyName == `updatedBy`) {
                                dataMetaProperty.isCheck = true;
                            } else {
                                dataMetaProperty.isCheck = false;
                            }
                        }

                        if (this.$utils["HasValue"]({ type: "nasl.core.Long", value: ((dataMetaProperty || {}).columnRule || {}).id })) {
                        } else {
                            dataMetaProperty.columnRule = this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPColumnRule", this.$utils["New"]({ concept: "TypeAnnotation", typeKind: "reference", typeNamespace: "app.dataSources.defaultDS.entities", typeName: "LCAPColumnRule" }));
                            dataMetaProperty.columnRule.dataPermissionId = (this.dataPermission || {}).id;
                            dataMetaProperty.columnRule.propertyName = (item || {}).propertyName;
                            dataMetaProperty.columnRule.columnRuleType = dataMetaProperty.propertyPermission = `readWrite`;
                        }

                        this.$utils["Add"](result, this.$genInitFromSchema("app.structures.LCAPDataMetaColunmRule", this.$utils["Clone"](dataMetaProperty)));
                    }
                }

                if (this.$utils["HasValue"]({ type: "nasl.collection.List<extensions.lcap_annotation_data_permission.structures.EntityPropertyStructure>", value: (entityMeta || {}).properties })) {
                    propertyNameList = this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", await this.$utils["ListTransformAsync"]((entityMeta || {}).properties, (item) => (item || {}).propertyName));
                    if (!this.$utils["Contains"](propertyNameList, `createdBy`)) {
                        this.selectDataMeta.hasCreatedBy = true;
                    } else {
                        this.selectDataMeta.hasCreatedBy = false;
                    }
                } else {
                }
            } else {
                logicMeta = this.$genInitFromSchema(
                    "app.dataSources.defaultDS.entities.LCAPLogicMeta",
                    await this.$logics["app.logics.LCAPGetLogicMetaById"]({
                        config: {
                            download: false,
                        },
                        query: {},
                        headers: {
                            "lcap-calllogic-uuid": "2fddeda154274f3cbc852aaa9e69c895",
                        },
                        path: {},
                        body: {
                            id: (this.selectDataMeta || {}).id,
                        },
                    })
                );
                this.dataPermission = this.$genInitFromSchema(
                    "app.dataSources.defaultDS.entities.LCAPDataPermission",
                    await this.$logics["app.logics.LCAPGetDataPermissionByResourceName"]({
                        config: {
                            download: false,
                        },
                        query: {},
                        headers: {
                            "lcap-calllogic-uuid": "a8190be6a8fe421eb39983718555a89b",
                        },
                        path: {},
                        body: {
                            resourceName: (logicMeta || {}).logicName,
                            resourceType: this.selectDataTypeName,
                            roleId: this.selectRoleId,
                        },
                    })
                );
                nameList = this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", this.$utils["Split"]((logicMeta || {}).logicName, `.`));
                if ((nameList || {}).length >= 2) {
                    this.selectDataMeta.defaultDataSource = this.$utils["Get"](nameList, 0);
                    this.selectDataMeta.showDataName = this.$utils["Get"](nameList, 1);
                } else {
                    this.selectDataMeta.defaultDataSource = (logicMeta || {}).logicName;
                    this.selectDataMeta.showDataName = (logicMeta || {}).logicName;
                }

                this.selectDataMeta.dataDescription = (logicMeta || {}).logicDescription;
                this.selectDataMeta.entityProperties = this.$genInitFromSchema("nasl.collection.List<extensions.lcap_annotation_data_permission.structures.EntityPropertyStructure>", this.$utils["New"]({ concept: "TypeAnnotation", typeKind: "generic", typeNamespace: "nasl.collection", typeName: "List", typeArguments: [{ concept: "TypeAnnotation", typeKind: "reference", typeNamespace: "extensions.lcap_annotation_data_permission.structures", typeName: "EntityPropertyStructure", name: "T" }], returnType: null, properties: null, changedTime: 1712734266158 }));
                this.selectDataMeta.id = (logicMeta || {}).id;
                this.selectDataMeta.logicProperties = (logicMeta || {}).properties;
                this.selectDataMeta.relation = (this.dataPermission || {}).relation;
                this.selectDataMeta.rowRuleType = (this.dataPermission || {}).rowRuleType;
                this.selectDataMeta.dataName = (logicMeta || {}).logicName;

                columnRuleList = this.$genInitFromSchema(
                    "nasl.collection.List<app.dataSources.defaultDS.entities.LCAPColumnRule>",
                    await this.$logics["app.logics.LCAPGetColumnRuleByDataPermissionId"]({
                        config: {
                            download: false,
                        },
                        query: {},
                        headers: {
                            "lcap-calllogic-uuid": "0ba01782705e452485dc609ae961064f",
                        },
                        path: {},
                        body: {
                            dataPermissionId: (this.dataPermission || {}).id,
                        },
                    })
                );
                var $forEachListVariable5078 = (logicMeta || {}).properties;
                var $forEachStartVariable5078 = 0;
                var $forEachEndVariable5078 = ($forEachListVariable5078 || {}).length;
                if (Array.isArray($forEachListVariable5078)) {
                    for (let index = $forEachStartVariable5078; index < $forEachEndVariable5078; index++) {
                        const item = $forEachListVariable5078[index];
                        this.$genInitFromSchema("app.structures.LCAPDataMetaColunmRule", this.$utils["Clear"](dataMetaProperty));
                        this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", this.$utils["Clear"](nameList));
                        var $forEachListVariable8507 = columnRuleList;
                        var $forEachStartVariable8507 = 0;
                        var $forEachEndVariable8507 = ($forEachListVariable8507 || {}).length;
                        if (Array.isArray($forEachListVariable8507)) {
                            for (let index1 = $forEachStartVariable8507; index1 < $forEachEndVariable8507; index1++) {
                                const item1 = $forEachListVariable8507[index1];
                                if ((item || {}).propertyName == (item1 || {}).propertyName) {
                                    dataMetaProperty.propertyPermission = (item1 || {}).columnRuleType;
                                    dataMetaProperty.columnRule = item1;
                                } else {
                                }
                            }
                        }

                        dataMetaProperty.propertyName = (item || {}).propertyName;
                        dataMetaProperty.propertyTitle = (item || {}).propertyTitle;
                        dataMetaProperty.propertyTitlePath = (item || {}).propertyTitlePath;
                        dataMetaProperty.propertyType = (item || {}).propertyType;
                        dataMetaProperty.propertyOptions = (item || {}).propertyOptions;

                        nameList = this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", this.$utils["Split"]((item || {}).propertyName, `.`));
                        if ((nameList || {}).length >= 2) {
                            dataMetaProperty.showPropertyName = this.$utils["Get"](nameList, 0);
                            dataMetaProperty.showPropertyName2 = this.$utils["Get"](nameList, 1);
                            if ((dataMetaProperty || {}).showPropertyName2 == `id` || (dataMetaProperty || {}).showPropertyName2 == `createdTime` || (dataMetaProperty || {}).showPropertyName2 == `updatedTime` || (dataMetaProperty || {}).showPropertyName2 == `createdBy` || (dataMetaProperty || {}).showPropertyName2 == `updatedBy`) {
                                dataMetaProperty.isCheck = true;
                            } else {
                                dataMetaProperty.isCheck = false;
                            }
                        } else {
                            dataMetaProperty.showPropertyName = (item || {}).propertyName;
                            dataMetaProperty.showPropertyName2 = undefined;
                            if ((dataMetaProperty || {}).showPropertyName == `id` || (dataMetaProperty || {}).showPropertyName == `createdTime` || (dataMetaProperty || {}).showPropertyName == `updatedTime` || (dataMetaProperty || {}).showPropertyName == `createdBy` || (dataMetaProperty || {}).showPropertyName == `updatedBy`) {
                                dataMetaProperty.isCheck = true;
                            } else {
                                dataMetaProperty.isCheck = false;
                            }
                        }

                        if (this.$utils["HasValue"]({ type: "nasl.core.Long", value: ((dataMetaProperty || {}).columnRule || {}).id })) {
                        } else {
                            dataMetaProperty.columnRule = this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPColumnRule", this.$utils["New"]({ concept: "TypeAnnotation", typeKind: "reference", typeNamespace: "app.dataSources.defaultDS.entities", typeName: "LCAPColumnRule" }));
                            dataMetaProperty.columnRule.dataPermissionId = (this.dataPermission || {}).id;
                            dataMetaProperty.columnRule.propertyName = (item || {}).propertyName;
                            dataMetaProperty.columnRule.columnRuleType = dataMetaProperty.propertyPermission = `read`;
                        }

                        this.$utils["Add"](result, this.$genInitFromSchema("app.structures.LCAPDataMetaColunmRule", this.$utils["Clone"](dataMetaProperty)));
                    }
                }

                if (this.$utils["HasValue"]({ type: "nasl.collection.List<extensions.lcap_annotation_data_permission.structures.LogicPropertyStructure>", value: (logicMeta || {}).properties })) {
                    propertyNameList = this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", await this.$utils["ListTransformAsync"]((logicMeta || {}).properties, (item) => (item || {}).propertyName));
                    if (!this.$utils["Contains"](propertyNameList, `createdBy`)) {
                        this.selectDataMeta.hasCreatedBy = true;
                    } else {
                        this.selectDataMeta.hasCreatedBy = false;
                    }
                } else {
                }
            }

            if ((this.selectDataMeta || {}).relation == `or`) {
                this.relationStr = `+或`;
            } else if ((this.selectDataMeta || {}).relation == `and`) {
                this.relationStr = `+且`;
            } else {
                this.relationStr = `+且`;
                this.selectDataMeta.relation = `and`;
            }

            var $forEachListVariable674 = result;
            var $forEachStartVariable674 = 0;
            var $forEachEndVariable674 = ($forEachListVariable674 || {}).length;
            if (Array.isArray($forEachListVariable674)) {
                for (let index = $forEachStartVariable674; index < $forEachEndVariable674; index++) {
                    const item = $forEachListVariable674[index];
                    if ((item || {}).propertyType != `Map` && (item || {}).propertyType != `List` && (item || {}).propertyType != `Entity` && (item || {}).propertyType != `Structure` && (item || {}).propertyType != `Others`) {
                        dataMetaProperty.columnRule = (item || {}).columnRule;
                        dataMetaProperty.propertyName = (item || {}).propertyName;
                        dataMetaProperty.propertyPermission = (item || {}).propertyPermission;
                        dataMetaProperty.propertyTitle = (item || {}).propertyTitle;
                        dataMetaProperty.propertyTitlePath = (item || {}).propertyTitlePath;
                        dataMetaProperty.propertyType = (item || {}).propertyType;
                        dataMetaProperty.propertyOptions = (item || {}).propertyOptions;

                        if (this.$utils["HasValue"]({ type: "nasl.core.String", value: (item || {}).propertyTitle })) {
                        } else {
                            dataMetaProperty.propertyTitle = (item || {}).propertyName;
                        }

                        this.$utils["Add"](this.customColunmRuleList, this.$genInitFromSchema("app.structures.LCAPDataMetaColunmRule", this.$utils["Clone"](dataMetaProperty)));
                    } else {
                    }
                }
            }

            await this.loadDataMetaRowRule();
            if (this.selectDataTypeName == `logic`) {
                logicResult = this.$genInitFromSchema("nasl.collection.Map<nasl.core.String, nasl.collection.List<app.structures.LCAPDataMetaColunmRule>>", await this.$utils["ListGroupByAsync"](result, (item) => (item || {}).showPropertyName));
                logicNameList = this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", this.$utils["MapKeys"](logicResult));
                if (this.$utils["HasValue"]({ type: "nasl.collection.List<nasl.core.String>", value: logicNameList })) {
                    this.$genInitFromSchema("nasl.collection.List<app.structures.LCAPDataMetaColunmRule>", this.$utils["Clear"](result));
                    var $forEachListVariable9168 = logicNameList;
                    var $forEachStartVariable9168 = 0;
                    var $forEachEndVariable9168 = ($forEachListVariable9168 || {}).length;
                    if (Array.isArray($forEachListVariable9168)) {
                        for (let index = $forEachStartVariable9168; index < $forEachEndVariable9168; index++) {
                            const item = $forEachListVariable9168[index];
                            this.$genInitFromSchema("app.structures.LCAPDataMetaColunmRule", this.$utils["Clear"](dataMetaProperty));
                            mapList = this.$genInitFromSchema("nasl.collection.List<app.structures.LCAPDataMetaColunmRule>", this.$utils["MapGet"](logicResult, item));
                            head = this.$genInitFromSchema("app.structures.LCAPDataMetaColunmRule", this.$utils["ListHead"](mapList));
                            if ((mapList || {}).length == 1) {
                                if (this.$utils["HasValue"]({ type: "nasl.core.String", value: (head || {}).showPropertyName2 })) {
                                    dataMetaProperty.showPropertyName = dataMetaProperty.propertyTitle = item;
                                    dataMetaProperty.showPropertyNameList = mapList;
                                    dataMetaProperty.columnRule = this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPColumnRule", this.$utils["New"]({ concept: "TypeAnnotation", typeKind: "reference", typeNamespace: "app.dataSources.defaultDS.entities", typeName: "LCAPColumnRule", changedTime: 1713235787084 }));

                                    this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", this.$utils["Clear"](filterList));
                                    dataMetaProperty.isCheck = true;
                                    var $forEachListVariable4766 = mapList;
                                    var $forEachStartVariable4766 = 0;
                                    var $forEachEndVariable4766 = ($forEachListVariable4766 || {}).length;
                                    if (Array.isArray($forEachListVariable4766)) {
                                        for (let index1 = $forEachStartVariable4766; index1 < $forEachEndVariable4766; index1++) {
                                            const item1 = $forEachListVariable4766[index1];
                                            if ((item1 || {}).isCheck) {
                                            } else {
                                                dataMetaProperty.isCheck = false;
                                                this.$utils["Add"](filterList, this.$utils["Clone"](((item1 || {}).columnRule || {}).columnRuleType));
                                            }
                                        }
                                    }

                                    searchList = this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", await this.$utils["ListFilterAsync"](filterList, (item1) => item1 != `none`));
                                    if (this.$utils["HasValue"]({ type: "nasl.collection.List<nasl.core.String>", value: searchList })) {
                                    } else {
                                        dataMetaProperty.propertyPermission = `none`;
                                        dataMetaProperty.columnRule.columnRuleType = `none`;
                                    }

                                    searchList = this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", await this.$utils["ListFilterAsync"](filterList, (item1) => item1 != `read`));
                                    if (this.$utils["HasValue"]({ type: "nasl.collection.List<nasl.core.String>", value: searchList })) {
                                    } else {
                                        dataMetaProperty.propertyPermission = `read`;
                                        dataMetaProperty.columnRule.columnRuleType = `read`;
                                    }

                                    searchList = this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", await this.$utils["ListFilterAsync"](filterList, (item1) => item1 != `readWrite`));
                                    if (this.$utils["HasValue"]({ type: "nasl.collection.List<nasl.core.String>", value: searchList })) {
                                    } else {
                                        dataMetaProperty.propertyPermission = `readWrite`;
                                        dataMetaProperty.columnRule.columnRuleType = `readWrite`;
                                    }
                                } else {
                                    dataMetaProperty.showPropertyNameList = this.$genInitFromSchema("nasl.collection.List<app.structures.LCAPDataMetaColunmRule>", this.$utils["New"]({ concept: "TypeAnnotation", typeKind: "generic", typeNamespace: "nasl.collection", typeName: "List", typeArguments: [{ concept: "TypeAnnotation", typeKind: "reference", typeNamespace: "app.structures", typeName: "LCAPDataMetaColunmRule", name: "T" }], changedTime: 1713231634635 }));
                                    dataMetaProperty.columnRule = (head || {}).columnRule;
                                    dataMetaProperty.propertyName = (head || {}).propertyName;
                                    dataMetaProperty.propertyOptions = (head || {}).propertyOptions;
                                    dataMetaProperty.propertyPermission = (head || {}).propertyPermission;
                                    dataMetaProperty.propertyTitle = (head || {}).propertyTitle;
                                    dataMetaProperty.propertyTitlePath = (head || {}).propertyTitlePath;
                                    dataMetaProperty.propertyType = (head || {}).propertyType;
                                    dataMetaProperty.showPropertyName = (head || {}).showPropertyName;
                                    dataMetaProperty.showPropertyName2 = (head || {}).showPropertyName2;
                                    dataMetaProperty.isCheck = (head || {}).isCheck;
                                }
                            } else {
                                dataMetaProperty.showPropertyName = dataMetaProperty.propertyTitle = item;
                                dataMetaProperty.showPropertyNameList = mapList;
                                dataMetaProperty.columnRule = this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPColumnRule", this.$utils["New"]({ concept: "TypeAnnotation", typeKind: "reference", typeNamespace: "app.dataSources.defaultDS.entities", typeName: "LCAPColumnRule" }));

                                this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", this.$utils["Clear"](filterList));
                                dataMetaProperty.isCheck = true;
                                var $forEachListVariable3870 = mapList;
                                var $forEachStartVariable3870 = 0;
                                var $forEachEndVariable3870 = ($forEachListVariable3870 || {}).length;
                                if (Array.isArray($forEachListVariable3870)) {
                                    for (let index1 = $forEachStartVariable3870; index1 < $forEachEndVariable3870; index1++) {
                                        const item1 = $forEachListVariable3870[index1];
                                        if ((item1 || {}).isCheck) {
                                        } else {
                                            dataMetaProperty.isCheck = false;
                                            this.$utils["Add"](filterList, this.$utils["Clone"](((item1 || {}).columnRule || {}).columnRuleType));
                                        }
                                    }
                                }

                                searchList = this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", await this.$utils["ListFilterAsync"](filterList, (item1) => item1 != `none`));
                                if (this.$utils["HasValue"]({ type: "nasl.collection.List<nasl.core.String>", value: searchList })) {
                                } else {
                                    dataMetaProperty.propertyPermission = `none`;
                                    dataMetaProperty.columnRule.columnRuleType = `none`;
                                }

                                searchList = this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", await this.$utils["ListFilterAsync"](filterList, (item1) => item1 != `read`));
                                if (this.$utils["HasValue"]({ type: "nasl.collection.List<nasl.core.String>", value: searchList })) {
                                } else {
                                    dataMetaProperty.propertyPermission = `read`;
                                    dataMetaProperty.columnRule.columnRuleType = `read`;
                                }
                            }

                            this.$utils["Add"](result, this.$genInitFromSchema("app.structures.LCAPDataMetaColunmRule", this.$utils["Clone"](dataMetaProperty)));
                        }
                    }
                } else {
                }
            } else {
            }

            var $forEachListVariable7466 = result;
            var $forEachStartVariable7466 = 0;
            var $forEachEndVariable7466 = ($forEachListVariable7466 || {}).length;
            if (Array.isArray($forEachListVariable7466)) {
                for (let index = $forEachStartVariable7466; index < $forEachEndVariable7466; index++) {
                    const item = $forEachListVariable7466[index];
                    await this.$utils["ListSortAsync"]((item || {}).showPropertyNameList, (item1) => (item1 || {}).isCheck, true);
                }
            }

            await this.$utils["ListSortAsync"](result, (item) => (item || {}).isCheck, true);
            return result;
        },
        async loadDataMetaRowRule() {
            let rowRuleList = this.$genInitFromSchema("nasl.collection.List<app.dataSources.defaultDS.entities.LCAPRowRuleItem>", undefined);
            let customRowRule = this.$genInitFromSchema("app.structures.LCAPDataMetaRowRule", undefined);
            let propertyNames = this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", undefined);

            rowRuleList = this.$genInitFromSchema(
                "nasl.collection.List<app.dataSources.defaultDS.entities.LCAPRowRuleItem>",
                await this.$logics["app.logics.LCAPGetRowRuleByDataPermissionId"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "3ecf397f094b49fa8d2764cefbac6504",
                    },
                    path: {},
                    body: {
                        dataPermissionId: (this.dataPermission || {}).id,
                    },
                })
            );
            this.$genInitFromSchema("nasl.collection.List<app.structures.LCAPComparisonResult>", await this.loadComParisonList(``));
            if (this.$utils["HasValue"]({ type: "nasl.collection.List<app.dataSources.defaultDS.entities.LCAPRowRuleItem>", value: rowRuleList })) {
                propertyNames = this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", await this.$utils["ListTransformAsync"](this.customColunmRuleList, (item) => (item || {}).propertyName));
                var $forEachListVariable3704 = rowRuleList;
                var $forEachStartVariable3704 = 0;
                var $forEachEndVariable3704 = ($forEachListVariable3704 || {}).length;
                if (Array.isArray($forEachListVariable3704)) {
                    for (let index = $forEachStartVariable3704; index < $forEachEndVariable3704; index++) {
                        const item = $forEachListVariable3704[index];
                        if (this.$utils["Contains"](propertyNames, (item || {}).propertyName)) {
                            customRowRule.comparison = (item || {}).comparison;
                            customRowRule.comparisons = this.comparisonList;
                            customRowRule.propertyName = (item || {}).propertyName;
                            customRowRule.propertys = this.customColunmRuleList;
                            customRowRule.values = this.$utils["Join"]((item || {}).values, `，`);
                            customRowRule.valuesType = (item || {}).valuesType;

                            if (this.$utils["HasValue"]({ type: "nasl.core.String", value: (item || {}).valuesType })) {
                            } else {
                                customRowRule.valuesType = `固定值`;
                            }

                            this.$utils["Add"](this.customRowRuleList, this.$genInitFromSchema("app.structures.LCAPDataMetaRowRule", this.$utils["Clone"](customRowRule)));
                        } else {
                        }
                    }
                }
            } else {
                customRowRule.comparisons = this.comparisonList;
                customRowRule.propertys = this.customColunmRuleList;
                customRowRule.valuesType = `固定值`;

                this.$utils["Add"](this.customRowRuleList, this.$genInitFromSchema("app.structures.LCAPDataMetaRowRule", this.$utils["Clone"](customRowRule)));
            }

            return;
        },
        async loadComParisonList(propertyType) {
            propertyType = propertyType === undefined ? (this.$route.query.hasOwnProperty("propertyType") ? this.$genInitFromSchema("nasl.core.String", this.$route.query.propertyType) : undefined) : propertyType;
            let comparisonLetter = undefined;
            let comparisonLetterList = this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", undefined);
            let comparisonResultList = this.$genInitFromSchema("nasl.collection.List<app.structures.LCAPComparisonResult>", undefined);
            let comparisonResult = this.$genInitFromSchema("app.structures.LCAPComparisonResult", undefined);
            let comparisonStr = undefined;
            let comparisonStrList = this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", undefined);
            let result = this.$genInitFromSchema("nasl.collection.List<app.structures.LCAPComparisonResult>", undefined);

            if (propertyType == `String`) {
                comparisonLetter = `equal,notEqual,like,notLike,leftLike,rightLike,in,notIn`;
                comparisonStr = `等于(=),不等于(≠),模糊关联(like),不匹配(not like),左关联(left like),右关联(right like),包含(in),不包含(not in)`;
            } else if (propertyType == `Integer` || propertyType == `Decimal`) {
                comparisonLetter = `equal,notEqual,greater,less,greaterEquals,lessEquals,in,notIn`;
                comparisonStr = `等于(=),不等于(≠),大于(＞),小于(＜),大于等于(≥),小于等于(≤),包含(in),不包含(not in)`;
            } else if (propertyType == `Date` || propertyType == `Time` || propertyType == `DateTime`) {
                comparisonLetter = `equal,notEqual,greater,less,greaterEquals,lessEquals`;
                comparisonStr = `等于(=),不等于(≠),大于(＞),小于(＜),大于等于(≥),小于等于(≤)`;
            } else if (propertyType == `Boolean`) {
                comparisonLetter = `equal,notEqual`;
                comparisonStr = `等于(=),不等于(≠)`;
            } else if (propertyType == `Enum`) {
                comparisonLetter = `equal,notEqual,in,notIn`;
                comparisonStr = `等于(=),不等于(≠),包含(in),不包含(not in)`;
            } else {
                comparisonLetter = `equal,notEqual,greater,less,greaterEquals,lessEquals,like,notLike,leftLike,rightLike,in,notIn`;
                comparisonStr = `等于(=),不等于(≠),大于(＞),小于(＜),大于等于(≥),小于等于(≤),模糊关联(like),不匹配(not like),左关联(left like),右关联(right like),包含(in),不包含(not in)`;
                comparisonLetterList = this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", this.$utils["Split"](comparisonLetter, `,`));
                comparisonStrList = this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", this.$utils["Split"](comparisonStr, `,`));
                var $forEachListVariable5508 = comparisonLetterList;
                var $forEachStartVariable5508 = 0;
                var $forEachEndVariable5508 = ($forEachListVariable5508 || {}).length;
                if (Array.isArray($forEachListVariable5508)) {
                    for (let index = $forEachStartVariable5508; index < $forEachEndVariable5508; index++) {
                        const item = $forEachListVariable5508[index];
                        comparisonResult.value = item;
                        comparisonResult.text = this.$utils["Get"](comparisonStrList, index);

                        this.$utils["Add"](comparisonResultList, this.$genInitFromSchema("app.structures.LCAPComparisonResult", this.$utils["Clone"](comparisonResult)));
                    }
                }

                this.comparisonList = comparisonResultList;
            }

            this.$genInitFromSchema("nasl.collection.List<app.structures.LCAPComparisonResult>", this.$utils["Clear"](comparisonResultList));
            comparisonLetterList = this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", this.$utils["Split"](comparisonLetter, `,`));
            comparisonStrList = this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", this.$utils["Split"](comparisonStr, `,`));
            var $forEachListVariable2013 = comparisonLetterList;
            var $forEachStartVariable2013 = 0;
            var $forEachEndVariable2013 = ($forEachListVariable2013 || {}).length;
            if (Array.isArray($forEachListVariable2013)) {
                for (let index = $forEachStartVariable2013; index < $forEachEndVariable2013; index++) {
                    const item = $forEachListVariable2013[index];
                    comparisonResult.value = item;
                    comparisonResult.text = this.$utils["Get"](comparisonStrList, index);

                    this.$utils["Add"](comparisonResultList, this.$genInitFromSchema("app.structures.LCAPComparisonResult", this.$utils["Clone"](comparisonResult)));
                }
            }

            result = comparisonResultList;
            return result;
        },
        async formatValueList(value) {
            value = value === undefined ? (this.$route.query.hasOwnProperty("value") ? this.$genInitFromSchema("nasl.core.String", this.$route.query.value) : undefined) : value;
            let formatList = this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", undefined);
            let temp = undefined;
            let result = this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", undefined);

            if (this.$utils["IndexOf"](value, `，`, 0, true) == 0) {
                value = this.$utils["SubString"](value, 1, (value || {}).length);
            } else {
            }

            if (this.$utils["LastIndexOf"](value, `，`, true) == this.$global.minus((value || {}).length, 1)) {
                value = this.$utils["SubString"](value, 0, this.$global.minus((value || {}).length, 1));
            } else {
            }

            formatList = this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", this.$utils["Split"](value, `，`));
            var $forEachListVariable7698 = formatList;
            var $forEachStartVariable7698 = 0;
            var $forEachEndVariable7698 = ($forEachListVariable7698 || {}).length;
            if (Array.isArray($forEachListVariable7698)) {
                for (let index = $forEachStartVariable7698; index < $forEachEndVariable7698; index++) {
                    const item = $forEachListVariable7698[index];
                    temp = item;
                    if (this.$utils["HasValue"]({ type: "nasl.core.String", value: temp })) {
                        temp = this.$utils["Trim"](temp);
                        this.$utils["Add"](result, this.$utils["Clone"](temp));
                    } else {
                    }

                    temp = ``;
                }
            }

            return result;
        },
        async createRoleDataPermission() {
            let dataResult = this.$genInitFromSchema("nasl.collection.List<app.structures.LCAPDataMetaStructure>", undefined);
            let dataCreate = this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPDataPermission", undefined);
            let columnRule = this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPColumnRule", undefined);
            let columnRuleList = this.$genInitFromSchema("nasl.collection.List<app.dataSources.defaultDS.entities.LCAPColumnRule>", undefined);

            if (this.$utils["HasValue"]({ type: "nasl.core.Long", value: (this.inputRole || {}).id })) {
                dataResult = this.$genInitFromSchema(
                    "nasl.collection.List<app.structures.LCAPDataMetaStructure>",
                    await this.$logics["app.logics.LCAPLoadDataMetaManagement"]({
                        config: {
                            download: false,
                        },
                        query: {},
                        headers: {
                            "lcap-calllogic-uuid": "070c8f72fa8b4014b217cffdd7ada007",
                        },
                        path: {},
                        body: {
                            dataType: `entity`,
                            search: ``,
                        },
                    })
                );
                this.$utils["AddAll"](
                    dataResult,
                    this.$genInitFromSchema(
                        "nasl.collection.List<app.structures.LCAPDataMetaStructure>",
                        await this.$logics["app.logics.LCAPLoadDataMetaManagement"]({
                            config: {
                                download: false,
                            },
                            query: {},
                            headers: {
                                "lcap-calllogic-uuid": "af38c174157e41739303022094ade6f6",
                            },
                            path: {},
                            body: {
                                dataType: `logic`,
                                search: ``,
                            },
                        })
                    )
                );
                var $forEachListVariable646 = dataResult;
                var $forEachStartVariable646 = 0;
                var $forEachEndVariable646 = ($forEachListVariable646 || {}).length;
                if (Array.isArray($forEachListVariable646)) {
                    for (let index = $forEachStartVariable646; index < $forEachEndVariable646; index++) {
                        const item = $forEachListVariable646[index];
                        this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPDataPermission", this.$utils["Clear"](dataCreate));
                        dataCreate.relation = `and`;
                        dataCreate.resourceType = (item || {}).dataType;
                        dataCreate.roleId = (this.inputRole || {}).id;
                        dataCreate.resourceName = (item || {}).dataName;
                        dataCreate.rowRuleType = `all`;

                        dataCreate = this.$genInitFromSchema(
                            "app.dataSources.defaultDS.entities.LCAPDataPermission",
                            await this.$logics["app.logics.LCAPCreateDataPermission"]({
                                config: {
                                    download: false,
                                },
                                query: {},
                                headers: {
                                    "lcap-calllogic-uuid": "3d90cd1060094b378e57646d9aa8d5b9",
                                },
                                path: {},
                                body: {
                                    dataPermission: dataCreate,
                                },
                            })
                        );
                        this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPColumnRule", this.$utils["Clear"](columnRule));
                        if ((item || {}).dataType == `entity`) {
                            var $forEachListVariable7569 = (item || {}).entityProperties;
                            var $forEachStartVariable7569 = 0;
                            var $forEachEndVariable7569 = ($forEachListVariable7569 || {}).length;
                            if (Array.isArray($forEachListVariable7569)) {
                                for (let index1 = $forEachStartVariable7569; index1 < $forEachEndVariable7569; index1++) {
                                    const item1 = $forEachListVariable7569[index1];
                                    columnRule.columnRuleType = `readWrite`;
                                    columnRule.propertyName = (item1 || {}).propertyName;
                                    columnRule.dataPermissionId = (dataCreate || {}).id;

                                    this.$utils["Add"](columnRuleList, this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPColumnRule", this.$utils["Clone"](columnRule)));
                                }
                            }
                        } else {
                            var $forEachListVariable2161 = (item || {}).logicProperties;
                            var $forEachStartVariable2161 = 0;
                            var $forEachEndVariable2161 = ($forEachListVariable2161 || {}).length;
                            if (Array.isArray($forEachListVariable2161)) {
                                for (let index1 = $forEachStartVariable2161; index1 < $forEachEndVariable2161; index1++) {
                                    const item1 = $forEachListVariable2161[index1];
                                    columnRule.columnRuleType = `read`;
                                    columnRule.propertyName = (item1 || {}).propertyName;
                                    columnRule.dataPermissionId = (dataCreate || {}).id;

                                    this.$utils["Add"](columnRuleList, this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPColumnRule", this.$utils["Clone"](columnRule)));
                                }
                            }
                        }
                    }
                }

                if (this.$utils["HasValue"]({ type: "nasl.collection.List<app.dataSources.defaultDS.entities.LCAPColumnRule>", value: columnRuleList })) {
                    this.$genInitFromSchema(
                        "nasl.collection.List<app.dataSources.defaultDS.entities.LCAPColumnRule>",
                        await this.$logics["app.dataSources.defaultDS.entities.LCAPColumnRule.logics.batchCreate"]({
                            config: {
                                download: false,
                            },
                            query: {},
                            headers: {
                                "lcap-calllogic-uuid": "150d119f8741415eb3a164171d39ab6b",
                            },

                            body: columnRuleList,
                        })
                    );
                } else {
                }
            } else {
            }

            return;
        },
        async roleManagement_created(event) {
            await (async () => {
                this.selectRole = this.$genInitFromSchema(
                    "app.dataSources.defaultDS.entities.LCAPRole",
                    this.$utils["Get"](
                        this.$genInitFromSchema(
                            "nasl.collection.List<app.dataSources.defaultDS.entities.LCAPRole>",
                            await this.$utils["ListTransformAsync"](
                                (
                                    this.$genInitFromSchema(
                                        "{list: nasl.collection.List<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole}>, total: nasl.core.Long}",
                                        await this.$logics["app.logics.LCAPLoadRoleManagementTableView"]({
                                            config: {
                                                download: false,
                                            },
                                            query: {},
                                            headers: {
                                                "lcap-calllogic-uuid": "6f98ac4067c74f7eac9071f08b8f3065",
                                            },
                                            path: {},
                                            body: {
                                                page: undefined,
                                                size: undefined,
                                                sort: undefined,
                                                order: undefined,
                                                filter: this.filterRole,
                                            },
                                        })
                                    ) || {}
                                ).list,
                                (item) => (item || {}).lCAPRole
                            )
                        ),
                        0
                    )
                );
                this.selectRoleId = (this.selectRole || {}).id;
                this.selectDataTypeName = `entity`;
                await (this.$refs && this.$refs[`tableView_1`] && this.$refs[`tableView_1`].reload && this.$refs[`tableView_1`].reload());
                await (this.$refs && this.$refs[`tableView1`] && this.$refs[`tableView1`].reload && this.$refs[`tableView1`].reload());
                await (this.$refs && this.$refs[`tableView2`] && this.$refs[`tableView2`].reload && this.$refs[`tableView2`].reload());
                await console.log(this.$utils["ToString"]("nasl.core.String", this.$utils["ToString"]("nasl.core.String", `进入时`) + this.$utils["ToString"]("app.dataSources.defaultDS.entities.LCAPRole", this.selectRole)));
                return;
            })();
        },
        async uButton2_click(event) {
            await (async () => {
                let createUserAndRoleItem = this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPUserRoleMapping", undefined);
                let returnOfGetUser = this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPUser", undefined);
                let createUserAndRole = this.$genInitFromSchema("nasl.collection.List<app.dataSources.defaultDS.entities.LCAPUserRoleMapping>", undefined);

                var $forEachListVariable5487 = this.waitAddRoleUserIdList;
                var $forEachStartVariable5487 = 0;
                var $forEachEndVariable5487 = (this.waitAddRoleUserIdList || {}).length;
                if (Array.isArray($forEachListVariable5487)) {
                    for (let i = $forEachStartVariable5487; i < $forEachEndVariable5487; i++) {
                        const item = $forEachListVariable5487[i];
                        returnOfGetUser = this.$genInitFromSchema(
                            "app.dataSources.defaultDS.entities.LCAPUser",
                            await this.$logics["app.logics.LCAPGetUserByUserId"]({
                                config: {
                                    download: false,
                                },
                                query: {},
                                headers: {
                                    "lcap-calllogic-uuid": "248340f1-7544-4013-ad1e-e2a14edbccee",
                                },
                                path: {},
                                body: {
                                    userId: item,
                                },
                            })
                        );
                        createUserAndRoleItem.roleId = (this.selectRole || {}).id;
                        createUserAndRoleItem.userName = (returnOfGetUser || {}).userName;
                        createUserAndRoleItem.userId = item;
                        this.$utils["Add"](createUserAndRole, this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPUserRoleMapping", this.$utils["Clone"](createUserAndRoleItem)));
                        this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPUserRoleMapping", this.$utils["Clear"](createUserAndRoleItem));
                    }
                }

                await (this.$refs && this.$refs[`saveModal`] && this.$refs[`saveModal`].close && this.$refs[`saveModal`].close());
                this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", this.$utils["Clear"](this.waitAddRoleUserIdList));
                this.$genInitFromSchema(
                    "nasl.collection.List<app.dataSources.defaultDS.entities.LCAPUserRoleMapping>",
                    await this.$logics["app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.batchCreate"]({
                        config: {
                            download: false,
                        },
                        query: {},
                        headers: {
                            "lcap-calllogic-uuid": "7c5920f4-35bf-4b24-a1ba-b25ae67a0cd5",
                        },

                        body: createUserAndRole,
                    })
                );
                await this.$toast.show(this.$utils["ToString"]("nasl.core.String", `添加成功！`));
                await (this.$refs && this.$refs[`tableView1`] && this.$refs[`tableView1`].reload && this.$refs[`tableView1`].reload());
                return;
            })();
        },
        async button_5_click(event) {
            await (async () => {
                await (this.$refs && this.$refs[`saveModal`] && this.$refs[`saveModal`].close && this.$refs[`saveModal`].close());
                return;
            })();
        },
        async uButton11_click(event) {
            await (async () => {
                await this.$logics["app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.delete"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "f0e585c7-45e1-4589-b5c5-bc0834002a28",
                    },
                    query: {
                        id: ((this.deleteUserRole || {}).lCAPUserRoleMapping || {}).id,
                    },
                    body: {},
                });
                await (this.$refs && this.$refs[`deleteUserRole`] && this.$refs[`deleteUserRole`].close && this.$refs[`deleteUserRole`].close());
                await this.$toast.show(this.$utils["ToString"]("nasl.core.String", `移除成功！`));
                await (this.$refs && this.$refs[`tableView1`] && this.$refs[`tableView1`].reload && this.$refs[`tableView1`].reload());
                return;
            })();
        },
        async uButton12_click(event) {
            await (async () => {
                await (this.$refs && this.$refs[`deleteUserRole`] && this.$refs[`deleteUserRole`].close && this.$refs[`deleteUserRole`].close());
                return;
            })();
        },
        async uButton8_click(event) {
            await (async () => {
                let rolePermissionMapping = this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPRolePerMapping", undefined);

                rolePermissionMapping = this.$genInitFromSchema(
                    "app.dataSources.defaultDS.entities.LCAPRolePerMapping",
                    await this.$logics["app.logics.LCAPGetMappingByRoleIdAndPermissionId"]({
                        config: {
                            download: false,
                        },
                        query: {},
                        headers: {
                            "lcap-calllogic-uuid": "b27c7b74-dc4e-4324-97a7-e639aea69dce",
                        },
                        path: {},
                        body: {
                            roleId: (this.selectRole || {}).id,
                            permissionId: (this.removePermission || {}).id,
                        },
                    })
                );
                await this.$logics["app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.delete"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "f04bdbc9-9850-492a-a4f2-fab508818e42",
                    },
                    query: {
                        id: (rolePermissionMapping || {}).id,
                    },
                    body: {},
                });
                this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPPermission", this.$utils["Clear"](this.removePermission));
                await (this.$refs && this.$refs[`removeResourcePopup`] && this.$refs[`removeResourcePopup`].close && this.$refs[`removeResourcePopup`].close());
                await (this.$refs && this.$refs[`tableView2`] && this.$refs[`tableView2`].reload && this.$refs[`tableView2`].reload());
                await this.$toast.show(this.$utils["ToString"]("nasl.core.String", `移除成功！`));
                return;
            })();
        },
        async uButton13_click(event) {
            await (async () => {
                await (this.$refs && this.$refs[`removeResourcePopup`] && this.$refs[`removeResourcePopup`].close && this.$refs[`removeResourcePopup`].close());
                return;
            })();
        },
        async uButton14_click(event) {
            await (async () => {
                let mapping = this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPRolePerMapping", undefined);
                let mappingList = this.$genInitFromSchema("nasl.collection.List<app.dataSources.defaultDS.entities.LCAPRolePerMapping>", undefined);

                var $forEachListVariable4549 = this.alreadySelectedPermissionIdList;
                var $forEachStartVariable4549 = 0;
                var $forEachEndVariable4549 = (this.alreadySelectedPermissionIdList || {}).length;
                if (Array.isArray($forEachListVariable4549)) {
                    for (let j = $forEachStartVariable4549; j < $forEachEndVariable4549; j++) {
                        const item1 = $forEachListVariable4549[j];
                        mapping.roleId = (this.selectRole || {}).id;
                        mapping.permissionId = item1;
                        this.$utils["Add"](mappingList, this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPRolePerMapping", this.$utils["Clone"](mapping)));
                        this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPRolePerMapping", this.$utils["Clear"](mapping));
                    }
                }

                this.$genInitFromSchema(
                    "nasl.collection.List<app.dataSources.defaultDS.entities.LCAPRolePerMapping>",
                    await this.$logics["app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.batchCreate"]({
                        config: {
                            download: false,
                        },
                        query: {},
                        headers: {
                            "lcap-calllogic-uuid": "05bba6b8-bb9c-4874-b5de-85e80de8f3a9",
                        },

                        body: mappingList,
                    })
                );
                this.$genInitFromSchema("nasl.collection.List<nasl.core.Long>", this.$utils["Clear"](this.alreadySelectedPermissionIdList));
                await (this.$refs && this.$refs[`selectResourcePopup`] && this.$refs[`selectResourcePopup`].close && this.$refs[`selectResourcePopup`].close());
                await (this.$refs && this.$refs[`tableView2`] && this.$refs[`tableView2`].reload && this.$refs[`tableView2`].reload());
                await this.$toast.show(this.$utils["ToString"]("nasl.core.String", `权限添加成功！`));
                return;
            })();
        },
        async uButton15_click(event) {
            await (async () => {
                await (this.$refs && this.$refs[`selectResourcePopup`] && this.$refs[`selectResourcePopup`].close && this.$refs[`selectResourcePopup`].close());
                this.$genInitFromSchema("nasl.collection.List<nasl.core.Long>", this.$utils["Clear"](this.alreadySelectedPermissionIdList));
                return;
            })();
        },
        async uButton6_click(event) {
            await (async () => {
                this.isNameRepeated = await this.isRoleNameRepeated((this.inputRole || {}).name);
                if (this.isNameRepeated == true) {
                    await this.$toast.show(this.$utils["ToString"]("nasl.core.String", `重复的角色名！`));
                } else {
                    if ((this.$genInitFromSchema("nasl.ui.ValidateResult", await (this.$refs && this.$refs[`form1`] && this.$refs[`form1`].validate && this.$refs[`form1`].validate(`submit`, undefined))) || {}).valid) {
                        this.inputRole = this.$genInitFromSchema(
                            "app.dataSources.defaultDS.entities.LCAPRole",
                            await this.$logics["app.dataSources.defaultDS.entities.LCAPRole.logics.create"]({
                                config: {
                                    download: false,
                                },
                                query: {},
                                headers: {
                                    "lcap-calllogic-uuid": "5f5c049b-8aae-40b1-8eef-1430b2c45d43",
                                },

                                body: this.inputRole,
                            })
                        );
                        await this.createRoleDataPermission();
                        this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPRole", this.$utils["Clear"](this.inputRole));
                        await (this.$refs && this.$refs[`createORUpdateRolePopup`] && this.$refs[`createORUpdateRolePopup`].close && this.$refs[`createORUpdateRolePopup`].close());
                        await (this.$refs && this.$refs[`tableView`] && this.$refs[`tableView`].reload && this.$refs[`tableView`].reload());
                        await this.$toast.show(this.$utils["ToString"]("nasl.core.String", `创建成功！`));
                    } else {
                    }
                }

                return;
            })();
        },
        async uButton4_click(event) {
            await (async () => {
                this.isNameRepeated = await this.isRoleNameRepeated((this.inputRole || {}).name);
                if (this.isNameRepeated == true && this.updateRoleName != (this.inputRole || {}).name) {
                    await this.$toast.show(this.$utils["ToString"]("nasl.core.String", `重复的角色名！`));
                } else {
                    if ((this.$genInitFromSchema("nasl.ui.ValidateResult", await (this.$refs && this.$refs[`form1`] && this.$refs[`form1`].validate && this.$refs[`form1`].validate(`submit`, undefined))) || {}).valid) {
                        this.selectRole = this.$genInitFromSchema(
                            "app.dataSources.defaultDS.entities.LCAPRole",
                            await this.$logics["app.dataSources.defaultDS.entities.LCAPRole.logics.update"]({
                                config: {
                                    download: false,
                                },
                                query: {},
                                headers: {
                                    "lcap-calllogic-uuid": "63c38c8f-3b84-4d51-9709-50de8afdc99b",
                                },
                                body: {
                                    entity: this.inputRole,
                                },
                            })
                        );
                        await (this.$refs && this.$refs[`createORUpdateRolePopup`] && this.$refs[`createORUpdateRolePopup`].close && this.$refs[`createORUpdateRolePopup`].close());
                        await (this.$refs && this.$refs[`tableView`] && this.$refs[`tableView`].reload && this.$refs[`tableView`].reload());
                        await this.$toast.show(this.$utils["ToString"]("nasl.core.String", `修改成功！`));
                    } else {
                    }
                }

                return;
            })();
        },
        async uButton7_click(event) {
            await (async () => {
                await (this.$refs && this.$refs[`createORUpdateRolePopup`] && this.$refs[`createORUpdateRolePopup`].close && this.$refs[`createORUpdateRolePopup`].close());
                this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPRole", this.$utils["Clear"](this.inputRole));
                return;
            })();
        },
        async uButton9_click(event) {
            await (async () => {
                await this.$logics["app.dataSources.defaultDS.entities.LCAPRole.logics.delete"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "2d7d507f-5197-462c-8ee8-7044399c0b56",
                    },
                    query: {
                        id: (this.deleteRoleBody || {}).id,
                    },
                    body: {},
                });
                await (this.$refs && this.$refs[`deleteRolePopup`] && this.$refs[`deleteRolePopup`].close && this.$refs[`deleteRolePopup`].close());
                await this.$toast.show(this.$utils["ToString"]("nasl.core.String", `删除成功！`));
                await (this.$refs && this.$refs[`tableView`] && this.$refs[`tableView`].reload && this.$refs[`tableView`].reload());
                this.selectRole = this.$genInitFromSchema(
                    "app.dataSources.defaultDS.entities.LCAPRole",
                    this.$utils["Get"](
                        this.$genInitFromSchema(
                            "nasl.collection.List<app.dataSources.defaultDS.entities.LCAPRole>",
                            await this.$utils["ListTransformAsync"](
                                (
                                    this.$genInitFromSchema(
                                        "{list: nasl.collection.List<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole}>, total: nasl.core.Long}",
                                        await this.$logics["app.logics.LCAPLoadRoleManagementTableView"]({
                                            config: {
                                                download: false,
                                            },
                                            query: {},
                                            headers: {
                                                "lcap-calllogic-uuid": "33d2c00aee1c4e99af44363017772457",
                                            },
                                            path: {},
                                            body: {
                                                page: undefined,
                                                size: undefined,
                                                sort: undefined,
                                                order: undefined,
                                                filter: this.filterRole,
                                            },
                                        })
                                    ) || {}
                                ).list,
                                (item) => (item || {}).lCAPRole
                            )
                        ),
                        0
                    )
                );
                await (this.$refs && this.$refs[`tableView1`] && this.$refs[`tableView1`].reload && this.$refs[`tableView1`].reload());
                await (this.$refs && this.$refs[`tableView2`] && this.$refs[`tableView2`].reload && this.$refs[`tableView2`].reload());

                return;
            })();
        },
        async uButton10_click(event) {
            await (async () => {
                await (this.$refs && this.$refs[`deleteRolePopup`] && this.$refs[`deleteRolePopup`].close && this.$refs[`deleteRolePopup`].close());
                return;
            })();
        },
        async button_1_click(event) {
            await (async () => {
                this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPRole", this.$utils["Clear"](this.inputRole));
                this.isUpdateRole = false;
                await (this.$refs && this.$refs[`createORUpdateRolePopup`] && this.$refs[`createORUpdateRolePopup`].open && this.$refs[`createORUpdateRolePopup`].open());
                return;
            })();
        },
        async tableView_select(event) {
            await (async () => {
                this.selectRole = this.$genInitFromSchema(
                    "app.dataSources.defaultDS.entities.LCAPRole",
                    await this.$logics["app.dataSources.defaultDS.entities.LCAPRole.logics.get"]({
                        config: {
                            download: false,
                        },
                        query: {},
                        headers: {
                            "lcap-calllogic-uuid": "de389af974104d3bbb72abe67d361b09",
                        },
                        query: {
                            id: this.selectRoleId,
                        },
                        body: {},
                    })
                );
                await (this.$refs && this.$refs[`tableView1`] && this.$refs[`tableView1`].reload && this.$refs[`tableView1`].reload());
                await (this.$refs && this.$refs[`tableView2`] && this.$refs[`tableView2`].reload && this.$refs[`tableView2`].reload());
                this.isRoleSelect = true;
                await (this.$refs && this.$refs[`tableView_1`] && this.$refs[`tableView_1`].reload && this.$refs[`tableView_1`].reload());
                return;
            })();
        },
        async uButton1_click(event) {
            await (async () => {
                await (this.$refs && this.$refs[`saveModal`] && this.$refs[`saveModal`].open && this.$refs[`saveModal`].open());
                return;
            })();
        },
        async uButton5_click(event) {
            await (async () => {
                await (this.$refs && this.$refs[`selectResourcePopup`] && this.$refs[`selectResourcePopup`].open && this.$refs[`selectResourcePopup`].open());
                return;
            })();
        },
        async capsules_2_select(event) {
            await (async () => {
                await (this.$refs && this.$refs[`tableView_1`] && this.$refs[`tableView_1`].reload && this.$refs[`tableView_1`].reload());
                return;
            })();
        },
        async input_1_input(event) {
            await (async () => {
                await console.log(this.$utils["ToString"]("nasl.core.String", `搜索...`));
                this.isSearch = true;
                await (this.$refs && this.$refs[`tableView_1`] && this.$refs[`tableView_1`].reload && this.$refs[`tableView_1`].reload());
                return;
            })();
        },
        async tableView_1_select(event) {
            await (async () => {
                await (this.$refs && this.$refs[`table_view_1`] && this.$refs[`table_view_1`].reload && this.$refs[`table_view_1`].reload());
                return;
            })();
        },
        async tableView_1_load(event) {
            await (async () => {
                if (this.isSearch) {
                    this.isSearch = false;
                } else {
                    await (this.$refs && this.$refs[`table_view_1`] && this.$refs[`table_view_1`].reload && this.$refs[`table_view_1`].reload());
                }

                return;
            })();
        },
        async button_3_click(event) {
            await (async () => {
                let hasId = this.$genInitFromSchema("nasl.collection.List<app.dataSources.defaultDS.entities.LCAPColumnRule>", undefined);
                let notId = this.$genInitFromSchema("nasl.collection.List<app.dataSources.defaultDS.entities.LCAPColumnRule>", undefined);
                let isPass = true;
                let rowRuleList = this.$genInitFromSchema("nasl.collection.List<app.dataSources.defaultDS.entities.LCAPRowRuleItem>", undefined);
                let rowRule = this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPRowRuleItem", undefined);
                let temp = undefined;
                let valueList = this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", undefined);
                let tempList = this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", undefined);

                isPass = true;
                if ((this.selectDataMeta || {}).rowRuleType == `custom`) {
                    var $forEachListVariable4096 = this.customRowRuleList;
                    var $forEachStartVariable4096 = 0;
                    var $forEachEndVariable4096 = ($forEachListVariable4096 || {}).length;
                    if (Array.isArray($forEachListVariable4096)) {
                        for (let index = $forEachStartVariable4096; index < $forEachEndVariable4096; index++) {
                            const item = $forEachListVariable4096[index];
                            if (isPass) {
                                if (this.$utils["HasValue"]({ type: "nasl.core.String", value: (item || {}).propertyName })) {
                                } else {
                                    this.toastInfo = this.$utils["ToString"]("nasl.core.String", `第`) + this.$utils["ToString"]("nasl.core.Long", this.$global.add(index, 1)) + this.$utils["ToString"]("nasl.core.String", `行`);
                                    await console.log(this.$utils["ToString"]("nasl.core.String", this.$utils["ToString"]("nasl.core.String", this.toastInfo)));
                                    await (this.$refs && this.$refs[`toast_single_1`] && this.$refs[`toast_single_1`].open && this.$refs[`toast_single_1`].open());
                                    isPass = false;
                                }
                            } else {
                            }

                            if (isPass) {
                                if (this.$utils["HasValue"]({ type: "nasl.core.String", value: (item || {}).comparison })) {
                                } else {
                                    if (this.$utils["HasValue"]({ type: "nasl.core.String", value: (item || {}).propertyTitle })) {
                                        this.toastInfo = this.$utils["ToString"]("nasl.core.String", `第`) + this.$utils["ToString"]("nasl.core.Long", this.$global.add(index, 1)) + this.$utils["ToString"]("nasl.core.String", `行 `) + this.$utils["ToString"]("nasl.core.String", (item || {}).propertyTitle);
                                    } else {
                                        this.toastInfo = this.$utils["ToString"]("nasl.core.String", `第`) + this.$utils["ToString"]("nasl.core.Long", this.$global.add(index, 1)) + this.$utils["ToString"]("nasl.core.String", `行 `) + this.$utils["ToString"]("nasl.core.String", (item || {}).propertyName);
                                    }

                                    await console.log(this.$utils["ToString"]("nasl.core.String", this.$utils["ToString"]("nasl.core.String", this.toastInfo)));
                                    await (this.$refs && this.$refs[`toast_single_2`] && this.$refs[`toast_single_2`].open && this.$refs[`toast_single_2`].open());
                                    isPass = false;
                                }
                            } else {
                            }

                            if (isPass) {
                                if (this.$utils["HasValue"]({ type: "nasl.core.String", value: (item || {}).values })) {
                                } else {
                                    if (this.$utils["HasValue"]({ type: "nasl.core.String", value: (item || {}).propertyTitle })) {
                                        this.toastInfo = this.$utils["ToString"]("nasl.core.String", `第`) + this.$utils["ToString"]("nasl.core.Long", this.$global.add(index, 1)) + this.$utils["ToString"]("nasl.core.String", `行 `) + this.$utils["ToString"]("nasl.core.String", (item || {}).propertyTitle);
                                    } else {
                                        this.toastInfo = this.$utils["ToString"]("nasl.core.String", `第`) + this.$utils["ToString"]("nasl.core.Long", this.$global.add(index, 1)) + this.$utils["ToString"]("nasl.core.String", `行 `) + this.$utils["ToString"]("nasl.core.String", (item || {}).propertyName);
                                    }

                                    await console.log(this.$utils["ToString"]("nasl.core.String", this.$utils["ToString"]("nasl.core.String", this.toastInfo)));
                                    await (this.$refs && this.$refs[`toast_single_3`] && this.$refs[`toast_single_3`].open && this.$refs[`toast_single_3`].open());
                                    isPass = false;
                                }
                            } else {
                            }

                            if (isPass) {
                                if (this.$utils["HasValue"]({ type: "nasl.core.String", value: (item || {}).valuesType })) {
                                } else {
                                    await this.$toast.show(this.$utils["ToString"]("nasl.core.String", `不得为空`));
                                    isPass = false;
                                }
                            } else {
                            }

                            if (isPass) {
                                if ((item || {}).propertyType == `Integer`) {
                                    if ((item || {}).comparison == `in` || (item || {}).comparison == `notIn`) {
                                        valueList = this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", await this.formatValueList((item || {}).values));
                                        var $forEachListVariable552 = valueList;
                                        var $forEachStartVariable552 = 0;
                                        var $forEachEndVariable552 = ($forEachListVariable552 || {}).length;
                                        if (Array.isArray($forEachListVariable552)) {
                                            for (let index1 = $forEachStartVariable552; index1 < $forEachEndVariable552; index1++) {
                                                const item1 = $forEachListVariable552[index1];
                                                temp = item1;
                                                if (isPass) {
                                                    await (async () => {
                                                        "use JSBlock";
                                                        function isInteger(str) {
                                                            var parsedInt = parseInt(str, 10);
                                                            return !isNaN(parsedInt) && String(parsedInt) === str;
                                                        }

                                                        isPass = isInteger(temp);
                                                    })();
                                                } else {
                                                }
                                            }
                                        }
                                    } else {
                                        temp = (item || {}).values;
                                        await (async () => {
                                            "use JSBlock";
                                            function isInteger(str) {
                                                var parsedInt = parseInt(str, 10);
                                                return !isNaN(parsedInt) && String(parsedInt) === str;
                                            }

                                            isPass = isInteger(temp);
                                        })();
                                    }

                                    if (isPass) {
                                    } else {
                                        if (this.$utils["HasValue"]({ type: "nasl.core.String", value: (item || {}).propertyTitle })) {
                                            this.toastInfo = this.$utils["ToString"]("nasl.core.String", `第`) + this.$utils["ToString"]("nasl.core.Long", this.$global.add(index, 1)) + this.$utils["ToString"]("nasl.core.String", `行 `) + this.$utils["ToString"]("nasl.core.String", (item || {}).propertyTitle);
                                        } else {
                                            this.toastInfo = this.$utils["ToString"]("nasl.core.String", `第`) + this.$utils["ToString"]("nasl.core.Long", this.$global.add(index, 1)) + this.$utils["ToString"]("nasl.core.String", `行 `) + this.$utils["ToString"]("nasl.core.String", (item || {}).propertyName);
                                        }

                                        await console.log(this.$utils["ToString"]("nasl.core.String", this.$utils["ToString"]("nasl.core.String", this.toastInfo)));
                                        await (this.$refs && this.$refs[`toast_single_4`] && this.$refs[`toast_single_4`].open && this.$refs[`toast_single_4`].open());
                                    }
                                } else {
                                }
                            } else {
                            }

                            if (isPass) {
                                if ((item || {}).propertyType == `Decimal`) {
                                    if ((item || {}).comparison == `in` || (item || {}).comparison == `notIn`) {
                                        valueList = this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", await this.formatValueList((item || {}).values));
                                        var $forEachListVariable1526 = valueList;
                                        var $forEachStartVariable1526 = 0;
                                        var $forEachEndVariable1526 = ($forEachListVariable1526 || {}).length;
                                        if (Array.isArray($forEachListVariable1526)) {
                                            for (let index1 = $forEachStartVariable1526; index1 < $forEachEndVariable1526; index1++) {
                                                const item1 = $forEachListVariable1526[index1];
                                                temp = item1;
                                                if (isPass) {
                                                    await (async () => {
                                                        "use JSBlock";
                                                        function isDecimal(str) {
                                                            var parsedFloat = parseFloat(str);
                                                            return !isNaN(parsedFloat) && String(parsedFloat) === str;
                                                        }

                                                        isPass = isDecimal(temp);
                                                    })();
                                                } else {
                                                }
                                            }
                                        }
                                    } else {
                                        temp = (item || {}).values;
                                        await (async () => {
                                            "use JSBlock";
                                            function isDecimal(str) {
                                                var parsedFloat = parseFloat(str);
                                                return !isNaN(parsedFloat) && String(parsedFloat) === str;
                                            }

                                            isPass = isDecimal(temp);
                                        })();
                                    }

                                    if (isPass) {
                                    } else {
                                        if (this.$utils["HasValue"]({ type: "nasl.core.String", value: (item || {}).propertyTitle })) {
                                            this.toastInfo = this.$utils["ToString"]("nasl.core.String", `第`) + this.$utils["ToString"]("nasl.core.Long", this.$global.add(index, 1)) + this.$utils["ToString"]("nasl.core.String", `行 `) + this.$utils["ToString"]("nasl.core.String", (item || {}).propertyTitle);
                                        } else {
                                            this.toastInfo = this.$utils["ToString"]("nasl.core.String", `第`) + this.$utils["ToString"]("nasl.core.Long", this.$global.add(index, 1)) + this.$utils["ToString"]("nasl.core.String", `行 `) + this.$utils["ToString"]("nasl.core.String", (item || {}).propertyName);
                                        }

                                        await console.log(this.$utils["ToString"]("nasl.core.String", this.$utils["ToString"]("nasl.core.String", this.toastInfo)));
                                        await (this.$refs && this.$refs[`toast_single_5`] && this.$refs[`toast_single_5`].open && this.$refs[`toast_single_5`].open());
                                    }
                                } else {
                                }
                            } else {
                            }

                            if (isPass) {
                                if ((item || {}).propertyType == `Enum` && ((item || {}).comparison == `in` || (item || {}).comparison == `notIn`)) {
                                    valueList = this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", await this.formatValueList((item || {}).values));
                                    if (this.$utils["HasValue"]({ type: "nasl.collection.List<extensions.lcap_annotation_data_permission.structures.PropertyOption>", value: (item || {}).propertyOptions })) {
                                        tempList = this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", await this.$utils["ListTransformAsync"]((item || {}).propertyOptions, (item1) => (item1 || {}).code));
                                        var $forEachListVariable7426 = valueList;
                                        var $forEachStartVariable7426 = 0;
                                        var $forEachEndVariable7426 = ($forEachListVariable7426 || {}).length;
                                        if (Array.isArray($forEachListVariable7426)) {
                                            for (let index1 = $forEachStartVariable7426; index1 < $forEachEndVariable7426; index1++) {
                                                const item1 = $forEachListVariable7426[index1];
                                                if (this.$utils["Contains"](tempList, item1)) {
                                                } else {
                                                    isPass = false;
                                                }
                                            }
                                        }
                                    } else {
                                        isPass = false;
                                    }

                                    if (isPass) {
                                    } else {
                                        if (this.$utils["HasValue"]({ type: "nasl.core.String", value: (item || {}).propertyTitle })) {
                                            this.toastInfo = this.$utils["ToString"]("nasl.core.String", `第`) + this.$utils["ToString"]("nasl.core.Long", this.$global.add(index, 1)) + this.$utils["ToString"]("nasl.core.String", `行 `) + this.$utils["ToString"]("nasl.core.String", (item || {}).propertyTitle);
                                        } else {
                                            this.toastInfo = this.$utils["ToString"]("nasl.core.String", `第`) + this.$utils["ToString"]("nasl.core.Long", this.$global.add(index, 1)) + this.$utils["ToString"]("nasl.core.String", `行 `) + this.$utils["ToString"]("nasl.core.String", (item || {}).propertyName);
                                        }

                                        await console.log(this.$utils["ToString"]("nasl.core.String", this.$utils["ToString"]("nasl.core.String", this.toastInfo)));
                                        await (this.$refs && this.$refs[`toast_single_6`] && this.$refs[`toast_single_6`].open && this.$refs[`toast_single_6`].open());
                                    }
                                } else {
                                }
                            } else {
                            }
                        }
                    }
                } else {
                }

                if (isPass) {
                    if (this.$utils["HasValue"]({ type: "nasl.core.Long", value: (this.dataPermission || {}).id })) {
                        this.dataPermission.rowRuleType = (this.selectDataMeta || {}).rowRuleType;
                        this.dataPermission.relation = (this.selectDataMeta || {}).relation;

                        this.$genInitFromSchema(
                            "app.dataSources.defaultDS.entities.LCAPDataPermission",
                            await this.$logics["app.dataSources.defaultDS.entities.LCAPDataPermission.logics.update"]({
                                config: {
                                    download: false,
                                },
                                query: {},
                                headers: {
                                    "lcap-calllogic-uuid": "f36dfabee1d24ce19b710d698d744ff6",
                                },
                                body: {
                                    entity: this.dataPermission,
                                    properties: ["id", "rowRuleType", "relation"],
                                },
                            })
                        );
                    } else {
                        this.dataPermission.resourceType = this.selectDataTypeName;
                        this.dataPermission.roleId = this.selectRoleId;
                        this.dataPermission.resourceName = (this.selectDataMeta || {}).dataName;
                        this.dataPermission.rowRuleType = (this.selectDataMeta || {}).rowRuleType;
                        this.dataPermission.relation = (this.selectDataMeta || {}).relation;

                        this.dataPermission = this.$genInitFromSchema(
                            "app.dataSources.defaultDS.entities.LCAPDataPermission",
                            await this.$logics["app.dataSources.defaultDS.entities.LCAPDataPermission.logics.create"]({
                                config: {
                                    download: false,
                                },
                                query: {},
                                headers: {
                                    "lcap-calllogic-uuid": "dc42dfdfda9348008faaae15ce56f44a",
                                },

                                body: this.dataPermission,
                            })
                        );
                    }

                    var $forEachListVariable2425 = this.updateColumnRuleList;
                    var $forEachStartVariable2425 = 0;
                    var $forEachEndVariable2425 = ($forEachListVariable2425 || {}).length;
                    if (Array.isArray($forEachListVariable2425)) {
                        for (let index = $forEachStartVariable2425; index < $forEachEndVariable2425; index++) {
                            const item = $forEachListVariable2425[index];
                            item.dataPermissionId = (this.dataPermission || {}).id;
                        }
                    }

                    if (this.$utils["HasValue"]({ type: "nasl.collection.List<app.dataSources.defaultDS.entities.LCAPColumnRule>", value: this.updateColumnRuleList })) {
                        hasId = this.$genInitFromSchema("nasl.collection.List<app.dataSources.defaultDS.entities.LCAPColumnRule>", await this.$utils["ListFilterAsync"](this.updateColumnRuleList, (item) => this.$utils["HasValue"]({ type: "nasl.core.Long", value: (item || {}).id })));
                        notId = this.$genInitFromSchema("nasl.collection.List<app.dataSources.defaultDS.entities.LCAPColumnRule>", await this.$utils["ListFilterAsync"](this.updateColumnRuleList, (item) => !this.$utils["HasValue"]({ type: "nasl.core.Long", value: (item || {}).id })));
                        if (this.$utils["HasValue"]({ type: "nasl.collection.List<app.dataSources.defaultDS.entities.LCAPColumnRule>", value: hasId })) {
                            this.$genInitFromSchema(
                                "nasl.collection.List<app.dataSources.defaultDS.entities.LCAPColumnRule>",
                                await this.$logics["app.dataSources.defaultDS.entities.LCAPColumnRule.logics.batchUpdate"]({
                                    config: {
                                        download: false,
                                    },
                                    query: {},
                                    headers: {
                                        "lcap-calllogic-uuid": "7947e4467e254c5ea208e18ea77ccc9c",
                                    },
                                    body: {
                                        entities: hasId,
                                        properties: ["id", "columnRuleType", "dataPermissionId", "propertyName"],
                                    },
                                })
                            );
                        } else {
                        }

                        if (this.$utils["HasValue"]({ type: "nasl.collection.List<app.dataSources.defaultDS.entities.LCAPColumnRule>", value: notId })) {
                            this.$genInitFromSchema(
                                "nasl.collection.List<app.dataSources.defaultDS.entities.LCAPColumnRule>",
                                await this.$logics["app.dataSources.defaultDS.entities.LCAPColumnRule.logics.batchCreate"]({
                                    config: {
                                        download: false,
                                    },
                                    query: {},
                                    headers: {
                                        "lcap-calllogic-uuid": "01f8d2bde9ab418bad31765125dd71ac",
                                    },

                                    body: notId,
                                })
                            );
                        } else {
                        }
                    } else {
                    }

                    if (this.$utils["HasValue"]({ type: "nasl.core.Long", value: (this.dataPermission || {}).id })) {
                        await this.$logics["app.dataSources.defaultDS.entities.LCAPRowRuleItem.logics.deleteBy"]({
                            config: {
                                download: false,
                            },
                            query: {},
                            headers: {
                                "lcap-calllogic-uuid": "dfe4127d0e724eda8d6374458f2e828d",
                            },
                            body: {
                                concept: "Function",
                                name: "filter",
                                returnExpression: this.$resolveRequestData({ concept: "BinaryExpression", operator: "==", left: { concept: "MemberExpression", object: { concept: "Identifier", name: "_", folded: false }, property: { concept: "Identifier", name: "dataPermissionId", folded: false } }, right: { concept: "MemberExpression", value: (this.dataPermission || {}).id, expression: "(this.dataPermission || {}).id" } }),
                            },
                        });
                    } else {
                    }

                    if ((this.selectDataMeta || {}).rowRuleType == `custom`) {
                        var $forEachListVariable3728 = this.customRowRuleList;
                        var $forEachStartVariable3728 = 0;
                        var $forEachEndVariable3728 = ($forEachListVariable3728 || {}).length;
                        if (Array.isArray($forEachListVariable3728)) {
                            for (let index = $forEachStartVariable3728; index < $forEachEndVariable3728; index++) {
                                const item = $forEachListVariable3728[index];
                                this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", this.$utils["Clear"]((rowRule || {}).values));
                                item.dataPermissionId = (this.dataPermission || {}).id;
                                if ((item || {}).comparison == `in` || (item || {}).comparison == `notIn`) {
                                    rowRule.comparison = (item || {}).comparison;
                                    rowRule.dataPermissionId = (item || {}).dataPermissionId;
                                    rowRule.propertyName = (item || {}).propertyName;
                                    rowRule.valuesType = (item || {}).valuesType;
                                    rowRule.values = this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", await this.formatValueList((item || {}).values));
                                } else {
                                    rowRule.comparison = (item || {}).comparison;
                                    rowRule.dataPermissionId = (item || {}).dataPermissionId;
                                    rowRule.propertyName = (item || {}).propertyName;
                                    rowRule.valuesType = (item || {}).valuesType;

                                    this.$utils["Add"]((rowRule || {}).values, (item || {}).values);
                                }

                                this.$utils["Add"](rowRuleList, this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPRowRuleItem", this.$utils["Clone"](rowRule)));
                            }
                        }

                        if (this.$utils["HasValue"]({ type: "nasl.collection.List<app.dataSources.defaultDS.entities.LCAPRowRuleItem>", value: rowRuleList })) {
                            this.$genInitFromSchema(
                                "nasl.collection.List<app.dataSources.defaultDS.entities.LCAPRowRuleItem>",
                                await this.$logics["app.dataSources.defaultDS.entities.LCAPRowRuleItem.logics.batchCreate"]({
                                    config: {
                                        download: false,
                                    },
                                    query: {},
                                    headers: {
                                        "lcap-calllogic-uuid": "77cfe3daa85b4b3dbe596bf115cd71dc",
                                    },

                                    body: rowRuleList,
                                })
                            );
                        } else {
                        }
                    } else {
                    }

                    this.saveEnabled = true;
                    await (this.$refs && this.$refs[`table_view_1`] && this.$refs[`table_view_1`].reload && this.$refs[`table_view_1`].reload());
                } else {
                }

                return;
            })();
        },
        async radios_1_select(event) {
            await (async () => {
                if ((this.dataPermission || {}).rowRuleType == (this.selectDataMeta || {}).rowRuleType) {
                } else {
                    this.saveEnabled = false;
                }

                return;
            })();
        },
        async link_4_click(event, current) {
            await (async () => {
                this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPRole", this.$utils["Clear"](this.inputRole));
                this.$utils["Clear"](this.updateRoleName);
                this.isUpdateRole = true;
                this.updateRoleName = this.$utils["Clone"]((((current || {}).item || {}).lCAPRole || {}).name);
                this.inputRole = this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPRole", this.$utils["Clone"](((current || {}).item || {}).lCAPRole));
                await (this.$refs && this.$refs[`createORUpdateRolePopup`] && this.$refs[`createORUpdateRolePopup`].open && this.$refs[`createORUpdateRolePopup`].open());
                await (this.$refs && this.$refs[`popup_combination_1_${(current || {}).__nodeKey || (current || {}).index}`] && this.$refs[`popup_combination_1_${(current || {}).__nodeKey || (current || {}).index}`].close && this.$refs[`popup_combination_1_${(current || {}).__nodeKey || (current || {}).index}`].close());
                return;
            })();
        },
        async link_3_click(event, current) {
            await (async () => {
                this.deleteRoleBody = ((current || {}).item || {}).lCAPRole;
                await (this.$refs && this.$refs[`deleteRolePopup`] && this.$refs[`deleteRolePopup`].open && this.$refs[`deleteRolePopup`].open());
                await (this.$refs && this.$refs[`popup_combination_1_${(current || {}).__nodeKey || (current || {}).index}`] && this.$refs[`popup_combination_1_${(current || {}).__nodeKey || (current || {}).index}`].close && this.$refs[`popup_combination_1_${(current || {}).__nodeKey || (current || {}).index}`].close());
                return;
            })();
        },
        async uLink1_click(event, current) {
            await (async () => {
                this.$genInitFromSchema("{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole, lCAPUserRoleMapping: app.dataSources.defaultDS.entities.LCAPUserRoleMapping}", this.$utils["Clear"](this.deleteUserRole));
                this.deleteUserRole = this.$genInitFromSchema("{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole, lCAPUserRoleMapping: app.dataSources.defaultDS.entities.LCAPUserRoleMapping}", this.$utils["Clone"]((current || {}).item));
                await (this.$refs && this.$refs[`deleteUserRole`] && this.$refs[`deleteUserRole`].open && this.$refs[`deleteUserRole`].open());
                return;
            })();
        },
        async uLink2_click(event, current) {
            await (async () => {
                this.removePermission = (current || {}).item;
                await (this.$refs && this.$refs[`removeResourcePopup`] && this.$refs[`removeResourcePopup`].open && this.$refs[`removeResourcePopup`].open());
                return;
            })();
        },
        async radios_2_select(event, current) {
            await (async () => {
                if (this.$utils["HasValue"]({ type: "nasl.collection.List<app.structures.LCAPDataMetaColunmRule>", value: ((current || {}).item || {}).showPropertyNameList })) {
                    if (((current || {}).item || {}).propertyPermission == (((current || {}).item || {}).columnRule || {}).columnRuleType && this.saveEnabled) {
                    } else {
                        this.saveEnabled = false;
                        current.item.propertyPermission = ``;
                        var $forEachListVariable8112 = ((current || {}).item || {}).showPropertyNameList;
                        var $forEachStartVariable8112 = 0;
                        var $forEachEndVariable8112 = ($forEachListVariable8112 || {}).length;
                        if (Array.isArray($forEachListVariable8112)) {
                            for (let index = $forEachStartVariable8112; index < $forEachEndVariable8112; index++) {
                                const item = $forEachListVariable8112[index];
                                if ((item || {}).isCheck) {
                                } else {
                                    item.columnRule.columnRuleType = (((current || {}).item || {}).columnRule || {}).columnRuleType;
                                    this.$utils["Add"](this.updateColumnRuleList, (item || {}).columnRule);
                                    this.updateColumnRuleList = this.$genInitFromSchema(
                                        "nasl.collection.List<app.dataSources.defaultDS.entities.LCAPColumnRule>",
                                        await this.$utils["ListDistinctByAsync"](
                                            this.updateColumnRuleList,
                                            await (async () => {
                                                const arr = [(item1) => (item1 || {}).propertyName];
                                                return arr;
                                            })()
                                        )
                                    );
                                }
                            }
                        }
                    }
                } else {
                    if (((current || {}).item || {}).propertyPermission == (((current || {}).item || {}).columnRule || {}).columnRuleType) {
                    } else {
                        this.saveEnabled = false;
                        this.$utils["Add"](this.updateColumnRuleList, ((current || {}).item || {}).columnRule);
                        this.updateColumnRuleList = this.$genInitFromSchema(
                            "nasl.collection.List<app.dataSources.defaultDS.entities.LCAPColumnRule>",
                            await this.$utils["ListDistinctByAsync"](
                                this.updateColumnRuleList,
                                await (async () => {
                                    const arr = [(item) => (item || {}).propertyName];
                                    return arr;
                                })()
                            )
                        );
                    }
                }

                return;
            })();
        },
        async ico_11_click(event, current) {
            await (async () => {
                this.saveEnabled = false;
                this.$utils["Remove"](this.customRowRuleList, (current || {}).item);
                return;
            })();
        },
        async select_1_select(event, current) {
            await (async () => {
                this.saveEnabled = false;
                current.item.values = ``;
                return;
            })();
        },
        async select_1_change(event, current) {
            await (async () => {
                current.item.propertyType = (this.$genInitFromSchema("app.structures.LCAPDataMetaColunmRule", await this.$utils["ListFindAsync"](((current || {}).item || {}).propertys, (item) => (item || {}).propertyName == ((current || {}).item || {}).propertyName)) || {}).propertyType;
                current.item.comparisons = this.$genInitFromSchema("nasl.collection.List<app.structures.LCAPComparisonResult>", await this.loadComParisonList(((current || {}).item || {}).propertyType));
                current.item.propertyOptions = (this.$genInitFromSchema("app.structures.LCAPDataMetaColunmRule", await this.$utils["ListFindAsync"](((current || {}).item || {}).propertys, (item1) => (item1 || {}).propertyName == ((current || {}).item || {}).propertyName)) || {}).propertyOptions;
                current.item.propertyTitle = (this.$genInitFromSchema("app.structures.LCAPDataMetaColunmRule", await this.$utils["ListFindAsync"](this.customColunmRuleList, (item1) => (item1 || {}).propertyName == ((current || {}).item || {}).propertyName)) || {}).propertyTitle;
                return;
            })();
        },
        async select_2_select(event, current) {
            await (async () => {
                this.saveEnabled = false;
                return;
            })();
        },
        async select_4_select(event, current) {
            await (async () => {
                this.saveEnabled = false;
                current.item.values = ``;
                if ((this.$genInitFromSchema("nasl.ui.ValidateResult", await (this.$refs && this.$refs[`validator_4_${(current || {}).__nodeKey || (current || {}).index}`] && this.$refs[`validator_4_${(current || {}).__nodeKey || (current || {}).index}`].validate && this.$refs[`validator_4_${(current || {}).__nodeKey || (current || {}).index}`].validate(undefined, undefined))) || {}).valid) {
                } else {
                }

                return;
            })();
        },
        async input_3_change(event, current) {
            await (async () => {
                this.saveEnabled = false;
                return;
            })();
        },
        async input_3_blur(event, current) {
            await (async () => {
                current.item.values = this.$utils["Trim"](((current || {}).item || {}).values);
                return;
            })();
        },
        async number_input_1_input(event, current) {
            await (async () => {
                this.saveEnabled = false;
                return;
            })();
        },
        async select_3_select(event, current) {
            await (async () => {
                this.saveEnabled = false;
                return;
            })();
        },
        async date_picker_1_change(event, current) {
            await (async () => {
                this.saveEnabled = false;
                return;
            })();
        },
        async time_picker_1_change(event, current) {
            await (async () => {
                this.saveEnabled = false;
                return;
            })();
        },
        async date_time_picker_1_change(event, current) {
            await (async () => {
                this.saveEnabled = false;
                return;
            })();
        },
        async select_5_select(event, current) {
            await (async () => {
                this.saveEnabled = false;
                return;
            })();
        },
        async select_6_select(event, current) {
            await (async () => {
                this.saveEnabled = false;
                return;
            })();
        },
        async dropdown_item_1_click(event, current) {
            await (async () => {
                let customRowRule = this.$genInitFromSchema("app.structures.LCAPDataMetaRowRule", undefined);

                this.saveEnabled = false;
                if (this.relationStr == `+或`) {
                } else {
                    customRowRule.comparisons = this.comparisonList;
                    customRowRule.propertys = this.customColunmRuleList;
                    customRowRule.valuesType = `固定值`;

                    this.$utils["Add"](this.customRowRuleList, this.$genInitFromSchema("app.structures.LCAPDataMetaRowRule", this.$utils["Clone"](customRowRule)));
                }

                this.relationStr = `+且`;
                this.selectDataMeta.relation = `and`;
                return;
            })();
        },
        async dropdown_item_2_click(event, current) {
            await (async () => {
                let customRowRule = this.$genInitFromSchema("app.structures.LCAPDataMetaRowRule", undefined);

                this.saveEnabled = false;
                if (this.relationStr == `+且`) {
                } else {
                    customRowRule.comparisons = this.comparisonList;
                    customRowRule.propertys = this.customColunmRuleList;
                    customRowRule.valuesType = `固定值`;

                    this.$utils["Add"](this.customRowRuleList, this.$genInitFromSchema("app.structures.LCAPDataMetaRowRule", this.$utils["Clone"](customRowRule)));
                }

                this.relationStr = `+或`;
                this.selectDataMeta.relation = `or`;
                return;
            })();
        },
        async radios_3_select(event, current1, current) {
            await (async () => {
                let perList = this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", undefined);
                let filterList = this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", undefined);
                let isSearched = undefined;

                if (((current1 || {}).item || {}).propertyPermission == (((current1 || {}).item || {}).columnRule || {}).columnRuleType && this.saveEnabled) {
                } else {
                    isSearched = true;
                    current1.item.propertyPermission = ``;
                    this.saveEnabled = false;
                    this.$utils["Add"](this.updateColumnRuleList, ((current1 || {}).item || {}).columnRule);
                    this.updateColumnRuleList = this.$genInitFromSchema(
                        "nasl.collection.List<app.dataSources.defaultDS.entities.LCAPColumnRule>",
                        await this.$utils["ListDistinctByAsync"](
                            this.updateColumnRuleList,
                            await (async () => {
                                const arr = [(item) => (item || {}).propertyName];
                                return arr;
                            })()
                        )
                    );
                    this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", this.$utils["Clear"](perList));
                    var $forEachListVariable4241 = ((current || {}).item || {}).showPropertyNameList;
                    var $forEachStartVariable4241 = 0;
                    var $forEachEndVariable4241 = ($forEachListVariable4241 || {}).length;
                    if (Array.isArray($forEachListVariable4241)) {
                        for (let index = $forEachStartVariable4241; index < $forEachEndVariable4241; index++) {
                            const item = $forEachListVariable4241[index];
                            if ((item || {}).isCheck) {
                            } else {
                                this.$utils["Add"](perList, this.$utils["Clone"](((item || {}).columnRule || {}).columnRuleType));
                            }
                        }
                    }

                    if (isSearched) {
                        filterList = this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", await this.$utils["ListFilterAsync"](perList, (item) => item != `none`));
                        if (this.$utils["HasValue"]({ type: "nasl.collection.List<nasl.core.String>", value: filterList })) {
                            current.item.columnRule.columnRuleType = ``;
                        } else {
                            isSearched = false;
                            current.item.columnRule.columnRuleType = `none`;
                        }
                    } else {
                    }

                    if (isSearched) {
                        filterList = this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", await this.$utils["ListFilterAsync"](perList, (item) => item != `read`));
                        if (this.$utils["HasValue"]({ type: "nasl.collection.List<nasl.core.String>", value: filterList })) {
                            current.item.columnRule.columnRuleType = ``;
                        } else {
                            isSearched = false;
                            current.item.columnRule.columnRuleType = `read`;
                        }
                    } else {
                    }

                    if (isSearched) {
                        filterList = this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", await this.$utils["ListFilterAsync"](perList, (item) => item != `readWrite`));
                        if (this.$utils["HasValue"]({ type: "nasl.collection.List<nasl.core.String>", value: filterList })) {
                            current.item.columnRule.columnRuleType = ``;
                        } else {
                            isSearched = false;
                            current.item.columnRule.columnRuleType = `readWrite`;
                        }
                    } else {
                    }
                }

                return;
            })();
        },
        geninput_1_bindAttrs_placeholder_expression_viewMatchExpression() {
            return (() => {
                if (this.$global.isEqual(this.selectDataTypeName, `entity`)) {
                    return `实体名称`;
                } else if (this.$global.isEqual(this.selectDataTypeName, `logic`)) {
                    return `逻辑名称`;
                } else {
                    return `请输入名称`;
                }
            })();
        },

        gentext_240_bindAttrs_text_expression_viewMatchExpression() {
            return (() => {
                if (this.$global.isEqual(this.$utils["HasValue"]({ type: "nasl.core.String", value: (this.selectDataMeta || {}).showDataName }), true)) {
                    return this.$utils["ToString"]("nasl.core.String", `名称：`) + this.$utils["ToString"]("nasl.core.String", (this.selectDataMeta || {}).showDataName);
                } else if (this.$global.isEqual(this.$utils["HasValue"]({ type: "nasl.core.String", value: (this.selectDataMeta || {}).showDataName }), false)) {
                    return `名称：-`;
                } else {
                }
            })();
        },

        gentext_284_bindAttrs_text_expression_viewMatchExpression() {
            return (() => {
                if (this.$global.isEqual(this.$utils["HasValue"]({ type: "nasl.core.String", value: (this.selectDataMeta || {}).dataDescription }), true)) {
                    return this.$utils["ToString"]("nasl.core.String", `描述：`) + this.$utils["ToString"]("nasl.core.String", (this.selectDataMeta || {}).dataDescription);
                } else if (this.$global.isEqual(this.$utils["HasValue"]({ type: "nasl.core.String", value: (this.selectDataMeta || {}).dataDescription }), false)) {
                    return `描述：-`;
                } else {
                }
            })();
        },

        gentext_285_bindAttrs_text_expression_viewMatchExpression() {
            return (() => {
                if (this.$global.isEqual(this.$utils["HasValue"]({ type: "nasl.core.String", value: (this.selectDataMeta || {}).defaultDataSource }), true)) {
                    return this.$utils["ToString"]("nasl.core.String", `数据源：`) + this.$utils["ToString"]("nasl.core.String", (this.selectDataMeta || {}).defaultDataSource);
                } else if (this.$global.isEqual(this.$utils["HasValue"]({ type: "nasl.core.String", value: (this.selectDataMeta || {}).defaultDataSource }), false)) {
                    return `数据源：-`;
                } else {
                }
            })();
        },

        gentext_297_bindAttrs_text_expression_viewMatchExpression() {
            return (() => {
                if (this.$global.isEqual(this.$utils["HasValue"]({ type: "nasl.core.String", value: (this.selectDataMeta || {}).showDataName }), true)) {
                    return this.$utils["ToString"]("nasl.core.String", `名称：`) + this.$utils["ToString"]("nasl.core.String", (this.selectDataMeta || {}).showDataName);
                } else if (this.$global.isEqual(this.$utils["HasValue"]({ type: "nasl.core.String", value: (this.selectDataMeta || {}).showDataName }), false)) {
                    return `名称：-`;
                } else {
                }
            })();
        },

        gentext_299_bindAttrs_text_expression_viewMatchExpression() {
            return (() => {
                if (this.$global.isEqual(this.$utils["HasValue"]({ type: "nasl.core.String", value: (this.selectDataMeta || {}).dataDescription }), true)) {
                    return this.$utils["ToString"]("nasl.core.String", `描述：`) + this.$utils["ToString"]("nasl.core.String", (this.selectDataMeta || {}).dataDescription);
                } else if (this.$global.isEqual(this.$utils["HasValue"]({ type: "nasl.core.String", value: (this.selectDataMeta || {}).dataDescription }), false)) {
                    return `描述：-`;
                } else {
                }
            })();
        },

        genradio_1_bindDirectives_tooltip_expression_viewMatchExpression() {
            return (() => {
                if (this.$global.isEqual((this.selectDataMeta || {}).hasCreatedBy, true)) {
                    return `无创建人createdBy属性，不支持勾选`;
                } else if (this.$global.isEqual((this.selectDataMeta || {}).hasCreatedBy, false)) {
                    return ``;
                } else {
                }
            })();
        },

        genradio_7_bindDirectives_tooltip_expression_viewMatchExpression() {
            return (() => {
                if (this.$global.isEqual((this.selectDataMeta || {}).hasCreatedBy, true)) {
                    return `无创建人createdBy属性，不支持勾选`;
                } else if (this.$global.isEqual((this.selectDataMeta || {}).hasCreatedBy, false)) {
                    return ``;
                } else {
                }
            })();
        },

        genradio_8_bindDirectives_tooltip_expression_viewMatchExpression() {
            return (() => {
                if (this.$global.isEqual((this.selectDataMeta || {}).hasCreatedBy, true)) {
                    return `无创建人createdBy属性，不支持勾选`;
                } else if (this.$global.isEqual((this.selectDataMeta || {}).hasCreatedBy, false)) {
                    return ``;
                } else {
                }
            })();
        },

        geninput_3_bindAttrs_placeholder_expression_viewMatchExpression(current) {
            return (() => {
                if (this.$global.isEqual(((current || {}).item || {}).propertyType, `String`)) {
                    return (() => {
                        if (this.$global.isEqual(((current || {}).item || {}).comparison, `in`)) {
                            return `请输入字符串，中文逗号分隔`;
                        } else if (this.$global.isEqual(((current || {}).item || {}).comparison, `notIn`)) {
                            return `请输入字符串，中文逗号分隔`;
                        } else {
                            return `请输入字符串`;
                        }
                    })();
                } else if (this.$global.isEqual(((current || {}).item || {}).propertyType, `Integer`)) {
                    return (() => {
                        if (this.$global.isEqual(((current || {}).item || {}).comparison, `in`)) {
                            return `请输入整数，中文逗号分隔`;
                        } else if (this.$global.isEqual(((current || {}).item || {}).comparison, `notIn`)) {
                            return `请输入整数，中文逗号分隔`;
                        } else {
                            return `请输入整数`;
                        }
                    })();
                } else if (this.$global.isEqual(((current || {}).item || {}).propertyType, `Decimal`)) {
                    return (() => {
                        if (this.$global.isEqual(((current || {}).item || {}).comparison, `in`)) {
                            return `请输入小数，中文逗号分隔`;
                        } else if (this.$global.isEqual(((current || {}).item || {}).comparison, `notIn`)) {
                            return `请输入小数，中文逗号分隔`;
                        } else {
                            return `请输入小数`;
                        }
                    })();
                } else if (this.$global.isEqual(((current || {}).item || {}).propertyType, `Enum`)) {
                    return (() => {
                        if (this.$global.isEqual(((current || {}).item || {}).comparison, `in`)) {
                            return `请输入枚举值，中文逗号分隔`;
                        } else if (this.$global.isEqual(((current || {}).item || {}).comparison, `notIn`)) {
                            return `请输入枚举值，中文逗号分隔`;
                        } else {
                            return `请输入枚举值`;
                        }
                    })();
                } else {
                    return `请输入`;
                }
            })();
        },

        geninput_3_bindAttrs_placeholder_expression__cases__body_viewMatchExpression(current) {
            return (() => {
                if (this.$global.isEqual(((current || {}).item || {}).comparison, `in`)) {
                    return `请输入字符串，中文逗号分隔`;
                } else if (this.$global.isEqual(((current || {}).item || {}).comparison, `notIn`)) {
                    return `请输入字符串，中文逗号分隔`;
                } else {
                    return `请输入字符串`;
                }
            })();
        },

        geninput_3_bindAttrs_placeholder_expression__cases__body_viewMatchExpression(current) {
            return (() => {
                if (this.$global.isEqual(((current || {}).item || {}).comparison, `in`)) {
                    return `请输入整数，中文逗号分隔`;
                } else if (this.$global.isEqual(((current || {}).item || {}).comparison, `notIn`)) {
                    return `请输入整数，中文逗号分隔`;
                } else {
                    return `请输入整数`;
                }
            })();
        },

        geninput_3_bindAttrs_placeholder_expression__cases__body_viewMatchExpression(current) {
            return (() => {
                if (this.$global.isEqual(((current || {}).item || {}).comparison, `in`)) {
                    return `请输入小数，中文逗号分隔`;
                } else if (this.$global.isEqual(((current || {}).item || {}).comparison, `notIn`)) {
                    return `请输入小数，中文逗号分隔`;
                } else {
                    return `请输入小数`;
                }
            })();
        },

        geninput_3_bindAttrs_placeholder_expression__cases__body_viewMatchExpression(current) {
            return (() => {
                if (this.$global.isEqual(((current || {}).item || {}).comparison, `in`)) {
                    return `请输入枚举值，中文逗号分隔`;
                } else if (this.$global.isEqual(((current || {}).item || {}).comparison, `notIn`)) {
                    return `请输入枚举值，中文逗号分隔`;
                } else {
                    return `请输入枚举值`;
                }
            })();
        },

        gennumber_input_1_bindAttrs_placeholder_expression_viewMatchExpression(current) {
            return (() => {
                if (this.$global.isEqual(((current || {}).item || {}).propertyType, `Integer`)) {
                    return `请输入整数`;
                } else if (this.$global.isEqual(((current || {}).item || {}).propertyType, `Decimal`)) {
                    return `请输入小数`;
                } else {
                    return `请输入整数`;
                }
            })();
        },

        gennumber_input_1_bindAttrs_decimalLength_expression_viewMatchExpression(current) {
            return (() => {
                if (this.$global.isEqual(((current || {}).item || {}).propertyType, `Integer`)) {
                    return 0;
                } else if (this.$global.isEqual(((current || {}).item || {}).propertyType, `Decimal`)) {
                    return 3;
                } else {
                    return 0;
                }
            })();
        },

        genradios_3_bindDirectives_tooltip_expression_viewMatchExpression(current1, current) {
            return (() => {
                if (this.$global.isEqual(((current1 || {}).item || {}).isCheck, true)) {
                    return `系统属性不支持数据权限控制`;
                } else if (this.$global.isEqual(((current1 || {}).item || {}).isCheck, false)) {
                    return ``;
                } else {
                }
            })();
        },

        genradios_2_bindDirectives_tooltip_expression_viewMatchExpression(current) {
            return (() => {
                if (this.$global.isEqual(((current || {}).item || {}).isCheck, true)) {
                    return `系统属性不支持数据权限控制`;
                } else if (this.$global.isEqual(((current || {}).item || {}).isCheck, false)) {
                    return ``;
                } else {
                }
            })();
        },

        async __tableView_1_handleDataSourceLoad(params) {
            this["__tableView_1_params"] = { ...params };
            return this.$genInitFromSchema("nasl.collection.List<app.structures.LCAPDataMetaStructure>", await this.loadDataMeta());
        },

        async __table_view_1_handleDataSourceLoad(params) {
            this["__table_view_1_params"] = { ...params };
            return this.$genInitFromSchema("nasl.collection.List<app.structures.LCAPDataMetaColunmRule>", await this.loadDataMetaColunmRule());
        },
    },
    async created() {
        await this.roleManagement_created();
    },
};
</script>
