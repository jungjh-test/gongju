package cms.gongju.cablerequest.mapper;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface WorkerMapper {

    /**
     * 전체 작업자 목록
     * - Map 형태로 resultType="map"
     */
    List<Map<String, Object>> selectAll();

    List<Map<String,Object>> search(Map<String,Object> param);

    List<Map<String,Object>> selectWorkerList(Map<String,Object> param);

    int insertWorker(Map<String,Object> param);
}
