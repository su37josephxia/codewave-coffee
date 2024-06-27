package com.jystudy.coffee0528.domain.enumeration; 

import com.fasterxml.jackson.databind.annotation.JsonDeserialize; 
import com.fasterxml.jackson.annotation.JsonValue; 
import com.fasterxml.jackson.databind.JsonDeserializer; 
import com.fasterxml.jackson.databind.DeserializationContext; 
import com.fasterxml.jackson.core.JsonParser; 

@JsonDeserialize(using = PickupMethodEnumEnum.PickupMethodEnumEnumDeserializer.class)
public enum PickupMethodEnumEnum implements BaseEnum<PickupMethodEnumEnum, String>{

    FIELD_0("0", "自取"),

    FIELD_1("1", "外送"),; 

    public final String code;
    public final String desc;
PickupMethodEnumEnum(String code, String desc) {
        this.code = code; 
        this.desc = desc; 
    } 

    @JsonValue
    public String getJsonValue() {
        return this.code;
    } 

    @Override
    public String getCode() {
        return code;
    } 

    @Override
    public String getDesc() {
        return desc;
    } 



    public static class PickupMethodEnumEnumDeserializer extends JsonDeserializer<PickupMethodEnumEnum>{

            @Override
            public PickupMethodEnumEnum deserialize(JsonParser p, DeserializationContext ctxt) {
                String code;
                try {
                    code = p.getValueAsString(); 
                } catch (Exception e) {
                    return null;
                } 
                for (PickupMethodEnumEnum anEnum : PickupMethodEnumEnum.values()) {
                    if (anEnum.getCode().toString().equals(code)) {
                        return anEnum;
                    } 

                } 
                return null;
            } 


    }


}
