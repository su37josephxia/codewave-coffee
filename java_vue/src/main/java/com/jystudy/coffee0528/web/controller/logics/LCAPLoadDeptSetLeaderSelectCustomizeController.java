package com.jystudy.coffee0528.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import com.jystudy.coffee0528.web.controller.logics.dto.LCAPLoadDeptSetLeaderSelectCustomizeControllerDto; 
import com.jystudy.coffee0528.service.logics.LCAPLoadDeptSetLeaderSelectCustomizeService; 
import com.jystudy.coffee0528.web.validation.Validation; 
import com.jystudy.coffee0528.web.ApiReturn; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.PostMapping; 
import org.springframework.web.bind.annotation.RequestBody; 
import com.jystudy.coffee0528.web.validation.ValidationRuleGroup; 

@RestController
public class LCAPLoadDeptSetLeaderSelectCustomizeController {

    @Autowired
    private LCAPLoadDeptSetLeaderSelectCustomizeService lCAPLoadDeptSetLeaderSelectCustomizeService;
    @Validation(value = { @ValidationRuleGroup(value = "b4bcf6752f594ebd9cc29864ec3ab508",rules = { })})
    @PostMapping("/api/lcplogics/LCAPLoadDeptSetLeaderSelect")
    public ApiReturn<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_C477D5E68C0A882A877BCEEA4EA2DE1E> lCAPLoadDeptSetLeaderSelect(@RequestBody LCAPLoadDeptSetLeaderSelectCustomizeControllerDto body) throws Exception {
        return ApiReturn.of(lCAPLoadDeptSetLeaderSelectCustomizeService.lCAPLoadDeptSetLeaderSelect(body.getPage(), body.getSize(), body.getDeptId(), body.getFilter()));
    } 


}
