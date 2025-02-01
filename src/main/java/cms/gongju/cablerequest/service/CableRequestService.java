package cms.gongju.cablerequest.service;

import cms.gongju.cablerequest.mapper.CableRequestMapper;
import cms.gongju.cablerequest.vo.CableRequestVO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
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
     */


    public Map<String,Object> saveCableRequest(Map<String,Object> param){
        Map<String,Object> result = new HashMap<>();
        // 1) requestInfo
        Map<String,Object> reqInfo = (Map<String,Object>) param.get("requestInfo");


        // MyBatis insert -> PK 주입 (useGeneratedKeys)
        // int rowCount = cableRequestMapper.insertCableRequest(reqInfo);
        // rowCount는 1(성공시), PK는 reqInfo.get("requestId")로 세팅됨
        cableRequestMapper.insertCableRequest(reqInfo);

        // Now, get the newly generated PK
        /*Long newRequestId = (Long) reqInfo.get("requestId");
        System.out.println("===> newRequestId = " + newRequestId);*/


        BigInteger bigVal = (BigInteger) reqInfo.get("requestId");
        long newRequestId = bigVal.longValue();
        System.out.println("===> newRequestId = " + newRequestId);

        // 2) workerList
        List<Map<String,Object>> workerList = (List<Map<String,Object>>) param.get("workerList");
        if(workerList != null){
            for(Map<String,Object> w : workerList){
                // workerId가 있어야만 매핑
                Object workerIdObj = w.get("workerId");
                if(workerIdObj != null){
                    // Insert into TB_REQUEST_WORKER
                    Map<String,Object> rwParam = new HashMap<>();
                    rwParam.put("requestId", newRequestId);
                    rwParam.put("workerId", workerIdObj);
                    cableRequestMapper.insertRequestWorker(rwParam);
                }
                // else (workerId == null) => skip
            }
        }

        // 3) detailList
        List<Map<String,Object>> detailList = (List<Map<String,Object>>) param.get("detailList");
        if(detailList!=null){
            for(Map<String,Object> d : detailList){
                d.put("requestId", newRequestId);
                cableRequestMapper.insertWorkDetail(d); // TB_CABLE_WORK_DETAIL
            }
        }

        result.put("result","SUCCESS");
        return result;
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
