package mk.ukim.finki.emt.veterinary.veterinary.services;

public interface IEmailService {

    void sendEmail(String to, String topic, String body);

}

