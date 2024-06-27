package com.jystudy.coffee0528.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import com.jystudy.coffee0528.web.validation.Validation; 
import com.jystudy.coffee0528.service.logics.LCAPLoadDeptAddUserSelectCustomizeService; 
import com.jystudy.coffee0528.web.controller.logics.dto.LCAPLoadDeptAddUserSelectCustomizeControllerDto; 
import com.jystudy.coffee0528.web.ApiReturn; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.PostMapping; 
import org.springframework.web.bind.annotation.RequestBody; 
import com.jystudy.coffee0528.web.validation.ValidationRuleGroup; 

@RestController
public class LCAPLoadDeptAddUserSelectCustomizeController {

    @Autowired
    private LCAPLoadDeptAddUserSelectCustomizeService lCAPLoadDeptAddUserSelectCustomizeService;
    @Validation(value = { @ValidationRuleGroup(value = "bd4737d154a24ec5afbb3c55efcf030d",rules = { })})
    @PostMapping("/api/lcplogics/LCAPLoadDeptAddUserSelect")
    public ApiReturn<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_90BB04F104917B26166C550B4A1B0632> lCAPLoadDeptAddUserSelect(@RequestBody LCAPLoadDeptAddUserSelectCustomizeControllerDto body) throws Exception {
        return ApiReturn.of(lCAPLoadDeptAddUserSelectCustomizeService.lCAPLoadDeptAddUserSelect(body.getPage(), body.getSize(), body.getDeptId(), body.getSearch()));
    } 


}
