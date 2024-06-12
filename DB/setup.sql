DROP DATABASE IF EXISTS bFriend_DB;
CREATE DATABASE bFriend_DB;
USE bFriend_DB;

CREATE TABLE Mode(
    Mode_ID INT PRIMARY KEY AUTO_INCREMENT,
    `Definition` VARCHAR(255)
);

CREATE TABLE Interests(
    Interests_ID INT PRIMARY KEY AUTO_INCREMENT,
    `Name` VARCHAR(255),
    `Description` VARCHAR(255)
);

CREATE TABLE Card_Info(
    Card_ID INT PRIMARY KEY AUTO_INCREMENT,
    Card_Holder VARCHAR(255),
    Card_Number VARCHAR(255), 
    Security_Code VARCHAR(255),
    Card_ExpiryDate VARCHAR(255)
);

CREATE TABLE Subscription(
    Subscription_ID INT PRIMARY KEY AUTO_INCREMENT,
    `Description` VARCHAR(255),
    Active BOOLEAN,
    Sub_ExpiryDate DATE,
    Sub_ActivationDate DATE
);

CREATE TABLE Message(
    Message_ID INT PRIMARY KEY AUTO_INCREMENT,
    Sender_ID INT,
    Receiver_ID INT,
    Content VARCHAR(65536),
    FOREIGN KEY (Sender_ID) REFERENCES Account(Account_ID) ON DELETE CASCADE,
    FOREIGN KEY (Receiver_ID) REFERENCES Account(Account_ID) ON DELETE CASCADE
);

CREATE TABLE Account(
    Account_ID INT PRIMARY KEY AUTO_INCREMENT,
    Username VARCHAR(255),
    `Name` VARCHAR(255),
    Lastname VARCHAR(255),
    `Description` VARCHAR(255),
    Subscription_ID INT,
    `Password` VARCHAR(255),
    Admin_Rights BOOLEAN,
    Mode_ID INT,
    FOREIGN KEY (Subscription_ID) REFERENCES Subscription(Subscription_ID) ON DELETE CASCADE,
    FOREIGN KEY (Mode_ID) REFERENCES Mode(Mode_ID) ON DELETE CASCADE
);

CREATE TABLE Account_Interests(
    Account_Interests_ID INT PRIMARY KEY AUTO_INCREMENT,
    Account_ID INT,
    Interests_ID INT,
    FOREIGN KEY (Interests_ID) REFERENCES Interests(Interests_ID) ON DELETE CASCADE,
    FOREIGN KEY (Account_ID) REFERENCES Account(Account_ID) ON DELETE CASCADE
);

CREATE TABLE Account_Card_Info(
    Account_Card_Info_ID INT PRIMARY KEY AUTO_INCREMENT,
    Card_ID INT,
    Account_ID INT,
    FOREIGN KEY (Card_ID) REFERENCES Card_Info(Card_ID) ON DELETE CASCADE,
    FOREIGN KEY (Account_ID) REFERENCES Account(Account_ID) ON DELETE CASCADE
);