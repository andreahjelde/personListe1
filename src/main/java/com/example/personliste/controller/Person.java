package com.example.personliste.controller;

public class Person {
    private String navn;
    private String alder;
    private String adresse;

    public Person(String navn, String alder, String adresse){
        this.navn = navn;
        this.alder = alder;
        this.adresse = adresse;
    }

    public Person(){

    }

    public String getNavn(){
        return navn;
    }

    public void setNavn(String navn){
        this.navn = navn;
    }

    public String getAlder(){
        return alder;
    }
    public void setAlder(String alder){
        this.alder = alder;
    }

    public String getAdresse(){
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }
}
