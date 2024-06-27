const routes = [
    {
        path: "/m/login",
        component: require("../views/login/index.vue").default,
    },
    {
        path: "/m/user",
        component: require("../views/user/index.vue").default,
    },
    {
        path: "/m/index",
        component: require("../views/index/index.vue").default,
        children: [
            {
                path: "myOrder",
                component: require("../views/index/views/myOrder/index.vue")
                    .default,
            },
            {
                path: "confirmOrder",
                component:
                    require("../views/index/views/confirmOrder/index.vue")
                        .default,
            },
            {
                path: "menu",
                component: require("../views/index/views/menu/index.vue")
                    .default,
            },
            {
                path: "home",
                component: require("../views/index/views/home/index.vue")
                    .default,
            },
            {
                path: "",
                redirect: "home",
            },
        ],
    },
    {
        path: "/m",
        redirect: "/m/index",
    },
    {
        path: "/m/noAuth",
        component: require("../views/noAuth/index.vue").default,
    },
    {
        path: "/m/notFound",
        component: require("../views/notFound/index.vue").default,
    },
    {
        path: "/",
        redirect: "/m",
    },
    {
        path: "*",
        redirect: "/m/notFound",
    },
];
export { routes };
