---
title: "Gil B.'s Guide to Great Data Cleaning"
description: "Let's talk about Datasets. What exactly is a dataset? how do people make them? Is there an easier route?"
date: "2021-02-21"
banner:
  src: "../../images/data-cleaning.png"
  alt: "how to clean data"
categories:
  - "Data Analytics"
  - "Data"
keywords:
  - "Example"
  - "Data"
  - "Data Analyst"
  - "Data Analytics"
  - "Blog"
  - "Dataset"
  - "Python"
---


# What is Data Cleaning?
Data cleaning is the process of ensuring that informational business resources are correct, consistent, and usable. The goal is to translate the values from qualitative to quantitative, in order to apply statisitical methodology. It primarily looks like removing dollar signs from financial data, converting time from UTC to the current time zone and much more. 

This can be done in numerous ways, the preferred method of today being through programming languages. There are still parts of this process that are done manually, but as data grows it becomes more difficult to manage. Using software allows analysts and scientists alike  to reduce the time it takes to analyze as opposed to manually sorting through and cleaning data, which can take hours. Software has been created to help validate information, but knowing how to do it manually is the backbone of understanding. 


# Why is it important? 
Cleaning data is important because a lot of information collected by software systems comes in raw before it's transformed for business use cases. Raw basically means unstructured or semi-structured information such as files with the extension `.json`, `.xml`,  or `.csv`. One of the most prominent examples of this includes time conversion from UTC to the time zone of whoever is operating on the data. Another popular example would be converting categorical data to binary for statistical analysis. The whole point is to get the data to a stage where you can manipulate it using statistics to better understand trends etc. 

If a conversion metric is off, it could really disrupt the entire system depending on which component needed that information to operate efficiently. Think about how an incorrect time zone can throw off a day's worth of  automated logistics reporting. If something in the chain is incorrect it can be super costly, and time-consuming to go back through and double-check manually. This practice is commonplace as organizations are looking to become more data-driven in their decision making. Because organizations are becoming more data-driven it is important to understand and have a semi-structured guide to cleaning your organizations’ data. This is my guide. 


# The Guide 

    * Audit and Strategize
    * Standardize Point of Entry on Data
    * Manipulate Clean Data 
    * Validate Accuracy

![] (../../images/path.png)

## Audit and Strategize ♟
What projects are coming down the pipeline? What are the businesses major goals? What information do we have right now that we can derive valuable insights from to meet the goals?

Everything starts with an audit to discover if there is any dark data or information that isn't adding to the bottom line. Monetization is far more than just selling data, and an audit can help us align intrinsic and extrinsic data. Once the projects are identified and the budget is made, we can begin to figure out how to get the data and how to prepare it for the most optimal route of meeting the business goals. 


## Standardize Point of Entry on Data 
There are several ways to join data be it manually, through SQL using primary keys, or by joining data in python using libraries like pandas. But the one hard rule here is that data is most valuable when you have something to compare it to.

 For example, suppose that two friends went to different universities. During midterm season they both got their grades back for Physics 101. Friend 1’s professor grades according to the standard grading scale ( out of 100), so friend 1 got an 84%, but the class has a mean of 75% and a standard deviation of 5.  Friend 2’s professor uses his own grading scale, so friend 2 got a grade of 570. Her test scale is 750 with a mean of 520 and a standard deviation of 100. Both friends scored above average, but who actually did better? Converting both scores to percent levels the playing field and shows that friend 1 did better at 84% compared to friend 2 who scored 69%. Another example would be matching time-series sales information to campaign lifecycle data. 


## Manipulate ‘clean’  Data 🧼
Once the point of entry is determined, sometimes information has to be organized based on the dependent variable- so more excel shuffling. An additional way to clean would be to remove dollar signs💲, special symbols and determine the best route to account for missing data. There are several ways to do this. The first of which is deletion. Depending on the business goals, you may not always need to have every column of every dataset, so if missing data is present in unnecessary columns, you can delete. 

Always make a copy and talk to somebody first-- communication is key. This is also called `listwise deletion`. The second way is `imputation`. This can be done through `educating guessing` for survey data or `average imputation`- which is using the average value of the responses from neighboring dimensions to fill in the missing data. There are several more ways to impute data which I will cover in a following article. 

## Validate Accuracy 🎯
First, we want to separate the data from the analysis process to make sure the analysis is repeatable. The second option is to try to check the data against another source. This could look like comparing data across systems such as google webmaster tools versus google analytics. The next best option is to check the data distributions looking for any outliers or any trends that could be interesting. This part requires some statistical knowledge. Explore the data and ask questions about it. You could even match time series data that could explain spikes in numbers for certain dimensions. 


It’s important to remember these steps and most importantly the why. If we move through different data sets, this is the underlying process of knowing and asking how to filter through it. We must always be asking questions and I think that this simple guide is a great way to do so. If you know of any other ways or have different experiences please feel free to let me know in the comments!