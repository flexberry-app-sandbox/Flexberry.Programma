docker build --no-cache -f SQL\Dockerfile.PostgreSql -t programma/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t programma/app ../..
