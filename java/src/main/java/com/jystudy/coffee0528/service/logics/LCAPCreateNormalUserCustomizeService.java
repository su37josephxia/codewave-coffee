package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import com.jystudy.coffee0528.service.entities.LCAPUserService; 
import java.util.ArrayList; 
import java.util.List; 
import com.jystudy.coffee0528.domain.entities.LCAPUserDeptMapping; 
import com.jystudy.coffee0528.domain.enumeration.UserSourceEnumEnum; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import com.jystudy.coffee0528.domain.entities.LCAPUser; 
import org.slf4j.Logger; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.context.UserContext; 
import com.jystudy.coffee0528.config.Constants; 
import com.jystudy.coffee0528.service.entities.LCAPUserDeptMappingService; 

@Service
public class LCAPCreateNormalUserCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPUserService lCAPUserService;
    @Autowired
    private LCAPGetDeptListCustomizeService lCAPGetDeptListCustomizeService;
    @Autowired
    private LCAPUserDeptMappingService lCAPUserDeptMappingService;
    public void lCAPCreateNormalUser(LCAPUser user) {
        List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_FF3D47421C85AD91C2FDAE6821984202> temp = new ArrayList<>();
        String rootDeptId = "";
        LCAPUserDeptMapping mapping = new LCAPUserDeptMapping();
        if ((CommonFunctionUtil.equals(user.userId, null))) {
            user.userId = UserContext.generateUserId(user.userName, CommonFunctionUtil.enumValueToText(user.source, UserSourceEnumEnum.class)); 
        } else {
        } 

        if ((CommonFunctionUtil.notEquals(user.password, null))) {
            user.password = UserContext.encryptPassword(user.password); 
        } else {
        } 

        user = lCAPUserService.create(user); 
        temp = lCAPGetDeptListCustomizeService.lCAPGetDeptList(); 
        if (CommonFunctionUtil.hasValue(temp)) {
            rootDeptId = CommonFunctionUtil.listHead(temp).lCAPDepartment.deptId; 
            mapping.userId = user.userId; 
            mapping.deptId = rootDeptId; 
            mapping.isDeptLeader = 0L; 

            lCAPUserDeptMappingService.create(mapping);
        } else {
        } 

        return ;
    } 


}
