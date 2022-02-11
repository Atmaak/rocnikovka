-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Počítač: 127.0.0.1
-- Vytvořeno: Pát 11. úno 2022, 14:49
-- Verze serveru: 10.4.13-MariaDB
-- Verze PHP: 7.4.7

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
-- (See below for the actual view)
--
CREATE TABLE `adminrodiny` (
`id_uzi` int(11)
,`id_hla` int(11)
);

-- --------------------------------------------------------

--
-- Zástupná struktura pro pohled `items`
-- (See below for the actual view)
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
);

-- --------------------------------------------------------

--
-- Struktura tabulky `markety`
--

CREATE TABLE `markety` (
  `id_mark` int(11) NOT NULL,
  `nazev` varchar(64) COLLATE utf8mb4_czech_ci NOT NULL,
  `poradi` text COLLATE utf8mb4_czech_ci NOT NULL
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
(140, 'dasdas', 2);

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
  `id_szn` int(11) NOT NULL,
  `nazev` varchar(64) COLLATE utf8mb4_czech_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_czech_ci;

--
-- Vypisuji data pro tabulku `serazeni`
--

INSERT INTO `serazeni` (`id_szn`, `nazev`) VALUES
(1, 'nealko'),
(2, 'sladkosti'),
(3, 'alko'),
(4, 'ovoce a zelenina'),
(5, 'mléčné výrobky'),
(6, 'zahrada'),
(7, 'pečivo'),
(8, 'maso'),
(9, 'koupelna'),
(10, 'uzeniny'),
(11, 'oblečení'),
(12, 'děti'),
(13, 'elektronika'),
(14, 'nádobí'),
(15, 'zamražené');

-- --------------------------------------------------------

--
-- Struktura tabulky `seznamy`
--

CREATE TABLE `seznamy` (
  `id_sez` int(11) NOT NULL,
  `nazev` varchar(64) COLLATE utf8mb4_czech_ci NOT NULL,
  `datum` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_uzi` int(11) NOT NULL,
  `id_fam` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_czech_ci;

--
-- Vypisuji data pro tabulku `seznamy`
--

INSERT INTO `seznamy` (`id_sez`, `nazev`, `datum`, `id_uzi`, `id_fam`) VALUES
(81, 'adasd', '2022-02-10 19:40:18', 17, 1);

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
(18, 2, 0, 'xdd', 'xdd@xdd.xdd', 'sha1$ae9bced2$1$32426f36a8adc808baf00e2dc575000e08651fe6'),
(19, 2, 0, 'honza', 'dasdas@dasdascacca.casca', 'sha1$442cd053$1$588ecaefc15ac7d29930a63b8b2fe8d1b786fe34');

-- --------------------------------------------------------

--
-- Struktura pro pohled `adminrodiny`
--
DROP TABLE IF EXISTS `adminrodiny`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `adminrodiny`  AS  select `uzivatele`.`id_uzi` AS `id_uzi`,`rodiny`.`id_hla` AS `id_hla` from (`uzivatele` join `rodiny` on(`uzivatele`.`id_fam` = `rodiny`.`id_fam`)) ;

-- --------------------------------------------------------

--
-- Struktura pro pohled `items`
--
DROP TABLE IF EXISTS `items`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `items`  AS  select `polozky`.`nazev` AS `nazev`,`pol_sez`.`kusy` AS `kusy`,`pol_sez`.`id_sez` AS `id_sez`,`pol_sez`.`id_pol` AS `id_pol`,`stavy`.`id_sta` AS `id_sta`,`polozky`.`id_szn` AS `id_szn`,`serazeni`.`nazev` AS `nazevSerazeni`,`stavy`.`nazev` AS `stav` from (((`pol_sez` join `polozky` on(`pol_sez`.`id_pol` = `polozky`.`id_pol`)) join `stavy` on(`pol_sez`.`id_sta` = `stavy`.`id_sta`)) join `serazeni` on(`polozky`.`id_szn` = `serazeni`.`id_szn`)) ;

--
-- Klíče pro exportované tabulky
--

--
-- Klíče pro tabulku `markety`
--
ALTER TABLE `markety`
  ADD PRIMARY KEY (`id_mark`);

--
-- Klíče pro tabulku `opravneni`
--
ALTER TABLE `opravneni`
  ADD PRIMARY KEY (`id_opr`);

--
-- Klíče pro tabulku `polozky`
--
ALTER TABLE `polozky`
  ADD PRIMARY KEY (`id_pol`),
  ADD KEY `id_szn` (`id_szn`);

--
-- Klíče pro tabulku `pol_sez`
--
ALTER TABLE `pol_sez`
  ADD KEY `id_sez` (`id_sez`),
  ADD KEY `id_pol` (`id_pol`),
  ADD KEY `id_sta` (`id_sta`);

--
-- Klíče pro tabulku `rodiny`
--
ALTER TABLE `rodiny`
  ADD PRIMARY KEY (`id_fam`);

--
-- Klíče pro tabulku `serazeni`
--
ALTER TABLE `serazeni`
  ADD PRIMARY KEY (`id_szn`);

--
-- Klíče pro tabulku `seznamy`
--
ALTER TABLE `seznamy`
  ADD PRIMARY KEY (`id_sez`),
  ADD KEY `id_uzi` (`id_uzi`),
  ADD KEY `id_fam` (`id_fam`);

--
-- Klíče pro tabulku `stavy`
--
ALTER TABLE `stavy`
  ADD PRIMARY KEY (`id_sta`);

--
-- Klíče pro tabulku `uzivatele`
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
  MODIFY `id_mark` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pro tabulku `opravneni`
--
ALTER TABLE `opravneni`
  MODIFY `id_opr` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pro tabulku `polozky`
--
ALTER TABLE `polozky`
  MODIFY `id_pol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=141;

--
-- AUTO_INCREMENT pro tabulku `rodiny`
--
ALTER TABLE `rodiny`
  MODIFY `id_fam` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pro tabulku `serazeni`
--
ALTER TABLE `serazeni`
  MODIFY `id_szn` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT pro tabulku `seznamy`
--
ALTER TABLE `seznamy`
  MODIFY `id_sez` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- AUTO_INCREMENT pro tabulku `stavy`
--
ALTER TABLE `stavy`
  MODIFY `id_sta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pro tabulku `uzivatele`
--
ALTER TABLE `uzivatele`
  MODIFY `id_uzi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- Omezení pro exportované tabulky
--

--
-- Omezení pro tabulku `polozky`
--
ALTER TABLE `polozky`
  ADD CONSTRAINT `id_szn` FOREIGN KEY (`id_szn`) REFERENCES `serazeni` (`id_szn`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Omezení pro tabulku `pol_sez`
--
ALTER TABLE `pol_sez`
  ADD CONSTRAINT `id_pol` FOREIGN KEY (`id_pol`) REFERENCES `polozky` (`id_pol`) ON DELETE CASCADE,
  ADD CONSTRAINT `id_sez` FOREIGN KEY (`id_sez`) REFERENCES `seznamy` (`id_sez`),
  ADD CONSTRAINT `id_sta` FOREIGN KEY (`id_sta`) REFERENCES `stavy` (`id_sta`);

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
