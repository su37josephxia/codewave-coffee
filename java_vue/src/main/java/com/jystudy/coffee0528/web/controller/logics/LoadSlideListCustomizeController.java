package com.jystudy.coffee0528.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import com.jystudy.coffee0528.service.logics.LoadSlideListCustomizeService; 
import java.util.List; 
import com.jystudy.coffee0528.web.validation.Validation; 
import com.jystudy.coffee0528.web.ApiReturn; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.PostMapping; 
import com.jystudy.coffee0528.web.validation.ValidationRuleGroup; 

@RestController
public class LoadSlideListCustomizeController {

    @Autowired
    private LoadSlideListCustomizeService loadSlideListCustomizeService;
    @Validation(value = { @ValidationRuleGroup(value = "631678203f5c4a8b8490949f82c54310",rules = { })})
    @PostMapping("/api/lcplogics/loadSlideList")
    public ApiReturn<List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_97EF77A90D9FC3CD70F4874C8F91E655>> loadSlideList() throws Exception {
        return ApiReturn.of(loadSlideListCustomizeService.loadSlideList());
    } 


}
