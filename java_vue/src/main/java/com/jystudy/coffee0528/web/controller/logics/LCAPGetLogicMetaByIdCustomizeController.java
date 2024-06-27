package com.jystudy.coffee0528.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import com.jystudy.coffee0528.web.validation.Validation; 
import com.jystudy.coffee0528.service.logics.LCAPGetLogicMetaByIdCustomizeService; 
import com.jystudy.coffee0528.web.controller.logics.dto.LCAPGetLogicMetaByIdCustomizeControllerDto; 
import com.jystudy.coffee0528.web.ApiReturn; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.PostMapping; 
import org.springframework.web.bind.annotation.RequestBody; 
import com.jystudy.coffee0528.web.validation.ValidationRuleGroup; 
import com.jystudy.coffee0528.domain.entities.LCAPLogicMeta; 

@RestController
public class LCAPGetLogicMetaByIdCustomizeController {

    @Autowired
    private LCAPGetLogicMetaByIdCustomizeService lCAPGetLogicMetaByIdCustomizeService;
    @Validation(value = { @ValidationRuleGroup(value = "2fddeda154274f3cbc852aaa9e69c895",rules = { })})
    @PostMapping("/api/lcplogics/LCAPGetLogicMetaById")
    public ApiReturn<LCAPLogicMeta> lCAPGetLogicMetaById(@RequestBody LCAPGetLogicMetaByIdCustomizeControllerDto body) throws Exception {
        return ApiReturn.of(lCAPGetLogicMetaByIdCustomizeService.lCAPGetLogicMetaById(body.getId()));
    } 


}
