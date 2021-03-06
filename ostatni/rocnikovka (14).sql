-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Počítač: 127.0.0.1
-- Vytvořeno: Ned 12. čen 2022, 19:44
-- Verze serveru: 10.4.20-MariaDB
-- Verze PHP: 7.3.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databáze: `rocnikovka`
--

-- --------------------------------------------------------

--
-- Zástupná struktura pro pohled `adminrodiny`
-- (Vlastní pohled viz níže)
--
CREATE TABLE `adminrodiny` (
`id_uzi` int(11)
,`id_hla` int(11)
);

-- --------------------------------------------------------

--
-- Struktura tabulky `markety`
--

CREATE TABLE `markety` (
  `id_mark` int(11) NOT NULL,
  `nazev` varchar(64) COLLATE utf8mb4_czech_ci NOT NULL,
  `mesto` varchar(64) COLLATE utf8mb4_czech_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_czech_ci;

--
-- Vypisuji data pro tabulku `markety`
--

INSERT INTO `markety` (`id_mark`, `nazev`, `mesto`) VALUES
(0, 'basic', 'basic'),
(55, 'Lidl', 'Ústí nad Labem'),
(56, 'Kaufland', 'Litoměřice'),
(57, 'Samoska', 'namesti');

-- --------------------------------------------------------

--
-- Struktura tabulky `opravneni`
--

CREATE TABLE `opravneni` (
  `id_opr` int(11) NOT NULL,
  `name` varchar(64) COLLATE utf8mb4_czech_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_czech_ci;

--
-- Vypisuji data pro tabulku `opravneni`
--

INSERT INTO `opravneni` (`id_opr`, `name`) VALUES
(1, 'admin'),
(2, 'normal user');

-- --------------------------------------------------------

--
-- Struktura tabulky `polozky`
--

CREATE TABLE `polozky` (
  `id_pol` int(11) NOT NULL,
  `nazev` varchar(64) COLLATE utf8mb4_czech_ci NOT NULL,
  `id_szn` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_czech_ci;

--
-- Vypisuji data pro tabulku `polozky`
--

INSERT INTO `polozky` (`id_pol`, `nazev`, `id_szn`) VALUES
(140, 'dasdas', 2),
(149, 'XDdasda', 10),
(150, 'dasdad', 9),
(152, 'dasd', 6),
(153, 'dasd', 7),
(154, 'XdasD', 12),
(164, 'dasdas', 1),
(172, 'dadad', 3),
(173, 'XDD', 3),
(174, 'dasda2', 9),
(175, 'dasdas', 1),
(176, 'dada', 3),
(177, 'dasdads', 12),
(180, 'dads4', 12),
(181, 'dadas', 13),
(182, 'dasda', 12),
(183, 'rum', 3),
(184, 'chleba', 7),
(186, 'Jogurt', 5),
(187, 'Džus', 16),
(188, 'Maso', 8),
(189, 'dasadsas', 12),
(190, 'dsasadasdas', 3),
(191, 'dasdas', 1),
(192, 'dasasd', 3),
(193, 'dsaasd', 3),
(194, 'dasads', 3),
(195, 'daads', 13),
(196, 'Pivo - plzeň', 3),
(197, 'Brambůrky slané', 1),
(198, 'Chleba', 7),
(199, 'Sprite', 16),
(200, 'Rohlíky', 7),
(201, 'Pivo', 3);

-- --------------------------------------------------------

--
-- Struktura tabulky `pol_sez`
--

CREATE TABLE `pol_sez` (
  `id_sez` int(11) NOT NULL,
  `id_pol` int(11) NOT NULL,
  `kusy` int(11) NOT NULL,
  `id_sta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_czech_ci;

--
-- Vypisuji data pro tabulku `pol_sez`
--

INSERT INTO `pol_sez` (`id_sez`, `id_pol`, `kusy`, `id_sta`) VALUES
(105, 183, 2, 2),
(105, 184, 1, 2),
(105, 186, 4, 2),
(105, 187, 6, 2),
(105, 188, 4, 2),
(118, 193, 2, 2),
(118, 194, 22, 2),
(118, 195, 22, 2),
(119, 196, 60, 2),
(119, 197, 2, 2),
(119, 198, 1, 2),
(119, 199, 2, 2),
(119, 200, 15, 2),
(124, 201, 2, 2);

-- --------------------------------------------------------

--
-- Struktura tabulky `rodiny`
--

CREATE TABLE `rodiny` (
  `id_fam` int(11) NOT NULL,
  `id_hla` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_czech_ci;

--
-- Vypisuji data pro tabulku `rodiny`
--

INSERT INTO `rodiny` (`id_fam`, `id_hla`) VALUES
(0, 0),
(1, 1);

-- --------------------------------------------------------

--
-- Struktura tabulky `serazeni`
--

CREATE TABLE `serazeni` (
  `id_mark` int(11) NOT NULL,
  `pozice` int(11) NOT NULL,
  `id_typ` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_czech_ci;

--
-- Vypisuji data pro tabulku `serazeni`
--

INSERT INTO `serazeni` (`id_mark`, `pozice`, `id_typ`) VALUES
(0, 0, 1),
(0, 1, 3),
(0, 2, 12),
(0, 3, 13),
(0, 4, 9),
(0, 5, 8),
(0, 6, 5),
(0, 7, 14),
(0, 8, 16),
(0, 9, 11),
(0, 10, 4),
(0, 11, 7),
(0, 12, 2),
(0, 13, 10),
(0, 14, 6),
(0, 15, 15),
(55, 0, 1),
(55, 1, 16),
(55, 2, 12),
(55, 3, 11),
(55, 4, 7),
(55, 5, 3),
(55, 6, 9),
(55, 7, 6),
(55, 8, 10),
(55, 9, 13),
(55, 10, 5),
(55, 11, 4),
(55, 12, 14),
(55, 13, 8),
(55, 14, 15),
(55, 15, 2),
(56, 0, 7),
(56, 1, 5),
(56, 2, 3),
(56, 3, 13),
(56, 4, 12),
(56, 5, 1),
(56, 6, 9),
(56, 7, 8),
(56, 8, 14),
(56, 9, 16),
(56, 10, 11),
(56, 11, 4),
(56, 12, 2),
(56, 13, 10),
(56, 14, 6),
(56, 15, 15),
(57, 0, 14),
(57, 1, 11),
(57, 2, 3),
(57, 3, 1),
(57, 4, 12),
(57, 5, 13),
(57, 6, 9),
(57, 7, 8),
(57, 8, 5),
(57, 9, 16),
(57, 10, 4),
(57, 11, 7),
(57, 12, 2),
(57, 13, 10),
(57, 14, 6),
(57, 15, 15);

-- --------------------------------------------------------

--
-- Zástupná struktura pro pohled `serazniseznamu`
-- (Vlastní pohled viz níže)
--
CREATE TABLE `serazniseznamu` (
`id_mark` int(11)
,`id_sez` int(11)
,`nazev` varchar(64)
,`id_pol` int(11)
,`kusy` int(11)
,`nazevSerazeni` varchar(64)
,`id_sta` int(11)
,`stav` varchar(64)
);

-- --------------------------------------------------------

--
-- Struktura tabulky `seznamy`
--

CREATE TABLE `seznamy` (
  `id_sez` int(11) NOT NULL,
  `done` tinyint(1) NOT NULL,
  `nazev` varchar(64) COLLATE utf8mb4_czech_ci NOT NULL,
  `cena` int(11) NOT NULL,
  `datum` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_uzi` int(11) NOT NULL,
  `id_fam` int(11) NOT NULL,
  `typ` varchar(64) COLLATE utf8mb4_czech_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_czech_ci;

--
-- Vypisuji data pro tabulku `seznamy`
--

INSERT INTO `seznamy` (`id_sez`, `done`, `nazev`, `cena`, `datum`, `id_uzi`, `id_fam`, `typ`) VALUES
(105, 0, 'Seznam do lidlu', 187, '2022-06-12 14:31:04', 1, 1, 'alko'),
(118, 0, 'dasasdasd', 0, '2022-06-12 14:31:04', 31, 0, 'alko'),
(119, 0, 'Seznam do Kauflandu', 300, '2022-06-12 14:31:04', 1, 1, 'alko'),
(121, 0, 'sdadsadsada', 0, '2022-06-12 14:26:34', 31, 0, 'alko'),
(124, 0, 'List', 480, '2022-06-12 17:04:13', 1, 1, ''),
(126, 0, 'dasasd', 0, '2022-06-12 17:42:50', 1, 1, '');

-- --------------------------------------------------------

--
-- Struktura tabulky `stavy`
--

CREATE TABLE `stavy` (
  `id_sta` int(11) NOT NULL,
  `nazev` varchar(64) COLLATE utf8mb4_czech_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_czech_ci;

--
-- Vypisuji data pro tabulku `stavy`
--

INSERT INTO `stavy` (`id_sta`, `nazev`) VALUES
(1, 'koupeno'),
(2, 'nekoupeno');

-- --------------------------------------------------------

--
-- Struktura tabulky `typy`
--

CREATE TABLE `typy` (
  `id_szn` int(11) NOT NULL,
  `nazev` varchar(64) COLLATE utf8mb4_czech_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_czech_ci;

--
-- Vypisuji data pro tabulku `typy`
--

INSERT INTO `typy` (`id_szn`, `nazev`) VALUES
(1, '-'),
(3, 'alko'),
(12, 'děti'),
(13, 'elektronika'),
(9, 'koupelna'),
(8, 'maso'),
(5, 'mléčné výrobky'),
(14, 'nádobí'),
(16, 'nealko'),
(11, 'oblečení'),
(4, 'ovoce a zelenina'),
(7, 'pečivo'),
(2, 'sladkosti'),
(10, 'uzeniny'),
(6, 'zahrada'),
(15, 'zamražené');

-- --------------------------------------------------------

--
-- Struktura tabulky `uzivatele`
--

CREATE TABLE `uzivatele` (
  `id_uzi` int(11) NOT NULL,
  `id_opr` int(11) NOT NULL,
  `id_fam` int(11) NOT NULL,
  `jmeno` varchar(64) COLLATE utf8mb4_czech_ci NOT NULL,
  `email` varchar(256) COLLATE utf8mb4_czech_ci NOT NULL,
  `heslo` varchar(64) COLLATE utf8mb4_czech_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_czech_ci;

--
-- Vypisuji data pro tabulku `uzivatele`
--

INSERT INTO `uzivatele` (`id_uzi`, `id_opr`, `id_fam`, `jmeno`, `email`, `heslo`) VALUES
(1, 1, 1, 'admin', 'admin@admin.admin', 'sha1$e2b87d22$1$ded12fd3dadbd39ae86b95aabaf899ca46b097d8'),
(31, 2, 0, 'atmaakatmaak', 'atmaakatmaakatmaakatmaak@atmaak.atmaak', 'sha1$bd0e2760$1$c418199c335bc49cd1d50e4fd9759c24ea192a48'),
(32, 2, 1, 'atmaak', 'atmaak@atmaak.atmaak', 'sha1$5a8e9346$1$720814806eb038f65a1f08aa23ed0243a6f09e88');

-- --------------------------------------------------------

--
-- Struktura pro pohled `adminrodiny`
--
DROP TABLE IF EXISTS `adminrodiny`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `adminrodiny`  AS SELECT `uzivatele`.`id_uzi` AS `id_uzi`, `rodiny`.`id_hla` AS `id_hla` FROM (`uzivatele` join `rodiny` on(`uzivatele`.`id_fam` = `rodiny`.`id_fam`)) ;

-- --------------------------------------------------------

--
-- Struktura pro pohled `serazniseznamu`
--
DROP TABLE IF EXISTS `serazniseznamu`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `serazniseznamu`  AS SELECT `serazeni`.`id_mark` AS `id_mark`, `seznamy`.`id_sez` AS `id_sez`, `polozky`.`nazev` AS `nazev`, `polozky`.`id_pol` AS `id_pol`, `pol_sez`.`kusy` AS `kusy`, `typy`.`nazev` AS `nazevSerazeni`, `stavy`.`id_sta` AS `id_sta`, `stavy`.`nazev` AS `stav` FROM (((((`seznamy` join `pol_sez` on(`seznamy`.`id_sez` = `pol_sez`.`id_sez`)) join `polozky` on(`pol_sez`.`id_pol` = `polozky`.`id_pol`)) join `serazeni` on(`polozky`.`id_szn` = `serazeni`.`id_typ`)) join `typy` on(`polozky`.`id_szn` = `typy`.`id_szn`)) join `stavy` on(`pol_sez`.`id_sta` = `stavy`.`id_sta`)) ORDER BY `serazeni`.`pozice` ASC ;

--
-- Indexy pro exportované tabulky
--

--
-- Indexy pro tabulku `markety`
--
ALTER TABLE `markety`
  ADD PRIMARY KEY (`id_mark`);

--
-- Indexy pro tabulku `opravneni`
--
ALTER TABLE `opravneni`
  ADD PRIMARY KEY (`id_opr`);

--
-- Indexy pro tabulku `polozky`
--
ALTER TABLE `polozky`
  ADD PRIMARY KEY (`id_pol`),
  ADD KEY `id_szn` (`id_szn`);

--
-- Indexy pro tabulku `pol_sez`
--
ALTER TABLE `pol_sez`
  ADD KEY `id_sez` (`id_sez`),
  ADD KEY `id_pol` (`id_pol`),
  ADD KEY `id_sta` (`id_sta`);

--
-- Indexy pro tabulku `rodiny`
--
ALTER TABLE `rodiny`
  ADD PRIMARY KEY (`id_fam`);

--
-- Indexy pro tabulku `serazeni`
--
ALTER TABLE `serazeni`
  ADD KEY `id_mark` (`id_mark`),
  ADD KEY `id_typ` (`id_typ`);

--
-- Indexy pro tabulku `seznamy`
--
ALTER TABLE `seznamy`
  ADD PRIMARY KEY (`id_sez`),
  ADD KEY `id_uzi` (`id_uzi`),
  ADD KEY `id_fam` (`id_fam`);

--
-- Indexy pro tabulku `stavy`
--
ALTER TABLE `stavy`
  ADD PRIMARY KEY (`id_sta`);

--
-- Indexy pro tabulku `typy`
--
ALTER TABLE `typy`
  ADD PRIMARY KEY (`id_szn`),
  ADD UNIQUE KEY `nazev` (`nazev`);

--
-- Indexy pro tabulku `uzivatele`
--
ALTER TABLE `uzivatele`
  ADD PRIMARY KEY (`id_uzi`),
  ADD KEY `id_opr` (`id_opr`);

--
-- AUTO_INCREMENT pro tabulky
--

--
-- AUTO_INCREMENT pro tabulku `markety`
--
ALTER TABLE `markety`
  MODIFY `id_mark` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT pro tabulku `opravneni`
--
ALTER TABLE `opravneni`
  MODIFY `id_opr` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pro tabulku `polozky`
--
ALTER TABLE `polozky`
  MODIFY `id_pol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=202;

--
-- AUTO_INCREMENT pro tabulku `rodiny`
--
ALTER TABLE `rodiny`
  MODIFY `id_fam` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pro tabulku `seznamy`
--
ALTER TABLE `seznamy`
  MODIFY `id_sez` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=127;

--
-- AUTO_INCREMENT pro tabulku `stavy`
--
ALTER TABLE `stavy`
  MODIFY `id_sta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pro tabulku `typy`
--
ALTER TABLE `typy`
  MODIFY `id_szn` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT pro tabulku `uzivatele`
--
ALTER TABLE `uzivatele`
  MODIFY `id_uzi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- Omezení pro exportované tabulky
--

--
-- Omezení pro tabulku `polozky`
--
ALTER TABLE `polozky`
  ADD CONSTRAINT `id_szn` FOREIGN KEY (`id_szn`) REFERENCES `typy` (`id_szn`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Omezení pro tabulku `pol_sez`
--
ALTER TABLE `pol_sez`
  ADD CONSTRAINT `id_pol` FOREIGN KEY (`id_pol`) REFERENCES `polozky` (`id_pol`) ON DELETE CASCADE,
  ADD CONSTRAINT `id_sez` FOREIGN KEY (`id_sez`) REFERENCES `seznamy` (`id_sez`),
  ADD CONSTRAINT `id_sta` FOREIGN KEY (`id_sta`) REFERENCES `stavy` (`id_sta`);

--
-- Omezení pro tabulku `serazeni`
--
ALTER TABLE `serazeni`
  ADD CONSTRAINT `id_mark` FOREIGN KEY (`id_mark`) REFERENCES `markety` (`id_mark`),
  ADD CONSTRAINT `id_typ` FOREIGN KEY (`id_typ`) REFERENCES `typy` (`id_szn`);

--
-- Omezení pro tabulku `seznamy`
--
ALTER TABLE `seznamy`
  ADD CONSTRAINT `id_fam` FOREIGN KEY (`id_fam`) REFERENCES `rodiny` (`id_fam`),
  ADD CONSTRAINT `id_uzi` FOREIGN KEY (`id_uzi`) REFERENCES `uzivatele` (`id_uzi`) ON DELETE CASCADE;

--
-- Omezení pro tabulku `uzivatele`
--
ALTER TABLE `uzivatele`
  ADD CONSTRAINT `id_opr` FOREIGN KEY (`id_opr`) REFERENCES `opravneni` (`id_opr`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
