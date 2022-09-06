package mk.ukim.finki.emt.veterinary.veterinary.Config;

import lombok.AllArgsConstructor;
import mk.ukim.finki.emt.veterinary.veterinary.Config.filters.JWTAuthorizationFilter;
import mk.ukim.finki.emt.veterinary.veterinary.Config.filters.JwtAuthenticationFilter;
import mk.ukim.finki.emt.veterinary.veterinary.services.impl.VeterinaryService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.core.annotation.Order;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.PasswordEncoder;

@Order(200)
@Configuration
@AllArgsConstructor
public class JWTWebSecurityConfig extends WebSecurityConfigurerAdapter {

    private final PasswordEncoder passwordEncoder;
    private final CustomUsernamePasswordAuthenticationProvider authenticationProvider;
    private final VeterinaryService veterinaryService;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors().and().csrf().disable()
                .authorizeRequests()
                .antMatchers("/api/**").permitAll()
                .anyRequest()
                .authenticated()
                .and()
                .addFilter(new JwtAuthenticationFilter(authenticationManager(), veterinaryService, passwordEncoder))
                .addFilter(new JWTAuthorizationFilter(authenticationManager(), veterinaryService))
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }
}

