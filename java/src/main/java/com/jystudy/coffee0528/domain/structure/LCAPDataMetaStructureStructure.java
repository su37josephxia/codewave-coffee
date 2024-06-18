package com.jystudy.coffee0528.domain.structure; 

import com.fasterxml.jackson.annotation.JsonAutoDetect; 
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility; 
import com.jystudy.coffee0528.annotation.Label; 
import java.util.ArrayList; 
import java.util.List; 

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY,getterVisibility = JsonAutoDetect.Visibility.NONE)
public class LCAPDataMetaStructureStructure {

    @Label("实体或逻辑名称")
    public String dataName;
    @Label("实体属性列表")
    public List<com.netease.lowcode.annotation.datapermission.entity.structure.EntityPropertyStructure> entityProperties = new ArrayList<>();
    @Label("逻辑属性列表")
    public List<com.netease.lowcode.annotation.datapermission.logic.structure.LogicPropertyStructure> logicProperties = new ArrayList<>();
    @Label("唯一ID")
    public Long id;
    @Label("行权限类型")
    public String rowRuleType;
    @Label("行逻辑间关系")
    public String relation;
    @Label("实体或逻辑描述")
    public String dataDescription;
    @Label("默认数据源")
    public String defaultDataSource;
    @Label("展示的实体或逻辑名称")
    public String showDataName;
    @Label("实体或逻辑类型")
    public String dataType;
    @Label("是否有创建者字段")
    public Boolean hasCreatedBy = false;
    public String getDataName() {
        return dataName;
    } 

    public void setDataName(String dataName) {
        this.dataName = dataName; 
    } 

    public List<com.netease.lowcode.annotation.datapermission.entity.structure.EntityPropertyStructure> getEntityProperties() {
        return entityProperties;
    } 

    public void setEntityProperties(List<com.netease.lowcode.annotation.datapermission.entity.structure.EntityPropertyStructure> entityProperties) {
        this.entityProperties = entityProperties; 
    } 

    public List<com.netease.lowcode.annotation.datapermission.logic.structure.LogicPropertyStructure> getLogicProperties() {
        return logicProperties;
    } 

    public void setLogicProperties(List<com.netease.lowcode.annotation.datapermission.logic.structure.LogicPropertyStructure> logicProperties) {
        this.logicProperties = logicProperties; 
    } 

    public Long getId() {
        return id;
    } 

    public void setId(Long id) {
        this.id = id; 
    } 

    public String getRowRuleType() {
        return rowRuleType;
    } 

    public void setRowRuleType(String rowRuleType) {
        this.rowRuleType = rowRuleType; 
    } 

    public String getRelation() {
        return relation;
    } 

    public void setRelation(String relation) {
        this.relation = relation; 
    } 

    public String getDataDescription() {
        return dataDescription;
    } 

    public void setDataDescription(String dataDescription) {
        this.dataDescription = dataDescription; 
    } 

    public String getDefaultDataSource() {
        return defaultDataSource;
    } 

    public void setDefaultDataSource(String defaultDataSource) {
        this.defaultDataSource = defaultDataSource; 
    } 

    public String getShowDataName() {
        return showDataName;
    } 

    public void setShowDataName(String showDataName) {
        this.showDataName = showDataName; 
    } 

    public String getDataType() {
        return dataType;
    } 

    public void setDataType(String dataType) {
        this.dataType = dataType; 
    } 

    public Boolean getHasCreatedBy() {
        return hasCreatedBy;
    } 

    public void setHasCreatedBy(Boolean hasCreatedBy) {
        this.hasCreatedBy = hasCreatedBy; 
    } 


}
