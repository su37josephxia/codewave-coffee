package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import com.jystudy.coffee0528.repository.LoadCoffeeManagementSelect_5CoffeeCategoryCustomizeServiceMapper; 
import org.slf4j.Logger; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 

@Service
public class LoadCoffeeManagementSelect_5CoffeeCategoryCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LoadCoffeeManagementSelect_5CoffeeCategoryCustomizeServiceMapper loadCoffeeManagementSelect_5CoffeeCategoryCustomizeServiceMapper;
    public com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_B06C504F1AC871ECAA0AC01240A5F5B1 loadCoffeeManagementSelect_5CoffeeCategory(Long page, Long size) {
        com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_B06C504F1AC871ECAA0AC01240A5F5B1 result = new com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_B06C504F1AC871ECAA0AC01240A5F5B1();
        result = CommonFunctionUtil.createListPage(loadCoffeeManagementSelect_5CoffeeCategoryCustomizeServiceMapper.getAnonymousStructure_1F5DDC301DC97BF2A1C355F43408D1AD(page, size), loadCoffeeManagementSelect_5CoffeeCategoryCustomizeServiceMapper.countAnonymousStructure_1F5DDC301DC97BF2A1C355F43408D1AD(page, size).intValue(), com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_B06C504F1AC871ECAA0AC01240A5F5B1.class); 
        return result;
    } 


}
