
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class PostgresController {
    
    @PostMapping("/postgres")
    public String postgres(@RequestBody String data) {
        return "This is a sample API response from Spring Boot!";
    }

}
