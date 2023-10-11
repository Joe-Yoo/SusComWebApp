package com.example.restservice;

public enum CommuteOption {
    WALKING(0),
    BIKING(1),
    GAS_CAR(2),
    ELECTRIC_CAR(3),
    BUS(4),
    TRAIN(5);

    public final int option;
    CommuteOption(int value) {
        option = value;
    }

    public int getOption() {
        return option;
    }
}