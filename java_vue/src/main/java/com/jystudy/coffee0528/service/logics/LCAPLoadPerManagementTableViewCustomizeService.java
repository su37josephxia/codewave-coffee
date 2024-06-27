package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import java.util.HashMap; 
import java.util.ArrayList; 
import java.util.List; 
import com.jystudy.coffee0528.repository.LCAPLoadPerManagementTableViewCustomizeServiceMapper; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import java.util.Map; 
import com.jystudy.coffee0528.util.LambdaParamWrapper; 
import org.slf4j.Logger; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 
import com.jystudy.coffee0528.domain.entities.LCAPPermission; 
import com.jystudy.coffee0528.domain.structure.LCAPGetPerResultStructure; 

@Service
public class LCAPLoadPerManagementTableViewCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPLoadPerManagementTableViewCustomizeServiceMapper lCAPLoadPerManagementTableViewCustomizeServiceMapper;
    public List<LCAPGetPerResultStructure> lCAPLoadPerManagementTableView(LCAPPermission filter) {
        LambdaParamWrapper<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_C62563F987611AA3C114D1DD3305EB9B> perAndRoleList = new LambdaParamWrapper<>(new com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_C62563F987611AA3C114D1DD3305EB9B());
        LambdaParamWrapper<Map<String, List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_6BA326473ABCE1D47D16FA8EDBA33335>>> perAndRoleMap = new LambdaParamWrapper<>(new HashMap<>());
        List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_92F2372792A8A12DF53175B7AD25D2FD> permissionList = new ArrayList<>();
        LCAPGetPerResultStructure resultItem = new LCAPGetPerResultStructure();
        List<LCAPGetPerResultStructure> result = new ArrayList<>();
        perAndRoleList.param = CommonFunctionUtil.createListPage(lCAPLoadPerManagementTableViewCustomizeServiceMapper.getAnonymousStructure_6BA326473ABCE1D47D16FA8EDBA33335(filter), lCAPLoadPerManagementTableViewCustomizeServiceMapper.countAnonymousStructure_6BA326473ABCE1D47D16FA8EDBA33335(filter).intValue(), com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_C62563F987611AA3C114D1DD3305EB9B.class); 
        perAndRoleMap.param = CommonFunctionUtil.listGroupBy(perAndRoleList.param.list, (item) -> item.lCAPPermission.name); 
        permissionList = CommonFunctionUtil.createListPage(lCAPLoadPerManagementTableViewCustomizeServiceMapper.getAnonymousStructure_92F2372792A8A12DF53175B7AD25D2FD(filter), lCAPLoadPerManagementTableViewCustomizeServiceMapper.countAnonymousStructure_92F2372792A8A12DF53175B7AD25D2FD(filter).intValue(), com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_D5C9C5DD94C4E7386BEED9E75D0F06FA.class).list; 
        for (Long index = 0L; index < CommonFunctionUtil.length(permissionList); index++) {
            com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_92F2372792A8A12DF53175B7AD25D2FD item = permissionList.get(index.intValue());
            resultItem.lACPPermission = item.lCAPPermission; 
            resultItem.roleList = CommonFunctionUtil.listTransform(CommonFunctionUtil.mapGet(perAndRoleMap.param, item.lCAPPermission.name), (item1) -> item1.lCAPRole); 
            CommonFunctionUtil.add(result, CommonFunctionUtil.clone(resultItem));
            CommonFunctionUtil.clear(resultItem);
        } 

        return result;
    } 


}
