CREATE TABLE "profesores" (
  "id" int NOT NULL AUTO_INCREMENT,
  "dni" varchar(64) DEFAULT NULL,
  "nombre" varchar(64) DEFAULT NULL,
  "email" varchar(64) DEFAULT NULL,
  "profesion" varchar(128) DEFAULT NULL,
  "telefono" varchar(64) DEFAULT NULL,
  "apellido" varchar(64) DEFAULT NULL,
  PRIMARY KEY ("id")
);


CREATE TABLE "estudiantes" (
  "id" int NOT NULL AUTO_INCREMENT,
  "dni" varchar(64) DEFAULT NULL,
  "nombre" varchar(64) DEFAULT NULL,
  "email" varchar(64) DEFAULT NULL,
  "apellido" varchar(64) DEFAULT NULL,
  PRIMARY KEY ("id")
);


CREATE TABLE "cursos" (
  "id" int NOT NULL AUTO_INCREMENT,
  "nombre" varchar(64) DEFAULT NULL,
  "descripcion" text,
  "profesor_id" int DEFAULT NULL,
  PRIMARY KEY ("id"),
  KEY "cursos_profesores_FK" ("profesor_id"),
  CONSTRAINT "cursos_profesores_FK" FOREIGN KEY ("profesor_id") REFERENCES "profesores" ("id")
);



CREATE TABLE "cursos_estudiantes" (
  "curso_id" int NOT NULL,
  "estudiante_id" int NOT NULL,
  PRIMARY KEY ("curso_id","estudiante_id"),
  KEY "cursos_estudiantes_estudiantes_FK" ("estudiante_id"),
  CONSTRAINT "cursos_estudiantes_cursos_FK" FOREIGN KEY ("curso_id") REFERENCES "cursos" ("id"),
  CONSTRAINT "cursos_estudiantes_estudiantes_FK" FOREIGN KEY ("estudiante_id") REFERENCES "estudiantes" ("id")
);