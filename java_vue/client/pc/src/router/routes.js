const routes = [
    {
        path: "/login",
        component: require("../views/login/index.vue").default,
    },
    {
        path: "/dashboard",
        component: require("../views/dashboard/index.vue").default,
        children: [
            {
                path: "orderManagement",
                component:
                    require("../views/dashboard/views/orderManagement/index.vue")
                        .default,
            },
            {
                path: "coffeeManagement",
                component:
                    require("../views/dashboard/views/coffeeManagement/index.vue")
                        .default,
            },
            {
                path: "",
                redirect: "coffeeManagement",
            },
            {
                path: "coffeeCateGoryManagement",
                component:
                    require("../views/dashboard/views/coffeeCateGoryManagement/index.vue")
                        .default,
            },
            {
                path: "slideManagement",
                component:
                    require("../views/dashboard/views/slideManagement/index.vue")
                        .default,
            },
        ],
    },
    {
        path: "/",
        redirect: "/dashboard",
    },
    {
        path: "/noAuth",
        component: require("../views/noAuth/index.vue").default,
    },
    {
        path: "/notFound",
        component: require("../views/notFound/index.vue").default,
    },
    {
        path: "/index",
        component: require("../views/index/index.vue").default,
    },
    {
        path: "/permissionCenter",
        component: require("../views/permissionCenter/index.vue").default,
        children: [
            {
                path: "departmentManagement",
                component:
                    require("../views/permissionCenter/views/departmentManagement/index.vue")
                        .default,
            },
            {
                path: "roleManagement",
                component:
                    require("../views/permissionCenter/views/roleManagement/index.vue")
                        .default,
            },
            {
                path: "userManagement",
                component:
                    require("../views/permissionCenter/views/userManagement/index.vue")
                        .default,
            },
            {
                path: "permissionManagement",
                component:
                    require("../views/permissionCenter/views/permissionManagement/index.vue")
                        .default,
            },
        ],
    },
    {
        path: "*",
        redirect: "/notFound",
    },
];
export { routes };
