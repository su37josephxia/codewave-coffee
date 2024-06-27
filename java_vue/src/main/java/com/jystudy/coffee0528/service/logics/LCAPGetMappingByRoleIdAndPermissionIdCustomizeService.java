package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import com.jystudy.coffee0528.util.LambdaParamWrapper; 
import org.slf4j.Logger; 
import com.jystudy.coffee0528.domain.entities.LCAPRolePerMapping; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 
import com.jystudy.coffee0528.repository.LCAPGetMappingByRoleIdAndPermissionIdCustomizeServiceMapper; 

@Service
public class LCAPGetMappingByRoleIdAndPermissionIdCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPGetMappingByRoleIdAndPermissionIdCustomizeServiceMapper lCAPGetMappingByRoleIdAndPermissionIdCustomizeServiceMapper;
    public LCAPRolePerMapping lCAPGetMappingByRoleIdAndPermissionId(Long roleId, Long permissionId) {
        LambdaParamWrapper<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_1406A78D88BEF361C3C93B65A4E2AB5A> variable1 = new LambdaParamWrapper<>(new com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_1406A78D88BEF361C3C93B65A4E2AB5A());
        LCAPRolePerMapping result = new LCAPRolePerMapping();
        variable1.param = CommonFunctionUtil.createListPage(lCAPGetMappingByRoleIdAndPermissionIdCustomizeServiceMapper.getAnonymousStructure_1C8D1250B6DC21B85363C7974FAD68BD(permissionId, roleId), lCAPGetMappingByRoleIdAndPermissionIdCustomizeServiceMapper.countAnonymousStructure_1C8D1250B6DC21B85363C7974FAD68BD(permissionId, roleId).intValue(), com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_1406A78D88BEF361C3C93B65A4E2AB5A.class); 
        if ((variable1.param.total.compareTo(0L) > 0)) {
            result = CommonFunctionUtil.get(CommonFunctionUtil.listTransform(variable1.param.list, (item) -> item.lCAPRolePerMapping), 0L); 
        } else {
        } 

        return result;
    } 


}
