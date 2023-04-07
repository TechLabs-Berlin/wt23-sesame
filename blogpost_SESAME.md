# Sesame  ![](https://github.com/TechLabs-Berlin/wt23-sesame/blob/DS_Storytelling_FeatureDevelopment/images/Logo.svg)
*Receipts cause clutter, but contain useful data that is easily lost.*  
What can I do about this if I want to record the information on my receipts in a structured way in order to get an overview of my expenses, to be able to call them up without much effort and to better understand my spending behavior?
**you can use SESAME.**

## Introduction
SESAME should help you to bundle your expenses in a structured way in one app. With your own account you can keep track of your receipts. You can assign each of your receipts to a category of your choice, such as "Shopping", "Groceries", "Travelling", "Rent" etc., with the value, date and place of issue. You can enter your receipts manually, or you can import a photo of your receipt from which Optical Character Recognition can recognize the relevant information (output value, date, output location and, if applicable, category). The user gets his expenses summarized in a weekly or monthly view. For the selected period, the categories with the largest output values are listed below the view. This way you can keep track of your expenses in the long run and no longer have to keep piles of paper or worry about not being able to find a receipt.

## Data Science

### raw data


### processed data

### insights

![](https://github.com/TechLabs-Berlin/wt23-sesame/blob/DS_Storytelling_FeatureDevelopment/images/DS/FacetGrid_WeekdaysWeekend.png)


### OCR




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
