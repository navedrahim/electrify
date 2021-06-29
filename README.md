<!-- CODENAME: BANANA -->
# Project Overview

## Project Name

Electrify

## Project Description

Electrify is an app utilizing React and an Airtable API that allows users to browse information on different electric vehicles. The user will be able to add vehicles, as well as modify the information. Users will also be able to leave comments/reviews of each vehicle.

## Wireframes
The first wireframe is of the home page. This contains a description of what one will find on the app, with a button to browse vehicles below.
![Imgur](https://i.imgur.com/5NbpqZv.png)
This is where users will be able to browse for cars, which are divided by manufacturer. There is also a button to add a vehicle.
![Imgur](https://i.imgur.com/wJU3pL3.png)
This is what displays when the user clicks on a model. In the left column, the vehicle image and information is displayed. In the right column, there are comments about the vehicle.
![Imgur](https://i.imgur.com/dhY8CJr.png)
This is the page for submitting comments.
![Imgur](https://i.imgur.com/5dDlTld.png)

## Component Hierarchy
![Imgur](https://i.imgur.com/NV48tjx.png)

## API and Data Sample
https://airtable.com/tblbHsPL8dAKldFto/

```json
{
    "records": [
        {
            "id": "recIhBGAE7GXzcjzi",
            "fields": {
                "make": "Tesla",
                "model": "Model 3",
                "range": "263-353",
                "price": "$39,990",
                "comments": "Amazing technology and performance.",
                "image": "https://i.imgur.com/OLLpL83.png"
            },
            "createdTime": "2021-06-29T03:11:45.000Z"
        },
        {
            "id": "recpZDM7kxuqe49Cq",
            "fields": {
                "make": "Hyundai",
                "model": "Kona Electric",
                "range": "258",
                "price": "$37,390",
                "image": "https://i.imgur.com/MrnmoUg.jpg",
                "comments": "Very comfortable and quiet"
            },
            "createdTime": "2021-06-29T03:11:45.000Z"
        },
        {
            "id": "recnVpcgLKX3wZ1TF",
            "fields": {
                "make": "Volvo",
                "model": "XC40 Recharge",
                "range": "208",
                "price": "$53,990",
                "image": "https://i.imgur.com/jh1pFDR.png",
                "comments": "Well designed and comfortable interior"
            },
            "createdTime": "2021-06-29T03:11:45.000Z"
        }
    ],
    "offset": "recnVpcgLKX3wZ1TF"
}
```

### MVP/PostMVP

#### MVP 

- Render data from Airtable api
- Allow user to add and edit car info
- Allow user to make comments on each car

#### PostMVP  

- Add functionality to select multiple cars and compare them side by side
- Sort by range, price

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations. Here's an example.

|  Day | Deliverable | Status
|---|---| ---|
|June 29| Project Approval/API completion/Pseudocode/begin code | Incomplete
|June 30| Build individual components/ Begin CSS | Incomplete
|July 1| Finish functionality and CSS | Incomplete
|July 2 | Deploy MVP | Incomplete
|July 3-6 | Make style changes if necessary  | Incomplete
|July 7| Presentations | Incomplete

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Proposal | H | 3hrs| 3.5hrs | 3.5hrs |
| Airtable Completion | H | 1hr|  |  |
| Research | H | 3hr|  |  |
| Rendering Data | H | 3hrs|  |  |
| Component Setup | H | 3hrs|  |  |
| Add Car Form | H | 3hrs|  |  |
| Add Comment Form | H | 3hr|  |  |
| Update Data Render | H | 3hr|  |  |
| Comment Features | H | 3hrs|  |  |
| Edit Form | H | 3hr|  |  |
| Home CSS | H | 3hr|  |  |
| Browse and Car Info CSS | H | 3hrs|  |  |
| Responsiveness | H | 3hrs|  |  |
| Proofread and Edit | H | 3hr|  |  |
| Total | H | 40hrs|  |  |

## SWOT Analysis

### Strengths:
I have a decent understanding of React components and how I want everything to be structured.
### Weaknesses:
I'm much more comfortable with fuctional components vs class components, if using class components is the best option then that may add to research time.
### Opportunities:
This is a good opportunity to get more comfortable and reinforce my React skills
### Threats:
CSS is my greatest source of frustration. I will try to avoid getting bogged down with CSS issues and reach out for help.