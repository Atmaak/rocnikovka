-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Počítač: 127.0.0.1
-- Vytvořeno: Ned 24. říj 2021, 19:09
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
-- Zástupná struktura pro pohled `items`
-- (Vlastní pohled viz níže)
--
CREATE TABLE `items` (
`nazev` varchar(64)
,`kusy` int(11)
,`id_sez` int(11)
,`id_pol` int(11)
,`stav` varchar(64)
);

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
  `nazev` varchar(64) COLLATE utf8mb4_czech_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_czech_ci;

--
-- Vypisuji data pro tabulku `polozky`
--

INSERT INTO `polozky` (`id_pol`, `nazev`) VALUES
(2, 'dddd'),
(4, 'gasgasgasgasgasgas'),
(5, 'gasgas'),
(6, 'gfdsgdsfgf'),
(7, 'hsdfhjdfsjj'),
(9, 'dasdasdasd'),
(10, 'dawdwaefs'),
(13, 'xdPEPEGA, 2, 13, 69'),
(43, '[object Object]'),
(50, 'xd'),
(58, 'dasdassdasdasd'),
(59, 'dasdassdasdasd'),
(60, 'dasdassdasdasd'),
(61, 'dasdassdasdasd'),
(62, 'dasdassdasdasd'),
(63, 'dasdassdasdasd'),
(64, 'dasdassdasdasd'),
(65, 'dasdassdasdasd'),
(66, 'dasdassdasdasd'),
(67, 'dasdassdasdasd'),
(68, 'dasdassdasdasd'),
(69, 'dasdassdasdasd'),
(70, 'dasdassdasdasd'),
(71, 'dasdassdasdasd'),
(72, 'dasdassdasdasd'),
(73, 'dasdassdasdasd'),
(74, 'dasdassdasdasd'),
(75, 'dasdassdasdasd'),
(76, 'dasdassdasdasd'),
(77, 'das'),
(78, 'asd'),
(79, 'asd'),
(83, 'asddasd'),
(84, 'asddasd'),
(85, 'asddasd'),
(87, 'asddasd');

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
(6, 58, 456, 2),
(6, 59, 456, 2),
(6, 60, 456, 2),
(6, 61, 456, 2),
(6, 62, 456, 2),
(6, 63, 456, 2),
(6, 64, 456, 2),
(6, 65, 456, 2),
(6, 66, 456, 2),
(6, 67, 456, 2),
(6, 68, 456, 2),
(6, 69, 456, 2),
(6, 70, 456, 2),
(6, 71, 456, 2),
(6, 72, 456, 2),
(6, 73, 456, 2),
(6, 74, 456, 2),
(6, 75, 456, 2),
(6, 76, 456, 2),
(13, 77, 4, 2),
(12, 78, 45, 2),
(12, 79, 45, 2),
(6, 83, 45, 2),
(6, 84, 45, 2),
(6, 85, 45, 2),
(6, 87, 45, 2);

-- --------------------------------------------------------

--
-- Struktura tabulky `seznamy`
--

CREATE TABLE `seznamy` (
  `id_sez` int(11) NOT NULL,
  `datum` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_uzi` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_czech_ci;

--
-- Vypisuji data pro tabulku `seznamy`
--

INSERT INTO `seznamy` (`id_sez`, `datum`, `id_uzi`) VALUES
(6, '2021-09-15 17:27:02', 1),
(10, '2021-09-16 17:06:10', 1),
(11, '2021-09-16 17:06:13', 1),
(12, '2021-09-16 17:06:14', 1),
(13, '2021-09-16 17:06:16', 1),
(14, '2021-10-24 16:47:02', 1),
(18, '2021-10-24 17:02:47', 1),
(19, '2021-10-24 17:02:48', 1),
(20, '2021-10-24 17:02:48', 1);

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
  `jmeno` varchar(64) COLLATE utf8mb4_czech_ci NOT NULL,
  `heslo` varchar(64) COLLATE utf8mb4_czech_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_czech_ci;

--
-- Vypisuji data pro tabulku `uzivatele`
--

INSERT INTO `uzivatele` (`id_uzi`, `id_opr`, `jmeno`, `heslo`) VALUES
(1, 1, 'admin', 'sha1$1210f2f7$1$31f14f2bb8ef4623b54350a639d10876adf5e263');

-- --------------------------------------------------------

--
-- Struktura pro pohled `items`
--
DROP TABLE IF EXISTS `items`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `items`  AS SELECT `polozky`.`nazev` AS `nazev`, `pol_sez`.`kusy` AS `kusy`, `pol_sez`.`id_sez` AS `id_sez`, `pol_sez`.`id_pol` AS `id_pol`, `stavy`.`nazev` AS `stav` FROM ((`pol_sez` join `polozky` on(`pol_sez`.`id_pol` = `polozky`.`id_pol`)) join `stavy` on(`pol_sez`.`id_sta` = `stavy`.`id_sta`)) ;

--
-- Indexy pro exportované tabulky
--

--
-- Indexy pro tabulku `opravneni`
--
ALTER TABLE `opravneni`
  ADD PRIMARY KEY (`id_opr`);

--
-- Indexy pro tabulku `polozky`
--
ALTER TABLE `polozky`
  ADD PRIMARY KEY (`id_pol`);

--
-- Indexy pro tabulku `pol_sez`
--
ALTER TABLE `pol_sez`
  ADD KEY `id_sez` (`id_sez`),
  ADD KEY `id_pol` (`id_pol`),
  ADD KEY `id_sta` (`id_sta`);

--
-- Indexy pro tabulku `seznamy`
--
ALTER TABLE `seznamy`
  ADD PRIMARY KEY (`id_sez`),
  ADD KEY `id_uzi` (`id_uzi`);

--
-- Indexy pro tabulku `stavy`
--
ALTER TABLE `stavy`
  ADD PRIMARY KEY (`id_sta`);

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
-- AUTO_INCREMENT pro tabulku `opravneni`
--
ALTER TABLE `opravneni`
  MODIFY `id_opr` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pro tabulku `polozky`
--
ALTER TABLE `polozky`
  MODIFY `id_pol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=89;

--
-- AUTO_INCREMENT pro tabulku `seznamy`
--
ALTER TABLE `seznamy`
  MODIFY `id_sez` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT pro tabulku `stavy`
--
ALTER TABLE `stavy`
  MODIFY `id_sta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pro tabulku `uzivatele`
--
ALTER TABLE `uzivatele`
  MODIFY `id_uzi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Omezení pro exportované tabulky
--

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
  ADD CONSTRAINT `id_uzi` FOREIGN KEY (`id_uzi`) REFERENCES `uzivatele` (`id_uzi`);

--
-- Omezení pro tabulku `uzivatele`
--
ALTER TABLE `uzivatele`
  ADD CONSTRAINT `id_opr` FOREIGN KEY (`id_opr`) REFERENCES `opravneni` (`id_opr`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
