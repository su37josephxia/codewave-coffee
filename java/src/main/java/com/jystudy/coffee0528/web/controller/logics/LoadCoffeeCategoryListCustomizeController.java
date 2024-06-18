package com.jystudy.coffee0528.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import java.util.List; 
import com.jystudy.coffee0528.web.validation.Validation; 
import com.jystudy.coffee0528.service.logics.LoadCoffeeCategoryListCustomizeService; 
import com.jystudy.coffee0528.web.ApiReturn; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.PostMapping; 
import com.jystudy.coffee0528.web.validation.ValidationRuleGroup; 

@RestController
public class LoadCoffeeCategoryListCustomizeController {

    @Autowired
    private LoadCoffeeCategoryListCustomizeService loadCoffeeCategoryListCustomizeService;
    @Validation(value = { @ValidationRuleGroup(value = "d9581328bfe74390a7137d72461f5e9e",rules = { })})
    @PostMapping("/api/lcplogics/loadCoffeeCategoryList")
    public ApiReturn<List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_1F5DDC301DC97BF2A1C355F43408D1AD>> loadCoffeeCategoryList() throws Exception {
        return ApiReturn.of(loadCoffeeCategoryListCustomizeService.loadCoffeeCategoryList());
    } 


}
