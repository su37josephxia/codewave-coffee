package com.jystudy.coffee0528.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import com.jystudy.coffee0528.web.validation.Validation; 
import com.jystudy.coffee0528.service.logics.LCAPGetUserByUserIdCustomizeService; 
import com.jystudy.coffee0528.web.controller.logics.dto.LCAPGetUserByUserIdCustomizeControllerDto; 
import com.jystudy.coffee0528.domain.entities.LCAPUser; 
import com.jystudy.coffee0528.web.ApiReturn; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.PostMapping; 
import org.springframework.web.bind.annotation.RequestBody; 
import com.jystudy.coffee0528.web.validation.ValidationRuleGroup; 

@RestController
public class LCAPGetUserByUserIdCustomizeController {

    @Autowired
    private LCAPGetUserByUserIdCustomizeService lCAPGetUserByUserIdCustomizeService;
    @Validation(value = { @ValidationRuleGroup(value = "248340f1-7544-4013-ad1e-e2a14edbccee",rules = { })})
    @PostMapping("/api/lcplogics/LCAPGetUserByUserId")
    public ApiReturn<LCAPUser> lCAPGetUserByUserId(@RequestBody LCAPGetUserByUserIdCustomizeControllerDto body) throws Exception {
        return ApiReturn.of(lCAPGetUserByUserIdCustomizeService.lCAPGetUserByUserId(body.getUserId()));
    } 


}
