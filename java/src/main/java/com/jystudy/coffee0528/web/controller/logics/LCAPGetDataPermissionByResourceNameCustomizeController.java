package com.jystudy.coffee0528.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import com.jystudy.coffee0528.domain.entities.LCAPDataPermission; 
import com.jystudy.coffee0528.web.validation.Validation; 
import com.jystudy.coffee0528.web.ApiReturn; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.PostMapping; 
import com.jystudy.coffee0528.web.controller.logics.dto.LCAPGetDataPermissionByResourceNameCustomizeControllerDto; 
import org.springframework.web.bind.annotation.RequestBody; 
import com.jystudy.coffee0528.service.logics.LCAPGetDataPermissionByResourceNameCustomizeService; 
import com.jystudy.coffee0528.web.validation.ValidationRuleGroup; 

@RestController
public class LCAPGetDataPermissionByResourceNameCustomizeController {

    @Autowired
    private LCAPGetDataPermissionByResourceNameCustomizeService lCAPGetDataPermissionByResourceNameCustomizeService;
    @Validation(value = { @ValidationRuleGroup(value = "bab563bdaf5043c8be1582b03bac899d",rules = { }),@ValidationRuleGroup(value = "a8190be6a8fe421eb39983718555a89b",rules = { })})
    @PostMapping("/api/lcplogics/LCAPGetDataPermissionByResourceName")
    public ApiReturn<LCAPDataPermission> lCAPGetDataPermissionByResourceName(@RequestBody LCAPGetDataPermissionByResourceNameCustomizeControllerDto body) throws Exception {
        return ApiReturn.of(lCAPGetDataPermissionByResourceNameCustomizeService.lCAPGetDataPermissionByResourceName(body.getResourceName(), body.getResourceType(), body.getRoleId()));
    } 


}
