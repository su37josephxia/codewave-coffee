package com.jystudy.coffee0528.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import com.jystudy.coffee0528.service.logics.LoadCoffeeStructureListCustomizeService; 
import java.util.List; 
import com.jystudy.coffee0528.web.validation.Validation; 
import com.jystudy.coffee0528.domain.structure.CoffeeStructureStructure; 
import com.jystudy.coffee0528.web.ApiReturn; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.PostMapping; 
import com.jystudy.coffee0528.web.validation.ValidationRuleGroup; 

@RestController
public class LoadCoffeeStructureListCustomizeController {

    @Autowired
    private LoadCoffeeStructureListCustomizeService loadCoffeeStructureListCustomizeService;
    @Validation(value = { @ValidationRuleGroup(value = "02f9f3de1a0b4718b809de407e6c5933",rules = { }),@ValidationRuleGroup(value = "d9510edda6934befbcfe09cf120597bf",rules = { })})
    @PostMapping("/api/lcplogics/loadCoffeeStructureList")
    public ApiReturn<List<CoffeeStructureStructure>> loadCoffeeStructureList() throws Exception {
        return ApiReturn.of(loadCoffeeStructureListCustomizeService.loadCoffeeStructureList());
    } 


}
