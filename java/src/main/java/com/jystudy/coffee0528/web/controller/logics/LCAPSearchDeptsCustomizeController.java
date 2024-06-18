package com.jystudy.coffee0528.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import com.jystudy.coffee0528.web.controller.logics.dto.LCAPSearchDeptsCustomizeControllerDto; 
import com.jystudy.coffee0528.service.logics.LCAPSearchDeptsCustomizeService; 
import com.jystudy.coffee0528.web.validation.Validation; 
import com.jystudy.coffee0528.web.ApiReturn; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.PostMapping; 
import org.springframework.web.bind.annotation.RequestBody; 
import com.jystudy.coffee0528.web.validation.ValidationRuleGroup; 

@RestController
public class LCAPSearchDeptsCustomizeController {

    @Autowired
    private LCAPSearchDeptsCustomizeService lCAPSearchDeptsCustomizeService;
    @Validation(value = { @ValidationRuleGroup(value = "11b57f989a0c433d9961b26c24cd1141",rules = { })})
    @PostMapping("/api/lcplogics/LCAPSearchDepts")
    public ApiReturn<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_0897AFAA83AFC224C278930E426A5B0C> lCAPSearchDepts(@RequestBody LCAPSearchDeptsCustomizeControllerDto body) throws Exception {
        return ApiReturn.of(lCAPSearchDeptsCustomizeService.lCAPSearchDepts(body.getName()));
    } 


}
