package app;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
@Data
@Entity
public class Post {
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        private Long PostId;

        private String username;

        private String token;

        private String content;

        private String publishTime ;

        private int comment_count;

        public Post() {

        }


}
