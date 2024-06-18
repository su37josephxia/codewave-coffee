package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import java.util.ArrayList; 
import java.util.List; 
import com.jystudy.coffee0528.domain.structure.LCAPPermissionAndResourceStructure; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import org.slf4j.Logger; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 
import com.jystudy.coffee0528.repository.LCAPGetPermissionResourseNotRelatedCustomizeServiceMapper; 

@Service
public class LCAPGetPermissionResourseNotRelatedCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPGetPermissionResourceRelatedCustomizeService lCAPGetPermissionResourceRelatedCustomizeService;
    @Autowired
    private LCAPGetPermissionResourseNotRelatedCustomizeServiceMapper lCAPGetPermissionResourseNotRelatedCustomizeServiceMapper;
    public List<LCAPPermissionAndResourceStructure> lCAPGetPermissionResourseNotRelated(Long permissionId) {
        List<Long> relatedList = new ArrayList<>();
        List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_755C4BB2E990BE4BACD3C49B96FE0DA6> variable1 = new ArrayList<>();
        List<LCAPPermissionAndResourceStructure> variable2 = new ArrayList<>();
        List<LCAPPermissionAndResourceStructure> result = new ArrayList<>();
        variable2 = lCAPGetPermissionResourceRelatedCustomizeService.lCAPGetPermissionResourceRelated(permissionId); 
        if ((CommonFunctionUtil.notEquals(CommonFunctionUtil.length(variable2), 0L))) {
            relatedList = CommonFunctionUtil.listTransform(variable2, (item) -> item.value); 
        } else {
        } 

        variable1 = lCAPGetPermissionResourseNotRelatedCustomizeServiceMapper.getAnonymousStructure_755C4BB2E990BE4BACD3C49B96FE0DA6(relatedList); 
        result = CommonFunctionUtil.listTransform(variable1, (item) -> CommonFunctionUtil.newWithInitiation(new LCAPPermissionAndResourceStructure(), _bean175 -> {
    _bean175.text = new StringBuilder().append(CommonFunctionUtil.toString(item.lCAPResource.description)).append(CommonFunctionUtil.toString("（")).append(CommonFunctionUtil.toString(item.lCAPResource.name)).append(CommonFunctionUtil.toString("）")).toString(); 
    _bean175.value = item.lCAPResource.id; 
} )); 
        return result;
    } 


}
