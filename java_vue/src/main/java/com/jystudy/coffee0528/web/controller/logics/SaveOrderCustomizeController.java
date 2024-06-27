package com.jystudy.coffee0528.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import com.jystudy.coffee0528.service.logics.SaveOrderCustomizeService; 
import com.jystudy.coffee0528.web.validation.Validation; 
import com.jystudy.coffee0528.web.controller.logics.dto.SaveOrderCustomizeControllerDto; 
import com.jystudy.coffee0528.web.ApiReturn; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.PostMapping; 
import org.springframework.web.bind.annotation.RequestBody; 
import com.jystudy.coffee0528.web.validation.ValidationRuleGroup; 

@RestController
public class SaveOrderCustomizeController {

    @Autowired
    private SaveOrderCustomizeService saveOrderCustomizeService;
    @Validation(value = { @ValidationRuleGroup(value = "52db09a1a9094ea187e3fc1145a77dd5",rules = { })})
    @PostMapping("/api/lcplogics/saveOrder")
    public ApiReturn<Boolean> saveOrder(@RequestBody SaveOrderCustomizeControllerDto body) throws Exception {
        return ApiReturn.of(saveOrderCustomizeService.saveOrder(body.getOrder()));
    } 


}
