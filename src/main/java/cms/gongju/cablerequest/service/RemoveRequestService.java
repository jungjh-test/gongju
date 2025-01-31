package cms.gongju.cablerequest.service;

import cms.gongju.cablerequest.mapper.RemoveRequestMapper;
import cms.gongju.cablerequest.vo.CableRequestVO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 제거신청 전용 Service
 * (REQUEST_TYPE='REMOVE')
 */
@Service
@RequiredArgsConstructor
public class RemoveRequestService {

    private final RemoveRequestMapper removeRequestMapper;

    /**
     * 제거신청 목록 조회
     */
    public List<CableRequestVO> selectRemoveRequestList(Map<String, Object> paramMap) {
        return removeRequestMapper.selectRemoveRequestList(paramMap);
    }

    /**
     * 제거신청 단건 조회
     */
    public CableRequestVO selectRemoveRequest(Long requestId) {
        return removeRequestMapper.selectRemoveRequest(requestId);
    }

    /**
     * 제거신청 저장 (신규/수정)
     */
    public Map<String, Object> saveRemoveRequest(Map<String, Object> paramMap) {
        Map<String, Object> result = new HashMap<>();
        Object reqId = paramMap.get("requestId");

        if(reqId == null || "".equals(reqId)) {
            // Insert
            removeRequestMapper.insertRemoveRequest(paramMap);
        } else {
            // Update
            removeRequestMapper.updateRemoveRequest(paramMap);
        }
        result.put("result", "SUCCESS");
        return result;
    }
}