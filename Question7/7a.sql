SELECT *
FROM   customer
WHERE  lastname LIKE 's%'
ORDER  BY lastname,
          firstname DESC; 