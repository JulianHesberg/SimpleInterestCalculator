CREATE TABLE Entries(
    EntryId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    UserId INT NOT NULL,
    Principal FLOAT NOT NULL,
    Rate FLOAT NOT NULL,
    Time INT NOT NULL ,
    TotalInterest FLOAT NOT NULL,
    FOREIGN KEY (UserId) REFERENCES Users(UserId)
);