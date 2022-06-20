
use dbnode;

CREATE TABLE albums(
  id int(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  titulo varchar(50) NOT NULL,
  artista varchar(50) NOT NULL,
  anio int(4)
);

SHOW TABLES;

DESCRIBE albums;
