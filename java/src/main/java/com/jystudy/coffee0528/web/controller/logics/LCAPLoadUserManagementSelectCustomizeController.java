package com.jystudy.coffee0528.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import com.jystudy.coffee0528.service.logics.LCAPLoadUserManagementSelectCustomizeService; 
import com.jystudy.coffee0528.web.validation.Validation; 
import com.jystudy.coffee0528.web.ApiReturn; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.PostMapping; 
import com.jystudy.coffee0528.web.controller.logics.dto.LCAPLoadUserManagementSelectCustomizeControllerDto; 
import org.springframework.web.bind.annotation.RequestBody; 
import com.jystudy.coffee0528.web.validation.ValidationRuleGroup; 

@RestController
public class LCAPLoadUserManagementSelectCustomizeController {

    @Autowired
    private LCAPLoadUserManagementSelectCustomizeService lCAPLoadUserManagementSelectCustomizeService;
    @Validation(value = { @ValidationRuleGroup(value = "e8c24ecf09cc4db6996639dbe9fb7dfe",rules = { })})
    @PostMapping("/api/lcplogics/LCAPLoadUserManagementSelect")
    public ApiReturn<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_90BB04F104917B26166C550B4A1B0632> lCAPLoadUserManagementSelect(@RequestBody LCAPLoadUserManagementSelectCustomizeControllerDto body) throws Exception {
        return ApiReturn.of(lCAPLoadUserManagementSelectCustomizeService.lCAPLoadUserManagementSelect(body.getPage(), body.getSize(), body.getUserId(), body.getName()));
    } 


}
