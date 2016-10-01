from config import *
from flask import Flask, request
from flask import redirect, url_for
from flask import send_from_directory, render_template
from flask import request

## Configuring the axpp
app = Flask(__name__)
app.debug=True

## URL Building;
@app.route('/', methods=['GET','POST'])
def hello_world():
    if request.method =='GET':
        print HOME
        return render_template('pages/home/index.html')
    else:
        def callback():
            return 'received!'

        do_action(callback);

if __name__ == 'main':
    app.run()
