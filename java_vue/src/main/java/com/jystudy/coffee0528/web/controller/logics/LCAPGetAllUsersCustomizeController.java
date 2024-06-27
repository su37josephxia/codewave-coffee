package com.jystudy.coffee0528.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import com.jystudy.coffee0528.service.logics.LCAPGetAllUsersCustomizeService; 
import com.jystudy.coffee0528.web.validation.Validation; 
import com.jystudy.coffee0528.web.ApiReturn; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.PostMapping; 
import com.jystudy.coffee0528.web.validation.ValidationRuleGroup; 

@RestController
public class LCAPGetAllUsersCustomizeController {

    @Autowired
    private LCAPGetAllUsersCustomizeService lCAPGetAllUsersCustomizeService;
    @Validation(value = { @ValidationRuleGroup(value = "4cf74e40cae3410db8d2bcc2b95d19f1",rules = { })})
    @PostMapping("/api/lcplogics/LCAPGetAllUsers")
    public ApiReturn<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_90BB04F104917B26166C550B4A1B0632> lCAPGetAllUsers() throws Exception {
        return ApiReturn.of(lCAPGetAllUsersCustomizeService.lCAPGetAllUsers());
    } 


}
