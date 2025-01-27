package cms.gongju.cable.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 선번장관리 > 기관회선관리
 */
@Slf4j
@CrossOrigin(origins = "*", allowedHeaders = "*") /* CORS 어노테이션 */
@Controller
@RequestMapping("/cable/agency")
public class agencyController {

    /**
     * 선번장관리 > 기관회선관리 > 조회 > 뷰 페이지
     *
     * @return 기관회선관리 뷰 페이지
     */
    @GetMapping("/view")
    public String view(Authentication authentication) {
        return "views/cable/agencyLine/view";
    }
}
