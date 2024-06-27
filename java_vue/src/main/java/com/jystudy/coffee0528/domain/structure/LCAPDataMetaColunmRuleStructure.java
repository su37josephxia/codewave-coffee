package com.jystudy.coffee0528.domain.structure; 

import com.fasterxml.jackson.annotation.JsonAutoDetect; 
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility; 
import com.jystudy.coffee0528.annotation.Label; 
import java.util.ArrayList; 
import java.util.List; 
import com.jystudy.coffee0528.domain.entities.LCAPColumnRule; 

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY,getterVisibility = JsonAutoDetect.Visibility.NONE)
public class LCAPDataMetaColunmRuleStructure {

    @Label("属性名")
    public String propertyName;
    @Label("属性标题")
    public String propertyTitle;
    @Label("属性类型")
    public String propertyType;
    @Label("属性路径上每一层的描述")
    public String propertyTitlePath;
    @Label("属性权限")
    public String propertyPermission;
    @Label("列规则")
    public LCAPColumnRule columnRule;
    @Label("属性类型为枚举的集合")
    public List<com.netease.lowcode.annotation.datapermission.common.structure.PropertyOption> propertyOptions = new ArrayList<>();
    @Label("展示的第二层属性名集合")
    public List<LCAPDataMetaColunmRuleStructure> showPropertyNameList = new ArrayList<>();
    @Label("展示的属性名")
    public String showPropertyName;
    @Label("展示的第二层属性名")
    public String showPropertyName2;
    @Label("列规则是否可选")
    public Boolean isCheck;
    public String getPropertyName() {
        return propertyName;
    } 

    public void setPropertyName(String propertyName) {
        this.propertyName = propertyName; 
    } 

    public String getPropertyTitle() {
        return propertyTitle;
    } 

    public void setPropertyTitle(String propertyTitle) {
        this.propertyTitle = propertyTitle; 
    } 

    public String getPropertyType() {
        return propertyType;
    } 

    public void setPropertyType(String propertyType) {
        this.propertyType = propertyType; 
    } 

    public String getPropertyTitlePath() {
        return propertyTitlePath;
    } 

    public void setPropertyTitlePath(String propertyTitlePath) {
        this.propertyTitlePath = propertyTitlePath; 
    } 

    public String getPropertyPermission() {
        return propertyPermission;
    } 

    public void setPropertyPermission(String propertyPermission) {
        this.propertyPermission = propertyPermission; 
    } 

    public LCAPColumnRule getColumnRule() {
        return columnRule;
    } 

    public void setColumnRule(LCAPColumnRule columnRule) {
        this.columnRule = columnRule; 
    } 

    public List<com.netease.lowcode.annotation.datapermission.common.structure.PropertyOption> getPropertyOptions() {
        return propertyOptions;
    } 

    public void setPropertyOptions(List<com.netease.lowcode.annotation.datapermission.common.structure.PropertyOption> propertyOptions) {
        this.propertyOptions = propertyOptions; 
    } 

    public List<LCAPDataMetaColunmRuleStructure> getShowPropertyNameList() {
        return showPropertyNameList;
    } 

    public void setShowPropertyNameList(List<LCAPDataMetaColunmRuleStructure> showPropertyNameList) {
        this.showPropertyNameList = showPropertyNameList; 
    } 

    public String getShowPropertyName() {
        return showPropertyName;
    } 

    public void setShowPropertyName(String showPropertyName) {
        this.showPropertyName = showPropertyName; 
    } 

    public String getShowPropertyName2() {
        return showPropertyName2;
    } 

    public void setShowPropertyName2(String showPropertyName2) {
        this.showPropertyName2 = showPropertyName2; 
    } 

    public Boolean getIsCheck() {
        return isCheck;
    } 

    public void setIsCheck(Boolean isCheck) {
        this.isCheck = isCheck; 
    } 


}
