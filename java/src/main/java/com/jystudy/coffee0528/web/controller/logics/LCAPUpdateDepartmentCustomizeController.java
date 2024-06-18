package com.jystudy.coffee0528.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import com.jystudy.coffee0528.service.logics.LCAPUpdateDepartmentCustomizeService; 
import com.jystudy.coffee0528.web.controller.logics.dto.LCAPUpdateDepartmentCustomizeControllerDto; 
import com.jystudy.coffee0528.web.validation.Validation; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.PostMapping; 
import org.springframework.web.bind.annotation.RequestBody; 
import com.jystudy.coffee0528.web.validation.ValidationRuleGroup; 

@RestController
public class LCAPUpdateDepartmentCustomizeController {

    @Autowired
    private LCAPUpdateDepartmentCustomizeService lCAPUpdateDepartmentCustomizeService;
    @Validation(value = { @ValidationRuleGroup(value = "d79b590d66584889a4b8384b68c88f45",rules = { })})
    @PostMapping("/api/lcplogics/LCAPUpdateDepartment")
    public void lCAPUpdateDepartment(@RequestBody LCAPUpdateDepartmentCustomizeControllerDto body) throws Exception {
        lCAPUpdateDepartmentCustomizeService.lCAPUpdateDepartment(body.getDepartment(), body.getOldDeptId(), body.getOldParentDeptId());
    } 


}
