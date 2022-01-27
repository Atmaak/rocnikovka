-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Počítač: 127.0.0.1
-- Vytvořeno: Čtv 27. led 2022, 16:58
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
-- Zástupná struktura pro pohled `items`
-- (See below for the actual view)
--
CREATE TABLE `items` (
`nazev` varchar(64)
,`kusy` int(11)
,`id_sez` int(11)
,`id_pol` int(11)
,`id_sta` int(11)
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
  `nazev` varchar(64) COLLATE utf8mb4_czech_ci NOT NULL,
  `id_szn` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_czech_ci;

--
-- Vypisuji data pro tabulku `polozky`
--

INSERT INTO `polozky` (`id_pol`, `nazev`, `id_szn`) VALUES
(115, 'dasdasd', 1),
(117, 'dasd', 1),
(118, 'dasda', 1);

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
(29, 117, 4, 2),
(29, 118, 45, 2);

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
(1, 'piti'),
(2, 'sladkosti');

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
(27, '2021-12-15 08:00:59', 9),
(29, '2022-01-15 13:56:55', 1),
(30, '2022-01-20 09:08:44', 12),
(31, '2022-01-27 15:39:44', 11);

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
  `email` varchar(256) COLLATE utf8mb4_czech_ci NOT NULL,
  `heslo` varchar(64) COLLATE utf8mb4_czech_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_czech_ci;

--
-- Vypisuji data pro tabulku `uzivatele`
--

INSERT INTO `uzivatele` (`id_uzi`, `id_opr`, `jmeno`, `email`, `heslo`) VALUES
(1, 1, 'admin', 'admin@admin.admin', 'sha1$a3342e7f$1$b5bfc8616511c0c1e7d2157b9c2ca116a5fcd702'),
(9, 2, 'honza', 'xd@pepega.cs', 'sha1$b3dafceb$1$a271ec2180917c3a4c10356c84f736b63b3795c6'),
(10, 2, 'admin', 'admin@admin.admin', 'sha1$7ec49284$1$5bbd8d41e1bce8dc6463ec10a9fa50ce5a8f280f'),
(11, 2, 'atmaak', 'kubjak21@gmail.com', 'sha1$afd3f467$1$92ff81b966c5c5f65708f5d3809139f59f962b33'),
(12, 2, 'test', 'test@test.cz', 'sha1$ab1a9393$1$d7c1e9497e2959c18ed33ed37ba6b00ca3df8be1');

-- --------------------------------------------------------

--
-- Struktura pro pohled `items`
--
DROP TABLE IF EXISTS `items`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `items`  AS  select `polozky`.`nazev` AS `nazev`,`pol_sez`.`kusy` AS `kusy`,`pol_sez`.`id_sez` AS `id_sez`,`pol_sez`.`id_pol` AS `id_pol`,`stavy`.`id_sta` AS `id_sta`,`stavy`.`nazev` AS `stav` from ((`pol_sez` join `polozky` on(`pol_sez`.`id_pol` = `polozky`.`id_pol`)) join `stavy` on(`pol_sez`.`id_sta` = `stavy`.`id_sta`)) ;

--
-- Klíče pro exportované tabulky
--

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
-- Klíče pro tabulku `serazeni`
--
ALTER TABLE `serazeni`
  ADD PRIMARY KEY (`id_szn`);

--
-- Klíče pro tabulku `seznamy`
--
ALTER TABLE `seznamy`
  ADD PRIMARY KEY (`id_sez`),
  ADD KEY `id_uzi` (`id_uzi`);

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
-- AUTO_INCREMENT pro tabulku `opravneni`
--
ALTER TABLE `opravneni`
  MODIFY `id_opr` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pro tabulku `polozky`
--
ALTER TABLE `polozky`
  MODIFY `id_pol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=119;

--
-- AUTO_INCREMENT pro tabulku `serazeni`
--
ALTER TABLE `serazeni`
  MODIFY `id_szn` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pro tabulku `seznamy`
--
ALTER TABLE `seznamy`
  MODIFY `id_sez` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT pro tabulku `stavy`
--
ALTER TABLE `stavy`
  MODIFY `id_sta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pro tabulku `uzivatele`
--
ALTER TABLE `uzivatele`
  MODIFY `id_uzi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

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
