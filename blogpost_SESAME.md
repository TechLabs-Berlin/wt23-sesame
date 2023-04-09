# Sesame  ![](https://github.com/TechLabs-Berlin/wt23-sesame/blob/DS_Storytelling_FeatureDevelopment/images/Logo.svg)
*Receipts cause clutter, but contain useful data that is easily lost.*  
What can I do about this if I want to record the information on my receipts in a structured way in order to get an overview of my expenses, to be able to call them up without much effort and to better understand my spending behavior?
**you can use SESAME.**

## Introduction
SESAME should help you to bundle your expenses in a structured way in one app. With your own account you can keep track of your receipts. You can assign each of your receipts to a category of your choice, such as "Shopping", "Groceries", "Travelling", "Rent" etc., with the value, date and place of issue. You can enter your receipts manually, or you can import a photo of your receipt from which Optical Character Recognition can recognize the relevant information (output value, date, output location and, if applicable, category). The user gets his expenses summarized in a weekly or monthly view. For the selected period, the categories with the largest output values are listed below the view. This way you can keep track of your expenses in the long run and no longer have to keep piles of paper or worry about not being able to find a receipt.

## Data Science

In our project, we utilized a dataset created internally by Cristina, which included detailed information about her personal expenses such as the date, category, and other relevant details. By analyzing this dataset, we were able to identify the most useful features for a user tracking their expenses. To clean, process, and visualize the data, we used a combination of Jupyter Notebooks, Visual Studio Code, and Python. This allowed us to efficiently manipulate and analyze the data, as well as organize our code and present our findings to the rest of the team. Additionally, we used various visualization tools to gain further insights into the data and explain how the features should look to the front-end of our product. As the backend team required, we converted the relevant dataframes into CSV or JSON format. Below, we have included some screenshots with explanations of our data cleaning and visualization process.

### raw data

In Screenshot 1, you can see our raw data. To begin with, we converted the date column into datetime format. Then, we removed any errors or missing values, checked for duplicates, and rectified any errors that were spotted. This allowed us to ensure that our data was accurate and complete, which was essential for our analysis and visualization.

![](https://github.com/TechLabs-Berlin/wt23-sesame/blob/DS_Storytelling_FeatureDevelopment/images/DS/initial_dataframe.png)  
**initial dataframe**


### processed data
After having a look at the raw data, we had a DS group meeting and decided on some hypotheses and settled on some interesting experiments that we could run to learn more about the bigger picture of the data. We categorized the data by grouping it based on the date column by week, month, or day of the week. This allowed us to explore the data further and identify new patterns and trends, and set the foundation to further understand the patterns and trends through visualisation in the next step.

 ![](https://github.com/TechLabs-Berlin/wt23-sesame/blob/DS_Storytelling_FeatureDevelopment/images/DS/processed_dataframe.png)  
**final dataframe**

### insights
In the Insights section, you can see that we explored many different types of charts. Our favorites were the stacked bar chart and the donut pie chart.

In the stacked bar chart, we were able to show a lot of information in a way that doesn’t feel overwhelming. We felt that this would be highly useful to the user, as they could better understand the contribution of each category to their spending habits, while comparing over time, the changes in spending overall. For example, you can see in the bar chart that over time, the user was spending less money on average, possibly thanks to the increased awareness of their spending habits. 

![](https://github.com/TechLabs-Berlin/wt23-sesame/blob/DS_Storytelling_FeatureDevelopment/images/DS/StackedBarchart.png)  

The donut pie chart, on the other hand, allowed us to easily see the distribution of spending across different categories. We found this particularly useful when we were analyzing the data by month or week, as we could quickly see which categories were consuming a larger percentage of the user’s expenses.

![](https://github.com/TechLabs-Berlin/wt23-sesame/blob/DS_Storytelling_FeatureDevelopment/images/DS/PieChart_JulAug.png)  

or Aug/Sep ..
![Spendings for September](https://github.com/TechLabs-Berlin/wt23-sesame/blob/DS_Storytelling_FeatureDevelopment/images/DS/PieChart_AugSep.png)  


It is also interesting to look at the categories individually. A line chart is sufficient here. Superimposing all the lines does not give a clear picture, as the scales of the categories differ greatly from one another.

chaotic view onto the different categories ..

![](https://github.com/TechLabs-Berlin/wt23-sesame/blob/DS_Storytelling_FeatureDevelopment/images/DS/Lineplot_Chaotic.png)  

Therefore, the line diagrams are shown as a subplot. Here, the user quickly gets an overview of the dynamics of his categories, are these fixed costs that always demand a similar or identical amount or is it a cost unit that is subject to strong dynamics? 

![](https://github.com/TechLabs-Berlin/wt23-sesame/blob/DS_Storytelling_FeatureDevelopment/images/DS/Lineplot_Ordered.png)  



An equally interesting consideration is breaking down the time into weekdays and weekends. The fixed costs already identified can theoretically be neglected here. Here it is noticeable that the majority of the costs arise within the week.

![](https://github.com/TechLabs-Berlin/wt23-sesame/blob/DS_Storytelling_FeatureDevelopment/images/DS/FacetGrid_WeekdaysWeekend.png)  


### OCR


In addition to dealing with the cristina dataset, a first analysis of receipts was carried out using optical character recognition. For this purpose, the python library pytesseract was used, which enables the specification of 14 psm (Page segmentation modes) and 4 oem (OCR Engine modes) for identifying and converting characters from an image to a string dataset. 

In ***psm*** 14 modes are provided:

- Orientation and script detection (OSD) only.
- Automatic page segmentation with OSD.
- Automatic page segmentation, but no OSD, or OCR. (not implemented)
- Fully automatic page segmentation, but no OSD. (Default)
- Assume a single column of text of variable sizes.
- Assume a single uniform block of vertically aligned text.
- Assume a single uniform block of text.
- Treat the image as a single text line.
- Treat the image as a single word.
- Treat the image as a single word in a circle.
- Treat the image as a single character.
- Sparse text. Find as much text as possible in no particular order.
- Sparse text with OSD.
- Raw line. Treat the image as a single text line, bypassing hacks that are Tesseract-specific.


In ***oem*** 4 modes are provided:

- Legacy engine only.
- Neural nets LSTM engine only.
- Legacy + LSTM engines.
- Default, based on what is available.

The pytesseract setting were is adjusted to the best fit (***psm*** ), respectively kept at mode 3 (***oem*** default, based on what is available). 

A set of 5 images were used to try the OCR in general 

![](https://github.com/TechLabs-Berlin/wt23-sesame/blob/DS_Storytelling_FeatureDevelopment/DS/Data/raw_data/sample_receipt/Edeka_1.jpg)  



### open features/points to further improve
Sesame as an app is at most an MVP at this point in time. The basic functionality can be expanded by a lot, which shows the generally great potential of this tool:

- Category Limits
- Warranty information
- Price developments per product and place of purchase
- Consumer recommendations
- Image quality detection and optimisation

**Category Limits** can be added as an additional feature. The user can enter a value per category that he or she has available or would like to spend on a weekly/monthly or yearly basis. 
The expenditure is tracked in such a way that the user is informed when it is exceeded, so that he is reminded of his entry.

**Warranty information** can also be added as a feature. When scanning a receipt, the user will be asked if there is a warranty for this purchase. Ideally, sesame is trained to recognise the receipt by category and, for example, when purchasing electrical appliances that are covered by a warranty, to ask for this information and then enter it. Shortly before the warranty expires, sesame reminds the user of his claims so that the user has the opportunity to complain about defective purchases.

**Price developments per product and place of purchase** can also become another feature of sesame. For example, when shopping for groceries, sesame scans the products at the supermarket for a price trend and passes this trend on to the user so that he is informed about the extent to which the products he consumes vary in price and whether they are available at a lower price at other supermarkets/discounters that are also accessed by the user and whether the prices there are rising with a similar dynamic.

**Consumer recommendations** could also become part of sesame. Since the receipts per user provide a certain purchasing understanding of the person, from which patterns of the consumer can be derived, such as which products are bought regularly (for example dairy products, fruits, vegetables etc.) these quantities could be calculated per week or month, so that sesame could suggest to the user which quantities he or she consumes on average and therefore needs to purchase.

**Image quality detection and optimisation** could also be integrated into SESAME. For this, the quality of the scanned image would have to be evaluated internally with regard to certain criteria (contrast, sharpness, brightness etc.). If the quality is assessed as too poor to capture the receipt information, these image characteristics are improved internally before the optical character recognition converts the receipt.

## Frontend (WebDev)

## Backend (WebDev)
