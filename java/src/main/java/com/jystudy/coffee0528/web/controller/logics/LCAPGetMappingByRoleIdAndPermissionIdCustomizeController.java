package com.jystudy.coffee0528.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import com.jystudy.coffee0528.web.validation.Validation; 
import com.jystudy.coffee0528.web.controller.logics.dto.LCAPGetMappingByRoleIdAndPermissionIdCustomizeControllerDto; 
import com.jystudy.coffee0528.domain.entities.LCAPRolePerMapping; 
import com.jystudy.coffee0528.web.ApiReturn; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.PostMapping; 
import org.springframework.web.bind.annotation.RequestBody; 
import com.jystudy.coffee0528.service.logics.LCAPGetMappingByRoleIdAndPermissionIdCustomizeService; 
import com.jystudy.coffee0528.web.validation.ValidationRuleGroup; 

@RestController
public class LCAPGetMappingByRoleIdAndPermissionIdCustomizeController {

    @Autowired
    private LCAPGetMappingByRoleIdAndPermissionIdCustomizeService lCAPGetMappingByRoleIdAndPermissionIdCustomizeService;
    @Validation(value = { @ValidationRuleGroup(value = "b27c7b74-dc4e-4324-97a7-e639aea69dce",rules = { })})
    @PostMapping("/api/lcplogics/LCAPGetMappingByRoleIdAndPermissionId")
    public ApiReturn<LCAPRolePerMapping> lCAPGetMappingByRoleIdAndPermissionId(@RequestBody LCAPGetMappingByRoleIdAndPermissionIdCustomizeControllerDto body) throws Exception {
        return ApiReturn.of(lCAPGetMappingByRoleIdAndPermissionIdCustomizeService.lCAPGetMappingByRoleIdAndPermissionId(body.getRoleId(), body.getPermissionId()));
    } 


}
