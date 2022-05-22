from flask import (request, jsonify)
from project import app
from werkzeug.exceptions import NotAcceptable
import pandas as pd

from starlette import status

@app.route("/", methods=["GET"])
def index():
    """
    index route
    """
    return "Just testing"


@app.route("/upload_file", methods=["POST"])
def upload_file():
    """
    upload file route
    """
    UPLOAD_FOLDER = "uploads/"

    if "file" in request.files:
        uploaded_file = request.files["file"]

        if allowed_file(uploaded_file):
            # save file and return success response
            uploaded_file.save(UPLOAD_FOLDER + uploaded_file.filename)
            return {
                "status": status.HTTP_201_CREATED,
                "message": f'File {uploaded_file.filename} uploaded successfully',
                "filename": uploaded_file.filename,
                "filepath": UPLOAD_FOLDER + uploaded_file.filename
            }
        else:
            # return {
            #     "status": status.HTTP_406_NOT_ACCEPTABLE,
            #     "message": "File type not acceptable. Only excel files(xlsx, csv) are allowed"
            # }
            raise NotAcceptable("File type not acceptable. Only excel files(xlsx, csv) are allowed")
    else:
        return {
            "status": status.HTTP_204_NO_CONTENT,
            "message": "No file uploaded"
        }


@app.route("/get_file_headers", methods=["GET", "POST"])
def get_file_headers():
    """
    get all headers
    """
    UPLOAD_FOLDER = "uploads/"

    data = read_excel_file(UPLOAD_FOLDER + 'toJon.csv');
    
    return {
        "status": status.HTTP_200_OK,
        "headers": data.columns.tolist()
    }



# helper functions
def allowed_file(uploaded_file):
    """
    check if uploaded file is allowed
    """
    ALLOWED_EXTENSIONS = ["csv", "xlsx"]

    file_extension = uploaded_file.filename.split('.')[1]
    if file_extension in ALLOWED_EXTENSIONS:
        return True

def read_excel_file(file_name):
    """
    read excel file
    """
    file_data = pd.read_csv(file_name);
    # print(file)
    return file_data