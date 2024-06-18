package com.jystudy.coffee0528.domain.entities; 

import com.fasterxml.jackson.annotation.JsonAutoDetect; 
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility; 
import com.fasterxml.jackson.annotation.JsonIgnoreProperties; 
import com.jystudy.coffee0528.annotation.Label; 
import com.jystudy.coffee0528.config.DateTimeFormatConfiguration; 
import com.fasterxml.jackson.annotation.JsonFormat; 
import java.math.BigDecimal; 

@JsonIgnoreProperties(ignoreUnknown = true)
@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY,getterVisibility = JsonAutoDetect.Visibility.NONE)
public class CoffeeEntity {

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
    @Label("咖啡名称")
    @javax.validation.constraints.NotNull
    public String coffeename;
    @Label("咖啡简介")
    @javax.validation.constraints.NotNull
    public String description;
    @Label("价格")
    @javax.validation.constraints.NotNull
    public BigDecimal price;
    @Label("咖啡图片")
    @javax.validation.constraints.NotNull
    public String coffeeImage;
    @Label("咖啡类目")
    @javax.validation.constraints.NotNull
    public Long coffeeCategory;
    @Label("是否显示")
    @javax.validation.constraints.NotNull
    public Boolean isDisplay;
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

    public String getCoffeename() {
        return coffeename;
    } 

    public void setCoffeename(String coffeename) {
        this.coffeename = coffeename; 
    } 

    public String getDescription() {
        return description;
    } 

    public void setDescription(String description) {
        this.description = description; 
    } 

    public BigDecimal getPrice() {
        return price;
    } 

    public void setPrice(BigDecimal price) {
        this.price = price; 
    } 

    public String getCoffeeImage() {
        return coffeeImage;
    } 

    public void setCoffeeImage(String coffeeImage) {
        this.coffeeImage = coffeeImage; 
    } 

    public Long getCoffeeCategory() {
        return coffeeCategory;
    } 

    public void setCoffeeCategory(Long coffeeCategory) {
        this.coffeeCategory = coffeeCategory; 
    } 

    public Boolean getIsDisplay() {
        return isDisplay;
    } 

    public void setIsDisplay(Boolean isDisplay) {
        this.isDisplay = isDisplay; 
    } 


}
