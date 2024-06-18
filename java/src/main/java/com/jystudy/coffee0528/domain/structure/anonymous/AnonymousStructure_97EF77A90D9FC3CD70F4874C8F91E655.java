package com.jystudy.coffee0528.domain.structure.anonymous; 

import com.fasterxml.jackson.annotation.JsonAutoDetect; 
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility; 
import com.jystudy.coffee0528.domain.entities.SlideEntity; 

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY,getterVisibility = JsonAutoDetect.Visibility.NONE)
public class AnonymousStructure_97EF77A90D9FC3CD70F4874C8F91E655 {

    public SlideEntity slide;
    public SlideEntity getSlide() {
        return slide;
    } 

    public void setSlide(SlideEntity slide) {
        this.slide = slide; 
    } 


}
