package cms.gongju.cablerequest.mapper;

import cms.gongju.cablerequest.vo.CableRequestVO;
import org.apache.ibatis.annotations.Mapper;
import java.util.List;
import java.util.Map;

/**
 * 제거신청 전용 Mapper
 * REQUEST_TYPE='REMOVE'
 */
@Mapper
public interface RemoveRequestMapper {

    // 목록 조회(제거신청)
    List<CableRequestVO> selectRemoveRequestList(Map<String, Object> paramMap);

    // 단건 조회(제거신청)
    CableRequestVO selectRemoveRequest(Long requestId);

    // Insert(REQUEST_TYPE='REMOVE')
    int insertRemoveRequest(Map<String, Object> paramMap);

    // Update(REQUEST_TYPE='REMOVE')
    int updateRemoveRequest(Map<String, Object> paramMap);
}
