package com.jystudy.coffee0528.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import com.jystudy.coffee0528.web.controller.logics.dto.LCAPSetDeptLeaderCustomizeControllerDto; 
import com.jystudy.coffee0528.web.validation.Validation; 
import com.jystudy.coffee0528.service.logics.LCAPSetDeptLeaderCustomizeService; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.PostMapping; 
import org.springframework.web.bind.annotation.RequestBody; 
import com.jystudy.coffee0528.web.validation.ValidationRuleGroup; 

@RestController
public class LCAPSetDeptLeaderCustomizeController {

    @Autowired
    private LCAPSetDeptLeaderCustomizeService lCAPSetDeptLeaderCustomizeService;
    @Validation(value = { @ValidationRuleGroup(value = "ba6e8520be7f4affb7c0e7281cbd2abe",rules = { }),@ValidationRuleGroup(value = "a24f1f27de8346eba954087fba200853",rules = { })})
    @PostMapping("/api/lcplogics/LCAPSetDeptLeader")
    public void lCAPSetDeptLeader(@RequestBody LCAPSetDeptLeaderCustomizeControllerDto body) throws Exception {
        lCAPSetDeptLeaderCustomizeService.lCAPSetDeptLeader(body.getDeptId(), body.getUserId());
    } 


}
