package cms.gongju.operation.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import cms.gongju.operation.service.groupService;

import java.util.Map;

/**
 * 운영관리 > 계정그룹
 */
@Slf4j
@CrossOrigin(origins = "*", allowedHeaders = "*") /* CORS 어노테이션 */
@Controller
@RequestMapping("/operation/group")
public class groupController {

    public groupService groupService;

    groupController (groupService groupService) {
        this.groupService = groupService;
    }

    /**
     * 운영관리 > 계정그룹 > 조회 > 뷰 페이지
     *
     * @return 계정그룹 뷰 페이지
     */
    @GetMapping("/view")
    public String view() {
        return "views/operation/group/view";
    }

    /**
     * 계정그룹 목록 조회
     *
     * 계정그룹 목록
     */
    @PostMapping("/list")
    @ResponseBody
    public Map<String, Object> getGroupList() {
        return groupService.findAllGroups();
    }

    /**
     * 중복 계정그룹ID 체크
     *
     * @return 중복 계정그룹ID 여부
     */
    @PostMapping("/duplicate")
    @ResponseBody
    public Map<String, Object> checkGroupId(@RequestBody Map<String, Object> paramMap) {
        return groupService.checkDuplicateId(paramMap);
    }

    /**
     * 계정그룹 등록
     *
     * @param paramMap 계정그룹 등록 데이터
     * @return 결과 메시지
     */
    @PostMapping("/create")
    @ResponseBody
    public Map<String, Object> createGroup(@RequestBody Map<String, Object> paramMap) {
        return groupService.createGroupInfo(paramMap);
    }

    /**
     * 계정그룹 삭제
     *
     * @param paramMap 삭제할 계정그룹 ID
     * @return 결과 메시지
     */
    @PostMapping("/delete")
    @ResponseBody
    public Map<String, Object> deleteGroup(@RequestBody Map<String, Object> paramMap) {
        return groupService.deleteGroupInfo(paramMap);
    }
}
