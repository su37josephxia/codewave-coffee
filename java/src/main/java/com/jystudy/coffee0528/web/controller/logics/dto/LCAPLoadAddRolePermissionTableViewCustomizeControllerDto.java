package com.jystudy.coffee0528.web.controller.logics.dto; 

import java.util.List; 

public class LCAPLoadAddRolePermissionTableViewCustomizeControllerDto {

    public Long size;
    public List<Long> permissionIdList;
    public String sort;
    public Long page;
    public String order;
    public Long getSize() {
        return size;
    } 

    public void setSize(Long size) {
        this.size = size; 
    } 

    public List<Long> getPermissionIdList() {
        return permissionIdList;
    } 

    public void setPermissionIdList(List<Long> permissionIdList) {
        this.permissionIdList = permissionIdList; 
    } 

    public String getSort() {
        return sort;
    } 

    public void setSort(String sort) {
        this.sort = sort; 
    } 

    public Long getPage() {
        return page;
    } 

    public void setPage(Long page) {
        this.page = page; 
    } 

    public String getOrder() {
        return order;
    } 

    public void setOrder(String order) {
        this.order = order; 
    } 


}
