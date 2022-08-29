package mk.ukim.finki.emt.veterinary.appointment.xport.client;

import mk.ukim.finki.emt.veterinary.appointment.domain.valueobjects.helper.Veterinary;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.client.SimpleClientHttpRequestFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.Collections;
import java.util.List;

@Service
public class VeterinaryClient {

    private final RestTemplate restTemplate;
    private final String serverUrl;

    public VeterinaryClient(@Value("${app.veterinary.url}") String serverUrl) {
        this.serverUrl = serverUrl;
        this.restTemplate = new RestTemplate();
        var requestFactory = new SimpleClientHttpRequestFactory();
        this.restTemplate.setRequestFactory(requestFactory);
    }

    private UriComponentsBuilder uri(){
        return UriComponentsBuilder.fromUriString(this.serverUrl);
    }

    public List<Veterinary> findAll(){
        try{
            return restTemplate.exchange(
                    uri().path("/api/veterinary").build().toUri(),
                    HttpMethod.GET,
                    null,
                    new ParameterizedTypeReference<List<Veterinary>>(){}).getBody();
        } catch (Exception ex){
            return Collections.emptyList();
        }
    }
}
