package com.jystudy.coffee0528.domain.enumeration; 

import com.fasterxml.jackson.databind.annotation.JsonDeserialize; 
import com.fasterxml.jackson.annotation.JsonValue; 
import com.fasterxml.jackson.databind.JsonDeserializer; 
import com.fasterxml.jackson.databind.DeserializationContext; 
import com.fasterxml.jackson.core.JsonParser; 

@JsonDeserialize(using = OrderStatusEnumEnum.OrderStatusEnumEnumDeserializer.class)
public enum OrderStatusEnumEnum implements BaseEnum<OrderStatusEnumEnum, String>{

    FIELD_0("0", "未付款"),

    FIELD_1("1", "制作中"),

    FIELD_2("2", "已完成"),; 

    public final String code;
    public final String desc;
OrderStatusEnumEnum(String code, String desc) {
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



    public static class OrderStatusEnumEnumDeserializer extends JsonDeserializer<OrderStatusEnumEnum>{

            @Override
            public OrderStatusEnumEnum deserialize(JsonParser p, DeserializationContext ctxt) {
                String code;
                try {
                    code = p.getValueAsString(); 
                } catch (Exception e) {
                    return null;
                } 
                for (OrderStatusEnumEnum anEnum : OrderStatusEnumEnum.values()) {
                    if (anEnum.getCode().toString().equals(code)) {
                        return anEnum;
                    } 

                } 
                return null;
            } 


    }


}
