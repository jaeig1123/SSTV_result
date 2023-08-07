package com.example.sstv.common;

/*
* 1. controller 반환시 Data 객체에 반환 정보를 담아서 반환
* 2. result에는 success, fail 담기
* 3. data에는 반환 할 data 담기
* */

public class Data {

    private String result;
    private Object data;

    public Object getData2() {
        return data2;
    }

    public void setData2(Object data2) {
        this.data2 = data2;
    }

    private Object data2;

    public Data(String result, Object data) {
        this.result = result;
        this.data = data;
    }
    public Data(String result, Object data, Object data2) {
        this.result = result;
        this.data = data;
        this.data2 = data2;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }


}
