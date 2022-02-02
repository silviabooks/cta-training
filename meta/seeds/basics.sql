TRUNCATE "public"."users" CASCADE;
TRUNCATE "public"."expenses" CASCADE;

INSERT INTO "users" ("id", "name", "created_at", "is_public") VALUES
(4,	'antonio',	'2022-01-25 16:42:44.55125+00',	'1'),
(3,	'fran',	'2022-01-25 16:38:43.302965+00',	'1'),
(2,	'silvia',	'2022-01-25 16:38:35.902582+00',	'1');

INSERT INTO "expenses" ("id", "user_id", "created_at", "amount", "notes") VALUES
(1,	2,	'2022-01-25 16:52:08.737986+00',	22,	'first note'),
(2,	2,	'2022-01-25 16:52:15.4356+00',	30,	'third note'),
(3,	3,	'2022-01-25 16:52:21.991514+00',	10,	'apples'),
(4,	4,	'2022-01-25 16:52:28.441628+00',	99,	'computers'),
(5,	4,	'2022-01-25 16:52:33.541738+00',	20,	'train');
