-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Počítač: 127.0.0.1
-- Vytvořeno: Ned 05. čen 2022, 19:28
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
-- Zástupná struktura pro pohled `items`
-- (Vlastní pohled viz níže)
--
CREATE TABLE `items` (
`nazev` varchar(64)
,`kusy` int(11)
,`id_sez` int(11)
,`id_pol` int(11)
,`id_sta` int(11)
,`id_szn` int(11)
,`nazevSerazeni` varchar(64)
,`stav` varchar(64)
,`id_uzi` int(11)
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
(177, 'dasdads', 12);

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
(98, 177, 22222, 2);

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
(98, 0, 'masdomasdo', 0, '2022-04-11 17:39:26', 1, 1, '');

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
(17, 2, 1, 'atmaak', 'kubjak21@gmail.com', 'sha1$cb90a39f$1$9fb38f614dad5a6e56be345f69734d4fc16ca268'),
(20, 2, 1, 'xddd', 'xddd@xddd.xddd', 'sha1$0e6ae730$1$69621940e3db6bbef8123bb92810d027ed8f98c6'),
(21, 2, 0, 'atmaak', 'atmaak@atmaak.cz', 'sha1$3ce93c21$1$91cbaa4bb12062ef352e4df7115ebcd996b77ff3');

-- --------------------------------------------------------

--
-- Struktura pro pohled `adminrodiny`
--
DROP TABLE IF EXISTS `adminrodiny`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `adminrodiny`  AS SELECT `uzivatele`.`id_uzi` AS `id_uzi`, `rodiny`.`id_hla` AS `id_hla` FROM (`uzivatele` join `rodiny` on(`uzivatele`.`id_fam` = `rodiny`.`id_fam`)) ;

-- --------------------------------------------------------

--
-- Struktura pro pohled `items`
--
DROP TABLE IF EXISTS `items`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `items`  AS SELECT `polozky`.`nazev` AS `nazev`, `pol_sez`.`kusy` AS `kusy`, `pol_sez`.`id_sez` AS `id_sez`, `pol_sez`.`id_pol` AS `id_pol`, `stavy`.`id_sta` AS `id_sta`, `polozky`.`id_szn` AS `id_szn`, `typy`.`nazev` AS `nazevSerazeni`, `stavy`.`nazev` AS `stav`, `seznamy`.`id_uzi` AS `id_uzi` FROM ((((`pol_sez` join `polozky` on(`pol_sez`.`id_pol` = `polozky`.`id_pol`)) join `stavy` on(`pol_sez`.`id_sta` = `stavy`.`id_sta`)) join `typy` on(`polozky`.`id_szn` = `typy`.`id_szn`)) join `seznamy` on(`pol_sez`.`id_sez` = `seznamy`.`id_sez`)) ;

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
  MODIFY `id_mark` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT pro tabulku `opravneni`
--
ALTER TABLE `opravneni`
  MODIFY `id_opr` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pro tabulku `polozky`
--
ALTER TABLE `polozky`
  MODIFY `id_pol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=178;

--
-- AUTO_INCREMENT pro tabulku `rodiny`
--
ALTER TABLE `rodiny`
  MODIFY `id_fam` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pro tabulku `seznamy`
--
ALTER TABLE `seznamy`
  MODIFY `id_sez` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=99;

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
  MODIFY `id_uzi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

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
