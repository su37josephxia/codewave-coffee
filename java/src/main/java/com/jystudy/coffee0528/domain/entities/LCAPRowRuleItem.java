package com.jystudy.coffee0528.domain.entities; 

import com.fasterxml.jackson.annotation.JsonAutoDetect; 
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility; 
import com.fasterxml.jackson.annotation.JsonIgnoreProperties; 
import com.jystudy.coffee0528.annotation.Label; 
import java.util.ArrayList; 
import com.jystudy.coffee0528.config.DateTimeFormatConfiguration; 
import java.util.List; 
import com.fasterxml.jackson.annotation.JsonFormat; 

@JsonIgnoreProperties(ignoreUnknown = true)
@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY,getterVisibility = JsonAutoDetect.Visibility.NONE)
public class LCAPRowRuleItem {

    @Label("主键")
    @javax.validation.constraints.NotNull
    public Long id;
    @Label("创建时间")
    @JsonFormat(pattern = DateTimeFormatConfiguration.ZONED_DATETIME_FORMAT,timezone = DateTimeFormatConfiguration.DEFAULT_TIMEZONE)
    public java.time.ZonedDateTime createdTime;
    @Label("更新时间")
    @JsonFormat(pattern = DateTimeFormatConfiguration.ZONED_DATETIME_FORMAT,timezone = DateTimeFormatConfiguration.DEFAULT_TIMEZONE)
    public java.time.ZonedDateTime updatedTime;
    @Label("创建者")
    public String createdBy;
    @Label("更新者")
    public String updatedBy;
    @Label("所属数据权限ID")
    public Long dataPermissionId;
    @Label("实体的属性名")
    public String propertyName;
    @Label("实体属性与被比较项之间的比较符")
    public String comparison;
    @Label("被比较项的字面量")
    public List<String> values = new ArrayList<>();
    @Label("字面量取值类型")
    public String valuesType;
    public Long getId() {
        return id;
    } 

    public void setId(Long id) {
        this.id = id; 
    } 

    public java.time.ZonedDateTime getCreatedTime() {
        return createdTime;
    } 

    public void setCreatedTime(java.time.ZonedDateTime createdTime) {
        this.createdTime = createdTime; 
    } 

    public java.time.ZonedDateTime getUpdatedTime() {
        return updatedTime;
    } 

    public void setUpdatedTime(java.time.ZonedDateTime updatedTime) {
        this.updatedTime = updatedTime; 
    } 

    public String getCreatedBy() {
        return createdBy;
    } 

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy; 
    } 

    public String getUpdatedBy() {
        return updatedBy;
    } 

    public void setUpdatedBy(String updatedBy) {
        this.updatedBy = updatedBy; 
    } 

    public Long getDataPermissionId() {
        return dataPermissionId;
    } 

    public void setDataPermissionId(Long dataPermissionId) {
        this.dataPermissionId = dataPermissionId; 
    } 

    public String getPropertyName() {
        return propertyName;
    } 

    public void setPropertyName(String propertyName) {
        this.propertyName = propertyName; 
    } 

    public String getComparison() {
        return comparison;
    } 

    public void setComparison(String comparison) {
        this.comparison = comparison; 
    } 

    public List<String> getValues() {
        return values;
    } 

    public void setValues(List<String> values) {
        this.values = values; 
    } 

    public String getValuesType() {
        return valuesType;
    } 

    public void setValuesType(String valuesType) {
        this.valuesType = valuesType; 
    } 


}
