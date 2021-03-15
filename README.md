<div>
  <img src="https://i.imgur.com/8rIM2Tz.png" width=61.5%>
</div>


# Forum Application


## About

> My final project for the Texas A&M University - Kingsville web development bootcamp.
> This application allows users login or register. Once they do so they are able to post, browse, and comment on forums. 




## Getting Started

### Prerequisites

* Node >= 10.16
* npm >= 5.6

### Installing

Get the project up and running locally in just 5 easy steps.

1. Create a personal [Fork](https://github.com/login?return_to=%2FBrianRuizy%2Fcovid19-dashboard) of this repository.

2. **Clone** the fork with HTTPS, using your local terminal to a preferred location, and **cd** into the project.

```bash
git clone https://github.com/your_username/covid19-dashboard.git

Cloning into 'covid19-dashboard'...
remote: Enumerating objects: 113, done.
remote: Counting objects: 100% (113/113), done.
remote: Compressing objects: 100% (80/80), done.
Receiving objects: 100% (2845/2845), 12.52 MiB | 5.21 MiB/s, done.

cd covid19-dashboard/
```

3. Create your virtual environment, and activate it.

```bash
python -m venv env

source env/bin/activate  # Linux/Mac
env/Scripts/activate  # Windows
```

4. Install dependencies

```bash
pip install -r requirements.txt
```

5. Run local server, and **DONE**!

```bash
python manage.py runserver

May 06, 2020 - 11:22:23
Django version 3.0.6, using settings 'core.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CONTROL-C.
```

## Deployment

Heroku app is already configured to this repository for *automatic deploys* from any push to the **master** branch. Create a pull request containing your respective changes and wait for merge.

## Reading data locally
You can go through all the available datasets by going into the `/processdata` directory, launching a interactive python shell, importing `getdata` file, and calling any function. See below...

```bash
cd ~/repos/covid19-dashboard/processdata
```

```bash
$ python

Python 3.7.6 (default, Jan  8 2020, 20:23:39) [MSC v.1916 64 bit (AMD64)] :: Anaconda, Inc. on win32 
...

>>> import getdata
>>> getdata.realtime_growth()

         Confirmed  Deaths  Recovered
Date
1/22/20        555      17         28
1/23/20        654      18         30
...            ...     ...        ...
8/2/20    18079723  689362   10690555
8/3/20    18282208  693694   10913000

[195 rows x 3 columns]
```


## Built With

* [Django](https://www.djangoproject.com/) Django is a high-level Web framework that encourages rapid development and clean, pragmatic design.
* [Plotly](https://plotly.com/) The leading front-end for ML & data science models in Python, R, and Julia.
* [Appseed](https://appseed.us/)
* [Bootstrap](https://getbootstrap.com/)

## Data Sources

* Johns Hopkins University: [CSSE](https://systems.jhu.edu/) 2019-ncov data repository, found [here](https://github.com/CSSEGISandData/COVID-19).
* Our World in Data: [OWID](https://ourworldindata.org/) GitHub Data repository, found [here](https://github.com/owid/covid-19-data/tree/master/public/data).
* New York Times' COVID GitHub data repository, found [here](https://github.com/nytimes/covid-19-data)

## License

[@MIT](https://github.com/BrianRuizy/covid19-dashboard/blob/master/LICENSE.md)











CREATE TABLE forums (
    forumsID INT NOT NULL AUTO_INCREMENT,
    userID INT,
    forumsTitle VARCHAR(100),
    forumsDescription VARCHAR(55),
    forumsDate DATE,
    FOREIGN KEY (userID) REFERENCES users(userID)
    PRIMARY KEY (forumsID)
   
    
);


create TABLE users(
  userID INT NOT NULL AUTO_INCREMENT,
  userFName VARCHAR(20),
  userLName VARCHAR(20),
  userEMail VARCHAR(45),
  userPassword VARCHAR(45),
  createdDate DATE,
  PRIMARY KEY (userID)
);


create TABLE comments(
  commentsID INT NOT NULL AUTO_INCREMENT,
  forumsID INT,
  userID INT,
  commentsDescription VARCHAR(100),
  commentsDate DATETIME,
  PRIMARY KEY (commentsID),
  FOREIGN KEY (userID) REFERENCES users(userID)
)
