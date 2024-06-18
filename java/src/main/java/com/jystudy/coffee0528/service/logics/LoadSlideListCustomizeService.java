package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import java.util.ArrayList; 
import java.util.List; 
import org.slf4j.Logger; 
import org.springframework.beans.factory.annotation.Autowired; 
import com.jystudy.coffee0528.repository.LoadSlideListCustomizeServiceMapper; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 

@Service
public class LoadSlideListCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LoadSlideListCustomizeServiceMapper loadSlideListCustomizeServiceMapper;
    public List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_97EF77A90D9FC3CD70F4874C8F91E655> loadSlideList() {
        List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_97EF77A90D9FC3CD70F4874C8F91E655> result = new ArrayList<>();
        result = loadSlideListCustomizeServiceMapper.getAnonymousStructure_97EF77A90D9FC3CD70F4874C8F91E655(); 
        return result;
    } 


}
