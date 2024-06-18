package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import com.jystudy.coffee0528.domain.entities.LCAPPerResMapping; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import com.jystudy.coffee0528.util.LambdaParamWrapper; 
import org.slf4j.Logger; 
import com.jystudy.coffee0528.repository.LCAPGetMappingByPermissionIdAndResourceIdCustomizeServiceMapper; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 

@Service
public class LCAPGetMappingByPermissionIdAndResourceIdCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPGetMappingByPermissionIdAndResourceIdCustomizeServiceMapper lCAPGetMappingByPermissionIdAndResourceIdCustomizeServiceMapper;
    public LCAPPerResMapping lCAPGetMappingByPermissionIdAndResourceId(Long permissionId, Long resourceId) {
        LambdaParamWrapper<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_38593AA815D055EA90DAB07FE4542F93> variable1 = new LambdaParamWrapper<>(new com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_38593AA815D055EA90DAB07FE4542F93());
        LCAPPerResMapping result = new LCAPPerResMapping();
        variable1.param = CommonFunctionUtil.createListPage(lCAPGetMappingByPermissionIdAndResourceIdCustomizeServiceMapper.getAnonymousStructure_D99966CE0A06FAAEEADD3A36C43F7DFF(permissionId, resourceId), lCAPGetMappingByPermissionIdAndResourceIdCustomizeServiceMapper.countAnonymousStructure_D99966CE0A06FAAEEADD3A36C43F7DFF(permissionId, resourceId).intValue(), com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_38593AA815D055EA90DAB07FE4542F93.class); 
        if ((variable1.param.total.compareTo(0L) > 0)) {
            result = CommonFunctionUtil.get(CommonFunctionUtil.listTransform(variable1.param.list, (item) -> item.lCAPPerResMapping), 0L); 
        } else {
        } 

        return result;
    } 


}
