package cms.gongju.cablerequest.service;

import cms.gongju.cablerequest.mapper.RequestManageMapper;
import cms.gongju.cablerequest.vo.CableRequestVO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;

/**
 * 포설/제거 신청 목록 및 승인/반려/삭제를 처리하는 Service
 */
@Service
@RequiredArgsConstructor
public class RequestManageService {

    private final RequestManageMapper requestManageMapper;

    /**
     * 목록 조회: requestType(선택), orgName(선택), approvalStatus(선택) 등
     */
    public List<CableRequestVO> selectRequestList(Map<String, Object> paramMap) {
        return requestManageMapper.selectRequestList(paramMap);
    }

    /**
     * 승인 처리 (APPROVAL_STATUS='승인')
     */
    public Map<String, Object> approveRequests(Map<String, Object> paramMap) {
        Map<String, Object> result = new HashMap<>();

        // requestIdList (List<Long> 또는 List<Integer>)
        List<Long> requestIdList = (List<Long>) paramMap.get("requestIdList");
        // 승인자 ID
        String loginUserId = (String) paramMap.get("loginUserId");

        if(requestIdList != null && !requestIdList.isEmpty()) {
            requestManageMapper.updateApprovalStatus(requestIdList, "승인", loginUserId);
            result.put("result", "SUCCESS");
            result.put("count", requestIdList.size());
        } else {
            result.put("result", "FAIL");
            result.put("message", "No requestIds");
        }

        return result;
    }

    /**
     * 반려 처리 (APPROVAL_STATUS='반려')
     */
    public Map<String, Object> rejectRequests(Map<String, Object> paramMap) {
        Map<String, Object> result = new HashMap<>();
        List<Long> requestIdList = (List<Long>) paramMap.get("requestIdList");
        String loginUserId = (String) paramMap.get("loginUserId");
        // 반려사유 (필요 시)
        String rejectReason = (String) paramMap.get("rejectReason");

        if(requestIdList != null && !requestIdList.isEmpty()) {
            requestManageMapper.updateApprovalStatus(requestIdList, "반려", loginUserId);
            // 반려사유를 TB_CABLE_REQUEST.approval_remarks 등에 저장할 수도 있음
            // ex) requestManageMapper.updateRejectReason(...)
            result.put("result", "SUCCESS");
            result.put("count", requestIdList.size());
        } else {
            result.put("result", "FAIL");
            result.put("message", "No requestIds");
        }

        return result;
    }

    /**
     * 삭제 처리 (DEL_YN='Y')
     */
    public Map<String, Object> deleteRequests(Map<String, Object> paramMap) {
        Map<String, Object> result = new HashMap<>();
        List<Long> requestIdList = (List<Long>) paramMap.get("requestIdList");
        String loginUserId = (String) paramMap.get("loginUserId");

        if(requestIdList != null && !requestIdList.isEmpty()) {
            requestManageMapper.updateDelYn(requestIdList, loginUserId);
            result.put("result", "SUCCESS");
            result.put("count", requestIdList.size());
        } else {
            result.put("result", "FAIL");
            result.put("message", "No requestIds");
        }

        return result;
    }
}
