-- MySQL dump 10.19  Distrib 10.2.44-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: cmsdb
-- ------------------------------------------------------
-- Server version	10.2.44-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tb_account_group`
--

DROP TABLE IF EXISTS `tb_account_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_account_group` (
  `GROUP_ID` varchar(50) NOT NULL,
  `GROUP_NAME` varchar(100) NOT NULL,
  `GROUP_DESC` varchar(200) DEFAULT NULL,
  `REG_ID` varchar(50) NOT NULL,
  `REG_DT` datetime NOT NULL DEFAULT current_timestamp(),
  `UPD_ID` varchar(50) DEFAULT NULL,
  `UPD_DT` datetime DEFAULT NULL,
  PRIMARY KEY (`GROUP_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_account_group`
--

LOCK TABLES `tb_account_group` WRITE;
/*!40000 ALTER TABLE `tb_account_group` DISABLE KEYS */;
INSERT INTO `tb_account_group` VALUES ('a','test1','시큐리티테스트그룹1','admin','2025-01-18 19:21:52',NULL,NULL),('admin','ADMIN','UNMS 시스템 관리자 계정 그룹','admin','2025-01-17 21:04:11',NULL,NULL),('광주센터','광주센터 보안통신과 통신망관리팀','광주센터 통신망 관리팀 공무원','admin','2025-01-17 21:04:11',NULL,NULL),('운영요원_관리','통신망관리_케이블관리팀','운영요원 모든 권한 부여','admin','2025-01-17 21:04:11',NULL,NULL),('운영요원_일반','본원_정보시스템 일반 운영자','3개 메뉴 읽기 권한, 신청관리','admin','2025-01-17 21:04:11',NULL,NULL),('작업요청자','사업자 및 통신공사 작업 업무 담당','신청관리','admin','2025-01-17 21:04:11',NULL,NULL),('최고관리자','보안통신과 통신망관리팀','통신망 관리팀 공무원','admin','2025-01-17 21:04:11',NULL,NULL);
/*!40000 ALTER TABLE `tb_account_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_cable_install`
--

DROP TABLE IF EXISTS `tb_cable_install`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_cable_install` (
  `INSTALL_ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `REQUEST_ID` bigint(20) NOT NULL,
  `WORK_DETAIL_ID` bigint(20) DEFAULT NULL,
  `ASSET_ID` varchar(50) NOT NULL,
  `COMPONENT_ID` varchar(50) DEFAULT NULL,
  `START_LABEL` varchar(50) DEFAULT NULL,
  `END_LABEL` varchar(50) DEFAULT NULL,
  `START_ASSET_ID` varchar(50) DEFAULT NULL,
  `START_PORT` varchar(50) DEFAULT NULL,
  `END_ASSET_ID` varchar(50) DEFAULT NULL,
  `END_PORT` varchar(50) DEFAULT NULL,
  `CABLE_TYPE` varchar(20) NOT NULL,
  `CABLE_COLOR` varchar(20) DEFAULT NULL,
  `CABLE_LENGTH` decimal(10,2) DEFAULT NULL,
  `INSTALL_DATE` date DEFAULT NULL,
  `LINE_STATUS` varchar(20) DEFAULT NULL,
  `REMARKS` varchar(200) DEFAULT NULL,
  `REG_ID` varchar(50) NOT NULL,
  `REG_DT` datetime NOT NULL DEFAULT current_timestamp(),
  `UPD_ID` varchar(50) DEFAULT NULL,
  `UPD_DT` datetime DEFAULT NULL,
  PRIMARY KEY (`INSTALL_ID`),
  KEY `FK_INSTALL_REQUEST` (`REQUEST_ID`),
  KEY `FK_INSTALL_WORKDETAIL` (`WORK_DETAIL_ID`),
  CONSTRAINT `FK_INSTALL_REQUEST` FOREIGN KEY (`REQUEST_ID`) REFERENCES `tb_cable_request` (`REQUEST_ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_INSTALL_WORKDETAIL` FOREIGN KEY (`WORK_DETAIL_ID`) REFERENCES `tb_cable_work_detail` (`WORK_DETAIL_ID`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_cable_install`
--

LOCK TABLES `tb_cable_install` WRITE;
/*!40000 ALTER TABLE `tb_cable_install` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_cable_install` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_cable_install_patch`
--

DROP TABLE IF EXISTS `tb_cable_install_patch`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_cable_install_patch` (
  `INSTALL_PATCH_ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `INSTALL_ID` bigint(20) NOT NULL,
  `PATCH_ID` bigint(20) NOT NULL,
  `PORT_ID` bigint(20) DEFAULT NULL,
  `ORDER_NO` int(11) NOT NULL,
  `PATCH_REMARKS` varchar(200) DEFAULT NULL,
  `REG_ID` varchar(50) NOT NULL,
  `REG_DT` datetime NOT NULL DEFAULT current_timestamp(),
  `UPD_ID` varchar(50) DEFAULT NULL,
  `UPD_DT` datetime DEFAULT NULL,
  PRIMARY KEY (`INSTALL_PATCH_ID`),
  KEY `FK_IP_INSTALL` (`INSTALL_ID`),
  KEY `FK_IP_PATCH` (`PATCH_ID`),
  KEY `FK_IP_PORT` (`PORT_ID`),
  CONSTRAINT `FK_IP_INSTALL` FOREIGN KEY (`INSTALL_ID`) REFERENCES `tb_cable_install` (`INSTALL_ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_IP_PATCH` FOREIGN KEY (`PATCH_ID`) REFERENCES `tb_patch_device` (`PATCH_ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_IP_PORT` FOREIGN KEY (`PORT_ID`) REFERENCES `tb_patch_port` (`PORT_ID`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_cable_install_patch`
--

LOCK TABLES `tb_cable_install_patch` WRITE;
/*!40000 ALTER TABLE `tb_cable_install_patch` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_cable_install_patch` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_cable_request`
--

DROP TABLE IF EXISTS `tb_cable_request`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_cable_request` (
  `REQUEST_ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `ORG_NAME` varchar(100) NOT NULL,
  `DEPT_NAME` varchar(100) DEFAULT NULL,
  `POSITION_TITLE` varchar(100) DEFAULT NULL,
  `WORK_PURPOSE` varchar(200) DEFAULT NULL,
  `WORK_DATE_TYPE` char(1) NOT NULL DEFAULT 'D',
  `WORK_START_DATE` date DEFAULT NULL,
  `WORK_END_DATE` date DEFAULT NULL,
  `APPROVAL_STATUS` varchar(20) NOT NULL DEFAULT '대기',
  `APPROVER_ID` varchar(50) DEFAULT NULL,
  `APPROVAL_DT` datetime DEFAULT NULL,
  `APPROVAL_REMARKS` varchar(200) DEFAULT NULL,
  `DEL_YN` char(1) NOT NULL DEFAULT 'N',
  `REG_ID` varchar(50) NOT NULL,
  `REG_DT` datetime NOT NULL DEFAULT current_timestamp(),
  `UPD_ID` varchar(50) DEFAULT NULL,
  `UPD_DT` datetime DEFAULT NULL,
  PRIMARY KEY (`REQUEST_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_cable_request`
--

LOCK TABLES `tb_cable_request` WRITE;
/*!40000 ALTER TABLE `tb_cable_request` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_cable_request` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_cable_work_detail`
--

DROP TABLE IF EXISTS `tb_cable_work_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_cable_work_detail` (
  `WORK_DETAIL_ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `REQUEST_ID` bigint(20) NOT NULL,
  `CABLE_TYPE` varchar(20) NOT NULL,
  `CABLE_COLOR` varchar(20) DEFAULT NULL,
  `CABLE_LENGTH` decimal(10,2) DEFAULT NULL,
  `START_LABEL_ID` varchar(50) DEFAULT NULL,
  `END_LABEL_ID` varchar(50) DEFAULT NULL,
  `START_ASSET_ID` varchar(50) DEFAULT NULL,
  `START_COMPONENT_ID` varchar(50) DEFAULT NULL,
  `START_PORT` varchar(50) DEFAULT NULL,
  `END_ASSET_ID` varchar(50) DEFAULT NULL,
  `END_COMPONENT_ID` varchar(50) DEFAULT NULL,
  `END_PORT` varchar(50) DEFAULT NULL,
  `REMARKS` varchar(200) DEFAULT NULL,
  `REG_ID` varchar(50) NOT NULL,
  `REG_DT` datetime NOT NULL DEFAULT current_timestamp(),
  `UPD_ID` varchar(50) DEFAULT NULL,
  `UPD_DT` datetime DEFAULT NULL,
  PRIMARY KEY (`WORK_DETAIL_ID`),
  KEY `FK_WD_REQUEST` (`REQUEST_ID`),
  CONSTRAINT `FK_WD_REQUEST` FOREIGN KEY (`REQUEST_ID`) REFERENCES `tb_cable_request` (`REQUEST_ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_cable_work_detail`
--

LOCK TABLES `tb_cable_work_detail` WRITE;
/*!40000 ALTER TABLE `tb_cable_work_detail` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_cable_work_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_dedicated_line`
--

DROP TABLE IF EXISTS `tb_dedicated_line`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_dedicated_line` (
  `LINE_ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `LINE_USER_ORG` varchar(100) NOT NULL,
  `LINE_OPERATOR` varchar(50) NOT NULL,
  `LINE_PURPOSE` varchar(100) DEFAULT NULL,
  `LINE_NUMBER` varchar(50) DEFAULT NULL,
  `LINE_SPEED` varchar(20) DEFAULT NULL,
  `SUBSCRIBER_NAME` varchar(100) DEFAULT NULL,
  `UPPER_ORG_NAME` varchar(100) DEFAULT NULL,
  `UPPER_REGION` varchar(100) DEFAULT NULL,
  `UPPER_DEPT` varchar(100) DEFAULT NULL,
  `UPPER_MANAGER` varchar(50) DEFAULT NULL,
  `UPPER_CONTACT` varchar(50) DEFAULT NULL,
  `UPPER_COORD` varchar(50) DEFAULT NULL,
  `LOWER_ORG_NAME` varchar(100) DEFAULT NULL,
  `LOWER_REGION` varchar(100) DEFAULT NULL,
  `LOWER_DEPT` varchar(100) DEFAULT NULL,
  `LOWER_MANAGER` varchar(50) DEFAULT NULL,
  `LOWER_CONTACT` varchar(50) DEFAULT NULL,
  `LOWER_COORD` varchar(50) DEFAULT NULL,
  `TX_EQUIP1_NAME` varchar(100) DEFAULT NULL,
  `TX_EQUIP1_PORT` varchar(50) DEFAULT NULL,
  `TX_EQUIP1_CONFIGID` varchar(50) DEFAULT NULL,
  `TX_EQUIP2_NAME` varchar(100) DEFAULT NULL,
  `TX_EQUIP2_PORT` varchar(50) DEFAULT NULL,
  `TX_EQUIP2_CONFIGID` varchar(50) DEFAULT NULL,
  `LINE_MANAGER` varchar(50) DEFAULT NULL,
  `LINE_MANAGER_CONTACT` varchar(50) DEFAULT NULL,
  `FAULT_REPORT_CONTACT` varchar(50) DEFAULT NULL,
  `OPEN_DATE` varchar(8) DEFAULT NULL,
  `REMARKS` varchar(200) DEFAULT NULL,
  `REG_ID` varchar(50) NOT NULL,
  `REG_DT` datetime NOT NULL DEFAULT current_timestamp(),
  `UPD_ID` varchar(50) DEFAULT NULL,
  `UPD_DT` datetime DEFAULT NULL,
  PRIMARY KEY (`LINE_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_dedicated_line`
--

LOCK TABLES `tb_dedicated_line` WRITE;
/*!40000 ALTER TABLE `tb_dedicated_line` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_dedicated_line` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_group_menu_auth`
--

DROP TABLE IF EXISTS `tb_group_menu_auth`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_group_menu_auth` (
  `GROUP_ID` varchar(50) NOT NULL,
  `MENU_ID` int(11) NOT NULL,
  `R` varchar(1) DEFAULT NULL,
  `U` varchar(1) DEFAULT NULL,
  `REG_ID` varchar(50) NOT NULL,
  `REG_DT` datetime NOT NULL DEFAULT current_timestamp(),
  `UPD_ID` varchar(50) DEFAULT NULL,
  `UPD_DT` datetime DEFAULT NULL,
  PRIMARY KEY (`GROUP_ID`,`MENU_ID`),
  KEY `FK_GMA_MENU` (`MENU_ID`),
  CONSTRAINT `FK_GMA_GROUP` FOREIGN KEY (`GROUP_ID`) REFERENCES `tb_account_group` (`GROUP_ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_GMA_MENU` FOREIGN KEY (`MENU_ID`) REFERENCES `tb_menu` (`MENU_ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_group_menu_auth`
--

LOCK TABLES `tb_group_menu_auth` WRITE;
/*!40000 ALTER TABLE `tb_group_menu_auth` DISABLE KEYS */;
INSERT INTO `tb_group_menu_auth` VALUES ('a',10000000,'Y','Y','admin','2025-01-18 19:23:49',NULL,NULL),('a',10000001,'Y','Y','admin','2025-01-18 19:23:49',NULL,NULL),('a',10000002,'Y','Y','admin','2025-01-18 19:23:49',NULL,NULL),('a',10000003,'Y','Y','admin','2025-01-18 19:23:49',NULL,NULL),('a',20000000,'Y','N','admin','2025-01-18 19:23:49',NULL,NULL),('a',20000001,'N','N','admin','2025-01-18 19:23:49',NULL,NULL),('a',20000002,'N','N','admin','2025-01-18 19:23:49',NULL,NULL),('a',20000003,'N','N','admin','2025-01-18 19:23:49',NULL,NULL),('a',20000004,'Y','N','admin','2025-01-18 19:23:49',NULL,NULL),('a',30000000,'N','N','admin','2025-01-18 19:23:49',NULL,NULL),('a',30000001,'N','N','admin','2025-01-18 19:23:49',NULL,NULL),('a',30000002,'N','N','admin','2025-01-18 19:23:49',NULL,NULL),('a',30000003,'N','N','admin','2025-01-18 19:23:49',NULL,NULL),('a',30000004,'N','N','admin','2025-01-18 19:23:49',NULL,NULL),('a',40000000,'N','N','admin','2025-01-18 19:23:49',NULL,NULL),('a',40000001,'N','N','admin','2025-01-18 19:23:49',NULL,NULL),('a',40000002,'N','N','admin','2025-01-18 19:23:49',NULL,NULL),('a',50000000,'N','N','admin','2025-01-18 19:23:49',NULL,NULL),('a',50000001,'N','N','admin','2025-01-18 19:23:49',NULL,NULL),('a',50000002,'N','N','admin','2025-01-18 19:23:49',NULL,NULL),('admin',10000000,'Y','Y','admin','2025-01-18 18:20:59',NULL,NULL),('admin',10000001,'Y','Y','admin','2025-01-18 18:20:59',NULL,NULL),('admin',10000002,'Y','Y','admin','2025-01-18 18:20:59',NULL,NULL),('admin',10000003,'Y','Y','admin','2025-01-18 18:20:59',NULL,NULL),('admin',20000000,'Y','Y','admin','2025-01-18 18:20:59',NULL,NULL),('admin',20000001,'N','Y','admin','2025-01-18 18:20:59',NULL,NULL),('admin',20000002,'N','Y','admin','2025-01-18 18:20:59',NULL,NULL),('admin',20000003,'N','Y','admin','2025-01-18 18:20:59',NULL,NULL),('admin',20000004,'Y','Y','admin','2025-01-18 18:20:59',NULL,NULL),('admin',30000000,'Y','Y','admin','2025-01-18 18:20:59',NULL,NULL),('admin',30000001,'Y','Y','admin','2025-01-18 18:20:59',NULL,NULL),('admin',30000002,'Y','Y','admin','2025-01-18 18:20:59',NULL,NULL),('admin',30000003,'Y','Y','admin','2025-01-18 18:20:59',NULL,NULL),('admin',30000004,'Y','Y','admin','2025-01-18 18:20:59',NULL,NULL),('admin',40000000,'Y','Y','admin','2025-01-18 18:20:59',NULL,NULL),('admin',40000001,'Y','Y','admin','2025-01-18 18:20:59',NULL,NULL),('admin',40000002,'Y','Y','admin','2025-01-18 18:20:59',NULL,NULL),('admin',50000000,'Y','Y','admin','2025-01-18 18:20:59',NULL,NULL),('admin',50000001,'Y','Y','admin','2025-01-18 18:20:59',NULL,NULL),('admin',50000002,'Y','Y','admin','2025-01-18 18:20:59',NULL,NULL),('광주센터',10000000,'Y','N','admin','2025-01-18 18:21:41',NULL,NULL),('광주센터',10000001,'Y','N','admin','2025-01-18 18:21:41',NULL,NULL),('광주센터',10000002,'Y','N','admin','2025-01-18 18:21:41',NULL,NULL),('광주센터',10000003,'Y','N','admin','2025-01-18 18:21:41',NULL,NULL),('광주센터',20000000,'Y','N','admin','2025-01-18 18:21:41',NULL,NULL),('광주센터',20000001,'N','N','admin','2025-01-18 18:21:41',NULL,NULL),('광주센터',20000002,'N','N','admin','2025-01-18 18:21:41',NULL,NULL),('광주센터',20000003,'N','N','admin','2025-01-18 18:21:41',NULL,NULL),('광주센터',20000004,'Y','N','admin','2025-01-18 18:21:41',NULL,NULL),('광주센터',30000000,'Y','N','admin','2025-01-18 18:21:41',NULL,NULL),('광주센터',30000001,'Y','N','admin','2025-01-18 18:21:41',NULL,NULL),('광주센터',30000002,'Y','N','admin','2025-01-18 18:21:41',NULL,NULL),('광주센터',30000003,'Y','N','admin','2025-01-18 18:21:41',NULL,NULL),('광주센터',30000004,'Y','N','admin','2025-01-18 18:21:41',NULL,NULL),('광주센터',40000000,'Y','N','admin','2025-01-18 18:21:41',NULL,NULL),('광주센터',40000001,'Y','N','admin','2025-01-18 18:21:41',NULL,NULL),('광주센터',40000002,'Y','N','admin','2025-01-18 18:21:41',NULL,NULL),('광주센터',50000000,'Y','N','admin','2025-01-18 18:21:41',NULL,NULL),('광주센터',50000001,'Y','N','admin','2025-01-18 18:21:41',NULL,NULL),('광주센터',50000002,'Y','N','admin','2025-01-18 18:21:41',NULL,NULL),('운영요원_관리',10000000,'Y','N','admin','2025-01-18 18:21:49',NULL,NULL),('운영요원_관리',10000001,'Y','N','admin','2025-01-18 18:21:49',NULL,NULL),('운영요원_관리',10000002,'Y','N','admin','2025-01-18 18:21:49',NULL,NULL),('운영요원_관리',10000003,'Y','N','admin','2025-01-18 18:21:49',NULL,NULL),('운영요원_관리',20000000,'Y','N','admin','2025-01-18 18:21:49',NULL,NULL),('운영요원_관리',20000001,'N','N','admin','2025-01-18 18:21:49',NULL,NULL),('운영요원_관리',20000002,'N','N','admin','2025-01-18 18:21:49',NULL,NULL),('운영요원_관리',20000003,'N','N','admin','2025-01-18 18:21:49',NULL,NULL),('운영요원_관리',20000004,'Y','N','admin','2025-01-18 18:21:49',NULL,NULL),('운영요원_관리',30000000,'Y','N','admin','2025-01-18 18:21:49',NULL,NULL),('운영요원_관리',30000001,'Y','N','admin','2025-01-18 18:21:49',NULL,NULL),('운영요원_관리',30000002,'Y','N','admin','2025-01-18 18:21:49',NULL,NULL),('운영요원_관리',30000003,'Y','N','admin','2025-01-18 18:21:49',NULL,NULL),('운영요원_관리',30000004,'Y','N','admin','2025-01-18 18:21:49',NULL,NULL),('운영요원_관리',40000000,'Y','N','admin','2025-01-18 18:21:49',NULL,NULL),('운영요원_관리',40000001,'Y','N','admin','2025-01-18 18:21:49',NULL,NULL),('운영요원_관리',40000002,'Y','N','admin','2025-01-18 18:21:49',NULL,NULL),('운영요원_관리',50000000,'Y','N','admin','2025-01-18 18:21:49',NULL,NULL),('운영요원_관리',50000001,'Y','N','admin','2025-01-18 18:21:49',NULL,NULL),('운영요원_관리',50000002,'Y','N','admin','2025-01-18 18:21:49',NULL,NULL),('운영요원_일반',10000000,'Y','N','admin','2025-01-18 18:21:53',NULL,NULL),('운영요원_일반',10000001,'Y','N','admin','2025-01-18 18:21:53',NULL,NULL),('운영요원_일반',10000002,'Y','N','admin','2025-01-18 18:21:53',NULL,NULL),('운영요원_일반',10000003,'Y','N','admin','2025-01-18 18:21:53',NULL,NULL),('운영요원_일반',20000000,'Y','N','admin','2025-01-18 18:21:53',NULL,NULL),('운영요원_일반',20000001,'N','N','admin','2025-01-18 18:21:53',NULL,NULL),('운영요원_일반',20000002,'N','N','admin','2025-01-18 18:21:53',NULL,NULL),('운영요원_일반',20000003,'N','N','admin','2025-01-18 18:21:53',NULL,NULL),('운영요원_일반',20000004,'Y','N','admin','2025-01-18 18:21:53',NULL,NULL),('운영요원_일반',30000000,'Y','N','admin','2025-01-18 18:21:53',NULL,NULL),('운영요원_일반',30000001,'Y','N','admin','2025-01-18 18:21:53',NULL,NULL),('운영요원_일반',30000002,'Y','N','admin','2025-01-18 18:21:53',NULL,NULL),('운영요원_일반',30000003,'Y','N','admin','2025-01-18 18:21:53',NULL,NULL),('운영요원_일반',30000004,'Y','N','admin','2025-01-18 18:21:53',NULL,NULL),('운영요원_일반',40000000,'Y','N','admin','2025-01-18 18:21:53',NULL,NULL),('운영요원_일반',40000001,'Y','N','admin','2025-01-18 18:21:53',NULL,NULL),('운영요원_일반',40000002,'Y','N','admin','2025-01-18 18:21:53',NULL,NULL),('운영요원_일반',50000000,'Y','N','admin','2025-01-18 18:21:53',NULL,NULL),('운영요원_일반',50000001,'Y','N','admin','2025-01-18 18:21:53',NULL,NULL),('운영요원_일반',50000002,'Y','N','admin','2025-01-18 18:21:53',NULL,NULL),('작업요청자',10000000,'Y','N','admin','2025-01-18 18:22:04',NULL,NULL),('작업요청자',10000001,'Y','N','admin','2025-01-18 18:22:04',NULL,NULL),('작업요청자',10000002,'Y','N','admin','2025-01-18 18:22:04',NULL,NULL),('작업요청자',10000003,'Y','N','admin','2025-01-18 18:22:04',NULL,NULL),('작업요청자',20000000,'Y','N','admin','2025-01-18 18:22:04',NULL,NULL),('작업요청자',20000001,'N','N','admin','2025-01-18 18:22:04',NULL,NULL),('작업요청자',20000002,'N','N','admin','2025-01-18 18:22:04',NULL,NULL),('작업요청자',20000003,'N','N','admin','2025-01-18 18:22:04',NULL,NULL),('작업요청자',20000004,'Y','N','admin','2025-01-18 18:22:04',NULL,NULL),('작업요청자',30000000,'Y','N','admin','2025-01-18 18:22:04',NULL,NULL),('작업요청자',30000001,'Y','N','admin','2025-01-18 18:22:04',NULL,NULL),('작업요청자',30000002,'Y','N','admin','2025-01-18 18:22:04',NULL,NULL),('작업요청자',30000003,'Y','N','admin','2025-01-18 18:22:04',NULL,NULL),('작업요청자',30000004,'Y','N','admin','2025-01-18 18:22:04',NULL,NULL),('작업요청자',40000000,'Y','N','admin','2025-01-18 18:22:04',NULL,NULL),('작업요청자',40000001,'Y','N','admin','2025-01-18 18:22:04',NULL,NULL),('작업요청자',40000002,'Y','N','admin','2025-01-18 18:22:04',NULL,NULL),('작업요청자',50000000,'Y','N','admin','2025-01-18 18:22:04',NULL,NULL),('작업요청자',50000001,'Y','N','admin','2025-01-18 18:22:04',NULL,NULL),('작업요청자',50000002,'Y','N','admin','2025-01-18 18:22:04',NULL,NULL),('최고관리자',10000000,'Y','Y','admin','2025-01-18 18:22:15',NULL,NULL),('최고관리자',10000001,'Y','Y','admin','2025-01-18 18:22:15',NULL,NULL),('최고관리자',10000002,'Y','Y','admin','2025-01-18 18:22:15',NULL,NULL),('최고관리자',10000003,'Y','Y','admin','2025-01-18 18:22:15',NULL,NULL),('최고관리자',20000000,'Y','Y','admin','2025-01-18 18:22:15',NULL,NULL),('최고관리자',20000001,'Y','Y','admin','2025-01-18 18:22:15',NULL,NULL),('최고관리자',20000002,'Y','Y','admin','2025-01-18 18:22:15',NULL,NULL),('최고관리자',20000003,'Y','Y','admin','2025-01-18 18:22:15',NULL,NULL),('최고관리자',20000004,'Y','Y','admin','2025-01-18 18:22:15',NULL,NULL),('최고관리자',30000000,'Y','Y','admin','2025-01-18 18:22:15',NULL,NULL),('최고관리자',30000001,'Y','Y','admin','2025-01-18 18:22:15',NULL,NULL),('최고관리자',30000002,'Y','Y','admin','2025-01-18 18:22:15',NULL,NULL),('최고관리자',30000003,'Y','Y','admin','2025-01-18 18:22:15',NULL,NULL),('최고관리자',30000004,'Y','Y','admin','2025-01-18 18:22:15',NULL,NULL),('최고관리자',40000000,'Y','Y','admin','2025-01-18 18:22:15',NULL,NULL),('최고관리자',40000001,'Y','Y','admin','2025-01-18 18:22:15',NULL,NULL),('최고관리자',40000002,'Y','Y','admin','2025-01-18 18:22:15',NULL,NULL),('최고관리자',50000000,'Y','Y','admin','2025-01-18 18:22:15',NULL,NULL),('최고관리자',50000001,'Y','Y','admin','2025-01-18 18:22:15',NULL,NULL),('최고관리자',50000002,'Y','Y','admin','2025-01-18 18:22:15',NULL,NULL);
/*!40000 ALTER TABLE `tb_group_menu_auth` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_menu`
--

DROP TABLE IF EXISTS `tb_menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_menu` (
  `MENU_ID` int(11) NOT NULL,
  `PARENT_MENU_ID` int(11) DEFAULT NULL,
  `MENU_NAME` varchar(100) NOT NULL,
  `MENU_ORDER` int(11) DEFAULT NULL,
  `MENU_ROLE` varchar(50) DEFAULT NULL,
  `MENU_PATH` varchar(200) DEFAULT NULL,
  `MENU_AUTH` varchar(50) DEFAULT NULL,
  `MENU_ICON` varchar(50) DEFAULT NULL,
  `IS_DELETED` varchar(1) DEFAULT NULL,
  `REG_ID` varchar(50) NOT NULL,
  `REG_DT` datetime NOT NULL DEFAULT current_timestamp(),
  `UPD_ID` varchar(50) DEFAULT NULL,
  `UPD_DT` datetime DEFAULT NULL,
  PRIMARY KEY (`MENU_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_menu`
--

LOCK TABLES `tb_menu` WRITE;
/*!40000 ALTER TABLE `tb_menu` DISABLE KEYS */;
INSERT INTO `tb_menu` VALUES (0,9,'HOME',1,'/cable/agency','/cable/agency/view','HOME','/images/icon/menu/line.svg','N','admin','2025-01-17 22:15:01',NULL,NULL),(10000000,0,'선번장관리',1,'/cable/agency','/cable/agency/view','CABLE','/images/icon/menu/line.svg','N','admin','2025-01-17 22:15:01',NULL,NULL),(10000001,10000000,'기관회선관리',2,'/cable/agency','/cable/agency/view','CABLE_AGENCY','/images/icon/menu/line.svg','N','admin','2025-01-17 22:15:01',NULL,NULL),(10000002,10000000,'전용회선관리',2,'/cable/private','/cable/private/view','CABLE_PRIVATE','/images/icon/menu/line.svg','N','admin','2025-01-17 22:15:01',NULL,NULL),(10000003,10000000,'구성ID갱신',2,'/cable/config','/cable/config/view','CABLE_CONFIG','/images/icon/menu/line.svg','N','admin','2025-01-17 22:15:01',NULL,NULL),(20000000,0,'패치현황관리',1,'/patch/vertical','/patch/vertical/view','PATCH','/images/icon/menu/line.svg','N','admin','2025-01-17 22:15:01',NULL,NULL),(20000001,20000000,'수직패치',2,'/patch/vertical','/patch/vertical/view','PATCH_VERTICAL','/images/icon/menu/line.svg','N','admin','2025-01-17 22:15:01',NULL,NULL),(20000002,20000000,'수평패치',2,'/patch/horizontal','/patch/horizontal/view','PATCH_HORIZONTAL','/images/icon/menu/line.svg','N','admin','2025-01-17 22:15:01',NULL,NULL),(20000003,20000000,'DR전용패치',2,'/patch/dr','/patch/dr/view','PATCH_DR','/images/icon/menu/line.svg','N','admin','2025-01-17 22:15:01',NULL,NULL),(20000004,20000000,'DSTP패치',2,'/patch/dstp','/patch/dstp/view','PATCH_DSTP','/images/icon/menu/line.svg','N','admin','2025-01-17 22:15:01',NULL,NULL),(30000000,0,'신청관리',1,'/application/cablelay','/application/cablelay/view','APPLICATION','/images/icon/menu/line.svg','N','admin','2025-01-17 22:15:01',NULL,NULL),(30000001,30000000,'포설신청',2,'/application/cablelay','/application/cablelay/view','APPLICATION_CABLELAY','/images/icon/menu/line.svg','N','admin','2025-01-17 22:15:01',NULL,NULL),(30000002,30000000,'제거신청',2,'/application/remove','/application/remove/view','APPLICATION_REMOVE','/images/icon/menu/line.svg','N','admin','2025-01-17 22:15:01',NULL,NULL),(30000003,30000000,'통신공사 및 검수',2,'/application/construction','/application/construction/view','APPLICATION_CONSTRUCTION','/images/icon/menu/line.svg','N','admin','2025-01-17 22:15:01',NULL,NULL),(30000004,30000000,'QR 코드',2,'/application/qrcode','/application/qrcode/view','APPLICATION_QRCODE','/images/icon/menu/line.svg','N','admin','2025-01-17 22:15:01',NULL,NULL),(40000000,0,'보고서',1,'/report/statistics','/report/statistics/view','REPORT','/images/icon/menu/line.svg','N','admin','2025-01-17 22:15:01',NULL,NULL),(40000001,40000000,'회선통계',2,'/report/statistics','/report/statistics/view','REPORT_STATISTICS','/images/icon/menu/line.svg','N','admin','2025-01-17 22:15:01',NULL,NULL),(40000002,40000000,'통신패치현황',2,'/report/patchstatus','/report/patchstatus/view','REPORT_PATCHSTATUS','/images/icon/menu/line.svg','N','admin','2025-01-17 22:15:01',NULL,NULL),(50000000,0,'운영관리',1,'/operation/user','/operation/user/view','OPERATION','/images/icon/menu/line.svg','N','admin','2025-01-17 22:15:01',NULL,NULL),(50000001,50000000,'사용자',2,'/operation/user','/operation/user/view','OPERATION_USER','/images/icon/menu/line.svg','N','admin','2025-01-17 22:15:01',NULL,NULL),(50000002,50000000,'계정그룹',2,'/operation/group','/operation/group/view','OPERATION_GROUP','/images/icon/menu/line.svg','N','admin','2025-01-17 22:15:01',NULL,NULL);
/*!40000 ALTER TABLE `tb_menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_patch_device`
--

DROP TABLE IF EXISTS `tb_patch_device`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_patch_device` (
  `PATCH_ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `PATCH_NAME` varchar(100) NOT NULL,
  `PATCH_TYPE` varchar(20) NOT NULL,
  `LOCATION_INFO` varchar(100) DEFAULT NULL,
  `TOTAL_PORT_COUNT` int(11) DEFAULT NULL,
  `REMARKS` varchar(200) DEFAULT NULL,
  `REG_ID` varchar(50) NOT NULL,
  `REG_DT` datetime NOT NULL DEFAULT current_timestamp(),
  `UPD_ID` varchar(50) DEFAULT NULL,
  `UPD_DT` datetime DEFAULT NULL,
  PRIMARY KEY (`PATCH_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_patch_device`
--

LOCK TABLES `tb_patch_device` WRITE;
/*!40000 ALTER TABLE `tb_patch_device` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_patch_device` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_patch_port`
--

DROP TABLE IF EXISTS `tb_patch_port`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_patch_port` (
  `PORT_ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `PATCH_ID` bigint(20) NOT NULL,
  `PORT_NAME` varchar(50) NOT NULL,
  `PORT_STATUS` varchar(20) DEFAULT NULL,
  `REMARKS` varchar(200) DEFAULT NULL,
  `REG_ID` varchar(50) NOT NULL,
  `REG_DT` datetime NOT NULL DEFAULT current_timestamp(),
  `UPD_ID` varchar(50) DEFAULT NULL,
  `UPD_DT` datetime DEFAULT NULL,
  PRIMARY KEY (`PORT_ID`),
  KEY `FK_PP_DEVICE` (`PATCH_ID`),
  CONSTRAINT `FK_PP_DEVICE` FOREIGN KEY (`PATCH_ID`) REFERENCES `tb_patch_device` (`PATCH_ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_patch_port`
--

LOCK TABLES `tb_patch_port` WRITE;
/*!40000 ALTER TABLE `tb_patch_port` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_patch_port` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_request_worker`
--

DROP TABLE IF EXISTS `tb_request_worker`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_request_worker` (
  `REQUEST_WORKER_ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `REQUEST_ID` bigint(20) NOT NULL,
  `WORKER_ID` bigint(20) NOT NULL,
  `REG_ID` varchar(50) NOT NULL,
  `REG_DT` datetime NOT NULL DEFAULT current_timestamp(),
  `UPD_ID` varchar(50) DEFAULT NULL,
  `UPD_DT` datetime DEFAULT NULL,
  PRIMARY KEY (`REQUEST_WORKER_ID`),
  KEY `FK_RW_REQUEST` (`REQUEST_ID`),
  KEY `FK_RW_WORKER` (`WORKER_ID`),
  CONSTRAINT `FK_RW_REQUEST` FOREIGN KEY (`REQUEST_ID`) REFERENCES `tb_cable_request` (`REQUEST_ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_RW_WORKER` FOREIGN KEY (`WORKER_ID`) REFERENCES `tb_worker` (`WORKER_ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_request_worker`
--

LOCK TABLES `tb_request_worker` WRITE;
/*!40000 ALTER TABLE `tb_request_worker` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_request_worker` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_user`
--

DROP TABLE IF EXISTS `tb_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_user` (
  `USER_ID` varchar(50) NOT NULL,
  `USER_PWD` varchar(255) NOT NULL,
  `GROUP_ID` varchar(50) NOT NULL,
  `USER_NAME` varchar(50) NOT NULL,
  `JOB_TITLE` varchar(100) DEFAULT NULL,
  `DEPT_NAME` varchar(100) DEFAULT NULL,
  `CONTACT` varchar(50) DEFAULT NULL,
  `STATUS` varchar(20) NOT NULL DEFAULT 'ACTIVE',
  `ALLOWED_IPS` varchar(500) DEFAULT NULL,
  `FIRST_PAGE` varchar(200) DEFAULT NULL,
  `NTOPS_ID` varchar(50) DEFAULT NULL,
  `LAST_LOGIN` datetime DEFAULT NULL,
  `IS_DELETED` varchar(1) DEFAULT NULL,
  `REG_ID` varchar(50) NOT NULL,
  `REG_DT` datetime NOT NULL DEFAULT current_timestamp(),
  `UPD_ID` varchar(50) DEFAULT NULL,
  `UPD_DT` datetime DEFAULT NULL,
  PRIMARY KEY (`USER_ID`),
  KEY `FK_USER_GROUP` (`GROUP_ID`),
  CONSTRAINT `FK_USER_GROUP` FOREIGN KEY (`GROUP_ID`) REFERENCES `tb_account_group` (`GROUP_ID`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_user`
--

LOCK TABLES `tb_user` WRITE;
/*!40000 ALTER TABLE `tb_user` DISABLE KEYS */;
INSERT INTO `tb_user` VALUES ('a','$2a$10$kBxdoonGkp0NDTznGNhblucqhKNYtnmOfg.QxUqwhyqZO7BaOfsDe','admin','명회','노예','광산','063-251-9999','ACTIVE','0.0.0.0','10000002','ntops명회','2025-01-22 20:33:56','N','admin','2025-01-17 21:10:43',NULL,NULL),('hd','$2a$10$tembpEYvIaUYed7EBxvvDu.lYrz7m3IC4C6819fhpES80moVWzvn.','작업요청자','aaa','aaaa','aaaaaa','aaaaa','DENY','aaaaaaa','10000003','aa','2025-01-22 00:40:07','Y','admin','2025-01-21 14:58:39','a','2025-01-22 00:39:47'),('hdd','$2a$10$XlckNdTi6cryLpdn1Gn9iOJF.nrykEeToBhaWLwL1QbnnplXpVf4u','a','23a5235','a235325','5a3252','2a3523','ACTIVE','a235235','10000001','11234',NULL,'Y','admin','2025-01-21 14:59:34',NULL,NULL),('hddd','$2a$10$5mnnptpKcsdgF0ck99V2TOYuvdb6X9U2LsOtE/zv6GR31Wxfyq6Y2','a','123124','12412412','1252151','124124','ACTIVE','125215','10000001','11',NULL,'Y','admin','2025-01-21 15:02:25',NULL,NULL),('hi','$2a$10$yKljfbqAerROFKDKl/qRVuvEhcDNuvu3BO3h..dAxDypbv7kLT0I2','a','abcdefg','zz','ff','ss','ACTIVE','1.2.3.4','10000001','ntopshi',NULL,'Y','admin','2025-01-22 11:32:04',NULL,NULL),('user01','$2a$10$kBxdoonGkp0NDTznGNhblucqhKNYtnmOfg.QxUqwhyqZO7BaOfsDe','a','김철수','팀장','기술지원팀','010-1234-5678','ACTIVE','192.168.0.1','10000001','ntopsuser01','2025-01-20 16:16:41','N','admin','2025-01-17 21:19:58',NULL,NULL),('user02','$2a$10$kBxdoonGkp0NDTznGNhblucqhKNYtnmOfg.QxUqwhyqZO7BaOfsDe','광주센터','이영희','과장','영업팀','010-2345-6789','ACTIVE','192.168.0.2','10000001','ntopsuser02',NULL,'N','admin','2025-01-17 21:19:58',NULL,NULL),('user03','$2a$10$kBxdoonGkp0NDTznGNhblucqhKNYtnmOfg.QxUqwhyqZO7BaOfsDe','광주센터','박민수','사원','운영팀','010-3456-7890','ACTIVE','192.168.0.3','10000001','ntopsuser03',NULL,'N','admin','2025-01-17 21:19:58',NULL,NULL),('user04','$2a$10$kBxdoonGkp0NDTznGNhblucqhKNYtnmOfg.QxUqwhyqZO7BaOfsDe','광주센터','최유리','대리','인사팀','010-4567-8901','ACTIVE','192.168.0.4','10000001','ntopsuser04',NULL,'N','admin','2025-01-17 21:19:58',NULL,NULL),('user05','$2a$10$kBxdoonGkp0NDTznGNhblucqhKNYtnmOfg.QxUqwhyqZO7BaOfsDe','광주센터','장영훈','주임','마케팅팀','010-5678-9012','ACTIVE','192.168.0.5','10000001','ntopsuser05',NULL,'N','admin','2025-01-17 21:19:58',NULL,NULL),('user06','$2a$10$kBxdoonGkp0NDTznGNhblucqhKNYtnmOfg.QxUqwhyqZO7BaOfsDe','광주센터','윤수정','팀장','보안관리팀','010-6789-0123','ACTIVE','192.168.0.6','10000001','ntopsuser06',NULL,'N','admin','2025-01-17 21:19:58',NULL,NULL),('user07','$2a$10$kBxdoonGkp0NDTznGNhblucqhKNYtnmOfg.QxUqwhyqZO7BaOfsDe','광주센터','정예진','과장','네트워크팀','010-7890-1234','ACTIVE','192.168.0.7','10000001','ntopsuser07',NULL,'N','admin','2025-01-17 21:19:58',NULL,NULL),('user08','$2a$10$kBxdoonGkp0NDTznGNhblucqhKNYtnmOfg.QxUqwhyqZO7BaOfsDe','광주센터','한규민','대리','IT지원팀','010-8901-2345','ACTIVE','192.168.0.8','10000001','ntopsuser08',NULL,'N','admin','2025-01-17 21:19:58',NULL,NULL),('user09','$2a$10$kBxdoonGkp0NDTznGNhblucqhKNYtnmOfg.QxUqwhyqZO7BaOfsDe','광주센터','오수진','사원','품질보증팀','010-9012-3456','ACTIVE','192.168.0.9','10000001','ntopsuser09',NULL,'N','admin','2025-01-17 21:19:58',NULL,NULL),('user10','$2a$10$kBxdoonGkp0NDTznGNhblucqhKNYtnmOfg.QxUqwhyqZO7BaOfsDe','광주센터','유상우','부장','영업팀','010-0123-4567','ACTIVE','192.168.0.10','10000001','ntopsuser10',NULL,'N','admin','2025-01-17 21:19:58',NULL,NULL),('user11','$2a$10$kBxdoonGkp0NDTznGNhblucqhKNYtnmOfg.QxUqwhyqZO7BaOfsDe','운영요원_관리','홍길동','소장','건설관리팀','011-1111-2222','ACTIVE','192.168.0.11','10000001','ntopsuser11',NULL,'N','admin','2025-01-17 21:19:58',NULL,NULL),('user12','$2a$10$kBxdoonGkp0NDTznGNhblucqhKNYtnmOfg.QxUqwhyqZO7BaOfsDe','운영요원_관리','강하윤','차장','기획관리팀','010-2222-3333','ACTIVE','192.168.0.12','10000001','ntopsuser12',NULL,'N','admin','2025-01-17 21:19:58',NULL,NULL),('user13','$2a$10$kBxdoonGkp0NDTznGNhblucqhKNYtnmOfg.QxUqwhyqZO7BaOfsDe','운영요원_관리','김민재','팀원','고객지원팀','010-3333-4444','ACTIVE','192.168.0.13','10000001','ntopsuser13',NULL,'N','admin','2025-01-17 21:19:58',NULL,NULL),('user14','$2a$10$kBxdoonGkp0NDTznGNhblucqhKNYtnmOfg.QxUqwhyqZO7BaOfsDe','운영요원_관리','박은영','차장','총무팀','010-4444-5555','ACTIVE','192.168.0.14','10000001','ntopsuser14',NULL,'N','admin','2025-01-17 21:19:58',NULL,NULL),('user15','$2a$10$kBxdoonGkp0NDTznGNhblucqhKNYtnmOfg.QxUqwhyqZO7BaOfsDe','운영요원_일반','이동건','사원','제품마케팅팀','010-5555-6666','ACTIVE','192.168.0.15','10000001','ntopsuser15',NULL,'N','admin','2025-01-17 21:19:58',NULL,NULL),('user16','$2a$10$kBxdoonGkp0NDTznGNhblucqhKNYtnmOfg.QxUqwhyqZO7BaOfsDe','운영요원_일반','임소진','팀장','정보보안팀','010-6666-7777','ACTIVE','192.168.0.16','10000001','ntopsuser16',NULL,'N','admin','2025-01-17 21:19:58',NULL,NULL),('user17','$2a$10$kBxdoonGkp0NDTznGNhblucqhKNYtnmOfg.QxUqwhyqZO7BaOfsDe','운영요원_일반','최진호','대리','시스템관리팀','010-7777-8888','ACTIVE','192.168.0.17','10000001','ntopsuser17',NULL,'N','admin','2025-01-17 21:19:58',NULL,NULL),('user18','$2a$10$kBxdoonGkp0NDTznGNhblucqhKNYtnmOfg.QxUqwhyqZO7BaOfsDe','운영요원_일반','신예은','주임','서버운영팀','010-8888-9999','ACTIVE','192.168.0.18','10000001','ntopsuser18',NULL,'N','admin','2025-01-17 21:19:58',NULL,NULL),('user19','$2a$10$kBxdoonGkp0NDTznGNhblucqhKNYtnmOfg.QxUqwhyqZO7BaOfsDe','작업요청자','장은지','과장','테스트팀','010-9999-0000','ACTIVE','192.168.0.19','10000001','ntopsuser19',NULL,'N','admin','2025-01-17 21:19:58',NULL,NULL),('user20','$2a$10$kBxdoonGkp0NDTznGNhblucqhKNYtnmOfg.QxUqwhyqZO7BaOfsDe','최고관리자','윤상혁','부장','국내영업팀','010-0000-1111','ACTIVE','192.168.0.20','10000001','ntopsuser20',NULL,'N','admin','2025-01-17 21:19:58',NULL,NULL),('ㅁ','$2a$10$5YIiVwOXzxxkU.6KZkYFReWHCn9tQ/yyVP0OtZJ1tUKvXitGE2zDG','a','325','gvi','5634','ytf','ACTIVE','9u90y','10000001','999','2025-01-21 17:54:20','Y','admin','2025-01-21 14:12:08',NULL,NULL);
/*!40000 ALTER TABLE `tb_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_worker`
--

DROP TABLE IF EXISTS `tb_worker`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_worker` (
  `WORKER_ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `COMPANY_NAME` varchar(100) NOT NULL,
  `JOB_TITLE` varchar(100) DEFAULT NULL,
  `WORKER_NAME` varchar(50) NOT NULL,
  `CONTACT` varchar(50) DEFAULT NULL,
  `ETC_INFO` varchar(200) DEFAULT NULL,
  `REG_ID` varchar(50) NOT NULL,
  `REG_DT` datetime NOT NULL DEFAULT current_timestamp(),
  `UPD_ID` varchar(50) DEFAULT NULL,
  `UPD_DT` datetime DEFAULT NULL,
  PRIMARY KEY (`WORKER_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_worker`
--

LOCK TABLES `tb_worker` WRITE;
/*!40000 ALTER TABLE `tb_worker` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_worker` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'cmsdb'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-22 22:00:22
