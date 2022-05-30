import pandas as pd

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

    file_extension = file_name.split('.')[1]

    if file_extension == "csv":
        file_data = pd.read_csv(file_name)
    else:
        file_data = pd.read_excel(file_name);
        
    # print(file)
    return file_data