package com.jystudy.coffee0528.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import com.jystudy.coffee0528.web.validation.Validation; 
import com.jystudy.coffee0528.web.controller.logics.dto.LoadCoffeeManagementTableView_1CustomizeControllerDto; 
import com.jystudy.coffee0528.service.logics.LoadCoffeeManagementTableView_1CustomizeService; 
import com.jystudy.coffee0528.web.ApiReturn; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.PostMapping; 
import org.springframework.web.bind.annotation.RequestBody; 
import com.jystudy.coffee0528.web.validation.ValidationRuleGroup; 

@RestController
public class LoadCoffeeManagementTableView_1CustomizeController {

    @Autowired
    private LoadCoffeeManagementTableView_1CustomizeService loadCoffeeManagementTableView_1CustomizeService;
    @Validation(value = { @ValidationRuleGroup(value = "033ef6cdedb449c4980b8c5775bb48d0",rules = { })})
    @PostMapping("/api/lcplogics/loadCoffeeManagementTableView_1")
    public ApiReturn<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_7FCEC9251B2AA5EC0764EAE1FE76EADF> loadCoffeeManagementTableView_1(@RequestBody LoadCoffeeManagementTableView_1CustomizeControllerDto body) throws Exception {
        return ApiReturn.of(loadCoffeeManagementTableView_1CustomizeService.loadCoffeeManagementTableView_1(body.getPage(), body.getSize(), body.getSort(), body.getOrder(), body.getFilter()));
    } 


}
