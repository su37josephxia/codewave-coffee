package com.jystudy.coffee0528.domain.structure; 

import com.fasterxml.jackson.annotation.JsonAutoDetect; 
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility; 
import com.jystudy.coffee0528.annotation.Label; 

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY,getterVisibility = JsonAutoDetect.Visibility.NONE)
public class SidebarStructureStructure {

    @Label("内容")
    public String content;
    @Label("是否选中")
    public Boolean isSelect = false;
    @Label("值")
    public Long value;
    public String getContent() {
        return content;
    } 

    public void setContent(String content) {
        this.content = content; 
    } 

    public Boolean getIsSelect() {
        return isSelect;
    } 

    public void setIsSelect(Boolean isSelect) {
        this.isSelect = isSelect; 
    } 

    public Long getValue() {
        return value;
    } 

    public void setValue(Long value) {
        this.value = value; 
    } 


}
