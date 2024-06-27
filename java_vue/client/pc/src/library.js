import Vue from "vue";
import { installComponents } from "@vusion/utils";
import * as lcapLogin from "lcap-login/dist-theme";
import * as lcapFeAnnotationDataPermission from "lcap-fe-annotation-data-permission/dist-theme";
import * as adapter_sdk from "adapter_sdk/dist-theme";

installComponents(Vue, lcapLogin);
installComponents(Vue, lcapFeAnnotationDataPermission);
installComponents(Vue, adapter_sdk);
