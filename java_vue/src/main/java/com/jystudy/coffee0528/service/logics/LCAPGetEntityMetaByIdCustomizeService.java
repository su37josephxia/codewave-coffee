package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import java.util.ArrayList; 
import com.jystudy.coffee0528.domain.entities.LCAPEntityMeta; 
import java.util.List; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import org.slf4j.Logger; 
import com.jystudy.coffee0528.repository.LCAPGetEntityMetaByIdCustomizeServiceMapper; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 

@Service
public class LCAPGetEntityMetaByIdCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPGetEntityMetaByIdCustomizeServiceMapper lCAPGetEntityMetaByIdCustomizeServiceMapper;
    public LCAPEntityMeta lCAPGetEntityMetaById(Long id) {
        List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_7E0E3711C8F04CD2E91C507B336679CC> search = new ArrayList<>();
        LCAPEntityMeta result = new LCAPEntityMeta();
        if (CommonFunctionUtil.hasValue(id)) {
            search = lCAPGetEntityMetaByIdCustomizeServiceMapper.getAnonymousStructure_7E0E3711C8F04CD2E91C507B336679CC(id); 
            if (CommonFunctionUtil.hasValue(search)) {
                result = CommonFunctionUtil.listHead(search).lCAPEntityMeta; 
            } else {
                result = CommonFunctionUtil.New(LCAPEntityMeta.class); 
            } 

        } else {
            result = CommonFunctionUtil.New(LCAPEntityMeta.class); 
        } 

        return result;
    } 


}
