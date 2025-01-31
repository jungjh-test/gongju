package cms.gongju.cablerequest.service;

import cms.gongju.cablerequest.mapper.CableRequestMapper;
import cms.gongju.cablerequest.vo.CableRequestVO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 케이블 포설 신청/관리 비즈니스 로직
 */
@Service
@RequiredArgsConstructor
public class CableRequestService {

    private final CableRequestMapper cableRequestMapper;

    /**
     * 포설 신청 목록을 조회
     * @param paramMap 검색 조건
     * @return
     */
    public List<Map<String, Object>> selectRequestList(Map<String, Object> paramMap) {
        return cableRequestMapper.selectCableRequestList(paramMap);
    }

    /**
     * 특정 신청 ID로 케이블 신청 정보를 조회 (기본정보 + 필요시 세부정보)
     * @param requestId
     * @return
     */
    public CableRequestVO selectCableRequest(Long requestId) {
        return cableRequestMapper.selectCableRequest(requestId);
    }

    /**
     * 포설 신청 저장
     * (신규면 Insert, 기존이면 Update)
     * @param paramMap
     * @return
     */
    public Map<String, Object> saveCableRequest(Map<String, Object> paramMap) {
        Map<String, Object> resultMap = new HashMap<>();
        // 신규/기존 판별 로직(예: requestId 값이 유무)
        if(paramMap.get("requestId") == null) {
            // Insert
            cableRequestMapper.insertCableRequest(paramMap);
            // 만약 세부 작업내역, 작업자정보도 함께 저장해야 하면 paramMap 내 리스트를 반복처리
        } else {
            // Update
            cableRequestMapper.updateCableRequest(paramMap);
            // 세부내역 업데이트 로직 등등
        }
        resultMap.put("result", "SUCCESS");
        return resultMap;
    }

    /**
     * 팝업에서 작업자 목록 조회
     */
    public List<Map<String, Object>> selectWorkerList(Map<String, Object> paramMap) {
        return cableRequestMapper.selectWorkerList(paramMap);
    }

    /**
     * (예시) 장비 정보 저장
     */
    public Map<String, Object> insertEqpList(Map<String, Object> paramMap) {
        Map<String, Object> resultMap = new HashMap<>();
        // 구현부는 필요에 따라 작성
        cableRequestMapper.insertEquipmentInfo(paramMap);
        resultMap.put("result", "OK");
        return resultMap;
    }
}
