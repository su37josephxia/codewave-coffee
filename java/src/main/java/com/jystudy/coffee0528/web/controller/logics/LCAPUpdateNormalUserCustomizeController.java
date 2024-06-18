package com.jystudy.coffee0528.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import com.jystudy.coffee0528.web.controller.logics.dto.LCAPUpdateNormalUserCustomizeControllerDto; 
import com.jystudy.coffee0528.web.validation.Validation; 
import com.jystudy.coffee0528.service.logics.LCAPUpdateNormalUserCustomizeService; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.PostMapping; 
import org.springframework.web.bind.annotation.RequestBody; 
import com.jystudy.coffee0528.web.validation.ValidationRuleGroup; 

@RestController
public class LCAPUpdateNormalUserCustomizeController {

    @Autowired
    private LCAPUpdateNormalUserCustomizeService lCAPUpdateNormalUserCustomizeService;
    @Validation(value = { @ValidationRuleGroup(value = "4d6b7110d9b24ddbaf4f4e0ac174fb61",rules = { }),@ValidationRuleGroup(value = "247522bb843b45ea98069453e90f2efb",rules = { })})
    @PostMapping("/api/lcplogics/LCAPUpdateNormalUser")
    public void lCAPUpdateNormalUser(@RequestBody LCAPUpdateNormalUserCustomizeControllerDto body) throws Exception {
        lCAPUpdateNormalUserCustomizeService.lCAPUpdateNormalUser(body.getUser(), body.getIsChange());
    } 


}
