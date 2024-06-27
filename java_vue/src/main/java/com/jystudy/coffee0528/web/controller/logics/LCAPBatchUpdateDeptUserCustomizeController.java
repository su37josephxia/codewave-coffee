package com.jystudy.coffee0528.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import com.jystudy.coffee0528.web.validation.Validation; 
import com.jystudy.coffee0528.service.logics.LCAPBatchUpdateDeptUserCustomizeService; 
import com.jystudy.coffee0528.web.ApiReturn; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.PostMapping; 
import org.springframework.web.bind.annotation.RequestBody; 
import com.jystudy.coffee0528.web.controller.logics.dto.LCAPBatchUpdateDeptUserCustomizeControllerDto; 
import com.jystudy.coffee0528.web.validation.ValidationRuleGroup; 

@RestController
public class LCAPBatchUpdateDeptUserCustomizeController {

    @Autowired
    private LCAPBatchUpdateDeptUserCustomizeService lCAPBatchUpdateDeptUserCustomizeService;
    @Validation(value = { @ValidationRuleGroup(value = "ca1bb9bc727548dcb114f4dc40153897",rules = { }),@ValidationRuleGroup(value = "1e0f97405b1047a2b2a3e16ef5e6bd72",rules = { }),@ValidationRuleGroup(value = "fed1e78315df4b218268d3a9eddc612a",rules = { })})
    @PostMapping("/api/lcplogics/LCAPBatchUpdateDeptUser")
    public ApiReturn<String> lCAPBatchUpdateDeptUser(@RequestBody LCAPBatchUpdateDeptUserCustomizeControllerDto body) throws Exception {
        return ApiReturn.of(lCAPBatchUpdateDeptUserCustomizeService.lCAPBatchUpdateDeptUser(body.getUserIds(), body.getDeptId(), body.getOldDeptId()));
    } 


}
