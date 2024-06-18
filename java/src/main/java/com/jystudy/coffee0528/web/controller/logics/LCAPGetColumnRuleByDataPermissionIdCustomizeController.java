package com.jystudy.coffee0528.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import com.jystudy.coffee0528.service.logics.LCAPGetColumnRuleByDataPermissionIdCustomizeService; 
import java.util.List; 
import com.jystudy.coffee0528.web.validation.Validation; 
import com.jystudy.coffee0528.web.controller.logics.dto.LCAPGetColumnRuleByDataPermissionIdCustomizeControllerDto; 
import com.jystudy.coffee0528.web.ApiReturn; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.PostMapping; 
import org.springframework.web.bind.annotation.RequestBody; 
import com.jystudy.coffee0528.web.validation.ValidationRuleGroup; 
import com.jystudy.coffee0528.domain.entities.LCAPColumnRule; 

@RestController
public class LCAPGetColumnRuleByDataPermissionIdCustomizeController {

    @Autowired
    private LCAPGetColumnRuleByDataPermissionIdCustomizeService lCAPGetColumnRuleByDataPermissionIdCustomizeService;
    @Validation(value = { @ValidationRuleGroup(value = "0f6d6d3318b543389042c9b784626995",rules = { }),@ValidationRuleGroup(value = "0ba01782705e452485dc609ae961064f",rules = { })})
    @PostMapping("/api/lcplogics/LCAPGetColumnRuleByDataPermissionId")
    public ApiReturn<List<LCAPColumnRule>> lCAPGetColumnRuleByDataPermissionId(@RequestBody LCAPGetColumnRuleByDataPermissionIdCustomizeControllerDto body) throws Exception {
        return ApiReturn.of(lCAPGetColumnRuleByDataPermissionIdCustomizeService.lCAPGetColumnRuleByDataPermissionId(body.getDataPermissionId()));
    } 


}
