package com.jystudy.coffee0528.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import com.jystudy.coffee0528.web.validation.Validation; 
import com.jystudy.coffee0528.service.logics.LCAPCanceDeptLeaderCustomizeService; 
import com.jystudy.coffee0528.web.controller.logics.dto.LCAPCanceDeptLeaderCustomizeControllerDto; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.PostMapping; 
import org.springframework.web.bind.annotation.RequestBody; 
import com.jystudy.coffee0528.web.validation.ValidationRuleGroup; 

@RestController
public class LCAPCanceDeptLeaderCustomizeController {

    @Autowired
    private LCAPCanceDeptLeaderCustomizeService lCAPCanceDeptLeaderCustomizeService;
    @Validation(value = { @ValidationRuleGroup(value = "e931731d1fca4d769613caddb8c20cd6",rules = { })})
    @PostMapping("/api/lcplogics/LCAPCanceDeptLeader")
    public void lCAPCanceDeptLeader(@RequestBody LCAPCanceDeptLeaderCustomizeControllerDto body) throws Exception {
        lCAPCanceDeptLeaderCustomizeService.lCAPCanceDeptLeader(body.getDeptId(), body.getUserId());
    } 


}
