package com.jystudy.coffee0528.web.controller.logics.dto; 

import com.jystudy.coffee0528.domain.entities.CoffeeCategoryEntity; 

public class LoadCoffeeCateGoryManagementTableView_1CustomizeControllerDto {

    public CoffeeCategoryEntity filter;
    public Long size;
    public String sort;
    public Long page;
    public String order;
    public CoffeeCategoryEntity getFilter() {
        return filter;
    } 

    public void setFilter(CoffeeCategoryEntity filter) {
        this.filter = filter; 
    } 

    public Long getSize() {
        return size;
    } 

    public void setSize(Long size) {
        this.size = size; 
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
