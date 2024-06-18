package com.jystudy.coffee0528.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import java.util.List; 
import com.jystudy.coffee0528.web.validation.Validation; 
import com.jystudy.coffee0528.web.ApiReturn; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.PostMapping; 
import com.jystudy.coffee0528.domain.entities.LCAPRowRuleItem; 
import com.jystudy.coffee0528.service.logics.LCAPGetRowRuleByDataPermissionIdCustomizeService; 
import org.springframework.web.bind.annotation.RequestBody; 
import com.jystudy.coffee0528.web.controller.logics.dto.LCAPGetRowRuleByDataPermissionIdCustomizeControllerDto; 
import com.jystudy.coffee0528.web.validation.ValidationRuleGroup; 

@RestController
public class LCAPGetRowRuleByDataPermissionIdCustomizeController {

    @Autowired
    private LCAPGetRowRuleByDataPermissionIdCustomizeService lCAPGetRowRuleByDataPermissionIdCustomizeService;
    @Validation(value = { @ValidationRuleGroup(value = "3ecf397f094b49fa8d2764cefbac6504",rules = { })})
    @PostMapping("/api/lcplogics/LCAPGetRowRuleByDataPermissionId")
    public ApiReturn<List<LCAPRowRuleItem>> lCAPGetRowRuleByDataPermissionId(@RequestBody LCAPGetRowRuleByDataPermissionIdCustomizeControllerDto body) throws Exception {
        return ApiReturn.of(lCAPGetRowRuleByDataPermissionIdCustomizeService.lCAPGetRowRuleByDataPermissionId(body.getDataPermissionId()));
    } 


}
