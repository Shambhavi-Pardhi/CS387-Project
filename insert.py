import psycopg2 as pg
import psycopg2.extras as pge
import os
import csv

user = "postgres"
password = "postgres"
host = "localhost"
port = 5432
database = "project"

def file_reader(path_, table_name):
    with open(path_) as csvfile:
        reader = csv.reader(csvfile)
        header = next(reader)
        sql_base = """INSERT INTO {tna} ({cols})
        VALUES %s
        """
        sql_query = sql_base.format(tna=table_name, cols = ','.join(header))
        values_list = []
        for row in reader:
            for i in range(len(row)):
                if row[i]=='NULL':
                    row[i]=None
            values = tuple(row)
            values_list.append(values)
    return values_list, sql_query

list_tb = os.listdir('data')

table = ['User1','Question','Options','TypeOfExam','Test','Topic','SubTopic','Tag','Attempt']
# print(list_tb)
ddl_file = """ """
with open('project.ddl') as f:
    ddl_d = f.readlines()
    ddl_file +='\n'.join(ddl_d)

with pg.connect(dbname = database , user= user , password= password, host= host, port = int(port)) as conn:
    with conn.cursor() as cur:
        print('Hi')
        cur.execute(ddl_file)
        conn.commit()
        for file in table:
            file_name = file + '.csv'
            vls, sql_q = file_reader(os.path.join('data', file_name), file)
            print(sql_q)
            pge.execute_values(cur, sql_q, vls)
        conn.commit()
        #print(cur.fetchall())
