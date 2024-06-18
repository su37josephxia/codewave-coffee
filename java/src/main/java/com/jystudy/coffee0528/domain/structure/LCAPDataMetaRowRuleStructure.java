package com.jystudy.coffee0528.domain.structure; 

import com.fasterxml.jackson.annotation.JsonAutoDetect; 
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility; 
import com.jystudy.coffee0528.annotation.Label; 
import java.util.ArrayList; 
import java.util.List; 

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY,getterVisibility = JsonAutoDetect.Visibility.NONE)
public class LCAPDataMetaRowRuleStructure {

    @Label("属性列表")
    public List<LCAPDataMetaColunmRuleStructure> propertys = new ArrayList<>();
    @Label("比较符号集合")
    public List<LCAPComparisonResultStructure> comparisons = new ArrayList<>();
    @Label("选中属性")
    public String propertyName;
    @Label("值集合")
    public String values;
    @Label("比较值")
    public String comparison;
    @Label("属性类型")
    public String propertyType;
    @Label("数据权限ID")
    public Long dataPermissionId;
    @Label("选择的值类型")
    public String valuesType;
    @Label("属性类型为枚举的集合")
    public List<com.netease.lowcode.annotation.datapermission.common.structure.PropertyOption> propertyOptions = new ArrayList<>();
    @Label("属性标题")
    public String propertyTitle;
    public List<LCAPDataMetaColunmRuleStructure> getPropertys() {
        return propertys;
    } 

    public void setPropertys(List<LCAPDataMetaColunmRuleStructure> propertys) {
        this.propertys = propertys; 
    } 

    public List<LCAPComparisonResultStructure> getComparisons() {
        return comparisons;
    } 

    public void setComparisons(List<LCAPComparisonResultStructure> comparisons) {
        this.comparisons = comparisons; 
    } 

    public String getPropertyName() {
        return propertyName;
    } 

    public void setPropertyName(String propertyName) {
        this.propertyName = propertyName; 
    } 

    public String getValues() {
        return values;
    } 

    public void setValues(String values) {
        this.values = values; 
    } 

    public String getComparison() {
        return comparison;
    } 

    public void setComparison(String comparison) {
        this.comparison = comparison; 
    } 

    public String getPropertyType() {
        return propertyType;
    } 

    public void setPropertyType(String propertyType) {
        this.propertyType = propertyType; 
    } 

    public Long getDataPermissionId() {
        return dataPermissionId;
    } 

    public void setDataPermissionId(Long dataPermissionId) {
        this.dataPermissionId = dataPermissionId; 
    } 

    public String getValuesType() {
        return valuesType;
    } 

    public void setValuesType(String valuesType) {
        this.valuesType = valuesType; 
    } 

    public List<com.netease.lowcode.annotation.datapermission.common.structure.PropertyOption> getPropertyOptions() {
        return propertyOptions;
    } 

    public void setPropertyOptions(List<com.netease.lowcode.annotation.datapermission.common.structure.PropertyOption> propertyOptions) {
        this.propertyOptions = propertyOptions; 
    } 

    public String getPropertyTitle() {
        return propertyTitle;
    } 

    public void setPropertyTitle(String propertyTitle) {
        this.propertyTitle = propertyTitle; 
    } 


}
