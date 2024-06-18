CREATE TABLE `lcap_resource_f803ac` (
`id` bigint NOT NULL COMMENT '主键',
`created_time` datetime NULL COMMENT '创建时间',
`updated_time` datetime NULL COMMENT '更新时间',
`created_by` varchar(256) NULL COMMENT '创建者',
`updated_by` varchar(256) NULL COMMENT '更新者',
`uuid` varchar(256) NULL COMMENT '唯一标识',
`name` varchar(256) NOT NULL COMMENT '资源路径，如/test/api',
`description` varchar(256) NULL COMMENT '资源描述',
`type` varchar(256) NULL COMMENT '资源类型',
`client_type` varchar(256) NULL COMMENT '端标识',
PRIMARY KEY (`id`)
) COMMENT='资源实体。该表的数据是新建组件后，系统自动上报的。name字段对应资源路径。默认生成的字段不允许改动，可新增自定义字段。';

CREATE TABLE `lcap_permission_f803ac` (
`id` bigint NOT NULL COMMENT '主键',
`created_time` datetime NULL COMMENT '创建时间',
`updated_time` datetime NULL COMMENT '更新时间',
`created_by` varchar(256) NULL COMMENT '创建者',
`updated_by` varchar(256) NULL COMMENT '更新者',
`uuid` varchar(256) NULL COMMENT '唯一标识',
`name` varchar(256) NOT NULL COMMENT '权限名称',
`description` varchar(256) NULL COMMENT '权限描述',
PRIMARY KEY (`id`)
) COMMENT='权限实体。新增角色的同时要一般需要绑定角色对应的权限。默认生成的字段不允许改动，可新增自定义字段。';

CREATE TABLE `lcap_role_f803ac` (
`id` bigint NOT NULL COMMENT '主键',
`created_time` datetime NULL COMMENT '创建时间',
`updated_time` datetime NULL COMMENT '更新时间',
`created_by` varchar(256) NULL COMMENT '创建者',
`updated_by` varchar(256) NULL COMMENT '更新者',
`uuid` varchar(256) NULL COMMENT '唯一标识',
`name` varchar(256) NOT NULL COMMENT '角色名',
`description` varchar(256) NULL COMMENT '角色描述',
`role_status` tinyint(1) NULL DEFAULT 1 COMMENT '角色状态，可配置true启用，false禁用。',
`editable` tinyint(1) NULL DEFAULT 1 COMMENT '系统字段，请勿修改。web新增为可编辑true，ide新增为不可编辑false。',
PRIMARY KEY (`id`)
) COMMENT='用户与角色关联实体。操作该表可完成为角色添加成员、移除角色成员等。默认生成的字段不允许改动，可新增自定义字段。';

CREATE TABLE `lcap_user_role_mapping_f803ac` (
`id` bigint NOT NULL COMMENT '主键',
`created_time` datetime NULL COMMENT '创建时间',
`updated_time` datetime NULL COMMENT '更新时间',
`created_by` varchar(256) NULL COMMENT '创建者',
`updated_by` varchar(256) NULL COMMENT '更新者',
`user_id` varchar(256) NOT NULL COMMENT '用户唯一ID',
`role_id` bigint NOT NULL COMMENT '角色唯一ID',
`user_name` varchar(256) NULL COMMENT '用户名',
`source` varchar(256) NULL COMMENT '用户来源',
PRIMARY KEY (`id`)
) COMMENT='用户与角色关联实体。操作该表可完成为角色添加成员、移除角色成员等。默认生成的字段不允许改动，可新增自定义字段。';

CREATE TABLE `lcap_per_res_mapping_f803ac` (
`id` bigint NOT NULL COMMENT '主键',
`created_time` datetime NULL COMMENT '创建时间',
`updated_time` datetime NULL COMMENT '更新时间',
`created_by` varchar(256) NULL COMMENT '创建者',
`updated_by` varchar(256) NULL COMMENT '更新者',
`permission_id` bigint NOT NULL COMMENT '权限唯一ID',
`resource_id` bigint NOT NULL COMMENT '资源唯一ID',
PRIMARY KEY (`id`)
) COMMENT='权限与资源的关联实体。一组权限会包含若干资源路径，权限对应角色。为角色绑定移除资源需操作该表。默认字段不允许改动，可新增字段。';

CREATE TABLE `lcap_role_per_mapping_f803ac` (
`id` bigint NOT NULL COMMENT '主键',
`created_time` datetime NULL COMMENT '创建时间',
`updated_time` datetime NULL COMMENT '更新时间',
`created_by` varchar(256) NULL COMMENT '创建者',
`updated_by` varchar(256) NULL COMMENT '更新者',
`role_id` bigint NOT NULL COMMENT '角色唯一ID',
`permission_id` bigint NOT NULL COMMENT '权限唯一ID',
PRIMARY KEY (`id`)
) COMMENT='角色权限关联实体。新增角色一般需要新增角色对应的权限。默认生成的字段不允许改动，可新增自定义字段。';

CREATE TABLE `lcap_user_f803ac` (
`id` bigint NOT NULL COMMENT '主键',
`created_time` datetime NULL COMMENT '创建时间',
`updated_time` datetime NULL COMMENT '更新时间',
`user_id` varchar(256) NOT NULL COMMENT '第三方登录方式唯一id；普通登录使用userName+source作为userId',
`user_name` varchar(256) NOT NULL COMMENT '普通登录用户名，类似账号的概念',
`password` varchar(256) NULL COMMENT '普通登录密码，密码建议加密存储。第三方登录不会存储密码',
`phone` varchar(256) NULL COMMENT '手机号',
`email` varchar(256) NULL COMMENT '邮箱',
`display_name` varchar(256) NULL COMMENT '展示的名称',
`status` varchar(256) NULL DEFAULT 'Normal' COMMENT '状态，标识当前用户的状态是什么',
`source` varchar(256) NOT NULL DEFAULT 'Normal' COMMENT '当前条用户数据来自哪个用户源，如普通登录、微信登录',
`direct_leader_id` varchar(256) NULL COMMENT '上级领导',
PRIMARY KEY (`id`)
) COMMENT='制品应用的用户实体。
1 实体名称不允许改动
2 默认生成的字段不允许改动
3 可新增自定义字段（避免设置为非空且无默认值）';

CREATE TABLE `lcap_department_f803ac` (
`id` bigint NOT NULL COMMENT '主键',
`created_time` datetime NULL COMMENT '创建时间',
`updated_time` datetime NULL COMMENT '更新时间',
`created_by` varchar(256) NULL COMMENT '创建者',
`updated_by` varchar(256) NULL COMMENT '更新者',
`name` varchar(256) NULL COMMENT '部门名称',
`dept_id` varchar(256) NULL COMMENT '部门标识',
`parent_dept_id` varchar(256) NULL COMMENT '父部门标识',
UNIQUE INDEX `deptIdIndex_548745e`(`dept_id`),
PRIMARY KEY (`id`)
) COMMENT='部门实体。新增部门的同时一般需要指定上一级部门。默认生成的字段不允许改动，可新增自定义字段。';

CREATE TABLE `lcap_user_dept_mapping_f803ac` (
`id` bigint NOT NULL COMMENT '主键',
`created_time` datetime NULL COMMENT '创建时间',
`updated_time` datetime NULL COMMENT '更新时间',
`created_by` varchar(256) NULL COMMENT '创建者',
`updated_by` varchar(256) NULL COMMENT '更新者',
`user_id` varchar(256) NULL COMMENT '用户ID',
`dept_id` varchar(256) NULL COMMENT '部门标识',
`is_dept_leader` bigint NULL DEFAULT 0 COMMENT '是否是部门主管',
PRIMARY KEY (`id`)
) COMMENT='用户与部门关联实体。操作该表可完成为部门添加用户、移除部门用户等。默认生成的字段不允许改动，可新增自定义字段。';

CREATE TABLE `lcap_row_rule_item_f803ac` (
`id` bigint NOT NULL COMMENT '主键',
`created_time` datetime NULL COMMENT '创建时间',
`updated_time` datetime NULL COMMENT '更新时间',
`created_by` varchar(256) NULL COMMENT '创建者',
`updated_by` varchar(256) NULL COMMENT '更新者',
`data_permission_id` bigint NULL COMMENT '所属数据权限ID',
`property_name` varchar(256) NULL COMMENT '实体的属性名',
`comparison` varchar(256) NULL COMMENT '实体属性与被比较项之间的比较符',
`values` text NULL COMMENT '被比较项的字面量',
`values_type` varchar(256) NULL COMMENT '字面量取值类型',
PRIMARY KEY (`id`)
) COMMENT='行权限自定义规则';

CREATE TABLE `lcap_column_rule_f803ac` (
`id` bigint NOT NULL COMMENT '主键',
`created_time` datetime NULL COMMENT '创建时间',
`updated_time` datetime NULL COMMENT '更新时间',
`created_by` varchar(256) NULL COMMENT '创建者',
`updated_by` varchar(256) NULL COMMENT '更新者',
`data_permission_id` bigint NULL COMMENT '所属数据权限ID',
`property_name` varchar(256) NULL COMMENT '实体的属性名',
`column_rule_type` varchar(256) NULL COMMENT '列权限规则',
PRIMARY KEY (`id`)
) COMMENT='列权限';

CREATE TABLE `lcap_entity_meta_f803ac` (
`id` bigint NOT NULL COMMENT '主键',
`created_time` datetime NULL COMMENT '创建时间',
`updated_time` datetime NULL COMMENT '更新时间',
`created_by` varchar(256) NULL COMMENT '创建者',
`updated_by` varchar(256) NULL COMMENT '更新者',
`entity_name` varchar(256) NULL COMMENT '实体名',
`table_name` varchar(256) NULL COMMENT '实体的表名',
`entity_description` varchar(256) NULL COMMENT '实体的描述',
`properties` text NULL COMMENT '属性列表',
PRIMARY KEY (`id`)
) COMMENT='实体元信息表';

CREATE TABLE `lcap_logic_meta_f803ac` (
`id` bigint NOT NULL COMMENT '主键',
`created_time` datetime NULL COMMENT '创建时间',
`updated_time` datetime NULL COMMENT '更新时间',
`created_by` varchar(256) NULL COMMENT '创建者',
`updated_by` varchar(256) NULL COMMENT '更新者',
`logic_name` varchar(256) NULL COMMENT '逻辑名',
`return_shape` varchar(256) NULL COMMENT '逻辑返回值形式',
`properties` text NULL COMMENT '属性列表',
`logic_description` varchar(256) NULL COMMENT '逻辑描述',
PRIMARY KEY (`id`)
) COMMENT='逻辑元信息表';

CREATE TABLE `lcap_data_permission_f803ac` (
`id` bigint NOT NULL COMMENT '主键',
`created_time` datetime NULL COMMENT '创建时间',
`updated_time` datetime NULL COMMENT '更新时间',
`created_by` varchar(256) NULL COMMENT '创建者',
`updated_by` varchar(256) NULL COMMENT '更新者',
`resource_name` varchar(256) NULL COMMENT '所属实体名或逻辑名',
`resource_type` varchar(256) NULL COMMENT '所属资源类型',
`row_rule_type` varchar(256) NULL COMMENT '行权限类型',
`relation` varchar(256) NULL COMMENT '行权限自定义规则间的逻辑关系',
`role_id` bigint NULL COMMENT '所属角色ID',
PRIMARY KEY (`id`)
) COMMENT='数据权限表';

