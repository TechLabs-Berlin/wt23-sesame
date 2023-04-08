![image](https://user-images.githubusercontent.com/117686913/230675893-733dd9b0-d61f-49ec-a39d-aa6fb611fb28.png)
*Receipts cause clutter, but contain useful data that is easily lost.*  
What can I do about this if I want to record the information on my receipts in a structured way in order to get an overview of my expenses, to be able to call them up without much effort and to better understand my spending behavior?
**you can use SESAME.**

## Introduction
SESAME should help you to bundle your expenses in a structured way in one app. With your own account you can keep track of your receipts. You can assign each of your receipts to a category of your choice, such as "Shopping", "Groceries", "Travelling", "Rent" etc., with the value, date and place of issue. You can enter your receipts manually, or you can import a photo of your receipt from which Optical Character Recognition can recognize the relevant information (output value, date, output location and, if applicable, category). The user gets his expenses summarized in a weekly or monthly view. For the selected period, the categories with the largest output values are listed below the view. This way you can keep track of your expenses in the long run and no longer have to keep piles of paper or worry about not being able to find a receipt.

## Data Science

### raw data

the initial dataframe looked as follows ..

![](https://github.com/TechLabs-Berlin/wt23-sesame/blob/DS_Storytelling_FeatureDevelopment/images/DS/initial_dataframe.png)  
**initial dataframe**

it included the following processing steps [...]

### processed data
the final dataframe looks as follows ..  
![](https://github.com/TechLabs-Berlin/wt23-sesame/blob/DS_Storytelling_FeatureDevelopment/images/DS/processed_dataframe.png)  
**final dataframe**

### insights

barchart of the entire dataset 

![](https://github.com/TechLabs-Berlin/wt23-sesame/blob/DS_Storytelling_FeatureDevelopment/images/DS/StackedBarchart.png)  


how does it look for Jul/Aug ..

![](https://github.com/TechLabs-Berlin/wt23-sesame/blob/DS_Storytelling_FeatureDevelopment/images/DS/PieChart_JulAug.png)  


or Aug/Sep ..
![Spendings for September](https://github.com/TechLabs-Berlin/wt23-sesame/blob/DS_Storytelling_FeatureDevelopment/images/DS/PieChart_AugSep.png)  



chaotic view onto the different categories ..

![](https://github.com/TechLabs-Berlin/wt23-sesame/blob/DS_Storytelling_FeatureDevelopment/images/DS/Lineplot_Chaotic.png)  

more ordered view ..

![](https://github.com/TechLabs-Berlin/wt23-sesame/blob/DS_Storytelling_FeatureDevelopment/images/DS/Lineplot_Ordered.png)  



taking a closer look at the differentiation of spendings on weekdays vs. weekend ...

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



## Web Developement

### Frontend: 

**Preset arrangements** Due to our limited time, we decided to create a web application using technologies such as `React, HTML, CSS, JavaScript, and the Material UI and Recharts library`. We implemented a mobile-first approach during the design and development process to ensure that the web application looks and functions well on mobile devices, given the application's intended use case.

**File structuring:** After defining the pages that we wanted to include in the app, we created a separate JavaScript file for each page and linked them together in another file. Although we were unsure if it was the best approach, it allowed us to work on each page individually and keep the codes as simple and readable as possible.

To **maintain visual consistency** throughout the app, we created an `App.css` file and defined the first set of `recurring components`, such as the app header and bottom navigation bar, to be implemented across all pages. By using these recurring components, we were able to ensure a consistent look and feel throughout the app, as well as achieve reusability, maintainability, and scalability.

**The Welcome Screen** allows users to go through a typical **login or registration process**. At this stage, we have decided to prioritize building other pages with features that are more relevant to the app. Therefore, we only focused on bulding the Welcome Screen and the Login/Registry page accordingly to the design, and functionality should be added later if time allows. To give users an opportunity to explore the app's main features without committing to creating an account, we include a guest access button that allows users to enter the app.
<div style="display: flex; justify-content: flex-start; gap: 16px; margin: 16px 0px;">
  <img src="app-screens/Appscren_1.png" alt="Welcome Screen" width="300">
  <img src="app-screens/Appscren_3.png" alt="Second Image" width="300">
</div>


#### Import Receipts 
`'react-qr-reader'` @2.2.1 is used for scanning purposes. After some research we found out, that the newest versions of react-qr-reader leads to some unexpected errors. So we stick with the older and stabile version. Though we managed to get scanned data in the FE, we couldn't manage delivering the data to BE server because of the time limit.

`'react-webcam'` 7.0.1 gave us possibility to work on the option to import receipts manually by taking picture. Taking the picture of the receipt was managed, but delievering it to the BE server for the further actions was not possible due to time limit.
![image](https://user-images.githubusercontent.com/117686913/230718525-8a4f42de-3d4e-4308-a35b-025d345a38c1.png)




**Bill page** features a bar chart and table displaying expenses incurred by the user when collecting receipts. Although we initially envisioned this page as a collaborative meeting point for the different teams involved in the project, it still took us some time to figure out the dependencies between the data science (DS), backend (BE), and frontend (FE) teams. 

<div style="display: flex; justify-content: flex-start; gap: 16px; margin: 16px 0px;">
  <img src="app-screens/Appscren_7.png" alt="Bill page with barchart" width="300" >

</div>

Building and styling the bar chart and table was straightforward thanks to the `MUI and Recharts library`, but learning how to use the `fetch method` and collaborate intensly with BE took up most of our time. We also discovered that since we were running MongoDB locally on port 4000, the frontend team had to set up their own instance of MongoDB, which is not usually necessary when the backend team provides a server API. This added an extra layer of complexity, but we were able to overcome it.


### Unimplemented Features** 

- Our original plan was to implement `swipeable barcharts` so that users could view data from different time frames. However, due to time constraints, we were only able to work with data for a one time frame. The slider component remains a future project.
- We intended to include `receipt cards` on the "Bill" page below the component with the barchart and the table to represent collected bills. Unfortunately, due to time limitations, we were unable to develop this feature.
- We had planned to include a `calendar` to enable users to select and filter receipts from a specific time period. Regrettably, we were unable to implement this feature within the given timeframe.
<div style="display: flex; justify-content: flex-start; gap: 16px; margin: 16px 0px;">
    <img src="app-screens/Appscren_8.png" alt="receipt cards" width="300">
    <img src="app-screens/Appscren_5.png" alt="calendar" width="300">
</div>


### Key take aways for how the data flows between the DS, BE and FE:
1. The values displayed in the bar chart and table are based on a dataset curated by the DS team and provided to the BE team. 
2. The BE team then creates an API to serve the data to the FE team, 
3. The FE team who builds use this API-URL to retrieve the data for the bar chart and table. 

This collaborative process has been essential in connecting the work of the different teams and helping us work together more closely.










### Backend
