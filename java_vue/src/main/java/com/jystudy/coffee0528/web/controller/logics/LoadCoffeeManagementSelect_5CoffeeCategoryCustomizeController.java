package com.jystudy.coffee0528.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import com.jystudy.coffee0528.service.logics.LoadCoffeeManagementSelect_5CoffeeCategoryCustomizeService; 
import com.jystudy.coffee0528.web.validation.Validation; 
import com.jystudy.coffee0528.web.ApiReturn; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.PostMapping; 
import org.springframework.web.bind.annotation.RequestBody; 
import com.jystudy.coffee0528.web.validation.ValidationRuleGroup; 
import com.jystudy.coffee0528.web.controller.logics.dto.LoadCoffeeManagementSelect_5CoffeeCategoryCustomizeControllerDto; 

@RestController
public class LoadCoffeeManagementSelect_5CoffeeCategoryCustomizeController {

    @Autowired
    private LoadCoffeeManagementSelect_5CoffeeCategoryCustomizeService loadCoffeeManagementSelect_5CoffeeCategoryCustomizeService;
    @Validation(value = { @ValidationRuleGroup(value = "6fb34cc62a09471c9d95a16f5a423199",rules = { }),@ValidationRuleGroup(value = "25d5e5dcc13440f3bfce4309877782a1",rules = { })})
    @PostMapping("/api/lcplogics/loadCoffeeManagementSelect_5CoffeeCategory")
    public ApiReturn<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_B06C504F1AC871ECAA0AC01240A5F5B1> loadCoffeeManagementSelect_5CoffeeCategory(@RequestBody LoadCoffeeManagementSelect_5CoffeeCategoryCustomizeControllerDto body) throws Exception {
        return ApiReturn.of(loadCoffeeManagementSelect_5CoffeeCategoryCustomizeService.loadCoffeeManagementSelect_5CoffeeCategory(body.getPage(), body.getSize()));
    } 


}
