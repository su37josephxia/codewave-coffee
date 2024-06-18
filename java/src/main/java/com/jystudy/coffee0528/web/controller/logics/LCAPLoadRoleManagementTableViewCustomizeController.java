package com.jystudy.coffee0528.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import com.jystudy.coffee0528.web.validation.Validation; 
import com.jystudy.coffee0528.web.controller.logics.dto.LCAPLoadRoleManagementTableViewCustomizeControllerDto; 
import com.jystudy.coffee0528.service.logics.LCAPLoadRoleManagementTableViewCustomizeService; 
import com.jystudy.coffee0528.web.ApiReturn; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.PostMapping; 
import org.springframework.web.bind.annotation.RequestBody; 
import com.jystudy.coffee0528.web.validation.ValidationRuleGroup; 

@RestController
public class LCAPLoadRoleManagementTableViewCustomizeController {

    @Autowired
    private LCAPLoadRoleManagementTableViewCustomizeService lCAPLoadRoleManagementTableViewCustomizeService;
    @Validation(value = { @ValidationRuleGroup(value = "6f98ac4067c74f7eac9071f08b8f3065",rules = { }),@ValidationRuleGroup(value = "f4e4bddf-ef40-4a4a-9944-bf20ce8ce269",rules = { }),@ValidationRuleGroup(value = "33d2c00aee1c4e99af44363017772457",rules = { })})
    @PostMapping("/api/lcplogics/LCAPLoadRoleManagementTableView")
    public ApiReturn<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_CAC5152BAE2C91DD609E3DFEE343ACC6> lCAPLoadRoleManagementTableView(@RequestBody LCAPLoadRoleManagementTableViewCustomizeControllerDto body) throws Exception {
        return ApiReturn.of(lCAPLoadRoleManagementTableViewCustomizeService.lCAPLoadRoleManagementTableView(body.getPage(), body.getSize(), body.getSort(), body.getOrder(), body.getFilter()));
    } 


}
