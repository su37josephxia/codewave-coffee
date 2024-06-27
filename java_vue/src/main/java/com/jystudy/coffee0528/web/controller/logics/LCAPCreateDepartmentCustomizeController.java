package com.jystudy.coffee0528.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import com.jystudy.coffee0528.web.validation.Validation; 
import com.jystudy.coffee0528.service.logics.LCAPCreateDepartmentCustomizeService; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.PostMapping; 
import org.springframework.web.bind.annotation.RequestBody; 
import com.jystudy.coffee0528.web.validation.ValidationRuleGroup; 
import com.jystudy.coffee0528.web.controller.logics.dto.LCAPCreateDepartmentCustomizeControllerDto; 

@RestController
public class LCAPCreateDepartmentCustomizeController {

    @Autowired
    private LCAPCreateDepartmentCustomizeService lCAPCreateDepartmentCustomizeService;
    @Validation(value = { @ValidationRuleGroup(value = "2236bed3f519402ab283454a16cd9c48",rules = { })})
    @PostMapping("/api/lcplogics/LCAPCreateDepartment")
    public void lCAPCreateDepartment(@RequestBody LCAPCreateDepartmentCustomizeControllerDto body) throws Exception {
        lCAPCreateDepartmentCustomizeService.lCAPCreateDepartment(body.getDepartment());
    } 


}
