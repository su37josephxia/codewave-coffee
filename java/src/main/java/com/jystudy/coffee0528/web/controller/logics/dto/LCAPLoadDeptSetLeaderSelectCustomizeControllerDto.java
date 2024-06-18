package com.jystudy.coffee0528.web.controller.logics.dto; 


public class LCAPLoadDeptSetLeaderSelectCustomizeControllerDto {

    public String filter;
    public Long size;
    public String deptId;
    public Long page;
    public String getFilter() {
        return filter;
    } 

    public void setFilter(String filter) {
        this.filter = filter; 
    } 

    public Long getSize() {
        return size;
    } 

    public void setSize(Long size) {
        this.size = size; 
    } 

    public String getDeptId() {
        return deptId;
    } 

    public void setDeptId(String deptId) {
        this.deptId = deptId; 
    } 

    public Long getPage() {
        return page;
    } 

    public void setPage(Long page) {
        this.page = page; 
    } 


}
