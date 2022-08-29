package mk.ukim.finki.emt.veterinary.appointment.xport.client;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.client.SimpleClientHttpRequestFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@Service
public class PatientClient {

    private final RestTemplate restTemplate;
    private final String serverUrl;

    public PatientClient(@Value("${app.patient.url}") String serverUrl) {
        this.serverUrl = serverUrl;
        this.restTemplate = new RestTemplate();
        var requestFactory = new SimpleClientHttpRequestFactory();
        this.restTemplate.setRequestFactory(requestFactory);
    }

    private UriComponentsBuilder uri(){
        return UriComponentsBuilder.fromUriString(this.serverUrl);
    }

}
