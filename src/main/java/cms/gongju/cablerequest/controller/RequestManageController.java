package cms.gongju.cablerequest.controller;

import cms.gongju.cablerequest.service.RequestManageService;
import cms.gongju.cablerequest.vo.CableRequestVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

/**
 * 포설신청/제거신청 통합 목록 + 승인/반려/삭제 처리를 담당하는 Controller
 */
@Slf4j
@Controller
@RequiredArgsConstructor
@RequestMapping("/cable/manage")
public class RequestManageController {

    private final RequestManageService requestManageService;

    /**
     * [목록 화면]
     * 화면에서 검색조건(기관명, 구분, 승인여부 등)을 입력받아 AJAX로 목록 조회
     */
    @GetMapping("/list")
    public String requestManageList(Model model) {
        // 필요 시, 초기 검색 파라미터를 model에 담을 수 있음
        log.info("longing test");
        return "views/cablerequest/requestManageList";
    }

    /**
     * [목록 조회 AJAX]
     * 포설(REQUEST_TYPE='INSTALL') + 제거(REQUEST_TYPE='REMOVE')를 모두 포함
     * 검색 조건에 따라 필터링
     */
    @ResponseBody
    @PostMapping("/getList")
    public List<CableRequestVO> getRequestList(@RequestBody Map<String, Object> paramMap) {
        // 예) paramMap에 기관명(orgName), 구분(requestType), 승인여부(approvalStatus) 등
        return requestManageService.selectRequestList(paramMap);
    }

    /**
     * [승인 처리 AJAX]
     * 다중 신청ID에 대해 승인처리 (APPROVAL_STATUS='승인')
     */
    @ResponseBody
    @PostMapping("/approve")
    public Map<String, Object> approveRequests(@RequestBody Map<String, Object> paramMap) {
        // paramMap 에 requestIdList(배열), loginUserId 등
        return requestManageService.approveRequests(paramMap);
    }

    /**
     * [반려 처리 AJAX]
     * 다중 신청ID에 대해 반려처리 (APPROVAL_STATUS='반려')
     */
    @ResponseBody
    @PostMapping("/reject")
    public Map<String, Object> rejectRequests(@RequestBody Map<String, Object> paramMap) {
        // paramMap 에 requestIdList(배열), 반려 사유, loginUserId 등
        return requestManageService.rejectRequests(paramMap);
    }

    /**
     * [삭제 처리 AJAX]
     * 다중 신청ID에 대해 논리삭제 (DEL_YN='Y')
     */
    @ResponseBody
    @PostMapping("/delete")
    public Map<String, Object> deleteRequests(@RequestBody Map<String, Object> paramMap) {
        // paramMap 에 requestIdList(배열), loginUserId 등
        return requestManageService.deleteRequests(paramMap);
    }
}