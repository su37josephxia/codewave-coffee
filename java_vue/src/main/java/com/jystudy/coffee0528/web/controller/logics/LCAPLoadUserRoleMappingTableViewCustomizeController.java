package com.jystudy.coffee0528.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import com.jystudy.coffee0528.web.validation.Validation; 
import com.jystudy.coffee0528.service.logics.LCAPLoadUserRoleMappingTableViewCustomizeService; 
import com.jystudy.coffee0528.web.ApiReturn; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.PostMapping; 
import org.springframework.web.bind.annotation.RequestBody; 
import com.jystudy.coffee0528.web.validation.ValidationRuleGroup; 
import com.jystudy.coffee0528.web.controller.logics.dto.LCAPLoadUserRoleMappingTableViewCustomizeControllerDto; 

@RestController
public class LCAPLoadUserRoleMappingTableViewCustomizeController {

    @Autowired
    private LCAPLoadUserRoleMappingTableViewCustomizeService lCAPLoadUserRoleMappingTableViewCustomizeService;
    @Validation(value = { @ValidationRuleGroup(value = "360846ae-d0a9-4b75-9e09-2fb8007d64a2",rules = { })})
    @PostMapping("/api/lcplogics/LCAPLoadUserRoleMappingTableView")
    public ApiReturn<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_A43B95DDE943F37E89AA74CCF8732C90> lCAPLoadUserRoleMappingTableView(@RequestBody LCAPLoadUserRoleMappingTableViewCustomizeControllerDto body) throws Exception {
        return ApiReturn.of(lCAPLoadUserRoleMappingTableViewCustomizeService.lCAPLoadUserRoleMappingTableView(body.getPage(), body.getSize(), body.getSort(), body.getOrder(), body.getFilter()));
    } 


}
