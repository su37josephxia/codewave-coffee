export default {
        "frontendEvents": {
        "beforeRouter": "window.beforeRouter = async (event) => { \nawait (async () => {\n    ;\n\n/* 本逻辑为PC端事件逻辑——如无必要，请勿删改\n\n本逻辑作用：\n\n当PC端页面切换前，会执行本事件逻辑\n\n判断当前访问用户是否对即将访问的页面具有权限，如无权限则跳转处理。\n\n如有需要，开发者可变更处理方式\n */\nawait (async () => {\n            \r\n'use JSBlock'\r\n\r\n\r\ntry {\r\n    await this.$auth.getUserInfo()\r\n} catch (err) {\r\n    console.log(err);\r\n}\r\n\r\nconst { router, routes, authResourcePaths,\r\n    appConfig, beforeRouter, filterRoutes,\r\n    to, from, next, parsePath, getBasePath, filterAuthResources, findNoAuthView, baseResourcePaths } = event;\r\n\r\nfunction concatResourcesRoutes(resources, baseRoutes) {\r\n    return resources.concat(baseRoutes.map((route) => ({\r\n        resourceValue: route,\r\n        // 如果后续需要区分路由类型，这里也需要补充 resourceType\r\n    })));\r\n}\r\nfunction addAuthRoutes(resources) {\r\n    if (Array.isArray(resources) && resources.length) {\r\n        const userResourcePaths = (resources || []).map((resource) => resource && resource.resourceValue || resource && resource.ResourceValue);\r\n        const otherRoutes = filterRoutes(routes, null, (route, ancestorPaths) => {\r\n            const routePath = route.path;\r\n            const completePath = [...ancestorPaths, routePath].join('/');\r\n            const authPath = userResourcePaths.find((userResourcePath) => userResourcePath && userResourcePath.startsWith(completePath));\r\n            return authPath;\r\n        });\r\n        otherRoutes.forEach((route) => {\r\n            router.addRoute(route);\r\n        });\r\n    }\r\n}\r\nconst userInfo = this.$global.userInfo || {};\r\nconst $auth = this.$auth;\r\nconst redirectedFrom = parsePath(to.redirectedFrom);\r\nconst toPath = redirectedFrom && redirectedFrom.path || to.path;\r\nconst toQuery = to.query;\r\nconst authPath = authResourcePaths.find((authResourcePath) => {\r\n    if (authResourcePath === toPath || `${authResourcePath}/` === toPath) {\r\n        return true;\r\n    }\r\n    return false;\r\n});\r\n\r\nconst noAuthView = findNoAuthView(routes);\r\n\r\nif (authPath) {\r\n    if (!$auth.isInit()) {\r\n        if (!userInfo.UserId) {\r\n            localStorage.setItem('beforeLogin', JSON.stringify(location));\r\n            next({ path: `${getBasePath()}/login` });\r\n        } else {\r\n            try {\r\n                const resources = await $auth.getUserResources(appConfig.domainName);\r\n                // addAuthRoutes(filterAuthResources(resources));\r\n                const realResources = filterAuthResources(concatResourcesRoutes(resources, baseResourcePaths));\r\n                addAuthRoutes(realResources);\r\n                // 即使没有查到权限，也需要重新进一遍，来决定去 无权限页面 还是 404页面\r\n                next({\r\n                    path: toPath,\r\n                    query: toQuery,\r\n                });\r\n            } catch (err) {\r\n                console.log('err', err)\r\n                if (noAuthView && noAuthView.path) {\r\n                    next({ path: noAuthView.path });\r\n                }\r\n            }\r\n        }\r\n    } else if ((redirectedFrom && redirectedFrom.path !== to.path) && to.path === `${getBasePath()}/notFound`) {\r\n        if (noAuthView && noAuthView.path) {\r\n            next({ path: noAuthView.path });\r\n        }\r\n    }\r\n} else if (!$auth.isInit() && userInfo.UserId) {\r\n    const resources = await $auth.getUserResources(appConfig.domainName);\r\n    // addAuthRoutes(filterAuthResources(resources));\r\n    const realResources = filterAuthResources(concatResourcesRoutes(resources, baseResourcePaths));\r\n    addAuthRoutes(realResources);\r\n}\r\n\r\nnext();\n        })();\nreturn;\n})();\n}\n","postRequest": "window.postRequest = async (event) => { \nawait (async () => {\n    ;\n    let code = undefined;\n    let msg = undefined;\n\n/* 本逻辑为PC端事件逻辑——如无必要，请勿删改\n\n本逻辑作用：\n\n当PC端页面逻辑调用服务端逻辑后，会执行本事件逻辑\n\n接收返回信息，处理状态码和错误码\n\n如有需要，开发者可变更错误码对应的处理方式\n */\nawait (async () => {\n            'use JSBlock' \r\n var body = JSON.parse(event.body)\r\nif(body){\r\n    code = String( body.code || body.Code)\r\n    msg = body.Msg ||body.Message || body.msg || body.message || '系统错误，请查看日志'\r\n}\n        })();\nawait (console.log(this.$utils['ToString']('nasl.core.String', this.$utils['ToString']('nasl.core.String', code))))\nif (((event || {}).status) == (`200`)) {\nif (this.$global.isEqual(code, `400`)) {\nawait (this.$toast.show(this.$utils['ToString']('nasl.core.String', msg)))\n}\nelse if (this.$global.isEqual(code, `401`)) {\nawait (async () => {\n            'use JSBlock' \r\nif (body.Message === 'token.is.invalid') {\r\n    location.href = '/login';\r\n}\n        })();\n}\nelse if (this.$global.isEqual(code, `403`)) {\nawait (async () => {\n             'use JSBlock' \r\n if (err.Code === 'InvalidToken' && err.Message === 'Token is invalid') {\r\n    if (!config.noErrorTip) {\r\n        instance.show('登录失效', '请重新登录');\r\n    }\r\n    localStorage.setItem('beforeLogin', JSON.stringify(location));\r\n    location.href = '/login';\r\n}\n        })();\n}\nelse if (this.$global.isEqual(code, `500`)) {\nawait (this.$toast.show(this.$utils['ToString']('nasl.core.String', msg)))\n}\nelse if (this.$global.isEqual(code, `501`)) {\nif ((msg) == (`abort`)) {\nthrow Error('程序中止');\n} else {\n}\n\n}\nelse {\n}\n\n}     else {\nif ((code) == (`200`)) {\n}         else {\nthrow Error('程序中止');\n}\n\n}\n\nreturn;\n})();\n}\n"
      },"frontendVariables": [],"dataTypesMap": {
        "app.enums.UserSourceEnum": {
        "concept": "Enum","name": "UserSourceEnum","label": null,"description": "统一定义用户的来源","enumItems": [{
        "concept": "EnumItem","value": "Normal","label": {
        "concept": "StaticString","value": "普通登录"
      }
      },{
        "concept": "EnumItem","value": "OpenId","label": {
        "concept": "StaticString","value": "OpenId"
      }
      }],"valueType": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },"app.enums.UserStatusEnum": {
        "concept": "Enum","name": "UserStatusEnum","label": null,"description": "统一定义用户的状态","enumItems": [{
        "concept": "EnumItem","value": "Normal","label": {
        "concept": "StaticString","value": "正常","changedTime": 1712663336651
      }
      },{
        "concept": "EnumItem","value": "Forbidden","label": {
        "concept": "StaticString","value": "禁用"
      }
      }],"valueType": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },"app.enums.PickupMethodEnum": {
        "concept": "Enum","name": "PickupMethodEnum","label": null,"description": "取货方式","enumItems": [{
        "concept": "EnumItem","value": "0","label": {
        "concept": "StaticString","value": "自取","changedTime": 1716882387690
      }
      },{
        "concept": "EnumItem","value": "1","label": {
        "concept": "StaticString","value": "外送","changedTime": 1716882392300
      }
      }],"valueType": null
      },"app.enums.OrderStatusEnum": {
        "concept": "Enum","name": "OrderStatusEnum","label": null,"description": "订单状态","enumItems": [{
        "concept": "EnumItem","value": "0","label": {
        "concept": "StaticString","value": "未付款","changedTime": 1716882329236
      }
      },{
        "concept": "EnumItem","value": "1","label": {
        "concept": "StaticString","value": "制作中","changedTime": 1716882335946
      }
      },{
        "concept": "EnumItem","value": "2","label": {
        "concept": "StaticString","value": "已完成","changedTime": 1716882342319
      }
      }],"valueType": null
      },"nasl.configuration.enums.I18nEnum": {
        "concept": "Enum","name": "I18nEnum","label": "国际化多语言枚举","description": "国际化多语言功能涉及的所有可选语言","enumItems": [{
        "concept": "EnumItem","value": "en-US","label": {
        "concept": "StaticString","value": "英语"
      },"name": "English"
      },{
        "concept": "EnumItem","value": "fr-FR","label": {
        "concept": "StaticString","value": "法语"
      },"name": "Français"
      },{
        "concept": "EnumItem","value": "ko-KR","label": {
        "concept": "StaticString","value": "韩语"
      },"name": "한국어"
      },{
        "concept": "EnumItem","value": "zh-CN","label": {
        "concept": "StaticString","value": "中文(简体)"
      },"name": "中文 (简体)"
      },{
        "concept": "EnumItem","value": "zh-TW","label": {
        "concept": "StaticString","value": "中文(繁体)"
      },"name": "中文 (繁體)"
      },{
        "concept": "EnumItem","value": "ja-JP","label": {
        "concept": "StaticString","value": "日语"
      },"name": "日本語"
      }],"valueType": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },"nasl.processV2.enums.ProcInstStatusEnum": {
        "concept": "Enum","name": "ProcInstStatusEnum","label": "流程实例当前状态","description": "流程实例当前状态","enumItems": [{
        "concept": "EnumItem","value": "Approved","label": {
        "concept": "StaticString","value": "审批结束"
      }
      },{
        "concept": "EnumItem","value": "Approving","label": {
        "concept": "StaticString","value": "审批中"
      }
      }],"valueType": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },"app.dataSources.defaultDS.entities.LCAPResource": {
        "concept": "Entity","name": "LCAPResource","uuid": "8996f56ae6ae431299689e8dbca4b0aa","tableName": "lcap_resource_f803ac","description": "资源实体。该表的数据是新建组件后，系统自动上报的。name字段对应资源路径。默认生成的字段不允许改动，可新增自定义字段。","origin": "ide","properties": [{
        "concept": "EntityProperty","name": "id","uuid": "b95e42973a0e4911a9217d849a00c5b0","columnName": "id","label": "主键","description": "主键","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": true,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdTime","uuid": "3b2e30107b4349f8ba6cc6cf4768f9ba","columnName": "created_time","label": "创建时间","description": "创建时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedTime","uuid": "2bf19bbcd4914a0081c3ad1374b8b286","columnName": "updated_time","label": "更新时间","description": "更新时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdBy","uuid": "f6f7bbd198ca45348b86feabe4de3f78","columnName": "created_by","label": "创建者","description": "创建者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedBy","uuid": "8a5d9b1be0ae482fbf11cbb33a8c9110","columnName": "updated_by","label": "更新者","description": "更新者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "uuid","uuid": "7fbf68e6d74b4d81ae965634690e33b5","columnName": "uuid","label": "唯一标识","description": "唯一标识","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "name","uuid": "1e9f903977864581884931817fdac364","columnName": "name","label": "资源名称","description": "资源路径，如/test/api","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "description","uuid": "f67d2f09ee9e4eaa833be3ead67109fd","columnName": "description","label": "资源描述","description": "","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "type","uuid": "ba1dfec742174197bb8eeacbf05c72ce","columnName": "type","label": "资源类型","description": "","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "clientType","uuid": "ee96625e0c7e4da4b86ae80b6f0c429b","columnName": "client_type","label": "端标识","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      }],"indexes": [],"applyAnnotations": null,"composedBy": null
      },"nasl.core.Long": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"nasl.core.DateTime": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"nasl.core.String": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"app.dataSources.defaultDS.entities.LCAPPermission": {
        "concept": "Entity","name": "LCAPPermission","uuid": "f2753033e00e4ef48c31818383406d62","tableName": "lcap_permission_f803ac","description": "权限实体。新增角色的同时要一般需要绑定角色对应的权限。默认生成的字段不允许改动，可新增自定义字段。","origin": "ide","properties": [{
        "concept": "EntityProperty","name": "id","uuid": "4143f2ded99147428d8d5ebfa512e332","columnName": "id","label": "主键","description": "主键","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": true,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdTime","uuid": "dba8d2e1b2c24e7793ce6ee57afa1426","columnName": "created_time","label": "创建时间","description": "创建时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedTime","uuid": "ff0c4cc3076241c4ae7c4d3ab1441564","columnName": "updated_time","label": "更新时间","description": "更新时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdBy","uuid": "167f88f058b4455caaf7b76dbc49454a","columnName": "created_by","label": "创建者","description": "创建者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedBy","uuid": "f38ef63683d04eac92dce7c08052ade1","columnName": "updated_by","label": "更新者","description": "更新者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "uuid","uuid": "8a30844ba8b7426d9c06788db2ea0e8f","columnName": "uuid","label": "唯一标识","description": "唯一标识","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "name","uuid": "0d6fa23ad50f40e6be841f378f931415","columnName": "name","label": "权限名称","description": "","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "description","uuid": "4688cfe2b5794f8dad70f2b1a651b042","columnName": "description","label": "权限描述","description": "","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      }],"indexes": [],"applyAnnotations": null,"composedBy": null
      },"app.dataSources.defaultDS.entities.LCAPRole": {
        "concept": "Entity","name": "LCAPRole","uuid": "6d2cfbce60e64d6784d500577b60186f","tableName": "lcap_role_f803ac","description": "用户与角色关联实体。操作该表可完成为角色添加成员、移除角色成员等。默认生成的字段不允许改动，可新增自定义字段。","origin": "ide","properties": [{
        "concept": "EntityProperty","name": "id","uuid": "ed20ff90c2a647bfbfcf7d34bd5cae6c","columnName": "id","label": "主键","description": "主键","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": true,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdTime","uuid": "5ad4b8c9aaa040c7bb1bd30af2c10d94","columnName": "created_time","label": "创建时间","description": "创建时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedTime","uuid": "4d40d6c7124f4584943ca0e0c46e4a1e","columnName": "updated_time","label": "更新时间","description": "更新时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdBy","uuid": "8ba408cd1c5647539f3211efc7858e3d","columnName": "created_by","label": "创建者","description": "创建者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedBy","uuid": "d1ded5e2a7ac49ed96f70cdb0cb4eba1","columnName": "updated_by","label": "更新者","description": "更新者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "uuid","uuid": "b902fbf5e73f47dd94f331553cba13f7","columnName": "uuid","label": "唯一标识","description": "唯一标识","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "name","uuid": "4c05288be83a4abf8e5d2e3ad73ea8de","columnName": "name","label": "角色名称","description": "角色名","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "description","uuid": "8893c384871246d58738a1780cd43482","columnName": "description","label": "角色描述","description": "","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": true,"inFilter": false,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "roleStatus","uuid": "0bd3bc13b5bf4e92847347d200a3be4c","columnName": "role_status","label": "角色状态","description": "角色状态，可配置true启用，false禁用。","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": {
        "concept": "DefaultValue","expression": {
        "concept": "BooleanLiteral","value": "true","label": null,"description": null,"folded": false,"offsetX": null,"offsetY": null,"name": ""
      },"playground": [],"name": ""
      },"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        "code": "true","executeCode": false
      }
      },{
        "concept": "EntityProperty","name": "editable","uuid": "b33edeaccef54b21936acbde08df54ea","columnName": "editable","label": "是否可编辑","description": "系统字段，请勿修改。web新增为可编辑true，ide新增为不可编辑false。","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": {
        "concept": "DefaultValue","expression": {
        "concept": "BooleanLiteral","value": "true","label": null,"description": null,"folded": false,"offsetX": null,"offsetY": null,"name": ""
      },"playground": [],"name": ""
      },"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        "code": "true","executeCode": false
      }
      }],"indexes": [],"applyAnnotations": null,"composedBy": null
      },"nasl.core.Boolean": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      },"app.dataSources.defaultDS.entities.LCAPUserRoleMapping": {
        "concept": "Entity","name": "LCAPUserRoleMapping","uuid": "9b22719e3a3d423a80011df45e6c96c0","tableName": "lcap_user_role_mapping_f803ac","description": "用户与角色关联实体。操作该表可完成为角色添加成员、移除角色成员等。默认生成的字段不允许改动，可新增自定义字段。","origin": "ide","properties": [{
        "concept": "EntityProperty","name": "id","uuid": "e584fff07f7b4a95b2d62ae3bde0b0a3","columnName": "id","label": "主键","description": "主键","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": true,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdTime","uuid": "79bb34961efc42758188635630328af3","columnName": "created_time","label": "创建时间","description": "创建时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedTime","uuid": "df3df822c65e45d895f129d6320ce397","columnName": "updated_time","label": "更新时间","description": "更新时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdBy","uuid": "ff06061f163d40cba9b113998570a0b9","columnName": "created_by","label": "创建者","description": "创建者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedBy","uuid": "3a8e87e7d09f41b9a347dee6139622f0","columnName": "updated_by","label": "更新者","description": "更新者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "userId","uuid": "044b6393b2e44d0fae695d51c053c136","columnName": "user_id","label": "用户唯一ID","description": "","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "LCAPUser","relationProperty": "userId","deleteRule": "cascade","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "roleId","uuid": "344c35d4ae2c4d5289705ca927d59e03","columnName": "role_id","label": "角色唯一ID","description": "","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "LCAPRole","relationProperty": "id","deleteRule": "cascade","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "userName","uuid": "30ebcf2280ac4adc8a54fcd6c73e10ab","columnName": "user_name","label": "用户名","description": "","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "source","uuid": "92fb6ff1a81a423b8bb2555d7d17b9d9","columnName": "source","label": "用户来源","description": "","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      }],"indexes": [],"applyAnnotations": null,"composedBy": null
      },"app.dataSources.defaultDS.entities.LCAPPerResMapping": {
        "concept": "Entity","name": "LCAPPerResMapping","uuid": "b1f421f8ef2c46e497f62ac3b68cca51","tableName": "lcap_per_res_mapping_f803ac","description": "权限与资源的关联实体。一组权限会包含若干资源路径，权限对应角色。为角色绑定移除资源需操作该表。默认字段不允许改动，可新增字段。","origin": "ide","properties": [{
        "concept": "EntityProperty","name": "id","uuid": "5a24639c63b64d678689ff0c194507b5","columnName": "id","label": "主键","description": "主键","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": true,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdTime","uuid": "6a5d6f388b0c4bc2aeda35fc36885e9a","columnName": "created_time","label": "创建时间","description": "创建时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": true,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedTime","uuid": "a53a361e03374e42ad15cabbe110e1d2","columnName": "updated_time","label": "更新时间","description": "更新时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": true,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdBy","uuid": "583747b0573a4d3f862680afab128350","columnName": "created_by","label": "创建者","description": "创建者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedBy","uuid": "d708551e93204a648ddb4c2977e1140b","columnName": "updated_by","label": "更新者","description": "更新者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "permissionId","uuid": "558e9f3dd52a47819a3aea1104bffcff","columnName": "permission_id","label": "权限唯一ID","description": "","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "LCAPPermission","relationProperty": "id","deleteRule": "cascade","display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "resourceId","uuid": "37aef6fd81bc4d9e86ed9b201c7c19f6","columnName": "resource_id","label": "资源唯一ID","description": "","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "LCAPResource","relationProperty": "id","deleteRule": "cascade","display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      }],"indexes": [],"applyAnnotations": null,"composedBy": null
      },"app.dataSources.defaultDS.entities.LCAPRolePerMapping": {
        "concept": "Entity","name": "LCAPRolePerMapping","uuid": "dcca136830284dcba294534b83b4562d","tableName": "lcap_role_per_mapping_f803ac","description": "角色权限关联实体。新增角色一般需要新增角色对应的权限。默认生成的字段不允许改动，可新增自定义字段。","origin": "ide","properties": [{
        "concept": "EntityProperty","name": "id","uuid": "e942a5c891394507bb7f19bdb6622841","columnName": "id","label": "主键","description": "主键","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": true,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdTime","uuid": "7bd951f7fda34d698dd8b32c0d7e9cb0","columnName": "created_time","label": "创建时间","description": "创建时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedTime","uuid": "b51045b16b994c8b8a2a654a5a1310cb","columnName": "updated_time","label": "更新时间","description": "更新时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdBy","uuid": "204ca634fcea41e3b758c2b004dfa2c2","columnName": "created_by","label": "创建者","description": "创建者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedBy","uuid": "8384b1728bbf422bbee6f6f01b3c4209","columnName": "updated_by","label": "更新者","description": "更新者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "roleId","uuid": "0841e8e9ea4846338c2899eed0ed896b","columnName": "role_id","label": "角色唯一ID","description": "","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "LCAPRole","relationProperty": "id","deleteRule": "cascade","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": true
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "permissionId","uuid": "5de082661c2c44e599475f70f9ffc1be","columnName": "permission_id","label": "权限唯一ID","description": "","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "LCAPPermission","relationProperty": "id","deleteRule": "cascade","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": true
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      }],"indexes": [],"applyAnnotations": null,"composedBy": null
      },"app.dataSources.defaultDS.entities.LCAPUser": {
        "concept": "Entity","name": "LCAPUser","uuid": "95f0dbd32c2a44fe85a250e99c6f232d","tableName": "lcap_user_f803ac","description": "制品应用的用户实体。\n1 实体名称不允许改动\n2 默认生成的字段不允许改动\n3 可新增自定义字段（避免设置为非空且无默认值）","origin": "ide","properties": [{
        "concept": "EntityProperty","name": "id","uuid": "eb8e2110bee84e619206670559137766","columnName": "id","label": "主键","description": "主键","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": true,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": "Entity14476992223","composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdTime","uuid": "83997c3ab370445d8a765cccc8bd4c0d","columnName": "created_time","label": "创建时间","description": "创建时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedTime","uuid": "07c6104883d94d979113cfef3af112bb","columnName": "updated_time","label": "更新时间","description": "更新时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "userId","uuid": "ddecdb25261e4425ad798007209b8f0a","columnName": "user_id","label": "用户id","description": "第三方登录方式唯一id；普通登录使用userName+source作为userId","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "userName","uuid": "251148a7ab2e4c4fadde774d413c3798","columnName": "user_name","label": "用户名","description": "普通登录用户名，类似账号的概念","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "password","uuid": "70b968f7271a48e3ba8cac40f4a758b1","columnName": "password","label": "登录密码","description": "普通登录密码，密码建议加密存储。第三方登录不会存储密码","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": true,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "phone","uuid": "84822b2d256b442a90e1d6da2831acc1","columnName": "phone","label": "手机号","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "email","uuid": "dd0498cb249c46dea25628a2e3d33981","columnName": "email","label": "邮箱","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": false,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "displayName","uuid": "8667615ce6654ec888aff3527c3a7c6e","columnName": "display_name","label": "昵称","description": "展示的名称","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "status","uuid": "69006e336e7c4922b839a33f69d80244","columnName": "status","label": "状态","description": "状态，标识当前用户的状态是什么","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.enums","typeName": "UserStatusEnum"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": {
        "concept": "DefaultValue","expression": {
        "concept": "MemberExpression","object": {
        "concept": "Identifier","namespace": "app.enums","name": "UserStatusEnum","label": null,"description": null,"folded": false,"offsetX": null,"offsetY": null
      },"property": {
        "concept": "Identifier","name": "Normal","label": null,"description": null,"folded": false,"offsetX": null,"offsetY": null
      },"label": null,"description": null,"folded": false,"offsetX": null,"offsetY": null,"name": ""
      },"playground": [],"name": ""
      },"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": false,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        "code": "Normal","executeCode": false
      }
      },{
        "concept": "EntityProperty","name": "source","uuid": "ab20cb3c4edf42419fa333388bdb5902","columnName": "source","label": "用户来源","description": "当前条用户数据来自哪个用户源，如普通登录、微信登录","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.enums","typeName": "UserSourceEnum"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": {
        "concept": "DefaultValue","expression": {
        "concept": "MemberExpression","object": {
        "concept": "Identifier","namespace": "app.enums","name": "UserSourceEnum","label": null,"description": null,"folded": false,"offsetX": null,"offsetY": null
      },"property": {
        "concept": "Identifier","name": "Normal","label": null,"description": null,"folded": false,"offsetX": null,"offsetY": null
      },"label": null,"description": null,"folded": false,"offsetX": null,"offsetY": null,"name": ""
      },"playground": [],"name": ""
      },"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        "code": "Normal","executeCode": false
      }
      },{
        "concept": "EntityProperty","name": "directLeaderId","uuid": "bd00051c19104d848b389fd2f01fd987","columnName": "direct_leader_id","label": "上级领导","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      }],"indexes": [],"applyAnnotations": null,"composedBy": null
      },"app.dataSources.defaultDS.entities.LCAPDepartment": {
        "concept": "Entity","name": "LCAPDepartment","uuid": "548745ea39ff460f92a611b1b9a8b434","tableName": "lcap_department_f803ac","description": "部门实体。新增部门的同时一般需要指定上一级部门。默认生成的字段不允许改动，可新增自定义字段。","origin": "ide","properties": [{
        "concept": "EntityProperty","name": "id","uuid": "63cc2d6517284b69a33bc3d869dbf972","columnName": "id","label": "主键","description": "主键","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": true,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": "Entity14786594144","composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdTime","uuid": "6be41c1e0a33467fb709725704b24f6c","columnName": "created_time","label": "创建时间","description": "创建时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedTime","uuid": "120eb2c6a65a4ee6ab3bc8c64acc75e0","columnName": "updated_time","label": "更新时间","description": "更新时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdBy","uuid": "b671ca7adfbe4df98fd0386f4e40e627","columnName": "created_by","label": "创建者","description": "创建者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedBy","uuid": "96bf875e8b294d12b2b7da2d7730b22c","columnName": "updated_by","label": "更新者","description": "更新者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "name","uuid": "576ddd6fcd034cb191472f73b47192fd","columnName": "name","label": "部门名称","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "deptId","uuid": "8e023fe418ea499589d4fc8c560a2e90","columnName": "dept_id","label": "部门标识","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "parentDeptId","uuid": "e1582fd37cbb4fc095f2cfd2d64cecb2","columnName": "parent_dept_id","label": "父部门标识","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      }],"indexes": [{
        "concept": "EntityIndex","name": "deptIdIndex","indexName": null,"propertyNames": ["deptId"],"unique": true,"description": null
      }],"applyAnnotations": null,"composedBy": null
      },"app.dataSources.defaultDS.entities.LCAPUserDeptMapping": {
        "concept": "Entity","name": "LCAPUserDeptMapping","uuid": "e4a6499e3aab46419dc07457d517c0c1","tableName": "lcap_user_dept_mapping_f803ac","description": "用户与部门关联实体。操作该表可完成为部门添加用户、移除部门用户等。默认生成的字段不允许改动，可新增自定义字段。","origin": "ide","properties": [{
        "concept": "EntityProperty","name": "id","uuid": "b5ae65ead9564670a7d49932b9aa5d00","columnName": "id","label": "主键","description": "主键","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": true,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": "Entity10234567505","composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdTime","uuid": "5ffb80083ada4ea68152d623f4260db2","columnName": "created_time","label": "创建时间","description": "创建时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedTime","uuid": "efde2d4d804840db90c9f732c3792a9c","columnName": "updated_time","label": "更新时间","description": "更新时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdBy","uuid": "d3c2a748048f4be6833ea08f45593d9c","columnName": "created_by","label": "创建者","description": "创建者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedBy","uuid": "75335f8c59f7494ab0721f2c28189615","columnName": "updated_by","label": "更新者","description": "更新者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "userId","uuid": "eb934f80db034d43867d175f6b1014e5","columnName": "user_id","label": "用户ID","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "LCAPUser","relationProperty": "userId","deleteRule": "cascade","display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "deptId","uuid": "12fe99c2519d4aa8b98a44dd8da8e2db","columnName": "dept_id","label": "部门标识","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "LCAPDepartment","relationProperty": "deptId","deleteRule": "cascade","display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "isDeptLeader","uuid": "df7e53b2c04442d8b9e86a365a43ad8d","columnName": "is_dept_leader","label": "是否是部门主管","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": {
        "concept": "DefaultValue","expression": {
        "concept": "NumericLiteral","value": "0","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": null,"returnType": null,"properties": null,"changedTime": 1710752226956
      },"label": null,"description": null,"folded": false,"offsetX": null,"offsetY": null,"changedTime": 1710752226967
      },"playground": []
      },"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        "code": "0","executeCode": false
      }
      }],"indexes": [],"applyAnnotations": [],"composedBy": null
      },"app.dataSources.defaultDS.entities.LCAPRowRuleItem": {
        "concept": "Entity","name": "LCAPRowRuleItem","uuid": "f1cb84c6c4094d47a227df126fdf9ff9","tableName": "lcap_row_rule_item_f803ac","description": "行权限自定义规则","origin": "ide","properties": [{
        "concept": "EntityProperty","name": "id","uuid": "1b3391f0bb80488cbb6de9f4abd72894","columnName": "id","label": "主键","description": "主键","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": true,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": "Entity12772336915","composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdTime","uuid": "a4f76bc605844f7bb811a7e5f9f279bb","columnName": "created_time","label": "创建时间","description": "创建时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedTime","uuid": "11a553fcc5ce4beb938bd8de6ecb61bf","columnName": "updated_time","label": "更新时间","description": "更新时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdBy","uuid": "e317ab7c73ac43aa986822ba1b9867b9","columnName": "created_by","label": "创建者","description": "创建者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedBy","uuid": "59c9fa5c2f5f4ae2bfc43b9fd31bff33","columnName": "updated_by","label": "更新者","description": "更新者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "dataPermissionId","uuid": "3d705e38020f4920a0e4e7dc006abdd8","columnName": "data_permission_id","label": "所属数据权限ID","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "LCAPDataPermission","relationProperty": "id","deleteRule": "cascade","display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "propertyName","uuid": "7033431e8e3b4b06bc11a534598e7371","columnName": "property_name","label": "实体的属性名","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "comparison","uuid": "0e7e49e2010f46508f78de07248c8038","columnName": "comparison","label": "实体属性与被比较项之间的比较符","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "values","uuid": "f7eb089ca80b46e88192b37247c6b40b","columnName": "values","label": "被比较项的字面量","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }]
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": false,"inForm": false,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "valuesType","uuid": "893963e4119a49658570e278ee2f03d1","columnName": "values_type","label": "字面量取值类型","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      }],"indexes": [],"applyAnnotations": null,"composedBy": null
      },"nasl.collection.List<nasl.core.String>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }]
      },"app.dataSources.defaultDS.entities.LCAPColumnRule": {
        "concept": "Entity","name": "LCAPColumnRule","uuid": "0e01aa9b69944d6092848f352e018242","tableName": "lcap_column_rule_f803ac","description": "列权限","origin": "ide","properties": [{
        "concept": "EntityProperty","name": "id","uuid": "116e7d39db4146979c47e250b2eba35a","columnName": "id","label": "主键","description": "主键","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": true,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": "Entity11727381643","composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdTime","uuid": "dbc2496377e24e2fb69f428ce7c8cd38","columnName": "created_time","label": "创建时间","description": "创建时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedTime","uuid": "a41d95915aad4f149a810e98b146be21","columnName": "updated_time","label": "更新时间","description": "更新时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdBy","uuid": "3736eb8e1bf144c4875896971e7129bf","columnName": "created_by","label": "创建者","description": "创建者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedBy","uuid": "91e6e2b8e1124879b9c6483022dc00c8","columnName": "updated_by","label": "更新者","description": "更新者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "dataPermissionId","uuid": "7eb26f49e50240789db12a52cdf705b4","columnName": "data_permission_id","label": "所属数据权限ID","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "LCAPDataPermission","relationProperty": "id","deleteRule": "cascade","display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "propertyName","uuid": "f4d0bb8dee8d486ba42f08e1cb7c2551","columnName": "property_name","label": "实体的属性名","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "columnRuleType","uuid": "27eefa9d77454d0aa5a63218014c34f2","columnName": "column_rule_type","label": "列权限规则","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      }],"indexes": [],"applyAnnotations": null,"composedBy": null
      },"app.dataSources.defaultDS.entities.LCAPEntityMeta": {
        "concept": "Entity","name": "LCAPEntityMeta","uuid": "94239efd9fef4c99a53085370c9aeeb9","tableName": "lcap_entity_meta_f803ac","description": "实体元信息表","origin": "ide","properties": [{
        "concept": "EntityProperty","name": "id","uuid": "ebd98d15321a48e09dbe7e2f0816143e","columnName": "id","label": "主键","description": "主键","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": true,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": "Entity13835656700","composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdTime","uuid": "23ec4541e2c9424c9eaae89a7bd3cffa","columnName": "created_time","label": "创建时间","description": "创建时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedTime","uuid": "9eda46816e83420f88980278fd8a196f","columnName": "updated_time","label": "更新时间","description": "更新时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdBy","uuid": "7d18fe9517f148e082c0174510033b0f","columnName": "created_by","label": "创建者","description": "创建者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedBy","uuid": "44209299edf64e13ad4cf08534f725dd","columnName": "updated_by","label": "更新者","description": "更新者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "entityName","uuid": "8178d17e9b474b9a8c77e8021ac6bacb","columnName": "entity_name","label": "实体名","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "tableName","uuid": "aa4a320a4a554f4e82c1186fbe490b72","columnName": "table_name","label": "实体的表名","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "entityDescription","uuid": "d9f1e13e27b14e01b478d2778e00034c","columnName": "entity_description","label": "实体的描述","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "properties","uuid": "d09756cccca04b23b0b549bafc89e6eb","columnName": "properties","label": "属性列表","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "extensions.lcap_annotation_data_permission.structures","typeName": "EntityPropertyStructure"
      }]
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": false,"inForm": false,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      }],"indexes": [],"applyAnnotations": null,"composedBy": null
      },"nasl.collection.List<extensions.lcap_annotation_data_permission.structures.EntityPropertyStructure>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "extensions.lcap_annotation_data_permission.structures","typeName": "EntityPropertyStructure"
      }]
      },"extensions.lcap_annotation_data_permission.structures.EntityPropertyStructure": {
        "concept": "Structure","name": "EntityPropertyStructure","description": "","properties": [{
        "concept": "StructureProperty","name": "propertyName","description": "属性名称","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "propertyTitle","description": "属性标题","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "propertyType","description": "属性类型","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "columnName","description": "数据库列名","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "propertyOptions","description": "属性可选项","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "extensions.lcap_annotation_data_permission.structures","typeName": "PropertyOption"
      }]
      },"defaultCode": {
        
      }
      }]
      },"app.dataSources.defaultDS.entities.LCAPLogicMeta": {
        "concept": "Entity","name": "LCAPLogicMeta","uuid": "28dff0e3b6cf458ca53c4fecf4ec59a3","tableName": "lcap_logic_meta_f803ac","description": "逻辑元信息表","origin": "ide","properties": [{
        "concept": "EntityProperty","name": "id","uuid": "b9e5a89f19a84823995966218a9a8c70","columnName": "id","label": "主键","description": "主键","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": true,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": "Entity10540917785","composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdTime","uuid": "97dc855339d4498e892340e52fbe545e","columnName": "created_time","label": "创建时间","description": "创建时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedTime","uuid": "79d3166abd1c4122b6bd689e229a3230","columnName": "updated_time","label": "更新时间","description": "更新时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdBy","uuid": "84b891ba132e4188be1047e2b6ec0ab4","columnName": "created_by","label": "创建者","description": "创建者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedBy","uuid": "3e1e53fde6724348b21aaf0002a7a651","columnName": "updated_by","label": "更新者","description": "更新者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "logicName","uuid": "3666f4d489484a4e9e6ce7f4b2685398","columnName": "logic_name","label": "逻辑名","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "returnShape","uuid": "40540503719d4c5882f48a713759219b","columnName": "return_shape","label": "逻辑返回值形式","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "properties","uuid": "f8d15a165c1c49d696ada38cfdecfd98","columnName": "properties","label": "属性列表","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "extensions.lcap_annotation_data_permission.structures","typeName": "LogicPropertyStructure"
      }]
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": false,"inForm": false,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "logicDescription","uuid": "59465b3b404f488e9292bb5b815cc2f6","columnName": "logic_description","label": "逻辑描述","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      }],"indexes": [],"applyAnnotations": null,"composedBy": null
      },"nasl.collection.List<extensions.lcap_annotation_data_permission.structures.LogicPropertyStructure>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "extensions.lcap_annotation_data_permission.structures","typeName": "LogicPropertyStructure"
      }]
      },"extensions.lcap_annotation_data_permission.structures.LogicPropertyStructure": {
        "concept": "Structure","name": "LogicPropertyStructure","description": "","properties": [{
        "concept": "StructureProperty","name": "propertyName","description": "属性名称 e.g.1: id e.g.2: user.schools[].address.cityCode","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "propertyTitle","description": "属性的描述 e.g.1: 主键 e.g.2: 名","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "propertyTitlePath","description": "属性路径上每一层的描述 e.g.1: 主键 e.g.2: 上过的学校 当前校长 曾用名 名","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "propertyType","description": "属性类型","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "propertyOptions","description": "属性可选项","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "extensions.lcap_annotation_data_permission.structures","typeName": "PropertyOption"
      }]
      },"defaultCode": {
        
      }
      }]
      },"app.dataSources.defaultDS.entities.LCAPDataPermission": {
        "concept": "Entity","name": "LCAPDataPermission","uuid": "2455b76848984557906dfe96e9345e86","tableName": "lcap_data_permission_f803ac","description": "数据权限表","origin": "ide","properties": [{
        "concept": "EntityProperty","name": "id","uuid": "401a6d69d746429da179d06660944e8c","columnName": "id","label": "主键","description": "主键","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": true,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": "Entity10953916533","composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdTime","uuid": "b9adb58a426b4b389c226655f0f6a16b","columnName": "created_time","label": "创建时间","description": "创建时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedTime","uuid": "efb4bad92ab74a7aa3c9b375a51dcade","columnName": "updated_time","label": "更新时间","description": "更新时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdBy","uuid": "dc591b8e464b43798faced24f511435a","columnName": "created_by","label": "创建者","description": "创建者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedBy","uuid": "48ee7c9a07df4dc8b73b471cae9b8400","columnName": "updated_by","label": "更新者","description": "更新者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "resourceName","uuid": "7b1a941bf5c64e37a7abfd0cc31c0141","columnName": "resource_name","label": "所属实体名或逻辑名","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "resourceType","uuid": "5b5bc647c36d43a3aa355e886d68eb23","columnName": "resource_type","label": "所属资源类型","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "rowRuleType","uuid": "2861cbb35ec0425c945b9eb93be2a1de","columnName": "row_rule_type","label": "行权限类型","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "relation","uuid": "765e01b9c1014428a37e284cf2463a7e","columnName": "relation","label": "行权限自定义规则间的逻辑关系","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "roleId","uuid": "7e2a932c8a934c3fa0a1b62636eda600","columnName": "role_id","label": "所属角色ID","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "LCAPRole","relationProperty": "id","deleteRule": "cascade","display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      }],"indexes": [],"applyAnnotations": null,"composedBy": null
      },"app.dataSources.defaultDS.entities.CoffeeOrderMapping": {
        "concept": "Entity","name": "CoffeeOrderMapping","uuid": "89ee29d8d221413da0dfc1e473e56484","tableName": "coffee_order_mapping","description": "咖啡订单中间表","origin": "ide","properties": [{
        "concept": "EntityProperty","name": "id","uuid": "f153d4a63db145b7bd797ebb56dea51f","columnName": "id","label": "主键","description": "主键","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": true,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": "Entity14638963982","composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdTime","uuid": "3afaf2be572047f790402e42c98d8b45","columnName": "created_time","label": "创建时间","description": "创建时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedTime","uuid": "7970c67f05d64b69b2893fa580283585","columnName": "updated_time","label": "更新时间","description": "更新时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdBy","uuid": "bdc99a5a1f4341a09f51d1cf2715dc91","columnName": "created_by","label": "创建者","description": "创建者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedBy","uuid": "34ee29d2817b4256888cbcbbf492fedd","columnName": "updated_by","label": "更新者","description": "更新者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "orderId","uuid": "989300051a6246fc80844dd1a4092927","columnName": "order_id","label": "订单id","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "OrderEntity","relationProperty": "id","deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "coffeeId","uuid": "336d8589c75a40d38e959347ca86b929","columnName": "coffee_id","label": "咖啡id","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "Coffee","relationProperty": "id","deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "coffeeQuantity","uuid": "0299d55df5fa4bf0b3310821433c8847","columnName": "coffee_quantity","label": "下单数量","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      }],"indexes": [],"applyAnnotations": null,"composedBy": null
      },"app.dataSources.defaultDS.entities.OrderEntity": {
        "concept": "Entity","name": "OrderEntity","uuid": "47e1850953ca4d7692fbb74c942e2667","tableName": "order_entity","description": "订单信息","origin": "ide","properties": [{
        "concept": "EntityProperty","name": "id","uuid": "126a401e315e425fb22a37f8be0e6ebe","columnName": "id","label": "主键","description": "主键","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": true,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": "Entity14606724129","composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdTime","uuid": "faecd1c063df4cb5ade1092890b86009","columnName": "created_time","label": "创建时间","description": "创建时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedTime","uuid": "30405d508bad484f9cac9b6ecafd5551","columnName": "updated_time","label": "更新时间","description": "更新时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdBy","uuid": "018b52f63aee4280b099d9a274144713","columnName": "created_by","label": "创建者","description": "创建者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedBy","uuid": "d7203fdd83184d3fb248c9d48b87b7b4","columnName": "updated_by","label": "更新者","description": "更新者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "totalAmount","uuid": "8f027ab3f69249b1b9751b6904d663b7","columnName": "total_amount","label": "订单总金额","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Decimal","ruleMap": {
        "scale": 2
      }
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": false,"inForm": false,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "coffeeCount","uuid": "ac9fa81b12414ae792d8a32b27b23338","columnName": "coffee_count","label": "咖啡总数量","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": false,"inForm": false,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "orderStatus","uuid": "a96c600577af4f94be2604ee80846ae2","columnName": "order_status","label": "订单状态","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.enums","typeName": "OrderStatusEnum"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": false,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "consigneeName","uuid": "07217826587344babff50cb681572954","columnName": "consignee_name","label": "收货人姓名","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "consigneePhone","uuid": "baaed3318cc1470eba33cc4e90db3e38","columnName": "consignee_phone","label": "收货人电话","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "consigneeArea","uuid": "cc3d57bd090b45d1bd1dc72b098ed9e4","columnName": "consignee_area","label": "收货人地区","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "consigneeAddress","uuid": "563ccedf1c214a0aa5c5e1c4de816b85","columnName": "consignee_address","label": "收货人详细地址","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "pickupMethod","uuid": "a639f70902cf4b03bb7a7778ab7ada60","columnName": "pickup_method","label": "取货方式","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.enums","typeName": "PickupMethodEnum"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": false,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "remark","uuid": "a7f8bbff793740859c9ca8a030feeb03","columnName": "remark","label": "备注","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "coffeeList","uuid": "44f99b16b415490abff005843eea4423","columnName": "coffee_list","label": "咖啡信息","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.structures","typeName": "CoffeeStructure"
      }]
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      }],"indexes": [],"applyAnnotations": null,"composedBy": null
      },"nasl.core.Decimal": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Decimal","ruleMap": {
        "scale": 2
      }
      },"nasl.collection.List<app.structures.CoffeeStructure>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.structures","typeName": "CoffeeStructure"
      }]
      },"app.structures.CoffeeStructure": {
        "concept": "Structure","name": "CoffeeStructure","origin": null,"description": "点单咖啡信息结构","typeParams": [],"properties": [{
        "concept": "StructureProperty","name": "coffee","label": "咖啡","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "Coffee"
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "count","label": "数量","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"app.dataSources.defaultDS.entities.Coffee": {
        "concept": "Entity","name": "Coffee","uuid": "fbd20a8f4bfd4308983651d0096a8ae1","tableName": "coffee","description": null,"origin": "ide","properties": [{
        "concept": "EntityProperty","name": "id","uuid": "c11ef3985b58477889bcdde844de6306","columnName": "id","label": "主键","description": "主键","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": true,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": "Entity18571242246","composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdTime","uuid": "dccc372246824572b5fa5fa98e80292d","columnName": "created_time","label": "创建时间","description": "创建时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedTime","uuid": "4d26b23ab017491faa3160b78c1e5bbb","columnName": "updated_time","label": "更新时间","description": "更新时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdBy","uuid": "7d4b0bdca5614ba4a5728ffa50fa82ca","columnName": "created_by","label": "创建者","description": "创建者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedBy","uuid": "b0e2da02fded46bf8ef386a254c267c7","columnName": "updated_by","label": "更新者","description": "更新者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "coffeename","uuid": "9b753ed896504d7c99ab21c8f8347abc","columnName": "coffeename","label": "咖啡名称","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "description","uuid": "ea473efd35ed4ba891c0fb8062eca5f8","columnName": "description","label": "咖啡简介","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "price","uuid": "b36e14e42990462da6adc76c4a2744d3","columnName": "price","label": "价格","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Decimal","ruleMap": {
        "scale": 2
      }
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": false,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "coffeeImage","uuid": "da2631df558e40988d8616e77dba8bb4","columnName": "coffee_image","label": "咖啡图片","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": {
        "concept": "DatabaseTypeAnnotation","typeName": "varchar","arguments": {
        "length": "4000"
      }
      },"required": true,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": false,"inForm": true,"inDetail": true
      },"rules": ["maxLength(4000)"],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "coffeeCategory","uuid": "e227a47624dd465682c7ee99bf0f1769","columnName": "coffee_category","label": "咖啡类目","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "CoffeeCategory","relationProperty": "id","deleteRule": "cascade","display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "isDisplay","uuid": "f0b8ad95ccf848fdad70cf3751668ba3","columnName": "is_display","label": "是否显示","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      }],"indexes": [],"applyAnnotations": null,"composedBy": null
      },"app.dataSources.defaultDS.entities.CoffeeCategory": {
        "concept": "Entity","name": "CoffeeCategory","uuid": "7dba2f7e803b4962966d7c33e66edc4d","tableName": "coffee_category","description": "咖啡类目","origin": "ide","properties": [{
        "concept": "EntityProperty","name": "id","uuid": "bbafaf9db8b0480d9374c724f00b3782","columnName": "id","label": "主键","description": "主键","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": true,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": "Entity15477563177","composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdTime","uuid": "275487db561a44f79f37f345f9bb43aa","columnName": "created_time","label": "创建时间","description": "创建时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedTime","uuid": "cffc0bb61ff14ad7aa3f6c8d76aa44ed","columnName": "updated_time","label": "更新时间","description": "更新时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdBy","uuid": "c382ea2bc6e54f1cb0272ee581991b0c","columnName": "created_by","label": "创建者","description": "创建者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedBy","uuid": "2c2ea3553179403b88ef8d744a2c1af7","columnName": "updated_by","label": "更新者","description": "更新者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "cateGoryName","uuid": "c04fe022cde04f4db2ea1e5bc5f835cd","columnName": "cate_gory_name","label": "类目名称","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": {
        "concept": "DatabaseTypeAnnotation","typeName": "varchar","arguments": {
        "length": "30"
      }
      },"required": true,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": ["maxLength(30)"],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "isDisplay","uuid": "f81c5e9edf8a48b8817709abd14772ef","columnName": "is_display","label": "是否显示","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": {
        "concept": "DefaultValue","expression": {
        "concept": "BooleanLiteral","value": "false","folded": false
      },"playground": [],"changedTime": 1716881890013
      },"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        "code": "false","executeCode": false
      }
      }],"indexes": [],"applyAnnotations": null,"composedBy": null
      },"app.dataSources.defaultDS.entities.Slide": {
        "concept": "Entity","name": "Slide","uuid": "334d9cb29833490588a253e4029af40a","tableName": "slide","description": "幻灯片管理","origin": "ide","properties": [{
        "concept": "EntityProperty","name": "id","uuid": "643e64bbead446348d1ca6c54e35043d","columnName": "id","label": "主键","description": "主键","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": true,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": "Entity10449539556","composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdTime","uuid": "954a273cdc364b0399a2dcc9bdc6de0f","columnName": "created_time","label": "创建时间","description": "创建时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedTime","uuid": "df59948432ac4eec9a8134b9d2cca3dc","columnName": "updated_time","label": "更新时间","description": "更新时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdBy","uuid": "8f220d002b214881af21f7ceb40053a2","columnName": "created_by","label": "创建者","description": "创建者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedBy","uuid": "6259cd09dac84e9bb13e90f3ce78c3c4","columnName": "updated_by","label": "更新者","description": "更新者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "slideImage","uuid": "9c8d368c399d4616b8699cd2cbd6ad51","columnName": "slide_image","label": "幻灯片图片","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": {
        "concept": "DatabaseTypeAnnotation","typeName": "varchar","arguments": {
        "length": "4000"
      }
      },"required": true,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": false,"inForm": true,"inDetail": true
      },"rules": ["maxLength(4000)"],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "displayOrder","uuid": "de8a71f10aa44cfb9ca7f91f2b3753f9","columnName": "display_order","label": "显示顺序","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": false,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "isDisplay","uuid": "4c7c724164bf41b29456fdccc148bdaa","columnName": "is_display","label": "是否显示","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": {
        "concept": "DefaultValue","expression": {
        "concept": "BooleanLiteral","value": "false","folded": false
      },"playground": [],"changedTime": 1716881740313
      },"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        "code": "false","executeCode": false
      }
      }],"indexes": [],"applyAnnotations": null,"composedBy": null
      },"app.structures.LCAPGetResourceResult": {
        "concept": "Structure","name": "LCAPGetResourceResult","origin": null,"description": null,"typeParams": [],"properties": [{
        "concept": "StructureProperty","name": "resourceValue","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "resourceType","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"app.structures.LCAPGetPerResult": {
        "concept": "Structure","name": "LCAPGetPerResult","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "lACPPermission","label": "权限","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPPermission"
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "roleList","label": "权限对应角色","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPRole"
      }]
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "editable","label": "\t 是否可编辑","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"nasl.collection.List<app.dataSources.defaultDS.entities.LCAPRole>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPRole"
      }]
      },"app.structures.LCAPPermissionAndResource": {
        "concept": "Structure","name": "LCAPPermissionAndResource","origin": "ide","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "text","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "value","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"app.structures.LCAPDataMetaStructure": {
        "concept": "Structure","name": "LCAPDataMetaStructure","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "dataName","label": "实体或逻辑名称","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "entityProperties","label": "实体属性列表","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "extensions.lcap_annotation_data_permission.structures","typeName": "EntityPropertyStructure"
      }]
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "logicProperties","label": "逻辑属性列表","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "extensions.lcap_annotation_data_permission.structures","typeName": "LogicPropertyStructure"
      }]
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "id","label": "唯一ID","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "rowRuleType","label": "行权限类型","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "relation","label": "行逻辑间关系","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "dataDescription","label": "实体或逻辑描述","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "defaultDataSource","label": "默认数据源","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "showDataName","label": "展示的实体或逻辑名称","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "dataType","label": "实体或逻辑类型","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "hasCreatedBy","label": "是否有创建者字段","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      },"defaultValue": {
        "concept": "DefaultValue","expression": {
        "concept": "BooleanLiteral","value": "false","folded": false
      },"playground": [],"changedTime": 1713614669267
      },"jsonName": null,"defaultCode": {
        "code": "false","executeCode": false
      }
      }]
      },"app.structures.LCAPDataMetaColunmRule": {
        "concept": "Structure","name": "LCAPDataMetaColunmRule","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "propertyName","label": "属性名","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "propertyTitle","label": "属性标题","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "propertyType","label": "属性类型","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "propertyTitlePath","label": "属性路径上每一层的描述","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "propertyPermission","label": "属性权限","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "columnRule","label": "列规则","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPColumnRule"
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "propertyOptions","label": "属性类型为枚举的集合","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "extensions.lcap_annotation_data_permission.structures","typeName": "PropertyOption"
      }]
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "showPropertyNameList","label": "展示的第二层属性名集合","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.structures","typeName": "LCAPDataMetaColunmRule"
      }]
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "showPropertyName","label": "展示的属性名","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "showPropertyName2","label": "展示的第二层属性名","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "isCheck","label": "列规则是否可选","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"nasl.collection.List<extensions.lcap_annotation_data_permission.structures.PropertyOption>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "extensions.lcap_annotation_data_permission.structures","typeName": "PropertyOption"
      }]
      },"extensions.lcap_annotation_data_permission.structures.PropertyOption": {
        "concept": "Structure","name": "PropertyOption","description": "","properties": [{
        "concept": "StructureProperty","name": "code","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "title","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultCode": {
        
      }
      }]
      },"nasl.collection.List<app.structures.LCAPDataMetaColunmRule>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.structures","typeName": "LCAPDataMetaColunmRule"
      }]
      },"app.structures.LCAPGetUserResult": {
        "concept": "Structure","name": "LCAPGetUserResult","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "user","label": "用户","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPUser"
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "userDept","label": "用户部门","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPUserDeptMapping"
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "dept","label": "部门","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPDepartment"
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "deptUser","label": "直属主管","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"app.structures.LCAPDataMetaRowRule": {
        "concept": "Structure","name": "LCAPDataMetaRowRule","origin": null,"description": null,"typeParams": [],"properties": [{
        "concept": "StructureProperty","name": "propertys","label": "属性列表","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.structures","typeName": "LCAPDataMetaColunmRule"
      }]
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "comparisons","label": "比较符号集合","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.structures","typeName": "LCAPComparisonResult"
      }]
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "propertyName","label": "选中属性","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "values","label": "值集合","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "comparison","label": "比较值","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "propertyType","label": "属性类型","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "dataPermissionId","label": "数据权限ID","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "valuesType","label": "选择的值类型","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "propertyOptions","label": "属性类型为枚举的集合","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "extensions.lcap_annotation_data_permission.structures","typeName": "PropertyOption"
      }]
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "propertyTitle","label": "属性标题","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"nasl.collection.List<app.structures.LCAPComparisonResult>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.structures","typeName": "LCAPComparisonResult"
      }]
      },"app.structures.LCAPComparisonResult": {
        "concept": "Structure","name": "LCAPComparisonResult","origin": null,"description": null,"typeParams": [],"properties": [{
        "concept": "StructureProperty","name": "text","label": "标题","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "value","label": "值","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"app.structures.SidebarStructure": {
        "concept": "Structure","name": "SidebarStructure","origin": null,"description": "侧边栏","typeParams": [],"properties": [{
        "concept": "StructureProperty","name": "content","label": "内容","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "isSelect","label": "是否选中","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      },"defaultValue": {
        "concept": "DefaultValue","expression": {
        "concept": "BooleanLiteral","value": "false","folded": false
      },"playground": [],"changedTime": 1717320090019
      },"jsonName": null,"defaultCode": {
        "code": "false","executeCode": false
      }
      },{
        "concept": "StructureProperty","name": "value","label": "值","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"app.structures.LCAPPostRequest": {
        "concept": "Structure","name": "LCAPPostRequest","origin": "ide","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "response","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.http","typeName": "HttpResponse","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }]
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "status","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "requestInfo","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "Map","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }]
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"nasl.http.HttpResponse<nasl.core.String>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.http","typeName": "HttpResponse","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }]
      },"nasl.collection.Map<nasl.core.String, nasl.core.String>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "Map","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }]
      },"extensions.lcap_auth.structures.LCAPUser": {
        "concept": "Structure","name": "LCAPUser","description": "System built in generic class LCAPUser","typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "userId","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": null,"returnType": null,"properties": null,"name": ""
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "userName","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": null,"returnType": null,"properties": null,"name": ""
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "extensionInfos","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "Map","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": null,"returnType": null,"properties": null,"name": "K"
      },{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": null,"returnType": null,"properties": null,"name": "V"
      }],"returnType": null,"properties": null,"name": ""
      },"defaultCode": {
        
      }
      }]
      },"extensions.lcap_permission.structures.UserResourceQueryResult": {
        "concept": "Structure","name": "UserResourceQueryResult","description": "System built in generic class DeployLogicAuthMetaData","typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "resourceValue","description": "资源值(通常为浏览器上的访问路径或逻辑请求路径)","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": null,"returnType": null,"properties": null,"name": ""
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "resourceType","description": "资源的类型(表示当前资源是页面还是组件或者逻辑)","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": null,"returnType": null,"properties": null,"name": ""
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "clientType","description": "资源所属的端标识(多端场景下存在重名资源)","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": null,"returnType": null,"properties": null,"name": ""
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "description","description": "资源的描述信息","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": null,"returnType": null,"properties": null,"name": ""
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "createdTime","description": "资源的创建时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": null,"returnType": null,"properties": null,"name": ""
      },"defaultCode": {
        
      }
      }]
      },"extensions.lcap_permission.structures.DeployResourceMetaData": {
        "concept": "Structure","name": "DeployResourceMetaData","description": "System built in generic class LCAPPermissionService","typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "resourceValue","description": "资源值(通常为浏览器上的访问路径或逻辑请求路径)","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": null,"returnType": null,"properties": null,"name": ""
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "resourceType","description": "资源的类型(表示当前资源是页面还是组件或者逻辑)","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": null,"returnType": null,"properties": null,"name": ""
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "clientType","description": "资源所属的端标识(多端场景下存在重名资源)","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": null,"returnType": null,"properties": null,"name": ""
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "description","description": "资源的描述信息","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": null,"returnType": null,"properties": null,"name": ""
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "createdTime","description": "资源的创建时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": null,"returnType": null,"properties": null,"name": ""
      },"defaultCode": {
        
      }
      }]
      },"extensions.lcap_annotation_data_permission.structures.LogicStructure": {
        "concept": "Structure","name": "LogicStructure","description": "","properties": [{
        "concept": "StructureProperty","name": "logicName","description": "逻辑名称","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "logicDescription","description": "逻辑描述","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "returnShape","description": "返回值的形式","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "properties","description": "属性列表 1. 若returnShape为simpleValue、listOfSimpleValues、pageOfSimpleValues，则properties只有1个property元素，且它的propertyName固定为null 2. 若returnShape为object、listOfObjects、pageOfObjects，则properties代表返回值中的Object中的展开后的属性列表","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "extensions.lcap_annotation_data_permission.structures","typeName": "LogicPropertyStructure"
      }]
      },"defaultCode": {
        
      }
      }]
      },"extensions.lcap_annotation_data_permission.structures.RowRuleItem": {
        "concept": "Structure","name": "RowRuleItem","description": "","properties": [{
        "concept": "StructureProperty","name": "COMPARISON_EQ","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "COMPARISON_NE","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "COMPARISON_GT","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "COMPARISON_LT","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "COMPARISON_GE","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "COMPARISON_LE","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "COMPARISON_LIKE","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "COMPARISON_NOT_LIKE","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "COMPARISON_LEFT_LIKE","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "COMPARISON_NOT_LEFT_LIKE","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "COMPARISON_RIGHT_LIKE","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "COMPARISON_NOT_RIGHT_LIKE","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "COMPARISON_IN","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "COMPARISON_NOT_IN","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "propertyName","description": "属性名，只支持String、Date、Time、DateTime、Boolean、Integer、Decimal、Enum类型的属性作为行权限","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "comparison","description": "逻辑比较符，可选值\"EQ\"、\"NE\"、\"GT\"、\"LT\"、\"GE\"、\"LE\"、\"LIKE\"、\"NOT_LIKE\"、\"LEFT_LIKE\"、\"NOT_LEFT_LIKE\"、\"RIGHT_LIKE \"、\"NOT_RIGHT_LIKE\"、\"IN\"、\"NOT_IN\" @see RowRuleItem#COMPARISON_EQ @see RowRuleItem#COMPARISON_NE @see RowRuleItem#COMPARISON_GT @see RowRuleItem#COMPARISON_LT @see RowRuleItem#COMPARISON_GE @see RowRuleItem#COMPARISON_LE @see RowRuleItem#COMPARISON_LIKE @see RowRuleItem#COMPARISON_NOT_LIKE @see RowRuleItem#COMPARISON_LEFT_LIKE @see RowRuleItem#COMPARISON_NOT_LEFT_LIKE @see RowRuleItem#COMPARISON_RIGHT_LIKE @see RowRuleItem#COMPARISON_NOT_RIGHT_LIKE @see RowRuleItem#COMPARISON_IN @see RowRuleItem#COMPARISON_NOT_IN","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "values","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }]
      },"defaultCode": {
        
      }
      }]
      },"extensions.lcap_annotation_data_permission.structures.RowRule": {
        "concept": "Structure","name": "RowRule","description": "","properties": [{
        "concept": "StructureProperty","name": "RELATION_OR","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "RELATION_AND","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "relation","description": "本层行规则间的逻辑关系符，不能为null，可选值\"OR\"、\"AND\" @see RowRule#RELATION_OR @see RowRule#RELATION_AND","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "items","description": "本层行规则列表，不能为empty","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "extensions.lcap_annotation_data_permission.structures","typeName": "RowRuleItem"
      }]
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "children","description": "子行规则列表","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "extensions.lcap_annotation_data_permission.structures","typeName": "RowRule"
      }]
      },"defaultCode": {
        
      }
      }]
      },"nasl.collection.List<extensions.lcap_annotation_data_permission.structures.RowRuleItem>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "extensions.lcap_annotation_data_permission.structures","typeName": "RowRuleItem"
      }]
      },"nasl.collection.List<extensions.lcap_annotation_data_permission.structures.RowRule>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "extensions.lcap_annotation_data_permission.structures","typeName": "RowRule"
      }]
      },"extensions.lcap_annotation_data_permission.structures.ColumnRule": {
        "concept": "Structure","name": "ColumnRule","description": "","properties": [{
        "concept": "StructureProperty","name": "COLUMN_RULE_TYPE_NONE","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "COLUMN_RULE_TYPE_READ","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "COLUMN_RULE_TYPE_READ_WRITE","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "propertyName","description": "属性名，不能为null","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "columnRuleType","description": "该属性的列规则，不能为null， 对于实体，可选值为\"none\"、\"read\"、\"readWrite\" 对于逻辑、可选值为\"none\"、\"read\" @see #COLUMN_RULE_TYPE_NONE @see #COLUMN_RULE_TYPE_READ @see #COLUMN_RULE_TYPE_READ_WRITE","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultCode": {
        
      }
      }]
      },"extensions.lcap_annotation_data_permission.structures.DataPermission": {
        "concept": "Structure","name": "DataPermission","description": "","properties": [{
        "concept": "StructureProperty","name": "rowRule","description": "行权限","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "extensions.lcap_annotation_data_permission.structures","typeName": "RowRule"
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "columnRules","description": "列权限","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "extensions.lcap_annotation_data_permission.structures","typeName": "ColumnRule"
      }]
      },"defaultCode": {
        
      }
      }]
      },"nasl.collection.List<extensions.lcap_annotation_data_permission.structures.ColumnRule>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "extensions.lcap_annotation_data_permission.structures","typeName": "ColumnRule"
      }]
      },"extensions.lcap_annotation_data_permission.structures.ResourceDataPermission": {
        "concept": "Structure","name": "ResourceDataPermission","description": "","properties": [{
        "concept": "StructureProperty","name": "RESOURCE_TYPE_ENTITY","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "RESOURCE_TYPE_LOGIC","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "resourceName","description": "资源名，不能为null","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "resourceType","description": "资源类型，不能为null，可选值\"ENTITY\"、\"LOGIC\" @see ResourceDataPermission#RESOURCE_TYPE_ENTITY @see ResourceDataPermission#RESOURCE_TYPE_LOGIC","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "dataPermissions","description": "被授予的数据权限，empty代表未被授予数据权限","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "extensions.lcap_annotation_data_permission.structures","typeName": "DataPermission"
      }]
      },"defaultCode": {
        
      }
      }]
      },"nasl.collection.List<extensions.lcap_annotation_data_permission.structures.DataPermission>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "extensions.lcap_annotation_data_permission.structures","typeName": "DataPermission"
      }]
      },"extensions.lcap_annotation_data_permission.structures.EntityStructure": {
        "concept": "Structure","name": "EntityStructure","description": "","properties": [{
        "concept": "StructureProperty","name": "entityName","description": "实体名称 e.g.: defaultOS.Foo","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "tableName","description": "表名","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "entityDescription","description": "实体描述","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "properties","description": "实体属性列表","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "extensions.lcap_annotation_data_permission.structures","typeName": "EntityPropertyStructure"
      }]
      },"defaultCode": {
        
      }
      }]
      },"extensions.lcap_user.structures.Department": {
        "concept": "Structure","name": "Department","description": "auto generate UserListResult","typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "name","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": null,"returnType": null,"properties": null
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "deptId","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": null,"returnType": null,"properties": null
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "parentDeptId","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": null,"returnType": null,"properties": null
      },"defaultCode": {
        
      }
      }]
      },"extensions.lcap_user.structures.RoleQuery": {
        "concept": "Structure","name": "RoleQuery","description": "System built in generic class RoleListQuery","typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "roleName","description": "根据这个字段模糊查询用户","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": null,"returnType": null,"properties": null
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "env","description": "查询哪个环境","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": null,"returnType": null,"properties": null
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "limit","description": "分页参数","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": null,"returnType": null,"properties": null
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "offset","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": null,"returnType": null,"properties": null
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "extendConditionMap","description": "扩展条件，目前为空","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "Map","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": null,"returnType": null,"properties": null,"name": "K"
      },{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": null,"returnType": null,"properties": null,"name": "V"
      }],"returnType": null,"properties": null
      },"defaultCode": {
        
      }
      }]
      },"extensions.lcap_user.structures.Role": {
        "concept": "Structure","name": "Role","description": "auto generate RoleListResult","typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "roleId","description": "角色唯一标识","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": null,"returnType": null,"properties": null
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "roleName","description": "角色名","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": null,"returnType": null,"properties": null
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "env","description": "角色环境，可为空，一般分为dev,online","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": null,"returnType": null,"properties": null
      },"defaultCode": {
        
      }
      }]
      },"extensions.lcap_user.structures.User": {
        "concept": "Structure","name": "User","description": "auto generate UserListResult","typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "userName","description": "用戶名","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": null,"returnType": null,"properties": null
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "env","description": "用戶环境，可为空，一般分为dev,online","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": null,"returnType": null,"properties": null
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "source","description": "登录源，如Normal：账号密码登录","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": null,"returnType": null,"properties": null
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "userId","description": "用户唯一标识","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": null,"returnType": null,"properties": null
      },"defaultCode": {
        
      }
      }]
      },"extensions.lcap_user.structures.UserQuery": {
        "concept": "Structure","name": "UserQuery","description": "","typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "userName","description": "根据这个字段模糊查询用户","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": null,"returnType": null,"properties": null
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "env","description": "查询哪个环境","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": null,"returnType": null,"properties": null
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "limit","description": "分页参数","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": null,"returnType": null,"properties": null
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "offset","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": null,"returnType": null,"properties": null
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "extendConditionMap","description": "扩展条件，目前为空","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "Map","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": null,"returnType": null,"properties": null,"name": "K"
      },{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": null,"returnType": null,"properties": null,"name": "V"
      }],"returnType": null,"properties": null
      },"defaultCode": {
        
      }
      }]
      },"connector.dingding.structures.APiReturnOfgetToken": {
        "concept": "Structure","name": "APiReturnOfgetToken","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "errcode","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "access_token","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "errmsg","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "expires_in","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.dingding.structures.APiReturnOfgetDepartment": {
        "concept": "Structure","name": "APiReturnOfgetDepartment","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "errcode","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "errmsg","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "result","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.dingding.structures","typeName": "result6","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "request_id","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"nasl.collection.List<connector.dingding.structures.result6>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.dingding.structures","typeName": "result6","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"connector.dingding.structures.result6": {
        "concept": "Structure","name": "result6","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "auto_add_user","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "parent_id","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "name","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "dept_id","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "create_dept_group","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.dingding.structures.getUserIdListBody": {
        "concept": "Structure","name": "getUserIdListBody","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "dept_id","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.dingding.structures.result": {
        "concept": "Structure","name": "result","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "userid_list","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.dingding.structures.APiReturnOfgetUserIdList": {
        "concept": "Structure","name": "APiReturnOfgetUserIdList","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "errcode","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "errmsg","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "result","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.dingding.structures","typeName": "result","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "request_id","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.dingding.structures.APiReturnOfgetDepartmentSubIdList": {
        "concept": "Structure","name": "APiReturnOfgetDepartmentSubIdList","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "dept_id","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.dingding.structures.getListParentByDeptBody": {
        "concept": "Structure","name": "getListParentByDeptBody","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "dept_id","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.dingding.structures.result1": {
        "concept": "Structure","name": "result1","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "parent_id_list","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"nasl.collection.List<nasl.core.Long>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"connector.dingding.structures.APiReturnOfgetListParentByDept": {
        "concept": "Structure","name": "APiReturnOfgetListParentByDept","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "errcode","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "errmsg","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "result","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.dingding.structures","typeName": "result1","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "request_id","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.dingding.structures.getParentsByDeptBody": {
        "concept": "Structure","name": "getParentsByDeptBody","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "dept_id","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.dingding.structures.result2": {
        "concept": "Structure","name": "result2","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "parent_id_list","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.dingding.structures.APiReturnOfgetParentsByDept": {
        "concept": "Structure","name": "APiReturnOfgetParentsByDept","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "errcode","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "errmsg","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "result","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.dingding.structures","typeName": "result2","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "request_id","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.dingding.structures.getUserBody": {
        "concept": "Structure","name": "getUserBody","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "userid","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.dingding.structures.dept_order_list": {
        "concept": "Structure","name": "dept_order_list","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "dept_id","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "order","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.dingding.structures.leader_in_dept": {
        "concept": "Structure","name": "leader_in_dept","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "leader","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "dept_id","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.dingding.structures.role_list": {
        "concept": "Structure","name": "role_list","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "group_name","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "name","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "id","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.dingding.structures.result3": {
        "concept": "Structure","name": "result3","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "active","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "admin","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "avatar","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "boss","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "dept_id_list","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "dept_order_list","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.dingding.structures","typeName": "dept_order_list","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "exclusive_account","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "hide_mobile","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "leader_in_dept","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.dingding.structures","typeName": "leader_in_dept","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "mobile","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "name","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "real_authed","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "role_list","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.dingding.structures","typeName": "role_list","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "senior","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "state_code","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "unionid","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "userid","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"nasl.collection.List<connector.dingding.structures.dept_order_list>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.dingding.structures","typeName": "dept_order_list","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"nasl.collection.List<connector.dingding.structures.leader_in_dept>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.dingding.structures","typeName": "leader_in_dept","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"nasl.collection.List<connector.dingding.structures.role_list>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.dingding.structures","typeName": "role_list","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"connector.dingding.structures.APiReturnOfgetUser": {
        "concept": "Structure","name": "APiReturnOfgetUser","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "errcode","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "errmsg","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "result","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.dingding.structures","typeName": "result3","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "request_id","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.dingding.structures.getUserIdList1Body": {
        "concept": "Structure","name": "getUserIdList1Body","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "dept_id","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.dingding.structures.result4": {
        "concept": "Structure","name": "result4","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "userid_list","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.dingding.structures.APiReturnOfgetUserIdList1": {
        "concept": "Structure","name": "APiReturnOfgetUserIdList1","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "errcode","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "errmsg","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "result","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.dingding.structures","typeName": "result4","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "request_id","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.dingding.structures.getDepartmentBody": {
        "concept": "Structure","name": "getDepartmentBody","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "language","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "dept_id","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.dingding.structures.result5": {
        "concept": "Structure","name": "result5","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "auto_add_user","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "parent_id","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "name","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "dept_id","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "create_dept_group","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.userlist": {
        "concept": "Structure","name": "userlist","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "name","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "department","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "open_userid","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "userid","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.department": {
        "concept": "Structure","name": "department","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "id","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "name","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "name_en","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "department_leader","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "parentid","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "order","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.articles": {
        "concept": "Structure","name": "articles","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "picurl","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "pagepath","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "appid","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "description","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "title","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "url","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.news": {
        "concept": "Structure","name": "news","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "articles","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "articles","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"nasl.collection.List<connector.qiweionlineconnector.structures.articles>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "articles","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"connector.qiweionlineconnector.structures.text4": {
        "concept": "Structure","name": "text4","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "content","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.department1": {
        "concept": "Structure","name": "department1","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "name","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "id","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "department_leader","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "parentid","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "name_en","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "order","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.web": {
        "concept": "Structure","name": "web","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "url","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "title","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.text2": {
        "concept": "Structure","name": "text2","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "value","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.attrs2": {
        "concept": "Structure","name": "attrs2","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "web","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "web","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "name","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "text","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "text2","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "type","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.extattr": {
        "concept": "Structure","name": "extattr","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "attrs","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "attrs2","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"nasl.collection.List<connector.qiweionlineconnector.structures.attrs2>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "attrs2","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"connector.qiweionlineconnector.structures.wechat_channels": {
        "concept": "Structure","name": "wechat_channels","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "nickname","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "status","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.web2": {
        "concept": "Structure","name": "web2","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "url","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "title","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.text3": {
        "concept": "Structure","name": "text3","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "value","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.miniprogram": {
        "concept": "Structure","name": "miniprogram","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "appid","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "pagepath","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "title","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.external_attr": {
        "concept": "Structure","name": "external_attr","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "web","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "web2","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "name","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "text","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "text3","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "type","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "miniprogram","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "miniprogram","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.external_profile": {
        "concept": "Structure","name": "external_profile","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "external_corp_name","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "wechat_channels","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "wechat_channels","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "external_attr","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "external_attr","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"nasl.collection.List<connector.qiweionlineconnector.structures.external_attr>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "external_attr","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"connector.qiweionlineconnector.structures.userlist1": {
        "concept": "Structure","name": "userlist1","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "address","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "gender","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "external_position","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "mobile","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "is_leader_in_dept","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "telephone","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "direct_leader","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "avatar","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "main_department","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "userid","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "english_name","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "thumb_avatar","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "name","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "alias","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "extattr","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "extattr","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "qr_code","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "position","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "department","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "open_userid","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "biz_mail","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "external_profile","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "external_profile","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "email","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "order","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "status","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.department2": {
        "concept": "Structure","name": "department2","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "name","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "id","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "department_leader","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "parentid","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "name_en","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "order","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.APiReturnOfgetDepartmentList": {
        "concept": "Structure","name": "APiReturnOfgetDepartmentList","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "errcode","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "errmsg","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "department","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "department2","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"nasl.collection.List<connector.qiweionlineconnector.structures.department2>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "department2","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"connector.qiweionlineconnector.structures.web1": {
        "concept": "Structure","name": "web1","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "url","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "title","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.text5": {
        "concept": "Structure","name": "text5","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "value","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.attrs3": {
        "concept": "Structure","name": "attrs3","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "web","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "web1","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "name","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "text","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "text5","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "type","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.extattr1": {
        "concept": "Structure","name": "extattr1","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "attrs","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "attrs3","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"nasl.collection.List<connector.qiweionlineconnector.structures.attrs3>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "attrs3","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"connector.qiweionlineconnector.structures.wechat_channels1": {
        "concept": "Structure","name": "wechat_channels1","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "nickname","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "status","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.web3": {
        "concept": "Structure","name": "web3","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "url","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "title","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.text6": {
        "concept": "Structure","name": "text6","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "value","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.miniprogram1": {
        "concept": "Structure","name": "miniprogram1","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "appid","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "pagepath","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "title","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.external_attr1": {
        "concept": "Structure","name": "external_attr1","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "web","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "web3","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "name","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "text","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "text6","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "type","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "miniprogram","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "miniprogram1","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.external_profile1": {
        "concept": "Structure","name": "external_profile1","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "external_corp_name","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "wechat_channels","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "wechat_channels1","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "external_attr","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "external_attr1","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"nasl.collection.List<connector.qiweionlineconnector.structures.external_attr1>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "external_attr1","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"connector.qiweionlineconnector.structures.userlist2": {
        "concept": "Structure","name": "userlist2","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "address","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "gender","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "external_position","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "mobile","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "is_leader_in_dept","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "telephone","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "direct_leader","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "avatar","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "main_department","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "userid","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "english_name","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "thumb_avatar","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "name","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "alias","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "extattr","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "extattr1","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "qr_code","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "position","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "department","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "open_userid","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "biz_mail","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "external_profile","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "external_profile1","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "email","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "order","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "status","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.APiReturnOfgetUserDetail": {
        "concept": "Structure","name": "APiReturnOfgetUserDetail","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "errcode","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "errmsg","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "userlist","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "userlist2","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"nasl.collection.List<connector.qiweionlineconnector.structures.userlist2>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "userlist2","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"connector.qiweionlineconnector.structures.department3": {
        "concept": "Structure","name": "department3","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "id","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "name","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "name_en","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "department_leader","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "parentid","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "order","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.APiReturnOfgetDepartDetail": {
        "concept": "Structure","name": "APiReturnOfgetDepartDetail","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "errcode","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "errmsg","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "department","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "department3","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.userlist3": {
        "concept": "Structure","name": "userlist3","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "name","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "department","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "open_userid","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "userid","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.APiReturnOfgetDepartUserList": {
        "concept": "Structure","name": "APiReturnOfgetDepartUserList","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "errcode","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "errmsg","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "userlist","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "userlist3","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"nasl.collection.List<connector.qiweionlineconnector.structures.userlist3>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "userlist3","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"connector.qiweionlineconnector.structures.text7": {
        "concept": "Structure","name": "text7","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "content","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.appSendMessageBody": {
        "concept": "Structure","name": "appSendMessageBody","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "touser","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "toparty","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "totag","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "msgtype","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "agentid","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "text","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "text7","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "safe","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "enable_id_trans","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "enable_duplicate_check","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "duplicate_check_interval","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.APiReturnOfappSendMessage": {
        "concept": "Structure","name": "APiReturnOfappSendMessage","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "errcode","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "errmsg","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "invaliduser","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "invalidparty","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "invalidtag","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "unlicenseduser","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "msgid","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "response_code","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.articles1": {
        "concept": "Structure","name": "articles1","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "picurl","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "pagepath","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "appid","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "description","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "title","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "url","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.news1": {
        "concept": "Structure","name": "news1","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "articles","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "articles1","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"nasl.collection.List<connector.qiweionlineconnector.structures.articles1>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "articles1","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"connector.qiweionlineconnector.structures.appSendNewsMessageBody": {
        "concept": "Structure","name": "appSendNewsMessageBody","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "touser","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "toparty","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "totag","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "msgtype","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "agentid","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "news","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "news1","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "enable_id_trans","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "enable_duplicate_check","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "duplicate_check_interval","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.APiReturnOfappSendNewsMessage": {
        "concept": "Structure","name": "APiReturnOfappSendNewsMessage","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "errcode","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "errmsg","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "invaliduser","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "invalidparty","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "invalidtag","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "unlicenseduser","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "msgid","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "response_code","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.APiReturnOfgetAccessToken": {
        "concept": "Structure","name": "APiReturnOfgetAccessToken","origin": null,"description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "errcode","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "errmsg","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "access_token","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "expires_in","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"nasl.auth.LCAPCurrentUserInfo": {
        "concept": "Structure","name": "LCAPCurrentUserInfo","properties": [{
        "concept": "StructureProperty","name": "status","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "nickName","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "userName","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "email","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "userId","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "phone","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "createTime","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "updateTime","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "source","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      },"nasl.ui.Current": {
        "concept": "Structure","name": "Current","typeParams": [{
        "concept": "TypeParam","name": "T"
      }],"properties": [{
        "concept": "StructureProperty","name": "item","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "typeParam","typeName": "T"
      }
      },{
        "concept": "StructureProperty","name": "index","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "rowIndex","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "columnIndex","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "value","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      },"T": {
        "concept": "TypeAnnotation","typeKind": "typeParam","typeName": "T"
      },"nasl.ui.CurrentDynamic": {
        "concept": "Structure","name": "CurrentDynamic","typeParams": [{
        "concept": "TypeParam","name": "T"
      },{
        "concept": "TypeParam","name": "T1"
      }],"properties": [{
        "concept": "StructureProperty","name": "item","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "typeParam","typeName": "T"
      }
      },{
        "concept": "StructureProperty","name": "columnItem","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "typeParam","typeName": "T1"
      }
      },{
        "concept": "StructureProperty","name": "index","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "rowIndex","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "columnIndex","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "value","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      },"T1": {
        "concept": "TypeAnnotation","typeKind": "typeParam","typeName": "T1"
      },"nasl.ui.Error": {
        "concept": "Structure","name": "Error","properties": [{
        "concept": "StructureProperty","name": "errorType","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "errorMsg","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      },"nasl.ui.BaseEvent": {
        "concept": "Structure","name": "BaseEvent","properties": []
      },"nasl.ui.DataSourceParams": {
        "concept": "Structure","name": "DataSourceParams","properties": [{
        "concept": "StructureProperty","name": "page","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "size","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "sort","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "order","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "filterText","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      },"nasl.ui.EventTarget": {
        "concept": "Structure","name": "EventTarget","properties": []
      },"nasl.ui.MouseEvent": {
        "concept": "Structure","name": "MouseEvent","properties": [{
        "concept": "StructureProperty","name": "altKey","description": "如果alt 键被按下，返回true","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      },{
        "concept": "StructureProperty","name": "button","description": "如果鼠标按钮被按下（如果有的话），将会返回一个数值","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "clientX","description": "鼠标指针在点击元素（DOM）中的X坐标","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "clientY","description": "鼠标指针在点击元素（DOM）中的Y坐标","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "ctrlKey","description": "如果 control 键被按下，则返回 true","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "metaKey","description": "如果 meta 键被按下，则返回 true","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "movementX","description": "鼠标指针相对于最后mousemove事件位置的X坐标","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "movementY","description": "鼠标指针相对于最后mousemove事件位置的Y坐标","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "offsetX","description": "鼠标指针相对于目标节点内边位置的X坐标","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "offsetY","description": "鼠标指针相对于目标节点内边位置的Y坐标","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "pageX","description": "相对于整个文档的水平坐标","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "pageY","description": "相对于整个文档的垂直坐标","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "screenX","description": "相对于全局（屏幕）的水平坐标","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "screenY","description": "相对于全局（屏幕）的垂直坐标","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "which","description": "对应（键盘）按下的数字类型的 keyCode","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      }]
      },"nasl.ui.FocusEvent": {
        "concept": "Structure","name": "FocusEvent","properties": [{
        "concept": "StructureProperty","name": "cancelBubble","description": "是否取消冒泡","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      },{
        "concept": "StructureProperty","name": "detail","description": "详情","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "layerX","description": "相对于当前层的水平坐标","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "layerY","description": "相对于当前层的垂直坐标","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "pageX","description": "相对于整个文档的水平坐标","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "pageY","description": "相对于整个文档的垂直坐标","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "which","description": "对应（键盘）按下的数字类型的 keyCode","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      }]
      },"nasl.ui.ChangeEvent": {
        "concept": "Structure","name": "ChangeEvent","properties": [{
        "concept": "StructureProperty","name": "value","description": "改变后的值","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "oldValue","description": "待改变的值","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "formattedValue","description": "格式化后的值","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "values","description": "改变后每项值的数组","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "typeParam","typeName": "T"
      }]
      }
      },{
        "concept": "StructureProperty","name": "oldValues","description": "旧的每项值的数组","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "typeParam","typeName": "T"
      }]
      }
      },{
        "concept": "StructureProperty","name": "label","description": "此选框的标签","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "valid","description": "改变后的值是否合法","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      }]
      },"nasl.collection.List<T>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "typeParam","typeName": "T"
      }]
      },"nasl.ui.NavigateEvent": {
        "concept": "Structure","name": "NavigateEvent","properties": [{
        "concept": "StructureProperty","name": "to","description": "to属性的值","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "replace","description": "","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      },{
        "concept": "StructureProperty","name": "append","description": "","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      }]
      },"nasl.ui.ChangeItemEvent": {
        "concept": "Structure","name": "ChangeItemEvent","properties": [{
        "concept": "StructureProperty","name": "selected","description": "选中还是取消","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "value","description": "选择项的值","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "oldValue","description": "旧的值","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "item","description": "选择项相关对象","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "oldItem","description": "旧的选择项相关对象","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "label","description": "此选框的标签","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      },"nasl.ui.ChangeItemsEvent": {
        "concept": "Structure","name": "ChangeItemsEvent","properties": [{
        "concept": "StructureProperty","name": "selected","description": "选中还是取消","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      },{
        "concept": "StructureProperty","name": "item","description": "该选中项相关对象","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "value","description": "所有选中项的值","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "typeParam","typeName": "T"
      }]
      }
      },{
        "concept": "StructureProperty","name": "oldValue","description": "旧的值","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "typeParam","typeName": "T"
      }]
      }
      },{
        "concept": "StructureProperty","name": "items","description": "所有选中项相关对象的数组","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "typeParam","typeName": "T"
      }]
      }
      },{
        "concept": "StructureProperty","name": "oldItems","description": "旧的所有选中项相关对象的数组","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "typeParam","typeName": "T"
      }]
      }
      }]
      },"nasl.ui.CascadeCapsulesEvent": {
        "concept": "Structure","name": "CascadeCapsulesEvent","properties": [{
        "concept": "StructureProperty","name": "level","description": "选择的层级","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "value","description": "改变后的值","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "oldValue","description": "旧的值","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "values","description": "改变后每项值的数组","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "typeParam","typeName": "T"
      }]
      }
      },{
        "concept": "StructureProperty","name": "oldValues","description": "旧的每项值的数组","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "typeParam","typeName": "T"
      }]
      }
      },{
        "concept": "StructureProperty","name": "item","description": "选择项相关对象","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      },"nasl.ui.CollapseEvent": {
        "concept": "Structure","name": "CollapseEvent","properties": [{
        "concept": "StructureProperty","name": "expanded","description": "展开/折叠状态","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      },{
        "concept": "StructureProperty","name": "open","description": "弹出/隐藏状态","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      },{
        "concept": "StructureProperty","name": "value","description": "开关状态","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      },{
        "concept": "StructureProperty","name": "oldValue","description": "旧的开关状态","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      },{
        "concept": "StructureProperty","name": "node","description": "节点相关对象","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      },"nasl.ui.SliderEvent": {
        "concept": "Structure","name": "SliderEvent","properties": [{
        "concept": "StructureProperty","name": "value","description": "滑块的值","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "oldValue","description": "旧的值","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "percent","description": "滑块位置所在的百分比","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      }]
      },"nasl.ui.DateEvent": {
        "concept": "Structure","name": "DateEvent","properties": [{
        "concept": "StructureProperty","name": "date","description": "日期值","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Date"
      }
      },{
        "concept": "StructureProperty","name": "time","description": "日期值","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Date"
      }
      }]
      },"nasl.core.Date": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Date"
      },"nasl.ui.OperatorItemEvent": {
        "concept": "Structure","name": "OperatorItemEvent","properties": [{
        "concept": "StructureProperty","name": "item","description": "添加的项","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "index","description": "添加的索引","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "data","description": "当前数据","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      },"nasl.ui.ValidateResult": {
        "concept": "Structure","name": "ValidateResult","properties": [{
        "concept": "StructureProperty","name": "rawValue","description": "用户输入的原始值","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "value","description": "验证修复的值","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "trigger","description": "本次验证的触发方式","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "muted","description": "是否验证后无提示","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "valid","description": "验证是否通过","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      },{
        "concept": "StructureProperty","name": "touched","description": "用户是否触碰","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      },{
        "concept": "StructureProperty","name": "dirty","description": "用户是否修改值","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      },{
        "concept": "StructureProperty","name": "firstError","description": "第一个错误提示消息","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      },"nasl.ui.PaginationEvent": {
        "concept": "Structure","name": "PaginationEvent","properties": [{
        "concept": "StructureProperty","name": "page","description": "选择的页码","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "oldPage","description": "旧的页码","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "pageSize","description": "当前每页条数","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "oldPageSize","description": "旧的每页条数","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "size","description": "当前每页条数","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "oldSize","description": "旧的每页条数","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "number","description": "当前页数","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "oldNumber","description": "旧的页数","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      }]
      },"nasl.ui.DurationEvent": {
        "concept": "Structure","name": "DurationEvent","properties": [{
        "concept": "StructureProperty","name": "text","description": "提示的内容","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "color","description": "提示的颜色","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "duration","description": "提示停留的时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      }]
      },"nasl.ui.TransferEvent": {
        "concept": "Structure","name": "TransferEvent","properties": [{
        "concept": "StructureProperty","name": "source","description": "原数据列表","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "typeParam","typeName": "T"
      }]
      }
      },{
        "concept": "StructureProperty","name": "target","description": "目标数据列表","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "typeParam","typeName": "T"
      }]
      }
      },{
        "concept": "StructureProperty","name": "transfer","description": "移动的项","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "typeParam","typeName": "T"
      }]
      }
      },{
        "concept": "StructureProperty","name": "transferValues","description": "移动项的值","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "typeParam","typeName": "T"
      }]
      }
      }]
      },"nasl.ui.TreeChangeEvent": {
        "concept": "Structure","name": "TreeChangeEvent","properties": [{
        "concept": "StructureProperty","name": "value","description": "改变后的值","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "oldValue","description": "待改变的值","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "node","description": "选择项相关对象","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "oldNode","description": "旧的选择项相关对象","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      },"nasl.ui.CheckedEvent": {
        "concept": "Structure","name": "CheckedEvent","properties": [{
        "concept": "StructureProperty","name": "checked","description": "选中/取消状态","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      },{
        "concept": "StructureProperty","name": "oldChecked","description": "旧的选中/取消状态","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      },{
        "concept": "StructureProperty","name": "values","description": "改变后每项值的数组","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "typeParam","typeName": "T"
      }]
      }
      },{
        "concept": "StructureProperty","name": "oldValues","description": "旧的每项值的数组","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "typeParam","typeName": "T"
      }]
      }
      },{
        "concept": "StructureProperty","name": "node","description": "选择项相关对象","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "item","description": "选择项相关对象","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      },"nasl.ui.UploadEvent": {
        "concept": "Structure","name": "UploadEvent","properties": [{
        "concept": "StructureProperty","name": "item","description": "进度相关信息","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "nasl.ui","typeName": "File"
      }
      },{
        "concept": "StructureProperty","name": "data","description": "进度相关信息","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "file","description": "上传文件信息，不包含文件主体内容","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "xhr","description": "发送前的 XMLHttpRequest 对象","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "formData","description": "用于发送的数据对象","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "xml","description": "服务器回传信息","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      },"nasl.ui.File": {
        "concept": "Structure","name": "File","properties": [{
        "concept": "StructureProperty","name": "status","description": "文件状态","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "url","description": "文件链接","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "name","description": "文件名称","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "size","description": "文件大小","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "type","description": "文件类型","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      },"nasl.ui.UploadErrorEvent": {
        "concept": "Structure","name": "UploadErrorEvent","properties": [{
        "concept": "StructureProperty","name": "name","description": "错误名","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "message","description": "错误描述","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "extensions","description": "限制类型","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "maxSize","description": "限制大小","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "size","description": "当前大小","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "count","description": "当前数量","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "limit","description": "数量配额","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      }]
      },"nasl.ui.SortEvent": {
        "concept": "Structure","name": "SortEvent","properties": [{
        "concept": "StructureProperty","name": "field","description": "排序属性","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "order","description": "排序顺序","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "compare","description": "排序比较函数","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      },"nasl.ui.PoiInfo": {
        "concept": "Structure","name": "PoiInfo","properties": [{
        "concept": "StructureProperty","name": "source","description": "信息来源","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "id","description": "POI点的id","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "name","description": "名称","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "location","description": "经纬度","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "address","description": "地址","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      },"nasl.ui.SelectData": {
        "concept": "Structure","name": "SelectData","properties": [{
        "concept": "StructureProperty","name": "parent","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "item","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "level","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "index","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      }]
      },"nasl.ui.DragAndDropUpdateData": {
        "concept": "Structure","name": "DragAndDropUpdateData","properties": [{
        "concept": "StructureProperty","name": "sourceList","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }]
      }
      },{
        "concept": "StructureProperty","name": "targetList","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }]
      }
      }]
      },"nasl.ui.DragAndDropEvent": {
        "concept": "Structure","name": "DragAndDropEvent","properties": [{
        "concept": "StructureProperty","name": "source","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "nasl.ui","typeName": "SelectData"
      }
      },{
        "concept": "StructureProperty","name": "target","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "nasl.ui","typeName": "SelectData"
      }
      },{
        "concept": "StructureProperty","name": "finalSource","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "nasl.ui","typeName": "SelectData"
      }
      },{
        "concept": "StructureProperty","name": "position","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "updateData","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "nasl.ui","typeName": "DragAndDropUpdateData"
      }
      }]
      },"nasl.ui.ExpandEvent": {
        "concept": "Structure","name": "ExpandEvent","properties": [{
        "concept": "StructureProperty","name": "item","description": "展开项相关对象","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "expanded","description": "展开状态值","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      }]
      },"nasl.ui.ScrollEvent": {
        "concept": "Structure","name": "ScrollEvent","properties": [{
        "concept": "StructureProperty","name": "scrollHeight","description": "滚动内容高度","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "scrollWidth","description": "滚动内容宽度","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "scrollTop","description": "滚动内容距离顶部高度","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "scrollLeft","description": "滚动内容距离左侧距离","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "clientHeight","description": "可视区域高度","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "clientWidth","description": "可视区域宽度由","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      }]
      },"nasl.ui.KeyboardEvent": {
        "concept": "Structure","name": "KeyboardEvent","properties": [{
        "concept": "StructureProperty","name": "altKey","description": "事件触发时 alt 键 (OS X 系统上的 Option 或 ⌥ 键) 是 (true) 否 (false) 被按下","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      },{
        "concept": "StructureProperty","name": "code","description": "","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "ctrlKey","description": "事件触发时 control 键是 (true) 否 (false) 按下","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      },{
        "concept": "StructureProperty","name": "isComposing","description": "该事件是否在 compositionstart 之后和 compositionend 之前被触发","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      },{
        "concept": "StructureProperty","name": "key","description": "","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "metaKey","description": "指示 Meta 键是按下状态（true），还是释放状态（false）","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      },{
        "concept": "StructureProperty","name": "repeat","description": "如果按键被一直按住，返回值为true","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      },{
        "concept": "StructureProperty","name": "shiftKey","description": "事件触发时 shift 键是 (true) 否 (false) 按下","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      }]
      },"nasl.collection.List": {
        "concept": "Structure","name": "List","typeParams": [{
        "concept": "TypeParam","name": "T"
      }],"properties": [{
        "concept": "StructureProperty","name": "length","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      }]
      },"nasl.collection.Map": {
        "concept": "Structure","name": "Map","typeParams": [{
        "concept": "TypeParam","name": "K"
      },{
        "concept": "TypeParam","name": "V"
      }],"properties": [{
        "concept": "StructureProperty","name": "length","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      }]
      },"nasl.interface.ApiReturnOf": {
        "concept": "Structure","name": "ApiReturnOf","typeParams": [{
        "concept": "TypeParam","name": "T"
      }],"properties": [{
        "concept": "StructureProperty","name": "Data","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "typeParam","typeName": "T"
      }
      },{
        "concept": "StructureProperty","name": "Code","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "Message","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      },"nasl.process.LCAPProcessDefinition": {
        "concept": "Structure","name": "LCAPProcessDefinition","properties": [{
        "concept": "StructureProperty","name": "name","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "title","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "description","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "suspended","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      }]
      },"nasl.process.LCAPProcessInstance": {
        "concept": "Structure","name": "LCAPProcessInstance","properties": [{
        "concept": "StructureProperty","name": "processId","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "title","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "description","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "startBy","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "startTime","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      }
      },{
        "concept": "StructureProperty","name": "endTime","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      }
      },{
        "concept": "StructureProperty","name": "finished","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      },{
        "concept": "StructureProperty","name": "processDefName","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      },"nasl.process.LCAPTaskDefinition": {
        "concept": "Structure","name": "LCAPTaskDefinition","properties": [{
        "concept": "StructureProperty","name": "name","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "title","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "description","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "processDefName","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "emptyAssignee","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      },{
        "concept": "StructureProperty","name": "skipEnabled","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      }]
      },"nasl.process.LCAPTaskInstance": {
        "concept": "Structure","name": "LCAPTaskInstance","properties": [{
        "concept": "StructureProperty","name": "taskId","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "title","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "description","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "finished","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      },{
        "concept": "StructureProperty","name": "completeBy","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "createTime","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      }
      },{
        "concept": "StructureProperty","name": "completeTime","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      }
      },{
        "concept": "StructureProperty","name": "taskDefName","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "processId","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "processDefName","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      },"nasl.process.LCAPOperateProcessResult": {
        "concept": "Structure","name": "LCAPOperateProcessResult","properties": [{
        "concept": "StructureProperty","name": "success","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      },{
        "concept": "StructureProperty","name": "failMessage","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "code","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      },"nasl.processV2.CurrNode": {
        "concept": "Structure","name": "CurrNode","properties": [{
        "concept": "StructureProperty","name": "currNodeTitle","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "currNodeParticipants","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }]
      }
      }]
      },"nasl.processV2.MyPendingTask": {
        "concept": "Structure","name": "MyPendingTask","properties": [{
        "concept": "StructureProperty","name": "taskId","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "taskTitle","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "procInstTitle","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "procDefTitle","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "procInstInitiator","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "procInstStartTime","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      }
      },{
        "concept": "StructureProperty","name": "procInstCurrNodes","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "nasl.processV2","typeName": "CurrNode"
      }]
      }
      }]
      },"nasl.collection.List<nasl.processV2.CurrNode>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "nasl.processV2","typeName": "CurrNode"
      }]
      },"nasl.processV2.MyCompletedTask": {
        "concept": "Structure","name": "MyCompletedTask","properties": [{
        "concept": "StructureProperty","name": "taskId","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "taskTitle","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "procInstTitle","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "procDefTitle","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "procInstInitiator","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "procInstStartTime","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      }
      },{
        "concept": "StructureProperty","name": "procInstCurrNodes","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "nasl.processV2","typeName": "CurrNode"
      }]
      }
      }]
      },"nasl.processV2.MyInitiatedTask": {
        "concept": "Structure","name": "MyInitiatedTask","properties": [{
        "concept": "StructureProperty","name": "taskId","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "taskTitle","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "procInstTitle","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "procDefTitle","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "procInstInitiator","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "procInstStartTime","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      }
      },{
        "concept": "StructureProperty","name": "procInstCurrNodes","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "nasl.processV2","typeName": "CurrNode"
      }]
      }
      }]
      },"nasl.processV2.ProcDef": {
        "concept": "Structure","name": "ProcDef","properties": [{
        "concept": "StructureProperty","name": "procDefKey","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "procDefTitle","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "procDefDescription","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      },"nasl.processV2.LCAPUser": {
        "concept": "Structure","name": "LCAPUser","properties": [{
        "concept": "StructureProperty","name": "userId","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "userName","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "extensionInfos","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      },"nasl.processV2.ProcInstInfo": {
        "concept": "Structure","name": "ProcInstInfo","properties": [{
        "concept": "StructureProperty","name": "procInstId","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "procInstInitiator","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "procInstStartTime","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      }
      },{
        "concept": "StructureProperty","name": "procInstStatus","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "nasl.processV2.enums","typeName": "ProcInstStatusEnum"
      }
      },{
        "concept": "StructureProperty","name": "procInstCurrNodes","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "nasl.processV2","typeName": "CurrNode"
      }]
      }
      },{
        "concept": "StructureProperty","name": "procInstEndTime","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      }
      }]
      },"nasl.processV2.TaskOperationPermission": {
        "concept": "Structure","name": "TaskOperationPermission","properties": [{
        "concept": "StructureProperty","name": "name","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "operationEnabled","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      },{
        "concept": "StructureProperty","name": "displayText","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "commentRequired","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      }]
      },"nasl.processV2.DataPropertyPermission": {
        "concept": "Structure","name": "DataPropertyPermission","properties": [{
        "concept": "StructureProperty","name": "propertyName","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "permission","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      },"nasl.processV2.ProcInstRecord": {
        "concept": "Structure","name": "ProcInstRecord","properties": [{
        "concept": "StructureProperty","name": "nodeTitle","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "userName","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "recordCreatedTime","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      }
      },{
        "concept": "StructureProperty","name": "nodeOperationDisplayText","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "nodeOperationComment","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      },"nasl.processV2.TaskInst": {
        "concept": "Structure","name": "TaskInst","properties": [{
        "concept": "StructureProperty","name": "processDefUniqueKey","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "processDefinitionId","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "processInstanceId","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "taskDefName","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "taskTitle","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "taskId","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "completeBy","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "finished","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      },{
        "concept": "StructureProperty","name": "createTime","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "completeTime","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      },"nasl.http.HttpCookie": {
        "concept": "Structure","name": "HttpCookie","properties": [{
        "concept": "StructureProperty","name": "name","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "value","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "domain","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "cookiePath","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "sameSite","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "httpOnly","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      },{
        "concept": "StructureProperty","name": "secure","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      },{
        "concept": "StructureProperty","name": "maxAge","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Integer"
      }
      }]
      },"nasl.core.Integer": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Integer"
      },"nasl.http.HttpResponse": {
        "concept": "Structure","name": "HttpResponse","typeParams": [{
        "concept": "TypeParam","name": "T"
      }],"properties": [{
        "concept": "StructureProperty","name": "status","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Integer"
      }
      },{
        "concept": "StructureProperty","name": "body","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "typeParam","typeName": "T"
      }
      },{
        "concept": "StructureProperty","name": "headers","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "Map","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }]
      }
      },{
        "concept": "StructureProperty","name": "cookies","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "Map","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "nasl.http","typeName": "HttpCookie"
      }]
      }
      }]
      },"nasl.collection.Map<nasl.core.String, nasl.http.HttpCookie>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "Map","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "nasl.http","typeName": "HttpCookie"
      }]
      },"nasl.http.HttpRequest": {
        "concept": "Structure","name": "HttpRequest","typeParams": [{
        "concept": "TypeParam","name": "T"
      }],"properties": [{
        "concept": "StructureProperty","name": "requestURL","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "remoteIp","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "requestMethod","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "body","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "typeParam","typeName": "T"
      }
      },{
        "concept": "StructureProperty","name": "headers","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "Map","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }]
      }
      },{
        "concept": "StructureProperty","name": "pathParams","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "Map","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }]
      }
      },{
        "concept": "StructureProperty","name": "queryParams","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "Map","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }]
      }
      },{
        "concept": "StructureProperty","name": "cookies","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "Map","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "nasl.http","typeName": "HttpCookie"
      }]
      }
      }]
      },"{CreateTime: nasl.core.Long, Email: nasl.core.String, LoginCount: nasl.core.Long, Phone: nasl.core.String, Source: nasl.core.String, Status: nasl.core.String, UpdateTime: nasl.core.Long, UserId: nasl.core.String, UserInfoExtend: {Company: nasl.core.String, Department: nasl.core.String, EmployeeId: nasl.core.String, JobLevel: nasl.core.String, JobNum: nasl.core.String, JobYear: nasl.core.String, NameAndEmail: nasl.core.String, NickName: nasl.core.String, Position: nasl.core.String, RealName: nasl.core.String}, UserName: nasl.core.String}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "CreateTime","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "Email","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "LoginCount","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "Phone","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "Source","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "Status","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "UpdateTime","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "UserId","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "UserInfoExtend","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "Company","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "Department","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "EmployeeId","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "JobLevel","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "JobNum","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "JobYear","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "NameAndEmail","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "NickName","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "Position","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "RealName","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      }
      },{
        "concept": "StructureProperty","name": "UserName","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      },"{Company: nasl.core.String, Department: nasl.core.String, EmployeeId: nasl.core.String, JobLevel: nasl.core.String, JobNum: nasl.core.String, JobYear: nasl.core.String, NameAndEmail: nasl.core.String, NickName: nasl.core.String, Position: nasl.core.String, RealName: nasl.core.String}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "Company","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "Department","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "EmployeeId","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "JobLevel","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "JobNum","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "JobYear","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "NameAndEmail","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "NickName","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "Position","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "RealName","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      },"nasl.collection.List<{text: nasl.core.String, value: nasl.core.String}>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "text","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "value","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      }]
      },"{text: nasl.core.String, value: nasl.core.String}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "text","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "value","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      },"{list: nasl.collection.List<{orderEntity: app.dataSources.defaultDS.entities.OrderEntity}>, total: nasl.core.Long}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "list","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "orderEntity","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "OrderEntity"
      }
      }]
      }]
      }
      },{
        "concept": "StructureProperty","name": "total","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      }]
      },"nasl.collection.List<{orderEntity: app.dataSources.defaultDS.entities.OrderEntity}>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "orderEntity","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "OrderEntity"
      }
      }]
      }]
      },"{orderEntity: app.dataSources.defaultDS.entities.OrderEntity}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "orderEntity","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "OrderEntity"
      }
      }]
      },"IElements": {
        "concept": "TypeAnnotation","typeKind": "reference","typeName": "IElements"
      },"nasl.ui.Current<{orderEntity: app.dataSources.defaultDS.entities.OrderEntity}>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.ui","typeName": "Current","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "orderEntity","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "OrderEntity"
      }
      }]
      }]
      },"{list: nasl.collection.List<{coffeeCategory: app.dataSources.defaultDS.entities.CoffeeCategory}>, total: nasl.core.Long}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "list","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "coffeeCategory","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "CoffeeCategory"
      }
      }]
      }]
      }
      },{
        "concept": "StructureProperty","name": "total","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      }]
      },"nasl.collection.List<{coffeeCategory: app.dataSources.defaultDS.entities.CoffeeCategory}>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "coffeeCategory","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "CoffeeCategory"
      }
      }]
      }]
      },"{coffeeCategory: app.dataSources.defaultDS.entities.CoffeeCategory}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "coffeeCategory","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "CoffeeCategory"
      }
      }]
      },"{list: nasl.collection.List<{coffee: app.dataSources.defaultDS.entities.Coffee, coffeeCategory: app.dataSources.defaultDS.entities.CoffeeCategory}>, total: nasl.core.Long}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "list","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "coffee","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "Coffee"
      }
      },{
        "concept": "StructureProperty","name": "coffeeCategory","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "CoffeeCategory"
      }
      }]
      }]
      }
      },{
        "concept": "StructureProperty","name": "total","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      }]
      },"nasl.collection.List<{coffee: app.dataSources.defaultDS.entities.Coffee, coffeeCategory: app.dataSources.defaultDS.entities.CoffeeCategory}>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "coffee","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "Coffee"
      }
      },{
        "concept": "StructureProperty","name": "coffeeCategory","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "CoffeeCategory"
      }
      }]
      }]
      },"{coffee: app.dataSources.defaultDS.entities.Coffee, coffeeCategory: app.dataSources.defaultDS.entities.CoffeeCategory}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "coffee","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "Coffee"
      }
      },{
        "concept": "StructureProperty","name": "coffeeCategory","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "CoffeeCategory"
      }
      }]
      },"nasl.ui.Current<{coffee: app.dataSources.defaultDS.entities.Coffee, coffeeCategory: app.dataSources.defaultDS.entities.CoffeeCategory}>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.ui","typeName": "Current","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "coffee","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "Coffee"
      }
      },{
        "concept": "StructureProperty","name": "coffeeCategory","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "CoffeeCategory"
      }
      }]
      }]
      },"nasl.ui.Current<{coffeeCategory: app.dataSources.defaultDS.entities.CoffeeCategory}>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.ui","typeName": "Current","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "coffeeCategory","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "CoffeeCategory"
      }
      }]
      }]
      },"{list: nasl.collection.List<{slide: app.dataSources.defaultDS.entities.Slide}>, total: nasl.core.Long}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "list","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "slide","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "Slide"
      }
      }]
      }]
      }
      },{
        "concept": "StructureProperty","name": "total","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      }]
      },"nasl.collection.List<{slide: app.dataSources.defaultDS.entities.Slide}>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "slide","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "Slide"
      }
      }]
      }]
      },"{slide: app.dataSources.defaultDS.entities.Slide}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "slide","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "Slide"
      }
      }]
      },"nasl.ui.Current<{slide: app.dataSources.defaultDS.entities.Slide}>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.ui","typeName": "Current","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "slide","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "Slide"
      }
      }]
      }]
      },"nasl.collection.List<app.dataSources.defaultDS.entities.LCAPDepartment>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPDepartment"
      }]
      },"nasl.ui.Current<app.dataSources.defaultDS.entities.LCAPDepartment>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.ui","typeName": "Current","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPDepartment"
      }]
      },"nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser, lCAPUserDeptMapping: app.dataSources.defaultDS.entities.LCAPUserDeptMapping}>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "lCAPUser","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPUser"
      }
      },{
        "concept": "StructureProperty","name": "lCAPUserDeptMapping","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPUserDeptMapping"
      }
      }]
      }]
      },"{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser, lCAPUserDeptMapping: app.dataSources.defaultDS.entities.LCAPUserDeptMapping}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "lCAPUser","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPUser"
      }
      },{
        "concept": "StructureProperty","name": "lCAPUserDeptMapping","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPUserDeptMapping"
      }
      }]
      },"nasl.ui.Current<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser, lCAPUserDeptMapping: app.dataSources.defaultDS.entities.LCAPUserDeptMapping}>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.ui","typeName": "Current","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "lCAPUser","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPUser"
      }
      },{
        "concept": "StructureProperty","name": "lCAPUserDeptMapping","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPUserDeptMapping"
      }
      }]
      }]
      },"nasl.collection.List<{lCAPDepartment: app.dataSources.defaultDS.entities.LCAPDepartment}>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "lCAPDepartment","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPDepartment"
      }
      }]
      }]
      },"{lCAPDepartment: app.dataSources.defaultDS.entities.LCAPDepartment}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "lCAPDepartment","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPDepartment"
      }
      }]
      },"nasl.ui.Current<{lCAPDepartment: app.dataSources.defaultDS.entities.LCAPDepartment}>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.ui","typeName": "Current","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "lCAPDepartment","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPDepartment"
      }
      }]
      }]
      },"nasl.core.Null": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Null"
      },"{list: nasl.collection.List<app.dataSources.defaultDS.entities.LCAPDepartment>, total: nasl.core.Long}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "list","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPDepartment"
      }]
      }
      },{
        "concept": "StructureProperty","name": "total","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      }]
      },"{list: nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser, lCAPUserDeptMapping: app.dataSources.defaultDS.entities.LCAPUserDeptMapping}>, total: nasl.core.Long}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "list","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "lCAPUser","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPUser"
      }
      },{
        "concept": "StructureProperty","name": "lCAPUserDeptMapping","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPUserDeptMapping"
      }
      }]
      }]
      }
      },{
        "concept": "StructureProperty","name": "total","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      }]
      },"{list: nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>, total: nasl.core.Long}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "list","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "lCAPUser","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPUser"
      }
      }]
      }]
      }
      },{
        "concept": "StructureProperty","name": "total","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      }]
      },"nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "lCAPUser","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPUser"
      }
      }]
      }]
      },"{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "lCAPUser","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPUser"
      }
      }]
      },"loadRole": {
        "concept": "TypeAnnotation","typeKind": "reference","typeName": "loadRole"
      },"{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "lCAPRole","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPRole"
      }
      }]
      },"nasl.ui.Current<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole}>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.ui","typeName": "Current","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "lCAPRole","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPRole"
      }
      }]
      }]
      },"loadUserRoleByUserId": {
        "concept": "TypeAnnotation","typeKind": "reference","typeName": "loadUserRoleByUserId"
      },"{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole, lCAPUserRoleMapping: app.dataSources.defaultDS.entities.LCAPUserRoleMapping}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "lCAPRole","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPRole"
      }
      },{
        "concept": "StructureProperty","name": "lCAPUserRoleMapping","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPUserRoleMapping"
      }
      }]
      },"nasl.ui.Current<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole, lCAPUserRoleMapping: app.dataSources.defaultDS.entities.LCAPUserRoleMapping}>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.ui","typeName": "Current","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "lCAPRole","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPRole"
      }
      },{
        "concept": "StructureProperty","name": "lCAPUserRoleMapping","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPUserRoleMapping"
      }
      }]
      }]
      },"loadPermissionByRoleId": {
        "concept": "TypeAnnotation","typeKind": "reference","typeName": "loadPermissionByRoleId"
      },"nasl.ui.Current<app.dataSources.defaultDS.entities.LCAPPermission>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.ui","typeName": "Current","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPPermission"
      }]
      },"nasl.collection.List<app.structures.LCAPDataMetaStructure>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.structures","typeName": "LCAPDataMetaStructure"
      }]
      },"nasl.ui.Current<app.structures.LCAPDataMetaStructure>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.ui","typeName": "Current","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.structures","typeName": "LCAPDataMetaStructure"
      }]
      },"nasl.collection.List<app.dataSources.defaultDS.entities.LCAPColumnRule>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPColumnRule"
      }]
      },"nasl.collection.List<app.dataSources.defaultDS.entities.LCAPRowRuleItem>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPRowRuleItem","typeArguments": null,"returnType": null,"inferred": null,"properties": null,"ruleMap": null,"changedTime": null,"branchName": null,"workingCopy": null,"branch": null,"name": "T","composedBy": null
      }],"returnType": null,"inferred": null,"properties": null,"ruleMap": null,"changedTime": null,"branchName": null,"workingCopy": null,"branch": null,"name": null,"composedBy": null
      },"nasl.collection.List<app.structures.LCAPDataMetaRowRule>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.structures","typeName": "LCAPDataMetaRowRule"
      }]
      },"nasl.collection.List<nasl.core.Long | nasl.core.String>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "union","typeNamespace": "nasl.core","typeName": "Union","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }]
      }]
      },"nasl.core.Long | nasl.core.String": {
        "concept": "TypeAnnotation","typeKind": "union","typeNamespace": "nasl.core","typeName": "Union","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }]
      },"nasl.ui.Current<app.structures.LCAPDataMetaRowRule>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.ui","typeName": "Current","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.structures","typeName": "LCAPDataMetaRowRule"
      }]
      },"nasl.ui.Current<app.structures.LCAPDataMetaColunmRule>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.ui","typeName": "Current","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.structures","typeName": "LCAPDataMetaColunmRule"
      }]
      },"nasl.collection.List<app.dataSources.defaultDS.entities.LCAPUserRoleMapping>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPUserRoleMapping","typeArguments": null,"returnType": null,"inferred": null,"properties": null,"ruleMap": null,"changedTime": null,"branchName": null,"workingCopy": null,"branch": null,"name": "T","composedBy": null
      }],"returnType": null,"inferred": null,"properties": null,"ruleMap": null,"changedTime": null,"branchName": null,"workingCopy": null,"branch": null,"name": null,"composedBy": null
      },"getRoleAddUser": {
        "concept": "TypeAnnotation","typeKind": "reference","typeName": "getRoleAddUser"
      },"nasl.collection.List<app.dataSources.defaultDS.entities.LCAPRolePerMapping>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPRolePerMapping","typeArguments": null,"returnType": null,"inferred": null,"properties": null,"ruleMap": null,"changedTime": null,"branchName": null,"workingCopy": null,"branch": null,"name": "T"
      }],"returnType": null,"inferred": null,"properties": null,"ruleMap": null,"changedTime": null,"branchName": null,"workingCopy": null,"branch": null,"name": ""
      },"getRoleAddPermission": {
        "concept": "TypeAnnotation","typeKind": "reference","typeName": "getRoleAddPermission"
      },"{lCAPPermission: app.dataSources.defaultDS.entities.LCAPPermission}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "lCAPPermission","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPPermission"
      }
      }]
      },"nasl.ui.Current<{lCAPPermission: app.dataSources.defaultDS.entities.LCAPPermission}>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.ui","typeName": "Current","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "lCAPPermission","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPPermission"
      }
      }]
      }]
      },"nasl.collection.List<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole}>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "lCAPRole","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPRole"
      }
      }]
      }]
      },"{list: nasl.collection.List<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole}>, total: nasl.core.Long}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "list","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "lCAPRole","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPRole"
      }
      }]
      }]
      }
      },{
        "concept": "StructureProperty","name": "total","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      }]
      },"{list: nasl.collection.List<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole, lCAPUserRoleMapping: app.dataSources.defaultDS.entities.LCAPUserRoleMapping}>, total: nasl.core.Long}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "list","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "lCAPRole","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPRole"
      }
      },{
        "concept": "StructureProperty","name": "lCAPUserRoleMapping","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPUserRoleMapping"
      }
      }]
      }]
      }
      },{
        "concept": "StructureProperty","name": "total","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      }]
      },"nasl.collection.List<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole, lCAPUserRoleMapping: app.dataSources.defaultDS.entities.LCAPUserRoleMapping}>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "lCAPRole","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPRole"
      }
      },{
        "concept": "StructureProperty","name": "lCAPUserRoleMapping","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPUserRoleMapping"
      }
      }]
      }]
      },"nasl.collection.List<app.dataSources.defaultDS.entities.LCAPPermission>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPPermission","typeArguments": null,"returnType": null,"inferred": null,"properties": null,"ruleMap": null,"changedTime": null,"branchName": null,"workingCopy": null,"branch": null,"name": "T"
      }],"returnType": null,"inferred": null,"properties": null,"ruleMap": null,"changedTime": null,"branchName": null,"workingCopy": null,"branch": null,"name": ""
      },"{list: nasl.collection.List<{lCAPPermission: app.dataSources.defaultDS.entities.LCAPPermission}>, total: nasl.core.Long}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "list","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "lCAPPermission","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPPermission"
      }
      }]
      }]
      }
      },{
        "concept": "StructureProperty","name": "total","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      }]
      },"nasl.collection.List<{lCAPPermission: app.dataSources.defaultDS.entities.LCAPPermission}>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "lCAPPermission","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPPermission"
      }
      }]
      }]
      },"nasl.collection.Map<nasl.core.String, nasl.collection.List<app.structures.LCAPDataMetaColunmRule>>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "Map","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },{
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.structures","typeName": "LCAPDataMetaColunmRule"
      }]
      }]
      },"load": {
        "concept": "TypeAnnotation","typeKind": "reference","typeName": "load"
      },"nasl.ui.Current<app.structures.LCAPGetUserResult>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.ui","typeName": "Current","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.structures","typeName": "LCAPGetUserResult"
      }]
      },"{list: nasl.collection.List<app.structures.LCAPGetUserResult>, total: nasl.core.Long}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "list","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.structures","typeName": "LCAPGetUserResult"
      }]
      }
      },{
        "concept": "StructureProperty","name": "total","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      }]
      },"nasl.collection.List<app.structures.LCAPGetUserResult>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.structures","typeName": "LCAPGetUserResult"
      }]
      },"nasl.collection.List<app.structures.LCAPPermissionAndResource>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.structures","typeName": "LCAPPermissionAndResource"
      }]
      },"nasl.ui.Current<app.structures.LCAPGetPerResult>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.ui","typeName": "Current","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.structures","typeName": "LCAPGetPerResult"
      }]
      },"nasl.collection.List<nasl.core.Boolean>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }]
      },"nasl.collection.List<{lCAPPerResMapping: app.dataSources.defaultDS.entities.LCAPPerResMapping}>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "lCAPPerResMapping","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPPerResMapping"
      }
      }]
      }]
      },"{lCAPPerResMapping: app.dataSources.defaultDS.entities.LCAPPerResMapping}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "lCAPPerResMapping","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPPerResMapping"
      }
      }]
      },"nasl.collection.List<app.dataSources.defaultDS.entities.LCAPPerResMapping>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPPerResMapping","typeArguments": null,"returnType": null,"properties": null,"name": "T"
      }],"returnType": null,"properties": null,"name": ""
      },"nasl.collection.List<app.structures.LCAPGetPerResult>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.structures","typeName": "LCAPGetPerResult"
      }]
      }
      },"enumsMap": {
        "UserSourceEnum": {
        "Normal": "普通登录","OpenId": "OpenId"
      },"UserStatusEnum": {
        "Normal": "正常","Forbidden": "禁用"
      },"PickupMethodEnum": {
        "0": "自取","1": "外送"
      },"OrderStatusEnum": {
        "0": "未付款","1": "制作中","2": "已完成"
      },"nasl.configuration.enums.I18nEnum": {
        "en-US": "英语","fr-FR": "法语","ko-KR": "韩语","zh-CN": "中文(简体)","zh-TW": "中文(繁体)","ja-JP": "日语"
      },"ProcInstStatusEnum": {
        "Approved": "审批结束","Approving": "审批中"
      }
      },"logicsMap": {
        "app.dataSources.defaultDS.entities.LCAPResource.logics.get": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "GET","path": "/api/l-c-a-p-resource"
      }
      },"app.dataSources.defaultDS.entities.LCAPResource.logics.create": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-resource"
      }
      },"app.dataSources.defaultDS.entities.LCAPResource.logics.update": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-resource"
      }
      },"app.dataSources.defaultDS.entities.LCAPResource.logics.delete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-resource"
      }
      },"app.dataSources.defaultDS.entities.LCAPResource.logics.createOrUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-resource/createOrUpdate"
      }
      },"app.dataSources.defaultDS.entities.LCAPResource.logics.updateBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-resource/by"
      }
      },"app.dataSources.defaultDS.entities.LCAPResource.logics.deleteBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-resource/by"
      }
      },"app.dataSources.defaultDS.entities.LCAPResource.logics.batchCreate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-resource/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPResource.logics.batchUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-resource/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPResource.logics.batchDelete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-resource/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPResource.logics.import": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-resource/import"
      }
      },"app.dataSources.defaultDS.entities.LCAPPermission.logics.get": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "GET","path": "/api/l-c-a-p-permission"
      }
      },"app.dataSources.defaultDS.entities.LCAPPermission.logics.create": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-permission"
      }
      },"app.dataSources.defaultDS.entities.LCAPPermission.logics.update": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-permission"
      }
      },"app.dataSources.defaultDS.entities.LCAPPermission.logics.delete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-permission"
      }
      },"app.dataSources.defaultDS.entities.LCAPPermission.logics.createOrUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-permission/createOrUpdate"
      }
      },"app.dataSources.defaultDS.entities.LCAPPermission.logics.updateBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-permission/by"
      }
      },"app.dataSources.defaultDS.entities.LCAPPermission.logics.deleteBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-permission/by"
      }
      },"app.dataSources.defaultDS.entities.LCAPPermission.logics.batchCreate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-permission/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPPermission.logics.batchUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-permission/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPPermission.logics.batchDelete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-permission/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPPermission.logics.import": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-permission/import"
      }
      },"app.dataSources.defaultDS.entities.LCAPRole.logics.get": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "GET","path": "/api/l-c-a-p-role"
      }
      },"app.dataSources.defaultDS.entities.LCAPRole.logics.create": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-role"
      }
      },"app.dataSources.defaultDS.entities.LCAPRole.logics.update": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-role"
      }
      },"app.dataSources.defaultDS.entities.LCAPRole.logics.delete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-role"
      }
      },"app.dataSources.defaultDS.entities.LCAPRole.logics.createOrUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-role/createOrUpdate"
      }
      },"app.dataSources.defaultDS.entities.LCAPRole.logics.updateBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-role/by"
      }
      },"app.dataSources.defaultDS.entities.LCAPRole.logics.deleteBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-role/by"
      }
      },"app.dataSources.defaultDS.entities.LCAPRole.logics.batchCreate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-role/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPRole.logics.batchUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-role/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPRole.logics.batchDelete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-role/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPRole.logics.import": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-role/import"
      }
      },"app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.get": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "GET","path": "/api/l-c-a-p-user-role-mapping"
      }
      },"app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.create": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-user-role-mapping"
      }
      },"app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.update": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-user-role-mapping"
      }
      },"app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.delete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-user-role-mapping"
      }
      },"app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.createOrUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-user-role-mapping/createOrUpdate"
      }
      },"app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.updateBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-user-role-mapping/by"
      }
      },"app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.deleteBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-user-role-mapping/by"
      }
      },"app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.batchCreate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-user-role-mapping/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.batchUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-user-role-mapping/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.batchDelete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-user-role-mapping/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.import": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-user-role-mapping/import"
      }
      },"app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.get": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "GET","path": "/api/l-c-a-p-per-res-mapping"
      }
      },"app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.create": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-per-res-mapping"
      }
      },"app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.update": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-per-res-mapping"
      }
      },"app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.delete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-per-res-mapping"
      }
      },"app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.createOrUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-per-res-mapping/createOrUpdate"
      }
      },"app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.updateBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-per-res-mapping/by"
      }
      },"app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.deleteBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-per-res-mapping/by"
      }
      },"app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.batchCreate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-per-res-mapping/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.batchUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-per-res-mapping/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.batchDelete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-per-res-mapping/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.import": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-per-res-mapping/import"
      }
      },"app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.get": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "GET","path": "/api/l-c-a-p-role-per-mapping"
      }
      },"app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.create": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-role-per-mapping"
      }
      },"app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.update": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-role-per-mapping"
      }
      },"app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.delete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-role-per-mapping"
      }
      },"app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.createOrUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-role-per-mapping/createOrUpdate"
      }
      },"app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.updateBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-role-per-mapping/by"
      }
      },"app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.deleteBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-role-per-mapping/by"
      }
      },"app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.batchCreate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-role-per-mapping/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.batchUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-role-per-mapping/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.batchDelete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-role-per-mapping/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.import": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-role-per-mapping/import"
      }
      },"app.dataSources.defaultDS.entities.LCAPUser.logics.get": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "GET","path": "/api/l-c-a-p-user"
      }
      },"app.dataSources.defaultDS.entities.LCAPUser.logics.create": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-user"
      }
      },"app.dataSources.defaultDS.entities.LCAPUser.logics.update": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-user"
      }
      },"app.dataSources.defaultDS.entities.LCAPUser.logics.delete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-user"
      }
      },"app.dataSources.defaultDS.entities.LCAPUser.logics.createOrUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-user/createOrUpdate"
      }
      },"app.dataSources.defaultDS.entities.LCAPUser.logics.updateBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-user/by"
      }
      },"app.dataSources.defaultDS.entities.LCAPUser.logics.deleteBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-user/by"
      }
      },"app.dataSources.defaultDS.entities.LCAPUser.logics.batchCreate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-user/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPUser.logics.batchUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-user/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPUser.logics.batchDelete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-user/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPUser.logics.import": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-user/import"
      }
      },"app.dataSources.defaultDS.entities.LCAPDepartment.logics.get": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "GET","path": "/api/l-c-a-p-department"
      }
      },"app.dataSources.defaultDS.entities.LCAPDepartment.logics.create": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-department"
      }
      },"app.dataSources.defaultDS.entities.LCAPDepartment.logics.update": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-department"
      }
      },"app.dataSources.defaultDS.entities.LCAPDepartment.logics.delete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-department"
      }
      },"app.dataSources.defaultDS.entities.LCAPDepartment.logics.createOrUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-department/createOrUpdate"
      }
      },"app.dataSources.defaultDS.entities.LCAPDepartment.logics.updateBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-department/by"
      }
      },"app.dataSources.defaultDS.entities.LCAPDepartment.logics.deleteBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-department/by"
      }
      },"app.dataSources.defaultDS.entities.LCAPDepartment.logics.batchCreate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-department/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPDepartment.logics.batchUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-department/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPDepartment.logics.batchDelete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-department/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPDepartment.logics.import": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-department/import"
      }
      },"app.dataSources.defaultDS.entities.LCAPUserDeptMapping.logics.get": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "GET","path": "/api/l-c-a-p-user-dept-mapping"
      }
      },"app.dataSources.defaultDS.entities.LCAPUserDeptMapping.logics.create": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-user-dept-mapping"
      }
      },"app.dataSources.defaultDS.entities.LCAPUserDeptMapping.logics.update": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-user-dept-mapping"
      }
      },"app.dataSources.defaultDS.entities.LCAPUserDeptMapping.logics.delete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-user-dept-mapping"
      }
      },"app.dataSources.defaultDS.entities.LCAPUserDeptMapping.logics.createOrUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-user-dept-mapping/createOrUpdate"
      }
      },"app.dataSources.defaultDS.entities.LCAPUserDeptMapping.logics.updateBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-user-dept-mapping/by"
      }
      },"app.dataSources.defaultDS.entities.LCAPUserDeptMapping.logics.deleteBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-user-dept-mapping/by"
      }
      },"app.dataSources.defaultDS.entities.LCAPUserDeptMapping.logics.batchCreate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-user-dept-mapping/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPUserDeptMapping.logics.batchUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-user-dept-mapping/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPUserDeptMapping.logics.batchDelete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-user-dept-mapping/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPUserDeptMapping.logics.import": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-user-dept-mapping/import"
      }
      },"app.dataSources.defaultDS.entities.LCAPRowRuleItem.logics.get": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "GET","path": "/api/l-c-a-p-row-rule-item"
      }
      },"app.dataSources.defaultDS.entities.LCAPRowRuleItem.logics.create": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-row-rule-item"
      }
      },"app.dataSources.defaultDS.entities.LCAPRowRuleItem.logics.update": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-row-rule-item"
      }
      },"app.dataSources.defaultDS.entities.LCAPRowRuleItem.logics.delete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-row-rule-item"
      }
      },"app.dataSources.defaultDS.entities.LCAPRowRuleItem.logics.createOrUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-row-rule-item/createOrUpdate"
      }
      },"app.dataSources.defaultDS.entities.LCAPRowRuleItem.logics.updateBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-row-rule-item/by"
      }
      },"app.dataSources.defaultDS.entities.LCAPRowRuleItem.logics.deleteBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-row-rule-item/by"
      }
      },"app.dataSources.defaultDS.entities.LCAPRowRuleItem.logics.batchCreate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-row-rule-item/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPRowRuleItem.logics.batchUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-row-rule-item/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPRowRuleItem.logics.batchDelete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-row-rule-item/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPRowRuleItem.logics.import": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-row-rule-item/import"
      }
      },"app.dataSources.defaultDS.entities.LCAPColumnRule.logics.get": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "GET","path": "/api/l-c-a-p-column-rule"
      }
      },"app.dataSources.defaultDS.entities.LCAPColumnRule.logics.create": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-column-rule"
      }
      },"app.dataSources.defaultDS.entities.LCAPColumnRule.logics.update": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-column-rule"
      }
      },"app.dataSources.defaultDS.entities.LCAPColumnRule.logics.delete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-column-rule"
      }
      },"app.dataSources.defaultDS.entities.LCAPColumnRule.logics.createOrUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-column-rule/createOrUpdate"
      }
      },"app.dataSources.defaultDS.entities.LCAPColumnRule.logics.updateBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-column-rule/by"
      }
      },"app.dataSources.defaultDS.entities.LCAPColumnRule.logics.deleteBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-column-rule/by"
      }
      },"app.dataSources.defaultDS.entities.LCAPColumnRule.logics.batchCreate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-column-rule/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPColumnRule.logics.batchUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-column-rule/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPColumnRule.logics.batchDelete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-column-rule/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPColumnRule.logics.import": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-column-rule/import"
      }
      },"app.dataSources.defaultDS.entities.LCAPEntityMeta.logics.get": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "GET","path": "/api/l-c-a-p-entity-meta"
      }
      },"app.dataSources.defaultDS.entities.LCAPEntityMeta.logics.create": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-entity-meta"
      }
      },"app.dataSources.defaultDS.entities.LCAPEntityMeta.logics.update": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-entity-meta"
      }
      },"app.dataSources.defaultDS.entities.LCAPEntityMeta.logics.delete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-entity-meta"
      }
      },"app.dataSources.defaultDS.entities.LCAPEntityMeta.logics.createOrUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-entity-meta/createOrUpdate"
      }
      },"app.dataSources.defaultDS.entities.LCAPEntityMeta.logics.updateBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-entity-meta/by"
      }
      },"app.dataSources.defaultDS.entities.LCAPEntityMeta.logics.deleteBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-entity-meta/by"
      }
      },"app.dataSources.defaultDS.entities.LCAPEntityMeta.logics.batchCreate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-entity-meta/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPEntityMeta.logics.batchUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-entity-meta/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPEntityMeta.logics.batchDelete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-entity-meta/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPEntityMeta.logics.import": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-entity-meta/import"
      }
      },"app.dataSources.defaultDS.entities.LCAPLogicMeta.logics.get": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "GET","path": "/api/l-c-a-p-logic-meta"
      }
      },"app.dataSources.defaultDS.entities.LCAPLogicMeta.logics.create": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-logic-meta"
      }
      },"app.dataSources.defaultDS.entities.LCAPLogicMeta.logics.update": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-logic-meta"
      }
      },"app.dataSources.defaultDS.entities.LCAPLogicMeta.logics.delete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-logic-meta"
      }
      },"app.dataSources.defaultDS.entities.LCAPLogicMeta.logics.createOrUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-logic-meta/createOrUpdate"
      }
      },"app.dataSources.defaultDS.entities.LCAPLogicMeta.logics.updateBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-logic-meta/by"
      }
      },"app.dataSources.defaultDS.entities.LCAPLogicMeta.logics.deleteBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-logic-meta/by"
      }
      },"app.dataSources.defaultDS.entities.LCAPLogicMeta.logics.batchCreate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-logic-meta/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPLogicMeta.logics.batchUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-logic-meta/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPLogicMeta.logics.batchDelete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-logic-meta/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPLogicMeta.logics.import": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-logic-meta/import"
      }
      },"app.dataSources.defaultDS.entities.LCAPDataPermission.logics.get": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "GET","path": "/api/l-c-a-p-data-permission"
      }
      },"app.dataSources.defaultDS.entities.LCAPDataPermission.logics.create": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-data-permission"
      }
      },"app.dataSources.defaultDS.entities.LCAPDataPermission.logics.update": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-data-permission"
      }
      },"app.dataSources.defaultDS.entities.LCAPDataPermission.logics.delete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-data-permission"
      }
      },"app.dataSources.defaultDS.entities.LCAPDataPermission.logics.createOrUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-data-permission/createOrUpdate"
      }
      },"app.dataSources.defaultDS.entities.LCAPDataPermission.logics.updateBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-data-permission/by"
      }
      },"app.dataSources.defaultDS.entities.LCAPDataPermission.logics.deleteBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-data-permission/by"
      }
      },"app.dataSources.defaultDS.entities.LCAPDataPermission.logics.batchCreate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-data-permission/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPDataPermission.logics.batchUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-data-permission/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPDataPermission.logics.batchDelete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-data-permission/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPDataPermission.logics.import": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-data-permission/import"
      }
      },"app.dataSources.defaultDS.entities.CoffeeOrderMapping.logics.get": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "GET","path": "/api/coffee-order-mapping"
      }
      },"app.dataSources.defaultDS.entities.CoffeeOrderMapping.logics.create": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/coffee-order-mapping"
      }
      },"app.dataSources.defaultDS.entities.CoffeeOrderMapping.logics.update": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/coffee-order-mapping"
      }
      },"app.dataSources.defaultDS.entities.CoffeeOrderMapping.logics.delete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/coffee-order-mapping"
      }
      },"app.dataSources.defaultDS.entities.CoffeeOrderMapping.logics.createOrUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/coffee-order-mapping/createOrUpdate"
      }
      },"app.dataSources.defaultDS.entities.CoffeeOrderMapping.logics.updateBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/coffee-order-mapping/by"
      }
      },"app.dataSources.defaultDS.entities.CoffeeOrderMapping.logics.deleteBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/coffee-order-mapping/by"
      }
      },"app.dataSources.defaultDS.entities.CoffeeOrderMapping.logics.batchCreate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/coffee-order-mapping/batch"
      }
      },"app.dataSources.defaultDS.entities.CoffeeOrderMapping.logics.batchUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/coffee-order-mapping/batch"
      }
      },"app.dataSources.defaultDS.entities.CoffeeOrderMapping.logics.batchDelete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/coffee-order-mapping/batch"
      }
      },"app.dataSources.defaultDS.entities.CoffeeOrderMapping.logics.import": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/coffee-order-mapping/import"
      }
      },"app.dataSources.defaultDS.entities.OrderEntity.logics.get": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "GET","path": "/api/order-entity"
      }
      },"app.dataSources.defaultDS.entities.OrderEntity.logics.create": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/order-entity"
      }
      },"app.dataSources.defaultDS.entities.OrderEntity.logics.update": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/order-entity"
      }
      },"app.dataSources.defaultDS.entities.OrderEntity.logics.delete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/order-entity"
      }
      },"app.dataSources.defaultDS.entities.OrderEntity.logics.createOrUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/order-entity/createOrUpdate"
      }
      },"app.dataSources.defaultDS.entities.OrderEntity.logics.updateBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/order-entity/by"
      }
      },"app.dataSources.defaultDS.entities.OrderEntity.logics.deleteBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/order-entity/by"
      }
      },"app.dataSources.defaultDS.entities.OrderEntity.logics.batchCreate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/order-entity/batch"
      }
      },"app.dataSources.defaultDS.entities.OrderEntity.logics.batchUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/order-entity/batch"
      }
      },"app.dataSources.defaultDS.entities.OrderEntity.logics.batchDelete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/order-entity/batch"
      }
      },"app.dataSources.defaultDS.entities.OrderEntity.logics.import": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/order-entity/import"
      }
      },"app.dataSources.defaultDS.entities.Coffee.logics.get": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "GET","path": "/api/coffee"
      }
      },"app.dataSources.defaultDS.entities.Coffee.logics.create": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/coffee"
      }
      },"app.dataSources.defaultDS.entities.Coffee.logics.update": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/coffee"
      }
      },"app.dataSources.defaultDS.entities.Coffee.logics.delete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/coffee"
      }
      },"app.dataSources.defaultDS.entities.Coffee.logics.createOrUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/coffee/createOrUpdate"
      }
      },"app.dataSources.defaultDS.entities.Coffee.logics.updateBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/coffee/by"
      }
      },"app.dataSources.defaultDS.entities.Coffee.logics.deleteBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/coffee/by"
      }
      },"app.dataSources.defaultDS.entities.Coffee.logics.batchCreate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/coffee/batch"
      }
      },"app.dataSources.defaultDS.entities.Coffee.logics.batchUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/coffee/batch"
      }
      },"app.dataSources.defaultDS.entities.Coffee.logics.batchDelete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/coffee/batch"
      }
      },"app.dataSources.defaultDS.entities.Coffee.logics.import": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/coffee/import"
      }
      },"app.dataSources.defaultDS.entities.CoffeeCategory.logics.get": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "GET","path": "/api/coffee-category"
      }
      },"app.dataSources.defaultDS.entities.CoffeeCategory.logics.create": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/coffee-category"
      }
      },"app.dataSources.defaultDS.entities.CoffeeCategory.logics.update": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/coffee-category"
      }
      },"app.dataSources.defaultDS.entities.CoffeeCategory.logics.delete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/coffee-category"
      }
      },"app.dataSources.defaultDS.entities.CoffeeCategory.logics.createOrUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/coffee-category/createOrUpdate"
      }
      },"app.dataSources.defaultDS.entities.CoffeeCategory.logics.updateBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/coffee-category/by"
      }
      },"app.dataSources.defaultDS.entities.CoffeeCategory.logics.deleteBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/coffee-category/by"
      }
      },"app.dataSources.defaultDS.entities.CoffeeCategory.logics.batchCreate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/coffee-category/batch"
      }
      },"app.dataSources.defaultDS.entities.CoffeeCategory.logics.batchUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/coffee-category/batch"
      }
      },"app.dataSources.defaultDS.entities.CoffeeCategory.logics.batchDelete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/coffee-category/batch"
      }
      },"app.dataSources.defaultDS.entities.CoffeeCategory.logics.import": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/coffee-category/import"
      }
      },"app.dataSources.defaultDS.entities.Slide.logics.get": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "GET","path": "/api/slide"
      }
      },"app.dataSources.defaultDS.entities.Slide.logics.create": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/slide"
      }
      },"app.dataSources.defaultDS.entities.Slide.logics.update": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/slide"
      }
      },"app.dataSources.defaultDS.entities.Slide.logics.delete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/slide"
      }
      },"app.dataSources.defaultDS.entities.Slide.logics.createOrUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/slide/createOrUpdate"
      }
      },"app.dataSources.defaultDS.entities.Slide.logics.updateBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/slide/by"
      }
      },"app.dataSources.defaultDS.entities.Slide.logics.deleteBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/slide/by"
      }
      },"app.dataSources.defaultDS.entities.Slide.logics.batchCreate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/slide/batch"
      }
      },"app.dataSources.defaultDS.entities.Slide.logics.batchUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/slide/batch"
      }
      },"app.dataSources.defaultDS.entities.Slide.logics.batchDelete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/slide/batch"
      }
      },"app.dataSources.defaultDS.entities.Slide.logics.import": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/slide/import"
      }
      },"app.logics.logic1": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/logic1"
      }
      },"app.logics.deleteOrderById": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/deleteOrderById"
      }
      },"app.logics.loadMyOrder": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/loadMyOrder"
      }
      },"app.logics.LCAPIsRoleNameRepeated": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPIsRoleNameRepeated"
      }
      },"app.logics.LCAPLoadResourceTableView": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPLoadResourceTableView"
      }
      },"app.logics.LCAPIsAlreadBindUserIdList": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPIsAlreadBindUserIdList"
      }
      },"app.logics.LCAPGetMappingIdByRoleIdAndUserId": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPGetMappingIdByRoleIdAndUserId"
      }
      },"app.logics.LCAPGetPermissionByRoleId": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPGetPermissionByRoleId"
      }
      },"app.logics.LCAPGetUserResources": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPGetUserResources"
      }
      },"app.logics.LCAPGetRolePermissionList": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPGetRolePermissionList"
      }
      },"app.logics.LCAPLoadUserRoleMappingTableView": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPLoadUserRoleMappingTableView"
      }
      },"app.logics.LCAPLoadRoleManagementTableView": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPLoadRoleManagementTableView"
      }
      },"app.logics.LCAPGetRoleBindUserList": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPGetRoleBindUserList"
      }
      },"app.logics.LCAPGetScopeResourceByRoleId": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPGetScopeResourceByRoleId"
      }
      },"app.logics.LCAPGetMappingByPermissionIdAndResourceId": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPGetMappingByPermissionIdAndResourceId"
      }
      },"app.logics.LCAPIsExistRoleId": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPIsExistRoleId"
      }
      },"app.logics.LCAPGetUserTableView": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPGetUserTableView"
      }
      },"app.logics.LCAPGetAllUsers": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPGetAllUsers"
      }
      },"app.logics.LCAPGetUserByUserId": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPGetUserByUserId"
      }
      },"app.logics.LCAPGetUserList": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPGetUserList"
      }
      },"app.logics.LCAPLoadAddRoleUserTableView": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPLoadAddRoleUserTableView"
      }
      },"app.logics.LCAPLoadPerManagementTableView": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPLoadPerManagementTableView"
      }
      },"app.logics.LCAPGetLAllACPPermission": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPGetLAllACPPermission"
      }
      },"app.logics.LCAPGetResourcesByPermissionId": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPGetResourcesByPermissionId"
      }
      },"app.logics.LCAPLoadAddRolePermissionTableView": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPLoadAddRolePermissionTableView"
      }
      },"app.logics.LCAPGetMappingByRoleIdAndPermissionId": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPGetMappingByRoleIdAndPermissionId"
      }
      },"app.logics.LCAPIsUserNameRepeated": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPIsUserNameRepeated"
      }
      },"app.logics.LCAPGetPermissionResourceRelated": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPGetPermissionResourceRelated"
      }
      },"app.logics.LCAPGetPermissionResourseNotRelated": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPGetPermissionResourseNotRelated"
      }
      },"app.logics.LCAPGetPerResMappingByPermissionId": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPGetPerResMappingByPermissionId"
      }
      },"app.logics.LCAPCreateNormalUser": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPCreateNormalUser"
      }
      },"app.logics.LCAPUpdateNormalUser": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPUpdateNormalUser"
      }
      },"app.logics.LCAPCreateDepartment": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPCreateDepartment"
      }
      },"app.logics.LCAPUpdateDepartment": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPUpdateDepartment"
      }
      },"app.logics.LCAPBatchDeleteDepartment": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPBatchDeleteDepartment"
      }
      },"app.logics.LCAPSetDeptLeader": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPSetDeptLeader"
      }
      },"app.logics.LCAPCanceDeptLeader": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPCanceDeptLeader"
      }
      },"app.logics.LCAPBatchAddDeptUser": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPBatchAddDeptUser"
      }
      },"app.logics.LCAPBatchUpdateDeptUser": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPBatchUpdateDeptUser"
      }
      },"app.logics.LCAPBatchRemoveDeptUser": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPBatchRemoveDeptUser"
      }
      },"app.logics.LCAPGetDepts": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPGetDepts"
      }
      },"app.logics.LCAPGetDept": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPGetDept"
      }
      },"app.logics.LCAPSearchDepts": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPSearchDepts"
      }
      },"app.logics.LCAPGetDeptUsers": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPGetDeptUsers"
      }
      },"app.logics.LCAPGetDeptList": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPGetDeptList"
      }
      },"app.logics.LCAPCreateRootDept": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPCreateRootDept"
      }
      },"app.logics.LCAPJudgeDeptIdRepeated": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPJudgeDeptIdRepeated"
      }
      },"app.logics.LCAPLoadDeptSetLeaderSelect": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPLoadDeptSetLeaderSelect"
      }
      },"app.logics.LCAPLoadDeptAddUserSelect": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPLoadDeptAddUserSelect"
      }
      },"app.logics.LCAPLoadUserManagementSelect": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPLoadUserManagementSelect"
      }
      },"app.logics.LCAPSearchDeptUsers": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPSearchDeptUsers"
      }
      },"app.logics.LCAPGetChildDepts": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPGetChildDepts"
      }
      },"app.logics.LCAPGetSecondParentDept": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPGetSecondParentDept"
      }
      },"app.logics.LCAPJudgeDelEntityOrLogicMeta": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPJudgeDelEntityOrLogicMeta"
      }
      },"app.logics.LCAPDeleteDataPermission": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPDeleteDataPermission"
      }
      },"app.logics.LCAPJudgeSaveEntityOrLogicMeta": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPJudgeSaveEntityOrLogicMeta"
      }
      },"app.logics.LCAPNoneEntityDataPermission": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPNoneEntityDataPermission"
      }
      },"app.logics.LCAPNoneLogicDataPermission": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPNoneLogicDataPermission"
      }
      },"app.logics.LCAPLoadDataMetaManagement": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPLoadDataMetaManagement"
      }
      },"app.logics.LCAPGetDataPermissionByResourceName": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPGetDataPermissionByResourceName"
      }
      },"app.logics.LCAPGetColumnRuleByDataPermissionId": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPGetColumnRuleByDataPermissionId"
      }
      },"app.logics.LCAPGetUserNameByUserId": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPGetUserNameByUserId"
      }
      },"app.logics.LCAPGetRowRuleByDataPermissionId": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPGetRowRuleByDataPermissionId"
      }
      },"app.logics.LCAPReportEntity": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPReportEntity"
      }
      },"app.logics.LCAPReportLogic": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPReportLogic"
      }
      },"app.logics.LCAPGetEntityDataPermissions": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPGetEntityDataPermissions"
      }
      },"app.logics.LCAPGetLogicDataPermissions": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPGetLogicDataPermissions"
      }
      },"app.logics.LCAPGetDeptIdByUserId": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPGetDeptIdByUserId"
      }
      },"app.logics.LCAPGetUnderlingByUserName": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPGetUnderlingByUserName"
      }
      },"app.logics.LCAPGetDeptAndUnderlingByUserName": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPGetDeptAndUnderlingByUserName"
      }
      },"app.logics.LCAPDeleteDataMetaById": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPDeleteDataMetaById"
      }
      },"app.logics.LCAPGetEntityMetaById": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPGetEntityMetaById"
      }
      },"app.logics.LCAPGetLogicMetaById": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPGetLogicMetaById"
      }
      },"app.logics.LCAPCreateDataPermission": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPCreateDataPermission"
      }
      },"app.logics.LCAPCreateColumnRule": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPCreateColumnRule"
      }
      },"app.logics.LCAPGetEntityMetaByName": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPGetEntityMetaByName"
      }
      },"app.logics.LCAPGetLogicMetaByName": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPGetLogicMetaByName"
      }
      },"app.logics.saveOrder": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/saveOrder"
      }
      },"app.logics.loadCoffeeStructureList": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/loadCoffeeStructureList"
      }
      },"app.logics.loadCoffeeCategoryList": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/loadCoffeeCategoryList"
      }
      },"app.logics.loadSlideList": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/loadSlideList"
      }
      },"app.logics.loadOrderManagementTableView_1": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/loadOrderManagementTableView_1"
      }
      },"app.logics.loadCoffeeManagementTableView_1": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/loadCoffeeManagementTableView_1"
      }
      },"app.logics.loadCoffeeManagementSelect_5CoffeeCategory": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/loadCoffeeManagementSelect_5CoffeeCategory"
      }
      },"app.logics.loadCoffeeCateGoryManagementTableView_1": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/loadCoffeeCateGoryManagementTableView_1"
      }
      },"app.logics.loadSlideManagementTableView_1": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/loadSlideManagementTableView_1"
      }
      },"extensions.lcap_auth.logics.getUser": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcap_auth/getUser"
      }
      },"extensions.lcap_auth.logics.createToken": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcap_auth/createToken"
      }
      },"extensions.lcap_auth.logics.removeToken": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcap_auth/removeToken"
      }
      },"extensions.lcap_permission.logics.uploadResource": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcap_permission/uploadResource"
      }
      },"extensions.lcap_permission.logics.checkPermission": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcap_permission/checkPermission"
      }
      },"extensions.lcap_permission.logics.getUserResources": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcap_permission/getUserResources"
      }
      },"extensions.lcap_annotation_data_permission.logics.reportLogic": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcap_annotation_data_permission/reportLogic"
      }
      },"extensions.lcap_annotation_data_permission.logics.getLogicDataPermissions": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcap_annotation_data_permission/getLogicDataPermissions"
      }
      },"extensions.lcap_annotation_data_permission.logics.reportEntity": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcap_annotation_data_permission/reportEntity"
      }
      },"extensions.lcap_annotation_data_permission.logics.getEntityDataPermissions": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcap_annotation_data_permission/getEntityDataPermissions"
      }
      },"extensions.lcap_user.logics.getUserList": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcap_user/getUserList"
      }
      },"extensions.lcap_user.logics.getRoleList": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcap_user/getRoleList"
      }
      },"extensions.lcap_user.logics.getUserListByRoleId": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcap_user/getUserListByRoleId"
      }
      },"extensions.lcap_user.logics.getUserLevelNthUpDirectManager": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcap_user/getUserLevelNthUpDirectManager"
      }
      },"extensions.lcap_user.logics.getUserLevelNthUpDeptManager": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcap_user/getUserLevelNthUpDeptManager"
      }
      },"extensions.lcap_user.logics.getUserLevelNthDeptManager": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcap_user/getUserLevelNthDeptManager"
      }
      },"extensions.lcap_user.logics.getDeptUsers": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcap_user/getDeptUsers"
      }
      },"extensions.lcap_user.logics.getDepartments": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcap_user/getDepartments"
      }
      },"extensions.lcap_user.logics.getUsersByUserName": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcap_user/getUsersByUserName"
      }
      }
      },"servicesMap": {
        "_custom": {
        "connector.dingding.interfaces.getUserIdList1": {
        "config": {
        "serviceType": "external"
      },"url": {
        "method": "POST","path": "https://oapi.dingtalk.com/topapi/user/listid"
      }
      },"connector.dingding.interfaces.getUser": {
        "config": {
        "serviceType": "external"
      },"url": {
        "method": "POST","path": "https://oapi.dingtalk.com/topapi/v2/user/get"
      }
      },"connector.dingding.interfaces.getParentsByDept": {
        "config": {
        "serviceType": "external"
      },"url": {
        "method": "POST","path": "https://oapi.dingtalk.com/topapi/v2/department/listparentbydept"
      }
      },"connector.dingding.interfaces.getListParentByDept": {
        "config": {
        "serviceType": "external"
      },"url": {
        "method": "POST","path": "https://oapi.dingtalk.com/topapi/v2/department/listparentbydept"
      }
      },"connector.dingding.interfaces.getDepartmentSubIdList": {
        "config": {
        "serviceType": "external"
      },"url": {
        "method": "GET","path": "https://oapi.dingtalk.com/topapi/v2/department/listsub"
      }
      },"connector.dingding.interfaces.getUserIdList": {
        "config": {
        "serviceType": "external"
      },"url": {
        "method": "POST","path": "https://oapi.dingtalk.com/topapi/user/listid"
      }
      },"connector.dingding.interfaces.getDepartment": {
        "config": {
        "serviceType": "external"
      },"url": {
        "method": "POST","path": "https://oapi.dingtalk.com/topapi/v2/department/listsub"
      }
      },"connector.dingding.interfaces.getToken": {
        "config": {
        "serviceType": "external"
      },"url": {
        "method": "GET","path": "https://oapi.dingtalk.com/gettoken"
      }
      },"connector.qiweionlineconnector.interfaces.getAccessToken": {
        "config": {
        "serviceType": "external"
      },"url": {
        "method": "GET","path": "https://qyapi.weixin.qq.com/cgi-bin/gettoken"
      }
      },"connector.qiweionlineconnector.interfaces.appSendMessage": {
        "config": {
        "serviceType": "external"
      },"url": {
        "method": "POST","path": "https://qyapi.weixin.qq.com/cgi-bin/message/send"
      }
      },"connector.qiweionlineconnector.interfaces.appSendNewsMessage": {
        "config": {
        "serviceType": "external"
      },"url": {
        "method": "POST","path": "https://qyapi.weixin.qq.com/cgi-bin/message/send"
      }
      },"connector.qiweionlineconnector.interfaces.getDepartmentList": {
        "config": {
        "serviceType": "external"
      },"url": {
        "method": "GET","path": "https://qyapi.weixin.qq.com/cgi-bin/department/list"
      }
      },"connector.qiweionlineconnector.interfaces.getUserDetail": {
        "config": {
        "serviceType": "external"
      },"url": {
        "method": "GET","path": "https://qyapi.weixin.qq.com/cgi-bin/user/list"
      }
      },"connector.qiweionlineconnector.interfaces.getDepartDetail": {
        "config": {
        "serviceType": "external"
      },"url": {
        "method": "GET","path": "https://qyapi.weixin.qq.com/cgi-bin/department/get"
      }
      },"connector.qiweionlineconnector.interfaces.getDepartUserList": {
        "config": {
        "serviceType": "external"
      },"url": {
        "method": "GET","path": "https://qyapi.weixin.qq.com/cgi-bin/user/simplelist"
      }
      }
      }
      }
      }