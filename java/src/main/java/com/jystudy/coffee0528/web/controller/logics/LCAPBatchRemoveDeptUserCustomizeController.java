package com.jystudy.coffee0528.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import com.jystudy.coffee0528.web.validation.Validation; 
import com.jystudy.coffee0528.web.controller.logics.dto.LCAPBatchRemoveDeptUserCustomizeControllerDto; 
import com.jystudy.coffee0528.web.ApiReturn; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.PostMapping; 
import org.springframework.web.bind.annotation.RequestBody; 
import com.jystudy.coffee0528.service.logics.LCAPBatchRemoveDeptUserCustomizeService; 
import com.jystudy.coffee0528.web.validation.ValidationRuleGroup; 

@RestController
public class LCAPBatchRemoveDeptUserCustomizeController {

    @Autowired
    private LCAPBatchRemoveDeptUserCustomizeService lCAPBatchRemoveDeptUserCustomizeService;
    @Validation(value = { @ValidationRuleGroup(value = "9b23eaff87b24970b2565fad940e2c14",rules = { }),@ValidationRuleGroup(value = "206f9f19700848e1828f2f81477adb26",rules = { })})
    @PostMapping("/api/lcplogics/LCAPBatchRemoveDeptUser")
    public ApiReturn<String> lCAPBatchRemoveDeptUser(@RequestBody LCAPBatchRemoveDeptUserCustomizeControllerDto body) throws Exception {
        return ApiReturn.of(lCAPBatchRemoveDeptUserCustomizeService.lCAPBatchRemoveDeptUser(body.getUserIds(), body.getDeptId()));
    } 


}
