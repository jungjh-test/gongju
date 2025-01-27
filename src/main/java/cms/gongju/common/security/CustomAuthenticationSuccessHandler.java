package cms.gongju.common.security;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class CustomAuthenticationSuccessHandler implements AuthenticationSuccessHandler {

    @Autowired
    public configService configService;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        // 인증 성공 후 동작 정의
        CustomUser customUser = (CustomUser) authentication.getPrincipal();
        String userId = customUser.getMember().getUserId();

        configService.updateUserLogin(userId);

        String firstPage = customUser.getMember().getFirstPage();
        String redirectUrl = configService.getFirstPageUrl(firstPage);
        // String redirectUrl = "/cable/agency/view";  // 동적으로 URL 설정 가능
        response.sendRedirect(redirectUrl);         // 성공 시 리다이렉트
    }
}

