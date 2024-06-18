package com.jystudy.coffee0528.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import com.jystudy.coffee0528.web.controller.logics.dto.LCAPBatchAddDeptUserCustomizeControllerDto; 
import com.jystudy.coffee0528.web.validation.Validation; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.PostMapping; 
import com.jystudy.coffee0528.service.logics.LCAPBatchAddDeptUserCustomizeService; 
import org.springframework.web.bind.annotation.RequestBody; 
import com.jystudy.coffee0528.web.validation.ValidationRuleGroup; 

@RestController
public class LCAPBatchAddDeptUserCustomizeController {

    @Autowired
    private LCAPBatchAddDeptUserCustomizeService lCAPBatchAddDeptUserCustomizeService;
    @Validation(value = { @ValidationRuleGroup(value = "f4b74d8142314883b71670ba8b657775",rules = { })})
    @PostMapping("/api/lcplogics/LCAPBatchAddDeptUser")
    public void lCAPBatchAddDeptUser(@RequestBody LCAPBatchAddDeptUserCustomizeControllerDto body) throws Exception {
        lCAPBatchAddDeptUserCustomizeService.lCAPBatchAddDeptUser(body.getUserIds(), body.getDeptId());
    } 


}
