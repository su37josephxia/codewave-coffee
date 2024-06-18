package com.jystudy.coffee0528.web.controller.logics.dto; 


public class LCAPGetDataPermissionByResourceNameCustomizeControllerDto {

    public Long roleId;
    public String resourceName;
    public String resourceType;
    public Long getRoleId() {
        return roleId;
    } 

    public void setRoleId(Long roleId) {
        this.roleId = roleId; 
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


}
