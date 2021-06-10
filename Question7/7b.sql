SELECT customer.custid,
       Ifnull(Sum(orderline.cost * orderline.quantity), 0) AS TotalValue
FROM   customer
       LEFT JOIN order
              ON order.customerid = customer.custid
       LEFT JOIN orderline
              ON order.orderid = orderline.ordid
WHERE  Julianday(order.orderdate) > Julianday('now', '-6 months')
GROUP  BY customer.custid 