package com.jystudy.coffee0528.service.dto.filters.logic.binary.logicCalculate;

import com.jystudy.coffee0528.service.dto.filters.logic.binary.BinaryExpressionFilter;

/**
 * @Author: sys
 */
public class AndQueryFilter extends BinaryExpressionFilter {

    public AndQueryFilter() {
        this.operator = "&&";
    }

    @Override
    public String sql(String dbType) {
        return String.format(" (%s AND %s) ", left.sql(dbType), right.sql(dbType));
    }
}
