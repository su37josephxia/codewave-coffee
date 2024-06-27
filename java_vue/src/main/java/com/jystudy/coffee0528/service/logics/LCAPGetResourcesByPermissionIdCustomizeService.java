package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import java.util.ArrayList; 
import java.util.List; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import com.jystudy.coffee0528.domain.entities.LCAPResource; 
import com.jystudy.coffee0528.util.LambdaParamWrapper; 
import com.jystudy.coffee0528.repository.LCAPGetResourcesByPermissionIdCustomizeServiceMapper; 
import org.slf4j.Logger; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 

@Service
public class LCAPGetResourcesByPermissionIdCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPGetResourcesByPermissionIdCustomizeServiceMapper lCAPGetResourcesByPermissionIdCustomizeServiceMapper;
    public List<LCAPResource> lCAPGetResourcesByPermissionId(Long permissionId) {
        LambdaParamWrapper<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_D311DE41A09BA2BAA8FFB4565AF17770> variable1 = new LambdaParamWrapper<>(new com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_D311DE41A09BA2BAA8FFB4565AF17770());
        List<LCAPResource> resourcesList = new ArrayList<>();
        if ((CommonFunctionUtil.equals(permissionId, null))) {
            return resourcesList;
        } else {
        } 

        variable1.param = CommonFunctionUtil.createListPage(lCAPGetResourcesByPermissionIdCustomizeServiceMapper.getAnonymousStructure_53CA2F6F6A03F8C3D4CDE3AA6CF7AE9C(permissionId), lCAPGetResourcesByPermissionIdCustomizeServiceMapper.countAnonymousStructure_53CA2F6F6A03F8C3D4CDE3AA6CF7AE9C(permissionId).intValue(), com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_D311DE41A09BA2BAA8FFB4565AF17770.class); 
        if ((variable1.param.total.compareTo(0L) > 0)) {
            resourcesList = CommonFunctionUtil.listTransform(variable1.param.list, (item) -> item.lCAPResource); 
        } else {
        } 

        return resourcesList;
    } 


}
