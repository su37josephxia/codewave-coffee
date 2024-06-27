package com.jystudy.coffee0528.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import com.jystudy.coffee0528.web.validation.Validation; 
import com.jystudy.coffee0528.service.logics.DeleteOrderByIdCustomizeService; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.PostMapping; 
import org.springframework.web.bind.annotation.RequestBody; 
import com.jystudy.coffee0528.web.controller.logics.dto.DeleteOrderByIdCustomizeControllerDto; 
import com.jystudy.coffee0528.web.validation.ValidationRuleGroup; 

@RestController
public class DeleteOrderByIdCustomizeController {

    @Autowired
    private DeleteOrderByIdCustomizeService deleteOrderByIdCustomizeService;
    @Validation(value = { @ValidationRuleGroup(value = "f4059b14838a4364955694deed05eeba",rules = { })})
    @PostMapping("/api/lcplogics/deleteOrderById")
    public void deleteOrderById(@RequestBody DeleteOrderByIdCustomizeControllerDto body) throws Exception {
        deleteOrderByIdCustomizeService.deleteOrderById(body.getOrderid());
    } 


}
