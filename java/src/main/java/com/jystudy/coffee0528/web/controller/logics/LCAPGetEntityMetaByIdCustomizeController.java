package com.jystudy.coffee0528.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import com.jystudy.coffee0528.domain.entities.LCAPEntityMeta; 
import com.jystudy.coffee0528.web.validation.Validation; 
import com.jystudy.coffee0528.web.controller.logics.dto.LCAPGetEntityMetaByIdCustomizeControllerDto; 
import com.jystudy.coffee0528.service.logics.LCAPGetEntityMetaByIdCustomizeService; 
import com.jystudy.coffee0528.web.ApiReturn; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.PostMapping; 
import org.springframework.web.bind.annotation.RequestBody; 
import com.jystudy.coffee0528.web.validation.ValidationRuleGroup; 

@RestController
public class LCAPGetEntityMetaByIdCustomizeController {

    @Autowired
    private LCAPGetEntityMetaByIdCustomizeService lCAPGetEntityMetaByIdCustomizeService;
    @Validation(value = { @ValidationRuleGroup(value = "6e3dc19e4622478dba96e9aaad1ca9c2",rules = { })})
    @PostMapping("/api/lcplogics/LCAPGetEntityMetaById")
    public ApiReturn<LCAPEntityMeta> lCAPGetEntityMetaById(@RequestBody LCAPGetEntityMetaByIdCustomizeControllerDto body) throws Exception {
        return ApiReturn.of(lCAPGetEntityMetaByIdCustomizeService.lCAPGetEntityMetaById(body.getId()));
    } 


}
