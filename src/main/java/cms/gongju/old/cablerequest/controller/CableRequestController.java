package cms.gongju.old.cablerequest.controller;

import cms.gongju.old.cablerequest.service.CableRequestService;
import cms.gongju.old.cablerequest.vo.CableRequestVO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

/**
 * 케이블 포설 신청/관리 화면 컨트롤러
 */
@Controller
@RequiredArgsConstructor
@RequestMapping("/cable/request")
public class CableRequestController {

    private final CableRequestService cableRequestService;

    /**
     * 포설 신청 목록 화면
     * @param model
     * @return 목록 페이지
     */
    @GetMapping("/list")
    public String requestList(Model model) {
        // 화면에서 검색조건/파라미터 등을 받았다면, model에 담아서 넘길 수 있음
        return "views/cablerequest/requestList";
    }

    /**
     * 포설 신청 목록을 AJAX로 조회
     * @param paramMap 검색 조건(기관명, 승인여부 등)
     * @return 신청 목록
     */
    @ResponseBody
    @PostMapping("/getList")
    public List<Map<String, Object>> getRequestList(@RequestBody Map<String, Object> paramMap) {
        // DB 조회
        return cableRequestService.selectRequestList(paramMap);
    }

    /**
     * 포설 신청 작성/수정 화면
     * @param requestId (수정 시) 신청 ID
     * @param model
     * @return 신청 작성/수정 폼 화면
     */
    @GetMapping("/form")
    public String requestForm(@RequestParam(value="requestId", required=false) Long requestId,
                              Model model) {
        if(requestId != null) {
            // 기존 신청정보 불러오기
            CableRequestVO cableRequestVO = cableRequestService.selectCableRequest(requestId);
            model.addAttribute("cableRequestVO", cableRequestVO);
        } else {
            // 신규 작성
            model.addAttribute("cableRequestVO", new CableRequestVO());
        }
        return "views/cablerequest/requestForm";
    }

    /**
     * 포설 신청 저장 (AJAX)
     * @param paramMap 화면에서 넘어오는 신청정보(상단 요청자/기관, 작업목적, 작업내역 등)
     * @return 처리결과
     */
    @ResponseBody
    @PostMapping("/saveRequest")
    public Map<String, Object> saveRequest(@RequestBody Map<String, Object> paramMap) {
        // 서비스에서 DB Insert/Update 처리
        return cableRequestService.saveCableRequest(paramMap);
    }

    /**
     * 작업자 선택 팝업 페이지
     * @return
     */
    @GetMapping("/workerPopup")
    public String workerPopup() {
        return "views/cablerequest/workerPopup";
    }

    /**
     * 작업자 목록 조회 (팝업) - AJAX
     * @param paramMap 검색조건(회사명, 성명 등)
     * @return 작업자 목록
     */
    @ResponseBody
    @PostMapping("/getWorkerList")
    public List<Map<String, Object>> getWorkerList(@RequestBody Map<String, Object> paramMap) {
        return cableRequestService.selectWorkerList(paramMap);
    }

    /**
     * 예시) 임의 장비 저장 AJAX 예시
     * @param paramMap
     * @return
     */
    @ResponseBody
    @PostMapping("/saveEquipmentInfo")
    public Map<String, Object> saveEquipmentInfo(@RequestBody Map<String, Object> paramMap) {
        // 질문에서 주어진 예시와 같은 형태로 작성
        return cableRequestService.insertEqpList(paramMap);
    }
}

