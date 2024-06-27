package com.jystudy.coffee0528.domain.entities; 

import com.fasterxml.jackson.annotation.JsonAutoDetect; 
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility; 
import com.fasterxml.jackson.annotation.JsonIgnoreProperties; 
import com.jystudy.coffee0528.annotation.Label; 
import com.jystudy.coffee0528.config.DateTimeFormatConfiguration; 
import com.fasterxml.jackson.annotation.JsonFormat; 

@JsonIgnoreProperties(ignoreUnknown = true)
@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY,getterVisibility = JsonAutoDetect.Visibility.NONE)
public class SlideEntity {

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
    @Label("幻灯片图片")
    @javax.validation.constraints.NotNull
    public String slideImage;
    @Label("显示顺序")
    @javax.validation.constraints.NotNull
    public Long displayOrder;
    @Label("是否显示")
    @javax.validation.constraints.NotNull
    public Boolean isDisplay = false;
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

    public String getSlideImage() {
        return slideImage;
    } 

    public void setSlideImage(String slideImage) {
        this.slideImage = slideImage; 
    } 

    public Long getDisplayOrder() {
        return displayOrder;
    } 

    public void setDisplayOrder(Long displayOrder) {
        this.displayOrder = displayOrder; 
    } 

    public Boolean getIsDisplay() {
        return isDisplay;
    } 

    public void setIsDisplay(Boolean isDisplay) {
        this.isDisplay = isDisplay; 
    } 


}
