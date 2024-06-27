package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import com.jystudy.coffee0528.util.GlobalContext; 
import java.util.ArrayList; 
import java.util.List; 
import com.jystudy.coffee0528.repository.LoadMyOrderCustomizeServiceMapper; 
import org.slf4j.Logger; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 

@Service
public class LoadMyOrderCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LoadMyOrderCustomizeServiceMapper loadMyOrderCustomizeServiceMapper;
    public List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_C3B3CBE93C4C48004BC78602CEAEE54B> loadMyOrder() {
        List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_C3B3CBE93C4C48004BC78602CEAEE54B> result = new ArrayList<>();
        result = loadMyOrderCustomizeServiceMapper.getAnonymousStructure_C3B3CBE93C4C48004BC78602CEAEE54B(GlobalContext.getSessionVariable().currentUser); 
        return result;
    } 


}
