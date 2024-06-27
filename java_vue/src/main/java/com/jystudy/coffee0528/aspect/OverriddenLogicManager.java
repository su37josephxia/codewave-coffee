package com.jystudy.coffee0528.aspect;

import com.jystudy.coffee0528.service.logics.*;
import org.springframework.stereotype.Service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import javax.annotation.Resource;
import java.util.List;

/**
 * 复写逻辑的帮助类
 */
@Service
public class OverriddenLogicManager {
    Logger log = LoggerFactory.getLogger(OverriddenLogicManager.class);
    @Resource
    private GetEntityDataPermissionsOverriddenLcap_annotation_data_permissionCustomizeService getEntityDataPermissionsOverriddenLcap_annotation_data_permissionCustomizeService;
    @Resource
    private ReportEntityOverriddenLcap_annotation_data_permissionCustomizeService reportEntityOverriddenLcap_annotation_data_permissionCustomizeService;
    @Resource
    private GetLogicDataPermissionsOverriddenLcap_annotation_data_permissionCustomizeService getLogicDataPermissionsOverriddenLcap_annotation_data_permissionCustomizeService;
    @Resource
    private ReportLogicOverriddenLcap_annotation_data_permissionCustomizeService reportLogicOverriddenLcap_annotation_data_permissionCustomizeService;

    public Object execute(String className, String methodName, Object... args) {
        log.info("OverriddenLogicManager execute: className={},methodName={}", className, methodName);
        if ("getEntityDataPermissionsOverriddenLcap_annotation_data_permissionCustomizeService".equals(className) && "getEntityDataPermissionsOverriddenLcap_annotation_data_permission".equals(methodName)) {
                        return 
               getEntityDataPermissionsOverriddenLcap_annotation_data_permissionCustomizeService.getEntityDataPermissionsOverriddenLcap_annotation_data_permission(
                    (List<String>) args[0]
            );
        }
        if ("reportEntityOverriddenLcap_annotation_data_permissionCustomizeService".equals(className) && "reportEntityOverriddenLcap_annotation_data_permission".equals(methodName)) {
                        return 
               reportEntityOverriddenLcap_annotation_data_permissionCustomizeService.reportEntityOverriddenLcap_annotation_data_permission(
                    (List<com.netease.lowcode.annotation.datapermission.entity.structure.EntityStructure>) args[0]
            );
        }
        if ("getLogicDataPermissionsOverriddenLcap_annotation_data_permissionCustomizeService".equals(className) && "getLogicDataPermissionsOverriddenLcap_annotation_data_permission".equals(methodName)) {
                        return 
               getLogicDataPermissionsOverriddenLcap_annotation_data_permissionCustomizeService.getLogicDataPermissionsOverriddenLcap_annotation_data_permission(
                    (List<String>) args[0]
            );
        }
        if ("reportLogicOverriddenLcap_annotation_data_permissionCustomizeService".equals(className) && "reportLogicOverriddenLcap_annotation_data_permission".equals(methodName)) {
                        return 
               reportLogicOverriddenLcap_annotation_data_permissionCustomizeService.reportLogicOverriddenLcap_annotation_data_permission(
                    (List<com.netease.lowcode.annotation.datapermission.logic.structure.LogicStructure>) args[0]
            );
        }
        return null;
    }
}