package com.jystudy.coffee0528.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import com.jystudy.coffee0528.service.logics.LCAPGetChildDeptsCustomizeService; 
import com.jystudy.coffee0528.web.validation.Validation; 
import com.jystudy.coffee0528.web.ApiReturn; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.PostMapping; 
import org.springframework.web.bind.annotation.RequestBody; 
import com.jystudy.coffee0528.web.controller.logics.dto.LCAPGetChildDeptsCustomizeControllerDto; 
import com.jystudy.coffee0528.web.validation.ValidationRuleGroup; 

@RestController
public class LCAPGetChildDeptsCustomizeController {

    @Autowired
    private LCAPGetChildDeptsCustomizeService lCAPGetChildDeptsCustomizeService;
    @Validation(value = { @ValidationRuleGroup(value = "d29013bc8a334330ba178327dc9d3f16",rules = { })})
    @PostMapping("/api/lcplogics/LCAPGetChildDepts")
    public ApiReturn<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_0897AFAA83AFC224C278930E426A5B0C> lCAPGetChildDepts(@RequestBody LCAPGetChildDeptsCustomizeControllerDto body) throws Exception {
        return ApiReturn.of(lCAPGetChildDeptsCustomizeService.lCAPGetChildDepts(body.getDeptId()));
    } 


}
