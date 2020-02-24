
from __future__ import print_function
import os
import cv2
import time
import requests
import json
from datetime import datetime
from flask import Flask, jsonify ,request,Response,send_file,render_template
import base64
from flask_cors import CORS
from flask_cors import cross_origin
import re
from random import seed
from random import random
import threading

Thumb_Nail = os.path.join('static', 'images')

app = Flask(__name__)
app.config['SECRET_KEY'] = 'vnkdjnfjknfl1232#'
app.config['THUMB_NAIL'] = Thumb_Nail
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})


@app.route('/videos',methods=['post'])
@cross_origin()
def listVideos():
    data =[]
    try:
        for fileName in os.listdir("./images"):
            fileorfolder = fileName.split(".")
            print(fileorfolder)
            if len(fileorfolder) == 1:
                #its folder name
                for matrixFileName in os.listdir("./images/"+fileName):
                    dataObj = {}
                    dataObj['filepath'] = "images/"+fileName+"/"+matrixFileName
                    dataObj['default'] = 0
                    dataObj['foldername'] = fileName
                    data.append(dataObj)
            else:
                #its image
                # cap = cv2.VideoCapture("./demo_video_clips/"+fileName)
                dataObj = {}
                dataObj['filepath'] = "images/"+fileName
                dataObj['default'] = 1
                data.append(dataObj)
        
        status={"status":200,"data":data}
    except  Exception as e:
        print(e)
        status={"status":500,"result":str(e)}
    return jsonify(status)

@app.route('/images/<imagename>',methods=['get'])
def sendImage(imagename):
    full_filename = "images/"+imagename
    return send_file(full_filename)

@app.route('/images/<foldername>/<imagename>',methods=['get'])
def sendFolderImage(foldername,imagename):
    full_filename = "images/"+foldername+"/"+imagename
    return send_file(full_filename)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5004,debug=True)