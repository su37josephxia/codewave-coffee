package com.jystudy.coffee0528.domain.structure; 

import com.fasterxml.jackson.annotation.JsonAutoDetect; 
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility; 
import com.jystudy.coffee0528.annotation.Label; 

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY,getterVisibility = JsonAutoDetect.Visibility.NONE)
public class LCAPComparisonResultStructure {

    @Label("标题")
    public String text;
    @Label("值")
    public String value;
    public String getText() {
        return text;
    } 

    public void setText(String text) {
        this.text = text; 
    } 

    public String getValue() {
        return value;
    } 

    public void setValue(String value) {
        this.value = value; 
    } 


}
