package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import com.jystudy.coffee0528.repository.LCAPGetPermissionResourceRelatedCustomizeServiceMapper; 
import java.util.ArrayList; 
import java.util.List; 
import com.jystudy.coffee0528.domain.structure.LCAPPermissionAndResourceStructure; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import org.slf4j.Logger; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 

@Service
public class LCAPGetPermissionResourceRelatedCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPGetPermissionResourceRelatedCustomizeServiceMapper lCAPGetPermissionResourceRelatedCustomizeServiceMapper;
    public List<LCAPPermissionAndResourceStructure> lCAPGetPermissionResourceRelated(Long permissinId) {
        List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_53CA2F6F6A03F8C3D4CDE3AA6CF7AE9C> variable1 = new ArrayList<>();
        List<LCAPPermissionAndResourceStructure> result = new ArrayList<>();
        if ((CommonFunctionUtil.notEquals(permissinId, null))) {
            variable1 = lCAPGetPermissionResourceRelatedCustomizeServiceMapper.getAnonymousStructure_53CA2F6F6A03F8C3D4CDE3AA6CF7AE9C(permissinId); 
            if ((CommonFunctionUtil.length(variable1).compareTo(0L) > 0)) {
                result = CommonFunctionUtil.listTransform(variable1, (item) -> CommonFunctionUtil.newWithInitiation(new LCAPPermissionAndResourceStructure(), _bean334 -> {
    _bean334.text = new StringBuilder().append(CommonFunctionUtil.toString(item.lCAPResource.description)).append(CommonFunctionUtil.toString("（")).append(CommonFunctionUtil.toString(item.lCAPResource.name)).append(CommonFunctionUtil.toString("）")).toString(); 
    _bean334.value = item.lCAPResource.id; 
} )); 
            } else {
                result = CommonFunctionUtil.newWithInitiation(new ArrayList<LCAPPermissionAndResourceStructure>(), _list885 -> {}); 
            } 

        } else {
        } 

        return result;
    } 


}
