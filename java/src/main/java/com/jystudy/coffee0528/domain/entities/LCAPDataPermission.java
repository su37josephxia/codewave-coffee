package com.jystudy.coffee0528.domain.entities; 

import com.fasterxml.jackson.annotation.JsonAutoDetect; 
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility; 
import com.fasterxml.jackson.annotation.JsonIgnoreProperties; 
import com.jystudy.coffee0528.annotation.Label; 
import com.jystudy.coffee0528.config.DateTimeFormatConfiguration; 
import com.fasterxml.jackson.annotation.JsonFormat; 

@JsonIgnoreProperties(ignoreUnknown = true)
@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY,getterVisibility = JsonAutoDetect.Visibility.NONE)
public class LCAPDataPermission {

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
    @Label("所属实体名或逻辑名")
    public String resourceName;
    @Label("所属资源类型")
    public String resourceType;
    @Label("行权限类型")
    public String rowRuleType;
    @Label("行权限自定义规则间的逻辑关系")
    public String relation;
    @Label("所属角色ID")
    public Long roleId;
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

    public String getResourceName() {
        return resourceName;
    } 

    public void setResourceName(String resourceName) {
        this.resourceName = resourceName; 
    } 

    public String getResourceType() {
        return resourceType;
    } 

    public void setResourceType(String resourceType) {
        this.resourceType = resourceType; 
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

    public Long getRoleId() {
        return roleId;
    } 

    public void setRoleId(Long roleId) {
        this.roleId = roleId; 
    } 


}
