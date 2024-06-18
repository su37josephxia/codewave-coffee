package com.jystudy.coffee0528.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import com.jystudy.coffee0528.web.validation.Validation; 
import com.jystudy.coffee0528.web.controller.logics.dto.LCAPLoadAddRolePermissionTableViewCustomizeControllerDto; 
import com.jystudy.coffee0528.web.ApiReturn; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.PostMapping; 
import org.springframework.web.bind.annotation.RequestBody; 
import com.jystudy.coffee0528.web.validation.ValidationRuleGroup; 
import com.jystudy.coffee0528.service.logics.LCAPLoadAddRolePermissionTableViewCustomizeService; 

@RestController
public class LCAPLoadAddRolePermissionTableViewCustomizeController {

    @Autowired
    private LCAPLoadAddRolePermissionTableViewCustomizeService lCAPLoadAddRolePermissionTableViewCustomizeService;
    @Validation(value = { @ValidationRuleGroup(value = "d55bb0b2-43b2-43df-bb4e-67a74318539f",rules = { })})
    @PostMapping("/api/lcplogics/LCAPLoadAddRolePermissionTableView")
    public ApiReturn<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_D5C9C5DD94C4E7386BEED9E75D0F06FA> lCAPLoadAddRolePermissionTableView(@RequestBody LCAPLoadAddRolePermissionTableViewCustomizeControllerDto body) throws Exception {
        return ApiReturn.of(lCAPLoadAddRolePermissionTableViewCustomizeService.lCAPLoadAddRolePermissionTableView(body.getPage(), body.getSize(), body.getSort(), body.getOrder(), body.getPermissionIdList()));
    } 


}
