package com.jystudy.coffee0528.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import com.jystudy.coffee0528.web.controller.logics.dto.LCAPGetPerResMappingByPermissionIdCustomizeControllerDto; 
import java.util.List; 
import com.jystudy.coffee0528.web.validation.Validation; 
import com.jystudy.coffee0528.web.ApiReturn; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.PostMapping; 
import org.springframework.web.bind.annotation.RequestBody; 
import com.jystudy.coffee0528.service.logics.LCAPGetPerResMappingByPermissionIdCustomizeService; 
import com.jystudy.coffee0528.web.validation.ValidationRuleGroup; 

@RestController
public class LCAPGetPerResMappingByPermissionIdCustomizeController {

    @Autowired
    private LCAPGetPerResMappingByPermissionIdCustomizeService lCAPGetPerResMappingByPermissionIdCustomizeService;
    @Validation(value = { @ValidationRuleGroup(value = "0a0cf1afd2954833a799173ac8d1674f",rules = { })})
    @PostMapping("/api/lcplogics/LCAPGetPerResMappingByPermissionId")
    public ApiReturn<List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_D99966CE0A06FAAEEADD3A36C43F7DFF>> lCAPGetPerResMappingByPermissionId(@RequestBody LCAPGetPerResMappingByPermissionIdCustomizeControllerDto body) throws Exception {
        return ApiReturn.of(lCAPGetPerResMappingByPermissionIdCustomizeService.lCAPGetPerResMappingByPermissionId(body.getPermissionId()));
    } 


}
