package com.jystudy.coffee0528.domain.structure.anonymous; 

import com.fasterxml.jackson.annotation.JsonAutoDetect; 
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility; 

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY,getterVisibility = JsonAutoDetect.Visibility.NONE)
public class AnonymousStructure_B839FB3CE3491917389D171CBA0769D5 {

    public Long id;
    public String name;
    public String description;
    public Long getId() {
        return id;
    } 

    public void setId(Long id) {
        this.id = id; 
    } 

    public String getName() {
        return name;
    } 

    public void setName(String name) {
        this.name = name; 
    } 

    public String getDescription() {
        return description;
    } 

    public void setDescription(String description) {
        this.description = description; 
    } 


}
