package com.jystudy.coffee0528.service.dto.filters.logic.binary.compare;

import com.jystudy.coffee0528.service.dto.filters.logic.binary.BinaryExpressionFilter;

/**
 * @Author: sys
 */
public class GtQueryFilter extends BinaryExpressionFilter {

    public GtQueryFilter() {
        this.operator = ">";
    }

    @Override
    public String sql(String dbType) {
        return String.format(" (%s > %s) ", left.sql(dbType), right.sql(dbType));
    }
}
