import os
from flask import Flask
from flask_cors import CORS #comment this on deployment
from dotenv import load_dotenv

app = Flask(__name__)
CORS(app)

load_dotenv()
from project import routes

app.config["SECRET_KEY"] = os.getenv("FLASK_SECRET_KEY")