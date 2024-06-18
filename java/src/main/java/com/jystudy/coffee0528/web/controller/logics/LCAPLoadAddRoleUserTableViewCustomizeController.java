package com.jystudy.coffee0528.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import com.jystudy.coffee0528.web.validation.Validation; 
import com.jystudy.coffee0528.web.ApiReturn; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.PostMapping; 
import org.springframework.web.bind.annotation.RequestBody; 
import com.jystudy.coffee0528.web.controller.logics.dto.LCAPLoadAddRoleUserTableViewCustomizeControllerDto; 
import com.jystudy.coffee0528.service.logics.LCAPLoadAddRoleUserTableViewCustomizeService; 
import com.jystudy.coffee0528.web.validation.ValidationRuleGroup; 

@RestController
public class LCAPLoadAddRoleUserTableViewCustomizeController {

    @Autowired
    private LCAPLoadAddRoleUserTableViewCustomizeService lCAPLoadAddRoleUserTableViewCustomizeService;
    @Validation(value = { @ValidationRuleGroup(value = "261dcbdc-da3e-451d-86ef-193ee5230b4f",rules = { })})
    @PostMapping("/api/lcplogics/LCAPLoadAddRoleUserTableView")
    public ApiReturn<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_90BB04F104917B26166C550B4A1B0632> lCAPLoadAddRoleUserTableView(@RequestBody LCAPLoadAddRoleUserTableViewCustomizeControllerDto body) throws Exception {
        return ApiReturn.of(lCAPLoadAddRoleUserTableViewCustomizeService.lCAPLoadAddRoleUserTableView(body.getUserIdList()));
    } 


}
