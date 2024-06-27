package com.jystudy.coffee0528.domain.structure.connector.qiweionlineconnector; 

import com.fasterxml.jackson.annotation.JsonAutoDetect; 
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility; 
import java.util.ArrayList; 
import java.util.List; 

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY,getterVisibility = JsonAutoDetect.Visibility.NONE)
public class External_profile1Structure {

    public String external_corp_name;
    public com.jystudy.coffee0528.domain.structure.connector.qiweionlineconnector.Wechat_channels1Structure wechat_channels;
    public List<com.jystudy.coffee0528.domain.structure.connector.qiweionlineconnector.External_attr1Structure> external_attr = new ArrayList<>();
    public String getExternal_corp_name() {
        return external_corp_name;
    } 

    public void setExternal_corp_name(String external_corp_name) {
        this.external_corp_name = external_corp_name; 
    } 

    public com.jystudy.coffee0528.domain.structure.connector.qiweionlineconnector.Wechat_channels1Structure getWechat_channels() {
        return wechat_channels;
    } 

    public void setWechat_channels(com.jystudy.coffee0528.domain.structure.connector.qiweionlineconnector.Wechat_channels1Structure wechat_channels) {
        this.wechat_channels = wechat_channels; 
    } 

    public List<com.jystudy.coffee0528.domain.structure.connector.qiweionlineconnector.External_attr1Structure> getExternal_attr() {
        return external_attr;
    } 

    public void setExternal_attr(List<com.jystudy.coffee0528.domain.structure.connector.qiweionlineconnector.External_attr1Structure> external_attr) {
        this.external_attr = external_attr; 
    } 


}
