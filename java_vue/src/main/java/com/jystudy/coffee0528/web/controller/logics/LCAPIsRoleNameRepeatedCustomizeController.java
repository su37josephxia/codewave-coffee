package com.jystudy.coffee0528.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import com.jystudy.coffee0528.web.validation.Validation; 
import com.jystudy.coffee0528.web.controller.logics.dto.LCAPIsRoleNameRepeatedCustomizeControllerDto; 
import com.jystudy.coffee0528.service.logics.LCAPIsRoleNameRepeatedCustomizeService; 
import com.jystudy.coffee0528.web.ApiReturn; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.PostMapping; 
import org.springframework.web.bind.annotation.RequestBody; 
import com.jystudy.coffee0528.web.validation.ValidationRuleGroup; 

@RestController
public class LCAPIsRoleNameRepeatedCustomizeController {

    @Autowired
    private LCAPIsRoleNameRepeatedCustomizeService lCAPIsRoleNameRepeatedCustomizeService;
    @Validation(value = { @ValidationRuleGroup(value = "4a5863ad-b644-4a63-9e8c-506978913a1f",rules = { })})
    @PostMapping("/api/lcplogics/LCAPIsRoleNameRepeated")
    public ApiReturn<Boolean> lCAPIsRoleNameRepeated(@RequestBody LCAPIsRoleNameRepeatedCustomizeControllerDto body) throws Exception {
        return ApiReturn.of(lCAPIsRoleNameRepeatedCustomizeService.lCAPIsRoleNameRepeated(body.getRoleName()));
    } 


}
