package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import java.util.ArrayList; 
import com.jystudy.coffee0528.repository.LoadCoffeeStructureListCustomizeServiceMapper; 
import java.util.List; 
import com.jystudy.coffee0528.domain.structure.CoffeeStructureStructure; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import org.slf4j.Logger; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 

@Service
public class LoadCoffeeStructureListCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LoadCoffeeStructureListCustomizeServiceMapper loadCoffeeStructureListCustomizeServiceMapper;
    public List<CoffeeStructureStructure> loadCoffeeStructureList() {
        List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_0517296F15B1AE1BB362F7F8705A16CD> coffeeList = new ArrayList<>();
        List<CoffeeStructureStructure> result = new ArrayList<>();
        coffeeList = loadCoffeeStructureListCustomizeServiceMapper.getAnonymousStructure_0517296F15B1AE1BB362F7F8705A16CD(); 
        if (CommonFunctionUtil.hasValue(coffeeList)) {
            result = CommonFunctionUtil.listTransform(coffeeList, (item) -> CommonFunctionUtil.newWithInitiation(new CoffeeStructureStructure(), _bean810 -> {
    _bean810.coffee = item.coffee; 
    _bean810.count = 0L; 
} )); 
        } else {
        } 

        return result;
    } 


}
