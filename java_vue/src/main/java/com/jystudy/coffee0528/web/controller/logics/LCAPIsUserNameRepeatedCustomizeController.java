package com.jystudy.coffee0528.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import com.jystudy.coffee0528.web.validation.Validation; 
import com.jystudy.coffee0528.web.controller.logics.dto.LCAPIsUserNameRepeatedCustomizeControllerDto; 
import com.jystudy.coffee0528.service.logics.LCAPIsUserNameRepeatedCustomizeService; 
import com.jystudy.coffee0528.web.ApiReturn; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.PostMapping; 
import org.springframework.web.bind.annotation.RequestBody; 
import com.jystudy.coffee0528.web.validation.ValidationRuleGroup; 

@RestController
public class LCAPIsUserNameRepeatedCustomizeController {

    @Autowired
    private LCAPIsUserNameRepeatedCustomizeService lCAPIsUserNameRepeatedCustomizeService;
    @Validation(value = { @ValidationRuleGroup(value = "90def9479ab940699bc17fcfda7850d8",rules = { })})
    @PostMapping("/api/lcplogics/LCAPIsUserNameRepeated")
    public ApiReturn<Boolean> lCAPIsUserNameRepeated(@RequestBody LCAPIsUserNameRepeatedCustomizeControllerDto body) throws Exception {
        return ApiReturn.of(lCAPIsUserNameRepeatedCustomizeService.lCAPIsUserNameRepeated(body.getUserName()));
    } 


}
