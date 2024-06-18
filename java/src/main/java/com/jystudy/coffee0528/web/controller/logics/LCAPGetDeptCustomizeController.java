package com.jystudy.coffee0528.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import com.jystudy.coffee0528.web.controller.logics.dto.LCAPGetDeptCustomizeControllerDto; 
import com.jystudy.coffee0528.web.validation.Validation; 
import com.jystudy.coffee0528.domain.entities.LCAPDepartment; 
import com.jystudy.coffee0528.web.ApiReturn; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.PostMapping; 
import org.springframework.web.bind.annotation.RequestBody; 
import com.jystudy.coffee0528.web.validation.ValidationRuleGroup; 
import com.jystudy.coffee0528.service.logics.LCAPGetDeptCustomizeService; 

@RestController
public class LCAPGetDeptCustomizeController {

    @Autowired
    private LCAPGetDeptCustomizeService lCAPGetDeptCustomizeService;
    @Validation(value = { @ValidationRuleGroup(value = "68eae7addc0b4061a92f64bd2a17e613",rules = { }),@ValidationRuleGroup(value = "8a10a4d3f43f4ef1bd909186c18ace22",rules = { }),@ValidationRuleGroup(value = "b0582fe7ee6246dc890c02615cf73a5d",rules = { })})
    @PostMapping("/api/lcplogics/LCAPGetDept")
    public ApiReturn<LCAPDepartment> lCAPGetDept(@RequestBody LCAPGetDeptCustomizeControllerDto body) throws Exception {
        return ApiReturn.of(lCAPGetDeptCustomizeService.lCAPGetDept(body.getDeptId()));
    } 


}
