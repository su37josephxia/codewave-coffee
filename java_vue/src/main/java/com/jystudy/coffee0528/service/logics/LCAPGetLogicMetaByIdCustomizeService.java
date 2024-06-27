package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import java.util.ArrayList; 
import com.jystudy.coffee0528.repository.LCAPGetLogicMetaByIdCustomizeServiceMapper; 
import java.util.List; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import org.slf4j.Logger; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 
import com.jystudy.coffee0528.domain.entities.LCAPLogicMeta; 

@Service
public class LCAPGetLogicMetaByIdCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPGetLogicMetaByIdCustomizeServiceMapper lCAPGetLogicMetaByIdCustomizeServiceMapper;
    public LCAPLogicMeta lCAPGetLogicMetaById(Long id) {
        List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_F596B746DC08704D55A3AF5333D966BF> search = new ArrayList<>();
        LCAPLogicMeta result = new LCAPLogicMeta();
        if (CommonFunctionUtil.hasValue(id)) {
            search = lCAPGetLogicMetaByIdCustomizeServiceMapper.getAnonymousStructure_F596B746DC08704D55A3AF5333D966BF(id); 
            if (CommonFunctionUtil.hasValue(search)) {
                result = CommonFunctionUtil.listHead(search).lCAPLogicMeta; 
            } else {
                result = CommonFunctionUtil.New(LCAPLogicMeta.class); 
            } 

        } else {
            result = CommonFunctionUtil.New(LCAPLogicMeta.class); 
        } 

        return result;
    } 


}
