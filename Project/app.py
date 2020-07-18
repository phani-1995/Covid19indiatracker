from flask import Flask, render_template, request
import json

app = Flask(__name__)
filename='16072020.json'

@app.route('/', methods=['GET'])
def index():
    return(render_template('index.html'))

@app.route('/', methods=['POST'])
def result():
    # Get request data from front end
    country1 = request.form['country']
    country2 = request.form['country2']
    country3 = request.form['country3']
    #Get cases for countries
    casesCountry1=getCases(country1)
    casesCountry2 = getCases(country2)
    casesCountry3 = getCases(country3)

    #Get deaths for countries
    deathCountry1 = getdeaths(country1)
    deathCountry2 = getdeaths(country2)
    deathCountry3 = getdeaths(country3)

    #Get dates
    dateLabels = getDates()
    print(deathCountry2)
    print(dateLabels)
    return(render_template('index.html', Country1=country1, Country2=country2, Country3=country3, casesCountry1=casesCountry1, casesCountry2=casesCountry2, casesCountry3=casesCountry3, deathCountry1=deathCountry1, deathCountry2=deathCountry2, deathCountry3=deathCountry3, dateLabels=dateLabels))

def getCases(country):
    with open(filename) as json_file:
        jsonData = json.load(json_file)
        casesList = []
        for record in jsonData['records']:
            if record['countryterritoryCode'] == country:
                casesList.append(int(record['cases']))
    return(list(reversed(casesList)))

def getdeaths(country):
    with open(filename) as json_file:
        jsonData = json.load(json_file)
        deathList = []
        for record in jsonData['records']:
            if record['countryterritoryCode'] == country:
                deathList.append(int(record['deaths']))
    return(list(reversed(deathList)))

def getDates():
    with open(filename) as json_file:
        jsonData = json.load(json_file)
        dateList = []
        for record in jsonData['records']:
            if record['countryterritoryCode'] == 'ITA':
                dateList.append(record['dateRep'])
    return(list(reversed(dateList)))





if __name__=='__main__':
    app.run(debug=True)
