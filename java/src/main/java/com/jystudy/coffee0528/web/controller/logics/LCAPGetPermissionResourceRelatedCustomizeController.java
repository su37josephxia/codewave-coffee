package com.jystudy.coffee0528.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import java.util.List; 
import com.jystudy.coffee0528.domain.structure.LCAPPermissionAndResourceStructure; 
import com.jystudy.coffee0528.web.validation.Validation; 
import com.jystudy.coffee0528.web.ApiReturn; 
import com.jystudy.coffee0528.web.controller.logics.dto.LCAPGetPermissionResourceRelatedCustomizeControllerDto; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.PostMapping; 
import org.springframework.web.bind.annotation.RequestBody; 
import com.jystudy.coffee0528.service.logics.LCAPGetPermissionResourceRelatedCustomizeService; 
import com.jystudy.coffee0528.web.validation.ValidationRuleGroup; 

@RestController
public class LCAPGetPermissionResourceRelatedCustomizeController {

    @Autowired
    private LCAPGetPermissionResourceRelatedCustomizeService lCAPGetPermissionResourceRelatedCustomizeService;
    @Validation(value = { @ValidationRuleGroup(value = "ce821417dc024e2e9e352263d13132bb",rules = { })})
    @PostMapping("/api/lcplogics/LCAPGetPermissionResourceRelated")
    public ApiReturn<List<LCAPPermissionAndResourceStructure>> lCAPGetPermissionResourceRelated(@RequestBody LCAPGetPermissionResourceRelatedCustomizeControllerDto body) throws Exception {
        return ApiReturn.of(lCAPGetPermissionResourceRelatedCustomizeService.lCAPGetPermissionResourceRelated(body.getPermissinId()));
    } 


}
