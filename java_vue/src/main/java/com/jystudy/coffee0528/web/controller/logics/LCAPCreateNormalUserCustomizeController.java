package com.jystudy.coffee0528.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import com.jystudy.coffee0528.web.validation.Validation; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.PostMapping; 
import org.springframework.web.bind.annotation.RequestBody; 
import com.jystudy.coffee0528.service.logics.LCAPCreateNormalUserCustomizeService; 
import com.jystudy.coffee0528.web.validation.ValidationRuleGroup; 
import com.jystudy.coffee0528.web.controller.logics.dto.LCAPCreateNormalUserCustomizeControllerDto; 

@RestController
public class LCAPCreateNormalUserCustomizeController {

    @Autowired
    private LCAPCreateNormalUserCustomizeService lCAPCreateNormalUserCustomizeService;
    @Validation(value = { @ValidationRuleGroup(value = "71c8ae84eaa7481aa0cf588d76d16fdc",rules = { })})
    @PostMapping("/api/lcplogics/LCAPCreateNormalUser")
    public void lCAPCreateNormalUser(@RequestBody LCAPCreateNormalUserCustomizeControllerDto body) throws Exception {
        lCAPCreateNormalUserCustomizeService.lCAPCreateNormalUser(body.getUser());
    } 


}
