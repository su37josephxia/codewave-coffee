package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import java.util.ArrayList; 
import java.util.List; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import com.jystudy.coffee0528.domain.structure.LCAPDataMetaStructureStructure; 
import org.slf4j.Logger; 
import org.springframework.beans.factory.annotation.Autowired; 
import com.jystudy.coffee0528.repository.LCAPLoadDataMetaManagementCustomizeServiceMapper; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 

@Service
public class LCAPLoadDataMetaManagementCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPLoadDataMetaManagementCustomizeServiceMapper lCAPLoadDataMetaManagementCustomizeServiceMapper;
    public List<LCAPDataMetaStructureStructure> lCAPLoadDataMetaManagement(String dataType, String search) {
        List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_7E0E3711C8F04CD2E91C507B336679CC> searchEntitys = new ArrayList<>();
        List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_F596B746DC08704D55A3AF5333D966BF> searchLogics = new ArrayList<>();
        LCAPDataMetaStructureStructure dataResult = new LCAPDataMetaStructureStructure();
        List<String> nameList = new ArrayList<>();
        List<LCAPDataMetaStructureStructure> result = new ArrayList<>();
        if ((CommonFunctionUtil.equals(dataType, "entity"))) {
            searchEntitys = lCAPLoadDataMetaManagementCustomizeServiceMapper.getAnonymousStructure_7E0E3711C8F04CD2E91C507B336679CC(search); 
            for (Long index = 0L; index < searchEntitys.size(); index++) {
                com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_7E0E3711C8F04CD2E91C507B336679CC item = searchEntitys.get(index.intValue());
                CommonFunctionUtil.clear(nameList);
                nameList = CommonFunctionUtil.split(item.lCAPEntityMeta.entityName, "."); 
                if ((CommonFunctionUtil.length(nameList).compareTo(2L) >= 0)) {
                    dataResult.defaultDataSource = CommonFunctionUtil.get(nameList, 0L); 
                    dataResult.showDataName = CommonFunctionUtil.get(nameList, 1L); 
                } else {
                    dataResult.defaultDataSource = item.lCAPEntityMeta.entityName; 
                    dataResult.showDataName = item.lCAPEntityMeta.entityName; 
                } 

                dataResult.dataDescription = item.lCAPEntityMeta.entityDescription; 
                dataResult.dataName = item.lCAPEntityMeta.entityName; 
                dataResult.entityProperties = item.lCAPEntityMeta.properties; 
                dataResult.id = item.lCAPEntityMeta.id; 
                dataResult.logicProperties = CommonFunctionUtil.New(List.class); 
                dataResult.dataType = "entity"; 

                CommonFunctionUtil.add(result, CommonFunctionUtil.clone(dataResult));
            } 

        } else {
            searchLogics = lCAPLoadDataMetaManagementCustomizeServiceMapper.getAnonymousStructure_F596B746DC08704D55A3AF5333D966BF(search); 
            for (Long index = 0L; index < searchLogics.size(); index++) {
                com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_F596B746DC08704D55A3AF5333D966BF item = searchLogics.get(index.intValue());
                CommonFunctionUtil.clear(nameList);
                nameList = CommonFunctionUtil.split(item.lCAPLogicMeta.logicName, "."); 
                if ((CommonFunctionUtil.length(nameList).compareTo(2L) >= 0)) {
                    dataResult.defaultDataSource = CommonFunctionUtil.get(nameList, 0L); 
                    dataResult.showDataName = CommonFunctionUtil.get(nameList, 1L); 
                } else {
                    dataResult.defaultDataSource = item.lCAPLogicMeta.logicName; 
                    dataResult.showDataName = item.lCAPLogicMeta.logicName; 
                } 

                dataResult.dataDescription = item.lCAPLogicMeta.logicDescription; 
                dataResult.dataName = item.lCAPLogicMeta.logicName; 
                dataResult.entityProperties = CommonFunctionUtil.New(List.class); 
                dataResult.id = item.lCAPLogicMeta.id; 
                dataResult.logicProperties = item.lCAPLogicMeta.properties; 
                dataResult.dataType = "logic"; 

                CommonFunctionUtil.add(result, CommonFunctionUtil.clone(dataResult));
            } 

        } 

        return result;
    } 


}
