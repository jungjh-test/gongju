let handsonData = [
    {
        start_asset_id: "A001",
        start_configuration_id: "C001",
        start_coordinates: "X:100, Y:200",
        start_business_name: "업무1",
        start_port: "P001",
        end_asset_id: "A002",
        end_configuration_id: "C002",
        end_coordinates: "X:300, Y:400",
        end_business_name: "업무2",
        end_port: "P002",
        cable_type: "광케이블",
        cable_color: "빨강",
        cable_length: "100m",
        cable_statement_date: "2023-01-01",
        cable_info_update: "수정 필요"
    },
    {
        start_asset_id: "A003",
        start_configuration_id: "C003",
        start_coordinates: "X:500, Y:600",
        start_business_name: "업무3",
        start_port: "P003",
        end_asset_id: "A004",
        end_configuration_id: "C004",
        end_coordinates: "X:700, Y:800",
        end_business_name: "업무4",
        end_port: "P004",
        cable_type: "UTP",
        cable_color: "파랑",
        cable_length: "200m",
        cable_statement_date: "2023-02-01",
        cable_info_update: "정상"
    },
    {
        start_asset_id: "A005",
        start_configuration_id: "C005",
        start_coordinates: "X:150, Y:250",
        start_business_name: "업무5",
        start_port: "P005",
        end_asset_id: "A006",
        end_configuration_id: "C006",
        end_coordinates: "X:350, Y:450",
        end_business_name: "업무6",
        end_port: "P006",
        cable_type: "광케이블",
        cable_color: "초록",
        cable_length: "150m",
        cable_statement_date: "2023-03-01",
        cable_info_update: "확인 필요"
    },
    {
        start_asset_id: "A007",
        start_configuration_id: "C007",
        start_coordinates: "X:600, Y:700",
        start_business_name: "업무7",
        start_port: "P007",
        end_asset_id: "A008",
        end_configuration_id: "C008",
        end_coordinates: "X:800, Y:900",
        end_business_name: "업무8",
        end_port: "P008",
        cable_type: "동축케이블",
        cable_color: "노랑",
        cable_length: "250m",
        cable_statement_date: "2023-04-01",
        cable_info_update: "정상"
    },
    {
        start_asset_id: "A009",
        start_configuration_id: "C009",
        start_coordinates: "X:180, Y:280",
        start_business_name: "업무9",
        start_port: "P009",
        end_asset_id: "A010",
        end_configuration_id: "C010",
        end_coordinates: "X:380, Y:480",
        end_business_name: "업무10",
        end_port: "P010",
        cable_type: "광케이블",
        cable_color: "흰색",
        cable_length: "300m",
        cable_statement_date: "2023-05-01",
        cable_info_update: "점검 완료"
    },
    {
        start_asset_id: "A011",
        start_configuration_id: "C011",
        start_coordinates: "X:700, Y:800",
        start_business_name: "업무11",
        start_port: "P011",
        end_asset_id: "A012",
        end_configuration_id: "C012",
        end_coordinates: "X:900, Y:1000",
        end_business_name: "업무12",
        end_port: "P012",
        cable_type: "UTP",
        cable_color: "검정",
        cable_length: "400m",
        cable_statement_date: "2023-06-01",
        cable_info_update: "정상"
    },
    {
        start_asset_id: "A013",
        start_configuration_id: "C013",
        start_coordinates: "X:1, Y:2",
        start_business_name: "업무13",
        start_port: "P013",
        end_asset_id: "A014",
        end_configuration_id: "C014",
        end_coordinates: "X:3, Y:4",
        end_business_name: "업무14",
        end_port: "P014",
        cable_type: "광케이블",
        cable_color: "분홍",
        cable_length: "500m",
        cable_statement_date: "2023-07-01",
        cable_info_update: "확인 필요"
    },
    {
        start_asset_id: "A015",
        start_configuration_id: "C015",
        start_coordinates: "X:5, Y:6",
        start_business_name: "업무15",
        start_port: "P015",
        end_asset_id: "A016",
        end_configuration_id: "C016",
        end_coordinates: "X:7, Y:8",
        end_business_name: "업무16",
        end_port: "P016",
        cable_type: "동축케이블",
        cable_color: "주황",
        cable_length: "600m",
        cable_statement_date: "2023-08-01",
        cable_info_update: "정상"
    },
    {
        start_asset_id: "A017",
        start_configuration_id: "C017",
        start_coordinates: "X:10, Y:20",
        start_business_name: "업무17",
        start_port: "P017",
        end_asset_id: "A018",
        end_configuration_id: "C018",
        end_coordinates: "X:30, Y:40",
        end_business_name: "업무18",
        end_port: "P018",
        cable_type: "광케이블",
        cable_color: "회색",
        cable_length: "700m",
        cable_statement_date: "2023-09-01",
        cable_info_update: "확인 필요"
    },
    {
        start_asset_id: "A019",
        start_configuration_id: "C019",
        start_coordinates: "X:50, Y:60",
        start_business_name: "업무19",
        start_port: "P019",
        end_asset_id: "A020",
        end_configuration_id: "C020",
        end_coordinates: "X:70, Y:80",
        end_business_name: "업무20",
        end_port: "P020",
        cable_type: "UTP",
        cable_color: "초록",
        cable_length: "800m",
        cable_statement_date: "2023-10-01",
        cable_info_update: "점검 완료"
    },
    {
        start_asset_id: "A021",
        start_configuration_id: "C021",
        start_coordinates: "X:90, Y:100",
        start_business_name: "업무21",
        start_port: "P021",
        end_asset_id: "A022",
        end_configuration_id: "C022",
        end_coordinates: "X:110, Y:120",
        end_business_name: "업무22",
        end_port: "P022",
        cable_type: "동축케이블",
        cable_color: "파랑",
        cable_length: "900m",
        cable_statement_date: "2023-11-01",
        cable_info_update: "정상"
    },
    {
        start_asset_id: "A023",
        start_configuration_id: "C023",
        start_coordinates: "X:130, Y:140",
        start_business_name: "업무23",
        start_port: "P023",
        end_asset_id: "A024",
        end_configuration_id: "C024",
        end_coordinates: "X:150, Y:160",
        end_business_name: "업무24",
        end_port: "P024",
        cable_type: "광케이블",
        cable_color: "빨강",
        cable_length: "1000m",
        cable_statement_date: "2023-12-01",
        cable_info_update: "수정 필요"
    },
    {
        start_asset_id: "A025",
        start_configuration_id: "C025",
        start_coordinates: "X:170, Y:180",
        start_business_name: "업무25",
        start_port: "P025",
        end_asset_id: "A026",
        end_configuration_id: "C026",
        end_coordinates: "X:190, Y:200",
        end_business_name: "업무26",
        end_port: "P026",
        cable_type: "광케이블",
        cable_color: "파랑",
        cable_length: "110m",
        cable_statement_date: "2024-01-01",
        cable_info_update: "확인 필요"
    },
    {
        start_asset_id: "A027",
        start_configuration_id: "C027",
        start_coordinates: "X:210, Y:220",
        start_business_name: "업무27",
        start_port: "P027",
        end_asset_id: "A028",
        end_configuration_id: "C028",
        end_coordinates: "X:230, Y:240",
        end_business_name: "업무28",
        end_port: "P028",
        cable_type: "UTP",
        cable_color: "검정",
        cable_length: "120m",
        cable_statement_date: "2024-02-01",
        cable_info_update: "정상"
    },
    {
        start_asset_id: "A029",
        start_configuration_id: "C029",
        start_coordinates: "X:250, Y:260",
        start_business_name: "업무29",
        start_port: "P029",
        end_asset_id: "A030",
        end_configuration_id: "C030",
        end_coordinates: "X:270, Y:280",
        end_business_name: "업무30",
        end_port: "P030",
        cable_type: "동축케이블",
        cable_color: "초록",
        cable_length: "130m",
        cable_statement_date: "2024-03-01",
        cable_info_update: "수정 필요"
    },
    {
        start_asset_id: "A031",
        start_configuration_id: "C031",
        start_coordinates: "X:290, Y:300",
        start_business_name: "업무31",
        start_port: "P031",
        end_asset_id: "A032",
        end_configuration_id: "C032",
        end_coordinates: "X:310, Y:320",
        end_business_name: "업무32",
        end_port: "P032",
        cable_type: "광케이블",
        cable_color: "노랑",
        cable_length: "150m",
        cable_statement_date: "2024-04-01",
        cable_info_update: "점검 완료"
    },
    {
        start_asset_id: "A033",
        start_configuration_id: "C033",
        start_coordinates: "X:330, Y:340",
        start_business_name: "업무33",
        start_port: "P033",
        end_asset_id: "A034",
        end_configuration_id: "C034",
        end_coordinates: "X:350, Y:360",
        end_business_name: "업무34",
        end_port: "P034",
        cable_type: "UTP",
        cable_color: "회색",
        cable_length: "160m",
        cable_statement_date: "2024-05-01",
        cable_info_update: "확인 필요"
    },
    {
        start_asset_id: "A035",
        start_configuration_id: "C035",
        start_coordinates: "X:370, Y:380",
        start_business_name: "업무35",
        start_port: "P035",
        end_asset_id: "A036",
        end_configuration_id: "C036",
        end_coordinates: "X:390, Y:400",
        end_business_name: "업무36",
        end_port: "P036",
        cable_type: "동축케이블",
        cable_color: "빨강",
        cable_length: "170m",
        cable_statement_date: "2024-06-01",
        cable_info_update: "정상"
    },
    {
        start_asset_id: "A037",
        start_configuration_id: "C037",
        start_coordinates: "X:410, Y:420",
        start_business_name: "업무37",
        start_port: "P037",
        end_asset_id: "A038",
        end_configuration_id: "C038",
        end_coordinates: "X:430, Y:440",
        end_business_name: "업무38",
        end_port: "P038",
        cable_type: "광케이블",
        cable_color: "분홍",
        cable_length: "180m",
        cable_statement_date: "2024-07-01",
        cable_info_update: "수정 필요"
    },
    {
        start_asset_id: "A039",
        start_configuration_id: "C039",
        start_coordinates: "X:450, Y:460",
        start_business_name: "업무39",
        start_port: "P039",
        end_asset_id: "A040",
        end_configuration_id: "C040",
        end_coordinates: "X:470, Y:480",
        end_business_name: "업무40",
        end_port: "P040",
        cable_type: "UTP",
        cable_color: "검정",
        cable_length: "190m",
        cable_statement_date: "2024-08-01",
        cable_info_update: "정상"
    },
    {
        start_asset_id: "A041",
        start_configuration_id: "C041",
        start_coordinates: "X:490, Y:500",
        start_business_name: "업무41",
        start_port: "P041",
        end_asset_id: "A042",
        end_configuration_id: "C042",
        end_coordinates: "X:510, Y:520",
        end_business_name: "업무42",
        end_port: "P042",
        cable_type: "광케이블",
        cable_color: "초록",
        cable_length: "200m",
        cable_statement_date: "2024-09-01",
        cable_info_update: "점검 완료"
    },
    {
        start_asset_id: "A043",
        start_configuration_id: "C043",
        start_coordinates: "X:530, Y:540",
        start_business_name: "업무43",
        start_port: "P043",
        end_asset_id: "A044",
        end_configuration_id: "C044",
        end_coordinates: "X:550, Y:560",
        end_business_name: "업무44",
        end_port: "P044",
        cable_type: "동축케이블",
        cable_color: "노랑",
        cable_length: "210m",
        cable_statement_date: "2024-10-01",
        cable_info_update: "확인 필요"
    },
    {
        start_asset_id: "A001",
        start_configuration_id: "C001",
        start_coordinates: "X:100, Y:200",
        start_business_name: "업무1",
        start_port: "P001",
        end_asset_id: "A002",
        end_configuration_id: "C002",
        end_coordinates: "X:300, Y:400",
        end_business_name: "업무2",
        end_port: "P002",
        cable_type: "광케이블",
        cable_color: "빨강",
        cable_length: "100m",
        cable_statement_date: "2023-01-01",
        cable_info_update: "수정 필요"
    },
    {
        start_asset_id: "A003",
        start_configuration_id: "C003",
        start_coordinates: "X:500, Y:600",
        start_business_name: "업무3",
        start_port: "P003",
        end_asset_id: "A004",
        end_configuration_id: "C004",
        end_coordinates: "X:700, Y:800",
        end_business_name: "업무4",
        end_port: "P004",
        cable_type: "UTP",
        cable_color: "파랑",
        cable_length: "200m",
        cable_statement_date: "2023-02-01",
        cable_info_update: "정상"
    },
    {
        start_asset_id: "A005",
        start_configuration_id: "C005",
        start_coordinates: "X:150, Y:250",
        start_business_name: "업무5",
        start_port: "P005",
        end_asset_id: "A006",
        end_configuration_id: "C006",
        end_coordinates: "X:350, Y:450",
        end_business_name: "업무6",
        end_port: "P006",
        cable_type: "광케이블",
        cable_color: "초록",
        cable_length: "150m",
        cable_statement_date: "2023-03-01",
        cable_info_update: "확인 필요"
    },
    {
        start_asset_id: "A007",
        start_configuration_id: "C007",
        start_coordinates: "X:600, Y:700",
        start_business_name: "업무7",
        start_port: "P007",
        end_asset_id: "A008",
        end_configuration_id: "C008",
        end_coordinates: "X:800, Y:900",
        end_business_name: "업무8",
        end_port: "P008",
        cable_type: "동축케이블",
        cable_color: "노랑",
        cable_length: "250m",
        cable_statement_date: "2023-04-01",
        cable_info_update: "정상"
    },
    {
        start_asset_id: "A009",
        start_configuration_id: "C009",
        start_coordinates: "X:180, Y:280",
        start_business_name: "업무9",
        start_port: "P009",
        end_asset_id: "A010",
        end_configuration_id: "C010",
        end_coordinates: "X:380, Y:480",
        end_business_name: "업무10",
        end_port: "P010",
        cable_type: "광케이블",
        cable_color: "흰색",
        cable_length: "300m",
        cable_statement_date: "2023-05-01",
        cable_info_update: "점검 완료"
    },
    {
        start_asset_id: "A011",
        start_configuration_id: "C011",
        start_coordinates: "X:700, Y:800",
        start_business_name: "업무11",
        start_port: "P011",
        end_asset_id: "A012",
        end_configuration_id: "C012",
        end_coordinates: "X:900, Y:1000",
        end_business_name: "업무12",
        end_port: "P012",
        cable_type: "UTP",
        cable_color: "검정",
        cable_length: "400m",
        cable_statement_date: "2023-06-01",
        cable_info_update: "정상"
    },
    {
        start_asset_id: "A013",
        start_configuration_id: "C013",
        start_coordinates: "X:1, Y:2",
        start_business_name: "업무13",
        start_port: "P013",
        end_asset_id: "A014",
        end_configuration_id: "C014",
        end_coordinates: "X:3, Y:4",
        end_business_name: "업무14",
        end_port: "P014",
        cable_type: "광케이블",
        cable_color: "분홍",
        cable_length: "500m",
        cable_statement_date: "2023-07-01",
        cable_info_update: "확인 필요"
    },
    {
        start_asset_id: "A015",
        start_configuration_id: "C015",
        start_coordinates: "X:5, Y:6",
        start_business_name: "업무15",
        start_port: "P015",
        end_asset_id: "A016",
        end_configuration_id: "C016",
        end_coordinates: "X:7, Y:8",
        end_business_name: "업무16",
        end_port: "P016",
        cable_type: "동축케이블",
        cable_color: "주황",
        cable_length: "600m",
        cable_statement_date: "2023-08-01",
        cable_info_update: "정상"
    },
    {
        start_asset_id: "A017",
        start_configuration_id: "C017",
        start_coordinates: "X:10, Y:20",
        start_business_name: "업무17",
        start_port: "P017",
        end_asset_id: "A018",
        end_configuration_id: "C018",
        end_coordinates: "X:30, Y:40",
        end_business_name: "업무18",
        end_port: "P018",
        cable_type: "광케이블",
        cable_color: "회색",
        cable_length: "700m",
        cable_statement_date: "2023-09-01",
        cable_info_update: "확인 필요"
    },
    {
        start_asset_id: "A019",
        start_configuration_id: "C019",
        start_coordinates: "X:50, Y:60",
        start_business_name: "업무19",
        start_port: "P019",
        end_asset_id: "A020",
        end_configuration_id: "C020",
        end_coordinates: "X:70, Y:80",
        end_business_name: "업무20",
        end_port: "P020",
        cable_type: "UTP",
        cable_color: "초록",
        cable_length: "800m",
        cable_statement_date: "2023-10-01",
        cable_info_update: "점검 완료"
    },
    {
        start_asset_id: "A021",
        start_configuration_id: "C021",
        start_coordinates: "X:90, Y:100",
        start_business_name: "업무21",
        start_port: "P021",
        end_asset_id: "A022",
        end_configuration_id: "C022",
        end_coordinates: "X:110, Y:120",
        end_business_name: "업무22",
        end_port: "P022",
        cable_type: "동축케이블",
        cable_color: "파랑",
        cable_length: "900m",
        cable_statement_date: "2023-11-01",
        cable_info_update: "정상"
    },
    {
        start_asset_id: "A023",
        start_configuration_id: "C023",
        start_coordinates: "X:130, Y:140",
        start_business_name: "업무23",
        start_port: "P023",
        end_asset_id: "A024",
        end_configuration_id: "C024",
        end_coordinates: "X:150, Y:160",
        end_business_name: "업무24",
        end_port: "P024",
        cable_type: "광케이블",
        cable_color: "빨강",
        cable_length: "1000m",
        cable_statement_date: "2023-12-01",
        cable_info_update: "수정 필요"
    },
    {
        start_asset_id: "A025",
        start_configuration_id: "C025",
        start_coordinates: "X:170, Y:180",
        start_business_name: "업무25",
        start_port: "P025",
        end_asset_id: "A026",
        end_configuration_id: "C026",
        end_coordinates: "X:190, Y:200",
        end_business_name: "업무26",
        end_port: "P026",
        cable_type: "광케이블",
        cable_color: "파랑",
        cable_length: "110m",
        cable_statement_date: "2024-01-01",
        cable_info_update: "확인 필요"
    },
    {
        start_asset_id: "A027",
        start_configuration_id: "C027",
        start_coordinates: "X:210, Y:220",
        start_business_name: "업무27",
        start_port: "P027",
        end_asset_id: "A028",
        end_configuration_id: "C028",
        end_coordinates: "X:230, Y:240",
        end_business_name: "업무28",
        end_port: "P028",
        cable_type: "UTP",
        cable_color: "검정",
        cable_length: "120m",
        cable_statement_date: "2024-02-01",
        cable_info_update: "정상"
    },
    {
        start_asset_id: "A029",
        start_configuration_id: "C029",
        start_coordinates: "X:250, Y:260",
        start_business_name: "업무29",
        start_port: "P029",
        end_asset_id: "A030",
        end_configuration_id: "C030",
        end_coordinates: "X:270, Y:280",
        end_business_name: "업무30",
        end_port: "P030",
        cable_type: "동축케이블",
        cable_color: "초록",
        cable_length: "130m",
        cable_statement_date: "2024-03-01",
        cable_info_update: "수정 필요"
    },
    {
        start_asset_id: "A031",
        start_configuration_id: "C031",
        start_coordinates: "X:290, Y:300",
        start_business_name: "업무31",
        start_port: "P031",
        end_asset_id: "A032",
        end_configuration_id: "C032",
        end_coordinates: "X:310, Y:320",
        end_business_name: "업무32",
        end_port: "P032",
        cable_type: "광케이블",
        cable_color: "노랑",
        cable_length: "150m",
        cable_statement_date: "2024-04-01",
        cable_info_update: "점검 완료"
    },
    {
        start_asset_id: "A033",
        start_configuration_id: "C033",
        start_coordinates: "X:330, Y:340",
        start_business_name: "업무33",
        start_port: "P033",
        end_asset_id: "A034",
        end_configuration_id: "C034",
        end_coordinates: "X:350, Y:360",
        end_business_name: "업무34",
        end_port: "P034",
        cable_type: "UTP",
        cable_color: "회색",
        cable_length: "160m",
        cable_statement_date: "2024-05-01",
        cable_info_update: "확인 필요"
    },
    {
        start_asset_id: "A035",
        start_configuration_id: "C035",
        start_coordinates: "X:370, Y:380",
        start_business_name: "업무35",
        start_port: "P035",
        end_asset_id: "A036",
        end_configuration_id: "C036",
        end_coordinates: "X:390, Y:400",
        end_business_name: "업무36",
        end_port: "P036",
        cable_type: "동축케이블",
        cable_color: "빨강",
        cable_length: "170m",
        cable_statement_date: "2024-06-01",
        cable_info_update: "정상"
    },
    {
        start_asset_id: "A037",
        start_configuration_id: "C037",
        start_coordinates: "X:410, Y:420",
        start_business_name: "업무37",
        start_port: "P037",
        end_asset_id: "A038",
        end_configuration_id: "C038",
        end_coordinates: "X:430, Y:440",
        end_business_name: "업무38",
        end_port: "P038",
        cable_type: "광케이블",
        cable_color: "분홍",
        cable_length: "180m",
        cable_statement_date: "2024-07-01",
        cable_info_update: "수정 필요"
    },
    {
        start_asset_id: "A039",
        start_configuration_id: "C039",
        start_coordinates: "X:450, Y:460",
        start_business_name: "업무39",
        start_port: "P039",
        end_asset_id: "A040",
        end_configuration_id: "C040",
        end_coordinates: "X:470, Y:480",
        end_business_name: "업무40",
        end_port: "P040",
        cable_type: "UTP",
        cable_color: "검정",
        cable_length: "190m",
        cable_statement_date: "2024-08-01",
        cable_info_update: "정상"
    },
    {
        start_asset_id: "A041",
        start_configuration_id: "C041",
        start_coordinates: "X:490, Y:500",
        start_business_name: "업무41",
        start_port: "P041",
        end_asset_id: "A042",
        end_configuration_id: "C042",
        end_coordinates: "X:510, Y:520",
        end_business_name: "업무42",
        end_port: "P042",
        cable_type: "광케이블",
        cable_color: "초록",
        cable_length: "200m",
        cable_statement_date: "2024-09-01",
        cable_info_update: "점검 완료"
    },
    {
        start_asset_id: "A043",
        start_configuration_id: "C043",
        start_coordinates: "X:530, Y:540",
        start_business_name: "업무43",
        start_port: "P043",
        end_asset_id: "A044",
        end_configuration_id: "C044",
        end_coordinates: "X:550, Y:560",
        end_business_name: "업무44",
        end_port: "P044",
        cable_type: "동축케이블",
        cable_color: "노랑",
        cable_length: "210m",
        cable_statement_date: "2024-10-01",
        cable_info_update: "확인 필요"
    },
    {
        start_asset_id: "A001",
        start_configuration_id: "C001",
        start_coordinates: "X:100, Y:200",
        start_business_name: "업무1",
        start_port: "P001",
        end_asset_id: "A002",
        end_configuration_id: "C002",
        end_coordinates: "X:300, Y:400",
        end_business_name: "업무2",
        end_port: "P002",
        cable_type: "광케이블",
        cable_color: "빨강",
        cable_length: "100m",
        cable_statement_date: "2023-01-01",
        cable_info_update: "수정 필요"
    },
    {
        start_asset_id: "A003",
        start_configuration_id: "C003",
        start_coordinates: "X:500, Y:600",
        start_business_name: "업무3",
        start_port: "P003",
        end_asset_id: "A004",
        end_configuration_id: "C004",
        end_coordinates: "X:700, Y:800",
        end_business_name: "업무4",
        end_port: "P004",
        cable_type: "UTP",
        cable_color: "파랑",
        cable_length: "200m",
        cable_statement_date: "2023-02-01",
        cable_info_update: "정상"
    },
    {
        start_asset_id: "A005",
        start_configuration_id: "C005",
        start_coordinates: "X:150, Y:250",
        start_business_name: "업무5",
        start_port: "P005",
        end_asset_id: "A006",
        end_configuration_id: "C006",
        end_coordinates: "X:350, Y:450",
        end_business_name: "업무6",
        end_port: "P006",
        cable_type: "광케이블",
        cable_color: "초록",
        cable_length: "150m",
        cable_statement_date: "2023-03-01",
        cable_info_update: "확인 필요"
    },
    {
        start_asset_id: "A007",
        start_configuration_id: "C007",
        start_coordinates: "X:600, Y:700",
        start_business_name: "업무7",
        start_port: "P007",
        end_asset_id: "A008",
        end_configuration_id: "C008",
        end_coordinates: "X:800, Y:900",
        end_business_name: "업무8",
        end_port: "P008",
        cable_type: "동축케이블",
        cable_color: "노랑",
        cable_length: "250m",
        cable_statement_date: "2023-04-01",
        cable_info_update: "정상"
    },
    {
        start_asset_id: "A009",
        start_configuration_id: "C009",
        start_coordinates: "X:180, Y:280",
        start_business_name: "업무9",
        start_port: "P009",
        end_asset_id: "A010",
        end_configuration_id: "C010",
        end_coordinates: "X:380, Y:480",
        end_business_name: "업무10",
        end_port: "P010",
        cable_type: "광케이블",
        cable_color: "흰색",
        cable_length: "300m",
        cable_statement_date: "2023-05-01",
        cable_info_update: "점검 완료"
    },
    {
        start_asset_id: "A011",
        start_configuration_id: "C011",
        start_coordinates: "X:700, Y:800",
        start_business_name: "업무11",
        start_port: "P011",
        end_asset_id: "A012",
        end_configuration_id: "C012",
        end_coordinates: "X:900, Y:1000",
        end_business_name: "업무12",
        end_port: "P012",
        cable_type: "UTP",
        cable_color: "검정",
        cable_length: "400m",
        cable_statement_date: "2023-06-01",
        cable_info_update: "정상"
    },
    {
        start_asset_id: "A013",
        start_configuration_id: "C013",
        start_coordinates: "X:1, Y:2",
        start_business_name: "업무13",
        start_port: "P013",
        end_asset_id: "A014",
        end_configuration_id: "C014",
        end_coordinates: "X:3, Y:4",
        end_business_name: "업무14",
        end_port: "P014",
        cable_type: "광케이블",
        cable_color: "분홍",
        cable_length: "500m",
        cable_statement_date: "2023-07-01",
        cable_info_update: "확인 필요"
    },
    {
        start_asset_id: "A015",
        start_configuration_id: "C015",
        start_coordinates: "X:5, Y:6",
        start_business_name: "업무15",
        start_port: "P015",
        end_asset_id: "A016",
        end_configuration_id: "C016",
        end_coordinates: "X:7, Y:8",
        end_business_name: "업무16",
        end_port: "P016",
        cable_type: "동축케이블",
        cable_color: "주황",
        cable_length: "600m",
        cable_statement_date: "2023-08-01",
        cable_info_update: "정상"
    },
    {
        start_asset_id: "A017",
        start_configuration_id: "C017",
        start_coordinates: "X:10, Y:20",
        start_business_name: "업무17",
        start_port: "P017",
        end_asset_id: "A018",
        end_configuration_id: "C018",
        end_coordinates: "X:30, Y:40",
        end_business_name: "업무18",
        end_port: "P018",
        cable_type: "광케이블",
        cable_color: "회색",
        cable_length: "700m",
        cable_statement_date: "2023-09-01",
        cable_info_update: "확인 필요"
    },
    {
        start_asset_id: "A019",
        start_configuration_id: "C019",
        start_coordinates: "X:50, Y:60",
        start_business_name: "업무19",
        start_port: "P019",
        end_asset_id: "A020",
        end_configuration_id: "C020",
        end_coordinates: "X:70, Y:80",
        end_business_name: "업무20",
        end_port: "P020",
        cable_type: "UTP",
        cable_color: "초록",
        cable_length: "800m",
        cable_statement_date: "2023-10-01",
        cable_info_update: "점검 완료"
    },
    {
        start_asset_id: "A021",
        start_configuration_id: "C021",
        start_coordinates: "X:90, Y:100",
        start_business_name: "업무21",
        start_port: "P021",
        end_asset_id: "A022",
        end_configuration_id: "C022",
        end_coordinates: "X:110, Y:120",
        end_business_name: "업무22",
        end_port: "P022",
        cable_type: "동축케이블",
        cable_color: "파랑",
        cable_length: "900m",
        cable_statement_date: "2023-11-01",
        cable_info_update: "정상"
    },
    {
        start_asset_id: "A023",
        start_configuration_id: "C023",
        start_coordinates: "X:130, Y:140",
        start_business_name: "업무23",
        start_port: "P023",
        end_asset_id: "A024",
        end_configuration_id: "C024",
        end_coordinates: "X:150, Y:160",
        end_business_name: "업무24",
        end_port: "P024",
        cable_type: "광케이블",
        cable_color: "빨강",
        cable_length: "1000m",
        cable_statement_date: "2023-12-01",
        cable_info_update: "수정 필요"
    },
    {
        start_asset_id: "A025",
        start_configuration_id: "C025",
        start_coordinates: "X:170, Y:180",
        start_business_name: "업무25",
        start_port: "P025",
        end_asset_id: "A026",
        end_configuration_id: "C026",
        end_coordinates: "X:190, Y:200",
        end_business_name: "업무26",
        end_port: "P026",
        cable_type: "광케이블",
        cable_color: "파랑",
        cable_length: "110m",
        cable_statement_date: "2024-01-01",
        cable_info_update: "확인 필요"
    },
    {
        start_asset_id: "A027",
        start_configuration_id: "C027",
        start_coordinates: "X:210, Y:220",
        start_business_name: "업무27",
        start_port: "P027",
        end_asset_id: "A028",
        end_configuration_id: "C028",
        end_coordinates: "X:230, Y:240",
        end_business_name: "업무28",
        end_port: "P028",
        cable_type: "UTP",
        cable_color: "검정",
        cable_length: "120m",
        cable_statement_date: "2024-02-01",
        cable_info_update: "정상"
    },
    {
        start_asset_id: "A029",
        start_configuration_id: "C029",
        start_coordinates: "X:250, Y:260",
        start_business_name: "업무29",
        start_port: "P029",
        end_asset_id: "A030",
        end_configuration_id: "C030",
        end_coordinates: "X:270, Y:280",
        end_business_name: "업무30",
        end_port: "P030",
        cable_type: "동축케이블",
        cable_color: "초록",
        cable_length: "130m",
        cable_statement_date: "2024-03-01",
        cable_info_update: "수정 필요"
    },
    {
        start_asset_id: "A031",
        start_configuration_id: "C031",
        start_coordinates: "X:290, Y:300",
        start_business_name: "업무31",
        start_port: "P031",
        end_asset_id: "A032",
        end_configuration_id: "C032",
        end_coordinates: "X:310, Y:320",
        end_business_name: "업무32",
        end_port: "P032",
        cable_type: "광케이블",
        cable_color: "노랑",
        cable_length: "150m",
        cable_statement_date: "2024-04-01",
        cable_info_update: "점검 완료"
    },
    {
        start_asset_id: "A033",
        start_configuration_id: "C033",
        start_coordinates: "X:330, Y:340",
        start_business_name: "업무33",
        start_port: "P033",
        end_asset_id: "A034",
        end_configuration_id: "C034",
        end_coordinates: "X:350, Y:360",
        end_business_name: "업무34",
        end_port: "P034",
        cable_type: "UTP",
        cable_color: "회색",
        cable_length: "160m",
        cable_statement_date: "2024-05-01",
        cable_info_update: "확인 필요"
    },
    {
        start_asset_id: "A035",
        start_configuration_id: "C035",
        start_coordinates: "X:370, Y:380",
        start_business_name: "업무35",
        start_port: "P035",
        end_asset_id: "A036",
        end_configuration_id: "C036",
        end_coordinates: "X:390, Y:400",
        end_business_name: "업무36",
        end_port: "P036",
        cable_type: "동축케이블",
        cable_color: "빨강",
        cable_length: "170m",
        cable_statement_date: "2024-06-01",
        cable_info_update: "정상"
    },
    {
        start_asset_id: "A037",
        start_configuration_id: "C037",
        start_coordinates: "X:410, Y:420",
        start_business_name: "업무37",
        start_port: "P037",
        end_asset_id: "A038",
        end_configuration_id: "C038",
        end_coordinates: "X:430, Y:440",
        end_business_name: "업무38",
        end_port: "P038",
        cable_type: "광케이블",
        cable_color: "분홍",
        cable_length: "180m",
        cable_statement_date: "2024-07-01",
        cable_info_update: "수정 필요"
    },
    {
        start_asset_id: "A039",
        start_configuration_id: "C039",
        start_coordinates: "X:450, Y:460",
        start_business_name: "업무39",
        start_port: "P039",
        end_asset_id: "A040",
        end_configuration_id: "C040",
        end_coordinates: "X:470, Y:480",
        end_business_name: "업무40",
        end_port: "P040",
        cable_type: "UTP",
        cable_color: "검정",
        cable_length: "190m",
        cable_statement_date: "2024-08-01",
        cable_info_update: "정상"
    },
    {
        start_asset_id: "A041",
        start_configuration_id: "C041",
        start_coordinates: "X:490, Y:500",
        start_business_name: "업무41",
        start_port: "P041",
        end_asset_id: "A042",
        end_configuration_id: "C042",
        end_coordinates: "X:510, Y:520",
        end_business_name: "업무42",
        end_port: "P042",
        cable_type: "광케이블",
        cable_color: "초록",
        cable_length: "200m",
        cable_statement_date: "2024-09-01",
        cable_info_update: "점검 완료"
    },
    {
        start_asset_id: "A043",
        start_configuration_id: "C043",
        start_coordinates: "X:530, Y:540",
        start_business_name: "업무43",
        start_port: "P043",
        end_asset_id: "A044",
        end_configuration_id: "C044",
        end_coordinates: "X:550, Y:560",
        end_business_name: "업무44",
        end_port: "P044",
        cable_type: "동축케이블",
        cable_color: "노랑",
        cable_length: "210m",
        cable_statement_date: "2024-10-01",
        cable_info_update: "확인 필요"
    },
    {
        start_asset_id: "A001",
        start_configuration_id: "C001",
        start_coordinates: "X:100, Y:200",
        start_business_name: "업무1",
        start_port: "P001",
        end_asset_id: "A002",
        end_configuration_id: "C002",
        end_coordinates: "X:300, Y:400",
        end_business_name: "업무2",
        end_port: "P002",
        cable_type: "광케이블",
        cable_color: "빨강",
        cable_length: "100m",
        cable_statement_date: "2023-01-01",
        cable_info_update: "수정 필요"
    },
    {
        start_asset_id: "A003",
        start_configuration_id: "C003",
        start_coordinates: "X:500, Y:600",
        start_business_name: "업무3",
        start_port: "P003",
        end_asset_id: "A004",
        end_configuration_id: "C004",
        end_coordinates: "X:700, Y:800",
        end_business_name: "업무4",
        end_port: "P004",
        cable_type: "UTP",
        cable_color: "파랑",
        cable_length: "200m",
        cable_statement_date: "2023-02-01",
        cable_info_update: "정상"
    },
    {
        start_asset_id: "A005",
        start_configuration_id: "C005",
        start_coordinates: "X:150, Y:250",
        start_business_name: "업무5",
        start_port: "P005",
        end_asset_id: "A006",
        end_configuration_id: "C006",
        end_coordinates: "X:350, Y:450",
        end_business_name: "업무6",
        end_port: "P006",
        cable_type: "광케이블",
        cable_color: "초록",
        cable_length: "150m",
        cable_statement_date: "2023-03-01",
        cable_info_update: "확인 필요"
    },
    {
        start_asset_id: "A007",
        start_configuration_id: "C007",
        start_coordinates: "X:600, Y:700",
        start_business_name: "업무7",
        start_port: "P007",
        end_asset_id: "A008",
        end_configuration_id: "C008",
        end_coordinates: "X:800, Y:900",
        end_business_name: "업무8",
        end_port: "P008",
        cable_type: "동축케이블",
        cable_color: "노랑",
        cable_length: "250m",
        cable_statement_date: "2023-04-01",
        cable_info_update: "정상"
    },
    {
        start_asset_id: "A009",
        start_configuration_id: "C009",
        start_coordinates: "X:180, Y:280",
        start_business_name: "업무9",
        start_port: "P009",
        end_asset_id: "A010",
        end_configuration_id: "C010",
        end_coordinates: "X:380, Y:480",
        end_business_name: "업무10",
        end_port: "P010",
        cable_type: "광케이블",
        cable_color: "흰색",
        cable_length: "300m",
        cable_statement_date: "2023-05-01",
        cable_info_update: "점검 완료"
    },
    {
        start_asset_id: "A011",
        start_configuration_id: "C011",
        start_coordinates: "X:700, Y:800",
        start_business_name: "업무11",
        start_port: "P011",
        end_asset_id: "A012",
        end_configuration_id: "C012",
        end_coordinates: "X:900, Y:1000",
        end_business_name: "업무12",
        end_port: "P012",
        cable_type: "UTP",
        cable_color: "검정",
        cable_length: "400m",
        cable_statement_date: "2023-06-01",
        cable_info_update: "정상"
    },
    {
        start_asset_id: "A013",
        start_configuration_id: "C013",
        start_coordinates: "X:1, Y:2",
        start_business_name: "업무13",
        start_port: "P013",
        end_asset_id: "A014",
        end_configuration_id: "C014",
        end_coordinates: "X:3, Y:4",
        end_business_name: "업무14",
        end_port: "P014",
        cable_type: "광케이블",
        cable_color: "분홍",
        cable_length: "500m",
        cable_statement_date: "2023-07-01",
        cable_info_update: "확인 필요"
    },
    {
        start_asset_id: "A015",
        start_configuration_id: "C015",
        start_coordinates: "X:5, Y:6",
        start_business_name: "업무15",
        start_port: "P015",
        end_asset_id: "A016",
        end_configuration_id: "C016",
        end_coordinates: "X:7, Y:8",
        end_business_name: "업무16",
        end_port: "P016",
        cable_type: "동축케이블",
        cable_color: "주황",
        cable_length: "600m",
        cable_statement_date: "2023-08-01",
        cable_info_update: "정상"
    },
    {
        start_asset_id: "A017",
        start_configuration_id: "C017",
        start_coordinates: "X:10, Y:20",
        start_business_name: "업무17",
        start_port: "P017",
        end_asset_id: "A018",
        end_configuration_id: "C018",
        end_coordinates: "X:30, Y:40",
        end_business_name: "업무18",
        end_port: "P018",
        cable_type: "광케이블",
        cable_color: "회색",
        cable_length: "700m",
        cable_statement_date: "2023-09-01",
        cable_info_update: "확인 필요"
    },
    {
        start_asset_id: "A019",
        start_configuration_id: "C019",
        start_coordinates: "X:50, Y:60",
        start_business_name: "업무19",
        start_port: "P019",
        end_asset_id: "A020",
        end_configuration_id: "C020",
        end_coordinates: "X:70, Y:80",
        end_business_name: "업무20",
        end_port: "P020",
        cable_type: "UTP",
        cable_color: "초록",
        cable_length: "800m",
        cable_statement_date: "2023-10-01",
        cable_info_update: "점검 완료"
    },
    {
        start_asset_id: "A021",
        start_configuration_id: "C021",
        start_coordinates: "X:90, Y:100",
        start_business_name: "업무21",
        start_port: "P021",
        end_asset_id: "A022",
        end_configuration_id: "C022",
        end_coordinates: "X:110, Y:120",
        end_business_name: "업무22",
        end_port: "P022",
        cable_type: "동축케이블",
        cable_color: "파랑",
        cable_length: "900m",
        cable_statement_date: "2023-11-01",
        cable_info_update: "정상"
    },
    {
        start_asset_id: "A023",
        start_configuration_id: "C023",
        start_coordinates: "X:130, Y:140",
        start_business_name: "업무23",
        start_port: "P023",
        end_asset_id: "A024",
        end_configuration_id: "C024",
        end_coordinates: "X:150, Y:160",
        end_business_name: "업무24",
        end_port: "P024",
        cable_type: "광케이블",
        cable_color: "빨강",
        cable_length: "1000m",
        cable_statement_date: "2023-12-01",
        cable_info_update: "수정 필요"
    },
    {
        start_asset_id: "A025",
        start_configuration_id: "C025",
        start_coordinates: "X:170, Y:180",
        start_business_name: "업무25",
        start_port: "P025",
        end_asset_id: "A026",
        end_configuration_id: "C026",
        end_coordinates: "X:190, Y:200",
        end_business_name: "업무26",
        end_port: "P026",
        cable_type: "광케이블",
        cable_color: "파랑",
        cable_length: "110m",
        cable_statement_date: "2024-01-01",
        cable_info_update: "확인 필요"
    },
    {
        start_asset_id: "A027",
        start_configuration_id: "C027",
        start_coordinates: "X:210, Y:220",
        start_business_name: "업무27",
        start_port: "P027",
        end_asset_id: "A028",
        end_configuration_id: "C028",
        end_coordinates: "X:230, Y:240",
        end_business_name: "업무28",
        end_port: "P028",
        cable_type: "UTP",
        cable_color: "검정",
        cable_length: "120m",
        cable_statement_date: "2024-02-01",
        cable_info_update: "정상"
    },
    {
        start_asset_id: "A029",
        start_configuration_id: "C029",
        start_coordinates: "X:250, Y:260",
        start_business_name: "업무29",
        start_port: "P029",
        end_asset_id: "A030",
        end_configuration_id: "C030",
        end_coordinates: "X:270, Y:280",
        end_business_name: "업무30",
        end_port: "P030",
        cable_type: "동축케이블",
        cable_color: "초록",
        cable_length: "130m",
        cable_statement_date: "2024-03-01",
        cable_info_update: "수정 필요"
    },
    {
        start_asset_id: "A031",
        start_configuration_id: "C031",
        start_coordinates: "X:290, Y:300",
        start_business_name: "업무31",
        start_port: "P031",
        end_asset_id: "A032",
        end_configuration_id: "C032",
        end_coordinates: "X:310, Y:320",
        end_business_name: "업무32",
        end_port: "P032",
        cable_type: "광케이블",
        cable_color: "노랑",
        cable_length: "150m",
        cable_statement_date: "2024-04-01",
        cable_info_update: "점검 완료"
    },
    {
        start_asset_id: "A033",
        start_configuration_id: "C033",
        start_coordinates: "X:330, Y:340",
        start_business_name: "업무33",
        start_port: "P033",
        end_asset_id: "A034",
        end_configuration_id: "C034",
        end_coordinates: "X:350, Y:360",
        end_business_name: "업무34",
        end_port: "P034",
        cable_type: "UTP",
        cable_color: "회색",
        cable_length: "160m",
        cable_statement_date: "2024-05-01",
        cable_info_update: "확인 필요"
    },
    {
        start_asset_id: "A035",
        start_configuration_id: "C035",
        start_coordinates: "X:370, Y:380",
        start_business_name: "업무35",
        start_port: "P035",
        end_asset_id: "A036",
        end_configuration_id: "C036",
        end_coordinates: "X:390, Y:400",
        end_business_name: "업무36",
        end_port: "P036",
        cable_type: "동축케이블",
        cable_color: "빨강",
        cable_length: "170m",
        cable_statement_date: "2024-06-01",
        cable_info_update: "정상"
    },
    {
        start_asset_id: "A037",
        start_configuration_id: "C037",
        start_coordinates: "X:410, Y:420",
        start_business_name: "업무37",
        start_port: "P037",
        end_asset_id: "A038",
        end_configuration_id: "C038",
        end_coordinates: "X:430, Y:440",
        end_business_name: "업무38",
        end_port: "P038",
        cable_type: "광케이블",
        cable_color: "분홍",
        cable_length: "180m",
        cable_statement_date: "2024-07-01",
        cable_info_update: "수정 필요"
    },
    {
        start_asset_id: "A039",
        start_configuration_id: "C039",
        start_coordinates: "X:450, Y:460",
        start_business_name: "업무39",
        start_port: "P039",
        end_asset_id: "A040",
        end_configuration_id: "C040",
        end_coordinates: "X:470, Y:480",
        end_business_name: "업무40",
        end_port: "P040",
        cable_type: "UTP",
        cable_color: "검정",
        cable_length: "190m",
        cable_statement_date: "2024-08-01",
        cable_info_update: "정상"
    },
    {
        start_asset_id: "A041",
        start_configuration_id: "C041",
        start_coordinates: "X:490, Y:500",
        start_business_name: "업무41",
        start_port: "P041",
        end_asset_id: "A042",
        end_configuration_id: "C042",
        end_coordinates: "X:510, Y:520",
        end_business_name: "업무42",
        end_port: "P042",
        cable_type: "광케이블",
        cable_color: "초록",
        cable_length: "200m",
        cable_statement_date: "2024-09-01",
        cable_info_update: "점검 완료"
    },
    {
        start_asset_id: "A043",
        start_configuration_id: "C043",
        start_coordinates: "X:530, Y:540",
        start_business_name: "업무43",
        start_port: "P043",
        end_asset_id: "A044",
        end_configuration_id: "C044",
        end_coordinates: "X:550, Y:560",
        end_business_name: "업무44",
        end_port: "P044",
        cable_type: "동축케이블",
        cable_color: "노랑",
        cable_length: "210m",
        cable_statement_date: "2024-10-01",
        cable_info_update: "확인 필요"
    }
];

$(function(){
    $('input[name="datetimes"]').daterangepicker({
        startDate: moment().subtract(1, 'years'), // 1년 전 날짜
        endDate: moment(), // 현재 날짜
        locale: {
            format: 'YYYY-MM-DD' // 날짜 형식을 'yyyy-mm-dd'로 설정
        },
    }, function (start, end) {
        // 사용자 정의 날짜를 입력 필드에 표시
        $('input[name="datetimes"]').val(start.format('YYYY-MM-DD') + ' ~ ' + end.format('YYYY-MM-DD'));
    });

    let handsonColumns = [
        createHandsonColumn('checkbox',                ''),
        createHandsonColumn('NO',                     'NO'),
        /* start */
        createHandsonColumn('start_asset_id',         '자산ID(시작)'),
        createHandsonColumn('start_configuration_id', '구성ID(시작)'),
        createHandsonColumn('start_coordinates',      '좌표(시작)'),
        createHandsonColumn('start_business_name',    '업무명(시작)'),
        createHandsonColumn('start_port',             '포트(시작)'),
        /* end */
        createHandsonColumn('end_asset_id',           '자산ID(종료)'),
        createHandsonColumn('end_configuration_id',   '구성ID(종료)'),
        createHandsonColumn('end_coordinates',        '좌표(종료)'),
        createHandsonColumn('end_business_name',      '업무명(종료)'),
        createHandsonColumn('end_port',               '포트(종료)'),
        /* type */
        createHandsonColumn('cable_type',             '케이블 타입'),
        createHandsonColumn('cable_color',            '케이블 색상'),
        createHandsonColumn('cable_length',           '케이블 길이'),
        createHandsonColumn('cable_statement_date',   '포설 일자'),
        createHandsonColumn('info_update',            '수정', infoUpdate),
    ];

    let container = document.getElementById('handsontable-container');
    let hot = new Handsontable(container, {
        data: handsonData,
        columns: handsonColumns,
        colHeaders: true,            // 열 헤더 표시
        rowHeaders: false,            // 행 번호 표시
        contextMenu: true,           // 마우스 오른쪽 클릭 메뉴 활성화
        autoRowSize: true,           // 행 높이 자동 조정
        autoColumnSize: true,        // 열 높이 자동 조정
        columnSorting: true,
        width: '100%',
        height: 500,                 // 테이블 높이 설정
        stretchH: 'all',         // 열이 부모 크기에 맞게 늘어남
        overflow: 'hidden',

        // 전체 선택 체크박스 추가
        afterGetColHeader(col, TH) {
            if (col === 0) { // 'selected' 컬럼
                const existingCheckbox = TH.querySelector('input[type="checkbox"]');

                // 헤더에 체크박스가 없다면 생성
                if (!existingCheckbox) {
                    const checkbox = document.createElement('input');
                    checkbox.type = 'checkbox';
                    checkbox.addEventListener('click', function () {
                        toggleSelectAll(hot, col, this.checked);
                    });
                    TH.innerHTML = ''; // 기존 텍스트 제거
                    TH.appendChild(checkbox);
                }
            }
        },
    });


});

function infoUpdate(data) {
    const row = JSON.parse(decodeURIComponent(data));
    console.log(row);
    console.log(row.start_asset_id);

    Swal.fire({
        html: generateCableAgencyLineHTML(),
        focusConfirm: false,
        confirmButtonText: '저장',
        cancelButtonText: '취소',
        showCancelButton: true,
        allowOutsideClick: false,
        heightAuto: false,
        customClass: {
            popup: 'custom-width'
        },
    }).then((result) => {
        if (result.isConfirmed) {

        }
    });
}

function generateCableAgencyLineHTML(){
     return `
        <div class="custom-width-700">
            <div class="flex-row-between custom-padding-10">
                <p id="inquiry_time" style="margin: 0;">정보수정</p>
                <div class="custom-button-wrap custom-margin-left-10">
                    <button type="button" class="custom-btn custom-blue-btn" onclick="searchButton()">등록</button>
                </div>
            </div>

            <div class="tbl-bootstrap-wrap custom-border-top-solid">
                <table class="table-hover-delete">
                    <tbody>
                        <tr>
                            <td colspan="2" class="custom-tb-title custom-width-5per">
                                <label for="asset_id" class="custom-tb-title-text">회선사용기관명</label>
                            </td>
                            <td class="custom-tb-content custom-width-11per">
                                <input id="asset_id" name="asset_id" class="custom-input" />
                            </td>
                            <td colspan="2" class="custom-tb-title custom-width-5per">
                                <label for="asset_id" class="custom-tb-title-text">청약(장애소관)</label>
                            </td>
                            <td class="custom-tb-content custom-width-11per">
                                <input id="asset_id" name="asset_id" class="custom-input" />
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" class="custom-tb-title custom-width-5per">
                                <label for="asset_id" class="custom-tb-title-text">회선사업자</label>
                            </td>
                            <td class="custom-tb-content custom-width-11per">
                                <select id="asset_id" name="asset_id" class="custom-select" style="width: 52% !important;">
                                    <option value="1">전체</option>
                                    <option value="2">테스트 1</option>
                                    <option value="3">테스트 2</option>
                                </select>
                            </td>
                            <td colspan="2" class="custom-tb-title custom-width-5per">
                                <label for="asset_id" class="custom-tb-title-text">회선번호</label>
                            </td>
                            <td class="custom-tb-content custom-width-11per">
                                <input id="asset_id" name="asset_id" class="custom-input" />
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" class="custom-tb-title custom-width-5per">
                                <label for="asset_id" class="custom-tb-title-text">회선용도</label>
                            </td>
                            <td class="custom-tb-content custom-width-11per">
                                <input id="asset_id" name="asset_id" class="custom-input" />
                            </td>
                            <td colspan="2" class="custom-tb-title custom-width-5per">
                                <label for="asset_id" class="custom-tb-title-text">회선속도</label>
                            </td>
                            <td class="custom-tb-content custom-width-11per">
                                <input id="asset_id" name="asset_id" class="custom-input" />
                            </td>

                        </tr>
                        <tr>
                            <td colspan="2" class="custom-tb-title custom-width-5per">
                                <label for="asset_id" class="custom-tb-title-text">회선종류</label>
                            </td>
                            <td class="custom-tb-content custom-width-11per">
                                <input id="asset_id" name="asset_id" class="custom-input" />
                            </td>
                            <td colspan="2" class="custom-tb-content custom-width-11per">
                            </td>
                        </tr>
                        <tr>
                            <td rowspan="6" class="custom-tb-title custom-width-5per">
                                <label for="asset_id" class="custom-tb-title-text">상위</label>
                            </td>
                            <tr>
                                <td class="custom-tb-title custom-width-5per">
                                    <label for="asset_id" class="custom-tb-title-text">기관명</label>
                                </td>
                                <td class="custom-tb-content custom-width-11per">
                                    <input id="asset_id" name="asset_id" class="custom-input" />
                                </td>
                            </tr>
                            <tr>
                                <td class="custom-tb-title custom-width-5per">
                                    <label for="asset_id" class="custom-tb-title-text">지역</label>
                                </td>
                                <td class="custom-tb-content custom-width-11per">
                                    <input id="asset_id" name="asset_id" class="custom-input" />
                                </td>
                            </tr>
                            <tr>
                                <td class="custom-tb-title custom-width-5per">
                                    <label for="asset_id" class="custom-tb-title-text">담당기관</label>
                                </td>
                                <td class="custom-tb-content custom-width-11per">
                                    <input id="asset_id" name="asset_id" class="custom-input" />
                                </td>
                            </tr>
                            <tr>
                                <td class="custom-tb-title custom-width-5per">
                                    <label for="asset_id" class="custom-tb-title-text">담당자</label>
                                </td>
                                <td class="custom-tb-content custom-width-11per">
                                    <input id="asset_id" name="asset_id" class="custom-input" />
                                </td>
                            </tr>
                            <tr>
                                <td class="custom-tb-title custom-width-5per">
                                    <label for="asset_id" class="custom-tb-title-text">연락처</label>
                                </td>
                                <td class="custom-tb-content custom-width-11per">
                                    <input id="asset_id" name="asset_id" class="custom-input" />
                                </td>
                            </tr>
                            <tr>
                                <td class="custom-tb-title custom-width-5per">
                                    <label for="asset_id" class="custom-tb-title-text">좌표</label>
                                </td>
                                <td class="custom-tb-content custom-width-11per">
                                    <input id="asset_id" name="asset_id" class="custom-input" />
                                </td>
                            </tr>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
     `;
 }
