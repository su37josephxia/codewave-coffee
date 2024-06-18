package com.jystudy.coffee0528.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import com.jystudy.coffee0528.service.logics.LCAPGetPermissionByRoleIdCustomizeService; 
import java.util.List; 
import com.jystudy.coffee0528.web.validation.Validation; 
import com.jystudy.coffee0528.web.controller.logics.dto.LCAPGetPermissionByRoleIdCustomizeControllerDto; 
import com.jystudy.coffee0528.web.ApiReturn; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.PostMapping; 
import org.springframework.web.bind.annotation.RequestBody; 
import com.jystudy.coffee0528.web.validation.ValidationRuleGroup; 
import com.jystudy.coffee0528.domain.entities.LCAPPermission; 

@RestController
public class LCAPGetPermissionByRoleIdCustomizeController {

    @Autowired
    private LCAPGetPermissionByRoleIdCustomizeService lCAPGetPermissionByRoleIdCustomizeService;
    @Validation(value = { @ValidationRuleGroup(value = "56b7e4e0-61d8-4bae-821c-b6e199fe9ff9",rules = { })})
    @PostMapping("/api/lcplogics/LCAPGetPermissionByRoleId")
    public ApiReturn<List<LCAPPermission>> lCAPGetPermissionByRoleId(@RequestBody LCAPGetPermissionByRoleIdCustomizeControllerDto body) throws Exception {
        return ApiReturn.of(lCAPGetPermissionByRoleIdCustomizeService.lCAPGetPermissionByRoleId(body.getRoleId()));
    } 


}
