from flask import (request, jsonify)
from project import app
from werkzeug.exceptions import NotAcceptable
import pandas as pd
import matplotlib.pyplot as plt
import glob

from starlette import status

from project.utils import helper_functions
from project.utils import constants

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
    UPLOAD_FOLDER = constants.UPLOAD_FOLDER

    if "file" in request.files:
        uploaded_file = request.files["file"]

        if helper_functions.allowed_file(uploaded_file):
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
    filename = request.args.get("filename", default = "", type = str)

    if not filename:
        # return {
        #     "status": status.HTTP_400_BAD_REQUEST,
        #     "message": "filename is required"
        # }
        raise NotAcceptable("filename is required")

    data = helper_functions.read_excel_file(constants.UPLOAD_FOLDER + filename);
    
    return {
        "status": status.HTTP_200_OK,
        "headers": data.columns.tolist()
    }


@app.route("/get_all_uploaded_files", methods=["GET", "POST"])
def get_all_uploaded_files():
    """
    get all uploaded excel files
    """
    UPLOAD_FOLDER = constants.UPLOAD_FOLDER_STAR
    all_files = [f.split("\\")[1] for f in glob.glob(UPLOAD_FOLDER)]

    all_files = [f for f in all_files if f.endswith(".csv") or f.endswith(".xlsx")] # return excel only files
    return {
        "status": status.HTTP_200_OK,
        "uploaded_files": all_files
    }


@app.route("/get_column_content", methods=["GET", "POST"])
def get_column_content():
    """
    get content of given column of a file
    """
    params = ["file_name", "column_name"]
    file_name = request.args.get("file_name", default = "", type = str)
    column_name = request.args.get("column_name", default = "", type = str)

    # for param in params:
    #     if param == "":
    #         return {
    #             "status": status.HTTP_400_BAD_REQUEST,
    #             "message": '{} is required'.format(param)
    #         }

    df = helper_functions.read_excel_file(constants.UPLOAD_FOLDER + file_name)
    
    return {
        "status": status.HTTP_200_OK,
        "content": df[column_name].tolist()
    }

@app.route("/get_bar_graph", methods=["GET", "POST"])
def get_bar_graph():
    """
    get bar graph
    """

    params = ["file_name", "column_one_name", "column_two_name"]
    file_name = request.args.get("file_name", default = "", type = str)
    x_values = request.args.get("x_values", default = "", type = str)
    y_values = request.args.get("y_values", default = "", type = str)

    plt.bar(x_values, y_values)