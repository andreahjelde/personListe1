package com.example.personliste.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;


@RestController
    public class PersonController {

        public final List<Person> personRegister = new ArrayList<>();

        @PostMapping("http://localhost:8080/lagre")
        public void lagrePerson(Person person){
            personRegister.add(person);
        }

        @GetMapping("http://localhost:8080/hentAlle")
        public List<Person> hentAlle(){
            return personRegister;
        }

        @GetMapping("http://localhost:8080/slettAlle")
        public void slettAlle(){
            personRegister.clear();
        }
    }
