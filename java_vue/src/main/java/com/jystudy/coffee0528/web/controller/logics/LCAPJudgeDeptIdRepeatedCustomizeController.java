package com.jystudy.coffee0528.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import com.jystudy.coffee0528.web.validation.Validation; 
import com.jystudy.coffee0528.web.controller.logics.dto.LCAPJudgeDeptIdRepeatedCustomizeControllerDto; 
import com.jystudy.coffee0528.service.logics.LCAPJudgeDeptIdRepeatedCustomizeService; 
import com.jystudy.coffee0528.web.ApiReturn; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.PostMapping; 
import org.springframework.web.bind.annotation.RequestBody; 
import com.jystudy.coffee0528.web.validation.ValidationRuleGroup; 

@RestController
public class LCAPJudgeDeptIdRepeatedCustomizeController {

    @Autowired
    private LCAPJudgeDeptIdRepeatedCustomizeService lCAPJudgeDeptIdRepeatedCustomizeService;
    @Validation(value = { @ValidationRuleGroup(value = "e54c6080901641ebbf33e508293ecdd3",rules = { })})
    @PostMapping("/api/lcplogics/LCAPJudgeDeptIdRepeated")
    public ApiReturn<Boolean> lCAPJudgeDeptIdRepeated(@RequestBody LCAPJudgeDeptIdRepeatedCustomizeControllerDto body) throws Exception {
        return ApiReturn.of(lCAPJudgeDeptIdRepeatedCustomizeService.lCAPJudgeDeptIdRepeated(body.getDeptId()));
    } 


}
