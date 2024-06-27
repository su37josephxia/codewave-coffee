package com.jystudy.coffee0528.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import com.jystudy.coffee0528.service.logics.LCAPGetLAllACPPermissionCustomizeService; 
import com.jystudy.coffee0528.web.validation.Validation; 
import com.jystudy.coffee0528.web.ApiReturn; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.PostMapping; 
import com.jystudy.coffee0528.web.validation.ValidationRuleGroup; 

@RestController
public class LCAPGetLAllACPPermissionCustomizeController {

    @Autowired
    private LCAPGetLAllACPPermissionCustomizeService lCAPGetLAllACPPermissionCustomizeService;
    @Validation(value = { @ValidationRuleGroup(value = "da4e026a-8feb-4066-9aea-2ccc355b7084",rules = { })})
    @PostMapping("/api/lcplogics/LCAPGetLAllACPPermission")
    public ApiReturn<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_D5C9C5DD94C4E7386BEED9E75D0F06FA> lCAPGetLAllACPPermission() throws Exception {
        return ApiReturn.of(lCAPGetLAllACPPermissionCustomizeService.lCAPGetLAllACPPermission());
    } 


}
