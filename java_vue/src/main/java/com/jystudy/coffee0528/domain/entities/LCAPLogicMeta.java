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
public class LCAPLogicMeta {

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
    @Label("逻辑名")
    public String logicName;
    @Label("逻辑返回值形式")
    public String returnShape;
    @Label("属性列表")
    public List<com.netease.lowcode.annotation.datapermission.logic.structure.LogicPropertyStructure> properties = new ArrayList<>();
    @Label("逻辑描述")
    public String logicDescription;
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

    public String getLogicName() {
        return logicName;
    } 

    public void setLogicName(String logicName) {
        this.logicName = logicName; 
    } 

    public String getReturnShape() {
        return returnShape;
    } 

    public void setReturnShape(String returnShape) {
        this.returnShape = returnShape; 
    } 

    public List<com.netease.lowcode.annotation.datapermission.logic.structure.LogicPropertyStructure> getProperties() {
        return properties;
    } 

    public void setProperties(List<com.netease.lowcode.annotation.datapermission.logic.structure.LogicPropertyStructure> properties) {
        this.properties = properties; 
    } 

    public String getLogicDescription() {
        return logicDescription;
    } 

    public void setLogicDescription(String logicDescription) {
        this.logicDescription = logicDescription; 
    } 


}
