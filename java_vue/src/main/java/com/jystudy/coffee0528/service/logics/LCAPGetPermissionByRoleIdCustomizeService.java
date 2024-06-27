package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import java.util.ArrayList; 
import java.util.List; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import com.jystudy.coffee0528.util.LambdaParamWrapper; 
import org.slf4j.Logger; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 
import com.jystudy.coffee0528.repository.LCAPGetPermissionByRoleIdCustomizeServiceMapper; 
import com.jystudy.coffee0528.domain.entities.LCAPPermission; 

@Service
public class LCAPGetPermissionByRoleIdCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPGetPermissionByRoleIdCustomizeServiceMapper lCAPGetPermissionByRoleIdCustomizeServiceMapper;
    public List<LCAPPermission> lCAPGetPermissionByRoleId(Long roleId) {
        LambdaParamWrapper<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_1406A78D88BEF361C3C93B65A4E2AB5A> variable1 = new LambdaParamWrapper<>(new com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_1406A78D88BEF361C3C93B65A4E2AB5A());
        LambdaParamWrapper<List<Long>> rolePermissionMappingIdList = new LambdaParamWrapper<>(new ArrayList<>());
        List<LCAPPermission> permissionList = new ArrayList<>();
        if ((CommonFunctionUtil.equals(roleId, null))) {
            return permissionList;
        } else {
        } 

        variable1.param = CommonFunctionUtil.createListPage(lCAPGetPermissionByRoleIdCustomizeServiceMapper.getAnonymousStructure_1C8D1250B6DC21B85363C7974FAD68BD(roleId), lCAPGetPermissionByRoleIdCustomizeServiceMapper.countAnonymousStructure_1C8D1250B6DC21B85363C7974FAD68BD(roleId).intValue(), com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_1406A78D88BEF361C3C93B65A4E2AB5A.class); 
        rolePermissionMappingIdList.param = CommonFunctionUtil.listTransform(variable1.param.list, (item) -> item.lCAPRolePerMapping.permissionId); 
        if ((CommonFunctionUtil.equals(CommonFunctionUtil.length(rolePermissionMappingIdList.param), 0L))) {
        } else {
            permissionList = CommonFunctionUtil.listTransform(lCAPGetPermissionByRoleIdCustomizeServiceMapper.getAnonymousStructure_92F2372792A8A12DF53175B7AD25D2FD(rolePermissionMappingIdList.param), (item) -> item.lCAPPermission); 
        } 

        return permissionList;
    } 


}
