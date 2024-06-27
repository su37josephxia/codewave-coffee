package com.jystudy.coffee0528.domain.structure.anonymous; 

import com.fasterxml.jackson.annotation.JsonAutoDetect; 
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility; 
import java.util.ArrayList; 
import java.util.List; 

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY,getterVisibility = JsonAutoDetect.Visibility.NONE)
public class AnonymousStructure_C62563F987611AA3C114D1DD3305EB9B {

    public List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_6BA326473ABCE1D47D16FA8EDBA33335> list = new ArrayList<>();
    public Long total;
    public List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_6BA326473ABCE1D47D16FA8EDBA33335> getList() {
        return list;
    } 

    public void setList(List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_6BA326473ABCE1D47D16FA8EDBA33335> list) {
        this.list = list; 
    } 

    public Long getTotal() {
        return total;
    } 

    public void setTotal(Long total) {
        this.total = total; 
    } 


}
