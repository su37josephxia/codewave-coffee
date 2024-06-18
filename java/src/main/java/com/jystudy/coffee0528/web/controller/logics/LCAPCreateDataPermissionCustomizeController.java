package com.jystudy.coffee0528.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import com.jystudy.coffee0528.service.logics.LCAPCreateDataPermissionCustomizeService; 
import com.jystudy.coffee0528.domain.entities.LCAPDataPermission; 
import com.jystudy.coffee0528.web.validation.Validation; 
import com.jystudy.coffee0528.web.controller.logics.dto.LCAPCreateDataPermissionCustomizeControllerDto; 
import com.jystudy.coffee0528.web.ApiReturn; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.PostMapping; 
import org.springframework.web.bind.annotation.RequestBody; 
import com.jystudy.coffee0528.web.validation.ValidationRuleGroup; 

@RestController
public class LCAPCreateDataPermissionCustomizeController {

    @Autowired
    private LCAPCreateDataPermissionCustomizeService lCAPCreateDataPermissionCustomizeService;
    @Validation(value = { @ValidationRuleGroup(value = "3d90cd1060094b378e57646d9aa8d5b9",rules = { })})
    @PostMapping("/api/lcplogics/LCAPCreateDataPermission")
    public ApiReturn<LCAPDataPermission> lCAPCreateDataPermission(@RequestBody LCAPCreateDataPermissionCustomizeControllerDto body) throws Exception {
        return ApiReturn.of(lCAPCreateDataPermissionCustomizeService.lCAPCreateDataPermission(body.getDataPermission()));
    } 


}
