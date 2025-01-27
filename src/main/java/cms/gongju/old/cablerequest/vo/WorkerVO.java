package cms.gongju.old.cablerequest.vo;

import lombok.Data;

import java.util.Date;

/**
 * TB_WORKER 테이블 매핑 VO
 */
@Data
public class WorkerVO {
    private Long workerId;       // WORKER_ID
    private String companyName;  // 회사명
    private String jobTitle;     // 직책
    private String workerName;   // 성명
    private String contact;      // 연락처
    private String etcInfo;      // 기타 정보
    private String regId;        // 등록자
    private Date regDt;          // 등록일시
    private String updId;        // 수정자
    private Date updDt;          // 수정일시
}
