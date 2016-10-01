from flask import Flask
from config.py import *

## Configuring the app
app = Flask(__name__)

## URL Building;
@app.route('/', methods=['GET','POST'])
def hello_world():
    return "hello, world!"
