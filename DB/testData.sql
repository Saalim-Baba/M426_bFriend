USE bFriend_DB;

-- Insert test data into Mode table
INSERT INTO Mode (`Definition`) VALUES
('Active Mode'),
('Passicve Mode');

-- Insert test data into Interests table
INSERT INTO Interests (`Name`, `Description`) VALUES
('Sports', 'All about sports activities'),
('Music', 'Music related interests');

-- Insert test data into Card_Info table
INSERT INTO Card_Info (Card_Holder, Card_Number, Security_Code, Card_ExpiryDate) VALUES
('John Doe', '1234567890123456', '123', '2025-12-31'),
('Jane Smith', '9876543210987654', '456', '2024-06-30');

-- Insert test data into Subscription table
INSERT INTO Subscription (`Description`, Active, Sub_ExpiryDate, Sub_ActivationDate) VALUES
('Monthly Subscription', TRUE, '2024-12-31', '2023-01-01'),
('Annual Subscription', TRUE, '2025-12-31', '2024-01-01');

-- Insert test data into Account table
INSERT INTO Account (Username, `Name`, Lastname, `Description`, Subscription_ID, `Password`, Admin_Rights, Mode_ID) VALUES
('john_doe', 'John', 'Doe', 'A basic user', 1, 'password123', FALSE, 1),
('jane_smith', 'Jane', 'Smith', 'An advanced user', 2, 'password456', TRUE, 2);

-- Insert test data into Message table
INSERT INTO Message (Sender_ID, Receiver_ID, Content) VALUES
(1, 2, 'Hello Jane! How are you?'),
(2, 1, 'Hi John! I am good, thank you!');

-- Insert test data into Account_Interests table
INSERT INTO Account_Interests (Account_ID, Interests_ID) VALUES
(1, 1),
(1, 2),
(2, 1);

-- Insert test data into Account_Card_Info table
INSERT INTO Account_Card_Info (Card_ID, Account_ID) VALUES
(1, 1),
(2, 2);