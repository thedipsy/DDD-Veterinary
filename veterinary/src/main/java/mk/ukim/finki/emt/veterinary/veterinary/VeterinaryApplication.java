package mk.ukim.finki.emt.veterinary.veterinary;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;

@SpringBootApplication
@ServletComponentScan
public class VeterinaryApplication {

    public static void main(String[] args) {
        SpringApplication.run(VeterinaryApplication.class, args);
    }

}
