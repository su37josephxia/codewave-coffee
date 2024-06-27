package com.jystudy.coffee0528.domain.structure.connector.qiweionlineconnector; 

import com.fasterxml.jackson.annotation.JsonAutoDetect; 
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility; 

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY,getterVisibility = JsonAutoDetect.Visibility.NONE)
public class Attrs2Structure {

    public com.jystudy.coffee0528.domain.structure.connector.qiweionlineconnector.WebStructure web;
    public String name;
    public com.jystudy.coffee0528.domain.structure.connector.qiweionlineconnector.Text2Structure text;
    public Long type;
    public com.jystudy.coffee0528.domain.structure.connector.qiweionlineconnector.WebStructure getWeb() {
        return web;
    } 

    public void setWeb(com.jystudy.coffee0528.domain.structure.connector.qiweionlineconnector.WebStructure web) {
        this.web = web; 
    } 

    public String getName() {
        return name;
    } 

    public void setName(String name) {
        this.name = name; 
    } 

    public com.jystudy.coffee0528.domain.structure.connector.qiweionlineconnector.Text2Structure getText() {
        return text;
    } 

    public void setText(com.jystudy.coffee0528.domain.structure.connector.qiweionlineconnector.Text2Structure text) {
        this.text = text; 
    } 

    public Long getType() {
        return type;
    } 

    public void setType(Long type) {
        this.type = type; 
    } 


}
