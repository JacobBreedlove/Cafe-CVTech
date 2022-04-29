-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 29, 2022 at 07:39 PM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cafe-cvtech`
--

-- --------------------------------------------------------

--
-- Table structure for table `cashiers`
--

DROP TABLE IF EXISTS `cashiers`;
CREATE TABLE IF NOT EXISTS `cashiers` (
  `Id` int(6) NOT NULL,
  `Name` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cashiers`
--

INSERT INTO `cashiers` (`Id`, `Name`) VALUES
(134567, 'Sarah Smith'),
(943765, 'James Johnson'),
(976195, 'Kyle Mantooth'),
(438196, 'Reese Lane'),
(946287, 'Bill Claxton');

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
CREATE TABLE IF NOT EXISTS `items` (
  `fname` varchar(30) NOT NULL,
  `price` varchar(4) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`fname`, `price`) VALUES
('Cheeseburger', '4'),
('Hamburger', '3'),
('Chicken Tenders', '3'),
('Salad', '3'),
('Special', '5'),
('French Fries', '3'),
('Tater Tots', '3'),
('Chips', '2'),
('Candy', '1'),
('Sample', '2'),
('Coke', '2'),
('Dr. Pepper', '2'),
('Sprite', '2'),
('Coffee', '3'),
('Tea', '2');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
CREATE TABLE IF NOT EXISTS `orders` (
  `DoO` varchar(30) NOT NULL,
  `Cashier` varchar(6) NOT NULL,
  `items` varchar(260) NOT NULL,
  `cost` varchar(10) NOT NULL,
  `payment` varchar(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`DoO`, `Cashier`, `items`, `cost`, `payment`) VALUES
('2021-05-12 07:34:00pm', '134567', '', '', ''),
('2021-05-12 07:35:59pm', '134567', '', '', ''),
('2021-05-12 07:38:16pm', '134567', '', '', ''),
('2021-05-12 07:38:17pm', '134567', '', '', ''),
('2021-05-12 07:38:32pm', '', '', '', ''),
('2021-05-12 07:38:44pm', '134567', '', '', ''),
('2021-05-12 07:39:10pm', '134567', '', '', ''),
('2021-05-12 07:39:59pm', '134567', '', '', ''),
('2021-05-12 07:40:16pm', '134567', '', '', ''),
('2021-05-12 07:40:37pm', '134567', '', '', ''),
('2021-05-12 07:40:49pm', '134567', '', '', ''),
('2021-05-12 07:40:50pm', '134567', '', '', ''),
('2021-05-12 07:41:00pm', '134567', '', '', ''),
('2021-05-12 07:41:01pm', '134567', '', '', ''),
('2021-05-12 07:41:11pm', '134567', '', '', ''),
('2021-05-12 07:41:17pm', '134567', '', '', ''),
('2021-05-12 07:41:32pm', '134567', '', '', ''),
('2021-05-12 07:41:33pm', '134567', '', '', ''),
('2021-05-12 07:41:37pm', '134567', '', '', ''),
('2021-05-12 07:41:38pm', '134567', '', '', ''),
('2021-05-12 07:41:48pm', '134567', '', '', ''),
('2021-05-12 07:41:55pm', '134567', '', '', ''),
('2021-05-12 07:42:09pm', '134567', '', '', ''),
('2021-05-12 07:42:46pm', '134567', '', '', ''),
('2021-05-12 07:42:51pm', '134567', '', '', ''),
('2021-05-12 07:42:58pm', '134567', '', '', ''),
('2021-05-13 05:30:56pm', '', '', '', ''),
('2021-05-13 05:31:26pm', '', '', '', ''),
('2021-05-13 05:33:37pm', '', '', '', ''),
('2021-05-13 05:33:54pm', '', '', '', ''),
('2021-05-13 05:34:22pm', '', '', '', ''),
('2021-05-13 05:43:53pm', '', '', '', ''),
('2021-05-13 05:43:54pm', '', '', '', ''),
('2021-05-13 05:44:19pm', '', '', '', ''),
('2021-05-13 05:44:48pm', '', 'Coke1,Dr. Pepper1,Sprite1', '$06.27', 'cash'),
('2021-05-13 05:45:03pm', '', 'Coke1,Dr. Pepper1', '$04.18', 'card'),
('2021-05-13 05:45:28pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 05:47:02pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 05:47:03pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 05:47:04pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 05:47:37pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 05:49:03pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 05:49:32pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 05:51:07pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 05:51:18pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 05:51:32pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 05:51:47pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 05:51:59pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 05:52:37pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 05:52:46pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 05:52:59pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 05:53:25pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 05:53:49pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 05:54:06pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 05:54:17pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 05:54:32pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 05:54:38pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 05:54:43pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 05:55:04pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 05:55:09pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 05:55:17pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 05:55:30pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 05:55:34pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 05:55:43pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 05:55:53pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 05:55:57pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 05:56:01pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 05:56:26pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 05:56:39pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 05:56:45pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 05:56:51pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 05:56:56pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 05:57:36pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 05:57:37pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 05:57:54pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 05:57:55pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 06:00:28pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 06:00:39pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 06:01:01pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 06:01:15pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 06:01:16pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 06:01:26pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 06:01:37pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 06:01:38pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 06:01:42pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 06:01:49pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 06:01:57pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 06:02:09pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 06:02:13pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 06:02:21pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 06:02:50pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 06:03:05pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 06:03:11pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 06:03:19pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 06:03:33pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 06:03:38pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 06:03:48pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 06:04:08pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 06:04:15pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 06:04:25pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 06:04:33pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 06:04:40pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 06:04:47pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 06:04:52pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 06:05:14pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 06:05:19pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 06:05:25pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 06:05:29pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 06:05:35pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 06:06:42pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 06:06:51pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 06:07:02pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 06:07:03pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 06:07:19pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 06:07:34pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 06:07:43pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 06:08:13pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 06:08:28pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 06:08:39pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 06:09:16pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 06:13:04pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 06:13:09pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 06:15:34pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 06:16:30pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 06:16:55pm', '', 'Coke1,Dr. Pepper1', '$04.18', ''),
('2021-05-13 06:18:01pm', '134567', 'French Fries1,Tater Tots1,Dr. Pepper1', '$08.36', 'cash'),
('2021-05-13 06:18:31pm', '134567', 'French Fries1,Tater Tots1,Dr. Pepper1', '$08.36', 'cash'),
('2021-05-13 06:18:48pm', '134567', 'Coke1,Dr. Pepper1,Coffee1', '$07.32', 'cash'),
('2021-05-13 06:20:33pm', '134567', 'Coke1,Dr. Pepper1,Coffee1', '$07.32', 'cash'),
('2021-05-13 06:51:06pm', '134567', 'French Fries2,Tater Tots2,Chips2', '$16.72', 'cash'),
('2021-05-13 06:57:51pm', '134567', 'French Fries2,Tater Tots2,Chips2', '$16.72', 'cash'),
('2021-05-13 07:35:42pm', '134567', 'French Fries2,Tater Tots2,Chips2', '$16.72', 'cash'),
('2021-05-13 07:36:08pm', '134567', 'French Fries2,Tater Tots2,Chips2', '$16.72', 'cash'),
('2021-05-13 07:37:49pm', '134567', 'French Fries2,Tater Tots2,Chips2', '$16.72', 'cash'),
('2021-05-13 07:39:31pm', '134567', 'French Fries2,Tater Tots2,Chips2', '$16.72', 'cash'),
('2021-05-13 07:40:43pm', '134567', 'French Fries2,Tater Tots2,Chips2', '$16.72', 'cash'),
('2021-05-13 07:41:02pm', '134567', 'French Fries2,Tater Tots2,Chips2', '$16.72', 'cash'),
('2021-05-13 07:41:19pm', '134567', 'French Fries2,Tater Tots2,Chips2', '$16.72', 'cash'),
('2021-05-13 07:41:27pm', '134567', 'French Fries2,Tater Tots2,Chips2', '$16.72', 'cash'),
('2021-05-13 07:41:42pm', '134567', 'French Fries2,Tater Tots2,Chips2', '$16.72', 'cash'),
('2021-05-13 07:41:48pm', '134567', 'French Fries2,Tater Tots2,Chips2', '$16.72', 'cash'),
('2021-05-13 07:42:00pm', '134567', 'French Fries2,Tater Tots2,Chips2', '$16.72', 'cash'),
('2021-05-13 07:42:10pm', '134567', 'French Fries2,Tater Tots2,Chips2', '$16.72', 'cash'),
('2021-05-13 07:42:17pm', '134567', 'French Fries2,Tater Tots2,Chips2', '$16.72', 'cash'),
('2021-05-13 07:42:48pm', '134567', 'French Fries2,Tater Tots2,Chips2', '$16.72', 'cash'),
('2021-05-13 07:43:04pm', '134567', 'French Fries2,Tater Tots2,Chips2', '$16.72', 'cash'),
('2021-05-13 07:43:09pm', '134567', 'French Fries2,Tater Tots2,Chips2', '$16.72', 'cash'),
('2021-05-13 07:43:18pm', '134567', 'French Fries2,Tater Tots2,Chips2', '$16.72', 'cash'),
('2021-05-13 07:43:23pm', '134567', 'French Fries2,Tater Tots2,Chips2', '$16.72', 'cash'),
('2021-05-13 07:43:39pm', '134567', 'French Fries2,Tater Tots2,Chips2', '$16.72', 'cash'),
('2021-05-13 07:43:47pm', '134567', 'French Fries2,Tater Tots2,Chips2', '$16.72', 'cash'),
('2021-05-13 07:43:56pm', '134567', 'French Fries2,Tater Tots2,Chips2', '$16.72', 'cash'),
('2021-05-13 07:44:42pm', '134567', 'French Fries2,Tater Tots2,Chips2', '$16.72', 'cash'),
('2021-05-13 07:44:47pm', '134567', 'French Fries2,Tater Tots2,Chips2', '$16.72', 'cash'),
('2021-05-13 07:47:40pm', '134567', 'French Fries2,Tater Tots2,Chips2', '$16.72', 'cash'),
('2021-05-13 07:47:54pm', '134567', 'French Fries2,Tater Tots2,Chips2', '$16.72', 'cash'),
('2021-05-13 07:48:03pm', '134567', 'French Fries2,Tater Tots2,Chips2', '$16.72', 'cash'),
('2021-05-13 07:48:24pm', '134567', 'French Fries2,Tater Tots2,Chips2', '$16.72', 'cash'),
('2021-05-13 07:48:42pm', '134567', 'French Fries2,Tater Tots2,Chips2', '$16.72', 'cash'),
('2021-05-13 07:49:01pm', '134567', 'French Fries2,Tater Tots2,Chips2', '$16.72', 'cash'),
('2021-05-13 07:57:01pm', '134567', 'French Fries2,Tater Tots2,Chips2', '$16.72', 'cash'),
('2021-05-13 07:57:09pm', '134567', 'French Fries2,Tater Tots2,Chips2', '$16.72', 'cash'),
('2021-05-13 07:57:33pm', '134567', 'French Fries2,Tater Tots2,Chips2', '$16.72', 'cash'),
('2021-05-13 07:57:43pm', '134567', 'French Fries2,Tater Tots2,Chips2', '$16.72', 'cash'),
('2021-05-13 07:58:05pm', '134567', 'French Fries2,Tater Tots2,Chips2', '$16.72', 'cash'),
('2021-05-13 07:58:11pm', '134567', 'French Fries2,Tater Tots2,Chips2', '$16.72', 'cash'),
('2021-05-13 07:58:20pm', '134567', 'French Fries2,Tater Tots2,Chips2', '$16.72', 'cash'),
('2021-05-13 07:58:35pm', '134567', 'French Fries2,Tater Tots2,Chips2', '$16.72', 'cash'),
('2021-05-13 07:58:41pm', '134567', 'French Fries2,Tater Tots2,Chips2', '$16.72', 'cash'),
('2021-05-13 07:58:49pm', '134567', 'French Fries2,Tater Tots2,Chips2', '$16.72', 'cash'),
('2021-05-14 07:09:54pm', '134567', 'Coke1,Dr. Pepper1,Sprite3,Coffee1', '$13.59', 'cash'),
('2021-05-14 07:09:57pm', '134567', 'Coke1,Dr. Pepper1,Sprite3,Coffee1', '$13.59', 'cash'),
('2021-05-14 08:11:08pm', '134567', 'Coke1,Dr. Pepper1,Sprite1', '$06.27', 'Cash'),
('2021-05-14 08:11:21pm', '134567', 'Coke1,Dr. Pepper1,Sprite1', '$06.27', 'Cash'),
('2021-05-14 08:11:28pm', '134567', 'Coke1,Sprite1,Coffee1', '$07.32', 'Cash'),
('2021-05-14 08:11:52pm', '134567', 'Coke1,Sprite1,Coffee1', '$07.32', 'Cash'),
('2021-05-14 08:12:05pm', '134567', 'Coke1,Coffee1,Sprite1', '$07.32', ''),
('2021-05-17 05:40:30pm', '', 'Coke1,Dr. Pepper3,Sprite1', '$10.45', 'Cash'),
('2021-05-17 05:42:43pm', '', 'Coke3,Dr. Pepper1,Sprite3', '$14.63', 'Cash'),
('2021-05-17 05:43:46pm', '', 'Coke1', '$02.09', 'Cash'),
('2021-05-17 05:43:52pm', '', 'Coke1', '$02.09', 'Cash'),
('2021-05-17 05:44:10pm', '', '', '', 'Cash'),
('2021-05-17 05:44:18pm', '', '', '', 'Cash'),
('2021-05-17 05:44:32pm', '', 'Coke1,Sprite2,Coffee1', '$09.40', 'Cash'),
('2021-05-17 05:45:01pm', '', 'Coke1', '$02.09', 'Cash'),
('2021-05-17 05:45:32pm', '', 'Coke1', '$02.09', 'Cash'),
('2021-05-17 05:45:47pm', '', 'Coke1', '$02.09', 'Cash'),
('2021-05-17 05:46:33pm', '', 'Coke1', '$02.09', 'Cash'),
('2021-05-17 05:46:34pm', '', 'Coke1', '$02.09', 'Cash'),
('2021-05-17 05:46:48pm', '', 'Coke1', '$02.09', 'Cash'),
('2021-05-17 05:46:56pm', '', 'Coke1', '$02.09', 'Cash'),
('2021-05-17 05:47:10pm', '', 'Coke1', '$02.09', 'Cash'),
('2021-05-17 05:47:15pm', '', 'Coke1', '$02.09', 'Cash'),
('2021-05-17 05:47:20pm', '', 'Coke1', '$02.09', 'Cash'),
('2021-05-17 05:47:25pm', '', 'Coke1', '$02.09', 'Cash'),
('2021-05-17 05:47:34pm', '', 'Coke1', '$02.09', 'Cash'),
('2021-05-17 05:47:57pm', '', 'Coke1', '$02.09', 'Cash'),
('2021-05-17 05:48:15pm', '', 'Coke1', '$02.09', 'Cash'),
('2021-05-17 05:48:26pm', '', 'Coke1', '$02.09', 'Cash'),
('2021-05-17 05:48:35pm', '', 'Coke1', '$02.09', 'Cash'),
('2021-05-17 05:48:45pm', '', 'Coke1', '$02.09', 'Cash'),
('2021-05-17 05:48:54pm', '', 'Coke1', '$02.09', 'Cash'),
('2021-05-17 06:23:27pm', '134567', 'French Fries1,Tater Tots1,Dr. Pepper3,Coke1,Sprite3', '$20.90', 'Card'),
('2021-05-17 06:44:11pm', '134567', 'Coke1,Sprite1,Sample3,Chips1,Tater Tots1', '$15.68', 'Cash'),
('2022-04-29 07:38:14pm', '438196', 'Coke1,Dr. Pepper1,Coffee1', '$07.32', 'Card');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
