package com.jystudy.coffee0528.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import java.util.List; 
import com.jystudy.coffee0528.web.validation.Validation; 
import com.jystudy.coffee0528.web.ApiReturn; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.PostMapping; 
import com.jystudy.coffee0528.service.logics.LoadMyOrderCustomizeService; 
import com.jystudy.coffee0528.web.validation.ValidationRuleGroup; 

@RestController
public class LoadMyOrderCustomizeController {

    @Autowired
    private LoadMyOrderCustomizeService loadMyOrderCustomizeService;
    @Validation(value = { @ValidationRuleGroup(value = "fd4f5b86dded458a9182a9170950746a",rules = { })})
    @PostMapping("/api/lcplogics/loadMyOrder")
    public ApiReturn<List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_C3B3CBE93C4C48004BC78602CEAEE54B>> loadMyOrder() throws Exception {
        return ApiReturn.of(loadMyOrderCustomizeService.loadMyOrder());
    } 


}
