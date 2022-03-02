package com.example.personliste;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
    public class PersonController {

        public final List<Person> personRegister = new ArrayList<>();

        @PostMapping("/lagre")
        public void lagrePerson(Person person){
            personRegister.add(person);
        }

        @GetMapping("/hentAlle")
        public List<Person> hentAlle(){
            return personRegister;
        }

        @GetMapping("/slettAlle")
        public void slettAlle(){
            personRegister.clear();
        }
    }
