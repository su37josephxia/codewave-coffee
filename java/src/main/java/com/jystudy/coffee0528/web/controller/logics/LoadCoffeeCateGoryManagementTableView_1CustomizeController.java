package com.jystudy.coffee0528.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import com.jystudy.coffee0528.web.validation.Validation; 
import com.jystudy.coffee0528.web.ApiReturn; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.PostMapping; 
import com.jystudy.coffee0528.web.controller.logics.dto.LoadCoffeeCateGoryManagementTableView_1CustomizeControllerDto; 
import org.springframework.web.bind.annotation.RequestBody; 
import com.jystudy.coffee0528.web.validation.ValidationRuleGroup; 
import com.jystudy.coffee0528.service.logics.LoadCoffeeCateGoryManagementTableView_1CustomizeService; 

@RestController
public class LoadCoffeeCateGoryManagementTableView_1CustomizeController {

    @Autowired
    private LoadCoffeeCateGoryManagementTableView_1CustomizeService loadCoffeeCateGoryManagementTableView_1CustomizeService;
    @Validation(value = { @ValidationRuleGroup(value = "5ef7aa752932458591ff95989c3145c1",rules = { })})
    @PostMapping("/api/lcplogics/loadCoffeeCateGoryManagementTableView_1")
    public ApiReturn<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_B06C504F1AC871ECAA0AC01240A5F5B1> loadCoffeeCateGoryManagementTableView_1(@RequestBody LoadCoffeeCateGoryManagementTableView_1CustomizeControllerDto body) throws Exception {
        return ApiReturn.of(loadCoffeeCateGoryManagementTableView_1CustomizeService.loadCoffeeCateGoryManagementTableView_1(body.getPage(), body.getSize(), body.getSort(), body.getOrder(), body.getFilter()));
    } 


}
