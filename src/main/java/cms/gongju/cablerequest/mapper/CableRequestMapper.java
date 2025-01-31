package cms.gongju.cablerequest.mapper;

import cms.gongju.cablerequest.vo.CableRequestVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

/**
 * 케이블 포설 신청 관련 MyBatis 매퍼 인터페이스
 */
@Mapper
public interface CableRequestMapper {

    // 포설 신청 목록
    List<Map<String, Object>> selectCableRequestList(Map<String, Object> paramMap);

    // 단일 신청 조회
    CableRequestVO selectCableRequest(Long requestId);

    // 신청 Insert
    int insertCableRequest(Map<String, Object> paramMap);

    // 신청 Update
    int updateCableRequest(Map<String, Object> paramMap);

    // 작업자 목록 조회
    List<Map<String, Object>> selectWorkerList(Map<String, Object> paramMap);

    // 장비정보 Insert (예시)
    int insertEquipmentInfo(Map<String, Object> paramMap);
}
