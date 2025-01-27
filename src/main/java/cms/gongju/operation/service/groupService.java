package cms.gongju.operation.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@Service
public class groupService {

    public groupMapper groupMapper;

    public groupService(groupMapper groupMapper) {
        this.groupMapper = groupMapper;
    }

    public Map<String, Object> findAllGroups() {
        Map<String, Object> returnMap = new HashMap<>();
        returnMap.put("errorCode",false);

        try{
            List<Map<String, Object>> rows = groupMapper.findAllGroups();
            int total = groupMapper.findAllGroupsCount();

            returnMap.put("rows", rows);
            returnMap.put("total", total);
            returnMap.put("errorCode",true);
        }
        catch (Exception e){
            log.error(e.getMessage());
        }

        return returnMap;
    }

    /**
     * 중복 계정그룹ID 체크
     *
     * @return 중복 계정그룹ID 여부
     */
    public Map<String, Object> checkDuplicateId(Map<String, Object> paramMap) {
        Map<String, Object> returnMap = new HashMap<>();
        returnMap.put("errorCode",false);

        try {
            String id = (String) paramMap.get("groupId");
            int isDuplicate = groupMapper.checkDuplicateId(id);

            returnMap.put("isDuplicate", isDuplicate);
            returnMap.put("errorCode",true);

        } catch (Exception e) {
            log.error(e.getMessage());
        }

        return returnMap;
    }

    /**
     * 계정그룹 등록
     *
     * @param paramMap 계정그룹 등록 데이터
     * @return 결과 메시지
     */
    public Map<String, Object> createGroupInfo(Map<String, Object> paramMap){
        Map<String, Object> returnMap = new HashMap<>();
        returnMap.put("errorCode",false);

        try {
            groupMapper.createGroupInfo(paramMap);
            returnMap.put("errorCode",true);
        }
        catch (Exception e){
            log.error(e.getMessage());
        }

        return returnMap;
    }

    /**
     * 계정그룹 삭제
     *
     * @param paramMap 삭제할 계정그룹 ID
     * @return 결과 메시지
     */
    @SuppressWarnings("unchecked")
    public Map<String, Object> deleteGroupInfo(Map<String, Object> paramMap){
        Map<String, Object> returnMap = new HashMap<>();
        returnMap.put("errorCode",false);

        try {
            List<String> groupIds = (List<String>) paramMap.get("groupId");
            for (String groupId : groupIds) {
                groupMapper.deleteGroupInfo(groupId);
            }

            returnMap.put("errorCode",true);
        }
        catch (Exception e){
            log.error(e.getMessage());
        }

        return returnMap;
    }

}
