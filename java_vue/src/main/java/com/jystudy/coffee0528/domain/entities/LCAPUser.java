package com.jystudy.coffee0528.domain.entities; 

import com.fasterxml.jackson.annotation.JsonAutoDetect; 
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility; 
import com.fasterxml.jackson.annotation.JsonIgnoreProperties; 
import com.jystudy.coffee0528.annotation.Label; 
import com.jystudy.coffee0528.config.DateTimeFormatConfiguration; 
import com.jystudy.coffee0528.domain.enumeration.UserStatusEnumEnum; 
import com.jystudy.coffee0528.domain.enumeration.UserSourceEnumEnum; 
import com.fasterxml.jackson.annotation.JsonFormat; 

@JsonIgnoreProperties(ignoreUnknown = true)
@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY,getterVisibility = JsonAutoDetect.Visibility.NONE)
public class LCAPUser {

    @Label("主键")
    @javax.validation.constraints.NotNull
    public Long id;
    @Label("创建时间")
    @JsonFormat(pattern = DateTimeFormatConfiguration.ZONED_DATETIME_FORMAT,timezone = DateTimeFormatConfiguration.DEFAULT_TIMEZONE)
    public java.time.ZonedDateTime createdTime;
    @Label("更新时间")
    @JsonFormat(pattern = DateTimeFormatConfiguration.ZONED_DATETIME_FORMAT,timezone = DateTimeFormatConfiguration.DEFAULT_TIMEZONE)
    public java.time.ZonedDateTime updatedTime;
    @Label("用户id")
    @javax.validation.constraints.NotNull
    public String userId;
    @Label("用户名")
    @javax.validation.constraints.NotNull
    public String userName;
    @Label("登录密码")
    public String password;
    @Label("手机号")
    public String phone;
    @Label("邮箱")
    public String email;
    @Label("昵称")
    public String displayName;
    @Label("状态")
    public UserStatusEnumEnum status = UserStatusEnumEnum.FIELD_Normal;
    @Label("用户来源")
    @javax.validation.constraints.NotNull
    public UserSourceEnumEnum source = UserSourceEnumEnum.FIELD_Normal;
    @Label("上级领导")
    public String directLeaderId;
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

    public String getUserId() {
        return userId;
    } 

    public void setUserId(String userId) {
        this.userId = userId; 
    } 

    public String getUserName() {
        return userName;
    } 

    public void setUserName(String userName) {
        this.userName = userName; 
    } 

    public String getPassword() {
        return password;
    } 

    public void setPassword(String password) {
        this.password = password; 
    } 

    public String getPhone() {
        return phone;
    } 

    public void setPhone(String phone) {
        this.phone = phone; 
    } 

    public String getEmail() {
        return email;
    } 

    public void setEmail(String email) {
        this.email = email; 
    } 

    public String getDisplayName() {
        return displayName;
    } 

    public void setDisplayName(String displayName) {
        this.displayName = displayName; 
    } 

    public UserStatusEnumEnum getStatus() {
        return status;
    } 

    public void setStatus(UserStatusEnumEnum status) {
        this.status = status; 
    } 

    public UserSourceEnumEnum getSource() {
        return source;
    } 

    public void setSource(UserSourceEnumEnum source) {
        this.source = source; 
    } 

    public String getDirectLeaderId() {
        return directLeaderId;
    } 

    public void setDirectLeaderId(String directLeaderId) {
        this.directLeaderId = directLeaderId; 
    } 


}
