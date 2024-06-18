package com.jystudy.coffee0528.domain.ui;

public class DragAndDropEvent<T> {
    public SelectData<T> source;
    public SelectData<T> target;
    public SelectData<T> finalSource;
    public String position;
    public DragAndDropUpdateData<T> updateData;
}
