DROP TABLE IF EXISTS User1 CASCADE;
DROP TABLE IF EXISTS Question CASCADE;
DROP TABLE IF EXISTS Options CASCADE;
DROP TABLE IF EXISTS TypeOfExam CASCADE;
DROP TABLE IF EXISTS Test CASCADE;
DROP TABLE IF EXISTS Topic CASCADE;
DROP TABLE IF EXISTS SubTopic CASCADE;
DROP TABLE IF EXISTS Tag CASCADE;
DROP TABLE IF EXISTS Attempt CASCADE;

--User
CREATE TABLE User1 (
    user_id INT ,
    name TEXT,
    username TEXT,
    type_of_user CHAR CHECK(type_of_user='S' or type_of_user='F'), 
    Primary key(user_id)
);

--Question
CREATE TABLE Question (
    question_id INT ,
    user_id INT ,
    question TEXT,
    difficulty INT CHECK(difficulty between 1 and 10),
    type_of_question TEXT CHECK(type_of_question='IntegerType' or type_of_question='MCQ' or type_of_question='SCQ' or type_of_question='True/False'),
    Primary key(question_id) ,
    FOREIGN KEY(user_id) references User1(user_id) on delete set null
);

--Options
CREATE TABLE Options (
    question_id INT ,
    options TEXT ,
    correct BOOL ,
    Primary key(question_id,options),
    FOREIGN KEY(question_id) references Question(question_id) on delete set null
);

--TypeOfExam
CREATE TABLE TypeOfExam (
    question_id INT ,
    type_of_exam TEXT CHECK( type_of_exam='JEE-Mains' or type_of_exam='JEE-Adv' ),
    Primary key(question_id,type_of_exam),
    FOREIGN KEY(question_id) references Question(question_id) on delete set null
);

--TypeOfExam
CREATE TABLE Test (
    test_id INT ,
    user_id INT,
    Primary key(test_id),
    FOREIGN KEY(user_id) references User1(user_id) on delete set null
);

--Topic
CREATE TABLE Topic (
    topic_id INT ,
    topic TEXT ,
    Primary key(topic_id)
);

--SubTopic
CREATE TABLE SubTopic (
    subtopic_id INT ,
    subtopic TEXT ,
    topic_id INT ,
    Primary key(subtopic_id) ,
    FOREIGN KEY(topic_id) references Topic(topic_id) on delete set null    
);

--Tag
CREATE TABLE Tag (
    question_id INT ,
    subtopic_id INT ,
    topic_id INT ,
    Primary key(question_id,subtopic_id,topic_id),
    FOREIGN KEY(question_id) references Question(question_id) on delete set null,
    FOREIGN KEY(subtopic_id) references SubTopic(subtopic_id) on delete set null,
    FOREIGN KEY(topic_id) references Topic(topic_id) on delete set null
);

--Attempt
CREATE TABLE Attempt (
    test_id INT ,
    question_id INT ,
    timetaken TIMESTAMP ,
    AnswerGiven TEXT ,
    Primary key(test_id,question_id),
    FOREIGN KEY(question_id) references Question(question_id) on delete set null ,
    FOREIGN KEY(test_id) references Test(test_id) on delete set null 
);
