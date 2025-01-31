package cms.gongju.cablerequest.controller;

import cms.gongju.cablerequest.service.RemoveRequestService;
import cms.gongju.cablerequest.vo.CableRequestVO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * 제거신청 전용 Controller
 * REQUEST_TYPE='REMOVE'
 */
@Controller
@RequiredArgsConstructor
@RequestMapping("/cable/remove")
public class RemoveRequestController {

    private final RemoveRequestService removeRequestService;

    /**
     * 제거신청 목록 화면
     */
    @GetMapping("/list")
    public String removeRequestList() {
        // 목록 페이지
        return "views/cableequest/removeRequestList";
    }

    /**
     * 제거신청 목록 데이터(AJAX)
     */
    @ResponseBody
    @PostMapping("/getList")
    public Object getRemoveRequestList(@RequestBody Map<String, Object> paramMap) {
        return removeRequestService.selectRemoveRequestList(paramMap);
    }

    /**
     * 제거신청 작성/수정 화면
     */
    @GetMapping("/form")

    public String requestForm(@RequestParam(value="requestId", required=false) Long requestId, Model model) {
        if(requestId != null) {
            CableRequestVO vo = removeRequestService.selectRemoveRequest(requestId);
            model.addAttribute("cableRequestVO", vo);
        } else {
            // 신규: requestType='REMOVE'
            CableRequestVO vo = new CableRequestVO();
            vo.setRequestType("REMOVE");
            model.addAttribute("cableRequestVO", vo);
        }
        return "views/cablerequest/removeRequest";
    }

    /**
     * 제거신청 저장(AJAX)
     */
    @ResponseBody
    @PostMapping("/save")
    public Map<String, Object> saveRemoveRequest(@RequestBody Map<String, Object> paramMap) {
        // 예: 로그인 사용자
        paramMap.put("loginUserId", "adminUser");
        return removeRequestService.saveRemoveRequest(paramMap);
    }
}
