/**
 * detailModalHot.js
 * - tb_eqp_temp 컬럼(JSON) -> Handsontable 매핑
 *   asset_id -> assetId
 *   config_id-> configId
 *   eqp_name -> eqpName
 *   host_name-> hostName
 *   model_name-> modelName (필요시)
 */

let startHot = null;
let endHot = null;
let startData = [];
let endData = [];

$(document).ready(function(){
    initStartHot();
    initEndHot();

    // 모달 열릴 때
    $('#detailModal').on('shown.bs.modal', function(){
        // 필요시 초기값 reset
    });

    // 출발지 검색
    $("#btnSearchStart").on("click", function(){
        loadSearchStart();
    });

    // 목적지 검색
    $("#btnSearchEnd").on("click", function(){
        loadSearchEnd();
    });

    // "추가" 버튼 -> 부모창
    $("#btnAddDetail").on("click", function(){
        addDetailToParent();
    });
});

/** 출발지(START) Handsontable */
function initStartHot(){
    const container = document.getElementById("startHot");
    startHot = new Handsontable(container, {
        data: startData,
        rowHeaders: true,
        colHeaders: ["선택","자산ID","구성ID","업무명","호스트명","포트"],
        columns: [
            // tb_eqp_temp + port(사용자입력)
            { data: "checked", type:"checkbox" },
            { data: "assetId",  type:"text", readOnly:true },
            { data: "configId", type:"text", readOnly:true },
            { data: "eqpName",  type:"text", readOnly:true },
            { data: "hostName", type:"text", readOnly:true },
            { data: "port",     type:"text" } // 사용자가 직접 입력
        ],
        width:"100%",
        height:300,
        licenseKey:"non-commercial-and-evaluation"
    });
}

/** 목적지(END) Handsontable */
function initEndHot(){
    const container = document.getElementById("endHot");
    endHot = new Handsontable(container, {
        data: endData,
        rowHeaders: true,
        colHeaders: ["선택","자산ID","구성ID","업무명","호스트명","포트"],
        columns: [
            { data: "checked",  type:"checkbox" },
            { data: "assetId",  type:"text", readOnly:true },
            { data: "configId", type:"text", readOnly:true },
            { data: "eqpName",  type:"text", readOnly:true },
            { data: "hostName", type:"text", readOnly:true },
            { data: "port",     type:"text" }
        ],
        width:"100%",
        height:300,
        licenseKey:"non-commercial-and-evaluation"
    });
}

/** 출발지 검색 */
function loadSearchStart(){
    let param = {
        assetId :  $("#startAssetIdSearch").val(),
        configId:  $("#startConfigIdSearch").val(),
        eqpName :  $("#startEqpNameSearch").val()
    };

    $.ajax({
        url: "/eqp/searchTemp",  // 예시
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(param),
        success: function(data){
            // data => [{ asset_id, config_id, eqp_name, host_name, model_name }, ...]
            startData = (data||[]).map(item => ({
                checked : false,
                // JSON field -> HS columns
                assetId : item.ASSET_ID,
                configId: item.CONFIG_ID,
                eqpName : item.EQP_NAME,
                hostName: item.HOST_NAME,
                modelName: item.MODEL_NAME,
                port: "" // empty for user input
            }));
            startHot.loadData(startData);
            startHot.render();
        }
    });
}

/** 목적지 검색 */
function loadSearchEnd(){
    let param = {
        assetId :  $("#endAssetIdSearch").val(),
        configId:  $("#endConfigIdSearch").val(),
        eqpName :  $("#endEqpNameSearch").val()
    };

    $.ajax({
        url: "/eqp/searchTemp",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(param),
        success: function(data){

            endData = (data||[]).map(item => ({
                checked : false,
                assetId : item.ASSET_ID,
                configId: item.CONFIG_ID,
                eqpName : item.EQP_NAME,
                hostName: item.HOST_NAME,
                modelName: item.MODEL_NAME,
                port: ""
            }));
            endHot.loadData(endData);
            endHot.render();
        }
    });
}

/** "추가" 버튼 -> 부모창 Handsontable (detailHot) 에 1행 추가 */
function addDetailToParent(){
    // 상단 케이블 정보
    let cableType   = $("#cableType").val();
    let cableColor  = $("#cableColor").val();
    let cableLength = $("#cableLength").val();
    let startLabel  = $("#startLabel").val();
    let endLabel    = $("#endLabel").val();
    let remark      = $("#cableRemark").val();

    // START 체크 (1개)
    let sArr = startHot.getSourceData().filter(r => r.checked===true);
    // END 체크 (1개)
    let eArr = endHot.getSourceData().filter(r => r.checked===true);

    if(sArr.length!==1 || eArr.length!==1){
        alert("START와 END 각각 1개씩 체크해주세요.");
        return;
    }

    let s = sArr[0];
    let e = eArr[0];

    // 모달 -> 부모창
    let rowObj = {
        cableType, cableColor, cableLength,
        startLabel, endLabel, remark,

        // 출발지
        startAssetId : s.assetId,
        startConfigId: s.configId,
        startEqpName : s.eqpName,
        startHostName: s.hostName,
        startPort    : s.port,

        // 목적지
        endAssetId : e.assetId,
        endConfigId: e.configId,
        endEqpName : e.eqpName,
        endHostName: e.hostName,
        endPort    : e.port
    };

    // 부모창 함수 (ex: addDetailRows)
    if(window.addDetailRows){
        window.addDetailRows(rowObj);
    }
    $("#detailModal").modal("hide");
}