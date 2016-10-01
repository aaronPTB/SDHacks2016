from config import *
from flask import Flask
from flask import request

## Configuring the app
app = Flask(__name__)

## URL Building;
@app.route('/', methods=['GET','POST'])
def hello_world():
    if request.method =='GET':
        return 'hello, world!'
    else:
        def callback():
            return 'received!'

        do_action(callback);
