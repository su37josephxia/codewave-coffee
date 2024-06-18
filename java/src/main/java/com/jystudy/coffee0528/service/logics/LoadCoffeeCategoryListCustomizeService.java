package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import java.util.ArrayList; 
import java.util.List; 
import org.slf4j.Logger; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 
import com.jystudy.coffee0528.repository.LoadCoffeeCategoryListCustomizeServiceMapper; 

@Service
public class LoadCoffeeCategoryListCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LoadCoffeeCategoryListCustomizeServiceMapper loadCoffeeCategoryListCustomizeServiceMapper;
    public List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_1F5DDC301DC97BF2A1C355F43408D1AD> loadCoffeeCategoryList() {
        List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_1F5DDC301DC97BF2A1C355F43408D1AD> result = new ArrayList<>();
        result = loadCoffeeCategoryListCustomizeServiceMapper.getAnonymousStructure_1F5DDC301DC97BF2A1C355F43408D1AD(); 
        return result;
    } 


}
