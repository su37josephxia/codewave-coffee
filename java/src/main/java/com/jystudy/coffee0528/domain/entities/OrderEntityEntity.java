package com.jystudy.coffee0528.domain.entities; 

import com.fasterxml.jackson.annotation.JsonAutoDetect; 
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility; 
import com.fasterxml.jackson.annotation.JsonIgnoreProperties; 
import com.jystudy.coffee0528.annotation.Label; 
import java.util.ArrayList; 
import com.jystudy.coffee0528.config.DateTimeFormatConfiguration; 
import com.jystudy.coffee0528.domain.enumeration.PickupMethodEnumEnum; 
import com.jystudy.coffee0528.domain.enumeration.OrderStatusEnumEnum; 
import java.util.List; 
import com.jystudy.coffee0528.domain.structure.CoffeeStructureStructure; 
import com.fasterxml.jackson.annotation.JsonFormat; 
import java.math.BigDecimal; 

@JsonIgnoreProperties(ignoreUnknown = true)
@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY,getterVisibility = JsonAutoDetect.Visibility.NONE)
public class OrderEntityEntity {

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
    @Label("订单总金额")
    @javax.validation.constraints.NotNull
    public BigDecimal totalAmount;
    @Label("咖啡总数量")
    @javax.validation.constraints.NotNull
    public Long coffeeCount;
    @Label("订单状态")
    @javax.validation.constraints.NotNull
    public OrderStatusEnumEnum orderStatus;
    @Label("收货人姓名")
    @javax.validation.constraints.NotNull
    public String consigneeName;
    @Label("收货人电话")
    @javax.validation.constraints.NotNull
    public String consigneePhone;
    @Label("收货人地区")
    @javax.validation.constraints.NotNull
    public String consigneeArea;
    @Label("收货人详细地址")
    @javax.validation.constraints.NotNull
    public String consigneeAddress;
    @Label("取货方式")
    @javax.validation.constraints.NotNull
    public PickupMethodEnumEnum pickupMethod;
    @Label("备注")
    public String remark;
    @Label("咖啡信息")
    public List<CoffeeStructureStructure> coffeeList = new ArrayList<>();
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

    public BigDecimal getTotalAmount() {
        return totalAmount;
    } 

    public void setTotalAmount(BigDecimal totalAmount) {
        this.totalAmount = totalAmount; 
    } 

    public Long getCoffeeCount() {
        return coffeeCount;
    } 

    public void setCoffeeCount(Long coffeeCount) {
        this.coffeeCount = coffeeCount; 
    } 

    public OrderStatusEnumEnum getOrderStatus() {
        return orderStatus;
    } 

    public void setOrderStatus(OrderStatusEnumEnum orderStatus) {
        this.orderStatus = orderStatus; 
    } 

    public String getConsigneeName() {
        return consigneeName;
    } 

    public void setConsigneeName(String consigneeName) {
        this.consigneeName = consigneeName; 
    } 

    public String getConsigneePhone() {
        return consigneePhone;
    } 

    public void setConsigneePhone(String consigneePhone) {
        this.consigneePhone = consigneePhone; 
    } 

    public String getConsigneeArea() {
        return consigneeArea;
    } 

    public void setConsigneeArea(String consigneeArea) {
        this.consigneeArea = consigneeArea; 
    } 

    public String getConsigneeAddress() {
        return consigneeAddress;
    } 

    public void setConsigneeAddress(String consigneeAddress) {
        this.consigneeAddress = consigneeAddress; 
    } 

    public PickupMethodEnumEnum getPickupMethod() {
        return pickupMethod;
    } 

    public void setPickupMethod(PickupMethodEnumEnum pickupMethod) {
        this.pickupMethod = pickupMethod; 
    } 

    public String getRemark() {
        return remark;
    } 

    public void setRemark(String remark) {
        this.remark = remark; 
    } 

    public List<CoffeeStructureStructure> getCoffeeList() {
        return coffeeList;
    } 

    public void setCoffeeList(List<CoffeeStructureStructure> coffeeList) {
        this.coffeeList = coffeeList; 
    } 


}
