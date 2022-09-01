package mk.ukim.finki.emt.veterinary.veterinary.services.impl;

import lombok.AllArgsConstructor;
import mk.ukim.finki.emt.veterinary.veterinary.Config.Constants;
import mk.ukim.finki.emt.veterinary.veterinary.services.IEmailService;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class EmailService implements IEmailService {

    private final JavaMailSender javaMailSender;

    /**
     * Sending a mail using JavaMailSender
     * Purpose is to inform the employee of some changes that affects them
     * Mail is send from our email account
     */
    public void sendEmail(String to, String topic, String body){
        SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
        String fromEmail = Constants.EMAIL_FROM;
        simpleMailMessage.setFrom(fromEmail);
        simpleMailMessage.setTo(to);
        simpleMailMessage.setSubject(topic);
        simpleMailMessage.setText(body);
        javaMailSender.send(simpleMailMessage);
    }
}
