create database freiDB;

use freiDB;

create table divulgacao_table(
   id_divulgacao int primary key auto_increment,
   plataforma varchar (40)
);

create table curso_table(
    id_curso int primary key auto_increment,
    cursos varchar(255)
);

create table escolaridade_table(
   id_escolaridade int primary key auto_increment,
   escolaridade varchar(30)
);

create table registro(
    id_registro int primary key auto_increment,
    nome varchar(50),
    idade int,
    cpf varchar(20),
    telefone varchar(13),
    email varchar(50),
    previsao_chegada time,
    id_escolaridade int,
    id_curso int,
    id_divulgacao int,
    ja_foi_aluno tinyint(1),
    qrcode varchar(255) unique,
    foreign key (id_escolaridade) references escolaridade_table (id_escolaridade),
    foreign key (id_curso) references curso_table (id_curso),
    foreign key (id_divulgacao) references divulgacao_table (id_divulgacao)
);

create table login(
	id_conta int primary key auto_increment,
    email varchar(50),
    senha varchar(50)
);

insert into escolaridade_table (escolaridade)
values
('Ensino Fundamental'),
('Ensino Médio'),
('Ensino Superior'),
('Pós Graduação'),
('Mestrado'),
('Doutorado');

insert into curso_table(cursos)
values
('Curso Técnico em Administração'),
('Curso Técnico em Comunicação Visual'),
('Curso Técnico em Informática'),
('Curso de Qualificação Profissional em Eletromecânica de Autos'),
('Curso de Qualificação Profissional em Automação Residencial e Robótica'),
('Curso Livre de Inglês Teens I - In Action (Diurno)'),
('Curso Livre de Inglês Teens II - In Action (Diurno)'),
('Curso Livre de Inglês Básico ao Pré-Intermediário - English in Action (Diurno)'),
('Curso Livre de Inglês Básico - English in Action(Noturno)'),
('Curso Livre de Inglês Pré-Intermediário - English in Action (Noturno)'),
('Curso Livre de Inglês Intermediário - English in Action(Sábados)'),
('Curso Livre de Inglês Avançado - English in Action(Sábado)'),
('Curso Livre de Informática Básica – Excel Avançado (Noturno)'),
('Curso Livre de Eletricista Instalador (Noturno)');


insert into divulgacao_table(plataforma)
values
('Instagram'),
('Facebook'),
('LinkedIn'),
('Site da instituição'),
('TikTok'),
('Youtube');

insert into registro(nome, idade, cpf, telefone, email, previsao_chegada, id_escolaridade, id_curso, id_divulgacao, ja_foi_aluno)
	values
    ('Caio', '23', '100.000.000-00', '11940028923', 'caio@gmail.com', '8:45:00', 3, 3, 4, true),
    ('João', '18', '200.000.000-00', '11940028924', 'joao@gmail.com', '10:30:00', 3, 3, 3, true),
    ('Pedro', '17', '300.000.000-00', '11940028925', 'pedro@gmail.com', '12:00:00', 1, 1, 1, false),
    ('Ana', '20', '400.000.000-00', '11940028926', 'ana@gmail.com', '10:00:00', 2, 2, 5, false),
    ('Marcos', '23', '000.000.000-00', '11940028922', 'marcos@gmail.com', '8:50:00', 3, 3, 4, true);

insert into login(email, senha)
	values
    ('teste01@gmail.com', '1234efgh');

select * from registro;