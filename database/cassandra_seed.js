
/*
copy from command
COPY description FROM '/Users/shawnchambers/Documents/Hack_Reactor/rpt16-sdc/service_troy/seed/data.csv' with header=true and delimiter=',';

copy from with column order specified
COPY description (item_number, list_date, condition, brand, type, packaging, material, rec_age, char_family, manfactured, era, year, size, upc) FROM '/Users/shawnchambers/Documents/Hack_Reactor/rpt16-sdc/service_troy/seed/data.csv' with header=true and delimiter=',';

CREATE KEYSPACE products
WITH replication = {'class':'SimpleStrategy', 'replication_factor' : 2};

create secondary index?
create index description_list_date on description(list_date);


CREATE COLUMNFAMILY description(
item_number INT PRIMARY KEY,
list_date timestamp,
condition TEXT,
brand TEXT,
type TEXT,
packaging TEXT,
material TEXT,
rec_age INT,
char_family TEXT,
manfactured TEXT,
era TEXT,
year INT,
size INT,
upc INT);

item_number,list_date,condition,brand,type,packaging,material,rec_age,char_family,manfactured,era,year,size,upc
*/
