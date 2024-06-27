package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import java.util.ArrayList; 
import java.util.List; 
import com.jystudy.coffee0528.service.entities.LCAPEntityMetaService; 
import com.jystudy.coffee0528.repository.LCAPDeleteDataPermissionCustomizeServiceMapper; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import com.jystudy.coffee0528.service.entities.LCAPDataPermissionService; 
import com.jystudy.coffee0528.service.dto.filters.atomic.ColumnQueryFilter; 
import com.jystudy.coffee0528.service.dto.filters.logic.binary.compare.EqualQueryFilter; 
import org.slf4j.Logger; 
import com.jystudy.coffee0528.service.entities.LCAPRowRuleItemService; 
import com.jystudy.coffee0528.service.entities.LCAPLogicMetaService; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.service.dto.filters.atomic.NumericLiteralQueryFilter; 
import com.jystudy.coffee0528.config.Constants; 
import com.jystudy.coffee0528.service.dto.filters.atomic.IdentifierQueryFilter; 
import com.jystudy.coffee0528.service.dto.filters.atomic.ColumnQueryFilter.Property; 
import com.jystudy.coffee0528.service.entities.LCAPColumnRuleService; 
import com.jystudy.coffee0528.service.dto.filters.logic.binary.matching.InQueryFilter; 

@Service
public class LCAPDeleteDataPermissionCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPEntityMetaService lCAPEntityMetaService;
    @Autowired
    private LCAPDeleteDataPermissionCustomizeServiceMapper lCAPDeleteDataPermissionCustomizeServiceMapper;
    @Autowired
    private LCAPDataPermissionService lCAPDataPermissionService;
    @Autowired
    private LCAPColumnRuleService lCAPColumnRuleService;
    @Autowired
    private LCAPRowRuleItemService lCAPRowRuleItemService;
    @Autowired
    private LCAPLogicMetaService lCAPLogicMetaService;
    public void lCAPDeleteDataPermission(Boolean isEntityMeta) {
        List<Long> dataPerIdList = new ArrayList<>();
        if (isEntityMeta) {
            LCAP_LOGGER.info(CommonFunctionUtil.toString("删除实体元数据"));
            lCAPEntityMetaService.deleteBy(new EqualQueryFilter().left(new NumericLiteralQueryFilter("1")).right(new NumericLiteralQueryFilter("1")));
            dataPerIdList = lCAPDeleteDataPermissionCustomizeServiceMapper.getLong(); 
            if (CommonFunctionUtil.hasValue(dataPerIdList)) {
                lCAPDataPermissionService.batchDelete(dataPerIdList);
                LCAP_LOGGER.info(CommonFunctionUtil.toString("删除行权限与列权限"));
                lCAPColumnRuleService.deleteBy(new InQueryFilter().left(new ColumnQueryFilter("", "", "dataPermissionId", "dataPermissionId", new ColumnQueryFilter.Property("", "dataPermissionId"))).right(new IdentifierQueryFilter("dataPerIdList", dataPerIdList)));
                lCAPRowRuleItemService.deleteBy(new InQueryFilter().left(new ColumnQueryFilter("", "", "dataPermissionId", "dataPermissionId", new ColumnQueryFilter.Property("", "dataPermissionId"))).right(new IdentifierQueryFilter("dataPerIdList", dataPerIdList)));
            } else {
            } 

        } else {
            LCAP_LOGGER.info(CommonFunctionUtil.toString("删除逻辑元数据"));
            lCAPLogicMetaService.deleteBy(new EqualQueryFilter().left(new NumericLiteralQueryFilter("1")).right(new NumericLiteralQueryFilter("1")));
            dataPerIdList = lCAPDeleteDataPermissionCustomizeServiceMapper.getLong1(); 
            if (CommonFunctionUtil.hasValue(dataPerIdList)) {
                lCAPDataPermissionService.batchDelete(dataPerIdList);
                LCAP_LOGGER.info(CommonFunctionUtil.toString("删除行权限与列权限"));
                lCAPColumnRuleService.deleteBy(new InQueryFilter().left(new ColumnQueryFilter("", "", "dataPermissionId", "dataPermissionId", new ColumnQueryFilter.Property("", "dataPermissionId"))).right(new IdentifierQueryFilter("dataPerIdList", dataPerIdList)));
                lCAPRowRuleItemService.deleteBy(new InQueryFilter().left(new ColumnQueryFilter("", "", "dataPermissionId", "dataPermissionId", new ColumnQueryFilter.Property("", "dataPermissionId"))).right(new IdentifierQueryFilter("dataPerIdList", dataPerIdList)));
            } else {
            } 

        } 

        return ;
    } 


}
