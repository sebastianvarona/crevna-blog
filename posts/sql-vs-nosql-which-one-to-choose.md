---
title: 'SQL vs. NoSQL - ¿Which one to choose?'
date: '2022-02-25'
tags: 'Technologies'
img: 'posts/sql-vs-nosql-which-one-to-choose/thumb.png'
lang: 'en'
category: 'article'
---

One of the first problems that developers face when developing an application. It is deciding what type of data class is best for them to use. In fact, they may have only used one type of these all their careers and never stopped to think if they were using the right one.

We know that the two main types of databases are Relational (SQL) and Non-Relational (NoSQL). To better understand what SQL and NoSQL are, the former is used for relational databases, while the latter is used for non-relational ones. A relational database is one where the data that is stored in it is related to other data. On the other hand, a non-relational database is exactly the opposite.

## Relational Databases (SQL)
These are collections of data organized in the form of tables, containing rows, columns and cells just like an *Excel* workbook works in a very generalized approach. Each table in the database must have a column that stores primary keys that will serve as an identifier for each of the rows in the table. This identifier is what will later serve as a means to establish relationships between entities or tables in the database.

![SQL databases](/images/posts/sql-vs-nosql-which-one-to-choose/sql.png)

### Advantages of SQL:
- Due to the time they have been in the market, they are less expensive than their counterpart and also have greater support.
- They are integral, that is, the type of data specified for each field must coincide with the data that is entered.
- Less vulnerable to failures.

### Disadvantages of SQL:
- Little flexibility.
- Less speed of reading to a lot of data volume.

## Non-Relational Databases (NoSQL)
They are collections of data with very flexible schemas. They are easy to develop and have a very good performance handling very large amounts of data. These do NOT have an identifier for their data, so it is not possible to establish relationships between the data in a *NoSQL* database. In these databases the data is organized as documents.

![NoSQL databases](/images/posts/sql-vs-nosql-which-one-to-choose/nosql.png)

### NoSQL Advantages:
- They are much more flexible than relational databases.
- They allow horizontal scalability.
- Optimized for huge amounts of data.

### Disadvantages of NoSQL:
- Lack of standardization.
- Few tools for use and handling.

## When to use one or the other?
- If the data you are going to store must have a specific consistency in each field: SQL.
- When the structure of the data can vary and do not have a specific structure: NoSQL.
- If the stored data has relationships with other data by means of identifiers: SQL.
- If the data is isolated and there are no relationships between them: NoSQL.
- If the volume of data can have peaks in which it increases a lot: NoSQL.
- If the data volume has a controlled growth: SQL.

## Conclusions

As we could see, both relational and non-relational databases have their own characteristics with their respective advantages and disadvantages. Both databases are recommended to use to store your data, and with both you can achieve very similar goals if you set your mind to it. However, it is important to know which of the two database options will suit us best depending on your needs and the requirements of your application.