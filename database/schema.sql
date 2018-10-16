DROP DATABASE IF EXISTS hackreactoralums;

CREATE DATABASE hackreactoralums;

USE hackreactoralums;

CREATE TABLE IF NOT EXISTS members (
  id INT AUTO_INCREMENT PRIMARY KEY,
  firstName VARCHAR(50) NOT NULL,
  lastName VARCHAR(50) NOT NULL,
  password VARCHAR(100) NOT NULL,
  hometown VARCHAR(50),
  email VARCHAR(50),
  linkedIn VARCHAR(50),
  gitHub VARCHAR(50),
  hobbies VARCHAR(255),
  techInterests VARCHAR(255),
  proTip VARCHAR(255),
  image VARCHAR(150)
);

INSERT INTO members VALUES (default, 'Abel', 'Regalado', 'HRSF102', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://s3-us-west-1.amazonaws.com/hrsf102-pictures/AbelRegalado.JPG');
INSERT INTO members VALUES (default, 'Alan', 'Fu', 'HRSF102', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://s3-us-west-1.amazonaws.com/hrsf102-pictures/AlanFu.JPG');
INSERT INTO members VALUES (default, 'Alex', 'Vincent-Hill', 'HRSF102', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://s3-us-west-1.amazonaws.com/hrsf102-pictures/AlexVincent-Hill.JPG');
INSERT INTO members VALUES (default, 'Andrew', 'Ngo', 'HRSF102', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://s3-us-west-1.amazonaws.com/hrsf102-pictures/AndrewNgo.JPG');
INSERT INTO members VALUES (default, 'Arjun', 'Mehta', 'HRSF102', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://s3-us-west-1.amazonaws.com/hrsf102-pictures/ArjunMehta.JPG');
INSERT INTO members VALUES (default, 'Brandon', 'Junus', 'HRSF102', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://s3-us-west-1.amazonaws.com/hrsf102-pictures/BrandonJunus.JPG');
INSERT INTO members VALUES (default, 'Celeste', 'Zamora', 'HRSF102', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://s3-us-west-1.amazonaws.com/hrsf102-pictures/CelesteZamora.JPG');
INSERT INTO members VALUES (default, 'Charles', 'Anderson', 'HRSF102', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://s3-us-west-1.amazonaws.com/hrsf102-pictures/CharlesAnderson.JPG');
INSERT INTO members VALUES (default, 'Charlie', 'Phan', 'HRSF102', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://s3-us-west-1.amazonaws.com/hrsf102-pictures/CharliePhan.JPG');
INSERT INTO members VALUES (default, 'Chris', 'Tung', 'HRSF102', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://s3-us-west-1.amazonaws.com/hrsf102-pictures/ChristopherTung.JPG');
INSERT INTO members VALUES (default, 'Zach', 'Martinez Hansen', 'HRSF102', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://s3-us-west-1.amazonaws.com/hrsf102-pictures/ZacharyHansen.JPG');
INSERT INTO members VALUES (default, 'Eddie', 'Lo', 'HRSF102', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://s3-us-west-1.amazonaws.com/hrsf102-pictures/EddieLo.JPG');
INSERT INTO members VALUES (default, 'James', 'Verch', 'HRSF102', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://s3-us-west-1.amazonaws.com/hrsf102-pictures/JamesVerch.JPG');
INSERT INTO members VALUES (default, 'Tinh', 'Le', 'HRSF102', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://s3-us-west-1.amazonaws.com/hrsf102-pictures/TinhLe.JPG');
INSERT INTO members VALUES (default, 'Jenn', 'Huynh', 'HRSF102', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://s3-us-west-1.amazonaws.com/hrsf102-pictures/JenniferHuynh.JPG');
INSERT INTO members VALUES (default, 'Jesse', 'Aguirre', 'HRSF102', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://s3-us-west-1.amazonaws.com/hrsf102-pictures/JesseAguirre.JPG');
INSERT INTO members VALUES (default, 'Jun', 'Choi', 'HRSF102', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://s3-us-west-1.amazonaws.com/hrsf102-pictures/JunSubChoi.JPG');
INSERT INTO members VALUES (default, 'Spencer', 'Kwok', 'HRSF102', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://s3-us-west-1.amazonaws.com/hrsf102-pictures/SpencerKwok.JPG');
INSERT INTO members VALUES (default, 'Lisette', 'Hamilton', 'HRSF102', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://s3-us-west-1.amazonaws.com/hrsf102-pictures/LisetteHamilton.JPG');
INSERT INTO members VALUES (default, 'Matt', 'Lee', 'HRSF102', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://s3-us-west-1.amazonaws.com/hrsf102-pictures/MatthewLee.JPG');
INSERT INTO members VALUES (default, 'Michael', 'Chi', 'HRSF102', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://s3-us-west-1.amazonaws.com/hrsf102-pictures/MichaelChi.JPG');
INSERT INTO members VALUES (default, 'Michelle', 'Chen', 'HRSF102', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://s3-us-west-1.amazonaws.com/hrsf102-pictures/MichelleChen.JPG');
INSERT INTO members VALUES (default, 'Nicholas', 'Martin', 'HRSF102', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://s3-us-west-1.amazonaws.com/hrsf102-pictures/NicholasMartin.JPG');
INSERT INTO members VALUES (default, 'Nick', 'Chang', 'HRSF102', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://s3-us-west-1.amazonaws.com/hrsf102-pictures/NicholasChang.JPG');
INSERT INTO members VALUES (default, 'Trey', 'Pernell', 'HRSF102', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://s3-us-west-1.amazonaws.com/hrsf102-pictures/TreyPernell.JPG');
INSERT INTO members VALUES (default, 'Richard', 'Hanh', 'HRSF102', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://s3-us-west-1.amazonaws.com/hrsf102-pictures/RichardHahn.JPG');
INSERT INTO members VALUES (default, 'Roy', 'Lee', 'HRSF102', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://s3-us-west-1.amazonaws.com/hrsf102-pictures/RoyLee.JPG');
INSERT INTO members VALUES (default, 'Ruby', 'Lee', 'HRSF102', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://s3-us-west-1.amazonaws.com/hrsf102-pictures/RubyLee.JPG');
INSERT INTO members VALUES (default, 'Sonia', 'Rohani', 'HRSF102', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://s3-us-west-1.amazonaws.com/hrsf102-pictures/SoniaRohani.JPG');
