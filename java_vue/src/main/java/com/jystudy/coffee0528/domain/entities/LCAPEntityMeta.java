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
public class LCAPEntityMeta {

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
    @Label("实体名")
    public String entityName;
    @Label("实体的表名")
    public String tableName;
    @Label("实体的描述")
    public String entityDescription;
    @Label("属性列表")
    public List<com.netease.lowcode.annotation.datapermission.entity.structure.EntityPropertyStructure> properties = new ArrayList<>();
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

    public String getEntityName() {
        return entityName;
    } 

    public void setEntityName(String entityName) {
        this.entityName = entityName; 
    } 

    public String getTableName() {
        return tableName;
    } 

    public void setTableName(String tableName) {
        this.tableName = tableName; 
    } 

    public String getEntityDescription() {
        return entityDescription;
    } 

    public void setEntityDescription(String entityDescription) {
        this.entityDescription = entityDescription; 
    } 

    public List<com.netease.lowcode.annotation.datapermission.entity.structure.EntityPropertyStructure> getProperties() {
        return properties;
    } 

    public void setProperties(List<com.netease.lowcode.annotation.datapermission.entity.structure.EntityPropertyStructure> properties) {
        this.properties = properties; 
    } 


}
