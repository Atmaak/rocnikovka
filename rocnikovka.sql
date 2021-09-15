-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Počítač: 127.0.0.1
-- Vytvořeno: Stř 15. zář 2021, 11:40
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
-- Struktura tabulky `opravneni`
--

CREATE TABLE `opravneni` (
  `id_opr` int(11) NOT NULL,
  `name` varchar(64) COLLATE utf8mb4_czech_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_czech_ci;

-- --------------------------------------------------------

--
-- Struktura tabulky `polozky`
--

CREATE TABLE `polozky` (
  `id_pol` int(11) NOT NULL,
  `nazev` varchar(64) COLLATE utf8mb4_czech_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_czech_ci;

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
-- Struktura tabulky `seznamy`
--

CREATE TABLE `seznamy` (
  `id_sez` int(11) NOT NULL,
  `datum` datetime NOT NULL,
  `id_uzi` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_czech_ci;

-- --------------------------------------------------------

--
-- Struktura tabulky `stavy`
--

CREATE TABLE `stavy` (
  `id_sta` int(11) NOT NULL,
  `nazev` varchar(64) COLLATE utf8mb4_czech_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_czech_ci;

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
  ADD PRIMARY KEY (`id_pol`);

--
-- Klíče pro tabulku `pol_sez`
--
ALTER TABLE `pol_sez`
  ADD KEY `id_sez` (`id_sez`),
  ADD KEY `id_pol` (`id_pol`),
  ADD KEY `id_sta` (`id_sta`);

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
  MODIFY `id_opr` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pro tabulku `polozky`
--
ALTER TABLE `polozky`
  MODIFY `id_pol` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pro tabulku `seznamy`
--
ALTER TABLE `seznamy`
  MODIFY `id_sez` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pro tabulku `stavy`
--
ALTER TABLE `stavy`
  MODIFY `id_sta` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pro tabulku `uzivatele`
--
ALTER TABLE `uzivatele`
  MODIFY `id_uzi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Omezení pro exportované tabulky
--

--
-- Omezení pro tabulku `pol_sez`
--
ALTER TABLE `pol_sez`
  ADD CONSTRAINT `id_pol` FOREIGN KEY (`id_pol`) REFERENCES `polozky` (`id_pol`),
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
